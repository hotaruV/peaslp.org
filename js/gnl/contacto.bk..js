var contacto_arr = [
	{"key":"motivo", "nombre":"Motivo", "ele":"#input_contacto_motivo", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"mensaje", "nombre":"Mensaje", "ele":"#input_contacto_mensaje", "tipo": "textarea", "validar": "texto", "opcional": false},
	{"key":"nombre", "nombre":"Nombre completo", "ele":"#input_contacto_nombre", "tipo": "text", "validar": "nombre", "opcional": false},
	{"key":"correo", "nombre":"Correo electrónico o usuario en PIPEA", "ele":"#input_contacto_correo", "tipo": "text", "validar": "mail", "opcional": false},
];

function contacto_ready(){
	sesion_verificar_ini = function(){	
		
	}
	
	sesion_verificar_no = function(){
		
	}
	contacto_forma();	
}
function contacto_load(){
	contacto_resize();
}
function contacto_resize(){
	
}

function contacto_forma(){
	form_init(contacto_arr);
	$("#btn_contacto").unbind('click').bind('click', function(){
		contacto_validar();
		return false;
	});	
}

function contacto_validar(){
	respuesta = form_validar(contacto_arr);
	if(respuesta.i == 0){ 
		contacto_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('contacto', 'validar', 'error');
		}
	}
}

function contacto_servicio(valores){
	event_google_analytics('contacto', 'servicio', 'iniciar');	
	
	var data = new FormData();
	data.append("token", ""); 
	
	valores = form_input_valores(valores, contacto_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	var funcion = function(respuesta){		
		event_google_analytics('contacto', 'servicio', 'ok');
		var html = '<h1>Gracias por su mensaje</h1>En breve nos pondremos en contacto.';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						window.location.href = $('#form_contacto').attr('data-action');
					}
				}	
			}, 
			{}
		);		
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/gnl/contacto.php", 
		{
			"ok" : funcion, 
		},
		{
			"timeout" : 60000
		}
	);
}