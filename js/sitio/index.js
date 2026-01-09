function index_ready(){
	sesion_verificar_ini = function(){	
		
	}
	
	sesion_verificar_no = function(){
		
	}
	
	$(".elementos .elemento").each(function(index, element) {
		$(this).hide();
	});
	$(".sobre a").each(function(index, element) {
		$(this).bind('click', function(){			
			$(".elementos .elemento").each(function(index, element) {
				$(this).hide();
			});
			$(".sobre a").each(function(index, element) {
				$(this).removeClass("activo");
			});
			
			$(this).addClass("activo");
			var clase = $(this).attr('href');			
			$(".elementos " + clase).show('fast', function(){
				index_resize();
				if(scripts_w <= 840){
					$("html, body").animate({  
						scrollTop: $(".elementos " + clase).offset().top
					}, "fast");
				}
			});
			return false;
		});
    });
	$(".sobre a").eq(0).addClass("activo");
	$(".elementos .elemento").eq(0).show();
	scripts_resize();
	
	fn_misma_altura('.slider_widget_items', '.slider_widget_item');
	
}
function index_load(){
	slider_widget('logos', {});
	index_resize();
}
function index_resize(){
	fn_misma_altura('.slider_widget_items', '.slider_widget_item');
	slider_widget_resize('logos');
	scripts_resize();
	
}