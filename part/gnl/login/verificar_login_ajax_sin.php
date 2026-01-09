<?php
if (!defined('APPLICATION')) exit;
$usuario_logeado = false;

require_once "../lib/model/Usuario.php";
//require_once "../lib/model/UsuarioDatos.php";
require_once "../lib/model/UsuarioDispositivo.php";
require_once "../lib/model/UsuarioDispositivoAcceso.php";
require_once "../lib/model/UsuarioIngreso.php";

$usuarioClass = new Usuario();
//$usuarioDatosClass = new UsuarioDatos();
$usuarioDispositivoClass = new UsuarioDispositivo();
$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();
$usuarioIngresoClass = new UsuarioIngreso();

if(
	isset($_POST) and
	isset($_POST['id']) and
	isset($_POST['token']) and
	isset($_POST['dispositivo']) and
	isset($_POST['perfil']) 
){

	$idusuario = intval($_POST['id']);
	$salt = strip_tags($_POST['token']);
	$perfil = strip_tags($_POST['perfil']);
	$dispositivo = strip_tags($_POST['dispositivo']);
	
	$navegador = (isset($_COOKIE[$usuarioDispositivoAccesoClass->cookie]))?$_COOKIE[$usuarioDispositivoAccesoClass->cookie]:'';
	
	$usuario = $usuarioClass->loginToken($idusuario, $salt, $perfil);
	if(is_array($usuario) and !empty($usuario)){ 
	
		$verificacion = false;
		
		$resultado = $usuarioDispositivoClass->getUsuarioDispositivo($usuario['idusuario'], $navegador, $dispositivo);
		if(is_array($resultado) and !empty($resultado)){ 
			$acceso = $usuarioDispositivoAccesoClass->getUsuarioDispositivoAcceso($resultado['idusuario_dispositivo']);
			if(is_array($acceso) and !empty($acceso)){
				$ultimo = strtotime($acceso['usuario_dispositivo_acceso']);	
				$hoy = strtotime("now");
				$proximo = $ultimo + ($usuarioDispositivoAccesoClass->tiempo * $usuarioDispositivoAccesoClass->dias);
				if($hoy < $proximo){ 
					$verificacion = true; 
					$usuarioDispositivoAccesoClass->updateUsuarioDispositivoAcceso($resultado['idusuario_dispositivo']);
					
					$cookie_name = $usuarioDispositivoAccesoClass->cookie;
					$cookie_value = $navegador;
					$cookie_expire = time() + ($usuarioDispositivoAccesoClass->tiempo * $usuarioDispositivoAccesoClass->dias);
					
					if (version_compare(phpversion(), '7.3') >= 0) {
						setcookie($cookie_name, $cookie_value, array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
						setcookie($usuarioDispositivoAccesoClass->cookie_id, $usuario['idusuario'], array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
					} else {
						setcookie($cookie_name, $cookie_value, $cookie_expire, "/;SameSite=None;Secure");
						setcookie($usuarioDispositivoAccesoClass->cookie_id, $usuario['idusuario'], $cookie_expire, "/;SameSite=None;Secure");
					}
				}
			}
		} 		
		if($verificacion){ $usuario_logeado = true; }	
	}
}
?>