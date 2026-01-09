<?php
	$acceso_restringido = true;
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['reportes'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['reportes'][$idioma]);
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
                                    <li><?=$array_lang['reportes'][$idioma];?></li>
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
                                <h1 class="mayus"><?=$array_lang['reportes'][$idioma];?></h1>  
                            </div>
                        </div>
                        <div class="renglon iguales padding-x padding-y align-center" data-w="600">
                        	<div class="col col340 align-left linea">
                            	<div class="col_scroll">
                                	<?php require_once "part/sitio/menu_lateral.php"; ?>                       
                                </div>                 
                            </div>
                            <div class="col col340G align-justify">
                            	<div class="view formulario align-left margin-yb">
                                    <div class="renglon iguales padding-x padding-y0">
                                        <div class="col">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Período a revisar:</div>
                                                <div class="r">
                                                    <select id="input_periodo">
                                                        <option value="">Seleccione</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="renglon iguales padding-x padding-y0">
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="false">
                                                <div class="p"> Filtrar por Eje:</div>
                                                <div class="r">
                                                    <select id="input_filtro_ejes">
                                                        <option value="">Todos los ejes</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="false">
                                                <div class="p"> Filtrar por Plazo:</div>
                                                <div class="r">
                                                    <select id="input_filtro_plazos">
                                                        <option value="">Todos los plazos</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
								</div>
                                                                    
                            	<div class="renglon padding-x padding-y0">
                                	<div class="col" id="download_data" data-url="<?=$urlSitio.$url_lang.slugify($array_lang['revision_lineas'][$idioma]);?>">
                                    	<p>
	                                        <a href="#" class="boton small" id="btn_descarga">Descargar reporte</a> |
                                            <a data-href="<?=$urlSitio;?>data/reportes.php?t=<?=$tokenPublic;?>&idtipo=lineas" href="#" class="boton small" id="btn_descarga_full">Descargar reporte completo</a>
                                        </p>
                                    </div>
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
				reportes_ready();
			});
			$(window).on('load', function(){
				reportes_load();
			});
			$(window).on('resize', function(){
				reportes_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>