<?php
	$acceso_restringido = true;
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['revision'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['revision'][$idioma]);
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
                                    <li><?=$array_lang['revision'][$idioma];?></li>
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
                                <h1 class="mayus align-center"><?=$array_lang['revision'][$idioma];?></h1>  
                           	</div>
						</div>
                        <div class="renglon iguales padding-x padding-y align-center" data-w="600">
                        	<div class="col col340 align-left linea">
                            	<div class="col_scroll">
                                	<?php require_once "part/sitio/menu_lateral.php"; ?>                       
                                </div>                 
                            </div>
                            <div class="col col340G align-justify">
                            	
                                <div class="view formulario align-left" id="form_revision">
                                    <div class="renglon iguales padding-x padding-y0">
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Periodo:</div>
                                                <div class="r">
                                                    <select id="input_periodo">
                                                        <option value="">Seleccione</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Actor:</div>
                                                <div class="r">
                                                    <select id="input_actor">
                                                        <option value="">Seleccione</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="renglon padding-x padding-y0">
                                        <div class="col">
                                            <div class="item" data-obligatorio="false" id="div_actor_municipio">
                                                <div class="p"> Municipio del actor responsable:</div>
                                                <div class="r">
                                                    <select id="input_actor_municipio">
                                                        <option value="">Seleccione</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="item" data-obligatorio="false">
                                                <div class="p"> Filtrar por año de la meta</div>
                                                <div class="r">
                                                    <select id="input_meta_al">
                                                        <option value="">Todos los años</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="mensajes">
                                        <div class="renglon padding-x padding-y">
                                            <div class="col">
                                                <hr />
                                            </div>
                                        </div>
                                        <div class="renglon padding-x padding-y">
                                            <div class="col">
                                                <div id="mensaje"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="usuarios">
                                        <div class="renglon padding-x padding-y">
                                            <div class="col">
                                                <hr />
                                            </div>
                                        </div>
                                        <div class="renglon padding-x padding-y">
                                            <div class="col">
                                                <div class="usuarios"></div>
                                            </div>
                                        </div>
                                    </div>


                                    

                                    <div class="renglon padding-x padding-y">
                                        <div class="col">
                                            <hr />
                                        </div>
                                    </div>

                                    <div class="renglon padding-x padding-y0">
                                        <div class="col">
                                            <div class="preguntas" id="preguntas">

                                            </div>
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
				revision_ready();
			});
			$(window).on('load', function(){
				revision_load();
			});
			$(window).on('resize', function(){
				revision_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>