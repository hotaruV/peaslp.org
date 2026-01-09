<?php
	$acceso_restringido = true;
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['usuarios'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['usuarios'][$idioma]);
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
                                    <li><?=$array_lang['usuarios'][$idioma];?></li>
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
                            <div class="col align-justify" >
                                <h1 class="mayus align-center"><?=$array_lang['usuarios'][$idioma];?></h1>  
                           	</div>
						</div>
                        <div class="renglon iguales padding-x padding-y align-center" data-w="600">
                        	<div class="col col340 align-left linea">
                            	<div class="col_scroll">
                                	<?php require_once "part/sitio/menu_lateral.php"; ?>                       
                                </div>                 
                            </div>
                            <div class="col col340G align-justify">
                            	
                                <ul class="nav int">
                                    <li><a href="#" data-view="datos">Usuarios</a></li>
                                    <li><a href="#" data-view="forma">Nuevo usuario</a></li>
                                </ul> 
                                
                                <div class="view formulario align-left" data-action="<?=$urlSitio.$url_lang;?>" id="form_contacto">
                                    <div class="renglon padding-x0 padding-y0">
                                    	<div class="col">
                                            <h3 class="margin-yb"><span>Nuevo usuario</span></h3>  
                                        </div>

                                        <div class="renglon padding-x2">
                                            <div class="col col2">
                                                <div class="item" data-obligatorio="true">
                                                    <div class="p"> Nombre de la institución:</div>
                                                    <div class="r">
                                                        <input type="text" id="input_nombre" maxlength="250"/>
                                                    </div>
                                                </div>
                                            </div>	
                                            <div class="col col2">
                                                <div class="item" data-obligatorio="false">
                                                    <div class="p"> Nombre completo:</div>
                                                    <div class="r">
                                                        <input type="text" id="input_apellidos" maxlength="250"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="renglon padding-x2">
                                            <div class="col col2">
                                                <div class="item" data-obligatorio="true">
                                                    <div class="p"> Usuario (acceso al sistema):</div>
                                                    <div class="r">
                                                        <input type="text" id="input_correo" maxlength="250"/>
                                                    </div>
                                                </div>
                                            </div>	
                                            <div class="col col2">
                                                <div class="item" data-obligatorio="true" id="div_contrasena">
                                                    <div class="p"> Contraseña:</div>
                                                    <div class="r">
                                                        <input type="text" id="input_contrasena" maxlength="250" value="" style="font-family: monospace;" />
                                                        <small><a href="#" id="a_contrasena">Generar contraseña</a></small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>	
                                        <div class="renglon">
                                            <div class="col">
                                                <div class="item" data-obligatorio="true">
                                                    <div class="p"> Contraseña de un solo uso </div>
                                                    <div class="r">
                                                        <label class="switcher">
                                                            <div class="switch"></div>
                                                            <input type="checkbox" data-type="switch" value="1" name="input_contrasena_un_uso" class="auto"> 
                                                            
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="renglon">
                                            <div class="col">
                                                <div class="item" data-obligatorio="false">
                                                    <div class="p"> Correo electrónico (recibir notificaciones):</div>
                                                    <div class="r">
                                                        <input type="text" id="input_correo_electronico" maxlength="250"/>
                                                    </div>
                                                </div>
                                            </div>	
                                        </div>
                                        <div class="renglon">
                                            <div class="col">
                                                <div class="item" data-obligatorio="true">
                                                    <div class="p"> Perfil:</div>
                                                    <div class="r" id="div_perfil">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="renglon">
                                            <div class="col">
                                                <div class="item change_perfil" data-obligatorio="false" id="div_actor">
                                                    <div class="p"> Actor responsable:</div>
                                                    <div class="r">
                                                        <select id="input_actor">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="renglon">
                                            <div class="col">
                                                <div class="item change_perfil" data-obligatorio="false" id="div_actor_municipio">
                                                    <div class="p"> Municipio del actor responsable:</div>
                                                    <div class="r">
                                                        <select id="input_actor_municipio">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col" style="display:none;">
                                                <div class="item change_perfil" data-obligatorio="false" id="div_actor_catalogo">
                                                    <div class="p"> Catálogo del actor responsable:</div>
                                                    <div class="r">
                                                        <select id="input_actor_catalogo">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="item change_perfil" data-obligatorio="false" id="div_actor_elemento">
                                                    <div class="p"> Elemento del catálogo:</div>
                                                    <div class="r">
                                                        <select id="input_actor_elemento">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
											
                                        </div>
                                        <div class="renglon">
                                            <div class="col">
                                                <div class="item change_perfil" data-obligatorio="false" id="div_institucion">
                                                    <div class="p"> Institución coordinadora:</div>
                                                    <div class="r">
                                                        <select id="input_institucion">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="renglon">
                                            <div class="col">
                                                <div class="item change_perfil" data-obligatorio="false" id="div_institucion_municipio">
                                                    <div class="p"> Municipio de la Institución coordinadora:</div>
                                                    <div class="r">
                                                        <select id="input_institucion_municipio">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                    </div>
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
				usuarios_ready();
			});
			$(window).on('load', function(){
				usuarios_load();
			});
			$(window).on('resize', function(){
				usuarios_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>