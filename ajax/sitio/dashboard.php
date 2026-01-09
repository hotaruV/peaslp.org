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
			'correo_electronico' => array("leyenda" => "Correo electrónico", "tipo" => "mail", "nulo" => 1)
		);
		
		$error_post = 0;
		$dashboard_post = array();
		foreach($vars as $key => $var){ 
			if(isset($_POST[$key])){ $dashboard_post[$key] = $_POST[$key]; }
			else { $error_post = 1; }
		}
		
		if ($error_post == 0) {
			$dashboard_data = array();
			$error = array();
			foreach($vars as $key => $var){ 
				$ok = false;
				$info = '';
				if(isset($dashboard_post[$key])){ 
					$validacion = validarData($dashboard_post[$key], $var);
					if($validacion["ok"]){ 
						$ok = true; 
						$dashboard_data[$key] = $validacion["valor"];
					} else { $info = $validacion["info"]; }
				} else { $info = 'No se recibió el dato.'; }
				if(!$ok){ $error[$key] = $info; }
			}
			if(empty($error)){
				
				$arreglos['ok'] = $tablaJSONClass->setTablaJSON($idusuario, "correo_electronico", $dashboard_data["correo_electronico"]);
				
			} else {
				$arreglos['ok'] = -7; 
				$arreglos['error'] = $error; 
			}	
		} else { $arreglos['ok'] = -3; $arreglos['paso'] = 1; }

} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>