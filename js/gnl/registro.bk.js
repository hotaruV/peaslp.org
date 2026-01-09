var registro_arr = [
	{"key":"nombre", "nombre":"Nombre", "ele":"#input_registro_nombre", "tipo": "text", "validar": "nombre", "opcional": false},
	{"key":"apellidos", "nombre":"Apellidos", "ele":"#input_registro_apellidos", "tipo": "text", "validar": "nombre", "opcional": false},
	{"key":"actor", "nombre":"Actor responsable", "ele":"#input_registro_actor", "tipo": "select", "validar": "texto", "opcional": false},
	{"key":"correo", "nombre":"Correo electrónico", "ele":"#input_registro_correo", "tipo": "text", "validar": "mail", "opcional": false, "confirmar":"#input_registro_correo_confirmar"},
	{"key":"contrasena", "nombre":"Contraseña", "ele":"#input_registro_contrasena", "tipo": "text", "validar": "contrasena", "opcional": false, "confirmar":"#input_registro_contrasena_confirmar"},
];

function registro_ready(){
	sesion_verificar_ini = function(){	
		window.location.href = url_sitio;
	}
	
	sesion_verificar_no = function(){
		registro_forma();	
	}
}
function registro_load(){
	registro_resize();
}
function registro_resize(){
	
}

function registro_forma(){
	form_init(registro_arr);
	$("#btn_registro").unbind('click').bind('click', function(){
		registro_validar();
		return false;
	});	
}

function registro_validar(){
	respuesta = form_validar(registro_arr);
	if(respuesta.i == 0){ 
		registro_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('registro', 'validar', 'error');
		}
	}
}

function registro_servicio(valores){
	event_google_analytics('registro', 'servicio', 'iniciar');	
	
	var data = new FormData();
	data.append("token", ""); 
	
	valores = form_input_valores(valores, registro_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	var funcion = function(respuesta){		
		event_google_analytics('registro', 'servicio', 'ok');
		
		var html = '';
		html += '<h1>Le damos la más cordial bienvenida.</h1>';
		html += '<div>';
			html += '<p>Este es su usuario y contraseña. Es necesario resguardarlos en un lugar seguro para poder usarlos cada vez que accedas al portal.</p>';
			html += '<p style="font-family:Monaco, monospace;">Usuario: <b>' + respuesta.u + '</b><br/>Contraseña:<b> ' + respuesta.p + '</b></p>';
			html += '<label><input type="checkbox" class="auto radio input_registro_ok" value="1" id="input_light_ok"> He copiado este usuario y contraseña.</label>';
			html += '<span style="color:#F00;" id="error_light_ok"></span>';
		html += '</div>';	

		lightbox_abrir(html, {
			"aceptar" : {
				"txt": "Continuar",
				"fn": function(){ 
					var i = 0;
					if( $('#lightbox_caja #input_light_ok:checked').length == 0){ 
						i = 1; $('#lightbox_caja #error_light_ok').html('<br><small>Debes confirmar que has copiado este usuario y contraseña.</small>'); 
					}
					if(i == 0){	
						registro_servicio_iniciar(respuesta.u, respuesta.p);
					}
				}
			}	
		}, {
			"size": "grande",
			"close" : false
		});		
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/gnl/registro.php", 
		{
			"ok" : funcion, 
		},
		{
			"timeout" : 60000
		}
	);
}

function registro_servicio_iniciar(correo, contrasena){
	var data = new FormData();
	data.append("token", ""); 
	data.append("usuario", correo); 
	data.append("contrasena", contrasena); 
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/gnl/iniciar_sesion.php", 
		{
			"ok" : function(respuesta){
				event_google_analytics('registro', 'iniciar', 'ok');		
				lightbox_abrir('<div align="center">iniciando sesión...</div>', {}, {});
				sesion_datos(respuesta, function(light){ 
					window.location.href = $('#form_registro').attr('data-action');
				}, false);	
			}, 
		},
		{}
	);
}