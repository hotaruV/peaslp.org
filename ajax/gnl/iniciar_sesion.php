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

header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');
$arreglos = array();
if(
	isset($_POST) and
	isset($_POST['token']) and
	isset($_POST['usuario']) and
	isset($_POST['contrasena']) 
){
	require_once "../../lib/model/Usuario.php";
	require_once "../../lib/model/UsuarioDatos.php";
	require_once "../../lib/model/UsuarioDispositivo.php";
	require_once "../../lib/model/UsuarioDispositivoAcceso.php";
	
	$usuarioClass = new Usuario();
	$usuarioDatosClass = new UsuarioDatos();
	$usuarioDispositivoClass = new UsuarioDispositivo();
	$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();
	
	/*		
	$response = strip_tags($_POST['response']);
  	$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$captcha_secret.'&response='.$response);
	$responseData = json_decode($verifyResponse);
	if(!$responseData->success){
		$arreglos['ok'] = -4;
	} else {
	*/
	
		$usuario = strip_tags($_POST['usuario']);
		$contrasena = strip_tags($_POST['contrasena']);
		$resultado = $usuarioClass->loginUsuario($usuario, $contrasena);
		if($resultado > 0){
			$arreglos['ok'] = 1;
			$usuario = $usuarioClass->getUsuario($resultado);
			
			$arreglos['id'] = $usuario['idusuario'];
			$arreglos['perfil'] = $usuario['perfil'];
			$arreglos['perfil_txt'] = $usuario['perfil_txt'];
			$arreglos['salt'] = $usuario['salt'];
			
			$navegador = hash('sha512', uniqid(mt_rand(), true));
			$salt = hash('sha512', uniqid(mt_rand(), true));

			$arreglos['dispositivo'] = $salt;
			
			$idusuario_dispositivo = $usuarioDispositivoClass->insertUsuarioDispositivo($usuario['idusuario'], $navegador, $salt);
			if($idusuario_dispositivo > 0){ 
				$cookie_expire = time() + ($usuarioDispositivoAccesoClass->tiempo * $usuarioDispositivoAccesoClass->dias);
				if (version_compare(phpversion(), '7.3') >= 0) {
					setcookie($usuarioDispositivoAccesoClass->cookie, $navegador, array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
					setcookie($usuarioDispositivoAccesoClass->cookie_id, $usuario['idusuario'], array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
				} else {
					setcookie($usuarioDispositivoAccesoClass->cookie, $navegador, $cookie_expire, "/;SameSite=None;Secure");
					setcookie($usuarioDispositivoAccesoClass->cookie_id, $usuario['idusuario'], $cookie_expire, "/;SameSite=None;Secure");
				}
				$usuarioDispositivoAccesoClass->insertUsuarioDispositivoAcceso($idusuario_dispositivo); 
			}

			$arreglos['d'] = ($idusuario_dispositivo > 0)?1:$idusuario_dispositivo;
			$arreglos['token'] = "";
			//$arreglos['usuario']['usuario_datos'] = usuarioDatosBasicos($arreglos['usuario']['usuario_datos']);
		} else { 
			$arreglos['tipo'] = $resultado; 
			$arreglos['ok'] = -9; 
		}
	//}
} else { $arreglos['ok'] = -3; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>