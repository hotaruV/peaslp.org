<?php if (!defined('APPLICATION')) exit; ?>
<div class="footer">
    <div class="margen margen_med">                
        <div class="renglon iguales padding-x padding-y" data-w="640">
        	<div class="col col2 align-left">
            	© <?=date("Y");?>. Derechos reservados. <br />
                Secretaría Ejecutiva del Sistema Estatal Anticorrupción.
        	</div>
            <div class="col col2 align-right">
            	<a href="<?=$urlSitio;?><?=$url_lang;?><?=slugify($array_lang['propiedad'][$idioma]);?>">Propiedad intelectual</a> | 
                <a href="<?=$urlSitio;?><?=$url_lang;?><?=slugify($array_lang['aviso_privacidad'][$idioma]);?>">Privacidad</a>
        	</div>
		</div>
    </div>
</div>