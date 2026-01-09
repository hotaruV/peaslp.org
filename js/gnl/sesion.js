var sesion_data = {};
var sesion_url = '';

var _iDB = null;
var _iDBConfig = _iDB_config;
_iDBConfig.version = 1; 
_iDBConfig.database = 'SanLuisPotosi'; 

var sesion_db = false;
var sesion_verificar_ini = null;
var sesion_verificar_no = null;

function sesion_init(){
	sesion_url = url_sitio + 'iniciar-sesion';
	sesion_data = {
		"id" : null,
		"token" : null,
		"dispositivo" : null,
		"perfil" : null,
	};
}

function sesion_elementos(logeado){
	console.log('sesion_botones', logeado);
	if(logeado){
		$('*[data-sesion="true"]').each(function(index, element) { 
			var attr = $(this).attr('se-data');
			if (typeof attr !== 'undefined' && attr !== false) {
				$(this).css('display', attr); 
			} else {
				$(this).show(); 
			}
		});
		$('*[data-sesion="false"]').each(function(index, element) { 
			$(this).hide(); 
		});
	} else { 
		$('*[data-sesion="true"]').each(function(index, element) { 
			$(this).hide(); 
		});
		$('*[data-sesion="false"]').each(function(index, element) { 
			var attr = $(this).attr('se-data');
			if (typeof attr !== 'undefined' && attr !== false) {
				$(this).css('display', attr); 
			} else {
				$(this).show(); 
			}
		});
	}
}

function sesion_permisos(permitir_arr){
	var permiso = false;
	for(var i in permitir_arr){
		if(parseInt(sesion_data["perfil"], 10) == parseInt(permitir_arr[i], 10)){  permiso = true; }
	}
	return permiso;
}

function sesion_verificar(fnTrue, fnFalse){
	console.log('sesion_verificar');
	sesion_elementos(false);
	
	_iDBConfig.inicial = function(respuesta){
		if(respuesta !== false){ 
			if(respuesta.ok == 1){
				_iDB.readData("preferencia", "01", function(elemento){
					if(elemento != null){ 
						sesion_db = true;
						sesion_data["id"] = elemento.sesion_id;
						sesion_data["token"] = elemento.sesion_token;
						sesion_data["dispositivo"] = elemento.sesion_dispositivo;
						sesion_data["perfil"] = elemento.sesion_perfil;

						sesion_token(
							function(){ 
								sesion_elementos(true); 
								if(fnTrue != null  && typeof fnTrue === 'function') { 
									fnTrue();
								}
							}, 
							function(){
								sesion_limpiar(function(){
									sesion_aviso();
								});
							}, 
							false
						); 
						
					} else { 
						if(fnFalse != null  && typeof fnFalse === 'function') { 
							fnFalse();
						}
					}
				});
			} else if(respuesta.ok == 0 && respuesta.hasOwnProperty('accion') && respuesta.accion == 'reload'){
				lightbox_abrir(
					respuesta.msj, 
					{
						"aceptar" : {
							"txt": "Recargar",
							"fn": function(){
								window.location.reload(); 
							}
						}
					}, 
					{}
				);
			} else {
				if(fnFalse != null  && typeof fnFalse === 'function') { 
					fnFalse();
				}
			}
		}
	};
	_iDB = new _indexedDB(_iDBConfig);
	_iDB.init(true);
}

function sesion_limpiar(funcion){
	console.log('sesion_limpiar');
	
	sesion_init();
	sesion_elementos(false);
	
	_iDB.removeAll("preferencia", function(){
		_iDB.removeAll("avisos", function(){
			if(funcion != null  && typeof funcion === 'function') { 
				funcion(); 
			}
		});
	});
	
}

function sesion_cerrar_aviso(){
	console.log('sesion_cerrar_aviso');
	
	lightbox_abrir(
		'<h1>Cerrar sesión</h1>¿Estas seguro de salir?', 
		{
			"aceptar" : {
				"txt": "Cerrar sesión",
				"fn": function(){
					sesion_cerrar(url_sitio);
				}
			},
			"cancelar" : {
				"txt": "Regresar",
				"fn": null
			}
		}, 
		{}
	);
}

function sesion_cerrar(url){
	console.log('sesion_cerrar');
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
		
		sesion_limpiar(null);
		
	} else {
		data.append("token", ""); 
	} 
	
	var funcion = function(respuesta){ 
		if(url != null){ 
			window.location.href = url;
		} else {
			window.location.reload(); 
		}
	};
	
	lightbox_abrir('<div align="center">cerrando sesión...</div>', {}, {});
	ajax_enviar(
		data, 
		url_sitio + "ajax/gnl/cerrar_sesion.php", 
		{
			"ok" : funcion, 
		}, 
		{
			"ligthbox" : false,
		}
	);
}

function sesion_cerrar_sin(){
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
		
		sesion_limpiar(null);
		
	} else {
		data.append("token", ""); 
	}
	var funcion = function(respuesta){
		
	}
	ajax_enviar(
		data, 
		url_sitio + "ajax/gnl/cerrar_sesion.php", 
		{
			"ok" : funcion, 
		}, 
		{
			"ligthbox" : false,
		}
	);
}

function sesion_aviso(){
	console.log('sesion_aviso');
	lightbox_abrir(
		'<h1>Advertencia</h1>Tuvimos problemas al identificar tu usuario, inicie sesión nuevamente.', 
		{
			"aceptar" : {
				"txt": "Iniciar sesión",
				"fn": function(){ 
					sesion_cerrar(sesion_url);
				}
			},
			"cancelar" : {
				"txt": "Cerrar",
				"fn": function(){ 
					sesion_cerrar_sin();
				}
			}
		}, 
		{}
	);	
}

function sesion_token(fnTrue, fnFalse, light){
	console.log('sesion_token');
	
	
	
	var data = new FormData();
	data.append("id", sesion_data["id"]); 
	data.append("token", sesion_data["token"]); 
	data.append("dispositivo", sesion_data["dispositivo"]); 
	data.append("perfil", sesion_data["perfil"]);
	
	if(light){ 
		lightbox_abrir('<div align="center">ingresando...</div>', {}, {}); 
	}
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/gnl/iniciar_token.php", 
		{
			"ok" : function(datos){
				sesion_datos(datos, fnTrue, light);	
			}, 
			"err" : function(datos){
				sesion_limpiar(null);
				
				if(light){ 
					lightbox_cerrar(); 
				}
				if(fnFalse != null  && typeof fnFalse === 'function') { 
					fnFalse(datos); 
				}
			}
		}, 
		{
			"ligthbox" : false,
		}
	);
}

function sesion_datos(datos, fnTrue, light){
	console.log('sesion_data');
	
	var usuario = datos.usuario;
	
	sesion_data["id"] = parseInt(datos.id, 10);
	sesion_data["token"] = datos.salt;
	sesion_data["dispositivo"] = datos.dispositivo;
	sesion_data["perfil"] = datos.perfil;
	sesion_data["perfil_txt"] = datos.perfil_txt;
	sesion_data["txt_perfil"] = datos.txt_perfil;
	
	var data = { 
		"id":"01", 
		"sesion_id": sesion_data["id"], 
		"sesion_token": sesion_data["token"], 
		"sesion_dispositivo": sesion_data["dispositivo"],
		"sesion_perfil": sesion_data["perfil"] 
	};
	
	var funcion = function(){
		sesion_elementos(true);
		
		if(fnTrue != null  && typeof fnTrue === 'function'){ 
			fnTrue(light); 
		} else { 
			if(light){ 
				lightbox_cerrar(); 
			} 
		}
		
		$(".txt_perfil").each(function(index, element) {
            $(this).html(datos.perfil_txt + '<br>' + datos.txt_perfil);
        });
	}
	
	if(!sesion_db){
		_iDB.addData("preferencia", data, funcion);
	} else {
		_iDB.updateData("preferencia", data, funcion);
	}
}