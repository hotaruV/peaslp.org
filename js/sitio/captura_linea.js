var captura_linea_formulario_arr = null;
var captura_linea_captura = null;
var captura_linea_revision = null;
var captura_linea_datos = {};
var captura_linea_idlinea = null;

function captura_linea_ready(){
	$('#filtros').hide();
	$('#div_estatus').hide();
	
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1, 4])){
			var _tabla_periodos = new tablaJSON({"base": "periodo", "ajax" : {
				"save" : "tablaJSON.php",
				"other" : "tablaJSON.php",
				"loadData" : "periodos_activos.php",
			}});
			_tabla_periodos.loadData("all", "#input_periodo", "select", {
				"orden": [
					{ 
						"col" : "inicia", 
						"tipo" : "fecha", 
						"dir" : "asc" 
					}
					
				]
			});
			$("#input_periodo").unbind("change.f").bind("change.f", function(){
				$("#input_filtro_ejes").val("");
				$("#input_filtro_plazos").val("");
				captura_linea_periodo($(this).val());
			});
		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	sesion_verificar_no = function(){
		
	}
}
function captura_linea_load(){
	captura_linea_resize();
}
function captura_linea_resize(){
	scripts_resize();
}

function captura_linea_resize_(){
	captura_linea_resize();
	setTimeout(function(){
		captura_linea_resize();
	}, 200);
}


function captura_linea_periodo(periodo){
	if(periodo != ""){
		captura_linea_periodo_servicio(periodo);
		//$('#filtros').show();
	} else {
		$('#div_estatus').hide();
		$('#preguntas').html("");
		$('#filtros').hide();
	}
}

function captura_linea_periodo_servicio(periodo){
	var data = new FormData();
	data.append("id", sesion_data["id"]); 
	data.append("token", sesion_data["token"]); 
	data.append("dispositivo", sesion_data["dispositivo"]); 
	data.append("perfil", sesion_data["perfil"]);
	data.append("periodo", periodo); 

	var funcion = function(respuesta){		
		event_google_analytics('captura', 'periodo', 'ok');
		
		captura_linea_idlinea = null;
		captura_linea_formulario_arr = null;

		if(respuesta.hasOwnProperty("ejes") && respuesta.hasOwnProperty("ejes")){
			captura_linea_periodo_filtros("#input_filtro_ejes", respuesta.ejes, "data-eje");
		}
		if(respuesta.hasOwnProperty("plazos") && respuesta.hasOwnProperty("plazos")){
			captura_linea_periodo_filtros("#input_filtro_plazos", respuesta.plazos, "data-plazo");
		}
		
		captura_linea_captura = null;
		if(respuesta.hasOwnProperty("captura") && respuesta.captura.hasOwnProperty("captura_data")){
			captura_linea_captura = respuesta.captura.captura_data.lineas;
		}
		
		captura_linea_revision = null;
		if(respuesta.hasOwnProperty("revision") && respuesta.revision.hasOwnProperty("revision_data")){
			captura_linea_revision = respuesta.revision.revision_data.lineas;
		}
		
		$(".btn_filtro").each(function(index, element) {
			$(this).removeClass("activo");
		});
		
		$("#input_filtro_aprobado").val("");
		$("#input_filtro_estatus").val("");
		
		captura_linea_periodo_preguntas(respuesta);
		
		$("#btn_copiar").unbind("click.copiar").bind("click.copiar", function(){
			
			return false;
		});
		
		$("#btn_imprimir").unbind("click.imprimir").bind("click.imprimir", function(){
			var html = $('#form_captura').html();
			var css = '';
			
			var titulo = $('.seccion.navegacion .txt_perfil').html();
			
			var subtitulo = 'Líneas de acción';
			if($('#input_filtro_ejes').val() != ""){
				if(subtitulo != ''){ subtitulo += '<br>'; }
				subtitulo += ' Eje: ' + $('#input_filtro_ejes option:selected').text();
			}
			if($('#input_filtro_plazos').val() != ""){
				if(subtitulo != ''){ subtitulo += '<br>'; }
				subtitulo += ' Plazo: ' + $('#input_filtro_plazos option:selected').text()
			}
			
			if(subtitulo != ''){
				subtitulo = '<h2>' + subtitulo + '</h2>';
			}
			
			var fecha = new Date();
			var month = '' + (fecha.getMonth() + 1);
			var day = '' + fecha.getDate();
			var year = fecha.getFullYear();
			fecha = [year, month, day].join('-') + ' ' + [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()].join(':');	
			fecha = form_fecha(fecha);
			var fechas = '<h3>' + fecha.formato + '</h3>';
			
			var mywindow = window.open('', "_blank");
			mywindow.document.write('<html><head><title>' + titulo + '</title>' + css);
			mywindow.document.write('<style> body { color:#000; font-size:1em; font-weight:400; text-align:justify; } p { margin:0 auto 1em auto; } h1, h2, h3, h4 { padding:0; margin:0; line-height:1.05em; text-transform:none; color: #000; } h1{ font-size:2em; padding-bottom:1em; text-align:center; } h2{ font-size:1.5em; padding-bottom:0.75em; } h3{ font-size:1.5em; padding-bottom:0.75em; } h4 { font-size:1.5em; padding-bottom:0.75em; } .eje div b{ color:#000; font-size:1em; }  .eje div{ padding:2px 0px !important; } .pregunta { border-bottom: 1px solid #000; padding-top:15px; margin-top:15px; } .no_imprimirs{ display:none; } .col .col2{ height:auto !important; } </style>'); 
			mywindow.document.write('<script type="text/javascript">window.onload = function() { window.print(); window.close(); };</script>');
			mywindow.document.write('</head><body >');
			mywindow.document.write('<h1>' + titulo + '</h1>' + subtitulo + fechas + html);
			mywindow.document.write('</body></html>');
			mywindow.document.close(); // necessary for IE >= 10
			mywindow.focus(); // necessary for IE >= 10*/
			return false;
		});
	};
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/captura_lineas.php", 
		{
			"ok" : funcion, 
		},
		{}
	);
}

function captura_linea_periodo_preguntas(respuesta){
	$('#preguntas').html("");
	
	$('#div_estatus').hide();
	var lineas = respuesta.lineas;
	for(var i in lineas){
		var linea = lineas[i];

		var html = $(".machotes #pregunta_linea").html();
		var pregunta = $(html).appendTo('#preguntas');	
		$(pregunta).attr("data-id", linea.idlinea);
		$(pregunta).attr("data-eje", linea.linea_data.eje);
		$(pregunta).attr("data-plazo", linea.idplazo);
		$(pregunta).attr("data-captura", "false");
		$(pregunta).attr("data-aprobado", "0");
		$(pregunta).attr("data-estatus", "0");
		
		$(pregunta).find("b.big").html(linea.linea_data.linea);

		$(pregunta).find(".resumen").show();
		$(pregunta).find(".formulario").hide();

		$(pregunta).find(".detalles .eje").html('<div style=" padding:2px 5px;  background-color:' + linea.color + '; color:#FFF; margin-bottom:0.5em;"><b>' + linea.eje + '</b></div>');
		$(pregunta).find(".detalles .prioridad").text(linea.prioridad);
		$(pregunta).find(".detalles .plazo").text(linea.plazo);
		$(pregunta).find(".detalles .estrategia").text(linea.estrategia);

		$(pregunta).find(".resumen .porcentaje").text(0);
		
		$(pregunta).find(".resumen .a_retro .retro").text(0);
		$(pregunta).find(".resumen .a_retro").attr("data-id", linea.idlinea);

		$(pregunta).find(".resumen .a_ver").attr("data-id", linea.idlinea);
		$(pregunta).find(".resumen .a_capturar").attr("data-id", linea.idlinea);
		$(pregunta).find(".resumen .a_enviar").hide();
		
		$(pregunta).find(".resumen .cumplio").attr("data-cumplio", "0");

		captura_linea_periodo_preguntas_capturar(linea.idlinea);
		captura_linea_periodo_preguntas_retro(linea.idlinea);

		if(captura_linea_captura != null && captura_linea_captura.hasOwnProperty(linea.idlinea)){
			$(pregunta).attr("data-captura", "true");
			
			var temp = captura_linea_captura[linea.idlinea]["cumplio"]["v"][0];
			$(pregunta).find(".resumen .cumplio").attr("data-cumplio", temp);
			
			var cumplio = captura_generales_estatus(temp, captura_linea_captura[linea.idlinea]["cumplio"]["e"][temp]);
			$(pregunta).find(".resumen .cumplio").html(cumplio["cumplio_txt"]);
			$(pregunta).find(".detalles .estatus_captura").css("background-color", cumplio.color);
			$(pregunta).attr("data-estatus", cumplio.cumplio);
			
			$(pregunta).find(".resumen .porcentaje").text(cumplio["avance"]);
			$(pregunta).find(".resumen .descripcion").show();
			$(pregunta).find(".resumen .evidencia").show();
			
			$(pregunta).find(".resumen .descripcion").html(form_nl2br(captura_linea_captura[linea.idlinea]["descripcion"]));
			
			var html = '<ul>';
			var evidencia = captura_linea_captura[linea.idlinea]["evidencia"];
			for (zz in evidencia['v']) {
				var enlace = '#';
				if(evidencia.hasOwnProperty('l') && evidencia['l'].hasOwnProperty(zz) && evidencia['l'][zz] != null) { 
					html += '<li><a href="' + url_sitio + "files/lineas/" + evidencia['l'][zz] + '" target="_blank">' + evidencia['v'][zz] + '</a></li>'				
				}	
			}
			html += '</ul>';
			$(pregunta).find(".resumen .evidencia .listado").html(html);
			
		} else {
			$(pregunta).find(".resumen .cumplio").html('<b style="color:lightslategrey">No se ha iniciado la captura</b>');
			$(pregunta).find(".resumen .porcentaje").text(0);
			$(pregunta).find(".resumen .descripcion").hide();
			$(pregunta).find(".resumen .evidencia").hide();
			
			
		}
		
		if(captura_linea_revision != null && captura_linea_revision.hasOwnProperty(linea.idlinea) && captura_linea_revision[linea.idlinea].hasOwnProperty("actual")){
			$(pregunta).attr("data-revision", "true");
			var temp = captura_linea_revision[linea.idlinea]["actual"]["aprobo"]["v"][0];
			var aprobo = revision_generales_estatus(temp);
			$(pregunta).attr("data-aprobado", temp);
			$(pregunta).find(".resumen .evaluacion").html(aprobo.aprobo_txt);
			
			$(pregunta).find(".resumen .retro").text(Object.keys(captura_linea_revision[linea.idlinea]["historico"]).length);
			
			$(pregunta).find(".detalles .estatus_revision").css("background-color", aprobo.color);
			
		}
	}
	captura_linea_periodo_filtros_fn();
	captura_linea_resize_();
	
	$(".btn_filtro").each(function(index, element) {
    	$(this).unbind("click").bind("click", function(){
			var tipo = $(this).attr("data-tipo");
			var elemento = this;
			$('.btn_filtro[data-tipo="' + tipo + '"]').each(function(index, element) {
				if(element != elemento){
					$(this).removeClass("activo");
				}
			});
			$(this).toggleClass("activo");
			if($(this).hasClass("activo")){
				if(tipo == "aprobado"){
					$("#input_filtro_aprobado").val($(this).attr("data-value"));
				} else if(tipo == "estatus"){
					$("#input_filtro_estatus").val($(this).attr("data-value"));	
				}
			} else {
				if(tipo == "aprobado"){
					$("#input_filtro_aprobado").val("");
				} else if(tipo == "estatus"){
					$("#input_filtro_estatus").val("");	
				}
			}
			captura_linea_periodo_filtros_fn();
			captura_indicador_resize_();
		});
    });
}

function captura_linea_periodo_preguntas_ver(idlinea){
	$('.seccion #preguntas .pregunta .a_ver[data-id="' + idlinea + '"]').unbind("click.mostrar").bind("click.mostrar", function(){
		lightbox_abrir('<div class="light_pregunta"></div>', {
			"aceptar" : {
				"txt": "Cerrar",
				"fn": function(){
					
				}
			}
		}, {
			"size" : "grande"
		});
		var html = $(".machotes #pregunta_light").html(); 
		var pregunta = $(html).appendTo('#lightbox_caja .light_pregunta');	
		return false;
	});
}

function captura_linea_periodo_preguntas_capturar(idlinea){
	$('.seccion #preguntas .pregunta .a_capturar[data-id="' + idlinea + '"]').unbind("click.mostrar").bind("click.mostrar", function(){
		
		scripts_task_in_progress = true;
		
		captura_linea_idlinea = idlinea;

		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).find(".resumen").show();
			$(this).find(".formulario").hide();
			$(this).find(".formulario").html("");
		});

		$('.seccion #preguntas .pregunta[data-id="' + idlinea + '"] .resumen').hide();

		var html = $(".machotes #pregunta_formulario").html();
		$(html).appendTo('.seccion #preguntas .pregunta[data-id="' + idlinea + '"] .formulario');	
		$('.seccion #preguntas .pregunta[data-id="' + idlinea + '"] .formulario').show();
		captura_linea_resize();

		captura_linea_formulario_arr = [
			{"key":"cumplio", "nombre":"Se cumplio la línea de acción", "ele":'.pregunta[data-id="' + idlinea + '"] input[name="input_cumplio"]', "tipo": "radio", "validar": "entero", "opcional": false, "especificar": true, "especificar_validar": "porcentaje", "onChange":function(){
				switch( $('.pregunta[data-id="' + idlinea + '"] input[name="input_cumplio"]:checked').val() ){
					case "1":
						form_opcional(captura_linea_formulario_arr, "descripcion", true, true);	
						form_opcional(captura_linea_formulario_arr, "evidencia", true, true);	
						break;
					default:
						form_opcional(captura_linea_formulario_arr, "descripcion", false, true);	
						form_opcional(captura_linea_formulario_arr, "evidencia", false, true);	
						break;
				}
			}},
			{"key":"descripcion", "nombre":"Descripción", "ele":'.pregunta[data-id="' + idlinea + '"] #input_descripcion', "tipo": "textarea", "validar": "texto", "opcional": false},
			{"key":"evidencia", "nombre":"Evidencia", "ele":'.pregunta[data-id="' + idlinea + '"] #input_evidencia', "tipo": "file", "validar": "documento", "opcional": false,"callback": function(){ captura_linea_resize(); }, "url_files": "files/lineas/" }
		];

		if(captura_linea_captura != null && captura_linea_captura.hasOwnProperty(idlinea)){
			for(x in captura_linea_captura[idlinea]){
				var index = captura_linea_formulario_arr.findIndex(function(elemento){ return elemento.key === x; });
				if(index >= 0){ 
					captura_linea_formulario_arr[index]["value"] = captura_linea_captura[idlinea][x]; 
				}
			}
		}

		captura_linea_periodo_preguntas_forma();
		/*
		$('.seccion #preguntas .pregunta[data-id="' + idlinea + '"] .formulario').show('fast', function(){
			$('html, body').animate({
				scrollTop: $('.seccion #preguntas .pregunta[data-id="' + idlinea + '"]').offset().top
			}, 1000);
			captura_linea_resize();
		});
		*/
		captura_linea_resize();

		return false;
		
	});
}
function captura_linea_periodo_preguntas_forma(){
	form_init(captura_linea_formulario_arr);
	$("#btn_pregunta_guardar").unbind('click').bind('click', function(){
		captura_linea_periodo_preguntas_validar();
		return false;
	});	
	$("#btn_pregunta_regresar").unbind('click').bind('click', function(){
		
		scripts_task_in_progress = false;
		
		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).find(".resumen").show();
			$(this).find(".formulario").hide();
			$(this).find(".formulario").html("");
		});
		captura_linea_resize_();
		return false;
	});	
}

function captura_linea_periodo_preguntas_validar(){
	respuesta = form_validar(captura_linea_formulario_arr);
	if(respuesta.i == 0){ 
		captura_linea_periodo_preguntas_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<div class="align-center big margin-yb"><b>Por favor, ingrese lo siguiente:</b></div>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('captura_formulario', 'validar', 'error');
		}
	}
}

function captura_linea_periodo_preguntas_servicio(valores){
	event_google_analytics('captura_linea_formulario', 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}

	data.append("idlinea", captura_linea_idlinea);
	data.append("idperiodo", $("#input_periodo").val());
	valores = form_input_valores(valores, captura_linea_formulario_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/captura_lineas_servicio.php", 
		{
			"ok" : function(respuesta){
				event_google_analytics('captura_linea_formulario', 'servicio', 'ok');
				scripts_task_in_progress = false;
				
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
									captura_linea_periodo($("#input_periodo").val());
								}
							}	
						}, 
						{}
					);
				}
				
				var files = form_input_file_enviar(captura_linea_formulario_arr);
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
					data["action"] = 'upload';
					data["base"] = 'captura';
					data["base_arr"] = 'lineas';
					
					data["idcaptura"] = respuesta.id;
					data["idperiodo"] = $("#input_periodo").val();
					data["idindicador"] = captura_linea_idlinea;
					
					ajax_archivos(0, data, files, url_sitio + "ajax/sitio/captura_archivos.php", funcion, false);
				} else { funcion(null); }
				
			}, 
		},
		{}
	);	
}

function captura_linea_periodo_preguntas_retro(idlinea){
	$('.seccion #preguntas .pregunta .a_retro[data-id="' + idlinea + '"]').unbind("click.mostrar").bind("click.mostrar", function(){
		
		var html = '';
		if(captura_linea_revision != null && captura_linea_revision.hasOwnProperty(idlinea) && captura_linea_revision[idlinea].hasOwnProperty("historico")){
			for(x in captura_linea_revision[idlinea]["historico"]){
				html += '<div style="margin-bottom:1em; border-bottom:1px solid #ccc;">'
				var historia = captura_linea_revision[idlinea]["historico"][x];				
				var temp = historia["aprobo"]["v"][0];
				var aprobo = revision_generales_estatus(temp);
				html += '<p>' + aprobo.aprobo_txt + '</p>';
				if(historia["retroalimentacion"] != null && historia["retroalimentacion"] != ""){
					html += '<p>' + form_nl2br(historia["retroalimentacion"]) + '</p>';
				}
				html += '<p>Fecha: <i><b>' + historia["quien"]["fecha"] + '</b></i></p>'
				html += '</div>'
			}
		}

		lightbox_abrir('<h1 class="align-left">Retroalimentación:</h1>' + html, {
			"aceptar" : {
				"txt": "Cerrar",
				"fn": function(){
					
				}
			}
		}, {
			"size" : "grande",
			"close_btn": true
		});
		return false;
	});
}

function captura_linea_periodo_filtros(ele, datos, attr){
	//datos.sort();
	
	//$(ele +' option:not(:first)').remove();
	$(ele + '  > option:nth-child(n+3)').remove();
	var attr = $(ele).attr('rel');
	if (typeof attr !== 'undefined' && attr !== false) { } else { 
		attr = "";
	}
	
	for(var i in datos){
		$(ele).append('<option value="' + i + '" ' + ((attr == i)?"selected":"") + '>' + datos[i] + '</option>');
	}
	$(ele).unbind("change.f").bind("change.f", function(){
		$(this).attr("rel", $(this).val());
		captura_linea_periodo_filtros_fn();
		
		/*
		switch(ele){
			case "#input_filtro_ejes":
				console.log("input_filtro_ejes");
				$("#input_filtro_plazos").val("");
				break;
			case "#input_filtro_plazos":
				console.log("input_filtro_plazos");
				$("#input_filtro_ejes").val("");
				break;
			default:
				break;
		}
		
		if($(this).val() == ""){
			$('.seccion #preguntas .pregunta').each(function(index, element) {
				$(this).show();
			});
		} else {
			$('.seccion #preguntas .pregunta').each(function(index, element) {
				$(this).hide();
			});
			$('.seccion #preguntas .pregunta[' + attr + '="' + $(ele).val() + '"]').each(function(index, element) {
				$(this).show();
			});
		}
		*/
		captura_linea_resize_();
	});
}

function captura_linea_periodo_filtros_fn(){
	$('.seccion #preguntas .pregunta').each(function(index, element) {
		$(this).hide();
	});
	$('#div_estatus').hide();
	if(
		$("#input_filtro_ejes").val() != "" || 
		$("#input_filtro_plazos").val() != ""
	){
		
		var filtro_eje = '';
		var filtro_plazos = '';
		var filtro_aprobado = '';
		var filtro_estatus = '';
		
		if($("#input_filtro_ejes").val() != ""){
			if($("#input_filtro_ejes").val() == "-1"){
				filtro_eje = '[data-eje]';
			} else {
				filtro_eje = '[data-eje="' + $("#input_filtro_ejes").val() + '"]';
			}
		}
		
		if($("#input_filtro_plazos").val() != ""){
			if($("#input_filtro_plazos").val() == "-1"){
				filtro_plazos = '[data-plazo]';
			} else {
				filtro_plazos = '[data-plazo="' + $("#input_filtro_plazos").val() + '"]';
			}
		}
		
		
		if($("#input_filtro_aprobado").val() != ""){
			filtro_aprobado = '[data-aprobado="' + $("#input_filtro_aprobado").val() + '"]';
		}
		
		if($("#input_filtro_estatus").val() != ""){
			filtro_estatus = '[data-estatus="' + $("#input_filtro_estatus").val() + '"]';
		}
		
		if($('.seccion #preguntas .pregunta' + filtro_eje + filtro_plazos + filtro_aprobado + filtro_estatus).length == 0){
			lightbox_abrir('<div class="align-center big margin-yb"><b>No hay líneas de acción que coincidan con la búsqueda realizada.</b></div>', {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});	
		}
		
		var estatus_captura = 0;
		var estatus_revision = 0;
		var estatus_aprobados = 0;
		var estatus_rechazados = 0;
		var estatus_revision_ = 0;
		
		var porcentaje = 0;
		var porcentaje_ok = 0;
		
		var cumplio_arr = {
			"0"	: 0,
			"1"	: 0,
			"2"	: 0,
			"3"	: 0,
			"4"	: 0,			
		}
		var estatus_total = $('.seccion #preguntas .pregunta' + filtro_eje + filtro_plazos + filtro_aprobado + filtro_estatus).length;
		
		$('.seccion #preguntas .pregunta' + filtro_eje + filtro_plazos + filtro_aprobado + filtro_estatus).each(function(index, element) {
			if($(this).attr("data-captura") == "true"){
				estatus_captura++;
			}
			if($(this).attr("data-revision") == "true"){
				estatus_revision++;
			}
			if($(this).attr("data-aprobado") == "1"){
				estatus_aprobados++;
				porcentaje_ok += parseInt($(this).find(".resumen .porcentaje").text());
			} else if($(this).attr("data-aprobado") == "2"){
				estatus_rechazados++;
			} else if($(this).attr("data-aprobado") == "3"){
				estatus_revision_++;
			}
			
			cumplio_arr[$(this).find(".resumen .cumplio").attr("data-cumplio")]++;
			
			porcentaje += parseInt($(this).find(".resumen .porcentaje").text());
			
			$(this).show();
		});
		
		if(estatus_total > 0){
			porcentaje = porcentaje / estatus_total;
			porcentaje_ok = porcentaje_ok / estatus_total;
		} 
		
		for(var x in cumplio_arr){
			$('#div_estatus #cumplio_' + x).text(cumplio_arr[x]);
		}
		
		
		$('#div_estatus #avance_promedio').text(porcentaje.toFixed(2));
		$('#div_estatus #avance_promedio_ok').text(porcentaje_ok.toFixed(2));
		
		
		$('#div_estatus #estatus_captura').text(estatus_captura);
		$('#div_estatus #estatus_revision').text(estatus_revision);
		$('#div_estatus #estatus_total, #div_estatus #estatus_revision_total').text(estatus_total);
		
		$('#div_estatus #estatus_aprobados').text(estatus_aprobados);
		$('#div_estatus #estatus_rechazados').text(estatus_rechazados);
		$('#div_estatus #estatus_revision_').text(estatus_revision_);
		
		$('#div_estatus').show();
		
		$('#btn_revision').unbind('click').bind('click', function(){
			if(estatus_captura == estatus_total && estatus_captura > 0){ 
				caputra_generales_revision({
					"tipo" : "Líneas de acción",
					
					"idperiodo" : $("#input_periodo").val(),
					"periodo" : $("#input_periodo option:selected").text(),
					
					"idactor" : sesion_data["id"],
					"actor" : sesion_data["txt_perfil"],
					"perfil_txt" : sesion_data["perfil_txt"],
					
					"eje": $("#input_filtro_ejes option:selected").text(),
					"filtro": $("#input_filtro_plazos option:selected").text(),
					"filtro_txt": "Plazo"
				});
			} else {
				lightbox_abrir('<div class="align-center big margin-yb"><b>Advertencia</b></div>Capture todas las líneas de acción para solicitar una revisión.', {
					"cancelar" : {
						"txt": "Ok",
						"fn": null
					} 
				}, {});	
			}
			return false;
		});
		
		$('#filtros').show();
	} 
}
