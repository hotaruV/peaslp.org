<?php

define('APPLICATION', true);
require_once "../lib/class/Validar.php";
require_once "../lib/class/Util.php";
require_once "../lib/class/ConectarDB.php";

require_once "../part/config.php";
require_once "../part/gnl/variables.php";

require_once "../part/gnl/idioma.php";

$idioma = "es";
$url_lang = "";

require_once "../lib/model/Usuario.php";
require_once "../lib/model/UsuarioDispositivo.php";
require_once "../lib/model/UsuarioDispositivoAcceso.php";
require_once "../lib/model/UsuarioIngreso.php";

$usuarioClass = new Usuario();
$usuarioDispositivoClass = new UsuarioDispositivo();
$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();
$usuarioIngresoClass = new UsuarioIngreso();

require_once "../part/gnl/login/verificar_login_get.php";
require_once "../part/gnl/login/verificar_login_ingreso.php";
require_once "../part/gnl/login/verificar_login_ajax_sesion.php";

require_once "../lib/model/TablaJSON.php";
if (!$usuario_logeado) { 
	exit;
} else if($usuario_perfil != 1){
	exit;
}

if(isset($_GET) and isset($_GET['t']) and trim(strip_tags($_GET['t'])) == $tokenPublic){
	
	$arreglos = array();
	
	require_once "../lib/model/TablaJSON.php";
	
	$idperiodo = $_GET['idperiodo'];
	$idtipo = $_GET['idtipo'];
	
	$archivo = 'reporte.csv';
	header('Content-Type: application/csv; charset=UTF-8');
	header( 'Content-Disposition: attachment; filename="' . $archivo . '";' );
	
	$fp = fopen( 'php://output', 'w' );
	
	$txt_renglon = array();
	
	$txt_renglon[] = utf8_decode('Periodo');
	$txt_renglon[] = utf8_decode('Fecha inicial');
	$txt_renglon[] = utf8_decode('Fecha final');
	$txt_renglon[] = utf8_decode('Actor responsable');
	$txt_renglon[] = utf8_decode('Actor específico');
	
	$txt_renglon[] = utf8_decode('Eje');
	$txt_renglon[] = utf8_decode('Prioridad');
	$txt_renglon[] = utf8_decode('Plazo');
	$txt_renglon[] = utf8_decode('Estrategia');
	
	if($idtipo == "lineas"){
		$txt_renglon[] = utf8_decode('Línea de acción'); 
		$txt_renglon[] = utf8_decode('Anexo ATA'); 
		
	} else if($idtipo == "indicadores"){
		$txt_renglon[] = utf8_decode('Indicador'); 
		$txt_renglon[] = utf8_decode('Meta'); 
		$txt_renglon[] = utf8_decode('Meta al'); 
		$txt_renglon[] = utf8_decode('Fuente de verificación'); 
		$txt_renglon[] = utf8_decode('Método de cálculo'); 
		/*
		$txt_renglon[] = utf8_decode('Estatus'); //iniciado / no iniciado / terminado
		$txt_renglon[] = utf8_decode('Avance'); // porcentaje de avance
		$txt_renglon[] = utf8_decode('Detalle'); // porcentaje de avance
		*/
	}
	
	$txt_renglon[] = utf8_decode('Estatus'); //No se ha iniciado / En planeación / En proceso / Finalizado
	$txt_renglon[] = utf8_decode('Porcentaje de avance'); // porcentaje de avance
	$txt_renglon[] = utf8_decode('Detalle'); // 
	$txt_renglon[] = utf8_decode('Evidencia'); // 
	
	$txt_renglon[] = utf8_decode('Aprobado'); //aprobado / no aprobado
	$txt_renglon[] = utf8_decode('Retroalimentacion'); 
	
	$myfile = fputcsv($fp, $txt_renglon);

	$metas_al_global = array();
	
	$periodoClass = new TablaJSON("periodo");
	$actorClass = new TablaJSON("actor");
	$capturaClass = new TablaJSON("captura");
	$revisionClass = new TablaJSON("revision");
	$indicadorClass = new TablaJSON("indicador");
	$lineaClass = new TablaJSON("linea");
	$elementoClass = new TablaJSON("elemento");
	
	$tipo = NULL;
	if($idtipo == "lineas"){
		$tipo = 'linea';
	} else if($idtipo == "indicadores"){
		$tipo = 'captura';
	}
	
	$periodo = $periodoClass->getTablaJSONID($idperiodo);
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
			
			$respuesta = lineas_indicadores_actor($actor['idactor']);
			
			$actores[$keyActor]['lineas'] = $respuesta["lineas"];
			$actores[$keyActor]['indicadores'] = $respuesta["indicadores"];
						
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
							AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$idperiodo."
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
							AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$idperiodo."
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
							AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$idperiodo."
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
							AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$idperiodo."
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
						if($idtipo == "lineas"){
							foreach($respuesta["lineas"] as $llave => $linea){
								$txt_renglon = array();
								$txt_renglon[] = utf8_decode($periodo["periodo_data"]["periodo"]);
								$txt_renglon[] = utf8_decode($periodo["periodo_data"]["inicia"]);
								$txt_renglon[] = utf8_decode($periodo["periodo_data"]["termina"]);
								
								$txt_renglon[] = utf8_decode($data['actor']);
								$txt_renglon[] = utf8_decode($item['elemento_data']['elemento']);
								
								$txt_renglon[] = utf8_decode($linea['eje']);
								$txt_renglon[] = utf8_decode($linea['prioridad']);
								$txt_renglon[] = utf8_decode($linea['plazo']);
								$txt_renglon[] = utf8_decode($linea['estrategia']);
								
								$txt_renglon[] = utf8_decode($linea['linea_data']['linea']); 
								$txt_renglon[] = utf8_decode(isset($linea['linea_data']['anexo_ata'])?$linea['linea_data']['anexo_ata']:''); 
								
								$estatus = "Sin capturar";
								$avance = 0;
								$detalle = "";
								$evidencia = "";
								if($actores[$keyActor]['captura'][$item["idelemento"]]["captura"] != NULL){
									if(isset($actores[$keyActor]['captura'][$item["idelemento"]]["captura"]["captura_data"]["lineas"][$linea["idlinea"]])){
										$estatus = "Capturado";
										$temp = $actores[$keyActor]['captura'][$item["idelemento"]]["captura"]["captura_data"]["lineas"][$linea["idlinea"]];
										if($temp["cumplio"]["v"][0] == "1"){
											$estatus = "No se ha iniciado";
											$avance = 0;
										} else if($temp["cumplio"]["v"][0] == "2"){
											$estatus = "En planeación";
											$avance = $temp["cumplio"]["e"]["2"];
										} else if($temp["cumplio"]["v"][0] == "3"){
											$estatus = "En proceso";
											$avance = $temp["cumplio"]["e"]["3"];
										} else if($temp["cumplio"]["v"][0] == "4"){
											$estatus = "Finalizado";
											$avance = 100;
										}
										$detalle = $temp["descripcion"];
										
										$evidencia = "";
										if(isset($temp["evidencia"]) and is_array($temp["evidencia"]) and !empty($temp["evidencia"]["l"])){ foreach($temp["evidencia"]["l"] as $key2 => $documento){
											$evidencia .= ' - '.$urlSitio.'files/'.$idtipo.'/'.$temp["evidencia"]["l"][$key2].' - ';
										} }
										
										//$evidencia = $temp["evidencia"];
									}
								}
								$txt_renglon[] = utf8_decode($estatus); //No se ha iniciado / En planeación / En proceso / Finalizado
								$txt_renglon[] = utf8_decode($avance); // porcentaje de avance
								$txt_renglon[] = utf8_decode($detalle); // 
								$txt_renglon[] = utf8_decode($evidencia); // 
								
								$aprobado = "Sin evaluar";
								$retroalimentacion = "";
								if($actores[$keyActor]['revision'][$item["idelemento"]]["revision"] != NULL){
									if(isset($actores[$keyActor]['revision'][$item["idelemento"]]["revision"]["revision_data"]["lineas"][$linea["idlinea"]])){
										$temp = $actores[$keyActor]['revision'][$item["idelemento"]]["revision"]["revision_data"]["lineas"][$linea["idlinea"]];
										if($temp["actual"]["aprobo"]["v"][0] == "1"){
											$aprobado = "Sí";
										} else if($temp["actual"]["aprobo"]["v"][0] == "2"){
											$aprobado = "No";
										}
										$retroalimentacion = $temp["actual"]["retroalimentacion"];
									}
								}
								$txt_renglon[] = utf8_decode($aprobado); //aprobado / no aprobado
								$txt_renglon[] = utf8_decode($retroalimentacion); 
								
								$myfile = fputcsv($fp, $txt_renglon);		
							}
						} else if($idtipo == "indicadores"){
							foreach($respuesta["indicadores"] as $llave => $indicador){
								$txt_renglon = array();
								$txt_renglon[] = utf8_decode($periodo["periodo_data"]["periodo"]);
								$txt_renglon[] = utf8_decode($periodo["periodo_data"]["inicia"]);
								$txt_renglon[] = utf8_decode($periodo["periodo_data"]["termina"]);
								
								$txt_renglon[] = utf8_decode($data['actor']);
								$txt_renglon[] = utf8_decode($item['elemento_data']['elemento']);
								
								$txt_renglon[] = utf8_decode($indicador['eje']);
								$txt_renglon[] = utf8_decode($indicador['prioridad']);
								$txt_renglon[] = utf8_decode($indicador['plazo']);
								$txt_renglon[] = utf8_decode($indicador['estrategia']);
								
								$txt_renglon[] = utf8_decode($indicador['indicador_data']['indicador']); 
								$txt_renglon[] = utf8_decode($indicador['indicador_data']['meta']); 
								$txt_renglon[] = utf8_decode($indicador['indicador_data']['meta_al']); 
								$txt_renglon[] = utf8_decode($indicador['indicador_data']['verificacion']); 
								$txt_renglon[] = utf8_decode($indicador['indicador_data']['metodo']); 
								
								$estatus = "Sin capturar";
								$avance = 0;
								$detalle = "";
								$evidencia = "";
								if($actores[$keyActor]['captura'][$item["idelemento"]]["captura"] != NULL){
									if(isset($actores[$keyActor]['captura'][$item["idelemento"]]["captura"]["captura_data"]["indicadores"][$indicador["idindicador"]])){
										$estatus = "Capturado";
										$temp = $actores[$keyActor]['captura'][$item["idelemento"]]["captura"]["captura_data"]["indicadores"][$indicador["idindicador"]];
										if($temp["iniciado"]["v"][0] == "1"){
											$estatus = "Iniciado";
											$avance = $temp["iniciado"]["e"][1];
											if(intval($avance) > 99){ $estatus = "Terminado"; } 
										} else if($temp["iniciado"]["v"][0] == "2"){
											$estatus = "No iniciado";
											$avance = 0;
										}
										
										$detalle = $temp["avance"];
										$evidencia = "";
										if(isset($temp["evidencia"]) and is_array($temp["evidencia"]) and !empty($temp["evidencia"]["l"])){ foreach($temp["evidencia"]["l"] as $key2 => $documento){
											$evidencia .= ' - '.$urlSitio.'files/'.$idtipo.'/'.$temp["evidencia"]["l"][$key2].' - ';
										} }
									}
								}
								$txt_renglon[] = utf8_decode($estatus); //No se ha iniciado / En planeación / En proceso / Finalizado
								$txt_renglon[] = utf8_decode($avance); // porcentaje de avance
								$txt_renglon[] = utf8_decode($detalle); // 
								$txt_renglon[] = utf8_decode($evidencia); // 
								
								$aprobado = "Sin evaluar";
								$retroalimentacion = "";
								if($actores[$keyActor]['revision'][$item["idelemento"]]["revision"] != NULL){
									if(isset($actores[$keyActor]['revision'][$item["idelemento"]]["revision"]["revision_data"]["indicadores"][$indicador["idindicador"]])){
										$temp = $actores[$keyActor]['revision'][$item["idelemento"]]["revision"]["revision_data"]["indicadores"][$indicador["idindicador"]];
										if($temp["actual"]["aprobo"]["v"][0] == "1"){
											$aprobado = "Sí";
										} else if($temp["actual"]["aprobo"]["v"][0] == "2"){
											$aprobado = "No";
										}
										$retroalimentacion = $temp["actual"]["retroalimentacion"];
									}
								}
								$txt_renglon[] = utf8_decode($aprobado); //aprobado / no aprobado
								$txt_renglon[] = utf8_decode($retroalimentacion); 
								
								$myfile = fputcsv($fp, $txt_renglon);
							}
						}
					
				}
				
			} else { 
				
				$actores[$keyActor]['captura'] = NULL;
				$actores[$keyActor]['revision'] = NULL;
				
				
				/* captura */
				$captura = $capturaClass->getTablaJSONUnique(
					" 
						AND captura = '".$tipo."'
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$actor['idactor']."
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"null\" 
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$idperiodo."
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
						AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$idperiodo."
						AND activo = 1 
					"
				);
				if(is_array($revision) and !empty($revision)){ 
					$revision['revision_data'] = json_decode($revision['revision_data'], true);
					$actores[$keyActor]['revision'] = $revision;
				}
				
				if($idtipo == "lineas"){
					foreach($respuesta["lineas"] as $llave => $linea){
						$txt_renglon = array();
						$txt_renglon[] = utf8_decode($periodo["periodo_data"]["periodo"]);
						$txt_renglon[] = utf8_decode($periodo["periodo_data"]["inicia"]);
						$txt_renglon[] = utf8_decode($periodo["periodo_data"]["termina"]);
						
						$txt_renglon[] = utf8_decode($data['actor']);
						$txt_renglon[] = utf8_decode("");
						
						$txt_renglon[] = utf8_decode($linea['eje']);
						$txt_renglon[] = utf8_decode($linea['prioridad']);
						$txt_renglon[] = utf8_decode($linea['plazo']);
						$txt_renglon[] = utf8_decode($linea['estrategia']);
						
						$txt_renglon[] = utf8_decode($linea['linea_data']['linea']); 
						$txt_renglon[] = utf8_decode(isset($linea['linea_data']['anexo_ata'])?$linea['linea_data']['anexo_ata']:''); 
						
						$estatus = "Sin capturar";
						$avance = 0;
						$detalle = "";
						$evidencia = "";
						if($actores[$keyActor]['captura'] != NULL){
							if(isset($actores[$keyActor]['captura']["captura_data"]["lineas"][$linea["idlinea"]])){
								$estatus = "Capturado";
								$temp = $actores[$keyActor]['captura']["captura_data"]["lineas"][$linea["idlinea"]];
								if($temp["cumplio"]["v"][0] == "1"){
									$estatus = "No se ha iniciado";
									$avance = 0;
								} else if($temp["cumplio"]["v"][0] == "2"){
									$estatus = "En planeación";
									$avance = $temp["cumplio"]["e"]["2"];
								} else if($temp["cumplio"]["v"][0] == "3"){
									$estatus = "En proceso";
									$avance = $temp["cumplio"]["e"]["3"];
								} else if($temp["cumplio"]["v"][0] == "4"){
									$estatus = "Finalizado";
									$avance = 100;
								}
								$detalle = $temp["descripcion"];
								$evidencia = "";
								if(isset($temp["evidencia"]) and is_array($temp["evidencia"]) and !empty($temp["evidencia"]["l"])){ foreach($temp["evidencia"]["l"] as $key2 => $documento){
									$evidencia .= ' - '.$urlSitio.'files/'.$idtipo.'/'.$temp["evidencia"]["l"][$key2].' - ';
								} }
							}
						}
						$txt_renglon[] = utf8_decode($estatus); //No se ha iniciado / En planeación / En proceso / Finalizado
						$txt_renglon[] = utf8_decode($avance); // porcentaje de avance
						$txt_renglon[] = utf8_decode($detalle); // 
						$txt_renglon[] = utf8_decode($evidencia); // 
						
						$aprobado = "Sin evaluar";
						$retroalimentacion = "";
						if($actores[$keyActor]['revision'] != NULL){
							if(isset($actores[$keyActor]['revision']["revision_data"]["lineas"][$linea["idlinea"]])){
								$temp = $actores[$keyActor]['revision']["revision_data"]["lineas"][$linea["idlinea"]];
								if($temp["actual"]["aprobo"]["v"][0] == "1"){
									$aprobado = "Sí";
								} else if($temp["actual"]["aprobo"]["v"][0] == "2"){
									$aprobado = "No";
								}
								$retroalimentacion = $temp["actual"]["retroalimentacion"];
							}
						}
						$txt_renglon[] = utf8_decode($aprobado); //aprobado / no aprobado
						$txt_renglon[] = utf8_decode($retroalimentacion); 
												
						$myfile = fputcsv($fp, $txt_renglon);		
					}
				} else if($idtipo == "indicadores"){
					foreach($respuesta["indicadores"] as $llave => $indicador){
						$txt_renglon = array();
						$txt_renglon[] = utf8_decode($periodo["periodo_data"]["periodo"]);
						$txt_renglon[] = utf8_decode($periodo["periodo_data"]["inicia"]);
						$txt_renglon[] = utf8_decode($periodo["periodo_data"]["termina"]);
						
						$txt_renglon[] = utf8_decode($data['actor']);
						$txt_renglon[] = utf8_decode("");
						
						$txt_renglon[] = utf8_decode($indicador['eje']);
						$txt_renglon[] = utf8_decode($indicador['prioridad']);
						$txt_renglon[] = utf8_decode($indicador['plazo']);
						$txt_renglon[] = utf8_decode($indicador['estrategia']);
						
						$txt_renglon[] = utf8_decode($indicador['indicador_data']['indicador']); 
						$txt_renglon[] = utf8_decode($indicador['indicador_data']['meta']); 
						$txt_renglon[] = utf8_decode($indicador['indicador_data']['meta_al']); 
						$txt_renglon[] = utf8_decode($indicador['indicador_data']['verificacion']); 
						$txt_renglon[] = utf8_decode($indicador['indicador_data']['metodo']); 
						
						$estatus = "Sin capturar";
						$avance = 0;
						$detalle = "";
						$evidencia = "";
						if($actores[$keyActor]['captura'] != NULL){
							if(isset($actores[$keyActor]['captura']["captura_data"]["indicadores"][$indicador["idindicador"]])){
								$estatus = "Capturado";
								$temp = $actores[$keyActor]['captura']["captura_data"]["indicadores"][$indicador["idindicador"]];
								if($temp["iniciado"]["v"][0] == "1"){
									$estatus = "Iniciado";
									$avance = $temp["iniciado"]["e"][1];
									if(intval($avance) > 99){ $estatus = "Terminado"; } 
								} else if($temp["iniciado"]["v"][0] == "2"){
									$estatus = "No iniciado";
									$avance = 0;
								}
								$detalle = $temp["avance"];
								$evidencia = "";
								if(isset($temp["evidencia"]) and is_array($temp["evidencia"]) and !empty($temp["evidencia"]["l"])){ foreach($temp["evidencia"]["l"] as $key2 => $documento){
									$evidencia .= ' - '.$urlSitio.'files/'.$idtipo.'/'.$temp["evidencia"]["l"][$key2].' - ';
								} }
							}
						}
						$txt_renglon[] = utf8_decode($estatus); //No se ha iniciado / En planeación / En proceso / Finalizado
						$txt_renglon[] = utf8_decode($avance); // porcentaje de avance
						$txt_renglon[] = utf8_decode($detalle); // 
						$txt_renglon[] = utf8_decode($evidencia); // 						
						
						$aprobado = "Sin evaluar";
						$retroalimentacion = "";
						if($actores[$keyActor]['revision'] != NULL){
							if(isset($actores[$keyActor]['revision']["revision_data"]["indicadores"][$indicador["idindicador"]])){
								$temp = $actores[$keyActor]['revision']["revision_data"]["indicadores"][$indicador["idindicador"]];
								if($temp["actual"]["aprobo"]["v"][0] == "1"){
									$aprobado = "Sí";
								} else if($temp["actual"]["aprobo"]["v"][0] == "2"){
									$aprobado = "No";
								}
								$retroalimentacion = $temp["actual"]["retroalimentacion"];
							}
						}
						$txt_renglon[] = utf8_decode($aprobado); //aprobado / no aprobado
						$txt_renglon[] = utf8_decode($retroalimentacion); 
						
						
						$myfile = fputcsv($fp, $txt_renglon);
					}
				}
				
			}
			
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
	
	fclose($fp);
	exit;
} else { 
	
}

function lineas_indicadores_actor($idactor){
	$arreglos = array();
	
	require "../ajax/sitio/part_preguntas.php";
	
	return array(
		'lineas' => $lineas,
		'indicadores' => $indicadores,
		'metas_al_arr' => $metas_al_arr,
	);
}
?>
