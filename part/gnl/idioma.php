<?php
function slugifyIdioma($text){
  $text = preg_replace('~[^\pL\d]+~u', '-', $text);
  $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
  $text = preg_replace('~[^-\w]+~', '', $text);
  $text = trim($text, '-');
  $text = preg_replace('~-+~', '-', $text);
  $text = strtolower($text);
  if (empty($text)) { return 'n-a'; }
  return $text;
}

$array_lang = array(
	'lang' => array(
		'es' => '',
	),
	'lang_txt' => array(
		'es' => 'Español',
	),
	'ids' => array(
		'es' => 1,
	),
	'ididioma' => array(
		1 => 'es',
	),

	/* ESTANDAR */
	'cancelar' => array(
		'es' => 'Cancelar',
	),
	'aceptar' => array(
		'es' => 'Aceptar',
	),
	'advertencia' => array(
		'es' => 'Advertencia',
	),
	'cargando' => array(
		'es' => 'Cargando, por favor espere...',
	),
	'enviar' => array(
		'es' => 'Enviar',
	),
	'ver_mas' => array(
		'es' => 'Ver más',
	),
	'saber_mas' => array(
		'es' => 'Saber más',
	),
	
	'registro' => array(
		'es' => 'Registro',		
    	'file' => 'registro.php',
	),
	'iniciar_sesion' => array(
		'es' => 'Iniciar sesión',		
    	'file' => 'iniciar_sesion.php',
	),
	'recuperar_contrasena' => array(
		'es' => 'Recuperar contraseña',		
    	'file' => 'recuperar_contrasena.php',
	),
	'contacto' => array(
		'es' => 'Contacto',		
    	'file' => 'contacto.php',
	),
	'aviso_privacidad' => array(
		'es' => 'Aviso de privacidad',
		'file' => 'aviso.php',
	),
);

$array_lang = $array_lang + $array_lang_seccion;

?>