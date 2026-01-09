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
		'idperiodo' => array("leyenda" => "Periodo", "tipo" => "entero", "nulo" => 0),
		'tipo' => array("leyenda" => "Tipo", "tipo" => "texto", "nulo" => 0),
	);
	
	$error_post = 0;
	$reportes_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $reportes_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$reportes_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($reportes_post[$key])){ 
				$validacion = validarData($reportes_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$reportes_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$metas_al_global = array();
			
			$periodoClass = new TablaJSON("periodo");
			$actorClass = new TablaJSON("actor");
			$capturaClass = new TablaJSON("captura");
			$revisionClass = new TablaJSON("revision");
			$indicadorClass = new TablaJSON("indicador");
			$lineaClass = new TablaJSON("linea");
			$elementoClass = new TablaJSON("elemento");
			
			$tipo = NULL;
			if($reportes_data["tipo"] == "lineas"){
				$tipo = 'linea';
			} else if($reportes_data["tipo"] == "indicadores"){
				$tipo = 'captura';
			}
			
			$periodo = $periodoClass->getTablaJSONID($reportes_data["idperiodo"]);
			if(is_array($periodo) and !empty($periodo)){ 
				$periodo["idperiodo"];
				$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);
				
				$municipios = json_decode($actorClass->municipios, true);
				
				$actores = $actorClass->getTablaJSONs(" AND activo = 1 ", " CAST(JSON_UNQUOTE(JSON_EXTRACT(actor_data, '$.actor')) AS CHAR) ASC ");
				foreach($actores as $keyActor => $actor){
					$actores[$keyActor]['actor_data'] = json_decode($actores[$keyActor]['actor_data'], true);
					$data = $actores[$keyActor]['actor_data'];
					$municipio = false;
					$catalogos = false;
					if(isset($data["municipios"]) and isset($data["municipios"]["v"]) and count($data["municipios"]["v"]) > 0 and $data["municipios"]["v"][0] == 1){
						$municipio = true;
					}
					if(isset($data["catalogos"]) and isset($data["catalogos"]["v"]) and count($data["catalogos"]["v"]) > 0 and $data["catalogos"]["v"][0] == 1){
						$catalogos = true;
					}
					$actores[$keyActor]["municipios"] = $municipio;
					$actores[$keyActor]["catalogos"] = $catalogos;
					
					
					if($municipio){
						$actores[$keyActor]['captura'] = array();
						$actores[$keyActor]['revision'] = array();
						
						foreach($municipios as $llave => $item){
							/* captura */
							$captura = $capturaClass->getTablaJSONUnique(
								" 
									AND captura = '".$tipo."'
									AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$actor['idactor']."
									AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"".$item["id"]."\" 
									AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$reportes_data["idperiodo"]."
									AND activo = 1 
								"
							);	
							if(is_array($captura) and !empty($captura)){ 
								
								$captura['captura_data'] = json_decode($captura['captura_data'], true);
								$actores[$keyActor]['captura'][$item["id"]] = array(
									"municipio" => $item["municipio"],
									"captura" => $captura
								);
							}
							
							/* revision */
							$revision = $revisionClass->getTablaJSONUnique(
								" 
									AND revision = '".$tipo."'
									AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor')) = ".$actor['idactor']."
									AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_municipio')) = \"".$item["id"]."\" 
									AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$reportes_data["idperiodo"]."
									AND activo = 1 
								"
							);
							if(is_array($revision) and !empty($revision)){ 
								$revision['revision_data'] = json_decode($revision['revision_data'], true);
								$actores[$keyActor]['revision'][$item["id"]] = array(
									"municipio" => $item["municipio"],
									"revision" => $revision
								);
							}
						}
					} else if($catalogos){
						
						$actores[$keyActor]['captura'] = array();
						$actores[$keyActor]['revision'] = array();
						
						$elementos = $elementoClass->getTablaJSONs(" 
							AND activo = 1 
							AND JSON_UNQUOTE(JSON_EXTRACT(elemento_data, '$.catalogo')) = ".$data["catalogo_pertenece"]."
						", " CAST(JSON_UNQUOTE(JSON_EXTRACT(elemento_data, '$.elemento')) AS CHAR) ASC ");
						
						foreach($elementos as $llave => $item){
							
							$item['elemento_data'] = json_decode($item['elemento_data'], true);
							/* captura */
							$captura = $capturaClass->getTablaJSONUnique(
								" 
									AND captura = '".$tipo."'
									AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$actor['idactor']."
									AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"null\" 
									AND (
										JSON_EXTRACT(captura_data, '$.actor_catalogo') IS NOT NULL 
										AND JSON_EXTRACT(captura_data, '$.actor_elemento') IS NOT NULL
										AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_catalogo')) = \"".$data["catalogo_pertenece"]."\"
										AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_elemento')) = \"".$item["idelemento"]."\"
									)
									AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$reportes_data["idperiodo"]."
									AND activo = 1 
								"
							);	
							//if(is_array($captura) and !empty($captura)){ 
								if(is_array($captura) and !empty($captura)){ 
									$captura['captura_data'] = json_decode($captura['captura_data'], true);
								}
								$actores[$keyActor]['captura'][$item["idelemento"]] = array(
									"idcatalogo" => $data["catalogo_pertenece"],
									"idelemento" => $item["idelemento"],
									"elemento" => $item['elemento_data']["elemento"],
									"captura" => (is_array($captura) and !empty($captura))?$captura:NULL
								);
							//}
							
							/* revision */
							$revision = $revisionClass->getTablaJSONUnique(
								" 
									AND revision = '".$tipo."'
									AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor')) = ".$actor['idactor']."
									AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_municipio')) = \"null\" 
									AND (
										JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NOT NULL 
										AND JSON_EXTRACT(revision_data, '$.actor_elemento') IS NOT NULL
										AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_catalogo')) = \"".$data["catalogo_pertenece"]."\"
										AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_elemento')) = \"".$item["idelemento"]."\"
									)
									AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$reportes_data["idperiodo"]."
									AND activo = 1 
								"
							);
							//if(is_array($revision) and !empty($revision)){ 
								if(is_array($revision) and !empty($revision)){ 
									$revision['revision_data'] = json_decode($revision['revision_data'], true);
								}
								$actores[$keyActor]['revision'][$item["idelemento"]] = array(
									"idcatalogo" => $data["catalogo_pertenece"],
									"idelemento" => $item["idelemento"],
									"elemento" => $item['elemento_data']["elemento"],
									"revision" => (is_array($revision) and !empty($revision))?$revision:NULL
								);
							//}
						}
						
					} else { 
						/*
						$actores[$keyActor]['captura'] = NULL;
						$actores[$keyActor]['revision'] = NULL;
						*/
						/* captura */
						$captura = $capturaClass->getTablaJSONUnique(
							" 
								AND captura = '".$tipo."'
								AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$actor['idactor']."
								AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"null\" 
								AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$reportes_data["idperiodo"]."
								AND activo = 1 
							"
						);
						if(is_array($captura) and !empty($captura)){ 
							$captura['captura_data'] = json_decode($captura['captura_data'], true);
							$actores[$keyActor]['captura'] = $captura;
						}
						
						/* revision */
						$revision = $revisionClass->getTablaJSONUnique(
							" 
								AND revision = '".$tipo."'
								AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor')) = ".$actor['idactor']."
								AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_municipio')) = \"null\" 
								AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$reportes_data["idperiodo"]."
								AND activo = 1 
							"
						);
						if(is_array($revision) and !empty($revision)){ 
							$revision['revision_data'] = json_decode($revision['revision_data'], true);
							$actores[$keyActor]['revision'] = $revision;
						}
						
					}
					
					$respuesta = lineas_indicadores_actor($actor['idactor']);
					
					$actores[$keyActor]['lineas'] = $respuesta["lineas"];
					$actores[$keyActor]['indicadores'] = $respuesta["indicadores"];
					
					foreach($respuesta["metas_al_arr"] as $llave3 => $meta){
						if(!isset($metas_al_global[$llave3])){
							$metas_al_global[$llave3] = $meta;
						}	
					}
					
					unset($arreglos['encontro']);
					
					unset($arreglos['lineas']);
					unset($arreglos['ejes']);
					unset($arreglos['plazos']);
					
					unset($arreglos['indicadores']);
					unset($arreglos['metas_al']);
					unset($arreglos['arbol']);
					
				}
				$arreglos["actores"] = $actores;
				$arreglos["metas_al"] = $metas_al_global;
				
			}
			$arreglos['ok'] = 1; 
		} else {
			$arreglos['ok'] = -7; 
			$arreglos['error'] = $error; 
		}	
	} else { $arreglos['ok'] = -3; $arreglos['paso'] = 1; }
} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);

function lineas_indicadores_actor($idactor){
	$arreglos = array();
	
	require "part_preguntas.php";
	
	return array(
		'lineas' => $lineas,
		'indicadores' => $indicadores,
		'metas_al_arr' => $metas_al_arr,
	);
}
?>
