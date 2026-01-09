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
	$periodoClass = new TablaJSON("periodo");
	$periodos = $periodoClass->getTablaJSONs(
		" 
		AND ( 
			NOW() BETWEEN 
			CONCAT(JSON_UNQUOTE(JSON_EXTRACT(periodo_data, '$.inicia')), ' 00:00:00') AND 
			CONCAT(JSON_UNQUOTE(JSON_EXTRACT(periodo_data, '$.termina')), ' 23:59:59') 
		) 
		AND activo = 1 
		",
		" CAST(JSON_UNQUOTE(JSON_EXTRACT(periodo_data, '$.inicia')) AS DATE) ASC "
	);
	
	foreach($periodos as $key => $periodo){
		$periodos[$key]["periodo_data"] = json_decode($periodos[$key]["periodo_data"], true);
	}
	$arreglos['periodo'] = $periodos;	
	$arreglos['ok'] = 1;
				
} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>
