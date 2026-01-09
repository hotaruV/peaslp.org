<?php
define('APPLICATION', true);
require_once "../../lib/class/Validar.php";
require_once "../../lib/class/Util.php";
require_once "../../lib/class/ConectarDB.php";
require_once "../../lib/class/Contacto.php";
require_once "../../lib/phpmailer/class.phpmailer.php";
require_once "../../lib/phpmailer/class.smtp.php";

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

	$vars = array(
		'idperiodo' => array("leyenda" => "Periodo", "tipo" => "entero", "nulo" => 0),
		'actor' => array("leyenda" => "Actor", "tipo" => "entero", "nulo" => 0),
		'actor_municipio' => array("leyenda" => "Actor Municipio", "tipo" => "entero", "nulo" => 1),
		'actor_catalogo' => array("leyenda" => "Catálogo del actor responsable", "tipo" => "entero", "nulo" => 1),
		'actor_elemento' => array("leyenda" => "Elemento del catálogo", "tipo" => "entero", "nulo" => 1),
	);
	
	$error_post = 0;
	$revision_indicadores_servicio_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $revision_indicadores_servicio_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$revision_indicadores_servicio_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($revision_indicadores_servicio_post[$key])){ 
				$validacion = validarData($revision_indicadores_servicio_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$revision_indicadores_servicio_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			if($revision_indicadores_servicio_data["actor_municipio"] == NULL){
				$revision_indicadores_servicio_data["actor_municipio"] = "null";
			}
			if($revision_indicadores_servicio_data["actor_catalogo"] == NULL){
				$revision_indicadores_servicio_data["actor_catalogo"] = "null";
			}
			if($revision_indicadores_servicio_data["actor_elemento"] == NULL){
				$revision_indicadores_servicio_data["actor_elemento"] = "null";
			}
			
			$periodoClass = new TablaJSON("periodo");
			$periodo = $periodoClass->getTablaJSONID($revision_indicadores_servicio_data["idperiodo"]);

			if(is_array($periodo) and !empty($periodo)){ 
				$periodo["idperiodo"];
				$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);
				
				/* revision */
				$usuarioTMunicipio = " 
					AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_municipio')) = \"".$revision_indicadores_servicio_data["actor_municipio"]."\" 
					AND (
						(
							JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NULL AND
							\"".$revision_indicadores_servicio_data["actor_catalogo"]."\" = \"null\"
						)
						OR (
							JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NOT NULL AND
							JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_catalogo')) = \"".$revision_indicadores_servicio_data["actor_catalogo"]."\"
						)
					)
					AND (
						(
							JSON_EXTRACT(revision_data, '$.actor_elemento') IS NULL AND
							\"".$revision_indicadores_servicio_data["actor_elemento"]."\" = \"null\"
						)
						OR (
							JSON_EXTRACT(revision_data, '$.actor_elemento') IS NOT NULL AND
							JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_elemento')) = \"".$revision_indicadores_servicio_data["actor_elemento"]."\"
						)
					)
				";
				$revisionClass = new TablaJSON("revision");
				$revision = $revisionClass->getTablaJSONUnique(
					" 
						AND revision = 'captura'
						AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor')) = ".$revision_indicadores_servicio_data["actor"]."
						".$usuarioTMunicipio."
						AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$revision_indicadores_servicio_data["idperiodo"]."
						AND activo = 1 
					"
				);
				$arreglos["revision"] = 0;
				if(is_array($revision) and !empty($revision)){ 
					$arreglos["idrevision"] = $revision['idrevision'];
					$arreglos["revision"] = $revisionClass->deleteTablaJSON($revision['idrevision']);
				}
				
				/* captura */
				$usuarioTMunicipio = " 
					AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"".$revision_indicadores_servicio_data["actor_municipio"]."\" 
					AND (
						(
							JSON_EXTRACT(captura_data, '$.actor_catalogo') IS NULL AND
							\"".$revision_indicadores_servicio_data["actor_catalogo"]."\" = \"null\"
						)
						OR (
							JSON_EXTRACT(captura_data, '$.actor_catalogo') IS NOT NULL AND
							JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_catalogo')) = \"".$revision_indicadores_servicio_data["actor_catalogo"]."\"
						)
					)
					AND (
						(
							JSON_EXTRACT(captura_data, '$.actor_elemento') IS NULL AND
							\"".$revision_indicadores_servicio_data["actor_elemento"]."\" = \"null\"
						)
						OR (
							JSON_EXTRACT(captura_data, '$.actor_elemento') IS NOT NULL AND
							JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_elemento')) = \"".$revision_indicadores_servicio_data["actor_elemento"]."\"
						)
					)
				";
				$capturaClass = new TablaJSON("captura");
				$captura = $capturaClass->getTablaJSONUnique(
					" 
						AND captura = 'captura'	
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$revision_indicadores_servicio_data["actor"]."
						".$usuarioTMunicipio."
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$revision_indicadores_servicio_data["idperiodo"]."
						AND activo = 1 
					"
				);
				$arreglos["captura"] = 0;
				if(is_array($captura) and !empty($captura)){ 
					$arreglos["idcaptura"] = $captura['idcaptura'];
					$arreglos["captura"] = $capturaClass->deleteTablaJSON($captura['idcaptura']);
				} 
				
				
				$arreglos["ok"] = 1;
			} else {
				$arreglos["ok"] = 0;
				$arreglos["err"] = 1;
			}
		} else {
			$arreglos['ok'] = -7; 
			$arreglos['error'] = $error; 
		}	
	} else { $arreglos['ok'] = -3; $arreglos['paso'] = 1; }
} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>
