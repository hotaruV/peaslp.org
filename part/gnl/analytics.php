<?php if (!defined('APPLICATION')) exit; ?>
<!--
<script src="<?=$urlSitio;?>js/scripts/pwa.js?v=<?=$version;?>"></script>
<script type="text/javascript">
	var _accesibilidadweb_config = { 
		p_color: "#9aa2ac",  
		s_color: "#9AA3A7",
	};
</script>
<script src="<?=$urlSitio;?>accesibilidad/accesibilidadweb.min.js?v=<?=$version;?>"></script>
-->

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=<?=$GoogleTag;?>"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', <?=$GoogleTag;?>);
</script>