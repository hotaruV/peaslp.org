var ajax_config = {}
var ajax_ok = 0;

function ajax_init(){
	ajax_config = {
		"intentos" : 0,
		"max_intentos" : 1,
		"ligthbox" : true,
		"file" : false,
		"timeout" : 25000
	}	
}

function ajax_enviar(data, file, callback, config){
	ajax_init();
	
	for (key in ajax_config) {
		if(config.hasOwnProperty(key)){ ajax_config[key] = config[key]; }	
	}
	
	ajax_enviar_intentos(data, file, callback);
}

function ajax_enviar_intentos(data, file, callback){
	
	ajax_config["intentos"]++;
	
	if(ajax_config["file"]){ 
		ajax_config["timeout"] = 0; 
	}
	if(ajax_config["ligthbox"]){ 
		lightbox_abrir('<div class="align-center">enviando...</div>', {}, {}); 
	}
	
	if(ajax_config["intentos"] <= ajax_config["max_intentos"]){
		$.ajax({
			type: "POST",
			url: file,
			data: data,
			processData: false,
			contentType: false,
			timeout: ajax_config["timeout"],
			dataType: "json",
			success: function(data){
				if(ajax_respuesta(data)){ 
					if(ajax_config["ligthbox"]){ 
						lightbox_cerrar(); 
					}
					if(callback != null  && callback.hasOwnProperty('ok') && typeof callback["ok"] === 'function') { 
						callback["ok"](data); 
					}
				} else {
					if(callback != null  && callback.hasOwnProperty('err') && typeof callback["err"] === 'function') { 
						callback["err"](data); 
					}
				}
			},
			error: function(errMsg) {
				ajax_enviar(data, file, callback, {
					"intentos" : ajax_config["intentos"]	
				});
			},
			progress: function(e) {
				if(ajax_config["file"]){
					if(e.lengthComputable) {
						ajax_progress(Math.round((e.loaded / e.total) * 100), '.lightbox_caja.activo .estatus');
					}
				}
			}
		});
	} else {
		var funcion = function(){
			ajax_enviar(data, file, callback, {});
		}
		lightbox_abrir(
			'<div class="align-center big margin-yb"><b>Advertencia</b></div>Problemas al enviar la información.', 
			{
				"aceptar" : {
					"txt": "Reintentar",
					"fn": funcion
				},
				"cancelar" : {
					"txt": "Cancelar",
					"fn": null
				} 
			}, 
			{}
		);
	}
}

function ajax_respuesta(data){
	var exito = false;
	var html = "";
	var botones = { 
		"aceptar" : {
			"txt": "Continuar",
			"fn": null
		}
	}
	var config = {};
	if(data != null && data.hasOwnProperty('ok')){
		var ok = parseInt(data.ok, 10);
		switch(ok){
			case 1:
				exito = true; 
				break;	
			case 0:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>Problemas al procesar tu solicitud. Intente nuevamente.';
				break;
			case -1:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>Datos incorrectos. Intente nuevamente.';
				break;
			case -2:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>Tuvimos problemas al identificar tu usuario, inicie sesión nuevamente.';
				botones = {
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
				}
				break;
			case -3:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>No recibimos ningún dato. Intente nuevamente.';
				break;
			case -4:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>Debe validar que usted no es un robot.';
				break;
			case -5:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>El usuario actualmente se encuentra registrado, intenta con otro o recupera tu contraseña para acceder.';
				break;
			case -6:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>El usuario ingresado ya se encuentra registrado, intenta con otro.';
				break;
			case -7:
				var error = new Array();
				var error_txt = '';
				if(data.hasOwnProperty('error')){
					for(x in data.error){ error_txt += data.error[x] + '.<br>'; }
				}					
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div><p><b>Problemas al procesar los datos.</b></p>' + error_txt;
				break;
			case -8:
				html = '<div class="align-center big margin-yb"><b>Mensaje</b></div>No se realizó ningún cambio en la información.';
				break;
			case -9:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>Usuario y contraseña no coinciden. Intente nuevamente.';
				break;
			default:
				html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>Problemas al comunicarnos con el servidor. Intente nuevamente.';
				break;
		}
	} else { 
		html = '<div class="align-center big margin-yb"><b>Advertencia</b></div>Problemas al comunicarnos con el servidor. Intente nuevamente.';
	}
	if(html != ''){
		lightbox_abrir(html, botones, config);
	}
	return exito;
}

function ajax_progress(pct, ele){
	var html = "";
	if(pct < 100){ 
		html = '<div class="align-center">Enviando archivo:<br><b>'+ pct + '%</b></div>'; 
	} else { 
		html = '<div class="align-center">Guardando archivo.<br>Puede tardar un tiempo.</div>'; 
	}
	$(ele).html(html)
}


function ajax_archivos(pos, data, files, url, callback, avisar){
	if(pos == 0){ ajax_ok = 0; }
	
	if(pos < files.length){
		
		var datos = new FormData();
		for (var key in data){ datos.append(key, data[key]); }	
		datos.append("name", files[pos].name);
		datos.append("file", files[pos].file);
		datos.append("index", files[pos].index);
		datos.append("key", files[pos].key);
		var fun = function(respuesta){
			if(
				respuesta != null && 
				respuesta.hasOwnProperty('ok') && 
				parseInt(respuesta.ok, 10) == 1
			){
				ajax_ok++;
			}
			ajax_archivos(++pos, data, files, url, callback);
		}
		
		ajax_enviar(
			datos, 
			url, 
			{
				"ok" : fun,
				"err" :  fun
			}, 
			{
				"file": true,
				"ligthbox" : false,
			}
		);
		
		lightbox_abrir(
			'<div class="align-center">Enviando archivo <b>' + (pos + 1) + ' de ' + files.length + '</b>.</div><div class="estatus" align="center">--<br>--</div>', 
			{}, 
			{}
		);
		
	} else {
		var respuesta = {
			"total": files.length,
			"ok": ajax_ok,
			"msj": "Se han subido <b>" + ajax_ok + " de " + files.length + " archivo" + ((files.length != 1)?"s":"") + "</b>."	
		}
		if(avisar){
			lightbox_abrir(
				'<div class="align-center">' + respuesta["msj"] + '</div>', 
				{
					"aceptar" : {
						"txt": "Ok",
						"fn": function(){ 
							lightbox_cerrar();
							callback(respuesta); 
						}
					}	
				}, 
				{}
			);
		} else {
			callback(respuesta); 
		}
	}
}