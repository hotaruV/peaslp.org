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
		'idindicador' => array("leyenda" => "Indicador", "tipo" => "entero", "nulo" => 0),
		'idperiodo' => array("leyenda" => "Periodo", "tipo" => "entero", "nulo" => 0),
		'cumplio' => array("leyenda" => "Se cumplio con el indicador", "tipo" => "radio", "nulo" => 0),
		'descripcion' => array("leyenda" => "Descripción", "tipo" => "texto", "nulo" => 0),
		'evidencia' => array("leyenda" => "Evidencia", "tipo" => "archivo", "nulo" => 0),
	);
	
	$error_post = 0;
	$capturar_indicador_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $capturar_indicador_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$capturar_indicador_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($capturar_indicador_post[$key])){ 
				$validacion = validarData($capturar_indicador_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$capturar_indicador_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$periodoClass = new TablaJSON("periodo");
			$periodo = $periodoClass->getTablaJSONID($capturar_indicador_data["idperiodo"]);

			if(is_array($periodo) and !empty($periodo)){ 
				$periodo["idperiodo"];
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
					
					$default = array(
						'creo' => $usuarioT['idusuario'],
						'modifico' => array(
						
						),
						'indicadores' => array(
							
						),
						'fecha' => date('Y-m-d H:i:s'),
						'modificacion' => NULL,
						'activo' => true,
					);


					$capturaClass = new TablaJSON("captura");
					$captura = $capturaClass->getTablaJSONUnique(
						" 
							AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
							".$usuarioTMunicipio."
							AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$capturar_indicador_data["idperiodo"]."
							AND activo = 1 
						"
					);
					/* AND JSON_EXISTS(captura_data, '$.indicadores.".$capturar_indicador_data["idindicador"]."') = 1 */
					if(is_array($captura) and !empty($captura)){ 
						$arreglos['upd'] = 1;

						$captura["captura_data"] = json_decode($captura["captura_data"], true);
						if (json_last_error() === JSON_ERROR_NONE) { }
						else { $captura["captura_data"] = array(); }
						
						foreach($default as $llave => $var){ 
							if(!isset($captura["captura_data"][$llave])){ 
								$captura["captura_data"][$llave] = $var; 
							}
						}

						$captura["captura_data"]["indicadores"][$capturar_indicador_data["idindicador"]] = array(
							"cumplio" => $capturar_indicador_data["cumplio"],
							"descripcion" => $capturar_indicador_data["descripcion"],
							"evidencia" => $capturar_indicador_data["evidencia"],
							"quien" => array(
								"usuario" => $usuarioT['idusuario'], 
								"fecha" => date('Y-m-d H:i:s')
							)
						);

						$captura["captura_data"]['modifico'][] = array( 
							'usuario' => $usuarioT['idusuario'], 
							'fecha' => date('Y-m-d H:i:s')
						);
						$captura["captura_data"]['modificacion'] = date('Y-m-d H:i:s');

						$resultado = $capturaClass->updateTablaJSON($captura['idcaptura'], $captura['captura'], json_encode($captura["captura_data"]));
						if($resultado > 0){ 
							$arreglos['msj'] = $resultado;
							$resultado = $captura['idcaptura']; 
						} 

					} else {
						$arreglos['ins'] = 1;

						//insertar
						$captura_data = array(
							"periodo" => $capturar_indicador_data["idperiodo"],
							"actor" => $usuarioT["usuario_data"]["actor"],
							"actor_municipio" => (($usuarioT["usuario_data"]["actor_municipio"] != "null")?$usuarioT["usuario_data"]["actor_municipio"]:NULL)
						);
						
						foreach($default as $key => $valor){ $captura_data[$key] = $valor; }

						$captura_data["indicadores"][$capturar_indicador_data["idindicador"]] = array(
							"cumplio" => $capturar_indicador_data["cumplio"],
							"descripcion" => $capturar_indicador_data["descripcion"],
							"evidencia" => $capturar_indicador_data["evidencia"],
							"quien" => array(
								"usuario" => $usuarioT['idusuario'], 
								"fecha" => date('Y-m-d H:i:s')
							)
						);
						
						$resultado = $capturaClass->insertTablaJSON("captura", json_encode($captura_data));
						if($resultado > 0){		
							
						}
					}
					if($resultado > 0){		
						
						$arreglos['ok'] = 1;

						$capturaClass = new TablaJSON("captura");
						$captura = $capturaClass->getTablaJSONUnique(
							" 
								AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
								".$usuarioTMunicipio."
								AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$capturar_indicador_data["idperiodo"]."
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

					} else {
						$arreglos['ok'] = $resultado;
						$arreglos["err"] = 3;
					}
				} else {
					$arreglos["ok"] = 0;
					$arreglos["err"] = 2;
				}
			} else {
				$arreglos["ok"] = 0;
				$arreglos["err"] = 1;
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
