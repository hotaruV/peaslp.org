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
	
	$usuario = $usuarioClass->loginToken($idusuario, $salt, $perfil);
	if(is_array($usuario) and !empty($usuario)){ } else { 
		$arreglos['ok'] = -21; 
		$arreglos = utf8_converter($arreglos);
		echo json_encode($arreglos);
		exit;
	} 
	
	$verificacion = false;
	
	$resultado = $usuarioDispositivoClass->getUsuarioDispositivoSalt($usuario['idusuario'], $dispositivo);
	if(is_array($resultado) and !empty($resultado)){ 
		$acceso = $usuarioDispositivoAccesoClass->getUsuarioDispositivoAcceso($resultado['idusuario_dispositivo']);
		if(is_array($acceso) and !empty($acceso)){
			$ultimo = strtotime($acceso['usuario_dispositivo_acceso']);	
			$hoy = strtotime("now");
			$proximo = $ultimo + ($usuarioDispositivoAccesoClass->tiempo * $usuarioDispositivoAccesoClass->dias);
			if($hoy < $proximo){ $verificacion = true; }
		}
	} 
	if(!$verificacion){ 
		$arreglos['ok'] = -22; 
		$arreglos = utf8_converter($arreglos);
		echo json_encode($arreglos);
		exit;
	} else {
		$usuario_logeado = true;
	}
} else {
	$arreglos['ok'] = -23; 
	$arreglos = utf8_converter($arreglos);
	echo json_encode($arreglos);
	exit;
}
?>