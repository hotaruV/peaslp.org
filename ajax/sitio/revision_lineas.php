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

	$vars = array(
		'periodo' => array("leyenda" => "Periodo", "tipo" => "entero", "nulo" => 0),
		'actor' => array("leyenda" => "Actor", "tipo" => "entero", "nulo" => 0),
		'actor_municipio' => array("leyenda" => "Actor Municipio", "tipo" => "entero", "nulo" => 1),
		'actor_catalogo' => array("leyenda" => "Catálogo del actor responsable", "tipo" => "entero", "nulo" => 1),
		'actor_elemento' => array("leyenda" => "Elemento del catálogo", "tipo" => "entero", "nulo" => 1),
	);
	
	$error_post = 0;
	$revision_lineas_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $revision_lineas_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$revision_lineas_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($revision_lineas_post[$key])){ 
				$validacion = validarData($revision_lineas_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$revision_lineas_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$periodoClass = new TablaJSON("periodo");
			$periodo = $periodoClass->getTablaJSONID($revision_lineas_data["periodo"]);

			if(is_array($periodo) and !empty($periodo)){ 
				$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);
				
				if($revision_lineas_data["actor_municipio"] == NULL){
					$revision_lineas_data["actor_municipio"] = "null";
				}
				if($revision_lineas_data["actor_catalogo"] == NULL){
					$revision_lineas_data["actor_catalogo"] = "null";
				}
				if($revision_lineas_data["actor_elemento"] == NULL){
					$revision_lineas_data["actor_elemento"] = "null";
				}
			
				$usuarios_arr = array();
				$arreglos["err"] = array();
				$arreglos["rev_err"] = array();
				
				$usuarioTClass = new TablaJSON("usuario");
				$usuariosT = $usuarioTClass->getTablaJSONs(
					" 
						AND perfil = 4
						AND JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor')) = ".$revision_lineas_data["actor"]."
						AND JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor_municipio')) = \"".$revision_lineas_data["actor_municipio"]."\"
						AND ( 
							(
								JSON_EXTRACT(usuario_data, '$.actor_catalogo') IS NULL  AND
								\"".$revision_lineas_data["actor_catalogo"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(usuario_data, '$.actor_catalogo') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor_catalogo')) = \"".$revision_lineas_data["actor_catalogo"]."\" 
							)
						)
						AND (
							(
								JSON_EXTRACT(usuario_data, '$.actor_elemento') IS NULL AND
								\"".$revision_lineas_data["actor_elemento"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(usuario_data, '$.actor_elemento') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor_elemento')) = \"".$revision_lineas_data["actor_elemento"]."\"
							)
						)
						AND activo = 1 
					",
					" fecha DESC ",
					", (
						SELECT JSON_UNQUOTE(JSON_EXTRACT(actor_data, '$.actor')) 
						FROM actor 
						WHERE idactor = JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor')) AND eliminado = 0
					) AS actor,
					(
						SELECT JSON_UNQUOTE(JSON_EXTRACT(perfil_data, '$.perfil')) 
						FROM perfil 
						WHERE idperfil = JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.perfil')) AND eliminado = 0
					) AS perfil"
				);

			
				if(is_array($usuariosT) and !empty($usuariosT)){ 
					//$usuarioT["usuario_data"] = json_decode($usuarioT["usuario_data"], true);
					
					foreach($usuariosT as $key => $item){
						$item["usuario_data"] = json_decode($item["usuario_data"], true);
						
						$perfil_txt = "";
						if(isset($item["usuario_data"]["actor_catalogo"]) and  $item["usuario_data"]["actor_catalogo"] != ""){
							if(isset($item["usuario_data"]["actor_elemento"]) and  $item["usuario_data"]["actor_elemento"] != ""){
								$elementoClass = new TablaJSON("elemento");
								$elemento = $elementoClass->getTablaJSONID($item["usuario_data"]["actor_elemento"]);
								if(is_array($elemento) and !empty($elemento)){
									$elemento['elemento_data'] = json_decode($elemento['elemento_data'], true);
									$perfil_txt .= " - ".$elemento['elemento_data']['elemento'];
								}
							}
						}
						
						$usuarios_arr[] = array(
							"nombre" => $item["usuario_data"]["nombre"],
							"apellidos" => $item["usuario_data"]["apellidos"],
							"usuario" => $item["usuario_data"]["usuario"],
							"perfil" => $item["perfil"],
							"idperfil" => $item["usuario_data"]["perfil"],
							"actor" => $item["actor"],
							"idactor" => $item["usuario_data"]["actor"],
							"actor_municipio" => $item["usuario_data"]["actor_municipio"],
							"actor_catalogo" => isset($item["usuario_data"]["actor_catalogo"])?$item["usuario_data"]["actor_catalogo"]:NULL,
							"actor_elemento" => isset($item["usuario_data"]["actor_elemento"])?$item["usuario_data"]["actor_elemento"]:NULL,
							"perfil_txt" => $perfil_txt,
						);
					}
				} else {
					//No hay usuarios asigandos a este actor 
					$arreglos["err"][] = 1;
				}
					

				$capturaClass = new TablaJSON("captura");
				$captura = $capturaClass->getTablaJSONUnique(
					" 
						AND captura = 'linea'
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor')) = ".$revision_lineas_data["actor"]."
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_municipio')) = \"".$revision_lineas_data["actor_municipio"]."\"
						AND (
							(
								JSON_EXTRACT(captura_data, '$.actor_catalogo') IS NULL AND
								\"".$revision_lineas_data["actor_catalogo"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(captura_data, '$.actor_catalogo') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_catalogo')) = \"".$revision_lineas_data["actor_catalogo"]."\"
							)
						)
						AND (
							(
								JSON_EXTRACT(captura_data, '$.actor_elemento') IS NULL AND
								\"".$revision_lineas_data["actor_elemento"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(captura_data, '$.actor_elemento') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.actor_elemento')) = \"".$revision_lineas_data["actor_elemento"]."\"
							)
						)
						AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = ".$revision_lineas_data["periodo"]."
						AND activo = 1 
					"
				);
				if(is_array($captura) and !empty($captura)){ 
					$captura['captura_data'] = json_decode($captura['captura_data'], true);
					$arreglos["captura"] = $captura;
				} else {
					//No hay ninguna captura realizada en este periodo por este actor
					$arreglos["err"][] = 2;
				}
				
				$revisionClass = new TablaJSON("revision");
				$revision = $revisionClass->getTablaJSONUnique(
					" 
						AND revision = 'linea'
						AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor')) = ".$revision_lineas_data["actor"]."
						AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_municipio')) = \"".$revision_lineas_data["actor_municipio"]."\"
						AND (
							(
								JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NULL AND
								\"".$revision_lineas_data["actor_catalogo"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_catalogo')) = \"".$revision_lineas_data["actor_catalogo"]."\"
							)
						)
						AND (
							(
								JSON_EXTRACT(revision_data, '$.actor_elemento') IS NULL AND
								\"".$revision_lineas_data["actor_elemento"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(revision_data, '$.actor_elemento') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_elemento')) = \"".$revision_lineas_data["actor_elemento"]."\"
							)
						)
						AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$revision_lineas_data["periodo"]."
						AND activo = 1 
					"
				);
				if(is_array($revision) and !empty($revision)){ 
					$revision['revision_data'] = json_decode($revision['revision_data'], true);
					$arreglos["revision"] = $revision;
				} else {
					//No hay ninguna revision realizada en este periodo por este actor
					$arreglos["rev_err"][] = 2;
				}
				
				$arreglos["usuarios"] = $usuarios_arr;
				$idactor = $revision_lineas_data["actor"];
				
				$estrategias_filtro = NULL;
				
				if($usuario_perfil == 5){
					$usuarioInstitucionClass = new TablaJSON("usuario");
					$usuarioInstitucion = $usuarioInstitucionClass->getTablaJSONUnique(
						" 
							AND perfil = 5
							AND idusuario = ".$usuario['idusuario']."
							AND activo = 1 
						"
					);
					if(is_array($usuarioInstitucion) and !empty($usuarioInstitucion)){
						$usuarioInstitucion["usuario_data"] = json_decode($usuarioInstitucion["usuario_data"], true);
						$estrategiaClass = new TablaJSON("estrategia");
						$estrategias = $estrategiaClass->getTablaJSONs("
							AND activo = 1 
							AND JSON_CONTAINS(JSON_EXTRACT(estrategia_data, '$.instituciones.v[*].id'),'\"".$usuarioInstitucion["usuario_data"]["institucion"]."\"','$')
						");
						
						$estrategias_filtro = array();
						foreach($estrategias as $key => $estrategia){
							$estrategias[$key]['estrategia_data'] = json_decode($estrategias[$key]['estrategia_data'], true);
							$data = $estrategias[$key]['estrategia_data'];	
							$estrategias_filtro[] = $estrategia["idestrategia"];
						}
						$arreglos["estrategias_filtro"] = $estrategias_filtro;
					}
						
				}
				
				require_once "part_preguntas.php";
				$arreglos["ok"] = 1;
			} else {
				$arreglos["ok"] = 0;
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
