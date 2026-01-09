<?php if (!defined('APPLICATION')) exit; ?>
<title><?=strip_tags($title);?></title>
<meta charset="utf-8" />

<!-- META TAGS WEBSITE -->
<meta name="title" content="<?=htmlentities(strip_tags($title), ENT_QUOTES, "utf-8"); ?>" />
<meta name="keywords" content="<?=htmlentities($keywords, ENT_QUOTES, "utf-8"); ?>" />
<meta name="description" content="<?=htmlentities(strip_tags($description), ENT_QUOTES, "utf-8"); ?>" />
<meta name="robots" content="<?=$robots;?>" />
<meta name="author" content="© <?=$title_site;?>" />
<meta name="copyright" content="&copy; Copyright <?=$title_site;?>" />

<!-- META TAGS FACEBOOK -->
<meta property="og:description" content="<?=htmlentities(strip_tags($description), ENT_QUOTES, "utf-8"); ?>"/>
<meta property="og:url" content="<?=$urlSitio;?><?=$url;?>"/>
<meta property="og:title" content="<?=htmlentities($title, ENT_QUOTES, "utf-8"); ?>"/>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?=$urlSitio;?><?=$imagen;?>?v=<?=$version;?>"/>
<meta property="og:site_name" content="<?=$urlName;?>"/>
<meta property="fb:app_id" content="" />

<!-- META TAGS ICO IMG -->
<link rel="image_src" href="<?=$urlSitio;?><?=$imagen;?>?v=<?=$version;?>" />
<link rel="icon" href="<?=$urlSitio;?>favicon.ico" />
<link rel="apple-touch-icon" sizes="57x57" href="<?=$urlSitio;?>img/ico/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="<?=$urlSitio;?>img/ico/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?=$urlSitio;?>img/ico/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="<?=$urlSitio;?>img/ico/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?=$urlSitio;?>img/ico/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="<?=$urlSitio;?>img/ico/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="<?=$urlSitio;?>img/ico/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="<?=$urlSitio;?>img/ico/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="<?=$urlSitio;?>img/ico/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="<?=$urlSitio;?>img/ico/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?=$urlSitio;?>img/ico/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="<?=$urlSitio;?>img/ico/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?=$urlSitio;?>img/ico/favicon-16x16.png">
<meta name="msapplication-TileColor" content="#FFFFFF">
<meta name="msapplication-TileImage" content="<?=$urlSitio;?>img/ico/ms-icon-144x144.png">
<meta name="theme-color" content="#FFFFFF">

<!-- META TAGS ICO IMG -->
<link rel="image_src" href="<?=$urlSitio;?><?=$imagen;?>?v=<?=$version;?>" />
<link rel="shortcut icon" href="<?=$urlSitio;?>favicon.ico" type="image/x-icon" />
<link rel="icon" href="<?=$urlSitio;?>favicon.ico" />

<!-- META TAGS GOOGLE PLUS -->
<meta itemprop="name" content="<?=htmlentities($title, ENT_QUOTES, "utf-8"); ?>" />
<meta itemprop="description" content="<?=htmlentities(strip_tags($description), ENT_QUOTES, "utf-8"); ?>" />
<meta itemprop="image" content="<?=$urlSitio;?><?=$imagen;?>?v=<?=$version;?>" />
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />

<script type="application/ld+json">
	{
		"@context" : "http://schema.org",
		"@type" : "Organization",
		"name" : "<?=$title;?>",
		"url" : "<?=$urlSitio;?>",
		"logo": "<?=$urlSitio;?>img/<?=$img_site;?>"
	 };
</script>

<?php
	$filename_scripts = $urlSitio.'js/scripts.php?v='.$version.'&lang='.$idioma;
	if (file_exists('js/scripts_'.$version.'_'.$idioma.'.js')) { $filename_scripts = $urlSitio.'js/scripts_'.$version.'_'.$idioma.'.js'; }
?>
<script src="<?=$filename_scripts;?>"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
<?php
	$filename_estilos = $urlSitio.'css/estilo.php?v='.$version;
	if (file_exists('css/estilos_'.$version.'.css')) { $filename_estilos = $urlSitio.'css/estilos_'.$version.'.css'; }
?>
<link type="text/css" rel="stylesheet" href="<?=$urlSitio;?>js/ext/dataTables/datatables.min.css" />
<link type="text/css" rel="stylesheet" href="<?=$filename_estilos;?>" />

<script>
	var url_sitio = '<?=$urlSitio;?>';
	var url_lang = '<?=$url_lang;?>';
	var idioma = '<?=$idioma;?>';
	var map_key = '';
	var v_json = '<?=$version;?>';
</script>