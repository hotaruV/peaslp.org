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
		'ident' => array("leyenda" => "Identificador", "tipo" => "entero", "nulo" => 0),
		'txt' => array("leyenda" => "Periodo", "tipo" => "texto", "nulo" => 0),
		'tipo' => array("leyenda" => "Tipo", "tipo" => "texto", "nulo" => 0),
	);
	
	$error_post = 0;
	$recordatorios_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $recordatorios_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$recordatorios_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($recordatorios_post[$key])){ 
				$validacion = validarData($recordatorios_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$recordatorios_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$periodoClass = new TablaJSON("periodo");
			
			$userClass = new TablaJSON("usuario");
			$actorClass = new TablaJSON("actor");
			$institucionClass = new TablaJSON("institucion");
			
			$tipo_perfil = NULL;
			//5 =>  Institución coordinadora
			//4 =>   Administrador de ENTE Público
			if($recordatorios_data["tipo"] == "captura"){
				$tipo_perfil = 4;
			} else if($recordatorios_data["tipo"] == "revision"){ 
				$tipo_perfil = 5;
			}
			if($tipo_perfil != NULL){
				$periodo = $periodoClass->getTablaJSONID($recordatorios_data["ident"]);
				if(is_array($periodo) and !empty($periodo)){ 
					$periodo["idperiodo"];
					$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);
					
					$arreglos['periodo'] = $periodo["periodo_data"]["periodo"];
					$arreglos['inicia'] = $periodo["periodo_data"]["inicia"];
					$arreglos['termina'] = $periodo["periodo_data"]["termina"];
					
					$usuarios = $userClass->getTablaJSONs(
						" AND activo = 1 AND JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.perfil')) = ".$tipo_perfil." ", 
						" fecha DESC ", 
						",
							(
								SELECT
									JSON_UNQUOTE(JSON_EXTRACT(institucion_data, '$.institucion')) 
								FROM
									institucion
								WHERE
									idinstitucion = JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.institucion')) AND
									eliminado = 0
							) AS institucion,
							(
								SELECT
									JSON_UNQUOTE(JSON_EXTRACT(actor_data, '$.actor')) 
								FROM
									actor
								WHERE
									idactor = JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor')) AND
									eliminado = 0
							) AS actor
						"
					);
					$arreglos['periodo'] = array();
					if(is_array($usuarios) and !empty($usuarios)){ 
						foreach($usuarios as $key => $item){
							$item["usuario_data"] = json_decode($item["usuario_data"], true);
							
							$detalle = "";
							if($recordatorios_data["tipo"] == "captura"){
								$detalle = $item["actor"];
							} else if($recordatorios_data["tipo"] == "revision"){ 
								$detalle = $item["institucion"];
							}
							
							if(filter_var(trim($item["usuario_data"]["usuario"]), FILTER_VALIDATE_EMAIL)) {							
								$arreglos['correos'][] = array(
									"correo" => trim($item["usuario_data"]["usuario"]),
									"nombre" => $item["usuario_data"]["nombre"]." ".$item["usuario_data"]["apellidos"],
									"detalle" => $detalle,
								);		
							}
							
						}
					}
				}
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
?>
