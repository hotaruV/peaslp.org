<?php
$usuario_perfil = NULL;
$usuario_datos_arr = array();

if($usuario_logeado and isset($usuario['idusuario']) ){
	$usuario_perfil = $usuario['perfil']; 
	$usuario_datos_arr = $usuario['usuario_datos'];
	/*
	$usuario_datos = $usuarioDatosClass->getUsuarioDatos($usuario['idusuario']);
	if(is_array($usuario_datos) and !empty($usuario_datos)){ 
		$usuario_datos_arr = json_decode($usuario_datos['usuario_datos'], true); 
	}
	*/
}
?>