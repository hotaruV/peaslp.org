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
		'idlinea' => array("leyenda" => "Línea de acción", "tipo" => "entero", "nulo" => 0),
		'idperiodo' => array("leyenda" => "Periodo", "tipo" => "entero", "nulo" => 0),
		'actor' => array("leyenda" => "Actor", "tipo" => "entero", "nulo" => 0),
		'actor_municipio' => array("leyenda" => "Actor Municipio", "tipo" => "entero", "nulo" => 1),
		'actor_catalogo' => array("leyenda" => "Catálogo del actor responsable", "tipo" => "entero", "nulo" => 1),
		'actor_elemento' => array("leyenda" => "Elemento del catálogo", "tipo" => "entero", "nulo" => 1),
		'aprobo' => array("leyenda" => "Aprobar la revision de la línea de acción", "tipo" => "radio", "nulo" => 0),
		'retroalimentacion' => array("leyenda" => "Retroalimentación", "tipo" => "texto", "nulo" => 1),
	);
	
	$error_post = 0;
	$revision_lineas_servicio_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $revision_lineas_servicio_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$revision_lineas_servicio_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($revision_lineas_servicio_post[$key])){ 
				$validacion = validarData($revision_lineas_servicio_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$revision_lineas_servicio_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			if($revision_lineas_servicio_data["actor_municipio"] == NULL){
				$revision_lineas_servicio_data["actor_municipio"] = "null";
			}
			if($revision_lineas_servicio_data["actor_catalogo"] == NULL){
				$revision_lineas_servicio_data["actor_catalogo"] = "null";
			}
			if($revision_lineas_servicio_data["actor_elemento"] == NULL){
				$revision_lineas_servicio_data["actor_elemento"] = "null";
			}
			
			
			$periodoClass = new TablaJSON("periodo");
			$periodo = $periodoClass->getTablaJSONID($revision_lineas_servicio_data["idperiodo"]);

			if(is_array($periodo) and !empty($periodo)){ 
				$periodo["idperiodo"];
				$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);
				
				$usuarioTMunicipio = " 
					AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_municipio')) = \"".$revision_lineas_servicio_data["actor_municipio"]."\" 
					AND (
						(
							JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NULL AND
							\"".$revision_lineas_servicio_data["actor_catalogo"]."\" = \"null\"
						)
						OR (
							JSON_EXTRACT(revision_data, '$.actor_catalogo') IS NOT NULL AND
							JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_catalogo')) = \"".$revision_lineas_servicio_data["actor_catalogo"]."\"
						)
					)
					AND (
						(
							JSON_EXTRACT(revision_data, '$.actor_elemento') IS NULL AND
							\"".$revision_lineas_servicio_data["actor_elemento"]."\" = \"null\"
						)
						OR (
							JSON_EXTRACT(revision_data, '$.actor_elemento') IS NOT NULL AND
							JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor_elemento')) = \"".$revision_lineas_servicio_data["actor_elemento"]."\"
						)
					)
				";
				
				$default = array(
					'creo' => $usuario['idusuario'],
					'modifico' => array(
					
					),
					'lineas' => array(
						
					),
					'fecha' => date('Y-m-d H:i:s'),
					'modificacion' => NULL,
					'activo' => true,
				);

				$revisionClass = new TablaJSON("revision");
				$revision = $revisionClass->getTablaJSONUnique(
					" 
						AND revision = 'linea'
						AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor')) = ".$revision_lineas_servicio_data["actor"]."
						".$usuarioTMunicipio."
						AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$revision_lineas_servicio_data["idperiodo"]."
						AND activo = 1 
					"
				);

				if(is_array($revision) and !empty($revision)){ 
					$arreglos['upd'] = 1;

					$revision["revision_data"] = json_decode($revision["revision_data"], true);
					if (json_last_error() === JSON_ERROR_NONE) { }
					else { $revision["revision_data"] = array(); }
					
					foreach($default as $llave => $var){ 
						if(!isset($revision["revision_data"][$llave])){ 
							$revision["revision_data"][$llave] = $var; 
						}
					}
					
					
					$revision["revision_data"]["lineas"][$revision_lineas_servicio_data["idlinea"]]['actual'] = array(
						"aprobo" => $revision_lineas_servicio_data["aprobo"],
						"retroalimentacion" => $revision_lineas_servicio_data["retroalimentacion"],
						"quien" => array(
							"usuario" => $usuario['idusuario'], 
							"fecha" => date('Y-m-d H:i:s')
						)
					);
					
					if(!isset($revision["revision_data"]["lineas"][$revision_lineas_servicio_data["idlinea"]]['historico'])){
						$revision["revision_data"]["lineas"][$revision_lineas_servicio_data["idlinea"]]['historico'] = array();	
					}
					
					$revision["revision_data"]["lineas"][$revision_lineas_servicio_data["idlinea"]]['historico'][] = $revision["revision_data"]["lineas"][$revision_lineas_servicio_data["idlinea"]]['actual'];

					$revision["revision_data"]['modifico'][] = array( 
						'usuario' => $usuario['idusuario'], 
						'fecha' => date('Y-m-d H:i:s')
					);
					$revision["revision_data"]['modificacion'] = date('Y-m-d H:i:s');

					$resultado = $revisionClass->updateTablaJSON($revision['idrevision'], $revision['revision'], json_encode($revision["revision_data"]));
					if($resultado > 0){ 
						$arreglos['msj'] = $resultado;
						$resultado = $revision['idrevision']; 
					} 

				} else {
					$arreglos['ins'] = 1;

					//insertar
					$revision_data = array(
						"periodo" => $revision_lineas_servicio_data["idperiodo"],
						"actor" => $revision_lineas_servicio_data["actor"],
						"actor_municipio" => (($revision_lineas_servicio_data["actor_municipio"] != "null")?$revision_lineas_servicio_data["actor_municipio"]:NULL),
						"actor_catalogo" => (($revision_lineas_servicio_data["actor_catalogo"] != "null")?$revision_lineas_servicio_data["actor_catalogo"]:NULL),
						"actor_elemento" => (($revision_lineas_servicio_data["actor_elemento"] != "null")?$revision_lineas_servicio_data["actor_elemento"]:NULL),
					);
					
					foreach($default as $key => $valor){ $revision_data[$key] = $valor; }
					
					$revision_data["lineas"][$revision_lineas_servicio_data["idlinea"]] = array(
						'actual' => array(
							"aprobo" => $revision_lineas_servicio_data["aprobo"],
							"retroalimentacion" => $revision_lineas_servicio_data["retroalimentacion"],
							"quien" => array(
								"usuario" => $usuario['idusuario'], 
								"fecha" => date('Y-m-d H:i:s')
							)
						),
						'historico' => array(),
					);
					
					$revision_data["lineas"][$revision_lineas_servicio_data["idlinea"]]['historico'][] = $revision_data["lineas"][$revision_lineas_servicio_data["idlinea"]]['actual'];
					
					$resultado = $revisionClass->insertTablaJSON("linea", json_encode($revision_data));
					if($resultado > 0){		
						
					}
				}
				if($resultado > 0){		
					
					$arreglos['id'] = $resultado;
					$arreglos['ok'] = 1;

					$revisionClass = new TablaJSON("revision");
					$revision = $revisionClass->getTablaJSONUnique(
						" 
							AND revision = 'linea'
							AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.actor')) = ".$revision_lineas_servicio_data["actor"]."
							".$usuarioTMunicipio."
							AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = ".$revision_lineas_servicio_data["idperiodo"]."
							AND activo = 1 
						"
					);
					if(is_array($revision) and !empty($revision)){ 
						$revision['revision_data'] = json_decode($revision['revision_data'], true);
						$arreglos["revision"] = $revision;
					} else {
						//No hay ninguna revision realizada en este periodo por este actor
						$arreglos["err"] = 2;
					}
					
					/*
					$logo_site = 'header_mail.png';
					$style_color=" color:#000000; ";
					$style_color_a=" color:#125da9; ";
					$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
					
					$email_subject = "Retroalimentación de línea de acción: ";
					$email_content = "
						<p>Por medio del presente, <strong>le notificamos que hay nueva retroalimentación para la línea de acción:  en el marco del seguimiento del Programa de Implementación de la Política Estatal Anticorrupción.</p>
						
						<p>".nl2br($revision_lineas_servicio_data["retroalimentacion"])."</p>
						
						<p>Quedamos a su disposición para cualquier consulta o asistencia que pueda necesitar durante este proceso.</p>
						<p>
							<strong>Atentamente,<br>
							Equipo SESEA</strong>
						</p>
					";
					
					$emails = array("wibik2009@gmail.com");
					$envio = $contactoClass->enviarMensaje($emails, $email_subject, $email_content, true);
					*/
					
				} else {
					$arreglos['ok'] = $resultado;
					$arreglos["err"] = 3;
				}
				
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
