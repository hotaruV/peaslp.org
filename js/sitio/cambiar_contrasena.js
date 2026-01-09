var cambiar_contrasena_arr = [
	{"key":"contrasena", "nombre":"Contraseña actual", "ele":"#input_contrasena", "tipo": "text", "validar": "contrasena", "opcional": false, },
	{"key":"contrasena_nueva", "nombre":"Contraseña nueva", "ele":"#input_contrasena_nueva", "tipo": "text", "validar": "contrasena", "opcional": false, "confirmar":"#input_contrasena_nueva_c"},
];

function cambiar_contrasena_ready(){
	sesion_verificar_ini = function(){	
		cambiar_contrasena_forma();	
	}
	
	sesion_verificar_no = function(){
		
	}
}
function cambiar_contrasena_load(){
	cambiar_contrasena_resize();
}
function cambiar_contrasena_resize(){
	
}

function cambiar_contrasena_forma(){
	form_init(cambiar_contrasena_arr);
	$("#btn_guardar").unbind('click').bind('click', function(){
		cambiar_contrasena_validar();
		return false;
	});	
	
	$('input.ver_contrasena').each(function(index, element) {
        $(this).unbind('click').bind('click', function(){
			if($(this).is(':checked')){
				$('#' + $(this).attr("data-id")).attr("type", "text");
			} else {
				$('#' + $(this).attr("data-id")).attr("type", "password");
			}
		});
    }); 
	
}

function cambiar_contrasena_validar(){
	respuesta = form_validar(cambiar_contrasena_arr);
	if(respuesta.i == 0){ 
		cambiar_contrasena_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('cambiar_contrasena', 'validar', 'error');
		}
	}
}

function cambiar_contrasena_servicio(valores){
	event_google_analytics('cambiar_contrasena', 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	
	valores = form_input_valores(valores, cambiar_contrasena_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	var funcion = function(respuesta){		
		event_google_analytics('cambiar_contrasena', 'servicio', 'ok');
		var html = '<div class="align-center"><b>Tu nueva contraseña se ha guardado correctamente. Inicia sesión con tu nuevo acceso.</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						sesion_cerrar(url_sitio);
					}
				}	
			}, 
			{}
		);		
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/cambiar_contrasena.php", 
		{
			"ok" : funcion, 
		},
		{}
	);
}