var panel_aporte_arr = [
	{"key":"mensaje", "nombre":"Escribe tu aporte o pregunta", "ele":"#input_panel_mensaje", "tipo": "textarea", "validar": "texto", "opcional": false},
];

function panel_ready(){
	sesion_verificar_ini = function(){	
		panel_init();
	}
	
	sesion_verificar_no = function(){
		window.location.href = url_sitio;
	}
}
function panel_load(){
	panel_resize();
}
function panel_resize(){
	
}

function panel_init(){
	panel_indice();
	$('.panel .lateral.izq .nombre').text(panel_curso);
	panel_aporte_forma();
}

function panel_indice(){
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	data.append("idcurso", panel_idcursos); 
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/panel_indice.php", 
		{
			"ok" : function(respuesta){
				if(respuesta.hasOwnProperty('indice') && respuesta["indice"] != null){
					for(x in respuesta.indice){
						var indice = respuesta.indice[x];
						
						var hijos = false;
						if(indice.hasOwnProperty('hijos') && indice["hijos"] != null){
							hijos = true;
						}
						
						var html = '';
						html += '<li>';
							html += '<a href="#" class="' + ((hijos)?'hijos':'') + '" data-id="' + indice['idcurso_contenido'] + '" data-orden="' + indice['data']['orden'] + '">' + indice['data']['contenido'] + '</a>';
							if(hijos){
								html += '<ul class="acordion">';
									for(y in indice.hijos){
										var hijo = indice.hijos[y];
										html += '<li>';
											html += '<a href="#" data-id="' + hijo['idcurso_contenido'] + '" data-orden="' + hijo['data']['orden'] + '">' + hijo['data']['contenido'] + '</a>';
										html += '</li>';
									}
								html += '</ul>';
							}
						html += '</li>';
						$(html).appendTo(".panel .lateral.izq .modulo ul.principal");	
					}
					
					$(".panel .lateral.izq .modulo ul li a").each(function(index, ele) {
                        $(this).unbind('click').bind('click', function(){
							if($(this).hasClass('hijos')){
								$(".panel .lateral.izq .modulo ul li a").each(function(index, element) {
									if(ele != element){
										$(this).removeClass('activo');	
										if($(this).hasClass('hijos')){
											$(this).parent().find(".acordion").hide();	
										}
									}
								});	
								$(this).toggleClass('activo');	
								if($(this).hasClass('activo')){
									$(this).parent().find(".acordion").show();
								} else {
									$(this).parent().find(".acordion").hide();	
								}
							}
							
							panel_contenido($(this).attr("data-id"), $(this).attr("data-orden"), $(this).text());
							return false;
						});
                    });
				}
			}
		},
		{
			"ligthbox" : false,
		}
	);
}
function panel_contenido(idcurso_contenido, orden, titulo){
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	data.append("idcurso", panel_idcursos); 
	data.append("idcurso_contenido", idcurso_contenido); 
	data.append("orden", orden); 
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/panel_contenido.php", 
		{
			"ok" : function(respuesta){
				
			}
		},
		{
			"ligthbox" : false,
		}
	);
	
	$(".plantilla").attr("data-id", idcurso_contenido);
	$(".plantilla .titulo .orden").text(orden);
	$(".plantilla .titulo .nombre").text(titulo);
	
}

function panel_aporte_forma(){
	form_init(panel_aporte_arr);
	$("#btn_aporte").unbind('click').bind('click', function(){
		panel_aporte_validar();
		return false;
	});	
}

function panel_aporte_validar(){
	respuesta = form_validar(panel_aporte_arr);
	if(respuesta.i == 0){ 
		panel_aporte_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('panel_aporte', 'validar', 'error');
		}
	}
}

function panel_aporte_servicio(valores){
	event_google_analytics('panel_aporte', 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	
	data.append("idcurso", ""); 
	data.append("idcurso_contenido", ""); 
	
	valores = form_input_valores(valores, panel_aporte_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	var funcion = function(respuesta){		
		event_google_analytics('panel_aporte', 'servicio', 'ok');
		var html = '<h1>Gracias por su aporte</h1>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": null
				}	
			}, 
			{}
		);		
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/panel_aporte.php", 
		{
			"ok" : funcion, 
		},
		{
			
		}
	);
}