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
	/*		
	$response = strip_tags($_POST['response']);
  	$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$captcha_secret.'&response='.$response);
	$responseData = json_decode($verifyResponse);
	if(!$responseData->success){
		$arreglos['ok'] = -4;
	} else {
	*/
		require_once "../../lib/model/Contacto.php";
		$contactoDataClass = new ContactoData();
	
		$vars = array(
			'motivo' => array("leyenda" => "Motivo", "tipo" => "texto", "nulo" => 0),
			'mensaje' => array("leyenda" => "Mensaje", "tipo" => "texto", "nulo" => 0),
			'nombre' => array("leyenda" => "Nombre completo", "tipo" => "nombre", "nulo" => 0),
			'correo' => array("leyenda" => "Correo electrónico o usuario en PIPEA", "tipo" => "mail", "nulo" => 0),
			//'acepto' => array("leyenda" => "He leído y acepto el Aviso de privacidad y los Términos y Condiciones", "tipo" => "check", "nulo" => 0),
		);
		
		$ip = NULL;
		if (isset($_SERVER['REMOTE_ADDR']) and !empty($_SERVER['REMOTE_ADDR']) and filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP)) {
			$ip = $_SERVER['REMOTE_ADDR'];
		}
		
		$default = array(
			'estatus' => 0,
			'folio' => date('Ymd').'-'.generarCodigoNum(4),
			"ip" => $ip,
		);
		
		$error_post = 0;
		$contacto_post = array();
		foreach($vars as $key => $var){ 
			if(isset($_POST[$key])){ $contacto_post[$key] = $_POST[$key]; }
			else { $error_post = 1; }
		}
		
		if ($error_post == 0) {
			$contacto_data = array();
			$error = array();
			foreach($vars as $key => $var){ 
				$ok = false;
				$info = '';
				if(isset($contacto_post[$key])){ 
					$validacion = validarData($contacto_post[$key], $var);
					if($validacion["ok"]){ 
						$ok = true; 
						$contacto_data[$key] = $validacion["valor"];
					} else { $info = $validacion["info"]; }
				} else { $info = 'No se recibió el dato.'; }
				if(!$ok){ $error[$key] = $info; }
			}
			if(empty($error)){
				
				foreach($default as $key => $valor){ $contacto_data[$key] = $valor; }
				
				$resultado = $contactoDataClass->insertContacto(json_encode($contacto_data));
				if($resultado > 0){
				
					$logo_site = 'header_mail.png';
					$style_color=" color:#000000; ";
					$style_color_a=" color:#125da9; ";
					
					$content = '
						<table width="100%" border="0" cellspacing="0" cellpadding="5" align="center">
						  <tr>
							<td width="140"><strong>Folio:</strong></td>
							<td>'.$contacto_data["folio"].'</td>
						  </tr>
						  <tr>
							<td width="140"><strong>Motivo:</strong></td>
							<td>'.$contacto_data["motivo"].'</td>
						  </tr>
						  <tr>
							<td width="140"><strong>Mensaje:</strong></td>
							<td>'.nl2br($contacto_data["mensaje"]).'</td>
						  </tr>
						  <tr>
							<td width="140"><strong>Nombre:</strong></td>
							<td>'.$contacto_data["nombre"].' <span><</span>'.$contacto_data["correo"].'<span>></span></td>
						  </tr>
						</table>
					';
					
					//correo a quien debe llegar toda la información de contacto
					$emails = $contacto_correo_atencion;
					
					$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
					$envio = $contactoClass->enviarMensaje($emails, "Nuevo ticket - ".$contacto_data["folio"].": ".$contacto_data["motivo"], $content, true);
					$arreglos['envio'] = $envio;
					
					$envio = $contactoClass->enviarMensaje(array($contacto_data["correo"]), "Ticket Recibido - ".$contacto_data["folio"].": ".$contacto_data["motivo"], $content, true);
					$arreglos['copia'] = $envio;
					
					$arreglos['ok'] = 1;	
				} else { $arreglos['ok'] = $resultado; }
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
