<?php
	$acceso_restringido = true;
	require_once "part/gnl/sesion.php";
	
	$temp_usuario = $usuarioClass->getUsuario($idusuario);
	$temp = json_decode($temp_usuario['usuario_data'], true);
	
	
	
	
	if(
		is_array($usuario_data_arr) and
		!empty($usuario_data_arr) and 
		isset($usuario_data_arr["contrasena_un_uso"]) and 
		is_array($usuario_data_arr['contrasena_un_uso']["v"]) and 
		!empty($usuario_data_arr['contrasena_un_uso']["v"]) and
		$usuario_data_arr['contrasena_un_uso']["v"][0] == 1
	){
		
		header('Location: '.$urlSitio.$url_lang.slugify($array_lang['cambiar_contrasena'][$idioma]));
    	exit;
	}

	
	
	require_once "part/gnl/headers.php";
	$title			= $array_lang['dashboard'][$idioma].' | '.$title_site;
	$description	= "";
	$url			= $url_lang.slugify($array_lang['dashboard'][$idioma]);
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
                                    <li><?=$array_lang['dashboard'][$idioma];?></li>
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
                                <h1 class="mayus align-center"><?=$array_lang['dashboard'][$idioma];?></h1>  
                           	</div>
						</div>
                        <div class="renglon iguales padding-x padding-y align-center" data-w="600">
                        	<div class="col col340 align-left linea">
                            	<div class="col_scroll">
                                	<?php require_once "part/sitio/menu_lateral.php"; ?>                       
                                </div>                 
                            </div>
                            <div class="col col340G align-justify">
								<p>
									<b>Bienvenido</b>, en este panel podrás ver las acciones que deberás realizar para <b>dar cumplimiento al PIPEA</b>. Según tu perfil tienes asignadas funciones de: 
								</p>
								<ul>
									<?php if(in_array($usuario_perfil, array(4))){ ?>
										<li>Captura</li>
									<?php } ?>
									<?php if(in_array($usuario_perfil, array(1))){ ?>
										<li>Revisión</li>
										<li>Supervisión</li>
									<?php } ?>
								</ul>
								<p>
									A partir de la información generada en este sistema podremos dar seguimiento a los avances del PIPEA.
								</p>
								<p>
									Para más información, te invitamos a revisar el <b>
                                    	
                                        <?php if(in_array($usuario_perfil, array(1))){ ?>
                                            <a href="<?=$urlSitio;?>files/Manual de usuario - Administrador de SESEA.pdf" target="_blank" class="">
                                                Manual de usuario
                                            </a>
                                        <?php } else if(in_array($usuario_perfil, array(5))){ ?>
                                            <a href="<?=$urlSitio;?>files/Manual de usuario - Institución coordinadora.pdf" target="_blank" class="">
                                                Manual de usuario
                                            </a>
                                        <?php } else if(in_array($usuario_perfil, array(4))){ ?>
                                            <a href="<?=$urlSitio;?>files/Manual de usuario - Administrador de ENTE Público.pdf" target="_blank" class="">
                                                Manual de usuario
                                            </a>
                                        <?php } else { ?> 
                                            <a href="<?=$urlSitio;?>files/Manual_de_usuario.pdf" target="_blank" class="">
                                                Manual de usuario
                                            </a>
                                        <?php } ?>
                                    </b> y <b><a href="<?=$urlSitio;?>files/PIPEA_2024.pdf" target="_blank">Descargar el PIPEA</a></b> 
								</p>
                                
                                <div class="margen margen_chi">
                                    <div class="formulario align-left" data-action="<?=$urlSitio.$url_lang.slugify($array_lang['dashboard'][$idioma]);?>" id="form_dashboard">
                                        <div class="renglon padding-x0 padding-y0">
                                            <div class="col">
                                                <div class="item" data-obligatorio="false">
                                                    <div class="p"><span style="color:red;">Importante:</span><br> Para continuar usando este sistema favor de ingresar tu CORREO ELECTRÓNICO, el cual te permitirá recibir notificaciones de los periodos de captura y revisión, así como el estatus de cada una de ellas:</div>
                                                    <div class="r">
                                                        <input type="text" id="input_correo_electronico" maxlength="250" value="<?=(isset($temp["correo_electronico"])?$temp["correo_electronico"]:"");?>"/>
                                                    </div>
                                                </div>
                                            </div>	
                                            <div class="col">
                                                <div class="item">
                                                    <p><a href="#" id="btn_guardar" class="boton"> Guardar</a></p>
                                                </div>
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
			$(document).ready(function(){
				dashboard_ready();
			});
			$(window).on('load', function(){
				dashboard_load();
			});
			$(window).on('resize', function(){
				dashboard_resize();
			});
		</script>
        <?php require_once "part/gnl/lightbox.php"; ?>
        <?php require_once "part/gnl/analytics.php"; ?>
	</body>
</html>