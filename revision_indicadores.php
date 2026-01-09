<?php
	$acceso_restringido = true;
	require_once "part/gnl/sesion.php";
	
	$actor = "";
	$periodo = "";
	$municipio = "";
	$catalogo = "";
	$elemento = "";
	$ejes = "";
	$metas_al = "";
	
	if(isset($_GET) and isset($_GET['a']) and isset($_GET['p'])){
		$actor = intval($_GET['a']);
		$periodo = intval($_GET['p']);
		if(isset($_GET['m'])){
			$municipio = intval($_GET['m']);
		}
		if(isset($_GET['cat'])){
			$catalogo = intval($_GET['cat']);
		}
		if(isset($_GET['ele'])){
			$elemento = intval($_GET['ele']);
		}
		if(isset($_GET['e'])){
			$ejes = intval($_GET['e']);
		}
		if(isset($_GET['ad'])){
			$metas_al = intval($_GET['ad']);
		}
	}
	
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
                                    <div class="renglon iguales padding-x padding-y0 no_imprimirs">
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Período a revisar:</div>
                                                <div class="r">
                                                    <select id="input_periodo" data-value="<?=$periodo;?>">
                                                        <option value="">Seleccione</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="true">
                                                <div class="p"> Actor:</div>
                                                <div class="r">
                                                    <select id="input_actor" data-value="<?=$actor;?>">
                                                        <option value="">Seleccione</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="renglon padding-x padding-y0 no_imprimirs">
                                        <div class="col">
                                            <div class="item" data-obligatorio="false" id="div_actor_municipio">
                                                <div class="p"> Municipio del actor responsable:</div>
                                                <div class="r">
                                                    <select id="input_actor_municipio" data-value="<?=$municipio;?>">
                                                        <option value="">Seleccione</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col" style="display:none;">
                                                <div class="item change_perfil" data-obligatorio="false" id="div_actor_catalogo">
                                                    <div class="p"> Catálogo del actor responsable:</div>
                                                    <div class="r">
                                                        <select id="input_actor_catalogo" data-value="<?=$catalogo;?>">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="item change_perfil" data-obligatorio="false" id="div_actor_elemento">
                                                    <div class="p"> Especifique:</div>
                                                    <div class="r">
                                                        <select id="input_actor_elemento" data-value="<?=$elemento;?>">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="renglon iguales padding-x padding-y0 no_imprimirs">
                                        <div class="col col2">
                                            <div class="item" data-obligatorio="false">
                                                <div class="p"> Filtrar por Eje:</div>
                                                <div class="r">
                                                    <select id="input_filtro_ejes" rel="<?=$ejes;?>">
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
                                                    <select id="input_filtro_metas_al" rel="<?=$metas_al;?>">
                                                        <option value="">Seleccione</option>
                                                        <option value="-1">Todos los años</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="renglon"></div>
                                    </div>
                                    
                                    <div style="display:none;">
                                    	<input id="input_filtro_aprobado" value="">
										<input id="input_filtro_estatus" value="">
                                    </div>
                                    
                                    <?php if(in_array($usuario_perfil, array(1))){ ?>
                                        <div class="renglon padding-x padding-y no_imprimirs" id="q_captura_todo">
                                            <div class="col">
                                                <div>                                            	
                                                    <p>
                                                    	<a href="#" class="rojo" id="btn_eliminar_todo_indicadores">Eliminar toda captura del actor en el periodo seleccionado.</a>
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    <?php } ?> 
                                    <div class="renglon"></div>
                                    
                                   
                                    
                                    <div class="renglon padding-x padding-y" id="div_estatus">
                                        <div class="col">
                                        	
                                        	Estatus de captura: <strong><span id="estatus_captura"></span> capturado(s) de <span id="estatus_total"></span></strong> <br>
                                            Estatus de revisión: <strong><span id="estatus_revision"></span> revisado(s) de <span id="estatus_revision_total"></span></strong>
                                            <div style="padding-left:30px; padding-bottom:0.5rem;">
                                            	<div id="btn_filtro_aprobados" class="btn_filtro" data-value="1" data-tipo="aprobado">
                                                	Aprobados: <strong><span id="estatus_aprobados"></span></strong>
                                                </div>
                                                <div id="btn_filtro_rechazados" class="btn_filtro" data-value="2" data-tipo="aprobado">
	                                                Rechazados: <strong><span id="estatus_rechazados"></span></strong>
                                                </div>
                                                <div id="btn_filtro_revision" class="btn_filtro" data-value="3" data-tipo="aprobado">
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
                                            
                                            <div>
                                            	<div>
                                                	<strong>Avance promedio (solo aprobados): <span id="avance_promedio_ok"></span>%</strong> 
                                                </div>
                                                <div style="padding-left:30px;">
                                                	Avance promedio: <strong><span id="avance_promedio"></span>%</strong> 
                                                </div>
                                            </div>
                                            
                                            
                                            <hr />
                                        </div>
                                    </div>

                                    <div id="mensajes">
                                        <div class="renglon padding-x padding-y">
                                            <div class="col">
                                                <div id="mensaje"></div>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>

                                    <div id="usuarios">
                                        <div class="renglon padding-x padding-y">
                                            <div class="col">
                                                <div class="usuarios"></div>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="renglon padding-x padding-y0 ">
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
				revision_indicador_ready();
			});
			$(window).on('load', function(){
				revision_indicador_load();
			});
			$(window).on('resize', function(){
				revision_indicador_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>