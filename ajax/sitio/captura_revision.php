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
		
		'idactor' => array("leyenda" => "ID Actor", "tipo" => "entero", "nulo" => 0),
		'actor' => array("leyenda" => "Actor", "tipo" => "texto", "nulo" => 0),
		'perfil_txt' => array("leyenda" => "Actor", "tipo" => "texto", "nulo" => 0),
		
		
		'eje' => array("leyenda" => "Periodo", "tipo" => "texto", "nulo" => 0),
		'filtro' => array("leyenda" => "Periodo", "tipo" => "texto", "nulo" => 0),
		'filtro_txt' => array("leyenda" => "Periodo", "tipo" => "texto", "nulo" => 0),
	);
	
	$error_post = 0;
	$captura_revision_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $captura_revision_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	
	if ($error_post == 0) {
		$captura_revision_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($captura_revision_post[$key])){ 
				$validacion = validarData($captura_revision_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$captura_revision_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			
			$resultado = $contactoDataClass->insertContacto(json_encode($captura_revision_data));
			if($resultado > 0){
				$logo_site = 'header_mail.png';
				$style_color=" color:#000000; ";
				$style_color_a=" color:#125da9; ";
				
				$content = '
					<table width="100%" border="0" cellspacing="0" cellpadding="5" align="center">
					  <tr>
						<td width="150"><strong>Solicitud de revisión:</strong></td>
						<td>'.$captura_revision_data["tipo"].'</td>
					  </tr>
					  <tr>
						<td width="150"><strong>Periodo:</strong></td>
						<td>'.$captura_revision_data["periodo"].'</td>
					  </tr>
					  <tr>
						<td width="150"><strong>Actor:</strong></td>
						<td>'.$captura_revision_data["perfil_txt"].' <br> '.$captura_revision_data["actor"].'</td>
					  </tr>
				';
				if($captura_revision_data["eje"] != "Seleccione"){ 
					$content .= '
					  <tr>
						<td width="150"><strong>Eje:</strong></td>
						<td>'.nl2br($captura_revision_data["eje"]).'</td>
					  </tr>
					';
				}
				if($captura_revision_data["filtro"] != "Seleccione"){ 
					$content .= '
					  <tr>
						<td width="150"><strong>'.$captura_revision_data["filtro_txt"].':</strong></td>
						<td>'.$captura_revision_data["filtro"].'</td>
					  </tr>
					';
				}
				$content .= '
					</table>
				';
				
				$usuarios_arr = array();
				$usuarioTClass = new TablaJSON("usuario");
				
				/* obtener usuario administrador */
				$usuariosT = $usuarioTClass->getTablaJSONs(
					" 
						AND perfil = 1
						AND activo = 1 
					"
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
				
				
				/* obtener instituciones que puedan validar la revisión */
				//idactor
				$idactor = $captura_revision_data["idactor"];
				
				$temp_usuario = $usuarioClass->getUsuario($idactor);
				if(is_array($temp_usuario) and !empty($temp_usuario)){ 
					$temp_usuario_datos = json_decode($temp_usuario['usuario_data'], true);
					if(isset($temp_usuario_datos["actor"])){
						$idactor = $temp_usuario_datos["actor"];
					}
				}
				
					//consultar lineas de accion que tengan a ese actor 
					$lineaClass = new TablaJSON("linea");
					$lineas = $lineaClass->getTablaJSONs("
						AND activo = 1 
						AND JSON_CONTAINS(JSON_EXTRACT(linea_data, '$.actores.v[*].id'),'\"".$idactor."\"','$')
					");
					
						//obtener todas las estrategias de estas lineas de accion 
						$estrategias_arr = array();
						foreach($lineas as $key => $linea){
							$data = json_decode($linea['linea_data'], true);
							$estrategias_arr[] = $data["estrategia"];
						}
						
						$estrategiaClass = new TablaJSON("estrategia");
						$estrategias = $estrategiaClass->getTablaJSONs("
							AND activo = 1 
							AND FIND_IN_SET(idestrategia, '".implode(',', $estrategias_arr)."')
						");
						
							//de cada estrategia obtener los id de las instituciones 
							$instituciones_arr = array();
							foreach($estrategias as $key => $estrategia){
								$data = json_decode($estrategia['estrategia_data'], true);
								foreach($data["instituciones"]["v"] as $key2 => $institucion){
									$instituciones_arr[] = $institucion["id"];
								}
							}
							
								//obtener los usaurios que tengan ese id de institución 
								$usuariosT = $usuarioTClass->getTablaJSONs(
									"
										AND activo = 1 
										AND perfil = 5
										AND JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.perfil')) = 5
										AND FIND_IN_SET(JSON_UNQUOTE(JSON_EXTRACT(usuario_data, '$.institucion')), '".implode(",", $instituciones_arr)."')
										
									"
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
								
				
				$emails = array();
				foreach($usuarios_arr as $key => $data){
					//if(filter_var(trim($data), FILTER_VALIDATE_EMAIL)){
						$emails[] = $data;
					//}
				}
				
				$usuario = $usuarioClass->getUsuario($idusuario);
				if(is_array($usuario) and !empty($usuario)){ 
					$usuario["usuario_data"] = json_decode($usuario["usuario_data"], true);					
					if(filter_var(trim($usuario["usuario_data"]["usuario"]), FILTER_VALIDATE_EMAIL)){
						$emails[] = $usuario["usuario_data"]["usuario"];		
					}
					if(isset($usuario["usuario_data"]["correo_electronico"]) and $usuario["usuario_data"]["correo_electronico"] != ""){
						$emails[] = $usuario["usuario_data"]["correo_electronico"];			
					}
				}
				
				//$arreglos['usuarios'] = $usuariosT;
				$arreglos['emails'] = $emails;
				
				$contactoClass = new Contacto($urlSitio, $urlName, $title_site, $logo_site);
				$envio = $contactoClass->enviarMensaje($emails, trim_text("Solicitud de revisión: ".$captura_revision_data["tipo"]." - ".$captura_revision_data["actor"], 140), $content, true);
				$arreglos['envio'] = $envio;
				
				/*
				$envio = $contactoClass->enviarMensaje(array($captura_revision_data["correo"]), "Ticket Recibido - ".$captura_revision_data["folio"].": ".$captura_revision_data["motivo"], $content, true);
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