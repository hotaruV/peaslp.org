<?php
	$acceso_restringido = true;
	require_once "part/gnl/sesion.php";
	
	$data_action = $urlSitio.$url_lang.slugify($array_lang['dashboard'][$idioma]);
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['cambiar_contrasena'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['cambiar_contrasena'][$idioma]);
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
                                    <li><?=$array_lang['cambiar_contrasena'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
                <div class="seccion">
                    <div class="margen margen_gde">
                        <div class="renglon padding-x padding-y align-center lineaB">
                            <div class="col">
                                <h1 class="mayus"><?=$array_lang['cambiar_contrasena'][$idioma];?></h1>  
                            </div>
                        </div>
                        <div class="renglon iguales padding-x padding-y align-center" data-w="600">
                        	<div class="col col340 align-left linea">
                            	<div class="col_scroll">
                                	<?php require_once "part/sitio/menu_lateral.php"; ?>                       
                                </div>                 
                            </div>
                            <div class="col col340G align-justify">
                            	<div class="formulario align-left" data-action="<?=$data_action;?>" id="form_iniciar_sesion"><div class="renglon">
                                    <div class="renglon padding-x2">
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Contraseña actual:</div>
                                                <div class="r">
                                                    <input type="password" id="input_contrasena" value="" maxlength="250" style="font-family: monospace;" />
                                                    <label>
                                                        <input type="checkbox" value="1" class="ver_contrasena" name="input_contrasena_ver" data-id="input_contrasena"> Mostrar contraseña. 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
									</div>
                                    <div class="renglon">
                                        <div class="col">
                                        	<p>&nbsp;</p>
                                        </div>
                                  	</div>
                                    <div class="renglon padding-x2">
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Contraseña nueva:</div>
                                                <div class="r">
                                                    <input type="password" id="input_contrasena_nueva" value="" maxlength="250" style="font-family: monospace;" />
                                                    <label>
                                                        <input type="checkbox" value="1" class="ver_contrasena" name="input_contrasena_ver_n" data-id="input_contrasena_nueva"> Mostrar contraseña. 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>	
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Confirmar nueva contraseña:</div>
                                                <div class="r">
                                                    <input type="password" id="input_contrasena_nueva_c" value="" maxlength="250" style="font-family: monospace;" />
                                                    <label>
                                                        <input type="checkbox" value="1" class="ver_contrasena" name="input_contrasena_ver_n_c" data-id="input_contrasena_nueva_c"> Mostrar contraseña. 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>	
                                    </div>
                                    <div class="renglon igual">
                                        <div class="col col2 align-left">
                                            <div class="tabla"><div class="td-middle">
                                                <div class="item">
                                                    <p><a href="#" id="btn_guardar" class="boton"> Actualizar</a></p>
                                                </div>
                                            </div></div>
                                        </div> 
                                    </div>
                                </div></div>
                            </div>                                
                        </div>                            
                        <div class="renglon"></div>
					</div>
				</div>                                                                                                                            
            </div>
	        <?php require_once "part/seccion/footer.php"; ?>
        </div>
        <?php require_once "part/seccion/machotes.php"; ?>
	    <script>
			$(document).ready(function(){
				cambiar_contrasena_ready();
			});
			$(window).on('load', function(){
				cambiar_contrasena_load();
			});
			$(window).on('resize', function(){
				cambiar_contrasena_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>