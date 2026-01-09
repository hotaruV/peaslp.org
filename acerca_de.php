<?php
	require_once "part/gnl/sesion.php";
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['acerca_de'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['acerca_de'][$idioma]);
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
                                    <li><?=$array_lang['acerca_de'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
                <div class="seccion">
                    <div class="margen">
                        <div class="renglon padding-x padding-y align-center">
                            <div class="col align-justify" >
                                <h1 class="mayus align-center"><?=$array_lang['acerca_de'][$idioma];?></h1>  
                           	</div>
						</div>
                        <div class="renglon padding-x padding-y align-center">
                        	<div class="col col340 align-left">
                            	<div class="col_scroll">
                                    <ul>
                                        <li><a href="#presentacion">Presentación</a></li>
                                        <li><a href="#marco">Marco normativo</a></li>
                                        <li><a href="#fundamento">Fundamento jurídico</a></li>
                                        <li><a href="#proceso">Proceso metodológico del PI-PEA</a></li>
                                        <li><a href="#diagnostico">Diagnóstico situacional sobre la corrupción en el estado</a></li>
                                        <li><a href="#diseno">Diseño del Programa de Implementación Política Estatal Anticorrupción</a></li>
                                        <li><a href="#mecanismo">Mecanismos de seguimiento y evaluación</a></li>
                                        <li><a href="#referencias">Referencias bibliográficas</a></li>
                                    </ul>                   
                                </div>                 
                            </div>
                            <div class="col col340G align-justify">
                            	<a name="presentacion"></a>
                            	<div id="div_presentacion">
                                	<h2 class="margin-yb mayus">Presentación</h2>
                                    <p>La corrupción se ha convertido en un obstáculo omnipresente que mina la confianza en nuestras instituciones públicas y afecta a todos los ámbitos de nuestra sociedad. Somos conscientes de que erradicar por completo la corrupción es un desafío monumental, pero estamos comprometidos a abordarlo con determinación y perseverancia desde la Secretaría Estatal Anticorrupción. Para lograrlo, necesitamos la colaboración conjunta de todos los actores involucrados en la Política Estatal Anticorrupción: entidades gubernamentales, la academia, organizaciones no gubernamentales y la sociedad civil.</p>
                                    
                                    <p>Con el fin de trazar el camino en esta lucha contra la corrupción, hemos desarrollado el Programa de Implementación de la Política Estatal Anticorrupción (PI-PEA). Este programa es de vital importancia para construir un estado más transparente, equitativo y justo. Además, sirve como una guía técnica para las instituciones públicas que lo llevarán a cabo y para aquellos que lo evaluarán.</p>
                                    
                                    <p>El PI-PEA es el resultado de una colaboración activa entre el gobierno, la academia, la sociedad civil y otros actores interesados, quienes han trabajado juntos para diseñar e implementar políticas y acciones efectivas contra la corrupción en todas sus manifestaciones. Se basa en una metodología de nueve fases que ha involucrado activamente a la ciudadanía en todo el territorio estatal.</p>
                                    
                                    <p>Este programa se ha desarrollado en consonancia con la Política Nacional Anticorrupción (PNA) y se ajusta a los principios y enfoques de la Agenda 2030, que incluyen la pertinencia en términos políticos, sociales, institucionales y económicos, la eficacia orientada a resultados, la coordinación entre los distintos niveles de gobierno y actores clave, la vinculación con instrumentos programáticos, así como mecanismos de seguimiento y evaluación, y la sostenibilidad en todos sus aspectos.</p>
                                    
                                    <p>El enfoque integral del PI-PEA incluye el respeto y la observancia del Gobierno Abierto, los Derechos Humanos, la Perspectiva de Género, la interculturalidad y la gestión de riesgos de corrupción. Estos elementos atraviesan todo el proceso de la Política Estatal Anticorrupción y se han incorporado en su diseño, manteniéndose presentes durante la implementación y la posterior evaluación.</p>
                                    
                                    <p>Tras identificar las prioridades específicas de nuestro contexto local, hemos alineado cuidadosamente nuestros esfuerzos con la PNA, reconociendo la interdependencia entre nuestro estado y las estructuras regionales y nacionales en términos de gestión pública. El programa se compone de siete ejes, 62 prioridades, 124 estrategias y 248 líneas de acción que serán ejecutadas por 251 Entes Públicos en las cuatro regiones del estado.</p>
                                    
                                    <p>Es importante destacar que nuestro programa cuenta con un riguroso enfoque metodológico y procedimientos detallados para facilitar su ejecución. Sin embargo, también incorpora la flexibilidad necesaria para adaptarse a los desafíos institucionales y organizativos que puedan surgir durante su implementación. Además, estamos comprometidos a mantenerlo como un instrumento dinámico que se ajustará según sea necesario, a medida que monitoreamos y acompañamos su implementación a corto, mediano y largo plazo.</p>
								</div>
                                <a name="marco"></a>
                                <div id="div_marco">
                                	<h2 class="margin-yb mayus align-left">Marco normativo</h2>
                                    <p>Al igual que cualquier marco de acción formal en el ámbito de la gestión pública, las políticas y los procedimientos anticorrupción se fundamentan en normativas que abordan la prevención, la atención y la sanción de los actos de corrupción. En última instancia, es la legislación vigente la que establece las pautas para el comportamiento tanto de los individuos que participan en la administración de recursos públicos como de las entidades en las que operan.</p>
                                    <p>El propósito de esta sección es identificar la estructura legal que respalda la operación y el funcionamiento del Sistema Estatal Anticorrupción de San Luis Potosí (SEA). Es importante destacar que esta estructura legal no es estática; más bien, requiere una revisión continua para mantener su vigencia y eficacia en la lucha contra la corrupción.</p>
                                    <p>En este contexto, se mencionan de manera general las convenciones y los documentos normativos que están actualmente en vigor a nivel internacional, nacional y estatal. Esto no solo tiene como objetivo identificar el marco legal que guía la lucha contra la corrupción, sino también proporcionar una referencia clara a las leyes y las normas que respaldan la actuación de los diversos actores involucrados en la elaboración de este PI-PEA.</p>
                                    
                                    <ul>
                                    	<li>Convenciones internacionales</li>
                                        <li>Legislación federal </li>
                                        <li>Normativa estatal </li>
									</ul>                                        

                                </div>
                                <a name="fundamento"></a>
                                <div id="div_fundamento">
                                	<h2 class="margin-yb mayus align-left">Fundamento jurídico</h2>
                                    <p>Basándonos en la información proporcionada en la sección anterior, esta parte del documento tiene como objetivo identificar con precisión el respaldo legal que guía el funcionamiento del Sistema Estatal Anticorrupción en San Luis Potosí. Esto permitirá definir claramente el alcance de sus acciones y, de esta manera, aumentar su efectividad en la lucha contra la corrupción.</p>
                                    <p>En este contexto, llevamos a cabo una revisión de los instrumentos legales que son directamente aplicables tanto a nivel federal como a nivel estatal. En consonancia con el artículo 113 de la Constitución Política de los Estados Unidos Mexicanos (CPEUM), el SNA se establece como la entidad encargada de coordinar a las autoridades de todos los niveles de gobierno competentes en la prevención, detección y sanción de responsabilidades administrativas y casos de corrupción, así como en la fiscalización y control de los recursos públicos.</p>
                                    <p>Este mismo artículo, el 113 de la CPEUM, también establece que las entidades federativas, como es el caso del estado de San Luis Potosí, deben crear sistemas locales anticorrupción con el propósito de coordinar a las autoridades locales competentes en la prevención, detección y sanción de responsabilidades administrativas y actos de corrupción.</p>
                                    <p>Continuando con la revisión de los fundamentos legales, la Ley General del Sistema Nacional Anticorrupción (LGSNA) es relevante en términos de acciones en el ámbito anticorrupción. Según su artículo 1, esta ley es aplicable en todo el territorio nacional y tiene como objetivo establecer las bases de coordinación entre la federación, las entidades federativas y los municipios para el funcionamiento del SNA, tal como se describe en el artículo 113 de la CPEUM. Su propósito es que las autoridades competentes prevengan, investiguen y sancionen las faltas administrativas y los hechos de corrupción.</p>

                                </div>
                                <a name="proceso"></a>
                                <div id="div_proceso">
                                	<h2 class="margin-yb mayus align-left">Proceso metodológico del PI-PEA</h2>
                                    <p>El proceso de elaboración del PI-PEA consiste en una secuencia metodológica donde el compromiso con el combate de la corrupción, se convierte en un programa concreto y efectivo. Es una manifestación tangible del compromiso del estado de San Luis Potosí. </p>
                                    <p>Este proceso representa el punto de encuentro de ideas, experiencias y expectativas que forjan el consenso sobre las prioridades, estrategias y acciones concretas para garantizar que el PI-PEA sea inclusivo y representativo de las necesidades y aspiraciones de la sociedad.</p>
                                    <p>El PI-PEA es el resultado de nueve fases metodológicas que plantean la hoja de ruta para alcanzar niveles más altos de integridad y transparencia en la administración pública del estado.</p>
                                    <ul>
                                    	<li>Planeación</li>
                                        <li>Diagnóstico situacional sobre la corrupción en el estado</li>
                                        <li>Mesas de trabajo</li>
                                        <li>Levantamiento de cuestionario</li>
                                        <li>Integración borrador final</li>
                                        <li>Validación, formalización y publicación del PI-PEA</li>
                                        <li>Capacitación a actores responsables de implementar el PI-PEA</li>
                                        <li>Ejecución del PI-PEA</li>
                                        <li>Monitoreo y Evaluación Anual</li>
                                    </ul>
                                </div>
                                <a name="diagnostico"></a>
                                <div id="div_diagnostico">
                                	<h2 class="margin-yb mayus align-left">Diagnóstico situacional sobre la corrupción en el estado</h2>	
                                    <p>La corrupción se ha arraigado en los procesos de gestión pública, distorsionando los procedimientos formales y permitiendo que se manipulen los resultados a favor de intereses personales. Esta distorsión ha sido facilitada por un cambio en los incentivos que fomenta el uso de la administración pública para obtener ganancias personales.</p>
                                    <p>A pesar de que la corrupción involucra recursos públicos, no siempre es percibida como una prioridad por la ciudadanía. Sin embargo, las percepciones sobre la corrupción han evolucionado, y ahora se reconoce cada vez más su relevancia en la sociedad. Se busca entender cómo la población percibe este problema y cómo contribuye a su existencia.</p>
                                    <p>México enfrenta la corrupción en diversos niveles y por parte de varios actores, incluyendo organizaciones públicas, sociales, empresariales y académicas. La corrupción es un problema evidente tanto a nivel nacional como local, y para abordarlo de manera efectiva, es esencial contar con un diagnóstico sólido.</p>
                                    <p>Sin embargo, recopilar indicadores estadísticos para evaluar la corrupción en instituciones públicas en México es un desafío debido a la falta de sistemas de información consolidados. La opacidad en los actos corruptos dificulta la obtención de pruebas sólidas sobre la magnitud y las características del problema.</p>
                                    <p>En este contexto, se ha llevado a cabo un diagnóstico en San Luis Potosí  con el objetivo de caracterizar la corrupción en la región y diseñar una Política Estatal Anticorrupción que sea coherente con el entorno local y su relación con otras entidades federativas y el sistema nacional. Este diagnóstico se basa en enfoques conceptuales y criterios que consideran la percepción social, procedimientos de auditoría y sanciones a servidores públicos.</p>
                                    <ul>
                                    	<li>Contexto internacional y nacional de la corrupción</li>
                                        <li>Encuesta Estatal de Percepción de la Corrupción 2021</li>
                                        <li>Situación de la corrupción en el estado</li>
                                    </ul>

                                </div>
                                <a name="diseno"></a>
                                <div id="div_diseno">
                                	<h2 class="margin-yb mayus align-left">Diseño del Programa de Implementación Política Estatal Anticorrupción</h2>
                                    <p>El diagnóstico situacional de la corrupción en el estado de San Luis Potosí se erige como la antesala de construcción de la PEA. Lo recomendable, con base en la información recabada en este diagnóstico, es emprender un camino de búsqueda de soluciones integrales para este problema público; lo cual nos remite al paradigma de la complejidad, utilizado como modelo de análisis y de comprensión de la corrupción en el presente documento.</p>
                                    <p>El esfuerzo contra la corrupción se ha basado en varios enfoques que, aunque diferentes, se complementan entre sí, de acuerdo con Lajous (2019). A pesar de que las leyes y regulaciones creadas en diferentes estados responden lógicamente a objetivos similares, en términos de cumplir con las normativas federales, cada una de ellas se implementa y desarrolla de manera particular. San Luis Potosí sigue esta tendencia, donde las opiniones tanto de la ciudadanía como de los expertos desempeñan un papel importante en la concepción y la interpretación de la Política Estatal Anticorrupción (PEA).</p>
                                    <p>La estructura estratégica del Programa de Implementación (PI) establece los aspectos fundamentales de este programa. En su creación, se aplicaron cuatro criterios fundamentales para garantizar que este instrumento, que tiene un impacto significativo, esté diseñado de manera apropiada.</p>
                                    <ul>
                                    	<li>Pertinencia</li>
                                        <li>Eficiencia</li>
                                        <li>Sostebibildad</li>
                                        <li>Impacto</li>
                                  	</ul>                                        
                                    
                                    <p>Las prioridades definidas recuperan las 40 definidas en la Política Nacional Anticorrupción, así como las específicas que se reconocen para el caso local. De esta manera, siendo una propuesta de Política Estatal Anticorrupción alineada con las propuestas y consideraciones planteadas por el Sistema Nacional Anticorrupción, ha requerido fundamentarse en ejes y prioridades que reflejen una visión sistémica y holística del fenómeno de la corrupción. Considerando que se trata de una perspectiva apegada a una lógica de integración de siete unidades de análisis de la corrupción: 1) necesidades ciudadanas; 2) normas sociales; 3) intereses y abuso de poder; 4) conocimiento y racionalidad; 5) capacidades institucionales; 6) rendición de cuentas, e 7) impunidad.</p>
                                    <ul>
                                    	<li>Temas transversales del PI-PEA</li>
                                        <li>Estructura metodológica del PI-PEA</li>
                                        <li>Composición del PI-PEA</li>
                                        <li>Ejes y prioridades</li>
                                        <li>Matrices del proyecto PI-PEA</li>
                                   	</ul>
                                </div>
                                <a name="mecanismo"></a>
                                <div id="div_mecanismos" class="a_break">
                                	<h2 class="margin-yb mayus align-left">Mecanismos de seguimiento y evaluación</h2>
                                    <p>La implementación de la PEA es un compromiso que requiere no solo planificación y acción, sino también una supervisión constante y una evaluación rigurosa. Por ello, los mecanismos de seguimiento y evaluación del Programa de Implementación de la Política Estatal Anticorrupción (PI-PEA) son herramientas esenciales que garantizan que nuestros esfuerzos anticorrupción sean efectivos y orientados a resultados. Se tendrán en consideración el Enfoque basado en Derechos Humanos y Perspectiva de Género, permitiendo.</p>
                                    <p>Esta iniciativa de monitoreo y evaluación desempeñará un papel fundamental al permitir una evaluación exhaustiva de varios aspectos clave del Sistema. A través de este proceso, se podrá determinar si el Sistema es pertinente en el contexto actual, es decir, si realmente aborda las necesidades y desafíos específicos que enfrenta.</p>
                                    <p>La evaluación también abarcará la eficiencia, lo que significa analizar cómo se están utilizando los recursos disponibles, como el presupuesto y el personal, para garantizar que se utilicen de manera óptima en la operación del Sistema. La sostenibilidad será otro aspecto clave de esta evaluación, donde se evaluará la capacidad del Sistema para mantenerse en funcionamiento a largo plazo y seguir cumpliendo su misión en el futuro.</p>
                                    <p>Finalmente, se examinará el impacto del Sistema en la sociedad y en la reducción de la corrupción en todos sus niveles. Esto incluirá la medición de cómo las acciones y políticas implementadas realmente han afectado la percepción y la realidad de la corrupción en el entorno.</p>
                                    <p>Los mecanismos de seguimiento y evaluación son nuestros aliados más confiables a medida que avanzamos en la implementación de la PEA. Nos ayudan a medir el impacto real de nuestras acciones, a identificar áreas de mejora y a corregir el rumbo si es necesario.</p>
                                </div>
                                <a name="referencias"></a>
                                <div id="div_referencias">
                                	<h2 class="margin-yb mayus align-left">Referencias bibliográficas</h2>
                                	<p>Banco Mundial (2020). Indicador de control de la corrupción. Disponible en: <a target="_blank" href="https://datos.bancomundial.org/indicador/CC.EST?locations=MX">https://datos.bancomundial.org/indicador/CC.EST?locations=MX</a></p>
                                    <p>Brioschi, C.A. (2019). Breve historia de la corrupción: De la antigüedad a nuestros días. España: Tauros, Primera reimpresión.</p>
                                    <p>Buscaglia, E. (2016). Lavado de dinero y corrupción política: El arte de la delincuencia organizada internacional. México: Penguin Random House Grupo Editorial, Segunda reimpresión.</p>
                                    <p>CEPAL (2002).  Vulnerabilidad sociodemográfica: Viejos y nuevos riesgos para comunidades, hogares y personas. Disponible en: <a target="_blank" href="https://repositorio.cepal.org/server/api/core/bitstreams/dd0b5bb5-eb54-4b69-9227-985d0afc6adb/content">https://repositorio.cepal.org/server/api/core/bitstreams/dd0b5bb5-eb54-4b69-9227-985d0afc6adb/content</a></p>
                                    <p>INEGI (2021). Encuesta Nacional de Calidad e Impacto Gubernamental</p>
                                    <p>Encuesta Nacional de Victimización y Percepción sobre Seguridad Pública (2023)</p>
                                    <p>Censo Nacional de Gobiernos Municipales y Demarcaciones Territoriales de la Ciudad de México (2011-2020)</p>
                                    <p>Lajous, A. (2019). La sociedad civil vs. la corrupción. Penguin Random House Grupo Editorial: México.</p>
                                    <p>Latinobarómetro (s.f.) Análisis online. Disponible en <a target="_blank" href="https://www.latinobarometro.org/latOnline.jsp">https://www.latinobarometro.org/latOnline.jsp</a></p>
                                    <p>Pérez, María. (2005). Aproximación a un estudio sobre vulnerabilidad y violencia familiar. Bol. Mex. Der. Comp. [online]. vol.38, n.113 [citado  2023-09-27], pp.845-867. Disponible en: <a target="_blank" href="https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0041-86332005000200009">https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0041-86332005000200009</a> </p>
                                    <p>Secretaría Ejecutiva del SNA (2020). Guía para la elaboración de un Programa de Implementación de las Políticas Estatales Anticorrupción. Disponible en: <a target="_blank" href="https://www.sesna.gob.mx/wp-content/uploads/2020/02/Guía-diseño-PEA.pdf">https://www.sesna.gob.mx/wp-content/uploads/2020/02/Guía-diseño-PEA.pdf</a></p>
                                    <p>Transparency international (2023). Cálculo del Índice de Percepción de la Corrupción. Disponible en: <a target="_blank" href="https://www.transparency.org/es/press">https://www.transparency.org/es/press</a></p>
                                    <p>Villoria Mendieta, M. (2019). Combatir la corrupción. España: Gedisa editorial, Primera edición.</p>
                                    <p>World Justice Project (2021). Comunicado de prensa: México está en el lugar 113 de 139 países en Estado de Derecho, con la caída de una posición. Washington, D.C., 14 de octubre de 2021. Disponible en: <a target="_blank" href="https://worldjusticeproject.org/sites/default/files/documents/Mexico_2021%20WJP%20Rule%20of%20Law%20Index%20-%20Country%20PR_FINAL_SPA.pdf">https://worldjusticeproject.org/sites/default/files/documents/Mexico_2021%20WJP%20Rule%20of%20Law%20Index%20-%20Country%20PR_FINAL_SPA.pdf</a></p>
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