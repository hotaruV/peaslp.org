<?php
	$acceso_restringido = false;
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['propiedad'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['propiedad'][$idioma]);
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
                                    <li><?=$array_lang['propiedad'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
                
                <div class="seccion seccion_titulo">					
                    <div class="margen margen_med">
                        <div class="columnas">
                            <div class="col1"><div class="colh"><div class="colv">
                                <h1><?=$array_lang['propiedad'][$idioma];?></h1>
                            </div></div></div>
                            <div class="linea"></div>
                        </div>
                    </div>                   
				</div>
                <div class="seccion seccion_ultimo">   
               		<div class="margen margen_med">
                    	<div class="columnas">
                        	<div class="col1"><div class="colh"><div class="colv" align="justify">
                            	<p>
                                	<strong class="big">Sistema de monitoreo, seguimiento y evaluación de cumplimiento del PI-PEA</strong> <br>
                                	Derechos Reservados © <?=date("Y");?>
                                </p>
                                
                                <p>
                                	Secretaría Ejecutiva del Sistema Estatal Anticorrupción de San Luis Potosí<br>
                                    Dirección: Fray Diego de la Magdalena # 940, Col. Jardín, San Luis Potosí, S.L.P., México. C. P. 78270
                               	</p>
                                
                                <p>
                                	Todos los derechos están reservados. Ninguno de los materiales contenidos en este sitio se podrá utilizar, reproducir ni transmitir, en su totalidad o en parte, en forma alguna y por ningún medio, ya sea electrónico o mecánico, incluidas la fotocopia, la grabación o la utilización de cualquier sistema de almacenamiento y recuperación de información, sin el permiso previo del Programa de las Naciones Unidas para el Desarrollo y de la Secretaría Ejecutiva del Sistema Estatal Anticorrupción de San Luis Potosí.
                               	</p>
                                
                                <p>
                                	El análisis y las conclusiones expresadas en el sitio no reflejan necesariamente las opiniones del Programa de las Naciones Unidas para el Desarrollo, de su Junta Ejecutiva, ni de sus Estados Miembros.
                               	</p>
                                
                                <p>
                                	El Programa de las Naciones Unidas para el Desarrollo es el principal organismo de las Naciones Unidas dedicado a poner fin a la injusticia de la pobreza, la desigualdad y el cambio climático. Trabajamos con nuestra extensa red de personas expertas y aliados en 170 países para ayudar a las naciones a construir soluciones integradas y duraderas para las personas y el planeta.
                                </p>
                                
                            </div></div></div>
                            <div class="linea"></div>
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