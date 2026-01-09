var scripts_w = 0;
var scripts_task_in_progress = false;
scripts_width();

$(document).ready(function() {
	scripts_init();
});

$(window).on('load', function(){
	
	scripts_load();
});

$(window).on('resize', function(){
	scripts_width();
	scripts_resize();
});

function scripts_init(){
	sesion_init();
	sesion_verificar(function(){
		console.log('fnTrue');
		if(sesion_verificar_ini != null  && typeof sesion_verificar_ini === 'function') { 
			sesion_verificar_ini();
		}		
	}, function(){
		console.log('fnFalse');
		if(sesion_verificar_no != null  && typeof sesion_verificar_no === 'function') { 
			sesion_verificar_no();
		}
	});	
	
	$('.btn_cerrar_sesion').each(function(index, element) {
    	$(this).unbind('click').bind('click',  function() {
			sesion_cerrar_aviso();
			return false;
		});    
    });
	
	$(".hamburger").click(function() {
		if($(".hamburger ").hasClass("is-active")){
			$(".hamburger").removeClass("is-active");
			$(".contenido .header .menu.principal").hide();
		} else {
			$(".hamburger").addClass("is-active");
			$(".contenido .header .menu.principal").show();
		}
		return false;
	});
}

function scripts_load(){
	scripts_resize();
}

function scripts_width(){
	scripts_w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function scripts_resize(){
	console.log('scripts_resize')
	
	fn_renglon_iguales('.renglon.iguales .renglon.iguales .renglon.iguales', '.col');
	fn_renglon_iguales('.renglon.iguales .renglon.iguales', '.col');
	fn_renglon_iguales('.renglon.iguales', '.col');
	
	if(scripts_w > 980){
		$(".contenido .header .menu.principal").show();
		$(".hamburgesa").hide();
		$(".hamburger ").removeClass("is-active");
	} else {
		$(".contenido .header .menu.principal").hide();
		$(".hamburgesa").show();
		$(".hamburger ").removeClass("is-active");
	}
}

function fn_renglon_iguales(ele, tag){
	$(ele).each(function(index, element) {
		var w = 0;
		var attr = $(this).attr("data-w");
		if (typeof attr !== 'undefined' && attr !== false) {
			w = parseInt($(this).attr("data-w"), 10);
		}
		var altura = 0;
		$(this).find(' > ' + tag).css('height', 'auto');
		if(scripts_w > w){
			$(this).find(' > ' + tag).each(function(index, element) { if($(this).height() > altura){ altura = $(this).height(); } });
			$(this).find(' > ' + tag).height(altura);
		}
	});
}

function fn_misma_altura(ele, tag){
	$(ele).each(function(index, element) {
		var w = 0;
		var attr = $(this).attr("data-w");
		if (typeof attr !== 'undefined' && attr !== false) {
			w = parseInt($(this).attr("data-w"), 10);
		}
		
		var altura = 0;
		$(this).find(tag).css('height', 'auto');
		if(scripts_w > w){
			$(this).find(tag).each(function(index, element) { if($(this).height() > altura){ altura = $(this).height(); } });
			$(this).find(tag).height(altura);
		}
	});
}

function event_google_analytics(pagina, boton, descripcion){ 
	console.log(pagina, boton, descripcion);
	if (typeof gtag !== 'undefined' && gtag !== null){ gtag('event', pagina, { 'event_category': boton, 'event_label': descripcion }); } 
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + btoa(cvalue) + ";" + expires + ";path=/; SameSite=None; Secure";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
			return atob(c.substring(name.length, c.length));
        }
    }
    return "";
}

window.onbeforeunload = scripts_confirm_exit;
function scripts_confirm_exit() {
	if(scripts_task_in_progress) {
		return "Some task is in progress. Are you sure, you want to close?";
	}
}