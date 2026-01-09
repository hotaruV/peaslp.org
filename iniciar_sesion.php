<?php
	require_once "part/gnl/sesion.php";
	if ($usuario_logeado) {
		header('Location: '.$urlSitio.$url_lang."?l=1"); exit;
	}
	
	$data_action = $urlSitio.$url_lang.slugify($array_lang['dashboard'][$idioma]);
	if(isset($_GET['dir']) and intval($_GET['dir']) == 1){
		if (
			isset($_COOKIE['direccion']) and 
			isset($_COOKIE['direccion']) != ""
		) {
			$data_action = $url_lang.slugify($array_lang['dashboard'][$idioma])."/".strip_tags($_COOKIE['direccion']);
		}	
	}
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['iniciar_sesion'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['iniciar_sesion'][$idioma]);
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
                                    <li><?=$array_lang['iniciar_sesion'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
                <div class="seccion">
                    <div class="margen margen_chi">
                        <div class="formulario align-left" data-action="<?=$data_action;?>" id="form_iniciar_sesion"><div class="renglon">
                        	<div class="renglon padding-y align-center">
                                <div class="col">
                                    <h1 class="mayus"><?=$array_lang['iniciar_sesion'][$idioma];?></h1>  
                                </div>
                            </div>
                            <div class="renglon">
                                <div class="col">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Usuario:</div>
                                        <div class="r">
                                            <input type="email" id="input_usuario" value="" maxlength="250" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Contraseña:</div>
                                        <div class="r">
                                            <input type="password" id="input_contrasena" value="" maxlength="250" style="font-family: monospace;" />
                                            <label>
                                            	<input type="checkbox" value="1" name="input_contrasena_ver"> Mostrar contraseña. 
                                            </label>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                            <div class="renglon igual">
                            	<div class="col col2 align-left">
                                	<div class="tabla"><div class="td-middle">
                                        <div class="item">
                                            <p><a href="#" id="btn_iniciar_sesion" class="boton"> Iniciar sesión</a></p>
                                        </div>
                                    </div></div>
                                </div>
                                <div class="col col2 align-right">
                                	<div class="tabla"><div class="td-middle">
                                        <div class="item">
                                            <p><small><a href="<?=$urlSitio;?><?=$url_lang;?><?=slugify($array_lang['contacto'][$idioma]);?>" id="input_recuperar">¿Olvidaste tu contraseña?</a></small></p>
                                        </div>
									</div></div>
                                </div> 
                            </div>
                        </div></div>
					</div>
				</div>              
                
            </div>
	        <?php require_once "part/seccion/footer.php"; ?>
        </div>
        <?php require_once "part/seccion/machotes.php"; ?>
	    <script>
			$(document).ready(function(){
				iniciar_sesion_ready();
			});
			$(window).on('load', function(){
				iniciar_sesion_load();
			});
			$(window).on('resize', function(){
				iniciar_sesion_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>