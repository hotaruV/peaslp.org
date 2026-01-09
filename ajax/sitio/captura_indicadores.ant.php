<?php
define('APPLICATION', true);
require_once "../../lib/class/Validar.php";
require_once "../../lib/class/Util.php";
require_once "../../lib/class/ConectarDB.php";

require_once "../../part/config.php";
require_once "../../part/gnl/variables.php";
require_once "../../part/gnl/idioma.php";

$idioma = "es";
$url_lang = "";

require_once "../../lib/model/Usuario.php";
require_once "../../lib/model/UsuarioDispositivo.php";
require_once "../../lib/model/UsuarioDispositivoAcceso.php";
require_once "../../lib/model/UsuarioIngreso.php";

$usuarioClass = new Usuario();
$usuarioDispositivoClass = new UsuarioDispositivo();
$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();
$usuarioIngresoClass = new UsuarioIngreso();

require_once "../../part/gnl/login/verificar_login_ajax.php"; 
require_once "../../part/gnl/login/verificar_login_ingreso.php";
require_once "../../part/gnl/login/verificar_login_ajax_sesion.php";

header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');
$arreglos = array();

if(
	isset($_POST) and
	isset($_POST['token']) 
){
	
	require_once "../../lib/model/TablaJSON.php";

	$vars = array(
		'periodo' => array("leyenda" => "Periodo", "tipo" => "entero", "nulo" => 0),
	);
	
	$error_post = 0;
	$captura_indicadores_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $captura_indicadores_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$captura_indicadores_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($captura_indicadores_post[$key])){ 
				$validacion = validarData($captura_indicadores_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$captura_indicadores_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$periodoClass = new TablaJSON("periodo");
			$periodo = $periodoClass->getTablaJSONID($captura_indicadores_data["periodo"]);

			if(is_array($periodo) and !empty($periodo)){ 

				$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);

				$usuarioTClass = new TablaJSON("usuario");
				$usuarioT = $usuarioTClass->getTablaJSONUnique(
					" 
						AND perfil = 4
						AND idusuario = ".$usuario['idusuario']."
						AND activo = 1 
					"
				);
				if(is_array($usuarioT) and !empty($usuarioT)){ 
					$usuarioT["usuario_data"] = json_decode($usuarioT["usuario_data"], true);
					if(!isset($usuarioT["usuario_data"]["actor_municipio"])){
						$usuarioT["usuario_data"]["actor_municipio"] = "null";
					}
					$usuarioTMunicipio = " AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"".$usuarioT["usuario_data"]["actor_municipio"]."\" ";
					
					$capturaClass = new TablaJSON("captura");
					$captura = $capturaClass->getTablaJSONUnique(
						" 
							AND captura = 'captura'
							AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
							".$usuarioTMunicipio."
							AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$captura_indicadores_data["periodo"]."
							AND activo = 1 
						"
					);
					
					
					
					if(is_array($captura) and !empty($captura)){ 
						$captura['captura_data'] = json_decode($captura['captura_data'], true);
						$arreglos["captura"] = $captura;
					} else {
						//copiar la captura del periodo anterior , si es que existe.
						$periodos = $periodoClass->getTablaJSONs(
							" 
								AND activo = 1 
							",
							" 
								JSON_UNQUOTE(JSON_EXTRACT(periodo_data, '$.termina')) DESC 
							"
						);
						$encontro = false;
						$encontro_captura = false;

						$arreglos["periodos"] = $periodos;
						foreach($periodos as $key => $periodo){
							if($periodo['idperiodo'] == $captura_indicadores_data["periodo"]){
								$encontro = true;
								$arreglos["encontro"] = $encontro;
							} else if($encontro == true and $encontro_captura == false){
								
								$captura = $capturaClass->getTablaJSONUnique(
									" 
										AND captura = 'captura'
										AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
										".$usuarioTMunicipio."
										AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$periodo['idperiodo']."
										AND activo = 1 
									"
								);
								if(is_array($captura) and !empty($captura)){ 
									$encontro_captura = true;
									
									$arreglos["idperiodo"] = $periodo['idperiodo'];
									$arreglos["periodo"] = $periodo['periodo'];
									$arreglos["encontro_captura"] = $encontro_captura;
									$captura['captura_data'] = json_decode($captura['captura_data'], true);
									$captura['captura_data']["periodo"] = $captura_indicadores_data["periodo"];
									
									$resultado = $capturaClass->insertTablaJSON("captura", json_encode($captura['captura_data']));
									$arreglos["crear"] = $resultado;
									$captura = $capturaClass->getTablaJSONUnique(
										" 
											AND captura = 'captura'	
											AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
											".$usuarioTMunicipio."
											AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$captura_indicadores_data["periodo"]."
											AND activo = 1 
										"
									);
									if(is_array($captura) and !empty($captura)){ 
										$captura['captura_data'] = json_decode($captura['captura_data'], true);
										$arreglos["captura"] = $captura;
									} else {
										//No hay ninguna captura realizada en este periodo por este actor
										$arreglos["err"] = 2;
									}
									break;
								} 
							}
						}
					}

					$idactor = $usuarioT["usuario_data"]["actor"];
					require_once "part_preguntas.php";
					$arreglos["ok"] = 1;

				} else {
					//No hay usuarios asigandos a este actor 
					$arreglos["ok"] = $usuarioT;
					$arreglos["err"] = 1;
				}
			} else {
				$arreglos["ok"] = 0;
			}
		} else {
			$arreglos['ok'] = -7; 
			$arreglos['error'] = $error; 
		}	
	} else { $arreglos['ok'] = -3; $arreglos['paso'] = 1; }
} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>
