<?php
define('APPLICATION', true);
header("Content-Type: text/css");

require_once '../part/config.php';
require_once '../part/gnl/variables.php';
require_once '../lib/minify/cssmin.php';

$leer = true;
$filename = 'estilos_'.$version.'.css';
if (file_exists($filename)) {
   $leer = false;
	echo file_get_contents ($filename);
}

if($leer){
	$fonts = file_get_contents('fonts.css');
	
	$gnl_estilo = file_get_contents('gnl/estilo.css');
	$gnl_slide = file_get_contents('gnl/slide.css');
	$gnl_slider_widgets = file_get_contents('gnl/slider_widgets.css');
	$gnl_buscar = file_get_contents('gnl/buscar.css');
	$gnl_lightbox = file_get_contents('gnl/lightbox.css');
	$gnl_formulario = file_get_contents('gnl/formulario.css');
	
	$estilo = file_get_contents('estilo.css');
	
	$sitio_panel = file_get_contents('sitio/panel.css');
	$sitio_token = file_get_contents('sitio/token.css');
	
	$compressor = new CSSmin();
	$output_css1 = $compressor->run("
		$fonts
		
		$gnl_estilo
		$gnl_slide
		$gnl_slider_widgets
		$gnl_buscar
		$gnl_lightbox
		$gnl_formulario
		
		$estilo
		
		$sitio_panel
		$sitio_token
	");
	
	$externos = '';
	$externos = '
		'.file_get_contents('ext/hamburgers.min.css').'
		'.file_get_contents('ext/token-input-facebook.css').'
		'.file_get_contents('ext/token-input-mac.css').'
		'.file_get_contents('ext/token-input.css').'
		'.file_get_contents('ext/default.css').'
		'.file_get_contents('ext/default.date.css').'
		'.file_get_contents('ext/default.time.css').'


	';

	switch($modo_sitio){
		case 'loc':
			break;
		case 'dev':
			break;
		case 'pro':
			file_put_contents($filename, $externos.$output_css1);
			break;
	}
	echo $externos.$output_css1;
}
?>