var dashboard_arr = [
	{"key":"correo_electronico", "nombre":"Correo electrónico", "ele":"#input_correo_electronico", "tipo": "text", "validar": "mail", "opcional": false, },
];

function dashboard_ready(){
	sesion_verificar_ini = function(){	
		dashboard_forma();	
	}
	
	sesion_verificar_no = function(){
		
	}
}
function dashboard_load(){
	dashboard_resize();
}
function dashboard_resize(){
	
}

function dashboard_forma(){
	
	dashboard_arr = [
		{"key":"correo_electronico", "nombre":"Correo electrónico", "ele":"#input_correo_electronico", "tipo": "text", "validar": "mail", "opcional": false, "value": $("#input_correo_electronico").val()},
	];
	form_init(dashboard_arr);
	$("#btn_guardar").unbind('click').bind('click', function(){
		dashboard_validar();
		return false;
	});	
}

function dashboard_validar(){
	respuesta = form_validar(dashboard_arr);
	if(respuesta.i == 0){ 
		dashboard_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('dashboard', 'validar', 'error');
		}
	}
}

function dashboard_servicio(valores){
	event_google_analytics('dashboard', 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	
	valores = form_input_valores(valores, dashboard_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	var funcion = function(respuesta){		
		event_google_analytics('dashboard', 'servicio', 'ok');
		var html = '<div class="align-center"><b>Tu CORREO ELECTRÓNICO para recibir notificaciones se ha guardado correctamente.</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						window.location.href = $('#form_dashboard').attr('data-action');
					}
				}	
			}, 
			{}
		);		
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/dashboard.php", 
		{
			"ok" : funcion, 
		},
		{}
	);
}