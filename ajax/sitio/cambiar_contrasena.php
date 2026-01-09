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
		$tablaJSONClass = new TablaJSON("usuario");
		
		$vars = array(
			'contrasena' => array("leyenda" => "Contraseña actual", "tipo" => "contrasena", "nulo" => 0),
			'contrasena_nueva' => array("leyenda" => "Contraseña nueva", "tipo" => "contrasena", "nulo" => 0),
		);
		
		$error_post = 0;
		$cambiar_contrasena_post = array();
		foreach($vars as $key => $var){ 
			if(isset($_POST[$key])){ $cambiar_contrasena_post[$key] = $_POST[$key]; }
			else { $error_post = 1; }
		}
		
		if ($error_post == 0) {
			$cambiar_contrasena_data = array();
			$error = array();
			foreach($vars as $key => $var){ 
				$ok = false;
				$info = '';
				if(isset($cambiar_contrasena_post[$key])){ 
					$validacion = validarData($cambiar_contrasena_post[$key], $var);
					if($validacion["ok"]){ 
						$ok = true; 
						$cambiar_contrasena_data[$key] = $validacion["valor"];
					} else { $info = $validacion["info"]; }
				} else { $info = 'No se recibió el dato.'; }
				if(!$ok){ $error[$key] = $info; }
			}
			if(empty($error)){
				
				$resultado = $usuarioClass->loginUsuario($usuario['usuario'], $cambiar_contrasena_data["contrasena"]);
				if($resultado > 0){					
					if($cambiar_contrasena_data["contrasena"] != $cambiar_contrasena_data["contrasena_nueva"]){
						$arreglos['ok'] = $usuarioClass->updateContrasena($idusuario, $usuario['usuario'], $cambiar_contrasena_data["contrasena_nueva"]);
						$tablaJSONClass = new TablaJSON("usuario");
						$tablaJSONClass->setTablaJSON($idusuario, "contrasena_un_uso.v[0]", 0);	
					} else {
						$arreglos['ok'] = -7; 
						$arreglos['error'] = array("La nueva contraseña debe ser diferente a la actual"); 	
					}
				} else {
					$arreglos['ok'] = 0;
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