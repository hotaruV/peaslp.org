<?php
if (!defined('APPLICATION')) exit;
class Contacto {

	private $nombre;
	private $email;
	private $asunto;
	private $comentario;
	private $para;
	private $validar;

	private $cabecera;
	private $pie;
	private $html_p;
	private $html_a;

	private $url;
	private $dominio;
	private $title_site;
	private $logo_site;

	public  $AddReplyTo = NULL;
	public  $oculto = NULL;

	public function __construct($url = "", $dominio = "", $title_site, $logo_site){
		$this->AddReplyTo = NULL;
		$this->oculto = false;
		$this->url = $url;
		$this->dominio = $dominio;
		$this->title_site = $title_site;
		$this->logo_site = $logo_site;

		$this->email = array('longitud'=>150,'tipo'=>'correo','valor'=>NULL,'nulo'=>0,'titulo'=>'Correo');
		$this->asunto = array('longitud'=>150,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Asunto');
		$this->mensaje = array('longitud'=>NULL,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Mensaje');
		$this->validar = new Validar();

		$this->cabecera  = '';
		$this->cabecera .= '<table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" style="background:#FFF; border:1px #cdcdcd solid;">';
		$this->cabecera .= '	<tr>';
		$this->cabecera .= '		<td align="left" colspan="2" valign="middle" style="background-color:#c1a004; color:#FFF; text-align: left; font-size: 1.75em;">';
		$this->cabecera .= '			<a href="'.$this->url.'" style="color:#FFF; text-decoration: none; display: block; line-height: 1.15em;" target="_blank"><img src="'.$this->url.'img/sitio/'.$this->logo_site.'" height="67" width="600" border="0" style="vertical-align: bottom; " alt="'.$title_site.'" /></a>';
		$this->cabecera .= '		</td>';
		$this->cabecera .= '	</tr>';
		$this->cabecera .= '	<tr>';
		$this->cabecera .= '		<td align="left" colspan="2" style="padding-left:15px;padding-right:15px; padding-top:15px; border-top:1px #cdcdcd solid; padding-bottom:15px; color:#000000; background:#FFF; font-size:14px;">';

		$this->pie		 = '';
		$this->pie 		.= '		</td>';
		$this->pie 		.= '	</tr>';
		$this->pie 		.= '	<tr>';
		$this->pie 		.= '		<td align="left" colspan="2" style="background-color:#125da9; color:#FFFFFF; padding-left:15px;padding-right:15px; padding-top:15px; border-top:1px #cdcdcd solid; padding-bottom:15px; font-size:14px;">';
		$this->pie 		.= '			<small><a href="'.$this->url.'" target="_blank" style="color:#FFFFFF;">'.$this->title_site.'</a></small>';
		$this->pie 		.= '		</td>';
		$this->pie 		.= '	</tr>';
		$this->pie 		.= '</table>';

		$this->html_p = 'style="margin: 0 auto 1em auto;"';
		$this->html_a = 'style="font-weight:700; border-bottom:1px solid;"';

	}
	public function __destruct(){}
	public function enviarMensaje($email, $asunto, $mensaje, $html = false) {
		$this->asunto['valor'] = $asunto;
		$this->mensaje['valor'] = $mensaje;
		$valores = array($this->asunto, $this->mensaje);
		$validar = $this->validar->validarValores($valores);
		if(empty($validar)){
			$mail= new PHPMailer();
			$mail->CharSet='utf-8';
			
			$mail->isSMTP();
			$mail->Host= '';
			$mail->Username = '';
			$mail->Password = '';
			$mail->Port = 465;   
			$mail->setFrom("noreply@seseaslp.org", "noreply");
			$mail->SMTPAuth = true; 
			$mail->SMTPSecure = 'ssl';
			
			//$mail->SMTPDebug = 2;
			
			if($html){ $mail->isHTML(true); }
			else { $mail->isHTML(false); }
			if($this->AddReplyTo != NULL){ 	$mail->AddReplyTo($this->AddReplyTo); }
			if(!$this->oculto){
				if(is_array($email)){ foreach($email as $correo_electronico){ $mail->addAddress($correo_electronico); } }
				else { $mail->addAddress($email); }
			} else {
				if(is_array($email)){ foreach($email as $correo_electronico){ $mail->addBCC($correo_electronico); } }
				else { $mail->addBCC($email); }
			}

			$html  = "";
			$html .= $this->cabecera;
			$html .= $mensaje;
			$html .= $this->pie;

			$mail->Subject = $asunto;
			$mail->Body    = $html;
			if($mail->send()) { return 1; } else { error_log('Mailer Error: ' . $mail->ErrorInfo); return 0; }

		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
}
?>
