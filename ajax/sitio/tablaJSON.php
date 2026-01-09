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
		'base' => array("leyenda" => "Base", "tipo" => "texto", "nulo" => 0),
		'action' => array("leyenda" => "Acción", "tipo" => "texto", "nulo" => 0),
	);		
	if(isset($_POST['base']) and isset($_POST['action'])){
		if(in_array(trim($_POST['action']), array('ins','upd'))){
			switch(trim($_POST['base'])){
				case "actor": 
					$vars['actor'] = array("leyenda" => "Actor responsable", "tipo" => "texto", "nulo" => 0);
					$vars['siglas'] = array("leyenda" => "Siglas", "tipo" => "texto", "nulo" => 0);
					$vars['municipios'] = array("leyenda" => "Municipios", "tipo" => "switch", "nulo" => 1);
					$vars['catalogos'] = array("leyenda" => "Catálogos", "tipo" => "switch", "nulo" => 1);
					$vars['catalogo_pertenece'] = array("leyenda" => "Catálogo al que pertenece el actor responsable", "tipo" => "entero", "nulo" => 1);
					break;
				case "usuario": 
					$vars['nombre'] = array("leyenda" => "Nombre", "tipo" => "nombre", "nulo" => 0);
					$vars['apellidos'] = array("leyenda" => "Apellidos", "tipo" => "nombre", "nulo" => 0);
					$vars['actor'] = array("leyenda" => "Actor responsable", "tipo" => "entero", "nulo" => 1);
					$vars['usuario'] = array("leyenda" => "Correo electrónico", "tipo" => "texto", "nulo" => 0);
					$vars['contrasena'] = array("leyenda" => "Contraseña", "tipo" => "contrasena", "nulo" => 0);
					$vars['u_perfil'] = array("leyenda" => "Perfil", "tipo" => "radio", "nulo" => 0);
					break;
				case "eje": 
					$vars['eje'] = array("leyenda" => "Eje", "tipo" => "texto", "nulo" => 0);
					$vars['color'] = array("leyenda" => "Color", "tipo" => "hexadecimal", "nulo" => 0);
					break;
				case "plazo": 
					$vars['plazo'] = array("leyenda" => "Plazo (temporalidad)", "tipo" => "texto", "nulo" => 0);
					break;
				case "estrategia": 
					$vars['eje'] = array("leyenda" => "Eje", "tipo" => "entero", "nulo" => 0);
					$vars['prioridad'] = array("leyenda" => "Prioridad", "tipo" => "entero", "nulo" => 0);
					$vars['identificador'] = array("leyenda" => "ID", "tipo" => "numero", "nulo" => 0);
					$vars['estrategia'] = array("leyenda" => "Estrategia", "tipo" => "texto", "nulo" => 0);
					$vars['instituciones'] = array("leyenda" => "Instituciones coordinadoras", "tipo" => "check", "nulo" => 0);
					break;
				case "indicador": 
					$vars['eje'] = array("leyenda" => "Eje", "tipo" => "entero", "nulo" => 0);
					$vars['prioridad'] = array("leyenda" => "Prioridad", "tipo" => "entero", "nulo" => 0);
					$vars['estrategia'] = array("leyenda" => "Estrategia", "tipo" => "entero", "nulo" => 0);
					$vars['indicador'] = array("leyenda" => "Indicador", "tipo" => "texto", "nulo" => 0);
					$vars['meta'] = array("leyenda" => "Meta", "tipo" => "texto", "nulo" => 0);
					$vars['meta_al'] = array("leyenda" => "Al año", "tipo" => "anio", "nulo" => 0);
					$vars['metodo'] = array("leyenda" => "Método de cálculo", "tipo" => "texto", "nulo" => 0);
					$vars['verificacion'] = array("leyenda" => "Fuente de verificación", "tipo" => "texto", "nulo" => 0);
					break;
				case "institucion": 
					$vars['institucion'] = array("leyenda" => "Institución coordinadora", "tipo" => "texto", "nulo" => 0);
					$vars['siglas'] = array("leyenda" => "Siglas", "tipo" => "texto", "nulo" => 0);
					$vars['municipios'] = array("leyenda" => "Municipios", "tipo" => "switch", "nulo" => 1);
					break;
				case "linea": 
					$vars['eje'] = array("leyenda" => "Eje", "tipo" => "entero", "nulo" => 0);
					$vars['prioridad'] = array("leyenda" => "Prioridad", "tipo" => "entero", "nulo" => 0);
					$vars['estrategia'] = array("leyenda" => "Estrategia", "tipo" => "entero", "nulo" => 0);
					$vars['identificador'] = array("leyenda" => "ID", "tipo" => "texto", "nulo" => 0);
					$vars['linea'] = array("leyenda" => "Línea de acción", "tipo" => "texto", "nulo" => 0);
					$vars['actores'] = array("leyenda" => "Actores responsable", "tipo" => "check", "nulo" => 0);
					$vars['anexo_ata'] = array("leyenda" => "Anexo ATA", "tipo" => "numero", "nulo" => 1);
					break;
				case "prioridad": 
					$vars['eje'] = array("leyenda" => "Eje", "tipo" => "entero", "nulo" => 0);
					$vars['prioridad'] = array("leyenda" => "Prioridad", "tipo" => "texto", "nulo" => 0);
					$vars['plazo'] = array("leyenda" => "Plazo (temporalidad)", "tipo" => "entero", "nulo" => 0);
					break;
				case "periodo": 
					$vars['periodo'] = array("leyenda" => "Periodo", "tipo" => "texto", "nulo" => 0);
					$vars['inicia'] = array("leyenda" => "Inicia captura", "tipo" => "fecha", "nulo" => 0);
					$vars['termina'] = array("leyenda" => "Termina captura", "tipo" => "fecha", "nulo" => 0);
					$vars['inicia_revision'] = array("leyenda" => "Inicia revisión", "tipo" => "fecha", "nulo" => 0);
					$vars['termina_revision'] = array("leyenda" => "Termina revisión", "tipo" => "fecha", "nulo" => 0);
					break;
				case "catalogo": 
					$vars['catalogo'] = array("leyenda" => "Catálogo", "tipo" => "texto", "nulo" => 0);
					break;
				case "elemento": 
					$vars['catalogo'] = array("leyenda" => "Catálogo", "tipo" => "entero", "nulo" => 0);
					$vars['elemento'] = array("leyenda" => "Elemento", "tipo" => "texto", "nulo" => 0);
			}
		} else if(in_array(trim($_POST['action']), array('filter'))){
			$vars['col'] = array("leyenda" => "Columna", "tipo" => "texto", "nulo" => 0);
			$vars['ident'] = array("leyenda" => "Identificador", "tipo" => "entero", "nulo" => 0);
		} else if(in_array(trim($_POST['action']), array('datatable'))){
			$vars['cols'] = array("leyenda" => "Columnas", "tipo" => "objeto", "nulo" => 0);
			$vars['cols_type'] = array("leyenda" => "Columnas - Tipo", "tipo" => "objeto", "nulo" => 0);
			$vars['foreign'] = array("leyenda" => "Foraneo", "tipo" => "objeto", "nulo" => 1);
		} else if(in_array(trim($_POST['action']), array('act'))){
			$vars['status'] = array("leyenda" => "Activo", "tipo" => "numero", "nulo" => 0);
		}
		
	}
	
	
	$error_post = 0;
	$tabla_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $tabla_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	if ($error_post == 0) {
		$tabla_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($tabla_post[$key])){ 
				$validacion = validarData($tabla_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$tabla_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$tablaJSONClass = new TablaJSON($tabla_data['base']);
			
			$idTablaJSON = NULL;
			if(isset($_POST['id'.$tabla_data['base']])){ $idTablaJSON = intval($_POST['id'.$tabla_data['base']]); }
		
			if($tabla_data['action'] == 'get'){
				//obtener
				if($idTablaJSON != NULL){
					$obj = $tablaJSONClass->getTablaJSONID($idTablaJSON, '');
					if(is_array($obj) and !empty($obj)){
						$obj[$tabla_data['base'].'_data'] = json_decode($obj[$tabla_data['base'].'_data'], true);
						$arreglos[$tabla_data['base']] = $obj;
						$arreglos['ok'] = 1;
					} else {
						$arreglos['ok'] = $obj;		
					}
				} else {
					$arreglos['ok'] = -1;			
				}
			} else if($tabla_data['action'] == 'del'){
				//borrar
				if($idTablaJSON != NULL){
					$obj = $tablaJSONClass->getTablaJSONID($idTablaJSON, '');
					if(is_array($obj) and !empty($obj)){
						$arreglos['ok'] = $tablaJSONClass->deleteTablaJSON($idTablaJSON);
					} else {
						$arreglos['ok'] = $obj;		
					}						
				} else {
					$arreglos['ok'] = -1;			
				}
			} else if($tabla_data['action'] == 'act'){
				//borrar
				if($idTablaJSON != NULL){
					$obj = $tablaJSONClass->getTablaJSONID($idTablaJSON, '');
					if(is_array($obj) and !empty($obj)){
						$arreglos['ok'] = $tablaJSONClass->activoTablaJSON($idTablaJSON, $tabla_data['status']);
					} else {
						$arreglos['ok'] = $obj;		
					}						
				} else {
					$arreglos['ok'] = -1;			
				}
			} else if($tabla_data['action'] == 'all'){
				//todo
				$orderBy = " fecha DESC ";
				if(isset($_POST['orden'])){
					$orderBy = "";
					$temp = json_decode(strip_tags(trim($_POST['orden'])), true);
					if (json_last_error() === JSON_ERROR_NONE) { }
					else { $temp = array(); }
					
					foreach($temp as $llave2 => $data){ 
						if($orderBy != ""){ 
							$orderBy .= ", ";
						}
						$type = "CHAR";
						switch($data["tipo"]){
							case "entero":
								$type = "DECIMAL";
								break;
							case "numero":
								$type = "DECIMAL";
								break;
							case "fecha":
								$type = "DATE";
								break;
							case "fecha_c":
								$type = "DATETIME";
								break;
						}
						//echo " -- CAST(JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$data["col"]."')) AS ".$type.") ".$data["dir"]."  -- ";
						$orderBy .= " CAST(JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$data["col"]."')) AS ".$type.") ".$data["dir"]." ";
					}
				}
				
				$sql_ad = "";
				$objs = $tablaJSONClass->getTablaJSONs('', $orderBy);
				foreach($objs as $key => $obj){
					$objs[$key][$tabla_data['base'].'_data'] = json_decode($obj[$tabla_data['base'].'_data'], true);
				}
				$arreglos[$tabla_data['base']] = $objs;	
				$arreglos['ok'] = 1;	
				
			} else if($tabla_data['action'] == 'filter'){
				//filter
				$orderBy = " fecha DESC ";
				if(isset($_POST['orden'])){
					$orderBy = "";
					$temp = json_decode(strip_tags(trim($_POST['orden'])), true);
					if (json_last_error() === JSON_ERROR_NONE) { }
					else { $temp = array(); }
					
					foreach($temp as $llave2 => $data){ 
						if($orderBy != ""){ 
							$orderBy .= ", ";
						}
						$type = "CHAR";
						switch($data["tipo"]){
							case "entero":
								$type = "DECIMAL";
								break;
							case "numero":
								$type = "DECIMAL";
								break;
							case "fecha":
								$type = "DATE";
								break;
							case "fecha_c":
								$type = "DATETIME";
								break;
						}
						//echo " -- CAST(JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$data["col"]."')) AS ".$type.") ".$data["dir"]."  -- ";
						$orderBy .= " CAST(JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$data["col"]."')) AS ".$type.") ".$data["dir"]." ";
					}
				}
				
				$sql_ad = " 
					AND JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$tabla_data['col']."')) = ".$tabla_data['ident']."
				";
				$objs = $tablaJSONClass->getTablaJSONs($sql_ad, $orderBy);
				foreach($objs as $key => $obj){
					$objs[$key][$tabla_data['base'].'_data'] = json_decode($obj[$tabla_data['base'].'_data'], true);
				}
				$arreglos[$tabla_data['base']] = $objs;	
				$arreglos['ok'] = 1;	
				
			} else if($tabla_data['action'] == 'datatable'){
				//datatable
				
				$sql_ad = '';
				$sql_cols = '';
				$sql_search_foreign = '';

				$columnas = array();
				$columnas[] = 'id'.$tabla_data['base'];
				foreach($tabla_data['cols'] as $key => $col){
					$columnas[] = $col;
				}
				$columnas[] = 'fecha';
				$columnas[] = 'modificacion';

				## Read value
				$draw = $_POST['draw'];
				$row = $_POST['start'];
				$rowperpage = $_POST['length']; // Rows display per page
				$columnIndex = $_POST['order'][0]['column']; // Column index
				$columnName = $columnas[$columnIndex]; // Column name
				$columnSortOrder = $_POST['order'][0]['dir']; // asc or desc
				$searchValue = trim($_POST['search']['value']); // Search value

				
				foreach($tabla_data['foreign'] as $key => $foreign){
					if(!isset($foreign["column_f"])){
						$foreign["column_f"] = $foreign["column"];
					}
					$temp = "
						(
							SELECT
								JSON_UNQUOTE(JSON_EXTRACT(".$foreign["base"]."_data, '$.".$foreign["column_f"]."')) 
							FROM
								".$foreign["base"]."
							WHERE
								id".$foreign["base"]." = JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$foreign["column"]."')) AND
								eliminado = 0
						) 
					";
					if($columnName == $foreign["column"]){ 
						$columnName = $temp;
					}
					$sql_cols .= $temp."  AS ".$foreign["column"].", ";
					$sql_search_foreign .= " OR ".$temp." like '%".$searchValue."%' ";

				}
				
				/*
				if($columnas[$columnIndex] == $columnName){
					$columnName = " JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$columnName."')) ";
				}
				*/
				
				if($columnas[$columnIndex] == $columnName and 'id'.$tabla_data['base'] != $columnName){
					if(isset($tabla_data['cols_type'][$columnName])){
						$type = "CHAR";
						switch($tabla_data['cols_type'][$columnName]){
							case "entero":
								$type = "DECIMAL";
								break;
							case "numero":
								$type = "DECIMAL(10,2)";
								break;
							case "fecha":
								$type = "DATE";
								break;
							case "fecha_c":
								$type = "DATETIME";
								break;
							
						}
						$columnName = " CAST(JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$columnName."')) AS ".$type.") ";
					} else {
						$columnName = " JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$columnName."')) ";
					}
				}
				
				## Search 
				$searchQuery = " ";
				if($searchValue != ''){
					$searchQuery = " AND ( ";
					$searchQueryOr = "";
					foreach($tabla_data['cols'] as $llave => $col){
						if($searchQueryOr != ""){ 
							$searchQueryOr .= " OR ";
						}
						$searchQueryOr .= " JSON_UNQUOTE(JSON_EXTRACT(".$tabla_data['base']."_data, '$.".$col."')) like '%".$searchValue."%' ";
					}
					$searchQuery .= $searchQueryOr.$sql_search_foreign." ) ";
				}
				
				## Total number of records without filtering
				$todos = $tablaJSONClass->getTablaJSONTotal($sql_ad);
				$totalRecords = $todos['total'];
				
				## Total number of record with filtering
				$todos_filtro = $tablaJSONClass->getTablaJSONTotalFiltro($searchQuery, $sql_ad);
				$totalRecordwithFilter = $todos_filtro['total'];		
				
				## Fetch records
				$objs = $tablaJSONClass->getTablaJSONDataTable($searchQuery, $columnName, $columnSortOrder, $row, $rowperpage, $sql_ad, $sql_cols);
				
				$municipios = array();
				$municipios = json_decode($tablaJSONClass->municipios, true);
				
				
				$data = array();
				foreach($objs as $key => $obj){

					if($obj[$tabla_data['base'].'_data'] != NULL){
						$objs[$key][$tabla_data['base'].'_data'] = json_decode($obj[$tabla_data['base'].'_data'], true);
					} else {
						$objs[$key][$tabla_data['base'].'_data'] = array(
							'activo' => true,
						);
					}
					
					$activo = $objs[$key][$tabla_data['base'].'_data']["activo"];
					$activo_arr = array(
						"1" => "Activar",
						"0" => "Desactivar"
					);

					$a_link = '';
					
					if($tabla_data['base'] == "periodo"){
						
						$a_link .= 'Recordatorios: <a href="#" data-id="'.$obj['id'.$tabla_data['base']].'" data-txt="'.$obj[$tabla_data['base']].'" class="a_carga">Captura</a> - ';
						$a_link .= '<a href="#" data-id="'.$obj['id'.$tabla_data['base']].'" data-txt="'.$obj[$tabla_data['base']].'" class="a_revision">Revisión</a> <br>';
						
					}
					
					$a_link .= '<a href="#" data-id="'.$obj['id'.$tabla_data['base']].'" data-txt="'.$obj[$tabla_data['base']].'" data-status="'.($activo ? 0 : 1).'" class="a_activo">'.($activo ? $activo_arr[0] : $activo_arr[1]).'</a> | ';
					$a_link .= '<a href="#" data-id="'.$obj['id'.$tabla_data['base']].'" data-txt="'.$obj[$tabla_data['base']].'" class="a_editar">Editar</a> | ';
					$a_link .= '<a href="#" data-id="'.$obj['id'.$tabla_data['base']].'" data-txt="'.$obj[$tabla_data['base']].'" class="a_eliminar">Eliminar</a>';
					
					$text = '';
					
					$data[$key] = array();	

					foreach($tabla_data['cols'] as $llave => $col){
						$data[$key][$col] = NULL;
						if(isset($objs[$key][$tabla_data['base'].'_data'][$col])){
							$data[$key][$col] = $objs[$key][$tabla_data['base'].'_data'][$col];
						}
						
						foreach($tabla_data['foreign'] as $llave2 => $foreign){
							if($col == $foreign["column"]){
								$data[$key][$col] = $obj[$col];
							}
						}
					}
					
					if($tabla_data['base'] == "eje"){
						$data[$key]["eje"] = '<div style=" padding:2px 5px;  background-color:'.$data[$key]["color"].'; color:#FFF;"><b>'.$data[$key]["eje"].'</b></div>';
					}
					if($tabla_data['base'] == "usuario"){
						$temp_municipio = NULL;
						
						if($objs[$key]['usuario_data']["u_perfil"]["v"][0] == "4" and $objs[$key]['usuario_data']["actor_municipio"] != NULL){
							$temp_municipio = $objs[$key]['usuario_data']["actor_municipio"];
						} else if($objs[$key]['usuario_data']["u_perfil"]["v"][0] == "5" and $objs[$key]['usuario_data']["institucion_municipio"] != NULL){
							$temp_municipio = $objs[$key]['usuario_data']["institucion_municipio"];
						}
						
						foreach($municipios as $llave => $municipio){
							if($municipio["id"] == $temp_municipio){
								$temp_municipio = $municipio["municipio"];
								break;	
							}
						}
						
						$actor_elemento = NULL;
						
						if(isset($objs[$key]['usuario_data']["actor_catalogo"]) and  $objs[$key]['usuario_data']["actor_catalogo"] != ""){
								if(isset($objs[$key]['usuario_data']["actor_elemento"]) and  $objs[$key]['usuario_data']["actor_elemento"] != ""){
									$elementoClass = new TablaJSON("elemento");
									$elemento = $elementoClass->getTablaJSONID($objs[$key]['usuario_data']["actor_elemento"]);
									if(is_array($elemento) and !empty($elemento)){
										$elemento['elemento_data'] = json_decode($elemento['elemento_data'], true);
										$actor_elemento = $elemento['elemento_data']['elemento'];
									}
								}
							}
						
						$data[$key]["municipio"] = $temp_municipio;	
						$data[$key]["actor_elemento"] = $actor_elemento;	
					}

					$data[$key]['id'.$tabla_data['base']] = $obj['id'.$tabla_data['base']];
					$data[$key]["fecha"] = $obj['fecha'];
					$data[$key]["modificacion"] = $obj['modificacion'];
					$data[$key]["acciones"] = $a_link;
				}
				
				/*
				if($tabla_data['base'] == "usuario"){
					$data[$key]["adicional"] = "";
					foreach($data as $key => $obj){
						switch(intval($obj["u_perfil"]["v"][0])){
							case 1:
								break;
							case 4: //Actor
								$txt_perfil = "";	
								if(isset($usuario['usuario_data']["actor"])){
									$actorClass = new TablaJSON("actor");
									$actor = $actorClass->getTablaJSONID($usuario['usuario_data']["actor"]);
									if(is_array($actor) and !empty($actor)){
										$actor['actor_data'] = json_decode($actor['actor_data'], true);
										$txt_perfil = $actor['actor_data']['actor'];
										if($usuario['usuario_data']["actor_municipio"] != ""){
											$municipios = json_decode($actorClass->municipios, true);
											foreach($municipios as $llave => $municipio){
												if($municipio["id"] == $usuario['usuario_data']["actor_municipio"]){
													$txt_perfil .= " - ".$municipio["municipio"];
													break;	
												}
											}
										}
									}
								}
								break;
							case 5: //Institución
								case 5:
								//Institución
								$txt_perfil = "";		
								if(isset($usuario['usuario_data']["institucion"])){
									$institucionClass = new TablaJSON("institucion");
									$institucion = $institucionClass->getTablaJSONID($usuario['usuario_data']["institucion"]);
									if(is_array($institucion) and !empty($institucion)){
										$institucion['institucion_data'] = json_decode($institucion['institucion_data'], true);
										$txt_perfil = $institucion['institucion_data']['institucion'];
										if($usuario['usuario_data']["institucion_municipio"] != ""){
											$municipios = json_decode($institucionClass->municipios, true);
											foreach($municipios as $llave => $municipio){
												if($municipio["id"] == $usuario['usuario_data']["institucion_municipio"]){
													$txt_perfil .= " - ".$municipio["municipio"];
													break;	
												}
											}
										}
									}
								}
								break;
						}
					}	
				}
				*/
				
				## Response
				$response = array(
					"draw" => intval($draw),
					"iTotalRecords" => $totalRecordwithFilter,
					"iTotalDisplayRecords" => $totalRecords,
					"aaData" => utf8_converter($data),
					"ok" => 1
				);
				echo json_encode($response);
				exit;
				
			} else {
				//insertar / editar
				$resultado = NULL;
				
				$default = array(
					'creo' => $usuario['idusuario'],
					'modifico' => array(
					
					),
					'fecha' => date('Y-m-d H:i:s'),
					'modificacion' => NULL,
					'activo' => true,
				);

				/*
				perfil,
				contrasena,
				salt
				*/

				if($idTablaJSON != NULL){
					$arreglos['upd'] = 1;
					$obj = $tablaJSONClass->getTablaJSONID($idTablaJSON, '');
					if(is_array($obj) and !empty($obj)){ 
						$arreglos['find'] = 1;
						$temp = json_decode($obj[$tabla_data['base'].'_data'], true);
						if (json_last_error() === JSON_ERROR_NONE) { }
						else { $temp = array(); }
						
						foreach($default as $llave => $var){ 
							if(isset($temp[$llave])){ $tabla_data[$llave] = $temp[$llave]; }
							else { $tabla_data[$llave] = $var; }
						}
						
						$tabla_data['modifico'][] = array( 
							'usuario' => $usuario['idusuario'], 
							'fecha' => date('Y-m-d H:i:s')
						);
						$tabla_data['modificacion'] = date('Y-m-d H:i:s');
						
						$arreglos['data'] = $tabla_data;
						$arreglos['info'] = $tabla_data[$tabla_data['base']];
							
						$resultado = $tablaJSONClass->updateTablaJSON($idTablaJSON, $tabla_data[$tabla_data['base']], json_encode($tabla_data));
						if($resultado > 0){ 
							$arreglos['msj'] = $resultado;
							$resultado = $obj['id'.$tabla_data['base']]; 
						} 
					} else {
						$arreglos['find'] = 0;
						$resultado = $obj;
					}
				} else {
					$arreglos['ins'] = 1;
					foreach($default as $key => $valor){ $tabla_data[$key] = $valor; }
					$resultado = $tablaJSONClass->insertTablaJSON($tabla_data[$tabla_data['base']], json_encode($tabla_data));
				}
				
				if($resultado > 0){		
					$arreglos['ok'] = 1;
					$arreglos['id'] = $resultado;
				} else {
					$arreglos['ok'] = $resultado;
				}
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
