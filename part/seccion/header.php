<?php if (!defined('APPLICATION')) exit; ?>
<div class="header">
	<div class="margen margen_gde">
        <div class="logo">                        	
            <h1>
            	<div class="tabla"><div class="td-middle">
	                <a href="<?=$urlSitio.$url_lang;?>">
                    	<!--Programa de implementación de la <br />
                        Política Estatal Anticorrupción de <br />
                        San Luis Potosí-->
                        <strong>Sistema de monitoreo, <br />  seguimiento y evaluación <br /> de cumplimiento del PI-PEA</strong>
                    </a>
                </div></div>
            </h1>
        </div>
        <div class="area vh100">
            
            <div class="logos vh100">
                <div class="tabla"><div class="td-middle">
                    <ul> 
                        <li>
                            <img src="<?=$urlSitio;?>img/sitio/SEA.png" style="">
                        </li> 
                        <li>
                            <img src="<?=$urlSitio;?>img/sitio/pnud-logo-blue.svg" style="">
                        </li>
                    </ul>
                </div></div>
            </div>
		</div>                   
        <div class="hamburgesa">     
            <div class="tabla"><div class="td-middle">           
                <div class="hamburger hamburger hamburger--spin js-hamburger">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </div>
            </div></div>
        </div>	
	</div>        
    <div class="menu principal align-center">
        <div class="tabla"><div class="td-middle">
            <ul class="centro separa">
                <li><a href="<?=$urlSitio.$url_lang;?>" 
                    class="<?=("" == $menu)?'activo':'';?>">
                    Inicio
                </a></li> 
                <li><a href="<?=$urlSitio.$url_lang;?>#antecedentes" 
                    class="">
               		Antecedentes
                </a></li> 
                <li>
                
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
                
                </li> 
                <li><a href="<?=$urlSitio;?>files/PIPEA_2024.pdf" target="_blank" 
                    class="">
               		Descarga del PIPEA
                </a></li> 
                <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['contacto'][$idioma]);?>"
                    class="<?=(slugify($array_lang['contacto'][$idioma]) == $menu)?'activo':'';?>">
                    <?=$array_lang['contacto'][$idioma];?>
                </a></li>
                
                
                <?php if(!$usuario_logeado){ ?>
                    <!--<li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['registro'][$idioma]);?>"
                        class="<?=(slugify($array_lang['registro'][$idioma]) == $menu)?'activo':'';?>">
                        <?=$array_lang['registro'][$idioma];?>
                    </a></li>-->
                    <!--<li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['iniciar_sesion'][$idioma]);?>"
                        class="<?=(slugify($array_lang['iniciar_sesion'][$idioma]) == $menu)?'activo':'';?>">
                        <?=$array_lang['iniciar_sesion'][$idioma];?>
                    </a></li>-->
                <?php } else { ?>
                    <li><a href="<?=$urlSitio.$url_lang.slugify($array_lang['dashboard'][$idioma]);?>" id="a_panel"
                        class="<?=(slugify($array_lang['dashboard'][$idioma]) == $menu)?'activo':'';?>">
                        <?=$array_lang['dashboard'][$idioma];?>
                    </a></li>
                    <li><a href="#" class="btn_cerrar_sesion">
                        Salir
                    </a></li>
                <?php } ?>
                
                <li class="menu_logos">
                    <img src="<?=$urlSitio;?>img/sitio/SEA.png" style="">
                    <img src="<?=$urlSitio;?>img/sitio/pnud-logo-blue.svg" style="">
                </li>                 
            </ul> 
        </div></div>                   
    </div>
</div>