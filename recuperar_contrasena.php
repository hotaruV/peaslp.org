<?php
	require_once "part/gnl/sesion.php";
	if ($usuario_logeado) {
		header('Location: '.$urlSitio.$url_lang."?l=1"); exit;
	}
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['recuperar_contrasena'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['recuperar_contrasena'][$idioma]);
	$keywords 		= "";
	$robots 		= "all";
	$imagen 		= "img/".$img_site;
?>
<!doctype html>
<html lang="es">
	<head>
        <?php require_once "part/gnl/metas.php"; ?>
	</head>
	<body>
    	<div class="contenido">
    	    <?php require_once "part/seccion/header.php"; ?>     
            <div class="info">
            	<div class="seccion navegacion">		                	
                    <div class="margen">
                       <div class="renglon padding-x padding-y align-left">
                            <div class="col">
                            	<div data-sesion="true" class="txt_perfil"></div>
                                <ul class="nav">
                                    <li><a href="<?=$urlSitio.$url_lang;?>" class=""> Inicio</a></li>
                                    <li><?=$array_lang['recuperar_contrasena'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
                <div class="seccion">
                	<div class="margen">
                    	<div class="renglon padding-x padding-y align-center">
                            <div class="col">
                                <h1 class="mayus"><?=$array_lang['recuperar_contrasena'][$idioma];?></h1>  
                            </div>
                        </div>
                    </div>
                    <div class="margen margen_chi">
                        <div class="formulario align-left" data-action="<?=$urlSitio.$url_lang.slugify($array_lang['iniciar_sesion'][$idioma]);?>" id="form_recuperar">
                            	<div class="renglon">
                                    <div class="col">
                                        <p class="big"><strong>¿Olvidaste tu contraseña?</strong> <br> Recupera tu contraseña ingresa el usuario registrado:</p>
                                    </div>
                                    <div class="col">
                                        <div class="item" data-obligatorio="true">
                                            <div class="p"> Usuario:</div>
                                            <div class="r">
                                                <input type="email" id="input_usuario" value="" maxlength="250" />
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                                <div class="renglon igual">
                                    <div class="col col2 align-left">
                                        <div class="tabla"><div class="td-middle">
                                            <div class="item">
                                                <p><a href="#" id="btn_recuperar" class="boton"> Recuperar</a></p>
                                            </div>
                                        </div></div>
                                    </div>
                                    <div class="col col2 align-right">
                                        <div class="tabla"><div class="td-middle">
                                            <div class="item">
                                                <p><small><a href="<?=$urlSitio;?><?=$url_lang;?><?=slugify($array_lang['iniciar_sesion'][$idioma]);?>" id="input_regresar">Regresar</a></small></p>
                                            </div>
                                        </div></div>
                                    </div> 
                                </div>
                            	<div class="renglon"></div>
                        </div>
					</div>
				</div>
                
                                                                                                                                        
            </div>
	        <?php require_once "part/seccion/footer.php"; ?>
        </div>
        <?php require_once "part/seccion/machotes.php"; ?>
	    <script>
			$(document).ready(function(){
				recuperar_contrasena_ready();
			});
			$(window).on('load', function(){
				recuperar_contrasena_load();
			});
			$(window).on('resize', function(){
				recuperar_contrasena_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>