var slider_obj = [];

/* slider */
function slider_resize(seccion){
	switch(slider_obj[seccion]["tipo"]){
		case 'fade':
			break;
		case 'slide':
			$(seccion + ' .slide').addClass("slideLeft");
			$(seccion + " .items .anim").width($(seccion + ' .slide .item').length * $(seccion + ' .slide .items').width());
			$(seccion + ' .slide .item').each(function() { 
				$( this ).width($(seccion + ' .slide .items').width()); 
			});
			break;
		default:
			break;
	}
	
	$(seccion + " .items").css("min-height", "inherit");
	var altura = 0;
	$(seccion + ' .slide .item .tabla').each(function() { 
		if(altura < $(this).outerHeight()){ 
			altura = $(this).outerHeight(); 
		}
	});
	slider_obj[seccion]["altura"] = altura;
	if(altura > 0 && $(seccion + " .items").height() < altura){ 
		$(seccion + " .items").css("min-height", slider_obj[seccion]["altura"] + 'px'); 
	}
	
	
	
	
}
function slider(seccion, obj){
	
	if (typeof slider_obj[seccion] !== 'undefined' && typeof slider_obj[seccion]["intervalo"] !== 'undefined') {
		if(slider_obj[seccion]["intervalo"] != null) { clearTimeout(slider_obj[seccion]["intervalo"]); }
	}
	
	slider_obj[seccion] = {
		"intervalo"	: null,
		"transicion" : obj.tiempo,
		"tiempo" : obj.duracion,
		"tipo" : obj.tipo,
		"pos" : 0
	}
	
	
	slider_resize(seccion);
	

	if($(seccion + ' .puntos').length){
		var puntos = "";
		for(var i = 0; i < $(seccion + ' .slide .item').length; i ++){ puntos += '<div class="punto"></div>'; }
		$(seccion + ' .slide .puntos .centro').html(puntos);
		$(seccion + " .slide .puntos .punto").each(function(i) {
			$(this).unbind('click').bind('click',  function() { 
				slider_obj[seccion]["pos"] = i;
				slider_activar(seccion)
			});
		});
	}
	
	if($(seccion + ' .slide .item').length > 1){
		var hammer = new Hammer($(seccion + " .items .anim").get(0));
		hammer.on('swipeleft', function(){
			slider_der(seccion);
		});
		hammer.on('swiperight', function(){
			slider_izq(seccion);
		});
		
		if($(seccion + ' .izq').length){
			$(seccion + ' .flecha .izq').unbind('click').bind('click',  function() {
				slider_izq(seccion);
			});	
		}
		if($(seccion + ' .der').length){
			$(seccion + ' .flecha .der').unbind('click').bind('click',  function() {
				slider_der(seccion);
			});	
		} 
	} else {
		$(seccion + ' .puntos').hide();
		$(seccion + ' .izq').hide();
		$(seccion + ' .der').hide();	
	}
	
	if($(seccion + ' .slide .item').length > 0){
		slider_activar(seccion);
	}
}

function slider_izq(seccion){
	slider_obj[seccion]["pos"]--;
	if(slider_obj[seccion]["pos"] < 0){ 
		slider_obj[seccion]["pos"] = $(seccion + ' .slide .item').length - 1; 
	}
	slider_activar(seccion);
}

function slider_der(seccion){
	slider_obj[seccion]["pos"]++;
	if(slider_obj[seccion]["pos"] >= $(seccion + ' .slide .item').length){ 
		slider_obj[seccion]["pos"] = 0; 
	}
	slider_activar(seccion);
}


function slider_activar(seccion){
	$(seccion + ' .puntos .punto').each(function(index, element) {
	   $(this).removeClass('activo'); 
	});
	switch(slider_obj[seccion]["tipo"]){
		case 'fade':
			$(seccion + " .slide .item").each(function(index) {
				if(index != slider_obj[seccion]["pos"]){
					$(this).fadeTo(slider_obj[seccion]["transicion"], 0, function() { });
					$(this).css("z-index", 1);
				} else {
					$(this).fadeTo(slider_obj[seccion]["transicion"], 1, function() { });
					$(this).css("z-index", 2);
					
				}
			});
			break;
		case 'slide':
			$(seccion + " .items .anim").animate(
				{ 
					'marginLeft': -($(seccion + ' .slide .items').width() * slider_obj[seccion]["pos"]) + "px" 
				}, 
				slider_obj[seccion]["transicion"]
			);
			break;
		default:
			break;
	}
	$(seccion + " .slide .puntos .punto:nth-child(" + (slider_obj[seccion]["pos"] + 1) + ")").addClass("activo"); 
	slider_interval(seccion);
}

function slider_interval(seccion){
	if(slider_obj[seccion]["tiempo"] != 0){
		
		if(slider_obj[seccion]["intervalo"] != null) { 
			clearTimeout(slider_obj[seccion]["intervalo"]); 
		}
		
		slider_obj[seccion]["intervalo"] = setTimeout(
			function(){ 
				slider_obj[seccion]["pos"]++;
				if(slider_obj[seccion]["pos"] >= $(seccion + ' .slide .item').length){ 
					slider_obj[seccion]["pos"] = 0; 
				}
				slider_activar(seccion);
			}, 
			slider_obj[seccion]["tiempo"]
		);
	}
}
/* slider */