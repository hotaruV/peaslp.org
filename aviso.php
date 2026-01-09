<?php
	$acceso_restringido = false;
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['aviso_privacidad'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['aviso_privacidad'][$idioma]);
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
                                    <li><?=$array_lang['aviso_privacidad'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
               
                <div class="seccion seccion_ultimo">   
               		<div class="margen margen_med">
                    	<div class="renglon">
                        	<div class="col align-justify">
                          
                                  <h4 class="margin-yb">AVISO DE PRIVACIDAD SIMPLIFICADO DE LA PRESENTACIÓN DEL PROGRAMA DE IMPLEMENTACIÓN DE LA POLÍTICA ESTATAL ANTICORRUPCIÓN DE SAN LUIS POTOSÍ Y SU SISTEMA DE MONITOREO, SEGUIMIENTO Y EVALUACIÓN.</h4>
                                  <p>
                                    La Secretaría Ejecutiva del Sistema Estatal Anticorrupción de San Luis Potosí (SESEA) con fundamento en los artículos 3 fracción II, 20 fracción III, 21 párrafo segundo, 26, 27 y 69 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y los artículos 3 fracción I, 15 fracción II, 19, 20 21, 22, 23, 27, 34, 35,36, 37 38 y demás relativos de la Ley de Protección de Datos Personales en Posesión de los Sujetos Obligados del Estado de San Luis Potosí, 1,2, 6, 9 fracción VI, 27 37 fracción XI, de la Ley del Sistema Estatal Anticorrupción de San Luis Potosí, pone a su disposición el aviso de privacidad simplificado de la presentación del Programa de Implementación de la Política Estatal Anticorrupción de San Luis Potosí, y su sistema de Monitoreo, Seguimiento y Evaluación.</p>
  
  <p><strong>La denominación y domicilio del sujeto responsable.</strong></p>
  
  <p>
                                   La Secretaría Ejecutiva del Sistema Estatal Anticorrupción de San Luis Potosí (en adelante SESEA), con domicilio en Fray Diego de la Magdalena #940 colonia jardín de la ciudad capital de San Luis potosí, es la responsable del tratamiento de los datos personales que el titular de la información proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, así como por la Ley de Protección de Datos Personales en Posesión de los Sujetos Obligados del Estado de San Luis Potosí, y demás normatividad que resulte aplicable.</p>
  
  <p><strong>¿Qué datos personales serán recabados?</strong></p>
                                  <ul>
                                    <li>Nombre completo</li>
                                    <li>Lugar de trabajo </li>
                                    <li>Teléfono Fijo y/o celular</li>
                                    <li>Correo electrónico</li>
                                  </ul>
                                  <p>Para las finalidades del tratamiento de los datos personales, <strong>NO</strong> serán utilizados datos sensibles.</p>
                                  <p><strong>Las finalidades del tratamiento para las cuales se obtienen los datos personales.</strong><strong> </strong></p>
                                  
                                  <p>
                                   Los datos personales que recaba la SESEA serán utilizados para las siguientes finalidades: <br>
                                   a) Generación de credenciales de acceso (usuario y contraseña) a las personas que sean designadas como enlaces de cada institución, con la finalidad de reportar avances en la ejecución del programa de implementación de la Política Estatal Anticorrupción de San Luis Potosí. <br>
                                   b) Difusión de la imagen y voz personales, por aparición en fotografías o videos de eventos o actividades que publicite la SESEA. <br>
                                   c) Almacenamiento de imagen o voz personales en video, fotografía o archivos de audio, para fines archivísticos y documentales de la SESEA. <br>
                                   d) Generación de información estadística e indicadores, a efecto de desarrollar proyectos de políticas públicas en materia de prevención y combate a la corrupción. <br>
                                 </p>
                                 <p><strong>La transferencia de datos personales.</strong></p>
                                 
                                 <p>
                                    Se comunica al titular de la información que no se realizarán transferencias de datos personales que requieran consentimiento, salvo aquellas que procedan en términos de lo dispuesto en el artículo 16, párrafo segundo de la Constitución Política de los Estados Unidos Mexicanos, en relación con los artículos 22, 65, 66 y 70 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, así como el título quinto de la Ley de Protección de Datos Personales en Posesión de los Sujetos Obligados del Estado de San Luis Potosí, preceptos legales que establecen los casos en que es posible realizar transferencias de datos personales, sin necesidad de requerir el consentimiento del titular.</p>
                                    
                                    <p> <strong>Los mecanismos y medios disponibles para que el titular, pueda manifestar su negativa para el tratamiento de sus datos personales, para finalidades y transferencias de datos personales que requieren el consentimiento del titular.</strong></p>
                                    <p>
                                    Se puede hacer directamente en la Unidad de Transparencia de la SESEA, la cual se encuentra en Fray Diego de la Magdalena #940 colonia jardín de la ciudad capital de San Luis potosí, o por medio del siguiente correo electrónico:<br>
  <a href="mailto:unidaddetransparencia@seseaslp.org" target="_blank">unidaddetransparencia@seseaslp.org</a><br>
                                  </p>
                                  <p>Si Usted no manifiesta expresamente su oposición o negativa para el tratamiento de sus datos personales, se entenderá que ha otorgado consentimiento tácito para ello, en términos de lo previsto en los artículos 21 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, y 22 de la Ley de Protección de Datos Personales en Posesión de los Sujetos Obligados del Estado de San Luis Potosí.</p>
  
  <p><strong>El sitio donde se podrá consultar el aviso de privacidad integral.</strong></p>
  <p>
                                    Si desea conocer nuestro aviso de privacidad integral, lo puede hacer personalmente en las instalaciones de la SESEA, o también se encuentra a su disposición en el portal de internet de la SESEA, consultable en: <br> <a href="https://seseaslp.org/pea.html/avisodeprivacidadintegral" target="_blank">https://seseaslp.org/pea.html/avisodeprivacidadintegral</a> </p>
                                    
                                  <p><strong>El sitio donde podrá consultar actualizaciones</strong></p>
                                 
                                  <p>
                                    En caso de que se generen actualizaciones al presente aviso de privacidad integral, podrá consultarlos en nuestra página de internet:<br>
  <a href="https://seseaslp.org/pea.html" target="_blank">https://seseaslp.org/pea.html</a><strong> </strong></p>
  
                            </div>
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