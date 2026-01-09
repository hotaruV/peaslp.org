<?php
if (!defined('APPLICATION')) exit;
$usuario_logeado = false;
$usuario = NULL;
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
	if(is_array($usuario) and !empty($usuario)){ } else { 
		$arreglos['ok'] = -2; 
		$arreglos = utf8_converter($arreglos);
		echo json_encode($arreglos);
		exit;
	} 
	$usuario['usuario_datos'] = json_decode($usuario['usuario_datos'], true); 
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
				
				/*
				setcookie($cookie_name, $cookie_value, $cookie_expire, "/;SameSite=None;Secure");
				setcookie($usuarioDispositivoAccesoClass->cookie_id, $usuario['idusuario'], $cookie_expire, "/;SameSite=None;Secure");
				*/
				if (version_compare(phpversion(), '7.3') >= 0) {
					setcookie($cookie_name, $cookie_value, array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
					setcookie($usuarioDispositivoAccesoClass->cookie_id, $usuario['idusuario'], array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
				} else {
					setcookie($cookie_name, $cookie_value, $cookie_expire, "/;SameSite=None;Secure");
					setcookie($usuarioDispositivoAccesoClass->cookie_id, $usuario['idusuario'], $cookie_expire, "/;SameSite=None;Secure");		
				}
				
			}
		}
		
		if(!$verificacion){	
			$usuarioDispositivoClass->activarUsuarioDispositivo($resultado['idusuario_dispositivo'], 0);
			$usuarioDispositivoAccesoClass->activarUsuarioDispositivoAcceso($resultado['idusuario_dispositivo'], 0);
			
			$cookie_name = $usuarioDispositivoAccesoClass->cookie;
			$cookie_value = '';
			$cookie_expire = time() - 3600;
			if (version_compare(phpversion(), '7.3') >= 0) {
				setcookie($cookie_name, $cookie_value, array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
				setcookie($usuarioDispositivoAccesoClass->cookie_id, $cookie_value, array ('expires' => $cookie_expire, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'None'));
			} else {
				setcookie($cookie_name, $cookie_value, $cookie_expire, "/;SameSite=None;Secure");
				setcookie($usuarioDispositivoAccesoClass->cookie_id, $cookie_value, $cookie_expire, "/;SameSite=None;Secure");
			}
		}
	} 
	if(!$verificacion){ 
		$arreglos['ok'] = -2; 
		$arreglos = utf8_converter($arreglos);
		echo json_encode($arreglos);
		exit;
	} else {
		$usuario_logeado = true;
	}
} else {
	$arreglos['ok'] = -2; 
	$arreglos = utf8_converter($arreglos);
	echo json_encode($arreglos);
	exit;
}
?>