<?php
define('APPLICATION', true);
header('Content-Type: application/javascript');

require_once '../part/config.php';
require_once "../part/gnl/variables.php";
require_once '../lib/minify/jsminplus.php';

$idioma = '';
if(isset($_GET) and isset($_GET['lang'])){
	$idioma = strip_tags($_GET['lang']);
	if(trim($idioma) == ""){ $idioma = "es"; }
}

$leer = true;
$filename = 'scripts_'.$version.'_'.$idioma.'.js';
if (file_exists($filename)) {
   $leer = false;
	echo file_get_contents ($filename);
}

if($leer){

	$lang = "";
	switch($idioma){
		default:
			$lang .= file_get_contents('lang/es.js');
			break;
	}
	
	$gnl_scripts = file_get_contents('gnl/scripts.js');
	$gnl_ajax = file_get_contents('gnl/ajax.js');
	$gnl_speak = file_get_contents('gnl/speak.js');
	$gnl_sesion = file_get_contents('gnl/sesion.js');
	$gnl_formulario = file_get_contents('gnl/formulario.js');
	$gnl_lightbox = file_get_contents('gnl/lightbox.js');
	$gnl_iniciar_sesion = file_get_contents('gnl/iniciar_sesion.js');
	$gnl_recuperar_contrasena = file_get_contents('gnl/recuperar_contrasena.js');
	$gnl_registro = file_get_contents('gnl/registro.js');
	$gnl_contacto = file_get_contents('gnl/contacto.js');
	$gnl_slider = file_get_contents('gnl/slider.js');
	$gnl_slider_widgets = file_get_contents('gnl/slider_widgets.js');
	
	
	$index = file_get_contents('sitio/index.js');
	
	$ejes = file_get_contents('sitio/ejes.js');
	$plazos = file_get_contents('sitio/plazos.js');
	$estrategias = file_get_contents('sitio/estrategias.js');
	$indicadores = file_get_contents('sitio/indicadores.js');
	$lineas_de_accion = file_get_contents('sitio/linea_de_accion.js');
	$prioridades = file_get_contents('sitio/prioridades.js');
	$master = file_get_contents('sitio/master.js');

	$actores = file_get_contents('sitio/actores.js');
	$actores_catalogos = file_get_contents('sitio/actores_catalogos.js');
	$actores_elementos = file_get_contents('sitio/actores_elementos.js');
	
	$usuarios = file_get_contents('sitio/usuarios.js');
	$periodos = file_get_contents('sitio/periodos.js');
	

	$captura_generales = file_get_contents('sitio/captura_generales.js');
	$captura_indicador = file_get_contents('sitio/captura_indicador.js');
	$captura_linea = file_get_contents('sitio/captura_linea.js');
	
	$revision_generales = file_get_contents('sitio/revision_generales.js');
	$revision_indicador = file_get_contents('sitio/revision_indicador.js');
	$revision_linea = file_get_contents('sitio/revision_linea.js');
	

	$instituciones = file_get_contents('sitio/instituciones.js');
	
	$reportes = file_get_contents('sitio/reportes.js');

	$municipios = file_get_contents('sitio/municipios.js');
	
	$dashboard = file_get_contents('sitio/dashboard.js');
	
	$cambiar_contrasena = file_get_contents('sitio/cambiar_contrasena.js');

	//$tablaJSON = file_get_contents('sitio/tablaJSON.js');

	
	
	$output_js = JSMinPlus::minify("
		$lang
		
		$gnl_scripts
		$gnl_ajax
		$gnl_speak
		$gnl_sesion
		$gnl_formulario
		$gnl_lightbox
		$gnl_iniciar_sesion
		$gnl_recuperar_contrasena
		$gnl_registro
		$gnl_contacto
		$gnl_slider
		$gnl_slider_widgets
		
		$index
		
		$ejes
		$plazos
		$estrategias
		$indicadores
		$lineas_de_accion
		$prioridades
		$master
		
		$actores
		$actores_catalogos
		$actores_elementos
		
		$usuarios
		$periodos
		$instituciones
		
		$captura_generales
		$captura_indicador
		$captura_linea 

		$revision_generales
		$revision_indicador
		$revision_linea

		
		$reportes

		$municipios
		
		$dashboard
		
		$cambiar_contrasena
		
		
		
	", "foo");
	
	$externos = '';
	$externos = '
		'.file_get_contents('ext/jquery-3.6.1.min.js').'
		'.file_get_contents('ext/jquery.ajax-progress.js').'
		'.file_get_contents('ext/jquery.tokeninput.js').'
		'.file_get_contents('ext/aes.js').'
		'.file_get_contents('ext/dataTables/datatables.min.js').'

		'.file_get_contents('ext/picker/picker.js').'
		'.file_get_contents('ext/picker/picker.date.js').'
		'.file_get_contents('ext/picker/picker.time.js').'
		'.file_get_contents('ext/picker/legacy.js').'
		'.file_get_contents('ext/picker/es_ES.js').'
		
		'.file_get_contents('gnl/IndexedDB.js').'
		'.file_get_contents('gnl/tablaJSONObj.js').'
	';

	switch($modo_sitio){
		case 'loc':
			break;
		case 'dev':
			break;
		case 'pro':
			file_put_contents($filename, $externos.$output_js);
			break;
	}
	echo $externos.$output_js;
}
?>
