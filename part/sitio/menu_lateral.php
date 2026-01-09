<?php if (!defined('APPLICATION')) exit; ?>

<?php
	$ver_menu = true; 
	if(
		is_array($usuario_data_arr) and
		!empty($usuario_data_arr) and 
		isset($usuario_data_arr["contrasena_un_uso"]) and 
		is_array($usuario_data_arr['contrasena_un_uso']["v"]) and 
		!empty($usuario_data_arr['contrasena_un_uso']["v"]) and
		$usuario_data_arr['contrasena_un_uso']["v"][0] == 1
	){
		$ver_menu = false; 	
	}
?>

<?php 
if(
	is_array($usuario_data_arr) and
	!empty($usuario_data_arr) and 
	isset($usuario_data_arr["correo_electronico"]) and 
	$usuario_data_arr["correo_electronico"] != ""
){
	
} else {
	$ver_menu = false; 		
}

if($ver_menu){
?>
	<?php if($usuario_logeado){ ?>
    
        <?php if(in_array($usuario_perfil, array(1))){ ?>
            <p class="big">Estructura del PIPEA</p>
            <ul>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['ejes'][$idioma]);?>"
                    class="<?=(slugify($array_lang['ejes'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['ejes'][$idioma];?>
                </a></li>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['plazos'][$idioma]);?>"
                    class="<?=(slugify($array_lang['plazos'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['plazos'][$idioma];?>
                </a></li>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['prioridades'][$idioma]);?>"
                    class="<?=(slugify($array_lang['prioridades'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['prioridades'][$idioma];?>
                </a></li>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['estrategias'][$idioma]);?>"
                    class="<?=(slugify($array_lang['estrategias'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['estrategias'][$idioma];?>
                </a></li>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['lineas_accion'][$idioma]);?>"
                    class="<?=(slugify($array_lang['lineas_accion'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['lineas_accion'][$idioma];?>
                </a></li>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['indicadores'][$idioma]);?>"
                    class="<?=(slugify($array_lang['indicadores'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['indicadores'][$idioma];?>
                </a></li>
                
                
                
            </ul>       
        <?php } ?> 
        <?php if(in_array($usuario_perfil, array(1))){ ?>
            <p class="big">Instituciones / Actores / Usuarios</p>
            <ul>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['instituciones'][$idioma]);?>"
                    class="<?=(slugify($array_lang['instituciones'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['instituciones'][$idioma];?>
                </a></li>
                <li>
                    <a href="<?=$urlSitio.$url_lang.slugify($array_lang['actores'][$idioma]);?>"
                        class="<?=(slugify($array_lang['actores'][$idioma]) == $menu)?'activo':'';?>">
                        <?=$array_lang['actores'][$idioma];?>
                    </a>
                    
                    <ul>
                        <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['actores_catalogos'][$idioma]);?>"
                            class="<?=(slugify($array_lang['actores_catalogos'][$idioma]) == $menu)?'activo':'';?>">
                            <?=$array_lang['actores_catalogos'][$idioma];?>
                        </a></li>
                        <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['actores_elementos'][$idioma]);?>"
                            class="<?=(slugify($array_lang['actores_elementos'][$idioma]) == $menu)?'activo':'';?>">
                            <?=$array_lang['actores_elementos'][$idioma];?>
                        </a></li>
                    </ul>
                    
                </li>
                
                
                
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['usuarios'][$idioma]);?>"
                    class="<?=(slugify($array_lang['usuarios'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['usuarios'][$idioma];?>
                </a></li>  
            </ul>
        <?php } ?> 
        
        <?php if(in_array($usuario_perfil, array(1, 5))){ ?>
            <p class="big">Monitoreo / Seguimiento</p>
            <ul class="margin-yt">
                <?php if(in_array($usuario_perfil, array(1))){ ?>
                    <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['periodos'][$idioma]);?>"
                        class="<?=(slugify($array_lang['periodos'][$idioma]) == $menu)?'activo':'';?>">
                        <?=$array_lang['periodos'][$idioma];?>
                    </a></li>
                <?php } ?> 
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['revision_lineas'][$idioma]);?>"
                    class="<?=(slugify($array_lang['revision_lineas'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['revision_lineas'][$idioma];?>
                </a></li>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['revision'][$idioma]);?>"
                    class="<?=(slugify($array_lang['revision'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['revision'][$idioma];?>
                </a></li>      
            </ul>
        <?php } ?> 
        <?php if(in_array($usuario_perfil, array(1))){ ?>
            <p class="big">Reportes</p>
            <ul class="margin-yt">
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['reportes'][$idioma]);?>"
                    class="<?=(slugify($array_lang['reportes'][$idioma]) == $menu)?'activo':'';?>">
                    Líneas de acción
                </a></li>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['reportes_indicadores'][$idioma]);?>"
                    class="<?=(slugify($array_lang['reportes_indicadores'][$idioma]) == $menu)?'activo':'';?>">
                    Indicadores
                </a></li>
            </ul>            
        <?php } ?> 
        <?php if(in_array($usuario_perfil, array(4))){ ?>
            <p class="big">ENTE Público</p>
            <ul class="margin-yt">
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['captura_lineas'][$idioma]);?>"
                    class="<?=(slugify($array_lang['captura_lineas'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['captura_lineas'][$idioma];?>
                </a></li>
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['captura'][$idioma]);?>"
                    class="<?=(slugify($array_lang['captura'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['captura'][$idioma];?>
                </a></li>
            </ul>
        <?php } ?>
        <p class="big">Descargas</p>
        <ul class="margin-yt">
	        <?php if(in_array($usuario_perfil, array(1))){ ?>
            	<li><a href="<?=$urlSitio;?>files/Manual de usuario - Administrador de SESEA.pdf" target="_blank" class="">
                    Manual de usuario
                </a></li>
            <?php } else if(in_array($usuario_perfil, array(5))){ ?>
            	<li><a href="<?=$urlSitio;?>files/Manual de usuario - Institución coordinadora.pdf" target="_blank" class="">
                    Manual de usuario
                </a></li>
        	<?php } else if(in_array($usuario_perfil, array(4))){ ?>
            	<li><a href="<?=$urlSitio;?>files/Manual de usuario - Administrador de ENTE Público.pdf" target="_blank" class="">
                    Manual de usuario
                </a></li>
            <?php } else { ?> 
            	<li><a href="<?=$urlSitio;?>files/Manual_de_usuario.pdf" target="_blank" class="">
                    Manual de usuario
                </a></li>
            <?php } ?> 
        
            
            <li><a href="<?=$urlSitio;?>files/PIPEA_2024.pdf" target="_blank" class="">
                Descarga del PIPEA
            </a></li>
        </ul>
        
        <p class="big">Mi cuenta</p>
        <ul class="margin-yt">
            <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['cambiar_contrasena'][$idioma]);?>"
            	class="<?=(slugify($array_lang['cambiar_contrasena'][$idioma]) == $menu)?'activo':'';?>">
                Cambiar contraseña
            </a></li>
            <li><a href="#" class="btn_cerrar_sesion">
                Cerrar sesión
            </a></li>
        </ul>
        
    <?php } ?>
<?php } ?>