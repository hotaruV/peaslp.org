var tablaJSON_tabla = null;
var tablaJSON_base = null;
var tablaJSON_columns = [];
var tablaJSON_foreign = [];
var tablaJSON_permisos = [];
var tablaJSON_arr = [];
var tablaJSON_obj = null;
var tablaJSON_ajax = null;
var tablaJSON_txt = {
	"activar" : {
		"1": "activar",
		"0": "desactivar"
	},
	"activado" : {
		"0": "desactivado",
		"1": "activado"
	}
}

function tablaJSON_init(prop){
	tablaJSON_base = prop["base"];
	tablaJSON_columns = prop["columns"];
	tablaJSON_arr = prop["arr"];

	if(prop.hasOwnProperty('foreign') && prop["foreign"] != null){
		tablaJSON_foreign = prop["foreign"]; 
	}
	if(prop.hasOwnProperty('permissions') && prop["permissions"] != null){
		tablaJSON_permisos = prop["permissions"]; 
	} else {
		tablaJSON_permisos = {
			"create" : ["1"],
			"read" : ["1"],
			"update" : ["1"],
			"delete" : ["1"]
		};
	}
	if(prop.hasOwnProperty('ajax') && prop["ajax"] != null){
		tablaJSON_ajax = prop["ajax"]; 
	} else {
		tablaJSON_ajax = "tablaJSON.php";
	}

	console.log("tablaJSON_init", tablaJSON_ajax);
	
	$("ul.nav.int a").each(function(index, element) {
        $(this).unbind("click").bind("click", function(){
			tablaJSON_nav($(this).attr("data-view"))
			return false;
		});
    });
	
	tablaJSON_forma();
	tablaJSON_table();
}

function tablaJSON_resize(){
	scripts_resize();
}

function tablaJSON_nav(vista){
	$(".view.datos, .view.formulario").hide();
	$("ul.nav.int a").removeClass("activo");
	switch(vista){
		case "datos":
			ele = ".view.datos";
			break;
		case "forma":
			ele = ".view.formulario";
			tablaJSON_forma();
			break;
	}
	$(ele).show();
	$('ul.nav.int a[data-view="' + vista + '"]').addClass("activo");
	tablaJSON_resize();
}

function tablaJSON_forma(){
	tablaJSON_obj = null;
	tablaJSON_arr = form_clean(tablaJSON_arr);
	form_init(tablaJSON_arr);
	
	$("#btn_guardar").unbind('click').bind('click', function(){
		tablaJSON_validar();
		return false;
	});	
	$("#btn_limpiar").unbind('click').bind('click', function(){
		tablaJSON_forma();
		return false;
	});	
	
		
	
}

function tablaJSON_validar(){
	respuesta = form_validar(tablaJSON_arr);
	if(respuesta.i == 0){ 
		tablaJSON_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics(tablaJSON_base, 'validar', 'error');
		}
	}
}

function tablaJSON_servicio(valores){
	event_google_analytics(tablaJSON_base, 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	
	data.append("base", tablaJSON_base);
	if(tablaJSON_obj != null){ 
		data.append("id" + tablaJSON_base, tablaJSON_obj["id" + tablaJSON_base]); 
		data.append("action", "upd");
	} else {
		data.append("action", "ins"); 
	}
	
	valores = form_input_valores(valores, tablaJSON_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	var funcion = function(respuesta){		
		event_google_analytics(tablaJSON_base, 'servicio', 'ok');
		var html = '<div align="center"><b>Se guardo la información correctamente</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						tablaJSON_forma();
						tablaJSON_table();	
					}
				}	
			}, 
			{}
		);		
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/" + tablaJSON_ajax, 
		{
			"ok" : funcion, 
		},
		{}
	);
}

function tablaJSON_get(id, callback){
	if(!sesion_permisos(tablaJSON_permisos["read"])){ return false; }
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	data.append("base", tablaJSON_base);
	data.append("id" + tablaJSON_base, id);
	data.append("action", "get");
	
	var funcion = function(respuesta){
		event_google_analytics(tablaJSON_base, 'get', 'ok');
		tablaJSON_nav("forma");
		if(callback != null  && typeof callback === 'function') { callback(respuesta); }
	};
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/" + tablaJSON_ajax, 
		{
			"ok" : funcion, 
		},
		{}
	);
}
function tablaJSON_active(id, status, callback){
	if(!sesion_permisos(tablaJSON_permisos["create"])){ return false; }
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	data.append("base", tablaJSON_base);
	data.append("id" + tablaJSON_base, id);
	data.append("action", "act");
	data.append("status", status);
	
	var funcion = function(respuesta){
		event_google_analytics(tablaJSON_base, 'del', 'ok');
		var html = '<div align="center"><b>Se ha ' + tablaJSON_txt.activado[status] + ' la información correctamente</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						tablaJSON_forma();
						tablaJSON_table();	
						if(callback != null  && typeof callback === 'function') { callback(); }
					}
				}	
			}, 
			{}
		);
	};
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/" + tablaJSON_ajax, 
		{
			"ok" : funcion, 
		},
		{}
	);
}

function tablaJSON_delete(id, callback){
	if(!sesion_permisos(tablaJSON_permisos["delete"])){ return false; }
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	data.append("base", tablaJSON_base);
	data.append("id" + tablaJSON_base, id);
	data.append("action", "del");
	
	var funcion = function(respuesta){
		event_google_analytics(tablaJSON_base, 'del', 'ok');
		var html = '<div align="center"><b>Se elimino la información correctamente</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						tablaJSON_forma();
						tablaJSON_table();	
						if(callback != null  && typeof callback === 'function') { callback(); }
					}
				}	
			}, 
			{}
		);
	};
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/" + tablaJSON_ajax, 
		{
			"ok" : funcion, 
		},
		{}
	);
}

function tablaJSON_table(){
	tablaJSON_nav("datos");	
	if(!sesion_permisos(tablaJSON_permisos["read"])){ return false; }

	var columnas = [];
	for(i in tablaJSON_columns){
		for(j in tablaJSON_arr){
			var columna = tablaJSON_arr[j]
			if(tablaJSON_columns[i] == columna['key']){
				columnas.push(tablaJSON_table_data_column(columna, j));		
			}
		}
	}
	columnas.push({ data: 'acciones', title: "Acciones", "orderable": false, className: "dt-head-center dt-body-center no_wrap" });
		
	if(tablaJSON_tabla != null){ 	
		tablaJSON_tabla.clear();
		tablaJSON_tabla.destroy();
		$('#table_data').empty();
		tablaJSON_tabla = null;
	}

	tablaJSON_tabla = $('#table_data').DataTable({
		"language": datatable_lang,
		"pageLength": 50,
		responsive: true,
		columns: columnas,
		order: [[ 1, "desc" ]],
		processing: true,
		serverSide: true,
		serverMethod: 'post',
		"fnDrawCallback": function(){
			tablaJSON_resize();
		},
		"fnInitComplete": function(){
			tablaJSON_resize();
		},
		ajax: {
			url: url_sitio + "ajax/sitio/" + tablaJSON_ajax,
			method: "POST",
			data: {
				"action" : "datatable", 
				"id" : sesion_data["id"],
				"token" : sesion_data["token"],
				"dispositivo" : sesion_data["dispositivo"],
				"perfil" : sesion_data["perfil"],
				"base" : tablaJSON_base,
				"cols" : JSON.stringify(tablaJSON_columns),
				"foreign" : JSON.stringify(tablaJSON_foreign)
			},
		}
	});	
	
	$('#table_data').off('click', '.a_activo');
	$('#table_data').off('click', '.a_ver');
	$('#table_data').off('click', '.a_editar');
	$('#table_data').off('click', '.a_eliminar');
	$('#table_data').on('click', '.a_ver', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		tablaJSON_consultar(id);
		return false;
	});
	$('#table_data').on('click', '.a_editar', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		tablaJSON_editar(id, txt);
		return false;
	});
	$('#table_data').on('click', '.a_activo', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		var estatus = $(this).attr("data-status");
		tablaJSON_activar(id, txt, estatus);
		return false;
	});
	$('#table_data').on('click', '.a_eliminar', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		tablaJSON_eliminar(id, txt);
		return false;
	});
	tablaJSON_resize();
}

function tablaJSON_table_data_column(columna, index){
	return { 
		"data": columna['key'], 
		"title": columna['nombre'], 
		"className": (columna.hasOwnProperty("className")?columna['className']:"dt-head-center dt-body-left"),
		"render": function(data, type, row) {
			return tablaJSON_table_data_render({
				'data' : data, 
				'type' : type, 
				'row' : row,
				'index' : index
			});
		}
	}
}

function tablaJSON_table_data_render(data){
	var columna = tablaJSON_arr[data["index"]]
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
	}
	return data.data;
}

function tablaJSON_consultar(id){
	tablaJSON_get(id, function(data){
		
	});
}

function tablaJSON_editar(id, txt){
	if(!sesion_permisos(tablaJSON_permisos["create"])){ return false; }
	lightbox_abrir('<h1>Editar</h1>¿Estas seguro de editar el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b>', {
		"aceptar" : {
			"txt": "Editar",
			"fn": function(){
				tablaJSON_get(id, function(data){
					lightbox_cerrar();
					tablaJSON_forma();
					
					tablaJSON_obj = data[tablaJSON_base];

					for(x in tablaJSON_obj[tablaJSON_base + '_data']){
						var index = tablaJSON_arr.findIndex(function(elemento){ return elemento.key === x; });
						if(index >= 0){ 
							if(tablaJSON_arr[index]['tipo'] == "tokens"){ 
								var str = {v:[]};
								for(k in tablaJSON_obj[tablaJSON_base + '_data'][x]["v"]){
									var index2 = tablaJSON_arr[index]["valores"].findIndex(function(elemento){ 
										return elemento.id === tablaJSON_obj[tablaJSON_base + '_data'][x]["v"][k]["id"]; 
									});
									if(index2 >= 0){ 
										str.v.push(tablaJSON_arr[index]["valores"][index2]); 
									}
								}
								tablaJSON_arr[index]["value"] = str;
							} else {
								tablaJSON_arr[index]["value"] = tablaJSON_obj[tablaJSON_base + '_data'][x]; 
							}
						}
					}
					form_init(tablaJSON_arr);
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});
}

function tablaJSON_eliminar(id, txt){
	if(!sesion_permisos(tablaJSON_permisos["delete"])){ return false; }
	lightbox_abrir('<h1>Eliminar</h1><p>¿Estas seguro de eliminar el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b></p>Sí eliminas este registro no podrás recuperarlo posteriormente.', {
		"aceptar" : {
			"txt": "Eliminar",
			"fn": function(){
				tablaJSON_delete(id, function(){
					
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});	
}
function tablaJSON_activar(id, txt, estatus){
	if(!sesion_permisos(tablaJSON_permisos["create"])){ return false; }
	var capitalize = tablaJSON_txt.activar[estatus];
	capitalize = capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
	lightbox_abrir('<h1>' + capitalize + '</h1>¿Estas seguro de <b>' + tablaJSON_txt.activar[estatus] + '</b> el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b>', {
		"aceptar" : {
			"txt": capitalize,
			"fn": function(){
				tablaJSON_active(id, estatus, function(){
					
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});	
}


function tablaJSON_loadData(base, action, input, type, vars, callback, columns){
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	
	data.append("base", base);
	data.append("action", action); 

	if(vars !== undefined && vars != null  && typeof vars == "object") {
		for(x in vars){ 
			data.append(x, vars[x]); 
		}
	}

	if(action == "filter"){
		data.append('col', columns); 
	}
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/" + "tablaJSON.php", 
		{
			"ok" : function(data){
				var values = [];
				if(type == "select"){
					$(input + ' option:not(:first)').remove();
					for(var i in data[base]){
						$(input).append('<option value="' + data[base][i]["id" + base] + '">' + data[base][i][base + '_data'][base] + '</option>');
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
			}, 
		},
		{}
	);
}