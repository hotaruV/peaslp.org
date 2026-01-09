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
		'actor' => array("leyenda" => "Actor", "tipo" => "entero", "nulo" => 0),
		'actor_municipio' => array("leyenda" => "Actor Municipio", "tipo" => "entero", "nulo" => 1),
	);
	
	$error_post = 0;
	$periodo_indicadores_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $periodo_indicadores_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$periodo_indicadores_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($periodo_indicadores_post[$key])){ 
				$validacion = validarData($periodo_indicadores_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$periodo_indicadores_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$periodoClass = new TablaJSON("periodo");
			$periodo = $periodoClass->getTablaJSONID($periodo_indicadores_data["periodo"]);

			if(is_array($periodo) and !empty($periodo)){ 
				$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);
				
				if($periodo_indicadores_data["actor_municipio"] == NULL){
					$periodo_indicadores_data["actor_municipio"] = "null";
				}
			
				$usuarios_arr = array();
				$arreglos["err"] = array();
				
				$usuarioTClass = new TablaJSON("usuario");
				$usuariosT = $usuarioTClass->getTablaJSONs(
					" 
						AND perfil = 4
						AND JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor')) = ".$periodo_indicadores_data["actor"]."
						AND JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor_municipio')) = \"".$periodo_indicadores_data["actor_municipio"]."\"
						AND activo = 1 
					",
					" fecha DESC ",
					", (
						SELECT JSON_UNQUOTE(JSON_EXTRACT(actor_data, '$.actor')) 
						FROM actor 
						WHERE idactor = JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor')) AND eliminado = 0
					) AS actor,
					(
						SELECT JSON_UNQUOTE(JSON_EXTRACT(perfil_data, '$.perfil')) 
						FROM perfil 
						WHERE idperfil = JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.perfil')) AND eliminado = 0
					) AS perfil"
				);

			
				if(is_array($usuariosT) and !empty($usuariosT)){ 
					//$usuarioT["usuario_data"] = json_decode($usuarioT["usuario_data"], true);
					
					foreach($usuariosT as $key => $item){
						$item["usuario_data"] = json_decode($item["usuario_data"], true);
						$usuarios_arr[] = array(
							"nombre" => $item["usuario_data"]["nombre"],
							"apellidos" => $item["usuario_data"]["apellidos"],
							"usuario" => $item["usuario_data"]["usuario"],
							"perfil" => $item["perfil"],
							"idperfil" => $item["usuario_data"]["perfil"],
							"actor" => $item["actor"],
							"idactor" => $item["usuario_data"]["actor"],
							"actor_municipio" => $item["usuario_data"]["actor_municipio"],
						);
					}
				} else {
					//No hay usuarios asigandos a este actor 
					$arreglos["err"][] = 1;
				}
					

				$capturaClass = new TablaJSON("captura");
				$captura = $capturaClass->getTablaJSONUnique(
					" 
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$periodo_indicadores_data["actor"]."
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"".$periodo_indicadores_data["actor_municipio"]."\"
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$periodo_indicadores_data["periodo"]."
						AND activo = 1 
					"
				);
				if(is_array($captura) and !empty($captura)){ 
					$captura['captura_data'] = json_decode($captura['captura_data'], true);
					$arreglos["captura"] = $captura;
				} else {
					//No hay ninguna captura realizada en este periodo por este actor
					$arreglos["err"][] = 2;
				}
				
				$arreglos["usuarios"] = $usuarios_arr;
				$idactor = $periodo_indicadores_data["actor"];
				require_once "part_preguntas.php";
				$arreglos["ok"] = 1;
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
