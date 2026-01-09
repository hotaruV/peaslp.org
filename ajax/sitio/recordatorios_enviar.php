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
	$periodoClass = new TablaJSON("periodo");

	$vars = array(
		'ident' => array("leyenda" => "Identificador", "tipo" => "entero", "nulo" => 0),
		'txt' => array("leyenda" => "Periodo", "tipo" => "texto", "nulo" => 0),
		'tipo' => array("leyenda" => "Tipo", "tipo" => "texto", "nulo" => 0),
		'correo' => array("leyenda" => "Correo electrónico", "tipo" => "correo", "nulo" => 0),
		'nombre' => array("leyenda" => "Nombre", "tipo" => "texto", "nulo" => 0),
		'detalle' => array("leyenda" => "Detalle", "tipo" => "texto", "nulo" => 0),
	);
	
	$error_post = 0;
	$recordatorios_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $recordatorios_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$recordatorios_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($recordatorios_post[$key])){ 
				$validacion = validarData($recordatorios_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$recordatorios_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$arreglos['ok'] = 1; 
			$arreglos['exito'] = -1; 
			
			$periodo = $periodoClass->getTablaJSONID($recordatorios_data["ident"]);
			if(is_array($periodo) and !empty($periodo)){ 
				$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);
							
				$logo_site = 'header_mail.png';
				$style_color=" color:#000000; ";
				$style_color_a=" color:#125da9; ";
				$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
				
				if($recordatorios_data["tipo"] == "captura"){
				
					$email_subject = "Recordatorio semestral de carga de información al Sistema de Monitoreo, Seguimiento y Evaluación del PI-PEA";
					$email_content = "
						<p>Por medio del presente, <strong>le recordamos que es necesario realzar la carga de información correspondiente al avance semestral del Programa de Implementación de la Política Estatal Anticorrupción</strong>.</p>
						
						<p>Usted puede hacerlo ingresando con su <strong>usuario institucional y contraseña en la siguiente dirección: <a href=\"https://seseaslp.org/pea.html\" target=\"_blank\">https://seseaslp.org/pea.html</a></strong></p>
						
						<p>Le recordamos que la <strong>fecha límite para subir información es el día ".formatoFechaDiaMesAnio($periodo["periodo_data"]["termina"], $idioma)."</strong>. A partir de esta fecha se iniciará el periodo de revisión de los avances. Si su institución ya ha cargado la información correspondiente, le agradecemos y puede hacer caso omiso a este mensaje. En caso contrario, le instamos a completar el proceso antes de la fecha límite para garantizar el cumplimiento del programa.</p>
						
						<p>Quedamos a su disposición para cualquier consulta o asistencia que pueda necesitar durante este proceso.</p>
						
						<p>
							<strong>Atentamente,<br>
							Equipo SESEA</strong>
						</p>
					";
				} else  if($recordatorios_data["tipo"] == "revision"){				
					$email_subject = "Recordatorio de Monitoreo semestral del Programa de Implementación de la Política Estatal Anticorrupción";
					$email_content = "
						<p>Por medio del presente, <strong>le recordamos que ha finalizado la etapa de captura y del día ".formatoFechaDiaMesAnio($periodo["periodo_data"]["inicia_revision"], $idioma)." al día ".formatoFechaDiaMesAnio($periodo["periodo_data"]["termina_revision"], $idioma)." nos encontraremos en el periodo de monitoreo del avance semestral</strong> en el marco del seguimiento del Programa de Implementación de la Política Estatal Anticorrupción.</p>
						
						<p>Una vez que el avance de su captura haya sido revisado por la institución coordinadora correspondiente, recibirá un mensaje de correo electrónico para su retroalimentación.</p>
						
						<p>Quedamos a su disposición para cualquier consulta o asistencia que pueda necesitar durante este proceso.</p>
						
						<p>
							<strong>Atentamente,<br>
							Equipo SESEA</strong>
						</p>
					";
				}	
				$emails = array($recordatorios_data["correo"]);
				$envio = $contactoClass->enviarMensaje($emails, $email_subject, $email_content, true);
				
				$arreglos['correo'] = $recordatorios_data["correo"]; 
				$arreglos['exito'] = $envio; 
				
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
