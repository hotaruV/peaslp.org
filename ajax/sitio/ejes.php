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
require_once "../../lib/model/UsuarioDatos.php";
require_once "../../lib/model/UsuarioDispositivo.php";
require_once "../../lib/model/UsuarioDispositivoAcceso.php";
require_once "../../lib/model/UsuarioIngreso.php";

$usuarioClass = new Usuario();
$usuarioDatosClass = new UsuarioDatos();
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
		require_once "../../lib/model/Curso.php";
		require_once "../../lib/model/CursoUsuario.php";
		
		$cursoClass = new Curso();
		$cursoUsuarioClass = new CursoUsuario();
	
		$vars = array(
			'idcurso' => array("leyenda" => "Curso", "tipo" => "entero", "nulo" => 0),
		);
		
		$ip = NULL;
		if (isset($_SERVER['REMOTE_ADDR']) and !empty($_SERVER['REMOTE_ADDR']) and filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP)) {
			$ip = $_SERVER['REMOTE_ADDR'];
		}
		
		$default = array(
			'estatus' => 0,
			'folio' => date('Ymd').'-'.generarCodigoNum(4),
			"ip" => $ip,
			"calificacion" => "",
			"completo" => 0,
			"convocatoria" => NULL,
			"registro" => date('Y-m-d H:i:s'),
			"inscrito" => true,
			"avance" => array(
			
			),
		);
		
		/*
			avance_ITEM
			"id": "",
			 "idCC": "",
			 "tipo": "",
			 "completo": "0",
			 "calificacion": "0",
			 "data": "",
			 "idData": NULL,
			 "estatus": "1",
			 "fecha": "",
			 "modificacion": "",
			 "activo": "1"
		*/
		
		$error_post = 0;
		$inscribirse_post = array();
		foreach($vars as $key => $var){ 
			if(isset($_POST[$key])){ $inscribirse_post[$key] = $_POST[$key]; }
			else { $error_post = 1; }
		}
		if ($error_post == 0) {
			$inscribirse_data = array();
			$error = array();
			foreach($vars as $key => $var){ 
				$ok = false;
				$info = '';
				if(isset($inscribirse_post[$key])){ 
					$validacion = validarData($inscribirse_post[$key], $var);
					if($validacion["ok"]){ 
						$ok = true; 
						$inscribirse_data[$key] = $validacion["valor"];
					} else { $info = $validacion["info"]; }
				} else { $info = 'No se recibió el dato.'; }
				if(!$ok){ $error[$key] = $info; }
			}
			if(empty($error)){
				
				foreach($default as $key => $valor){ $inscribirse_data[$key] = $valor; }
				$curso = $cursoClass->getCurso($inscribirse_data["idcurso"]);	
				if(is_array($curso) or !empty($curso)){
					$curso['curso_data'] = json_decode($curso['curso_data'], true); 
					
					$curso_usuario = $cursoUsuarioClass->getCursoUsuario($usuario["idusuario"], $inscribirse_data["idcurso"]);
					if(is_array($curso_usuario) and !empty($curso_usuario)){
						$arreglos['ok'] = 'CI0';
					} else {	
					
						$resultado = $cursoUsuarioClass->insertCursoUsuario($usuario["idusuario"], $inscribirse_data["idcurso"], json_encode($inscribirse_data), 1);
						if($resultado > 0){
							
							$logo_site = 'mail_head.png';
							$style_color=" color:#000000; ";
							$style_color_a=" color:#006eb5; ";
							
							$content = '
								<p>
									<strong>¡Felicidades '.$usuario['usuario_datos']['nombre'].' '.$usuario['usuario_datos']['apellidos'].'!</strong><br>
									Usted ha sido inscrito al curso: <b>'.$curso['curso_data']['curso'].'</b>
								</p>
								<p>
									<a href="'.$urlSitio.$url_lang.slugify($array_lang['panel'][$idioma])."/".$curso['idcurso']."/".slugify($curso['curso_data']['curso']).'">Iniciar curso</a>
								</p>
							';
							$emails = array($usuario["usuario"]);
							$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
							$envio = $contactoClass->enviarMensaje($emails, $curso['curso_data']['curso'], $content, true);
							$arreglos['envio'] = $envio;
							$arreglos['ok'] = 1;
						} else {
							$arreglos['ok'] = $resultado;
						}
					}	
				} else {
					$arreglos['ok'] = $curso;
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
