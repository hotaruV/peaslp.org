var captura_formulario_arr = null;
var captura_idindicador = null;
var captura_captura_data = null;
var captura_datos = {};

function captura_ready(){
	$('#filtros').hide();

	sesion_verificar_ini = function(){	
		if(sesion_permisos([1, 4])){
			
			var _tabla_periodos = new tablaJSON({"base": "periodo", "ajax" : {
				"save" : "tablaJSON.php",
				"other" : "tablaJSON.php",
				"loadData" : "periodos_activos.php",
			}});
			_tabla_periodos.loadData("all", "#input_periodo", "select");

			$("#input_periodo").unbind("change.f").bind("change.f", function(){
				captura_periodo($(this).val());
			});

		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	sesion_verificar_no = function(){
		
	}
}
function captura_load(){
	captura_resize();
}
function captura_resize(){
	scripts_resize();
}

function captura_periodo(periodo){
	if(periodo != ""){
		captura_periodo_indicadores(periodo);
		$('#filtros').show();
	} else {
		$('#preguntas').html("");
		$('#filtros').hide();
	}
}

function captura_periodo_indicadores(periodo){
	var data = new FormData();
	data.append("id", sesion_data["id"]); 
	data.append("token", sesion_data["token"]); 
	data.append("dispositivo", sesion_data["dispositivo"]); 
	data.append("perfil", sesion_data["perfil"]);
	
	data.append("periodo", periodo); 

	var funcion = function(respuesta){		
		event_google_analytics('captura', 'periodo', 'ok');
		captura_datos["indicadores"] = respuesta.indicadores;
		
		if(respuesta.hasOwnProperty("captura") && respuesta.captura.hasOwnProperty("captura_data")){
			captura_captura_data = respuesta.captura.captura_data.indicadores;
		}
		captura_periodo_preguntas_lineas(respuesta)
		//captura_periodo_preguntas(respuesta);
		
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/captura_indicadores.php", 
		{
			"ok" : funcion, 
		},
		{}
	);
}


function captura_periodo_preguntas(respuesta){

	$('#preguntas').html("");
	
	var meta_al_arr = [];
	var indicadores = respuesta.indicadores;
	for(var i in indicadores){
		var indicador = indicadores[i];

		if(meta_al_arr.indexOf(indicador.indicador_data.meta_al) == -1){ 
			meta_al_arr.push(indicador.indicador_data.meta_al);
		}

		var html = $(".machotes #pregunta_linea").html();
		var pregunta = $(html).appendTo('#preguntas');	
		$(pregunta).attr("data-id", indicador.idindicador);
		$(pregunta).attr("data-meta", indicador.indicador_data.meta_al);
		$(pregunta).find("h4").html(indicador.indicador_data.indicador);

		$(pregunta).find(".resumen").show();
		$(pregunta).find(".formulario").hide();
/*
		$(pregunta).find(".resumen .eje").text(indicador.eje);
		$(pregunta).find(".resumen .prioridad").text(indicador.prioridad);
		$(pregunta).find(".resumen .plazo").text(indicador.plazo);
		$(pregunta).find(".resumen .estrategia").text(indicador.estrategia);
*/

		$(pregunta).find(".resumen .meta").text(indicador.indicador_data.meta);
		$(pregunta).find(".resumen .meta_al").text(indicador.indicador_data.meta_al);
		$(pregunta).find(".resumen .porcentaje").text(0);
		$(pregunta).find(".resumen .retro").text(0);

		$(pregunta).find(".resumen .a_ver").attr("data-id", indicador.idindicador);
		$(pregunta).find(".resumen .a_capturar").attr("data-id", indicador.idindicador);
		$(pregunta).find(".resumen .a_evaluar").remove();

		captura_periodo_preguntas_mostrar(
			indicador.idindicador,
			$(pregunta).find(".resumen .a_capturar"), 
			$(pregunta).find(".formulario"), 
			$(pregunta).find(".resumen")
		);

		$(pregunta).find(".resumen .a_ver").unbind("click.mostrar").bind("click.mostrar", function(){
			var idindicador = $(this).attr("data-id")
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
			revision_pregunta(pregunta, captura_captura_data, idindicador, captura_datos);
			return false;
		});

		$(pregunta).find(".resumen .a_retro").unbind("click.mostrar").bind("click.mostrar", function(){
			lightbox_abrir('<h1 class="align-left">Retroalimentación:</h1>', {
				"aceptar" : {
					"txt": "Cerrar",
					"fn": function(){
						
					}
				}
			}, {
				"size" : "grande"
			});
			return false;
		});
		
		if(captura_captura_data != null && captura_captura_data.hasOwnProperty(indicador.idindicador)){

			var temp = captura_captura_data[indicador.idindicador]["cumplio"]["v"][0];
			var cumplio = revision_pregunta_estatus(temp, captura_captura_data[indicador.idindicador]["cumplio"]["e"][temp]);
			$(pregunta).find(".resumen .cumplio").html(cumplio["cumplio_txt"]);
			$(pregunta).find(".resumen .porcentaje").text(cumplio["avance"]);
		}
	}

	meta_al_arr.sort();
	$('#input_meta_al option:not(:first)').remove();
	for(var i in meta_al_arr){
		$('#input_meta_al').append('<option value="' + meta_al_arr[i] + '">' + meta_al_arr[i] + '</option>');
	}
	$("#input_meta_al").unbind("change.f").bind("change.f", function(){
		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).hide();
		});
		if($(this).val() == ""){
			$('.seccion #preguntas .pregunta').each(function(index, element) {
				$(this).show();
			});
		} else {
			$('.seccion #preguntas .pregunta[data-meta="' + $(this).val() + '"]').each(function(index, element) {
				$(this).show();
			});
		}
		captura_resize();
		setTimeout(function(){
			captura_resize();
		}, 200);
	});

	captura_resize();
	setTimeout(function(){
		captura_resize();
	}, 200);
}

function captura_periodo_preguntas_mostrar(idindicador, enlace, formulario, resumen){
	$(enlace).unbind("click.mostrar").bind("click.mostrar", function(){

		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).find(".resumen").show();
			$(this).find(".formulario").hide();
			$(this).find(".formulario").html("");
		});

		var html = $(".machotes #pregunta_formulario").html();
		$(html).appendTo('.pregunta[data-id="' + idindicador + '"] .formulario');	

		
		$(resumen).hide();
		captura_idindicador = idindicador;
		captura_formulario_arr = [
			{"key":"cumplio", "nombre":"Se cumplio con el indicador", "ele":'.pregunta[data-id="' + idindicador + '"] input[name="input_cumplio"]', "tipo": "radio", "validar": "entero", "opcional": false, "especificar": true, "especificar_validar": "porcentaje"},
			{"key":"descripcion", "nombre":"Descripción", "ele":'.pregunta[data-id="' + idindicador + '"] #input_descripcion', "tipo": "textarea", "validar": "texto", "opcional": false},
			{"key":"evidencia", "nombre":"Evidencia", "ele":'.pregunta[data-id="' + idindicador + '"] #input_evidencia', "tipo": "file", "validar": "documento", "opcional": false,"callback": function(){ captura_resize(); }, "url_files": "files/captura/" }
		];

		if(captura_captura_data != null && captura_captura_data.hasOwnProperty(idindicador)){
			for(x in captura_captura_data[idindicador]){
				var index = captura_formulario_arr.findIndex(function(elemento){ return elemento.key === x; });
				if(index >= 0){ 
					captura_formulario_arr[index]["value"] = captura_captura_data[idindicador][x]; 
				}
			}
		}

		captura_formulario_forma();

		$(formulario).show('fast', function(){
			$('html, body').animate({
				scrollTop: $('.pregunta[data-id="' + idindicador + '"]').offset().top
			}, 1000);
			captura_resize();
		});
		captura_resize();
		return false;
	});
}


function captura_formulario_forma(){
	form_init(captura_formulario_arr);
	$("#btn_indicador_guardar").unbind('click').bind('click', function(){
		captura_formulario_validar();
		return false;
	});	
}

function captura_formulario_validar(){
	respuesta = form_validar(captura_formulario_arr);
	if(respuesta.i == 0){ 
		captura_formulario_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1 class="align-left">Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('captura_formulario', 'validar', 'error');
		}
	}
}

function captura_formulario_servicio(valores){
	event_google_analytics('captura_formulario', 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}

	data.append("idindicador", captura_idindicador);
	data.append("idperiodo", $("#input_periodo").val());
	valores = form_input_valores(valores, registro_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/capturar_indicador.php", 
		{
			"ok" : function(respuesta){
				event_google_analytics('panel_formulario', 'servicio', 'ok');
				if(respuesta.hasOwnProperty("captura") && respuesta.captura.hasOwnProperty("captura_data")){
					captura_captura_data = respuesta.captura.captura_data.indicadores;
				}
				
				lightbox_abrir("<h1>Información guardada exitosamente.</h1>", {
					"aceptar" : {
						"txt": "Continuar",
						"fn": function(){ 
							captura_periodo_indicadores($("#input_periodo").val());
						}
					}	
				}, {});		
			}, 
		},
		{}
	);	
}

function captura_periodo_preguntas_lineas(respuesta){

	$('#preguntas').html("");
	
	var lineas = respuesta.lineas;
	for(var i in lineas){
		var linea = lineas[i];
		
		console.log(linea);

		var html = $(".machotes #pregunta_linea").html();
		var pregunta = $(html).appendTo('#preguntas');	
		$(pregunta).attr("data-id", linea.idlinea);
		$(pregunta).find("b.big").html(linea.linea_data.linea);

		$(pregunta).find(".resumen").show();
		$(pregunta).find(".formulario").hide();

		$(pregunta).find(".detalles .eje").text(linea.eje);
		$(pregunta).find(".detalles .prioridad").text(linea.prioridad);
		$(pregunta).find(".detalles .plazo").text(linea.plazo);
		$(pregunta).find(".detalles .estrategia").text(linea.estrategia);
/*
		$(pregunta).find(".resumen .meta").text(linea.linea_data.meta);
		$(pregunta).find(".resumen .meta_al").text(linea.linea_data.meta_al);
*/
		$(pregunta).find(".resumen .porcentaje").text(0);
		$(pregunta).find(".resumen .retro").text(0);

		$(pregunta).find(".resumen .a_ver").attr("data-id", linea.idlinea);
		$(pregunta).find(".resumen .a_capturar").attr("data-id", linea.idlinea);
		$(pregunta).find(".resumen .a_evaluar").remove();
/*
		captura_periodo_preguntas_mostrar(
			linea.idlinea,
			$(pregunta).find(".resumen .a_capturar"), 
			$(pregunta).find(".formulario"), 
			$(pregunta).find(".resumen")
		);

		$(pregunta).find(".resumen .a_ver").unbind("click.mostrar").bind("click.mostrar", function(){
			var idlinea = $(this).attr("data-id")
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
			revision_pregunta(pregunta, captura_captura_data, idlinea, captura_datos);
			return false;
		});

		$(pregunta).find(".resumen .a_retro").unbind("click.mostrar").bind("click.mostrar", function(){
			lightbox_abrir('<h1 class="align-left">Retroalimentación:</h1>', {
				"aceptar" : {
					"txt": "Cerrar",
					"fn": function(){
						
					}
				}
			}, {
				"size" : "grande"
			});
			return false;
		});
		
		if(captura_captura_data != null && captura_captura_data.hasOwnProperty(linea.idlinea)){

			var temp = captura_captura_data[linea.idlinea]["cumplio"]["v"][0];
			var cumplio = revision_pregunta_estatus(temp, captura_captura_data[linea.idlinea]["cumplio"]["e"][temp]);
			$(pregunta).find(".resumen .cumplio").html(cumplio["cumplio_txt"]);
			$(pregunta).find(".resumen .porcentaje").text(cumplio["avance"]);
		}
	*/
	}
/*
	meta_al_arr.sort();
	$('#input_meta_al option:not(:first)').remove();
	for(var i in meta_al_arr){
		$('#input_meta_al').append('<option value="' + meta_al_arr[i] + '">' + meta_al_arr[i] + '</option>');
	}
	$("#input_meta_al").unbind("change.f").bind("change.f", function(){
		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).hide();
		});
		if($(this).val() == ""){
			$('.seccion #preguntas .pregunta').each(function(index, element) {
				$(this).show();
			});
		} else {
			$('.seccion #preguntas .pregunta[data-meta="' + $(this).val() + '"]').each(function(index, element) {
				$(this).show();
			});
		}
		captura_resize();
		setTimeout(function(){
			captura_resize();
		}, 200);
	});
*/
	captura_resize();
	setTimeout(function(){
		captura_resize();
	}, 200);
}