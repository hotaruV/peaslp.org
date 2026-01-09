<?php 
require_once "part/gnl/login/verificar_login.php";
require_once "part/gnl/login/verificar_login_ingreso.php";

$usuario_id = NULL;
$usuario_perfil = NULL;
$usuario_datos_arr = array();
$usuario_data_arr = array();
if(isset($idusuario) and trim($idusuario) != ""){
	$temp_usuario = $usuarioClass->getUsuario($idusuario);
	if(is_array($temp_usuario) and !empty($temp_usuario)){ 
		$usuario_id = $temp_usuario['idusuario'];
		$usuario_perfil = $temp_usuario['perfil']; 
		$usuario_datos_arr = usuarioDatosBasicos($temp_usuario['usuario_datos']); 
		
		$usuario_data_arr = json_decode($temp_usuario["usuario_data"], true);
	}
}
?>