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
require_once "../../lib/model/ShortUrl.php";
require_once "../../lib/model/Notificacion.php";

$usuarioClass = new Usuario();
$usuarioDispositivoClass = new UsuarioDispositivo();
$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();
$usuarioIngresoClass = new UsuarioIngreso();
$shortUrlClass = new ShortUrl();
$notificacionClass = new Notificacion();

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
	require_once "../../lib/model/Usuario.php";
	
	$vars = array(
		'base' => array("leyenda" => "Base", "tipo" => "texto", "nulo" => 0),
		'action' => array("leyenda" => "Acción", "tipo" => "texto", "nulo" => 0),
	);		
	if(isset($_POST['base']) and isset($_POST['action'])){
		if(in_array(trim($_POST['action']), array('ins','upd'))){
			switch(trim($_POST['base'])){
				case "usuario": 
					$vars['nombre'] = array("leyenda" => "Nombre", "tipo" => "nombre", "nulo" => 0);
					$vars['apellidos'] = array("leyenda" => "Apellidos", "tipo" => "nombre", "nulo" => 0);
					$vars['usuario'] = array("leyenda" => "Correo electrónico", "tipo" => "texto", "nulo" => 0);
					$vars['contrasena'] = array("leyenda" => "Contraseña", "tipo" => "contrasena", "nulo" => 0);
					$vars['contrasena_un_uso'] = array("leyenda" => "Contraseña de un solo uso", "tipo" => "switch", "nulo" => 1);
					$vars['correo_electronico'] = array("leyenda" => "Correo electrónico", "tipo" => "mail", "nulo" => 1);
					$vars['u_perfil'] = array("leyenda" => "Perfil", "tipo" => "radio", "nulo" => 0);
					$vars['actor'] = array("leyenda" => "Actor responsable", "tipo" => "entero", "nulo" => 1);
					$vars['institucion'] = array("leyenda" => "Institución coordinadora", "tipo" => "entero", "nulo" => 1);
					$vars['actor_municipio'] = array("leyenda" => "Municipio del actor responsable", "tipo" => "entero", "nulo" => 1);
					$vars['institucion_municipio'] = array("leyenda" => "Municipio de la Institución coordinadora", "tipo" => "entero", "nulo" => 1);
					
					$vars['actor_catalogo'] = array("leyenda" => "Catálogo del actor responsable", "tipo" => "entero", "nulo" => 1);
					$vars['actor_elemento'] = array("leyenda" => "Elemento del catálogo", "tipo" => "entero", "nulo" => 1);
					break;
			}

			if(trim($_POST['action']) == 'upd'){
				$vars['contrasena'] = array("leyenda" => "Contraseña", "tipo" => "contrasena", "nulo" => 1);
			}
		} 
	}
	
	$error_post = 0;
	$tabla_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $tabla_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	if ($error_post == 0) {
		$tabla_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($tabla_post[$key])){ 
				$validacion = validarData($tabla_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$tabla_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$tablaJSONClass = new TablaJSON($tabla_data['base']);
			$usuarioClass = new Usuario();
			
			$idTablaJSON = NULL;
			if(isset($_POST['id'.$tabla_data['base']])){ 
				$idTablaJSON = intval($_POST['id'.$tabla_data['base']]); 
			}

			if(in_array(($tabla_data['action']), array('ins','upd'))){
				//insertar / editar
				
				$resultado = 0;
				
				$ip = NULL;
				if (isset($_SERVER['REMOTE_ADDR']) and !empty($_SERVER['REMOTE_ADDR']) and filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP)) {
					$ip = $_SERVER['REMOTE_ADDR'];
				}
				$token = hash('sha512', uniqid(mt_rand(), true));

				$default = array(
					'creo' => $usuario['idusuario'],
					'modifico' => array(
					
					),
					'fecha' => date('Y-m-d H:i:s'),
					'modificacion' => NULL,
					'activo' => true,
					"ip" => $ip,
					"token" => $token,
					"activo_correo" => false,
				);

				$tabla_data['perfil'] = $tabla_data['u_perfil']['v'][0];
				

				if($idTablaJSON != NULL){
					$arreglos['upd'] = 1;
					
					$usuarioTemp = $usuarioClass->getUsuarioByCorreo($tabla_data['usuario']);
					if(is_array($usuarioTemp) and !empty($usuarioTemp)){
						if($usuarioTemp['idusuario'] != $idTablaJSON){
							$resultado = -6;	
						}
					}
					
					if($resultado != -6){
					
						$obj = $tablaJSONClass->getTablaJSONID($idTablaJSON, '');
						if(is_array($obj) and !empty($obj)){ 
							$arreglos['find'] = 1;
							$temp = json_decode($obj[$tabla_data['base'].'_data'], true);
							if (json_last_error() === JSON_ERROR_NONE) { }
							else { $temp = array(); }
							
							foreach($default as $llave => $var){ 
								if(isset($temp[$llave])){ $tabla_data[$llave] = $temp[$llave]; }
								else { $tabla_data[$llave] = $var; }
							}
							
							$tabla_data['modifico'][] = array( 
								'usuario' => $usuario['idusuario'], 
								'fecha' => date('Y-m-d H:i:s')
							);
							$tabla_data['modificacion'] = date('Y-m-d H:i:s');
							
							$arreglos['data'] = $tabla_data;
							$arreglos['info'] = $tabla_data[$tabla_data['base']];
							
	
							$contrasena = $tabla_data['contrasena'];
							unset($tabla_data['contrasena']);
	
							$resultado = $usuarioClass->updateUsuario($idTablaJSON, $tabla_data['usuario'], json_encode($tabla_data), $tabla_data['perfil']);
							if($resultado > 0){ 
								$arreglos['msj'] = $resultado;
								$resultado = $obj['id'.$tabla_data['base']]; 
								
								$arreglos['con'] = false;
								if($contrasena != NULL){
									$arreglos['con'] = true;
									
									$actualizo = $usuarioClass->updateContrasenaRecuperar($idTablaJSON, $tabla_data['usuario'], $contrasena);
									if($actualizo == 1){
	
									}
								}
							} 
						} else {
							$arreglos['find'] = 0;
							$resultado = $obj;
						}
					}
				} else {
					$arreglos['ins'] = 1;
					foreach($default as $key => $valor){ $tabla_data[$key] = $valor; }

					$contrasena = $tabla_data['contrasena'];
					unset($tabla_data['contrasena']);
					
					$usuarioTemp = $usuarioClass->getUsuarioByCorreo($tabla_data['usuario']);
					if(is_array($usuarioTemp) and !empty($usuarioTemp)){
						$resultado = -6;
					} else {

						$resultado = $usuarioClass->insertUsuario($tabla_data['usuario'], json_encode($tabla_data), $tabla_data['perfil'], $contrasena);
						
						$emails = array();
						if(filter_var($tabla_data['usuario'], FILTER_VALIDATE_EMAIL)){
							$emails[] = $tabla_data['usuario'];
						}
						if(isset($tabla_data["correo_electronico"]) and $tabla_data["correo_electronico"] != ""){
							$emails[] = $tabla_data['correo_electronico'];
						}
						
						if($resultado > 0 && !empty($emails)){
	
							$logo_site = 'header_mail.png';
							$style_color=" color:#000000; ";
							$style_color_a=" color:#125da9; ";
							$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
							$email_content = '
								<p><big>Hola, <b style="'.$style_color.'">'.$tabla_data['nombre'].' '.$tabla_data['apellidos'].'</b></big></p>
								<p>Bienvenido/a al <b style="'.$style_color.'">Sistema de monitoreo, seguimiento y evaluación de cumplimiento del PI-PEA</b>.</p>
								<p>
									Tu usuario de acceso es: <b><a href="mailto:'.$tabla_data['usuario'].'" target="_blank" style="'.$style_color_a.'">'.$tabla_data['usuario'].'</a></b> <br>
									Contraseña: <b>'.$contrasena.'</b>
								</p> 
								<p>Gracias.</p>
							';
							
							/*
							<p>Recuerda <b style="'.$style_color.'">confirmar tu {direccion} de {correo electrónico}</b>, por lo cual te pedimos dar clic en este enlace de verificación: <b style="'.$style_color_a.'"><a href="{enlace}" style="'.$style_color_a.'">{enlace_txt}</a></b>.</p>
							*/
		
							$short_url = $shortUrlClass->insertShortUrl($urlSitio.'?a=activar&t='.$token.'&c='.$tabla_data['usuario'], 6);
							if(is_array($short_url) and !empty($short_url)){
								$content = str_replace(
									array("{direccion}", "{correo electrónico}", "{correo}", "{enlace}", "{enlace_txt}"),
									array("dirección", "correo electrónico", $tabla_data['usuario'], $urlSitio.'?s='.$short_url['short_url'], $urlSitio.'?s='.$short_url['short_url']),
									$email_content
								);
								
								$envio = $contactoClass->enviarMensaje($emails, "Bienvenido al Sistema de monitoreo, seguimiento y evaluación de cumplimiento del PI-PEA", $content, true);
								$arreglos['envio'] = $envio;
							}
						}
					}
				}
				if($resultado > 0){		
					$arreglos['ok'] = 1;
				} else {
					$arreglos['ok'] = $resultado;
				}
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
