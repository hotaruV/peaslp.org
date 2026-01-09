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
	isset($_POST['token']) and 
	isset($_POST['usuario']) /*and 
	isset($_POST['response'])*/
){
	require_once "../../lib/model/Usuario.php";
	require_once "../../lib/model/UsuarioDatos.php";
	$usuarioClass = new Usuario();
	$usuarioDatosClass = new UsuarioDatos();
	
	/*
	$response = strip_tags($_POST['response']);
  	$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$captcha_secret.'&response='.$response);
	$responseData = json_decode($verifyResponse);
	if(!$responseData->success){
		$arreglos['ok'] = -4;
	} else {
	*/
		$usuario = strip_tags(trim($_POST['usuario']));
		
		$resultado = $usuarioClass->getUsuarioByCorreo($usuario);
		if(is_array($resultado) and !empty($resultado)){
			
			$nombre_completo = '';
			$activar_usuario_datos = $usuarioDatosClass->getUsuarioDatos($resultado['idusuario']);
			if(is_array($activar_usuario_datos) and !empty($activar_usuario_datos)){
				$usuario_datos = json_decode($activar_usuario_datos['usuario_datos'], true);
				//$nombre_completo = $usuario_datos['nombre'].' '.$usuario_datos['apellidos'];
			}
			
			$contrasena = generarCodigo(8);
			$actualizo = $usuarioClass->updateContrasenaRecuperar($resultado['idusuario'], $resultado['usuario'], $contrasena);
			if($actualizo == 1){
				
				$style_color=" color:#000000; ";
				$style_color_a=" color:#006eb5; ";
				
				$estilo_boton = 'color: #fff; font-weight: 700; font-size: 1em; padding: 10px 20px; text-decoration: none; display: inline-block; -webkit-appearance: none; text-align: center; border: 0; cursor: pointer;';
				$email_content = '
					<p><big><strong style="'.$style_color.'">Hola '.$usuario_datos['nombre'].' '.$usuario_datos['apellidos'].'</strong></big><br />Los nuevos datos de acceso son los siguientes:</p>
					<table width="100%" border="0" cellspacing="0" cellpadding="5" align="center">
					  <tr>
						<td width="125">&nbsp;</td>
						<td><strong style="'.$style_color.'">Usuario:</strong><br>'.$usuario.'</td>
					  </tr>
					  <tr>
						<td width="125">&nbsp;</td>
						<td><strong style="'.$style_color.'">Contraseña:</strong><br>'.$contrasena.'</td>
					  </tr>
					  <tr>
						<td>&nbsp;</td>
						<td><a href="'.$urlSitio.$url_lang.slugify($array_lang['iniciar_sesion'][$idioma]).'" target="_blank" style="'.$estilo_boton.' border:1px solid #006eb5;  background-color:#006eb5; color: #ffffff;">Iniciar sesión</a></td>
					  </tr>
					</table>
				';
				
				$logo_site = 'header_mail.png';
				$style_color=" color:#000000; ";
				$style_color_a=" color:#125da9; ";
				$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
				$emails = array($usuario);
				$envio = $contactoClass->enviarMensaje($emails, "Recuperación de contraseña", $email_content, true);
				
				$arreglos['envio'] = $envio;	
				$arreglos['ok'] = 1;	
			} else { $arreglos['ok'] = $actualizo; }
		} else { $arreglos['ok'] = $resultado; }
	//}
} else { $arreglos['ok'] = -3; }

$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>