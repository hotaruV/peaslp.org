var recuperar_contrasena_arr = [
	{"key":"usuario", "nombre":"Usuario", "ele":"#input_usuario", "tipo": "text", "validar": "mail", "opcional": false},
];

function recuperar_contrasena_ready(){
	sesion_verificar_ini = function(){	
		window.location.href = url_sitio;
	}
	
	sesion_verificar_no = function(){
		recuperar_contrasena_forma();	
	}
}
function recuperar_contrasena_load(){
	recuperar_contrasena_resize();
}
function recuperar_contrasena_resize(){
	
}

function recuperar_contrasena_forma(){
	form_init(recuperar_contrasena_arr);
	$("#btn_recuperar").unbind('click').bind('click', function(){
		recuperar_contrasena_validar();
		return false;
	});	
}

function recuperar_contrasena_validar(){
	respuesta = form_validar(recuperar_contrasena_arr);
	if(respuesta.i == 0){ 
		recuperar_contrasena_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('recuperar_contrasena', 'validar', 'error');
		}
	}
}

function recuperar_contrasena_servicio(valores){
	event_google_analytics('recuperar_contrasena', 'servicio', 'iniciar');	
	
	var data = new FormData();
	data.append("token", ""); 
	
	valores = form_input_valores(valores, recuperar_contrasena_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	var funcion = function(respuesta){		
		event_google_analytics('recuperar_contrasena', 'servicio', 'ok');
		lightbox_abrir("<h1>Mensaje</h1>La nueva contraseña ha sido enviada a su correo electrónico.", {
			"aceptar" : {
				"txt": "Ok",
				"fn": function(){
					window.location.href = $("#form_recuperar").attr("data-action");
				}
			}
		}, {});
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/gnl/recuperar_contrasena.php", 
		{
			"ok" : funcion, 
		}, 
		{
			"timeout" : 60000
		}
	);
}