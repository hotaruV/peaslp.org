<?php
	$acceso_restringido = true;
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['captura'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['captura'][$idioma]);
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
                                    <li><?=$array_lang['captura'][$idioma];?></li>
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
                                <h1 class="mayus align-center"><?=$array_lang['captura'][$idioma];?></h1>  
                           	</div>
						</div>
                        <div class="renglon iguales padding-x padding-y align-center" data-w="600">
                        	<div class="col col340 align-left linea">
                            	<div class="col_scroll">
                                	<?php require_once "part/sitio/menu_lateral.php"; ?>                       
                                </div>                 
                            </div>
                            <div class="col col340G align-justify">
                            	
                                <div class="view formulario align-left" id="form_captura">
                                    <div class="renglon padding-x padding-y0 no_imprimirs">
                                        <div class="col">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Período a reportar:</div>
                                                <div class="r">
                                                    <select id="input_periodo">
                                                        <option value="">Seleccione aquí un periodo para comenzar</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="renglon iguales padding-x padding-y0">
                                            <div class="col col2">
                                                <div class="item" data-obligatorio="false">
                                                    <div class="p"> Filtrar por Eje:</div>
                                                    <div class="r">
                                                        <select id="input_filtro_ejes">
                                                            <option value="">Seleccione</option>
                                                            <option value="-1">Todos los ejes</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col col2">
                                                <div class="item" data-obligatorio="false">
                                                    <div class="p"> Filtrar por Meta al año:</div>
                                                    <div class="r">
                                                        <select id="input_filtro_metas_al">
                                                            <option value="">Seleccione</option>
                                                            <option value="-1">Todos los años</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="renglon"></div>
                                    </div>
                                    
                                    <div style="display:none;">
                                    	<input id="input_filtro_aprobado" value="">
										<input id="input_filtro_estatus" value="">
                                    </div>
                                    
                                    <div class="renglon padding-x padding-y" id="div_estatus">
                                        <div class="col">
                                        	<p>
                                            	Estatus de captura: <strong><span id="estatus_captura"></span> capturado(s) de <span id="estatus_total"></span></strong> <br>
	                                            <a href="#" class="boton transparente small no_imprimirs" id="btn_revision">Enviar a revisión</a>
                                            </p>
                                            
                                            <div style="padding-left:30px; padding-bottom:0.5rem;">
                                            	<div id="btn_filtro_aprobados" class="btn_filtro" data-value="1" data-tipo="aprobado">
                                                	Aprobados: <strong><span id="estatus_aprobados"></span></strong>
                                                </div>
                                                <div id="btn_filtro_rechazados" class="btn_filtro" data-value="2" data-tipo="aprobado">
	                                                Rechazados: <strong><span id="estatus_rechazados"></span></strong>
                                                </div>
                                                <div id="btn_filtro_revision" class="btn_filtro" data-value="3" data-tipo="aprobado" style="display:none;">
	                                                Enviadas a revisión: <strong><span id="estatus_revision_"></span></strong>
                                                </div>
                                            </div>
                                            
                                            <div style="padding-left:30px; padding-bottom:0.5rem;">
                                            	<div id="btn_filtro_sin_captura" class="btn_filtro" data-value="0" data-tipo="estatus">
                                                	Sin capturar: <strong><span id="cumplio_0"></span></strong>
                                                </div>
                                            	<div id="btn_filtro_no_iniciados" class="btn_filtro" data-value="2" data-tipo="estatus">
                                                	No se ha iniciado: <strong><span id="cumplio_2"></span></strong>
                                                </div>
                                                <div id="btn_filtro_iniciados" class="btn_filtro" data-value="1" data-tipo="estatus">
	                                                Iniciado: <strong><span id="cumplio_1"></span></strong>
                                                </div>
                                                <div id="btn_filtro_terminados" class="btn_filtro" data-value="3" data-tipo="estatus">
	                                                Terminado: <strong><span id="cumplio_3"></span></strong>
                                                </div>
                                            </div>
                                            
                                            <div style="padding-left:30px;">
                                            	<div>
                                                	<strong>Avance promedio (solo aprobados): <span id="avance_promedio_ok"></span>%</strong> 
                                                </div>
                                                <div>
                                                	Avance promedio: <strong><span id="avance_promedio"></span>%</strong> 
                                                </div>
                                            </div>
                                            
                                            <hr />
                                        </div>
                                        
                                        
                                    </div>
                                    <div class="renglon padding-x padding-y">
                                        <div class="col">
                                            <hr />
                                        </div>
                                    </div>

                                    <div class="renglon padding-x padding-y0">
                                        <div class="col no_imprimirs" id="filtros" style="padding-bottom:15px;">
                                            <p>
                                            	<!--<a href="#" class="a_linea" id="btn_copiar">Copiar</a> <br>-->
                                                <a href="#" class="a_linea" id="btn_imprimir">Imprimir</a> <br>
                                            </p>
                                        </div>
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
				captura_indicador_ready();
			});
			$(window).on('load', function(){
				captura_indicador_load();
			});
			$(window).on('resize', function(){
				captura_indicador_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>