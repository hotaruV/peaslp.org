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

header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');
$arreglos = array();

if(
	isset($_POST) and
	isset($_POST['token']) /*and
	isset($_POST['response'])*/
	
){

	require_once "../../lib/model/Usuario.php";
	require_once "../../lib/model/UsuarioDatos.php";
	require_once "../../lib/model/ShortUrl.php";
	require_once "../../lib/model/Notificacion.php";

	$usuarioClass = new Usuario();
	$usuarioDatosClass = new UsuarioDatos();
	$shortUrlClass = new ShortUrl();
	$notificacionClass = new Notificacion();
	
	/*		
	$response = strip_tags($_POST['response']);
  	$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$captcha_secret.'&response='.$response);
	$responseData = json_decode($verifyResponse);
	if(!$responseData->success){
		$arreglos['ok'] = -4;
	} else {
	*/
		$vars = array(
			'nombre' => array("leyenda" => "Nombre", "tipo" => "nombre", "nulo" => 0),
			'apellidos' => array("leyenda" => "Apellidos", "tipo" => "nombre", "nulo" => 0),
			'actor' => array("leyenda" => "Institución", "tipo" => "texto", "nulo" => 0),
			'correo' => array("leyenda" => "Correo electrónico", "tipo" => "mail", "nulo" => 0),
			'contrasena' => array("leyenda" => "Contraseña", "tipo" => "contrasena", "nulo" => 0),
			//'acepto' => array("leyenda" => "He leído y acepto el Aviso de privacidad y los Términos y Condiciones", "tipo" => "check", "nulo" => 0),
		);
		
		$ip = NULL;
		if (isset($_SERVER['REMOTE_ADDR']) and !empty($_SERVER['REMOTE_ADDR']) and filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP)) {
			$ip = $_SERVER['REMOTE_ADDR'];
		}
		
		$default = array(
			'estatus' => 0,
			'perfil' => 10,
			'folio' => NULL
		);
		
		$error_post = 0;
		$registro_post = array();
		foreach($vars as $key => $var){ 
			if(isset($_POST[$key])){ $registro_post[$key] = $_POST[$key]; }
			else { $error_post = 1; }
		}
		
		if ($error_post == 0) {
			$registro_data = array();
			$error = array();
			foreach($vars as $key => $var){ 
				$ok = false;
				$info = '';
				if(isset($registro_post[$key])){ 
					$validacion = validarData($registro_post[$key], $var);
					if($validacion["ok"]){ 
						$ok = true; 
						$registro_data[$key] = $validacion["valor"];
					} else { $info = $validacion["info"]; }
				} else { $info = 'No se recibió el dato.'; }
				if(!$ok){ $error[$key] = $info; }
			}
			if(empty($error)){
				foreach($default as $key => $valor){ $registro_data[$key] = $valor; }
				$usuario = $usuarioClass->getUsuarioByCorreo($registro_data['correo']);
				if(is_array($usuario) and !empty($usuario)){
					$arreglos['ok'] = -5;
				} else {
					$resultado = $usuarioClass->insertUsuario($registro_data['correo'], $registro_data['perfil'], $registro_data['contrasena']);
					if($resultado > 0){
						$idusuario = $resultado;
						$token = hash('sha512', uniqid(mt_rand(), true));
						$datos = array(
							"ip" => $ip,
							"token" => $token,
							"activo" => false,
							"activo_correo" => false,
						);
						foreach($registro_data as $key => $valor){ $datos[$key] = $valor; }
						$resultado = $usuarioDatosClass->insertUsuarioDatos($idusuario, json_encode($datos));
						if($resultado > 0){
							
							$arreglos['ok'] = 1;
							$arreglos['u'] = $registro_data['correo'];
							$arreglos['p'] = $registro_data['contrasena'];
							
							$logo_site = 'header_mail.png';
							$style_color=" color:#000000; ";
							$style_color_a=" color:#125da9; ";
							$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
							$email_content = '
								<p><big>Hola, <b style="'.$style_color.'">'.$registro_data['nombre'].' '.$registro_data['apellidos'].'</b></big></p>
								<p>Gracias registrarse en <b style="'.$style_color.'">Programa de implementación de la Política Estatal Anticorrupción de San Luis Potosí</b>.</p>
								<p>Tu usuario de acceso es: <b><a href="mailto:'.$registro_data['correo'].'" target="_blank" style="'.$style_color_a.'">'.$registro_data['correo'].'</a></b></p> 
								<p>Recuerda <b style="'.$style_color.'">confirmar tu {direccion} de {correo electrónico}</b>, por lo cual te pedimos dar clic en este enlace de verificación: <b style="'.$style_color_a.'"><a href="{enlace}" style="'.$style_color_a.'">{enlace_txt}</a></b>.</p>
								<p>Gracias.</p>
							';
		
							$short_url = $shortUrlClass->insertShortUrl($urlSitio.'?a=activar&t='.$token.'&c='.$registro_data['correo'], 6);
							if(is_array($short_url) and !empty($short_url)){
								$content = str_replace(
									array("{direccion}", "{correo electrónico}", "{correo}", "{enlace}", "{enlace_txt}"),
									array("dirección", "correo electrónico", $registro_data['correo'], $urlSitio.'?s='.$short_url['short_url'], $urlSitio.'?s='.$short_url['short_url']),
									$email_content
								);
								$emails = array($registro_data['correo']);
								$envio = $contactoClass->enviarMensaje($emails, "Bienvenido, gracias por registrarte", $content, true);
								$arreglos['envio'] = $envio;
							}
							
						} else { $arreglos['ok'] = $resultado; }
					} else { $arreglos['ok'] = $resultado; }				
				
				}
			} else {
				$arreglos['ok'] = -7; 
				$arreglos['error'] = $error; 
			}	
		} else { $arreglos['ok'] = -3; $arreglos['paso'] = 1; }
	//} 
} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>