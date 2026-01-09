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

$navegador = NULL;
$navegador_id = NULL;

if (!isset($_COOKIE[$usuarioDispositivoAccesoClass->cookie]) or (isset($_COOKIE[$usuarioDispositivoAccesoClass->cookie]) and $_COOKIE[$usuarioDispositivoAccesoClass->cookie] == '')) {
	if(isset($acceso_restringido) and $acceso_restringido == true){ 
		header('Location: '.$urlSitio.$url_lang.slugify($array_lang['iniciar_sesion'][$idioma]).'?e=1');
	    exit;
	}
} else {
	if(isset($_COOKIE[$usuarioDispositivoAccesoClass->cookie]) and isset($_COOKIE[$usuarioDispositivoAccesoClass->cookie_id])){
		$navegador = $_COOKIE[$usuarioDispositivoAccesoClass->cookie];
		$navegador_id = $_COOKIE[$usuarioDispositivoAccesoClass->cookie_id];
		$usuario_logeado = true;	
	}
}
?>