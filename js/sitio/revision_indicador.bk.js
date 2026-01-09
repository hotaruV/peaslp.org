var revision_formulario_arr = null;
var revision_captura_data = null;
var revision_datos = {};

function revision_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1, 5])){

			revision_inicializar();

			$('#div_actor_municipio').hide();
			
			var _tabla_periodos = new tablaJSON({"base": "periodo"});
			_tabla_periodos.loadData("all", "#input_periodo", "select");

			$('#input_actor_municipio option:not(:first)').remove();
			for(var i in municipios_arr){
				$('#input_actor_municipio').append('<option value="' + municipios_arr[i]["id"] + '">' + municipios_arr[i]["municipio"] + '</option>');
			}

			$("#input_periodo").unbind("change.f").bind("change.f", function(){
				revision_inicializar();
				revision_periodo(null);
			});

			var actores_funcion = function(data){
				for(var i in data){
					var actor = data[i];
				
					var tiene = "0";
					if(
						actor["actor_data"].hasOwnProperty("municipios") &&
						actor["actor_data"]["municipios"].hasOwnProperty("v") &&
						actor["actor_data"]["municipios"]["v"][0] == 1
					){
						tiene = "1";
					} 
					$('#input_actor option[value="' + actor.idactor + '"]').attr("data-municipio", tiene);
				}
			}
			if(sesion_permisos([1])){
				var _tabla_actores = new tablaJSON({"base": "actor"});
				_tabla_actores.loadData("all", "#input_actor", "select", {}, actores_funcion);
			} else if(sesion_permisos([5])){
				var data = new FormData();
				data.append("id", sesion_data["id"]); 
				data.append("token", sesion_data["token"]); 
				data.append("dispositivo", sesion_data["dispositivo"]); 
				data.append("perfil", sesion_data["perfil"]);
				data.append("institucion", 1);
				ajax_enviar(
					data, 
					url_sitio + "ajax/sitio/institucion_actores.php", 
					{
						"ok" : function(respuesta){		
							$('#input_actor option:not(:first)').remove();
							for(var i in respuesta.actor){
								$('#input_actor').append('<option value="' + respuesta.actor[i]["idactor"] + '">' + respuesta.actor[i]['actor_data']['actor'] + '</option>');
							}
							actores_funcion(respuesta.actor)
						}
					},
					{}
				);
			}


			$("#input_actor").unbind("change.f").bind("change.f", function(){
				revision_inicializar();
				var municipios = $("#input_actor option:selected").attr("data-municipio");
				if(municipios == "1"){
					form_opcional(usuarios_arr, "actor_municipio", false, false);
					if($("#input_actor option:selected").attr("data-municipio") == "1"){
						revision_periodo(true);
					}

				} else {
					form_opcional(usuarios_arr, "actor_municipio", true, false);
					revision_periodo(false);
				}
			});

			$("#input_actor_municipio").unbind("change.f").bind("change.f", function(){
				revision_inicializar();
				revision_periodo(true);
			});

			

		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	sesion_verificar_no = function(){
		
	}
}
function revision_load(){
	revision_resize();
}
function revision_resize(){
	scripts_resize();
}

function revision_inicializar(){
	$('#preguntas').html("");
	$('#mensajes #mensaje').html("");
	$('#usuarios .usuarios').html("");
	$("#mensajes").hide();
	$("#usuarios").hide();
}

function revision_periodo(municipio){
	console.log("revision_periodo", municipio);
	if(municipio == null && $("#input_actor option:selected").attr("data-municipio") == "1"){
		municipio = true;
	} else {
		if(municipio == null){ municipio = false; }
	}
	if(municipio == false && $("#input_periodo").val() != "" && $("#input_actor").val() != ""){
		revision_periodo_indicadores({
			"periodo": $("#input_periodo").val(),
			"actor": $("#input_actor").val(),
			"actor_municipio": null
		});
	} else if(municipio == true && $("#input_periodo").val() != "" && $("#input_actor").val() != ""  && $("#input_actor_municipio").val() != ""){
		revision_periodo_indicadores({
			"periodo": $("#input_periodo").val(),
			"actor": $("#input_actor").val(),
			"actor_municipio": $("#input_actor_municipio").val()
		});
	}
}

function revision_periodo_indicadores(valores){

	var data = new FormData();
	data.append("id", sesion_data["id"]); 
	data.append("token", sesion_data["token"]); 
	data.append("dispositivo", sesion_data["dispositivo"]); 
	data.append("perfil", sesion_data["perfil"]);
	
	for(x in valores){ 
		data.append(x, valores[x]); 
	}

	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/periodo_indicadores.php", 
		{
			"ok" : function(respuesta){		
				event_google_analytics('revision', 'periodo', 'ok');
				

				//revision_datos["estrategia"] = respuesta.estrategia;
				revision_datos["indicadores"] = respuesta.indicadores;
				//revision_datos["lineas"] = respuesta.lineas;
		
				if(respuesta.hasOwnProperty("captura") && respuesta.captura.hasOwnProperty("captura_data")){
					revision_captura_data = respuesta.captura.captura_data.indicadores;
				}

				revision_periodo_preguntas(respuesta);

				if(respuesta.hasOwnProperty("err")){
					if(respuesta.err.indexOf(1) >= 0){
						$("#mensajes").show();
						$('#mensajes #mensaje').append('<div class="red">No hay usuarios que tengan asignado al Actor responsble.</div>');
						
					}
					if(respuesta.err.indexOf(2) >= 0){
						$("#mensajes").show();
						$('#mensajes #mensaje').append('<div class="orange">Al momento, no existe ninguna captura realizada por el Actor responsable.</div>');
					}
				}
				if(respuesta.usuarios.length > 0){
					$("#usuarios").show();
					for(var i in respuesta.usuarios){
						var usuario = respuesta.usuarios[i];
						var html = $(".machotes #usuario").html();
						var user = $(html).appendTo('#usuarios .usuarios');	
						
						var municipio = '';
						if(usuario.actor_municipio != null){
							var index = municipios_arr.findIndex(function(elemento){ return elemento.id === usuario.actor_municipio; });
							municipio = ' ' + municipios_arr[index].municipio;
						}
						$(user).find(".nombre").text(usuario.nombre + ' ' + usuario.apellidos + ' <' + usuario.usuario + '>');
						$(user).find(".perfil").text(usuario.perfil);
						$(user).find(".actor").text(usuario.actor + municipio);
						

					}
				}
			}
		},
		{}
	);
}


function revision_periodo_preguntas(respuesta){

	$('#preguntas').html("");
	var meta_al_arr = [];

	var indicadores = respuesta.indicadores;
	for(var i in indicadores){
		var indicador = indicadores[i];
		
		if(meta_al_arr.indexOf(indicador.indicador_data.meta_al) == -1){ 
			meta_al_arr.push(indicador.indicador_data.meta_al);
		}

		var html = $(".machotes #pregunta").html();
		var pregunta = $(html).appendTo('#preguntas');	
		$(pregunta).attr("data-id", indicador.idindicador);
		$(pregunta).attr("data-meta", indicador.indicador_data.meta_al);
		$(pregunta).find("h4").html(indicador.indicador_data.indicador);

		$(pregunta).find(".resumen").show();
		$(pregunta).find(".formulario").hide();

		$(pregunta).find(".resumen .meta").text(indicador.indicador_data.meta);
		$(pregunta).find(".resumen .meta_al").text(indicador.indicador_data.meta_al);
		$(pregunta).find(".resumen .porcentaje").text(0);
		$(pregunta).find(".resumen .retro").text(0);

		$(pregunta).find(".resumen .a_ver").attr("data-id", indicador.idindicador);
		$(pregunta).find(".resumen .a_evaluar").attr("data-id", indicador.idindicador);

		$(pregunta).find(".resumen .a_capturar").remove();
		$(pregunta).find(".resumen .a_evaluar").remove();

		revision_periodo_preguntas_mostrar(
			indicador.idindicador,
			$(pregunta).find(".formulario"), 
			$(pregunta).find(".resumen")
		);

		$(pregunta).find(".resumen .a_ver").unbind("click.mostrar").bind("click.mostrar", function(){
			var idindicador = $(this).attr("data-id");
			var botones =  {
				"cancelar" : {
					"txt": "Cerrar",
					"fn": null
				}
			};
			var html = '';
			if(revision_captura_data != null && revision_captura_data.hasOwnProperty(idindicador)){
				botones["aceptar"] = {
					"txt": "Evaluar",
					"fn": function(){
						$('.a_evaluar[data-id="' + idindicador +'"]').trigger("click.mostrar");
					}
				};
				html = $(".machotes #evaluar_formulario").html(); 
				
			}
			lightbox_abrir('<div class="light_pregunta"></div>' + html, botones, { "size" : "grande" });

			var html_p = $(".machotes #pregunta_light").html(); 
			var pregunta = $(html_p).appendTo('#lightbox_caja .light_pregunta');	
			revision_pregunta(pregunta, revision_captura_data, idindicador, revision_datos);
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
		/*
		$(pregunta).find(".resumen .a_evaluar").unbind("click.mostrar").bind("click.mostrar", function(){
			var idindicador = $(this).attr("data-id")
			var html = idindicador; 
			lightbox_abrir('<h1 class="align-left">Evaluar:</h1>' + html, {
				"aceptar" : {
					"txt": "Guardar",
					"fn": null
				},
				"cancelar" : {
					"txt": "Cerrar",
					"fn": null
				}
			}, {
				"size" : "grande"
			});
			return false;
		});
		*/
		if(revision_captura_data != null && revision_captura_data.hasOwnProperty(indicador.idindicador)){
/*
			var temp = revision_captura_data[indicador.idindicador]["cumplio"]["v"][0];
			var cumplio = revision_pregunta_estatus(temp, revision_captura_data[indicador.idindicador]["cumplio"]["e"][temp]);
			$(pregunta).find(".resumen .cumplio").html(cumplio["cumplio_txt"]);
			$(pregunta).find(".resumen .porcentaje").text(cumplio["avance"]);
*/
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

		revision_resize();
		setTimeout(function(){
			revision_resize();
		}, 200);

	});


	revision_resize();
	setTimeout(function(){
		revision_resize();
	}, 200);
}

function revision_periodo_preguntas_mostrar(idindicador, formulario, resumen){
	
}


function revision_formulario_forma(){
	form_init(revision_formulario_arr);
	$("#btn_indicador_guardar").unbind('click').bind('click', function(){
		revision_formulario_validar();
		return false;
	});	
}

function revision_formulario_validar(){
	respuesta = form_validar(revision_formulario_arr);
	if(respuesta.i == 0){ 
		revision_formulario_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1 class="align-left">Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('revision_formulario', 'validar', 'error');
		}
	}
}

function revision_formulario_servicio(valores){
	event_google_analytics('revision_formulario', 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}

	data.append("idindicador", $(".plantilla").attr("data-idcurso"));
	data.append("idperiodo", $("#input_periodo").val());
	valores = form_input_valores(valores, registro_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/revisionr_indicador.php", 
		{
			"ok" : function(){
				event_google_analytics('panel_formulario', 'servicio', 'ok');
				var html = "<h1>Información guardada exitosamente.</h1>" + msj;
				lightbox_abrir("<h1>Información guardada exitosamente.</h1>", {
					"aceptar" : {
						"txt": "Continuar",
						"fn": function(){ 
							$(".panel .navegacion .siguiente").trigger("click");
						}
					}	
				}, {});		
			}, 
		},
		{}
	);	
}


function revision_pregunta_estatus(cumplio, avance){
	var cumplio_txt = "";
	switch(cumplio){
		case "1":
			cumplio_txt = '<b style="color:red">No se ha iniciado</b>';
			avance = 0;
			break;
		case "2":
			cumplio_txt = '<b style="color:orange">En planeación</b>';
			break;
		case "3":
			cumplio_txt = '<b style="color:blue">En proceso</b>';
			break;
		case "4":
			cumplio_txt = '<b style="color:green">Finalizado</b>';
			avance = 100;
			break;
	}
	return {
		"cumplio": cumplio,
		"cumplio_txt": cumplio_txt,
		"avance": avance,
	}
}


function revision_pregunta(pregunta, data, idindicador, datos){
	
	var index = datos["indicadores"].findIndex(function(elemento){ return elemento.idindicador === idindicador; });
	var indicador =  datos["indicadores"][index];

	$(pregunta).find(".indicador span.txt").text(indicador["indicador_data"]["indicador"]);
	$(pregunta).find(".indicador span.meta").text(indicador["indicador_data"]["meta"]);
	$(pregunta).find(".indicador span.meta_al").text(indicador["indicador_data"]["meta_al"]);
	$(pregunta).find(".indicador span.fuente").text(indicador["indicador_data"]["verificacion"]);
	$(pregunta).find(".indicador span.metodo").text(indicador["indicador_data"]["metodo"]);

	if(data != null && data.hasOwnProperty(idindicador)){
		var temp = data[idindicador]["cumplio"]["v"][0];
		var cumplio = revision_pregunta_estatus(temp, data[idindicador]["cumplio"]["e"][temp]);
		

		$(pregunta).find(".indicador .resultados span.cumplio").html(cumplio["cumplio_txt"]);
		$(pregunta).find(".indicador .resultados span.avance").text(cumplio["avance"]);
		$(pregunta).find(".indicador .resultados span.descripcion").text(data[idindicador]["descripcion"]);


		var archivos = new Array();
		for(var i in data[idindicador]["evidencia"]["v"]){
			var archivo = data[idindicador]["evidencia"]["v"][i]
			archivos.push('<a href="' + url_sitio + archivo + '" target="_blank">' + archivo + '</a>'); 
		}
		$(pregunta).find(".indicador .resultados span.evidencia").html(archivos.toString());
	} else {
		$(pregunta).find(".indicador .resultados").html('<div style="color: orange;">Al momento, no existe ninguna captura realizada por el Actor responsable.</div>')
	}

	/*
	$(pregunta).find(".eje span").text();

	$(pregunta).find(".prioridad span.txt")
	$(pregunta).find(".prioridad span.plazo")

	$(pregunta).find(".estrategia span.txt")
	$(pregunta).find(".estrategia .instituciones")
		
		<ul>
			<li><span>Institución</span> <span class="siglas">(Institución)</span></li>
		</ul>
		

	$(pregunta).find(".linea span.txt")
	$(pregunta).find(".linea span.txt")
	$(pregunta).find(".linea .actores")
		
		<ul>
			<li><span>Actor</span> <span class="siglas">(Actor)</span></li>
		</ul>

	*/

	
}