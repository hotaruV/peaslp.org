<?php
	$acceso_restringido = false;
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['contacto'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['contacto'][$idioma]);
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
                    <div class="margen margen_med">
                       <div class="renglon padding-x padding-y align-left">
                            <div class="col">
                            	<div data-sesion="true" class="txt_perfil"></div>
                                <ul class="nav">
                                    <li><a href="<?=$urlSitio.$url_lang;?>" class=""> Inicio</a></li>
                                    <li><?=$array_lang['contacto'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
                <div class="seccion">
                    <div class="margen margen_chi">
                        <div class="formulario align-left" data-action="<?=$urlSitio.$url_lang;?>" id="form_contacto">
                        	<div class="renglon padding-x padding-y align-center">
                                <div class="col">
                                    <h1 class="mayus"><?=$array_lang['contacto'][$idioma];?></h1>  
                                </div>
                            </div>
                            <div class="renglon">
                                <div class="col">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Motivo:</div>
                                        <div class="r">
                                            <input type="text" id="input_contacto_motivo" maxlength="25"/>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                            <div class="renglon">
                                <div class="col">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Mensaje:</div>
                                        <div class="desc">Describe detalladamente la situación</div>
                                        <div class="r">
                                            <textarea id="input_contacto_mensaje"></textarea>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                            <div class="renglon">
                            	<div class="col">
                                	<div class="item" data-obligatorio="true">
                                        <div class="p"> Nombre completo:</div>
                                        <div class="r">
                                            <input type="text" id="input_contacto_nombre" maxlength="250"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="renglon">
                                <div class="col">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Correo electrónico:</div>
                                        <div class="r">
                                            <input type="text" id="input_contacto_correo" maxlength="250"/>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                            <div class="renglon igual">
                            	<div class="col col2 align-left">
                                	<div class="tabla"><div class="td-middle">
                                        <div class="item">
                                            <p><a href="#" id="btn_contacto" class="boton"> Enviar</a></p>
                                        </div>
                                    </div></div>
                                </div>
                                <div class="col col2 align-right">
                                	<div class="tabla"><div class="td-middle">
                                        <div class="item">
                                            <p><small><a href="<?=$urlSitio;?><?=$url_lang;?>" id="input_regresar">Regresar</a></small></p>
                                        </div>
									</div></div>
                                </div> 
                            </div>
                            
                            <div class="renglon">
                            	<div class="col">
                                	<p>Al enviar acepta los <a href="<?=$urlSitio;?><?=$url_lang;?><?=slugify($array_lang['aviso_privacidad'][$idioma]);?>">Términos de uso y la Aviso de privacidad</a> de <?=$title_site;?>.</p>
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
				contacto_ready();
			});
			$(window).on('load', function(){
				contacto_load();
			});
			$(window).on('resize', function(){
				contacto_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>