var slider_widget_obj = [];

function slider_widget_botones(seccion){
	if(slider_widget_obj[seccion]["pos"] <= 0){ 
		$('.' + seccion + '_slider_widget .flecha.izq').css( "opacity", 0.5); 
	} else {
		$('.' + seccion + '_slider_widget .flecha.izq').css( "opacity", 1);
	}
	
	if(
		slider_widget_obj[seccion]["pos"] + slider_widget_obj[seccion]["visible_items"] >= 
		$('.' + seccion + '_slider_widget .slider_widget_items .slider_widget_item').length
	){ 
		$('.' + seccion + '_slider_widget .flecha.der').css( "opacity", 0.5); 
	} else {
		$('.' + seccion + '_slider_widget .flecha.der').css( "opacity", 1);
	}
}

function slider_widget_resize(seccion){
	switch(seccion){
		case "logos":
			if( 920 < scripts_w){
				slider_widget_obj[seccion]["ancho"] = $('.' + seccion + '_slider_widget').width() / 5;
				slider_widget_obj[seccion]["visible_items"] = 5;
			} else if( 640 < scripts_w){
				slider_widget_obj[seccion]["ancho"] = $('.' + seccion + '_slider_widget').width() / 3;
				slider_widget_obj[seccion]["visible_items"] = 3;
			} else {
				slider_widget_obj[seccion]["ancho"] = $('.' + seccion + '_slider_widget').width() / 2;
				slider_widget_obj[seccion]["visible_items"] = 2;
			}
			break;
	}	
	
	$('.' + seccion + '_slider_widget .slider_widget_items').width( $('.' + seccion + '_slider_widget .slider_widget_items .slider_widget_item').length * slider_widget_obj[seccion]["ancho"] );
	$('.' + seccion + '_slider_widget .slider_widget_items .slider_widget_item').each(function() { 
		$( this ).width(slider_widget_obj[seccion]["ancho"]); 
	});
}

function slider_widget(seccion, obj){
	
	if (typeof slider_widget_obj[seccion] !== 'undefined' && typeof slider_widget_obj[seccion]["intervalo"] !== 'undefined') {
		if(slider_widget_obj[seccion]["intervalo"] != null) { clearTimeout(slider_widget_obj[seccion]["intervalo"]); }
	}
	
	slider_widget_obj[seccion] = {
		"intervalo"	: null,
		"transicion" : 500,
		"tiempo" : 1000,
		"pos" : 0,
		"items": $('.' + seccion + '_slider_widget .slider_widget_items .slider_widget_item').length,
		"visible_items": 2,
		"ancho": $('.' + seccion + '_slider_widget').width() / 2
	}
	
	
	slider_widget_resize(seccion);
	

	var html = $("." + seccion + "_slider_widget .slider_widget_items").html();
	$("." + seccion + "_slider_widget .slider_widget_items").append(html);
	
	$('.' + seccion + '_slider_widget .slider_widget_items').width( $('.' + seccion + '_slider_widget .slider_widget_items .slider_widget_item').length * slider_widget_obj[seccion]["ancho"] );
	
	$("." + seccion + "_slider_widget .slider_widget_items").css('marginLeft', "0px");	
	slider_widget_botones(seccion);
	
	$('.' + seccion + '_slider_widget .flecha.izq').unbind("click").bind("click", (function () {	
		if(slider_widget_obj[seccion]["pos"] <= 0){ 
			$('.' + seccion + '_slider_widget .flecha.izq').css( "opacity", 0.5); 
		} else {
			slider_widget_obj[seccion]["pos"]--;
			$("." + seccion + "_slider_widget .slider_widget_items").animate(
				{ 'marginLeft': "+=" + (slider_widget_obj[seccion]["ancho"]) + "px" }, 
				'slow'
			);
			slider_widget_botones(seccion);
			slider_widget_acciones(seccion);
		}
	}));
	
	$('.' + seccion + '_slider_widget .flecha.der').unbind("click").bind("click", (function () {
		if(
			(slider_widget_obj[seccion]["pos"] + slider_widget_obj[seccion]["visible_items"]) >= 
			$('.' + seccion + '_slider_widget .slider_widget_items .slider_widget_item').length){ 
			
		} else {
			slider_widget_obj[seccion]["pos"]++;
			$("." + seccion + "_slider_widget .slider_widget_items").animate(
				{ 'marginLeft': "-=" + (slider_widget_obj[seccion]["ancho"]) + "px" }, 
				'slow'
			);
			slider_widget_botones(seccion);
			slider_widget_acciones(seccion);
		}
	}));
	
	slider_widget_acciones(seccion);
	slider_widget_interval(seccion);
	
}

function slider_widget_acciones(seccion){
	
}

function slider_widget_interval(seccion){
	if(slider_widget_obj[seccion]["intervalo"] != null) { 
		clearTimeout(slider_widget_obj[seccion]["intervalo"]); 
	}
	
	slider_widget_obj[seccion]["intervalo"] = setTimeout(
		function(){ 
			slider_widget_obj[seccion]["pos"]++;
			if(
				(slider_widget_obj[seccion]["pos"] + slider_widget_obj[seccion]["visible_items"]) > 
				$('.' + seccion + '_slider_widget .slider_widget_items .slider_widget_item').length
			){ 
				slider_widget_obj[seccion]["pos"] = 0; 
			}
			
			var valor = -( slider_widget_obj[seccion]["ancho"] * slider_widget_obj[seccion]["pos"] );
			
			$("." + seccion + "_slider_widget .slider_widget_items").animate(
				{ 'marginLeft': valor + "px" }, 
				'slow',
				function(){
					if(slider_widget_obj[seccion]["pos"] >= slider_widget_obj[seccion]["items"]){
						slider_widget_obj[seccion]["pos"] = 0; 
						$("." + seccion + "_slider_widget .slider_widget_items").css('marginLeft', "0px");	
						
					}
				}
			);
			slider_widget_botones(seccion);
			slider_widget_acciones(seccion);
			slider_widget_interval(seccion);
		}, 
		1500
	);
}