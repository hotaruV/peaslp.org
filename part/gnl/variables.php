<?php
date_default_timezone_set('America/Mexico_City');
setlocale(LC_ALL,"es_MX");

function siteURL($folder = ""){
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $domainName = $_SERVER['HTTP_HOST'].$folder."/";
    return $protocol.$domainName;
}

$target_host = NULL;
$version = rand();
$urlSitio = siteURL();

switch($modo_sitio){
	case 'loc':
		$target_host = "localhost:9701";
		$urlSitio = siteURL("/".$urlName);
		
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		
		break;
	case 'dev':
		$target_host = "wibik.space";
		$urlSitio = siteURL("/proyectos/2023/SanLuisPotosi");
		
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		
		break;
	case 'pro':
		
		$target_host = $urlName;
		$version = $version_f;
		$urlSitio = siteURL($urlFolder);
		
		ini_set('display_errors', 0);
		ini_set('display_startup_errors', 0);
		error_reporting(E_ALL);

		break;
}
?>