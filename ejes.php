<?php
	$acceso_restringido = true;
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['ejes'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['ejes'][$idioma]);
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
                                    <li><?=$array_lang['ejes'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
                <div class="seccion">
                    <div class="margen">
                        <div class="renglon padding-x padding-y align-center lineaB">
                            <div class="col align-justify" >
                                <h1 class="mayus align-center"><?=$array_lang['ejes'][$idioma];?></h1>  
                           	</div>
						</div>
                        <div class="renglon iguales padding-x padding-y align-center" data-w="840">
                        	<div class="col col340 align-left linea">
                            	<div class="col_scroll">
                                	<?php require_once "part/sitio/menu_lateral.php"; ?>                       
                                </div>                 
                            </div>
                            <div class="col col340G align-justify">
                            	
                                <ul class="nav int">
                                    <li><a href="#" data-view="datos">Ejes</a></li>
                                    <li><a href="#" data-view="forma">Nuevo eje</a></li>
                                </ul> 
                                
                                
                                <div class="view formulario align-left" data-action="<?=$urlSitio.$url_lang;?>" id="form_contacto">
                                    <div class="renglon padding-x0 padding-y0">
                                    	<div class="col">
                                            <h3 class="margin-yb"><span>Nuevo eje</span></h3>  
                                        </div>
                                        <div class="col">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Eje:</div>
                                                <div class="r">
                                                    <input type="text" id="input_eje" maxlength="250"/>
                                                </div>
                                            </div>
                                        </div>	
                                        <div class="col">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Color:</div>
                                                <div class="r">
                                                    <input type="text" id="input_color" maxlength="7"/>
                                                </div>
                                            </div>
                                        </div>	
                                    </div>
                                    <div class="renglon padding-x0 padding-y0 igual margin-yt">
                                        <div class="col col2 align-left">
                                            <div class="tabla"><div class="td-middle">
                                                <div class="item">
                                                    <p><a href="#" id="btn_guardar" class="boton"> Guardar</a></p>
                                                </div>
                                            </div></div>
                                        </div>
                                        <div class="col col2 align-right">
                                            <div class="tabla"><div class="td-middle">
                                                <div class="item">
                                                    <p><small><a href="#" id="btn_limpiar">Limpiar</a></small></p>
                                                </div>
                                            </div></div>
                                        </div> 
                                    </div>
                                    <div class="renglon"></div>
                                </div>  
                                
                                <div class="view datos">
                                    <div class="renglon">
                                        <div class="col">
                                            <table id="table_data" class="display responsive no-wrap" style="width:100%"></table>                                
                                        </div>
                                    </div>
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
				ejes_ready();
			});
			$(window).on('load', function(){
				ejes_load();
			});
			$(window).on('resize', function(){
				ejes_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>