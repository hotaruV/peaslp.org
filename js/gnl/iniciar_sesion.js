var iniciar_sesion_arr = [
	{"key":"usuario", "nombre":"Usuario", "ele":"#input_usuario", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"contrasena", "nombre":"Contraseña", "ele":"#input_contrasena", "tipo": "text", "validar": "contrasena", "opcional": false},
];

function iniciar_sesion_ready(){
	sesion_verificar_ini = function(){	
		window.location.href = url_sitio;
	}
	
	sesion_verificar_no = function(){
		iniciar_sesion_forma();	
	}	
}
function iniciar_sesion_load(){
	iniciar_sesion_resize();
}
function iniciar_sesion_resize(){
	
}

function iniciar_sesion_forma(){
	form_init(iniciar_sesion_arr);
	$("#btn_iniciar_sesion").unbind('click').bind('click', function(){
		iniciar_sesion_validar();
		return false;
	});	
	
	$('input[name="input_contrasena_ver"]').unbind('click').bind('click', function(){
		if($('input[name="input_contrasena_ver"]').is(':checked')){
			$("#input_contrasena").attr("type", "text");
		} else {
			$("#input_contrasena").attr("type", "password");
		}
	});
}

function iniciar_sesion_validar(){
	respuesta = form_validar(iniciar_sesion_arr);
	if(respuesta.i == 0){ 
		iniciar_sesion_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('iniciar_sesion', 'validar', 'error');
		}
	}
}

function iniciar_sesion_servicio(valores){
	event_google_analytics('iniciar_sesion', 'servicio', 'iniciar');	
	
	var data = new FormData();
	data.append("token", ""); 
	
	valores = form_input_valores(valores, iniciar_sesion_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	ajax_enviar(
		data, 
		url_sitio + "ajax/gnl/iniciar_sesion.php", 
		{
			"ok" : function(respuesta){		
				event_google_analytics('iniciar_sesion', 'servicio', 'ok');
				
				lightbox_abrir('<div align="center">iniciando sesión...</div>', {}, {});
				sesion_datos(respuesta, function(light){ 
					window.location.href = $('#form_iniciar_sesion').attr('data-action');
				}, false);
			}, 
		},	
		{}
	);
}