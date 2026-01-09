<?php 
if (!defined('APPLICATION')) exit;
$alertas = array();

if(isset($_GET) and isset($_GET['s'])){
	require_once "lib/model/ShortUrl.php";
	$shortUrlClass = new ShortUrl();
	$short_url = $shortUrlClass->getShortUrlByCode(strip_tags($_GET['s']));
	if(is_array($short_url) and !empty($short_url)){
		header("location: ".$short_url['long_url']);
		exit;
	}
	header("location: ".$urlSitio.$url_lang);
	exit;
}
if(isset($_GET['a'])){
	$accion = strip_tags($_GET['a']);	
	switch($accion){
		case 'activar';
			$se_activo = false;
			if(isset($_GET) and isset($_GET['t']) and isset($_GET['c'])){
				$activar_token = strip_tags($_GET['t']);
				$activar_correo = strip_tags($_GET['c']);
				$activar_usuario = $usuarioClass->getUsuarioByCorreo($activar_correo);
				if(is_array($activar_usuario) and !empty($activar_usuario)){
					$activar_usuario_datos = $usuarioDatosClass->getUsuarioDatos($activar_usuario['idusuario']);
					if(is_array($activar_usuario_datos) and !empty($activar_usuario_datos)){
						$usuario_datos = json_decode($activar_usuario_datos['usuario_datos'], true);
						$activacion = false;
						if(
							$usuario_datos['token'] == $activar_token and 
							(!isset($usuario_datos["activo_correo"]) or $usuario_datos["activo_correo"] == false) 
						){ 
							$activacion = $usuario_datos["activo_correo"] = true; 
						}
						if($activacion){
							$usuario_datos["activo"] = true;
							$resultado = $usuarioDatosClass->updateUsuarioDatos($activar_usuario_datos['idusuario_datos'], $activar_usuario['idusuario'], json_encode($usuario_datos));
							if($resultado > 0){ $se_activo = true; }
						}
					}
				}
			}
			if(!$se_activo){
				$alertas[] = array(
					'titulo' => 'Enlace de verificación no válido',
					'mensaje' => '<div align="center">La verificación no se puede realizar.</div>',
					//'accion' => 'window.location.href = url_sitio + url_lang;',
					'accion' => NULL,
				);
				//header('Location: '.$urlSitio.$url_lang); exit;	
			} else {
				$alertas[] = array(
					'titulo' => '¡Gracias por verificar su cuenta!',
					'mensaje' => '<div align="center">La verificación se realizó correctamente.</div>',
					//'accion' => 'window.location.href = url_sitio + url_lang;',
					'accion' => NULL,
				);
			}
			break;
	}
}
?>