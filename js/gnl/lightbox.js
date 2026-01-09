var lightbox_config = {}

function lightbox_init(){
	lightbox_config = {
		"ele" : '#lightbox_caja',
		"size" : 'normal',
		"close" : true,
		"close_btn" : false,
	}
}

function lightbox_abrir(contenido, botones, config){ 
	lightbox_init();
	
	for (key in lightbox_config) {
		if(config.hasOwnProperty(key)){ lightbox_config[key] = config[key]; }	
	}
	
	$(lightbox_config["ele"]).addClass("activo");
	document.activeElement.blur();
	
	lightbox_size();
	
	$(lightbox_config["ele"] + ' .contenido').scrollTop(0);
	$(lightbox_config["ele"] + ' .contenido').html(contenido);
	
	$(lightbox_config["ele"] + ' .botones').hide();
	$(lightbox_config["ele"] + ' .boton').each(function(index, element) {
	   $(this).parent().hide();
	   $(this).hide();
	   $(this).unbind("click");
	});
	
	if(lightbox_config["close_btn"]){
		$(lightbox_config["ele"] + ' .btn_cerrar').show();
	} else {
		$(lightbox_config["ele"] + ' .btn_cerrar').hide();	
	}
	
	$(lightbox_config["ele"] + ' .btn_cerrar').unbind('click').bind('click', function(){
		lightbox_cerrar();
	});
	
	if(botones != null){ 
		if(botones.hasOwnProperty('aceptar')){
			$(lightbox_config["ele"] + ' .boton.aceptar').show();
			$(lightbox_config["ele"] + ' .boton.aceptar').parent().show();
			$(lightbox_config["ele"] + ' .boton.aceptar').val(botones.aceptar["txt"]);
			$(lightbox_config["ele"] + ' .boton.aceptar').unbind('click').bind('click', function(){
				if(lightbox_config["close"]){ 
					lightbox_cerrar();
				}
				if(botones.aceptar.hasOwnProperty('fn') && botones.aceptar["fn"] != null  && typeof botones.aceptar["fn"] === 'function'){  
					botones.aceptar["fn"]();
				}
			});
		}	 
		if(botones.hasOwnProperty('cancelar')){
			$(lightbox_config["ele"] + ' .boton.cancelar').show();
			$(lightbox_config["ele"] + ' .boton.cancelar').parent().show();
			$(lightbox_config["ele"] + ' .boton.cancelar').val(botones.cancelar["txt"]);
			$(lightbox_config["ele"] + ' .boton.cancelar').unbind('click').bind('click', function(){
				if(lightbox_config["close"]){ 
					lightbox_cerrar();
				}
				if(botones.cancelar.hasOwnProperty('fn') && botones.cancelar["fn"] != null  && typeof botones.cancelar["fn"] === 'function'){  
					botones.cancelar["fn"]();
				}
			});
		}
		if(Object.keys(botones).length > 0){
			$(lightbox_config["ele"] + ' .botones').show();
			if(Object.keys(botones).length == 1){ 
				$(lightbox_config["ele"] + ' .botones .col').removeClass('col2'); 
			}
			if(Object.keys(botones).length == 2){ 
				$(lightbox_config["ele"] + ' .botones .col').addClass('col2'); 
			}
		}
	} 
}

function lightbox_size(){ 
	$(lightbox_config["ele"] + ' .margen').removeClass('normal');
	$(lightbox_config["ele"] + ' .margen').removeClass('grande');
	
	switch(lightbox_config["size"]){
		case "normal":
			$(lightbox_config["ele"] + ' .margen').addClass('normal');
			break;
		case "grande":
			$(lightbox_config["ele"] + ' .margen').addClass('grande');
			break;
	}
}

function lightbox_cerrar(){ 
	$(lightbox_config["ele"]).removeClass("activo");
	
	$(lightbox_config["ele"] + ' .boton').each(function(index, element) {
	   $(this).hide();
	   $(this).unbind("click");
	});
	
}