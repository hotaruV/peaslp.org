function tablaJSON(config){
	this.tabla = null;
	this.obj = null;
	this.base = (config.hasOwnProperty('base'))?config["base"]:null; 
	this.columns = (config.hasOwnProperty('columns'))?config["columns"]:[]; 
	this.columns_type = (config.hasOwnProperty('columns_type'))?config["columns_type"]:{}; 
	this.columns_ver = (config.hasOwnProperty('columns_ver'))?config["columns_ver"]:{}; 
	
	this.arr = (config.hasOwnProperty('arr'))?config["arr"]:[];
	this.foreign = (config.hasOwnProperty('foreign'))?config["foreign"]:[];
	this.permisos = (config.hasOwnProperty('permissions'))?config["permissions"]:{
		"create" : ["1"],
		"read" : ["1"],
		"update" : ["1"],
		"delete" : ["1"]
	};
	
	this.tabla_orden = (config.hasOwnProperty('tabla_orden'))?config["tabla_orden"]:[ 0, "asc" ];
	
	this.ajax = (config.hasOwnProperty('ajax'))?config["ajax"]:{
		"save" : "tablaJSON.php",
		"file" : "tablaJSONFile.php",
		"other" : "tablaJSON.php",
		"loadData" : "tablaJSON.php"
	};
	this.txt = {
		"activar" : {
			"1": "activar",
			"0": "desactivar"
		},
		"activado" : {
			"0": "desactivado",
			"1": "activado"
		}
	}
	this.onEvent = (config.hasOwnProperty('onEvent'))?config["onEvent"]:{
		"update" : null
	};
}

tablaJSON.prototype.resize = function() {
	var instancia = this;
	setTimeout(function(){ 
		scripts_resize();
	}, 100);
}

tablaJSON.prototype.init = function() {
	var instancia = this;
	instancia.forma();
	instancia.table();

	$("ul.nav.int a").each(function(index, element) {
        $(this).unbind("click").bind("click", function(){
			instancia.nav($(this).attr("data-view"));
			return false;
		});
    });
}

tablaJSON.prototype.nav = function(vista){
	var instancia = this;
	$(".view.datos, .view.formulario").hide();
	$("ul.nav.int a").removeClass("activo");
	switch(vista){
		case "datos":
			ele = ".view.datos";
			break;
		case "forma":
			ele = ".view.formulario";
			instancia.forma();
			$('html, body').animate({
				scrollTop: $(ele).offset().top
			}, 'fast');
			break;
		case "ver":
			ele = ".view.ver";
			$('html, body').animate({
				scrollTop: $(ele).offset().top
			}, 'fast');
			break;
	}
	$(ele).show();
	$('ul.nav.int a[data-view="' + vista + '"]').addClass("activo");
	instancia.resize();
}

tablaJSON.prototype.forma = function(){
	var instancia = this;
	this.obj = null;
	this.arr = form_clean(instancia.arr);
	form_init(instancia.arr);
	
	$("#btn_guardar").unbind('click').bind('click', function(){
		instancia.validar();
		return false;
	});	
	$("#btn_limpiar").unbind('click').bind('click', function(){
		instancia.forma();
		return false;
	});	
}

tablaJSON.prototype.validar = function(){
	var instancia = this;
	
	respuesta = form_validar(instancia.arr);
	if(respuesta.i == 0){ 
		instancia.servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics(instancia.base, 'validar', 'error');
		}
	}
}

tablaJSON.prototype.servicio = function(valores){
	var instancia = this;

	event_google_analytics(instancia.base, 'servicio', 'iniciar');	
	var properties = {};
	var callbacks = {};

	var action = "ins";
	if(instancia.obj != null){ 
		properties["id" + instancia.base] = instancia.obj["id" + instancia.base];
		action = "upd";
	}
	properties["action"] = action;
	
	valores = form_input_valores(valores, instancia.arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		properties[x] = valor; 
	}
	callbacks["ajax"] = instancia.ajax["save"];
	callbacks["ok"] = function(respuesta){		
		event_google_analytics(instancia.base, 'servicio', 'ok');
		
		var funcion = function(response){
			var html = '<div align="center"><b>Se guardo la información correctamente</b></div>';
			if(response != null && response.hasOwnProperty('msj')){
				if(response["ok"] != response["total"]){ 
					html = '<div align="center"><p><b>Se guarda la información pero con los siguientes errores:</b></p></div>' + '<p>' + response["msj"] + '</p>';
				}
			}
			lightbox_abrir(
				html, 
				{
					"aceptar" : {
						"txt": "Ok",
						"fn": function(){ 
							instancia.forma();
							instancia.table();	
						}
					}	
				}, 
				{}
			);
		}
		var files = form_input_file_enviar(instancia.arr);
		if(Object.keys(files).length > 0){
			var data = {};
			if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
				data["id"] = sesion_data["id"]; 
				data["token"] = sesion_data["token"]; 
				data["dispositivo"] = sesion_data["dispositivo"]; 
				data["perfil"] = sesion_data["perfil"]; 
			} else {
				data["token"] = "";
			}
			
			data["base"] = instancia.base;
			data["id" + instancia.base] = respuesta.id
			data["action"] = 'upload';
			data["base"] = instancia.base;
			data["base_arr"] = "indicadores";
			ajax_archivos(0, data, files, url_sitio + "ajax/sitio/" + instancia.ajax["file"], funcion, false);
		} else { funcion(null); }		
	};
	instancia.ajax_enviar(properties, callbacks);
}

tablaJSON.prototype.get = function(id, callback){
	var instancia = this;

	if(!sesion_permisos(instancia.permisos["read"])){ return false; }
	
	var properties = {};
	var callbacks = {};
	
	properties["action"] = "get";
	properties["id" + instancia.base] = id;
	
	callbacks["ajax"] = instancia.ajax["other"];
	callbacks["ok"] = function(respuesta){
		event_google_analytics(instancia.base, 'get', 'ok');
		instancia.nav("forma");
		if(callback != null  && typeof callback === 'function') { callback(respuesta); }
	};
	
	instancia.ajax_enviar(properties, callbacks);
}

tablaJSON.prototype.active = function(id, status, callback){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["create"])){ return false; }

	var properties = {};
	var callbacks = {};

	properties["action"] = "act";
	properties["id" + instancia.base] = id;
	properties["status"] = status;

	callbacks["ajax"] = instancia.ajax["other"];
	callbacks["ok"] = function(respuesta){
		event_google_analytics(instancia.base, 'act', 'ok');
		var html = '<div align="center"><b>Se ha ' + instancia.txt.activado[status] + ' la información correctamente</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						instancia.forma();
						instancia.table();	
						if(callback != null  && typeof callback === 'function') { callback(); }
					}
				}	
			}, 
			{}
		);
	};

	instancia.ajax_enviar(properties, callbacks);	
}

tablaJSON.prototype.delete = function(id, callback){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["delete"])){ return false; }

	var properties = {};
	var callbacks = {};

	properties["action"] = "del";
	properties["id" + instancia.base] = id;
	
	callbacks["ajax"] = instancia.ajax["other"];
	callbacks["ok"] = function(respuesta){
		event_google_analytics(instancia.base, 'del', 'ok');
		var html = '<div align="center"><b>Se elimino la información correctamente</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						instancia.forma();
						instancia.table();	
						if(callback != null  && typeof callback === 'function') { callback(); }
					}
				}	
			}, 
			{}
		);
	};

	instancia.ajax_enviar(properties, callbacks);	
}

tablaJSON.prototype.loadData = function(action, input, type, vars, callback, columns){
	var instancia = this;	
	var base = instancia.base;

	var properties = {};
	var callbacks = {};

	properties["action"] = action;

	if(vars !== undefined && vars != null  && typeof vars == "object") {
		for(x in vars){ 
			//properties[x] = vars[x]; 
			
			var valor = vars[x]; 
			if(valor != null && valor.constructor === Object){ 
				valor = JSON.stringify(valor); 
			} else if(Array.isArray(valor)){
				valor = JSON.stringify(valor);	
			}
			properties[x] = valor;
		}
	}

	if(action == "filter"){
		properties["col"] = columns;
	}

	callbacks["ajax"] = instancia.ajax["loadData"];
	callbacks["ok"] = function(data){
		var values = [];
		if(type == "data"){
			for(var i in data[base]){
				values.push(data[base][i]); 
			}
		} else if(type == "select"){
			$(input + ' option:not(:first)').remove();
			for(var i in data[base]){
				$(input).append('<option value="' + data[base][i]["id" + base] + '">' + data[base][i][base + '_data'][base] + '</option>');
				values.push(data[base][i]); 
			}
			
			var attr = $(input).attr('data-value');
			if (typeof attr !== 'undefined' && attr !== false && attr !== "") {
				$(input).val(attr); 
			}
			
		} else if(type == "tokens"){
			for(var i in data[base]){
				var str = data[base][i][base + '_data'][base];
				if(columns !== undefined && columns != null  && typeof columns == "object") {
					str = { "id" : data[base][i]["id" + base] };
					for(var j in columns){
						str["name" + (( j == 0 )?'':j)] = data[base][i][base + '_data'][columns[j]];
					}
				}
				values.push(str); 
			}
		} else if(type == "radio" || type == "checkbox"){
			var html = '';
			for(var i in data[base]){
				data[base][i][base + '_data'][base]
				html += '<label> <input type="radio" name="input_' + input + '" value="' + data[base][i]["id" + base] + '" /> ' + data[base][i][base + '_data'][base] + '</label>';

				values.push({ 
					"id" : data[base][i]["id" + base],
					"name" : data[base][i][base + '_data'][base]
				}); 
			}
			$('#div_' + input).html(html);
		}
		if(callback != null  && typeof callback === 'function') { callback(values); }
	};
	
	instancia.ajax_enviar(properties, callbacks);
}

tablaJSON.prototype.ajax_enviar = function(properties, callbacks){
	var instancia = this;	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	
	data.append("base", instancia.base);
	if(properties !== undefined && properties != null  && typeof properties == "object") {
		for(x in properties){ 
			data.append(x, properties[x]); 
		}
	}
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/" + callbacks["ajax"],
		{
			"ok" : callbacks["ok"],
		},
		{}
	);
}

tablaJSON.prototype.table = function(){
	var instancia = this;
	instancia.nav("datos");	
	if(!sesion_permisos(instancia.permisos["read"])){ return false; }

	var columnas = [];
	columnas.push({ data: 'id' + instancia.base, title: "ID", "orderable": true, className: "dt-head-center dt-body-left" });
	for(i in instancia.columns){
		for(j in instancia.arr){
			var columna = instancia.arr[j]
			if(instancia.columns[i] == columna['key']){
				columnas.push(instancia.table_data_column(columna, j));		
			}
		}
	}
	if(instancia.base == "usuario"){		
		//columnas.push({ data: 'municipio', title: "Municipio", "orderable": false, className: "dt-head-center dt-body-left" });
	}
	
	columnas.push({ data: 'acciones', title: "Acciones", "orderable": false, className: "dt-head-center dt-body-center no_wrap" });
		
	if(instancia.tabla != null){ 	
		instancia.tabla.clear();
		instancia.tabla.destroy();
		$('#table_data').empty();
		instancia.tabla = null;
	}

	instancia.tabla = $('#table_data').DataTable({
		"language": datatable_lang,
		"pageLength": 50,
		responsive: true,
		columns: columnas,
		ordering: true,
		//order: [[ 0, "asc" ]],
		order: [instancia.tabla_orden],
		processing: true,
		serverSide: true,
		serverMethod: 'post',
		"fnDrawCallback": function(){
			instancia.resize();
		},
		"fnInitComplete": function(){
			instancia.resize();
		},
		ajax: {
			url: url_sitio + "ajax/sitio/" + instancia.ajax["other"],
			method: "POST",
			data: {
				"action" : "datatable", 
				"id" : sesion_data["id"],
				"token" : sesion_data["token"],
				"dispositivo" : sesion_data["dispositivo"],
				"perfil" : sesion_data["perfil"],
				"base" : instancia.base,
				"cols" : JSON.stringify(instancia.columns),
				"cols_type" : JSON.stringify(instancia.columns_type),
				"foreign" : JSON.stringify(instancia.foreign)
			},
		}
	});	
	
	$('#table_data').off('click', '.a_activo');
	$('#table_data').off('click', '.a_ver');
	$('#table_data').off('click', '.a_editar');
	$('#table_data').off('click', '.a_eliminar');
	$('#table_data').on('click', '.a_ver', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		instancia.consultar(id);
		return false;
	});
	$('#table_data').on('click', '.a_editar', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		instancia.editar(id, txt);
		return false;
	});
	$('#table_data').on('click', '.a_activo', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		var estatus = $(this).attr("data-status");
		instancia.activar(id, txt, estatus);
		return false;
	});
	$('#table_data').on('click', '.a_eliminar', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		instancia.eliminar(id, txt);
		return false;
	});
	instancia.resize();
}

tablaJSON.prototype.table_data_column = function(columna, index){
	var instancia = this;
	var tipo = "string";
	if(columna['validar'] == "entero"){
		
	} else if(columna['validar'] == "numero"){
		tipo = "num";
	}
	
	return { 
		"data": columna['key'], 
		"title": columna['nombre'], 
		"type":tipo,
		"className": (columna.hasOwnProperty("className")?columna['className']:"dt-head-center dt-body-left"),
		"render": function(data, type, row) {
			return instancia.table_data_render({
				'data' : data, 
				'type' : type, 
				'row' : row,
				'index' : index
			});
		},
	}
}

tablaJSON.prototype.table_data_render = function(data){
	var instancia = this;
	var columna = instancia.arr[data["index"]]

	if(columna.hasOwnProperty('valores') && columna["valores"] != null  && typeof columna["valores"] == "object"){
		if(data["data"] != null && data["data"].constructor === Object){ 
			if( columna["tipo"] == "tokens" || columna["tipo"] == "radio" || columna["tipo"] == "check" ){
				var str = [];
				for(k in data["data"]["v"]){		
					var index = columna["valores"].findIndex(function(elemento){ 
						if(data["data"]["v"][k].constructor === Object){
							return elemento.id === data["data"]["v"][k]["id"]; 
						} else {
							return elemento.id === data["data"]["v"][k]; 
						}
					});
					if(columna["valores"].hasOwnProperty(index)){
						str.push(columna["valores"][index]["name"]); 
					}
					
				}
				data.data = str.join(', ');
			}
		} 
	} else {
		
		if(columna['validar'] == "entero"){
			
		} else if(columna['validar'] == "numero"){
			data.data = parseFloat(data["data"]);
		}
		
	}
	return data.data;
}

tablaJSON.prototype.consultar = function(id){
	var instancia = this;
	instancia.get(id, function(data){
		instancia.nav("ver");
		
		$("#view_data").html("");
		instancia.obj = data[instancia.base];
		for(x in instancia.obj[instancia.base + '_data']){
			var index = instancia.columns_ver.findIndex(function(elemento){ return elemento.key === x; });
			if(index >= 0){ 
				$("#view_data").append('<div class="col margin-yb"><b class="big">' + instancia.columns_ver[index].nombre + ': </b><br>' + instancia.obj[instancia.base + '_data'][x] + '</div>');
			}
		}
		
		instancia.resize();
	});
}

tablaJSON.prototype.editar = function(id, txt){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["create"])){ return false; }

	lightbox_abrir('<h1>Editar</h1>¿Estas seguro de editar el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b>', {
		"aceptar" : {
			"txt": "Editar",
			"fn": function(){
				instancia.get(id, function(data){
					lightbox_cerrar();
					instancia.forma();
					
					instancia.obj = data[instancia.base];

					if(instancia.onEvent["update"] != null  && typeof instancia.onEvent["update"] === 'function') {
						instancia.onEvent["update"]();
					}

					for(x in instancia.obj[instancia.base + '_data']){
						var index = instancia.arr.findIndex(function(elemento){ return elemento.key === x; });
						if(index >= 0){ 
							if(instancia.arr[index]['tipo'] == "tokens"){ 
								var str = {v:[]};
								for(k in instancia.obj[instancia.base + '_data'][x]["v"]){
									var index2 = instancia.arr[index]["valores"].findIndex(function(elemento){ 
										return elemento.id === instancia.obj[instancia.base + '_data'][x]["v"][k]["id"]; 
									});
									if(index2 >= 0){ 
										str.v.push(instancia.arr[index]["valores"][index2]); 
									}
								}
								instancia.arr[index]["value"] = str;
							} else {
								instancia.arr[index]["value"] = instancia.obj[instancia.base + '_data'][x]; 
							}
						}
					}
					form_init(instancia.arr);
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});
}

tablaJSON.prototype.eliminar = function(id, txt){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["delete"])){ return false; }
	lightbox_abrir('<h1>Eliminar</h1><p>¿Estas seguro de eliminar el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b></p>Sí eliminas este registro no podrás recuperarlo posteriormente.', {
		"aceptar" : {
			"txt": "Eliminar",
			"fn": function(){
				instancia.delete(id, function(){
					
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});	
}
tablaJSON.prototype.activar = function(id, txt, estatus){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["create"])){ return false; }
	var capitalize = instancia.txt.activar[estatus];
	capitalize = capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
	lightbox_abrir('<h1>' + capitalize + '</h1>¿Estas seguro de <b>' + instancia.txt.activar[estatus] + '</b> el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b>', {
		"aceptar" : {
			"txt": capitalize,
			"fn": function(){
				instancia.active(id, estatus, function(){
					
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});	
}