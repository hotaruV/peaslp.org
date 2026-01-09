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
		'institucion' => array("leyenda" => "Institución", "tipo" => "entero", "nulo" => 0),
	);
	
	$error_post = 0;
	$institucion_actores_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $institucion_actores_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$institucion_actores_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($institucion_actores_post[$key])){ 
				$validacion = validarData($institucion_actores_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$institucion_actores_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			//estrategias 
				//esta la institucion 
			//toma todas las estrategias que pertenezcan a la institución 
			
			//lineas de acción (estrategia) estan los actores 
			//indicadores (estrategia)
			
			$usuarioTClass = new TablaJSON("usuario");
			$usuarioT = $usuarioTClass->getTablaJSONUnique(
				" 
					AND perfil = 5
					AND idusuario = ".$usuario['idusuario']."
					AND activo = 1 
				"
			);
			
			$idinstitucion = NULL;
			if(is_array($usuarioT) and !empty($usuarioT)){
				$usuarioT["usuario_data"] = json_decode($usuarioT["usuario_data"], true);
				
				$idinstitucion = $usuarioT["usuario_data"]["institucion"];
				
				$estrategiaClass = new TablaJSON("estrategia");
				$estrategias = $estrategiaClass->getTablaJSONs("
					AND activo = 1 
					AND JSON_CONTAINS(JSON_EXTRACT(estrategia_data, '$.instituciones.v[*].id'),'\"".$idinstitucion."\"','$')
				");
				
				$arreglos["idinstitucion"] = $idinstitucion;
				
				$estrategia_arr = array();
				foreach($estrategias as $key => $estrategia){
					$estrategias[$key]['estrategia_data'] = json_decode($estrategias[$key]['estrategia_data'], true);
					$data = $estrategias[$key]['estrategia_data'];	
					$estrategia_arr[] = $estrategia["idestrategia"];
				}
				
				$arreglos["estrategia_arr"] = $estrategia_arr;
				
				$lineaClass = new TablaJSON("linea");
				$lineas = $lineaClass->getTablaJSONs("
					AND activo = 1 
					AND FIND_IN_SET(JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.estrategia')), '".implode(',', $estrategia_arr)."') 
				"," fecha DESC ", " , JSON_EXTRACT(linea_data, '$.estrategia') AS estrategia ");
				
				$arreglos["lineas"] = $lineas;
				
				$actores_arr = array();
				foreach($lineas as $key => $linea){
					$lineas[$key]['linea_data'] = json_decode($lineas[$key]['linea_data'], true);
					$data = $lineas[$key]['linea_data'];	
					foreach($data["actores"]["v"] as $llave => $actor){
						$actores_arr[$actor["id"]] = $actor["id"];
					}
				}
				
				$arreglos["actores_arr"] = $actores_arr;
				
				$actorClass = new TablaJSON("actor");
				$actores = $actorClass->getTablaJSONs(
					"
						AND activo = 1 
						AND FIND_IN_SET(idactor, '".implode(',', $actores_arr)."')
					", 
					"  CAST(JSON_UNQUOTE(JSON_EXTRACT(actor_data, '$.actor')) AS CHAR) ASC  "
				);
				
				foreach($actores as $key => $actor){
					$actores[$key]['actor_data'] = json_decode($actores[$key]['actor_data'], true);
				}
				$arreglos["actor"] = $actores;
				$arreglos["ok"] = 1;
			} else {
				$arreglos['ok'] = -1; 
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
