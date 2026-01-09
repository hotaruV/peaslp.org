<?php
define('APPLICATION', true);
require_once "../../lib/class/Validar.php";
require_once "../../lib/class/Util.php";
require_once "../../lib/class/ConectarDB.php";

require_once "../../part/config.php";
require_once "../../part/gnl/variables.php";
require_once "../../part/gnl/idioma.php";

require_once "../../lib/class/Contacto.php";
require_once "../../lib/phpmailer/class.phpmailer.php";
require_once "../../lib/phpmailer/class.smtp.php";

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
	require_once "../../lib/model/Contacto.php";
	$contactoDataClass = new ContactoData();
	
	$vars = array(
		'tipo' => array("leyenda" => "Tipo", "tipo" => "texto", "nulo" => 0),
		'idperiodo' => array("leyenda" => "ID Periodo", "tipo" => "entero", "nulo" => 0),
		'periodo' => array("leyenda" => "Periodo", "tipo" => "texto", "nulo" => 0),
		
		'eje' => array("leyenda" => "Eje", "tipo" => "texto", "nulo" => 0),
		'prioridad' => array("leyenda" => "Prioridad", "tipo" => "texto", "nulo" => 0),
		'plazo' => array("leyenda" => "Plazo", "tipo" => "texto", "nulo" => 0),
		'estrategia' => array("leyenda" => "Estrategia", "tipo" => "texto", "nulo" => 0),
		
		'idactor' => array("leyenda" => "ID Actor", "tipo" => "entero", "nulo" => 0),
		'actor' => array("leyenda" => "Actor", "tipo" => "texto", "nulo" => 0),
		'idmunicipio' => array("leyenda" => "ID Municipio", "tipo" => "entero", "nulo" => 1),
		'municipio' => array("leyenda" => "Municipio", "tipo" => "texto", "nulo" => 1),
		
		"idcatalogo" => array("leyenda" => "ID Catálogo del actor responsable", "tipo" => "entero", "nulo" => 1),
		"catalogo" => array("leyenda" => "Catálogo del actor responsable", "tipo" => "texto", "nulo" => 1),
		"idelemento" => array("leyenda" => "ID Elemento del catálogo", "tipo" => "entero", "nulo" => 1),
		"elemento" => array("leyenda" => "Elemento del catálogo", "tipo" => "texto", "nulo" => 1),
		
		
		'data_1' => array("leyenda" => "Dato 1", "tipo" => "texto", "nulo" => 0),
		'data_2' => array("leyenda" => "Dato 2", "tipo" => "texto", "nulo" => 1),
		'data_3' => array("leyenda" => "Dato 3", "tipo" => "texto", "nulo" => 1),
		
		'cumplio' => array("leyenda" => "Cumplio", "tipo" => "texto", "nulo" => 0),
		'evaluacion' => array("leyenda" => "Evaluación", "tipo" => "texto", "nulo" => 0),
		'retroalimentacion' => array("leyenda" => "Retroalimentación", "tipo" => "texto", "nulo" => 1),
	);
	
	$error_post = 0;
	$revision_notificar_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $revision_notificar_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$revision_notificar_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($revision_notificar_post[$key])){ 
				$validacion = validarData($revision_notificar_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$revision_notificar_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$resultado = $contactoDataClass->insertContacto(json_encode($revision_notificar_data));
			if($resultado > 0){
				$logo_site = 'header_mail.png';
				$style_color=" color:#000000; ";
				$style_color_a=" color:#125da9; ";
					
				$content = '
					<table width="100%" border="0" cellspacing="0" cellpadding="5" align="center">
					  <tr>
						<td width="150"><strong>Periodo:</strong></td>
						<td>'.$revision_notificar_data["periodo"].'</td>
					  </tr>
					  
					  <tr>
						<td width="150"><strong>Eje:</strong></td>
						<td>'.$revision_notificar_data["eje"].'</td>
					  </tr>
					  <tr>
						<td width="150"><strong>Prioridad:</strong></td>
						<td>'.$revision_notificar_data["prioridad"].'</td>
					  </tr>
					  <tr>
						<td width="150"><strong>Plazo:</strong></td>
						<td>'.$revision_notificar_data["plazo"].'</td>
					  </tr>
					  <tr>
						<td width="150"><strong>Estrategia:</strong></td>
						<td>'.$revision_notificar_data["estrategia"].'</td>
					  </tr>
					  <tr>
						<td width="150"><strong>'.$revision_notificar_data["tipo"].':</strong></td>
						<td>'.$revision_notificar_data["data_1"].'</td>
					  </tr>
				';
				if($revision_notificar_data["data_2"] != ""){
					$content .= '
					  <tr>
						<td width="150"><strong>Meta:</strong></td>
						<td>'.$revision_notificar_data["data_2"].'</td>
					  </tr>
					';	
				}
				if($revision_notificar_data["data_3"] != ""){
					$content .= '
					  <tr>
						<td width="150"><strong>Meta al:</strong></td>
						<td>'.$revision_notificar_data["data_3"].'</td>
					  </tr>
					';	
				}
				
				$content .= '
					  <tr>
						<td width="150"><strong>Captura:</strong></td>
						<td>'.$revision_notificar_data["cumplio"].'</td>
					  </tr>
					  <tr>
						<td width="150"><strong>Revisión:</strong></td>
						<td>'.$revision_notificar_data["evaluacion"].'</td>
					  </tr>
					  <tr>
						<td width="150"><strong>Retroalimentación:</strong></td>
						<td>'.$revision_notificar_data["retroalimentacion"].'</td>
					  </tr>
				';
				
				$content .= '
					</table>
				';
				
				$usuarios_arr = array();
				if($revision_notificar_data["idmunicipio"] == NULL){
					$revision_notificar_data["idmunicipio"] = "null";
				}
				if($revision_notificar_data["idcatalogo"] == NULL){
					$revision_notificar_data["idcatalogo"] = "null";
				}
				if($revision_notificar_data["idelemento"] == NULL){
					$revision_notificar_data["idelemento"] = "null";
				}
				
				$usuarioTClass = new TablaJSON("usuario");
				$usuariosT = $usuarioTClass->getTablaJSONs(
					" 
						AND perfil = 4
						AND JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor')) = ".$revision_notificar_data["idactor"]."
						AND JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor_municipio')) = \"".$revision_notificar_data["idmunicipio"]."\"
						AND ( 
							(
								JSON_EXTRACT(usuario_data, '$.actor_catalogo') IS NULL  AND
								\"".$revision_notificar_data["idcatalogo"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(usuario_data, '$.actor_catalogo') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor_catalogo')) = \"".$revision_notificar_data["idcatalogo"]."\" 
							)
						)
						AND (
							(
								JSON_EXTRACT(usuario_data, '$.actor_elemento') IS NULL AND
								\"".$revision_notificar_data["idelemento"]."\" = \"null\"
							)
							OR (
								JSON_EXTRACT(usuario_data, '$.actor_elemento') IS NOT NULL AND
								JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.actor_elemento')) = \"".$revision_notificar_data["idelemento"]."\"
							)
						)
						AND activo = 1 
						AND eliminado = 0
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
					foreach($usuariosT as $key => $item){
						$item["usuario_data"] = json_decode($item["usuario_data"], true);
						
						if(filter_var(trim($item["usuario_data"]["usuario"]), FILTER_VALIDATE_EMAIL)){
							$usuarios_arr[] = $item["usuario_data"]["usuario"];		
						}
						
						if(isset($item["usuario_data"]["correo_electronico"]) and $item["usuario_data"]["correo_electronico"] != ""){
							$usuarios_arr[] = $item["usuario_data"]["correo_electronico"];			
						}	
					}
				}
				
				$usuarios_arr[] = "wibik2009@gmail.com";
				$arreglos['usuarios_arr'] = $usuarios_arr;
				$emails = $usuarios_arr;
				$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
				$envio = $contactoClass->enviarMensaje($emails, trim_text("Notificación de revisión: ".$revision_notificar_data["tipo"]." - ".$revision_notificar_data["data_1"], 140), $content, true);
				$arreglos['envio'] = $envio;
				
				/*
				$envio = $contactoClass->enviarMensaje(array($revision_notificar_data["correo"]), "Ticket Recibido - ".$revision_notificar_data["folio"].": ".$revision_notificar_data["motivo"], $content, true);
				$arreglos['copia'] = $envio;
				*/
				
				$arreglos['ok'] = 1;	
			} else { $arreglos['ok'] = $resultado; }
		} else {
			$arreglos['ok'] = -7; 
			$arreglos['error'] = $error; 
		}	
	} else { $arreglos['ok'] = -3; $arreglos['paso'] = 1; }
} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>