<?php
$idioma = "es";
$url_lang = "";
$menu = "";
$menu_propiedades = array();

if(isset($_REQUEST)){
	if(isset($_REQUEST['lang'])){
		if(isset($array_lang['lang'][strip_tags($_REQUEST['lang'])])){
			$idioma = strip_tags($_REQUEST['lang']);
			if($array_lang['lang'][$idioma] != ""){ $url_lang = $idioma.'/'; }
		} else {
			header('Location: '.$urlSitio);
	    	exit;
		}
	}
	if(isset($_GET['menu']) and trim($_GET['menu']) != ""){
		$menu = strip_tags($_GET['menu']);
		foreach($array_lang as $lang){ if(isset($lang['file'])){
			if(slugifyIdioma($lang[$idioma]) == $menu){
				if(isset($lang['properties'])){ $menu_propiedades = $lang['properties']; } 
				require_once $lang['file'];
				exit;
			} 
		} }
		header('Location: '.$urlSitio.$url_lang);
    	exit;
	}
}

switch($idioma){
	case "es":
		setlocale(LC_TIME,"es_ES","es_ES","esp");
		break;
	case "en":
		setlocale(LC_TIME,"en_US");
		break;
}
?>