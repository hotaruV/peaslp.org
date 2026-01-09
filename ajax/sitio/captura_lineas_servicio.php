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
		'idlinea' => array("leyenda" => "Línea de acción", "tipo" => "entero", "nulo" => 0),
		'idperiodo' => array("leyenda" => "Periodo", "tipo" => "entero", "nulo" => 0),
		'cumplio' => array("leyenda" => "Se cumplio", "tipo" => "radio", "nulo" => 0),
		'descripcion' => array("leyenda" => "Descripción", "tipo" => "texto", "nulo" => 1),
		'evidencia' => array("leyenda" => "Evidencia", "tipo" => "archivo", "nulo" => 1),
	);
	
	$error_post = 0;
	$captura_lineas_servicio_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $captura_lineas_servicio_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$captura_lineas_servicio_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($captura_lineas_servicio_post[$key])){ 
				$validacion = validarData($captura_lineas_servicio_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$captura_lineas_servicio_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$periodoClass = new TablaJSON("periodo");
			$periodo = $periodoClass->getTablaJSONID($captura_lineas_servicio_data["idperiodo"]);

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
					if(!isset($usuarioT["usuario_data"]["actor_catalogo"])){
						$usuarioT["usuario_data"]["actor_catalogo"] = "null";
					}
					if(!isset($usuarioT["usuario_data"]["actor_elemento"])){
						$usuarioT["usuario_data"]["actor_elemento"] = "null";
					}
					
					$usuarioTMunicipio = " 
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"".$usuarioT["usuario_data"]["actor_municipio"]."\" 
						AND (
							(
								JSON_EXTRACT(captura_data, '$.actor_catalogo') IS NULL AND
								\"".$usuarioT["usuario_data"]["actor_catalogo"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(captura_data, '$.actor_catalogo') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_catalogo')) = \"".$usuarioT["usuario_data"]["actor_catalogo"]."\"
							)
						)
						AND (
							(
								JSON_EXTRACT(captura_data, '$.actor_elemento') IS NULL AND
								\"".$usuarioT["usuario_data"]["actor_elemento"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(captura_data, '$.actor_elemento') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_elemento')) = \"".$usuarioT["usuario_data"]["actor_elemento"]."\"
							)
						)
					";
					
					$default = array(
						'creo' => $usuarioT['idusuario'],
						'modifico' => array(
						
						),
						'lineas' => array(
							
						),
						'fecha' => date('Y-m-d H:i:s'),
						'modificacion' => NULL,
						'activo' => true,
					);

					$capturaClass = new TablaJSON("captura");
					$captura = $capturaClass->getTablaJSONUnique(
						" 
							AND captura = 'linea'
							AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
							".$usuarioTMunicipio."
							AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$captura_lineas_servicio_data["idperiodo"]."
							AND activo = 1 
						"
					);

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

						$captura["captura_data"]["lineas"][$captura_lineas_servicio_data["idlinea"]] = array(
							"cumplio" => $captura_lineas_servicio_data["cumplio"],
							"descripcion" => $captura_lineas_servicio_data["descripcion"],
							"evidencia" => $captura_lineas_servicio_data["evidencia"],
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
						$captura_data = array(
							"periodo" => $captura_lineas_servicio_data["idperiodo"],
							"actor" => $usuarioT["usuario_data"]["actor"],
							"actor_municipio" => (($usuarioT["usuario_data"]["actor_municipio"] != "null")?$usuarioT["usuario_data"]["actor_municipio"]:NULL),
							"actor_catalogo" => (($usuarioT["usuario_data"]["actor_catalogo"] != "null")?$usuarioT["usuario_data"]["actor_catalogo"]:NULL),
							"actor_elemento" => (($usuarioT["usuario_data"]["actor_elemento"] != "null")?$usuarioT["usuario_data"]["actor_elemento"]:NULL),
						);
						foreach($default as $key => $valor){ $captura_data[$key] = $valor; }
						
						/*
						-------------------------------------------------------
						*/
						$encontro = false;
						$encontro_captura = false;
						
						$periodos = $periodoClass->getTablaJSONs(" AND activo = 1 ", " JSON_UNQUOTE(JSON_EXTRACT(periodo_data, '$.termina')) DESC ");
						foreach($periodos as $key => $periodo){
							if($periodo['idperiodo'] == $captura_lineas_servicio_data["idperiodo"]){
								$encontro = true;
							} else if($encontro == true and $encontro_captura == false){	
								$captura = $capturaClass->getTablaJSONUnique(
									" 
										AND captura = 'linea'
										AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
										".$usuarioTMunicipio."
										AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$periodo['idperiodo']."
										AND activo = 1 
									"
								);
								if(is_array($captura) and !empty($captura)){ 
									$encontro_captura = true;
									$captura['captura_data'] = json_decode($captura['captura_data'], true);
									$captura_data["lineas"] = $captura['captura_data']["lineas"];
								}
							}
						}
						/*
						-------------------------------------------------------
						*/
						
						//insertar
						$captura_data["lineas"][$captura_lineas_servicio_data["idlinea"]] = array(
							"cumplio" => $captura_lineas_servicio_data["cumplio"],
							"descripcion" => $captura_lineas_servicio_data["descripcion"],
							"evidencia" => $captura_lineas_servicio_data["evidencia"],
							"quien" => array(
								"usuario" => $usuarioT['idusuario'], 
								"fecha" => date('Y-m-d H:i:s')
							)
						);
						
						$resultado = $capturaClass->insertTablaJSON("linea", json_encode($captura_data));
						if($resultado > 0){		
							
						}
					}
					if($resultado > 0){		
						
						$arreglos['id'] = $resultado;
						$arreglos['ok'] = 1;
						
						/* validar si existe ya una revisión, para cambiar su estatus */
						$revisionClass = new TablaJSON("revision");
						$revision = $revisionClass->getTablaJSONUnique(
							" 
								AND revision = 'linea'
								AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
								AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_municipio')) = \"".$usuarioT["usuario_data"]["actor_municipio"]."\" 
								
								AND (
									(
										JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NULL AND
										\"".$usuarioT["usuario_data"]["actor_catalogo"]."\" = \"null\"
									)
									OR (
										JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NOT NULL AND
										JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_catalogo')) = \"".$usuarioT["usuario_data"]["actor_catalogo"]."\"
									)
								)
								AND (
									(
										JSON_EXTRACT(revision_data, '$.actor_elemento') IS NULL AND
										\"".$usuarioT["usuario_data"]["actor_elemento"]."\" = \"null\"
									)
									OR (
										JSON_EXTRACT(revision_data, '$.actor_elemento') IS NOT NULL AND
										JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_elemento')) = \"".$usuarioT["usuario_data"]["actor_elemento"]."\"
									)
								)
								
								AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$captura_lineas_servicio_data["idperiodo"]."
								AND activo = 1 
							"
						);
		
						if(is_array($revision) and !empty($revision)){ 
							$revision["revision_data"] = json_decode($revision["revision_data"], true);
							if (json_last_error() === JSON_ERROR_NONE) { }
							else { $revision["revision_data"] = array(); }
							
							if(isset($revision["revision_data"]["lineas"][$captura_lineas_servicio_data["idlinea"]])){
								$revision["revision_data"]["lineas"][$captura_lineas_servicio_data["idlinea"]]['actual'] = array(
									"aprobo" => array(
										"v" => array("3"),
										"e" => array()
									),
									"retroalimentacion" => NULL,
									"quien" => array(
										"usuario" => $usuario['idusuario'], 
										"fecha" => date('Y-m-d H:i:s')
									)
								);
								$revision["revision_data"]["lineas"][$captura_lineas_servicio_data["idlinea"]]['historico'][] = $revision["revision_data"]["lineas"][$captura_lineas_servicio_data["idlinea"]]['actual'];
			
								$revision["revision_data"]['modifico'][] = array( 
									'usuario' => $usuario['idusuario'], 
									'fecha' => date('Y-m-d H:i:s')
								);
								$revision["revision_data"]['modificacion'] = date('Y-m-d H:i:s');
			
								$resultado = $revisionClass->updateTablaJSON($revision['idrevision'], $revision['revision'], json_encode($revision["revision_data"]));
								if($resultado > 0){ 
									/* enviar correo electrónico */
									
								}  
								$arreglos["upd_revision"] = $resultado;
							}
							
						}
						/* ---------------------------------------------------------- */

						$capturaClass = new TablaJSON("captura");
						$captura = $capturaClass->getTablaJSONUnique(
							" 
								AND captura = 'linea'
								AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$usuarioT["usuario_data"]["actor"]."
								".$usuarioTMunicipio."
								AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$captura_lineas_servicio_data["idperiodo"]."
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
