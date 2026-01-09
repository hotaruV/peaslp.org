<?php
	require_once "part/gnl/sesion.php";
	//if ($usuario_logeado) {
		header('Location: '.$urlSitio.$url_lang."?l=1"); exit;
	//}
	
	$data_action = $urlSitio.$url_lang.slugify($array_lang['dashboard'][$idioma]);
	if(isset($_GET['dir']) and intval($_GET['dir']) == 1){
		if (
			isset($_COOKIE['direccion']) and 
			isset($_COOKIE['direccion']) != ""
		) {
			$data_action = $url_lang.slugify($array_lang['dashboard'][$idioma])."/".strip_tags($_COOKIE['direccion']);
		}	
	}
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['registro'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['registro'][$idioma]);
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
                                    <li><?=$array_lang['registro'][$idioma];?></li>
                                </ul>
                                <div class="renglon"></div>
                            </div>
                        </div>
                        <div class="renglon"></div>
                    </div>                        
				</div>
                <div class="seccion">
                    <div class="margen margen_tab2">
                        <div class="formulario align-left" data-action="<?=$data_action;?>" id="form_registro">
                        	<div class="renglon padding-x padding-y align-center">
                                <div class="col">
                                    <h1 class="mayus"><?=$array_lang['registro'][$idioma];?></h1>  
                                </div>
                            </div>
                            <div class="renglon padding-x2">
                                <div class="col col2">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Nombre:</div>
                                        <div class="r">
                                            <input type="text" id="input_registro_nombre" maxlength="250"/>
                                        </div>
                                    </div>
                                </div>	
                                <div class="col col2">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Apellidos:</div>
                                        <div class="r">
                                            <input type="text" id="input_registro_apellidos" maxlength="250"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="renglon">
                            	<div class="col">
                                	<div class="item" data-obligatorio="true">
                                        <div class="p"> Actor responsable:</div>
                                        <div class="r">
                                        	<select id="input_registro_actor">
                                                <option value="">Seleccione</option>
                                                <option value="A.S.E" >A.S.E</option>
                                                <option value="C.J.P.J.E" >C.J.P.J.E</option>
                                                <option value="C.P.C" >C.P.C</option>
                                                <option value="C.G.E" >C.G.E</option>
                                                <option value="F.E.D.R.H.C." >F.E.D.R.H.C.</option>
                                                <option value="F.G.E" >F.G.E</option>
                                                <option value="S.E.S.E.A" >S.E.S.E.A</option>
                                                <option value="T.E.J.A." >T.E.J.A.</option>
                                                <option value="O.I.C." >O.I.C.</option>
                                                <option value="C.I.E.P.S.L.P" >C.I.E.P.S.L.P</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="renglon padding-x2">
                                <div class="col col2">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Correo electrónico (este es el usuario):</div>
                                        <div class="r">
                                            <input type="text" id="input_registro_correo" maxlength="250"/>
                                        </div>
                                    </div>
                                </div>	
                                <div class="col col2">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Confirmar correo electrónico:</div>
                                        <div class="r">
                                            <input type="text" id="input_registro_correo_confirmar" maxlength="250"  autocomplete="off" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="renglon padding-x2">
                            	<div class="col col2">
                                	<div class="item" data-obligatorio="true">
                                        <div class="p"> Contraseña:</div>
                                        <div class="r">
                                            <input type="password" id="input_registro_contrasena" maxlength="250"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col2">
                                    <div class="item" data-obligatorio="true">
                                        <div class="p"> Confirmar contraseña:</div>
                                        <div class="r">
                                            <input type="password" id="input_registro_contrasena_confirmar" maxlength="250"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="renglon igual">
                            	<div class="col col2 align-left">
                                	<div class="tabla"><div class="td-middle">
                                        <div class="item">
                                            <p><a href="#" id="btn_registro" class="boton"> Registrarse</a></p>
                                        </div>
                                    </div></div>
                                </div>
                                <div class="col col2 align-right">
                                	<div class="tabla"><div class="td-middle">
                                        <div class="item">
                                            <p><small><a href="<?=$urlSitio;?><?=$url_lang;?><?=slugify($array_lang['iniciar_sesion'][$idioma]);?>" id="input_regresar">Regresar</a></small></p>
                                        </div>
									</div></div>
                                </div> 
                            </div>
                            
                            <div class="renglon">
                            	<div class="col">
                                	<p>Al registrarse acepta los <a href="<?=$urlSitio;?><?=$url_lang;?><?=slugify($array_lang['aviso'][$idioma]);?>">Términos de uso y la Aviso de privacidad</a> de <?=$title_site;?>.</p>
                                    
                                    <p>¿Tienes problemas para iniciar sesión? <a href="<?=$urlSitio;?><?=$url_lang;?><?=slugify($array_lang['contacto'][$idioma]);?>">Contáctanos</a>.</p>
                                </div>
                            </div>
                            <div class="renglon"></div>
                        </div>
					</div>
				</div>                                                                                                                            
            </div>
	        <?php require_once "part/seccion/footer.php"; ?>
        </div>
        <?php require_once "part/seccion/machotes.php"; ?>
	    <script>
			$(document).ready(function(){
				registro_ready();
			});
			$(window).on('load', function(){
				registro_load();
			});
			$(window).on('resize', function(){
				registro_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>