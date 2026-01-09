<?php
$autoload = __DIR__ . '/vendor/autoload.php';
if (file_exists($autoload)) {
    require $autoload;
}
define('APPLICATION', true);
require_once "part/config.php";
require_once "part/gnl/variables.php";
require_once "part/gnl/idioma.php";
require_once "part/gnl/general.php";
require_once "part/gnl/redirect.php";
require_once "part/gnl/lang.php";

require_once "part/gnl/sesion.php";
require_once "part/gnl/acciones.php";


require_once "part/gnl/headers.php";
$title            = $title_site;
$description    = "";
$url            = $url_lang;
$keywords         = "";
$robots         = "all";
$imagen         = "img/" . $img_site;
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
            <?php /*
                <div class="seccion sin slider">
                    <div class="slide">
                        <div class="items">
                            <div class="item">
                                <div class="bg landscape" style="background-color:#dbdbdb;"></div>
                                <div class="bg portrait" style="background-color:#dbdbdb;"></div>
                                <div class="tabla">
                                    <div class="margen margen_med vh100">
                                        <div class="tabla"><div class="td-middle">
                                            <div class="renglon iguales td-middle" data-w="600">
                                            
                                                <div class="col col2">
                                                    <div class="tabla"><div class="td-middle">
                                                        <img src="<?=$urlSitio;?>img/sitio/PiPea Vertical.png" width="100%" style="max-width:320px; height:auto;">
                                                    </div></div>
                                                </div>
                                                <div class="col col2">
                                                    <div class="tabla"><div class="td-middle">
                                                        <!--
                                                        <h2 class="mayus">Programa de implementación de la Política Estatal Anticorrupción de San Luis Potosí</h2>
                                                        <p class="big">La corrupción se ha convertido en un obstáculo omnipresente que mina la confianza en nuestras instituciones públicas y afecta a todos los ámbitos de nuestra sociedad.</p>
                                                        -->
                                                        <!--<h2 class="">Sistema de monitoreo, seguimiento y evaluación de cumplimiento del PI-PEA</h2>-->
                                                        <p class="big">La corrupción representa un desafío persistente que perturba la confianza en nuestras
            instituciones públicas y afecta diversos aspectos de nuestra sociedad. Reconocemos que erradicarla constituye un reto monumental, pero desde el Sistema Estatal Anticorrupción, nos comprometemos con determinación y perseverancia.</p>
                                                        
                                                        <?php if(!$usuario_logeado){ ?>
                                                            <a href="<?=$urlSitio.$url_lang.slugify($array_lang['iniciar_sesion'][$idioma]);?>" class="boton azul"><?=$array_lang['iniciar_sesion'][$idioma];?></a>
                                                        <?php } else { ?> 
                                                            <a href="<?=$urlSitio.$url_lang.slugify($array_lang['dashboard'][$idioma]);?>" class="boton azul">Ir al panel</a>  
                                                        <?php } ?>     
                                                    </div></div>
                                                </div>
                                                <div class="renglon"></div>
                                            </div>
                                        </div></div> 
                                    </div>
                                </div>             
                            </div>
                            <div class="base">
                                <img src="<?=$urlSitio;?>img/slide/slide.png" class="landscape" width="100%" />
                                <img src="<?=$urlSitio;?>img/slide/slide_m.png" class="portrait" width="100%" />
                            </div>
                        </div>
                        <div class="flecha">
                            <div class="izq"></div>
                            <div class="der"></div>	
                        </div>
                        <div class="puntos">
                            <div class="centrado"></div>
                        </div>
                    </div>
                </div> 
                */ ?>
            <div class="seccion gde" style="background-color:#dbdbdb;">
                <div class="margen margen_med vh100">
                    <div class="renglon padding-x padding-y iguales td-middle" data-w="640">
                        <div class="col col2 align-center">
                            <div class="tabla">
                                <div class="td-middle">
                                    <img src="<?= $urlSitio; ?>img/sitio/PIPPEA_VERTICAL.png" width="50%" style="max-width:320px; height:auto;">
                                </div>
                            </div>
                        </div>
                        <div class="col col2 align-justify">
                            <div class="tabla">
                                <div class="td-middle">
                                    <!--
                                    <h2 class="mayus">Programa de implementación de la Política Estatal Anticorrupción de San Luis Potosí</h2>
                                    <p class="big">La corrupción se ha convertido en un obstáculo omnipresente que mina la confianza en nuestras instituciones públicas y afecta a todos los ámbitos de nuestra sociedad.</p>
                                    -->
                                    <!--<h2 class="">Sistema de monitoreo, seguimiento y evaluación de cumplimiento del PI-PEA</h2>-->
                                    <p class="big">La corrupción representa un desafío persistente que perturba la confianza en nuestras
                                        instituciones públicas y afecta diversos aspectos de nuestra sociedad. Reconocemos que erradicarla constituye un reto monumental, pero desde el Sistema Estatal Anticorrupción, nos comprometemos con determinación y perseverancia.</p>

                                    <?php if (!$usuario_logeado) { ?>
                                        <a href="<?= $urlSitio . $url_lang . slugify($array_lang['iniciar_sesion'][$idioma]); ?>" class="boton azul"><?= $array_lang['iniciar_sesion'][$idioma]; ?></a>
                                    <?php } else { ?>
                                        <a href="<?= $urlSitio . $url_lang . slugify($array_lang['dashboard'][$idioma]); ?>" class="boton azul">Ir al panel</a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>
                </div>
            </div>


            <div class="seccion seccion_antecedentes">
                <div class="margen margen_med">
                    <div class="renglon padding-x padding-y iguales" data-w="840">
                        <div class="col col340 linea align-left" style="background-color:#FFF;">
                            <ul class="sobre">
                                <li><a href="#<?= slugify("¿Qué es la Política Estatal Anticorrupción?"); ?>">¿Qué es la Política Estatal Anticorrupción?</a></li>
                                <li><a href="#<?= slugify("¿De dónde surge?"); ?>">¿De dónde surge?</a></li>
                                <li><a href="#<?= slugify("¿Cuál es la estructura?"); ?>">¿Cuál es la estructura?</a></li>
                                <li><a href="#<?= slugify("¿Qué es el Programa de Implementación de la Política Estatal Anticorrupción?"); ?>">¿Qué es el Programa de Implementación de la Política Estatal Anticorrupción?</a></li>
                                <li><a href="#<?= slugify("¿Quiénes serán los encargados de la implementación?"); ?>">¿Quiénes serán los encargados de la implementación?</a></li>
                                <li><a href="#<?= slugify("¿En qué plazos se implementará?"); ?>">¿En qué plazos se implementará?</a></li>
                                <li><a href="#<?= slugify("Colaboración para el desarrollo del Sistema"); ?>">Colaboración para el desarrollo del Sistema</a></li>

                            </ul>
                        </div>
                        <div class="col col340G align-justify">
                            <a name="antecedentes"></a>
                            <div class="elementos">
                                <div class="elemento" id="<?= slugify("¿Qué es la Política Estatal Anticorrupción?"); ?>">
                                    <h2 class="align-left margin-yb">¿Qué es la Política Estatal Anticorrupción?</h2>
                                    <p>En respuesta a este desafío, hemos desarrollado la Política Estatal Anticorrupción, un instrumento estratégico que establece la agenda pública para combatir la corrupción.</p>
                                    <p>Para alcanzar nuestros objetivos, es esencial la colaboración conjunta de todos los actores involucrados en la Política Estatal Anticorrupción: entidades gubernamentales, instituciones académicas, organizaciones no gubernamentales y la sociedad civil.</p>
                                </div>
                                <div class="elemento" id="<?= slugify("¿De dónde surge?"); ?>">
                                    <h2 class="align-left margin-yb">¿De dónde surge?</h2>
                                    <p>Esta política es el resultado de una colaboración activa entre el gobierno, la academia, la sociedad civil y otros actores interesados. Juntos, hemos trabajado para diseñar e implementar políticas y acciones efectivas contra la corrupción en todas sus manifestaciones.</p>
                                </div>
                                <div class="elemento" id="<?= slugify("¿Cuál es la estructura?"); ?>">
                                    <h2 class="align-left margin-yb">¿Cuál es la estructura?</h2>
                                    <p>La Política Estatal Anticorrupción se compone de siete ejes, 62 prioridades, 124 estrategias y 248 líneas de acción. Estas serán ejecutadas por 251 Entes Públicos distribuidos en las cuatro regiones del estado.</p>
                                </div>
                                <div class="elemento" id="<?= slugify("¿Qué es el Programa de Implementación de la Política Estatal Anticorrupción?"); ?>">
                                    <h2 class="align-left margin-yb">¿Qué es el Programa de Implementación de la Política Estatal Anticorrupción?</h2>
                                    <p>El Programa de Implementación de dicha política, funciona como una guía técnica para las instituciones públicas que lo implementarán y para aquellos encargados de evaluar su efectividad.</p>
                                </div>
                                <div class="elemento" id="<?= slugify("¿Quiénes serán los encargados de la implementación?"); ?>">
                                    <h2 class="align-left margin-yb">¿Quiénes serán los encargados de la implementación?</h2>
                                    <p>Los responsables de llevar a cabo este programa serán actores de los sectores público, académico, empresarial y social, trabajando en conjunto para lograr resultados significativos.</p>
                                </div>
                                <div class="elemento" id="<?= slugify("¿En qué plazos se implementará?"); ?>">
                                    <h2 class="align-left margin-yb">¿En qué plazos se implementará?</h2>
                                    <p>La implementación se llevará a cabo en tres fases:</p>
                                    <ul>
                                        <li>Corto plazo (2024-2025)</li>
                                        <li>Mediano plazo (2026-2028)</li>
                                        <li>Largo plazo (2029-2030)</li>
                                    </ul>
                                    <p>Este compromiso a largo plazo refleja nuestra determinación de abordar la corrupción de manera integral y sostenible.</p>
                                    <p>El sistema de monitoreo, seguimiento y evaluación de cumplimiento del PI-PEA es un esfuerzo desarrollado de forma colaborativa, entre la Secretaría Ejecutiva del Sistema Estatal Anticorrupción de San Luis Potosí y el Programa de las Naciones Unidas para el Desarrollo en México.</p>
                                </div>
                                <div class="elemento" id="<?= slugify("Colaboración para el desarrollo del Sistema"); ?>">
                                    <h2 class="align-left margin-yb">Colaboración para el desarrollo del Sistema</h2>
                                    <p>El sistema de monitoreo, seguimiento y evaluación de cumplimiento del PI-PEA es un esfuerzo desarrollado de forma colaborativa, entre la Secretaría Ejecutiva del Sistema Estatal Anticorrupción de San Luis Potosí (SESEA-SLP) y el Programa de las Naciones Unidas para el Desarrollo (PNUD) en México, en el marco de implementación del Proyecto Iniciativas Gerenciales.</p>
                                </div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>
                </div>
            </div>
            <div class="seccion">
                <div class="margen ">
                    <div class="renglon">
                        <div class="logos_slider_widget slider_widget">
                            <div class="slider_widget_items" align="center">
                                <div class=" slider_widget_item">
                                    <div class="tabla">
                                        <div class="td-middle">
                                            <img src="<?= $urlSitio; ?>img/anti/cpc.png?v=1" width="100%" alt="Comité de Participación Ciudadana">
                                        </div>
                                    </div>
                                </div>
                                <div class=" slider_widget_item">
                                    <div class="tabla">
                                        <div class="td-middle">
                                            <img src="<?= $urlSitio; ?>img/anti/ifse.png?v=1" width="100%" alt="Instituto de Fiscalización Superior del Estado">
                                        </div>
                                    </div>
                                </div>
                                <div class=" slider_widget_item">
                                    <div class="tabla">
                                        <div class="td-middle">
                                            <img src="<?= $urlSitio; ?>img/anti/FEDHC.png?v=1" width="100%" alt="Fiscalía Especializada en Delitos relacionados con Hechos de Corrupción">
                                        </div>
                                    </div>
                                </div>
                                <div class=" slider_widget_item">
                                    <div class="tabla">
                                        <div class="td-middle">
                                            <img src="<?= $urlSitio; ?>img/anti/cge.jpg?v=1" width="100%" style="max-width: 680px;" alt="Contraloría General del Estado">
                                        </div>
                                    </div>
                                </div>
                                <div class=" slider_widget_item">
                                    <div class="tabla">
                                        <div class="td-middle">
                                            <img src="<?= $urlSitio; ?>img/anti/pjslp.png?v=1" width="100%" alt="Poder Judicial del Estado">
                                        </div>
                                    </div>
                                </div>
                                <div class=" slider_widget_item">
                                    <div class="tabla">
                                        <div class="td-middle">
                                            <img src="<?= $urlSitio; ?>img/anti/cegaip.png?v=1" width="100%" alt="Comisión Estatal de Garantía y Acceso a la Información Pública">
                                        </div>
                                    </div>
                                </div>
                                <div class=" slider_widget_item">
                                    <div class="tabla">
                                        <div class="td-middle">
                                            <img src="<?= $urlSitio; ?>img/anti/teja.svg?v=1" width="100%" alt=" Tribunal Estatal de Justicia Administrativa">
                                        </div>
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
        $(document).ready(function() {
            index_ready();
        });
        $(window).on('load', function() {
            index_load();
        });
        $(window).on('resize', function() {
            index_resize();
        });
    </script>
    <?php require_once "part/gnl/lightbox.php"; ?>
    <?php require_once "part/gnl/analytics.php"; ?>
</body>

</html>