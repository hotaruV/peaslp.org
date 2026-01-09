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
require_once "../../lib/model/UsuarioDatos.php";
require_once "../../lib/model/UsuarioDispositivo.php";
require_once "../../lib/model/UsuarioDispositivoAcceso.php";

$usuarioClass = new Usuario();
$usuarioDatosClass = new UsuarioDatos();
$usuarioDispositivoClass = new UsuarioDispositivo();
$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();

header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');
$arreglos = array();
if(
	isset($_POST) and
	isset($_POST['id']) and
	isset($_POST['token']) and
	isset($_POST['dispositivo']) and
	isset($_POST['perfil']) 
){
	
	$idusuario = intval($_POST['id']);
	$salt = strip_tags($_POST['token']);
	$dispositivo = strip_tags($_POST['dispositivo']);
	$perfil = intval($_POST['perfil']);
	
	$arreglos['oku'] = 0;
	
	$usuario = $usuarioClass->loginToken($idusuario, $salt, $perfil);
	if(is_array($usuario) and !empty($usuario)){
		$arreglos['oku'] = 1;
		
		$navegador = (isset($_COOKIE[$usuarioDispositivoAccesoClass->cookie]))?$_COOKIE[$usuarioDispositivoAccesoClass->cookie]:'';
		$resultado = $usuarioDispositivoClass->getUsuarioDispositivo($usuario['idusuario'], $navegador, $dispositivo);
		if(is_array($resultado) and !empty($resultado)){
			
			$arreglos['oku'] = 2;
			$arreglos['token'] = "";
			
			//desactivar 
			$usuarioDispositivoClass->activarUsuarioDispositivo($resultado['idusuario_dispositivo'], 0);
			$usuarioDispositivoAccesoClass->activarUsuarioDispositivoAcceso($resultado['idusuario_dispositivo'], 0);
		} else { $arreglos['ok'] = $resultado; }
	} else { $arreglos['ok'] = $usuario; }
} else { $arreglos['ok'] = -2; }

$arreglos['ok'] = 1;

$cookie_value = '';
$cookie_expire = time() - 3600;
if (version_compare(phpversion(), '7.3') >= 0) {
	setcookie($usuarioDispositivoAccesoClass->cookie, $cookie_value, array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
	setcookie($usuarioDispositivoAccesoClass->cookie_id, $cookie_value, array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
} else {
	setcookie($usuarioDispositivoAccesoClass->cookie, $cookie_value, $cookie_expire, "/;SameSite=None;Secure");
	setcookie($usuarioDispositivoAccesoClass->cookie_id, $cookie_value, $cookie_expire, "/;SameSite=None;Secure");
}

$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>