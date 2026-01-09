var revision_indicador_formulario_arr = null;
var revision_indicador_captura = null;
var revision_indicador_revision = null;
var revision_indicador_datos = {};
var revision_indicador_idindicador = null;
var revision_indicador_enviar_retro = null;

function revision_indicador_ready(){
	$('#filtros').hide();
	$('#div_actor_municipio').hide();
	$('#div_estatus').hide();
	
	$('#div_actor_catalogo').hide();
	$('#div_actor_elemento').hide();
	
	revision_indicador_inicializar();
	
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1, 5])){
			
			$("#input_periodo").unbind("change.f").bind("change.f", function(){
				//$("#input_filtro_ejes").val("");
				//$("#input_filtro_metas_al").val("");
				revision_indicador_inicializar();
				revision_indicador_periodo(null);
			});

			$("#input_actor").unbind("change.f").bind("change.f", function(){
				//$("#input_filtro_ejes").val("");
				//$("#input_filtro_metas_al").val("");
				revision_indicador_inicializar();
				var municipios = $("#input_actor option:selected").attr("data-municipio");
				if(municipios == "1"){
					form_opcional(usuarios_arr, "actor_municipio", false, false);
					if($("#input_actor option:selected").attr("data-municipio") == "1"){
						revision_indicador_periodo(true);
					}
				} else {
					form_opcional(usuarios_arr, "actor_municipio", true, false);
					revision_indicador_periodo(false);
				}
				
				var catalogos = $("#input_actor option:selected").attr("data-catalogo");
				if(catalogos == "1"){
					form_opcional(usuarios_arr, "actor_catalogo", false, false);
					form_opcional(usuarios_arr, "actor_elemento", false, false);
					if($("#input_actor option:selected").attr("data-catalogo") == "1"){
						//revision_indicador_periodo(true);
					}
					if($('#input_actor_catalogo option[value="' + $("#input_actor option:selected").attr("data-catalogo_pertenece") + '"]').length > 0){ 
						$("#input_actor_catalogo").val($("#input_actor option:selected").attr("data-catalogo_pertenece"));
						$("#input_actor_catalogo").trigger("change.f");
					}
				} else {
					form_opcional(usuarios_arr, "actor_catalogo", true, false);
					form_opcional(usuarios_arr, "actor_elemento", true, false);
					//revision_indicador_periodo(false);
				}
				
			});

			$("#input_actor_municipio").unbind("change.f").bind("change.f", function(){
				revision_indicador_inicializar();
				revision_indicador_periodo(true);
			});
			
			$("#input_actor_catalogo").unbind("change.f").bind("change.f", function(){				
				var _tabla = new tablaJSON({"base": "elemento"});
				_tabla.loadData("filter", "#input_actor_elemento", "select", {
					"ident": $("#input_actor_catalogo").val(),
					"orden": [
						{ 
							"col" : "elemento", 
							"tipo" : "texto", 
							"dir" : "asc" 
						}
						
					]
				}, function(){	
					form_rel("#input_actor_elemento"); 
					
					var attr = $('#input_actor_elemento').attr('data-value');
					if (typeof attr !== 'undefined' && attr !== false && attr !== "") {
						$('#input_actor_elemento').val(attr); 
						$("#input_actor_elemento").trigger("change.f");	 
					}
					
				}, 'catalogo');
			});
			$("#input_actor_elemento").unbind("change.f").bind("change.f", function(){
				revision_indicador_inicializar();
				revision_indicador_periodo(true);
			});
			
			var _tabla_periodos = new tablaJSON({"base": "periodo", "ajax" : {
				"loadData" : "periodos_activos_rev.php",
			}});
			_tabla_periodos.loadData("all", "#input_periodo", "select", {
				"orden": [
					{ 
						"col" : "inicia", 
						"tipo" : "fecha", 
						"dir" : "asc" 
					}
					
				]
			}, function(respuesta){
				$("#input_periodo").trigger("change.f");	
			});
			
			$('#input_actor_municipio option:not(:first)').remove();
			for(var i in municipios_arr){
				$('#input_actor_municipio').append('<option value="' + municipios_arr[i]["id"] + '">' + municipios_arr[i]["municipio"] + '</option>');
			}
			
			var attr = $('#input_actor_municipio').attr('data-value');
			if (typeof attr !== 'undefined' && attr !== false && attr !== "") {
				$('#input_actor_municipio').val(attr);
				$("#input_actor_municipio").trigger("change.f");	 
			}
			
			var _tabla_catalogo = new tablaJSON({"base": "catalogo"});
			_tabla_catalogo.loadData("all", "#input_actor_catalogo", "select", {
				"orden": [
					{ 
						"col" : "catalogo", 
						"tipo" : "texto", 
						"dir" : "asc" 
					}
					
				]
			}, function(){	
				form_rel("#input_actor_catalogo"); 
				
				var attr = $('#input_actor_catalogo').attr('data-value');
				if (typeof attr !== 'undefined' && attr !== false && attr !== "") {
					$('#input_actor_catalogo').val(attr); 
					$("#input_actor_catalogo").trigger("change.f");	 
				}
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
					
					tiene = "0";
					tiene_es = ""
					if(
						actor["actor_data"].hasOwnProperty("catalogos") &&
						actor["actor_data"]["catalogos"].hasOwnProperty("v") &&
						actor["actor_data"]["catalogos"]["v"][0] == 1
					){
						tiene = "1";
						tiene_es = actor["actor_data"]["catalogo_pertenece"];
					} 
					$('#input_actor option[value="' + actor.idactor + '"]').attr("data-catalogo", tiene);
					$('#input_actor option[value="' + actor.idactor + '"]').attr("data-catalogo_pertenece", tiene_es);
				}
				$('#input_actor').trigger("change.f");
			}
			
			if(sesion_permisos([1])){
				var _tabla_actores = new tablaJSON({"base": "actor"});
				_tabla_actores.loadData("all", "#input_actor", "select", {
					"orden": [
						{ 
							"col" : "actor", 
							"tipo" : "texto", 
							"dir" : "asc" 
						}
						
					]	
				}, actores_funcion);
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
			
			$("#btn_copiar").unbind("click.copiar").bind("click.copiar", function(){
				
				return false;
			});
			
			$("#btn_imprimir").unbind("click.imprimir").bind("click.imprimir", function(){
				var html = $('#form_revision').html();
				var css = '';
				
				var titulo = '';
				titulo += $('#input_actor option:selected').text();
				if($('#input_actor_municipio').val() != ""){
					titulo += ' - ' + $('#input_actor_municipio option:selected').text()
				}
				if($('#input_actor_elemento').val() != ""){
					titulo += ' - ' + $('#input_actor_elemento option:selected').text()
				}
				
				var subtitulo = 'Indicadores';
				if($('#input_filtro_ejes').val() != ""){
					if(subtitulo != ''){ subtitulo += '<br>'; }
					subtitulo += ' Eje: ' + $('#input_filtro_ejes option:selected').text();
				}
				if($('#input_filtro_metas_al').val() != ""){
					if(subtitulo != ''){ subtitulo += '<br>'; }
					subtitulo += ' Meta al año: ' + $('#input_filtro_metas_al option:selected').text()
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
			
			

		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	sesion_verificar_no = function(){
		
	}
}
function revision_indicador_load(){
	revision_indicador_resize();
}
function revision_indicador_resize(){
	scripts_resize();
}

function revision_indicador_resize_(){
	revision_indicador_resize();
	setTimeout(function(){
		revision_indicador_resize();
	}, 200);
}


function revision_indicador_inicializar(){
	revision_indicador_formulario_arr = null;
	revision_indicador_idindicador = null;
	$('#preguntas').html("");
	$('#filtros').hide();
	$('#mensajes #mensaje').html("");
	$('#usuarios .usuarios').html("");
	$("#mensajes").hide();
	$("#q_captura_todo").hide();
	$("#usuarios").hide();
}


function revision_indicador_periodo(municipio){
	/*
	var entro = false;
	if(municipio == null && $("#input_actor option:selected").attr("data-municipio") == "1"){
		municipio = true;
	} else {
		if(municipio == null){ municipio = false; }
	}

	if(municipio == false && $("#input_periodo").val() != "" && $("#input_actor").val() != ""){
		entro = true;
		revision_indicador_periodo_servicio({
			"periodo": $("#input_periodo").val(),
			"actor": $("#input_actor").val(),
			"actor_municipio": null
		});
	} else if(municipio == true && $("#input_periodo").val() != "" && $("#input_actor").val() != ""  && $("#input_actor_municipio").val() != ""){
		entro = true;
		revision_indicador_periodo_servicio({
			"periodo": $("#input_periodo").val(),
			"actor": $("#input_actor").val(),
			"actor_municipio": $("#input_actor_municipio").val()
		});
	}
	
	if(entro){
		$('#filtros').show();
	} else {
		$('#preguntas').html("");
		$('#div_estatus').hide();
		$('#filtros').hide();
	}
	*/
	
	var temp_actor_municipio = null;
	var temp_actor_catalogo = null;
	var temp_actor_elemento = null;
	var enviar = false;
	
	if(
		$("#input_periodo").val() != "" &&
		$("#input_actor").val() != ""
	){
		enviar = true;
	}
	
	if($("#input_actor option:selected").attr("data-municipio") == "1"){
		enviar = false;
		if($("#input_actor_municipio").val() != ""){
			temp_actor_municipio = $("#input_actor_municipio").val();
			enviar = true;
		}
	}
	
	if($("#input_actor option:selected").attr("data-catalogo") == "1"){
		enviar = false;
		if($("#input_actor_catalogo").val() != ""){
			temp_actor_catalogo = $("#input_actor_catalogo").val();
			if($("#input_actor_elemento").val() != ""){
				temp_actor_elemento = $("#input_actor_elemento").val();
				enviar = true;
			}
		}
	}
	
	if(enviar){
		//$('#filtros').show();
		revision_indicador_periodo_servicio({
			"periodo": $("#input_periodo").val(),
			"actor": $("#input_actor").val(),
			"actor_municipio": temp_actor_municipio,
			"actor_catalogo": temp_actor_catalogo,
			"actor_elemento": temp_actor_elemento
		});
	} else {
		$('#preguntas').html("");
		$('#div_estatus').hide();
		$('#filtros').hide();
	}

	
}

function revision_indicador_periodo_servicio(valores){
	var data = new FormData();
	data.append("id", sesion_data["id"]); 
	data.append("token", sesion_data["token"]); 
	data.append("dispositivo", sesion_data["dispositivo"]); 
	data.append("perfil", sesion_data["perfil"]);
	
	for(x in valores){ 
		data.append(x, valores[x]); 
	}

	var funcion = function(respuesta){		
		event_google_analytics('revision_indicador', 'periodo', 'ok');

		if(respuesta.hasOwnProperty("ejes") && respuesta.hasOwnProperty("ejes")){
			revision_indicador_periodo_filtros("#input_filtro_ejes", respuesta.ejes, "data-eje");
			$("#input_filtro_ejes").attr("rel", "");
		}
		
		if(respuesta.hasOwnProperty("metas_al") && respuesta.hasOwnProperty("metas_al")){
			revision_indicador_periodo_filtros("#input_filtro_metas_al", respuesta.metas_al, "data-meta_al");
			$("#input_filtro_metas_al").attr("rel", "");
		}
		
		console.log("revision_indicador_periodo_servicio");
		
		revision_indicador_captura = null;
		if(respuesta.hasOwnProperty("captura") && respuesta.captura.hasOwnProperty("captura_data")){
			revision_indicador_captura = respuesta.captura.captura_data.indicadores;
		}
		
		revision_indicador_revision = null;
		if(respuesta.hasOwnProperty("revision") && respuesta.revision.hasOwnProperty("revision_data")){
			revision_indicador_revision = respuesta.revision.revision_data.indicadores;
		}

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
				
				var catalogos = '';
				if(usuario.actor_catalogo != null){
					if(usuario.actor_elemento != null){
						catalogos = ' ' + usuario.perfil_txt;
					}
				}
				
				$(user).find(".nombre").text(usuario.nombre + ' ' + usuario.apellidos + ' <' + usuario.usuario + '>');
				$(user).find(".perfil").text(usuario.perfil);
				$(user).find(".actor").text(usuario.actor + municipio + catalogos);
				
			}
		}
		
		$(".btn_filtro").each(function(index, element) {
			$(this).removeClass("activo");
		});
		
		$("#input_filtro_aprobado").val("");
		$("#input_filtro_estatus").val("");
		
		revision_indicador_periodo_preguntas(respuesta);
		
		if(revision_indicador_enviar_retro != null){
			var retroalimentacion = revision_indicador_periodo_preguntas_retroalimentacion(revision_indicador_enviar_retro);
			revision_indicador_periodo_preguntas_notificar(revision_indicador_enviar_retro, retroalimentacion);
			revision_indicador_enviar_retro = null;
		}
		
		if(sesion_permisos([1]) && revision_indicador_captura != null){
			$("#q_captura_todo").show();
			$("#btn_eliminar_todo_indicadores").unbind("click.del").bind("click.del", function(){
				var txt_municipio = (($('#input_actor_municipio').val() != "")?" - " + $('#input_actor_municipio option:selected').text():"")
				
				var txt_catalogo = "";
				if($('#input_actor_catalogo').val() != "" && $('#input_actor_elemento').val()){
					txt_catalogo = " - " + $('#input_actor_catalogo option:selected').text() + ": " + $('#input_actor_elemento option:selected').text();	
				}
				
				lightbox_abrir('<h1>Eliminar</h1><p><b>¿Estas seguro de ELIMINAR las CAPTURAS y REVISIONES de INDICADORES del actor "' + $('#input_actor option:selected').text() + txt_municipio + txt_catalogo + '" en el periodo: ' + $("#input_periodo option:selected").text() + '?</b></p>Sí eliminas toda la captura de indicadores del actor no podrás recuperarla posteriormente.', {
					"aceptar" : {
						"txt": "Eliminar",
						"fn": function(){
							var json_post = {
								"idperiodo" : $("#input_periodo").val(),
								"actor" : $('#input_actor').val(),
								"actor_municipio" : (($("#input_actor_municipio").val() != "")?$("#input_actor_municipio").val():null),
								"actor_catalogo": (($("#input_actor_catalogo").val() != "")?$("#input_actor_catalogo").val():null),
								"actor_elemento": (($("#input_actor_elemento").val() != "")?$("#input_actor_elemento").val():null), 
							};
							
							var data = new FormData();
							data.append("id", sesion_data["id"]); 
							data.append("token", sesion_data["token"]); 
							data.append("dispositivo", sesion_data["dispositivo"]); 
							data.append("perfil", sesion_data["perfil"]);
							
							for(x in json_post){ 
								data.append(x, json_post[x]); 
							}
							
							ajax_enviar(
								data, 
								url_sitio + "ajax/sitio/revision_indicadores_eliminar.php", 
								{
									"ok" : function(){
										revision_indicador_inicializar();
										revision_indicador_periodo(null);
									}, 
								},
								{}
							);
						}
					},
					"cancelar" : {
						"txt": "Cerrar",
						"fn": null
					} 
				}, {
					"size": "grande"
				});	
				
				return false;
			});
		}
		
	};
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/revision_indicadores.php", 
		{
			"ok" : funcion, 
		},
		{}
	);
}

function revision_indicador_periodo_preguntas(respuesta){
	$('#preguntas').html("");
	$('#div_estatus').hide();
	
	var indicadores = respuesta.indicadores;
	
	for(var i in indicadores){
		var indicador = indicadores[i];

		var html = $(".machotes #pregunta_indicador").html();
		var pregunta = $(html).appendTo('#preguntas');	
		$(pregunta).attr("data-id", indicador.idindicador);
		$(pregunta).attr("data-eje", indicador.indicador_data.eje);
		$(pregunta).attr("data-plazo", indicador.idplazo);
		$(pregunta).attr("data-meta_al", indicador.indicador_data.meta_al);
		$(pregunta).attr("data-captura", "false");
		$(pregunta).attr("data-revision", "false");
		$(pregunta).attr("data-aprobado", "0");
		$(pregunta).attr("data-estatus", "0");
		
		
		
		$(pregunta).find(".indicador b.big").html(indicador.indicador_data.indicador);

		$(pregunta).find(".resumen").show();
		$(pregunta).find(".formulario").hide();

		$(pregunta).find(".detalles .eje").html('<div style=" padding:2px 5px;  background-color:' + indicador.color + '; color:#FFF; margin-bottom:0.5em;"><b>' + indicador.eje + '</b></div>');
		$(pregunta).find(".detalles .prioridad").text(indicador.prioridad);
		$(pregunta).find(".detalles .plazo").text(indicador.plazo);
		$(pregunta).find(".detalles .estrategia").text(indicador.estrategia);

		$(pregunta).find(".resumen .meta").text(indicador.indicador_data.meta);
		$(pregunta).find(".resumen .meta_al").text(indicador.indicador_data.meta_al);
		
		$(pregunta).find(".resumen .a_retro .retro").text(0);
		$(pregunta).find(".resumen .a_retro").attr("data-id", indicador.idindicador);

		$(pregunta).find(".resumen .a_capturar").attr("data-id", indicador.idindicador);
		$(pregunta).find(".resumen .a_capturar").text("Revisar");
		$(pregunta).find(".resumen .metodo").text(indicador.indicador_data.metodo);
		
		$(pregunta).find(".resumen .a_enviar").attr("data-id", indicador.idindicador);
		
		$(pregunta).find(".resumen .cumplio").attr("data-cumplio", "0");
		
		revision_indicador_periodo_preguntas_evaluar(indicador.idindicador, indicador.indicador_data.metodo);
		revision_indicador_periodo_preguntas_retro(indicador.idindicador);
		revision_indicador_periodo_preguntas_enviar(indicador.idindicador);

		if(revision_indicador_captura != null && revision_indicador_captura.hasOwnProperty(indicador.idindicador)){
			$(pregunta).attr("data-captura", "true");
			if(
				revision_indicador_captura[indicador.idindicador].hasOwnProperty('iniciado') && 
				revision_indicador_captura[indicador.idindicador].iniciado != null  && 
				Object.keys(revision_indicador_captura[indicador.idindicador].iniciado['v']).length > 0 &&
				revision_indicador_captura[indicador.idindicador].iniciado['v'][0] == "1"
			){	
				$(pregunta).find(".resumen .cumplio").html('<b style="color:blue">' + revision_indicador_captura[indicador.idindicador]["avance"] + '</b>');
				$(pregunta).find(".detalles .estatus_captura").css("background-color", "blue");
				
				$(pregunta).attr("data-estatus", "1");
				$(pregunta).find(".resumen .cumplio").attr("data-cumplio", "1");
				
				var temp = revision_indicador_captura[indicador.idindicador]["iniciado"]["v"][0];
				
				$(pregunta).find(".resumen .cumplio").attr("data-cumplio", temp);
				if(temp == "1" && revision_indicador_captura[indicador.idindicador]["iniciado"]["e"].hasOwnProperty(temp)){
					$(pregunta).find(".resumen .porcentaje").text(revision_indicador_captura[indicador.idindicador]["iniciado"]["e"][temp]);	
					if(revision_indicador_captura[indicador.idindicador]["iniciado"]["e"][temp] == "100"){ 
					
						$(pregunta).find(".resumen .cumplio").html('<b style="color:green">' + revision_indicador_captura[indicador.idindicador]["avance"] + '</b>');
						$(pregunta).find(".detalles .estatus_captura").css("background-color", "springgreen");
						
						$(pregunta).attr("data-estatus", "3");
						$(pregunta).find(".resumen .cumplio").attr("data-cumplio", "3");
					}
				}
				
				var evidencia = revision_indicador_captura[indicador.idindicador]["evidencia"];
				if(evidencia != null && Object.keys(evidencia['v']).length > 0){
					$(pregunta).find(".resumen .evidencia").show();
					
					var html = '<ul>';
					var evidencia = revision_indicador_captura[indicador.idindicador]["evidencia"];
					for (zz in evidencia['v']) {
						var enlace = '#';
						if(evidencia.hasOwnProperty('l') && evidencia['l'].hasOwnProperty(zz) && evidencia['l'][zz] != null) { 
							html += '<li><a href="' + url_sitio + "files/indicadores/" + evidencia['l'][zz] + '" target="_blank">' + evidencia['v'][zz] + '</a></li>'				
						}	
					}
					html += '</ul>';
					$(pregunta).find(".resumen .evidencia .listado").html(html);
				}
			} else {
				$(pregunta).find(".resumen .cumplio").html('<b style="color:red">El indicador no se ha iniciado</b>');
				$(pregunta).find(".detalles .estatus_captura").css("background-color", "red");
				
				$(pregunta).attr("data-estatus", "2");
				$(pregunta).find(".resumen .cumplio").attr("data-cumplio", "2");
			}
		} else {
			$(pregunta).find(".resumen .cumplio").html('<b style="color:lightslategrey">No se ha iniciado la captura del avance</b>');
			//$(pregunta).find(".detalles .estatus_captura").css("background-color", "lightslategrey");
			//$(pregunta).find(".detalles .estatus_captura").css("background-color", "lightslategrey");
			$(pregunta).find(".resumen .evidencia").hide();
			//$(pregunta).attr("data-estatus", "");
		}
		
		if(revision_indicador_revision != null && revision_indicador_revision.hasOwnProperty(indicador.idindicador) && revision_indicador_revision[indicador.idindicador].hasOwnProperty("actual")){
			$(pregunta).attr("data-revision", "true");
			var temp = revision_indicador_revision[indicador.idindicador]["actual"]["aprobo"]["v"][0];
			var aprobo = revision_generales_estatus(temp);
			$(pregunta).attr("data-aprobado", temp);
			$(pregunta).find(".resumen .evaluacion").html(aprobo.aprobo_txt);
			
			$(pregunta).find(".resumen .retro").text(Object.keys(revision_indicador_revision[indicador.idindicador]["historico"]).length);
			
			$(pregunta).find(".detalles .estatus_revision").css("background-color", aprobo.color);
		}
	}
	revision_indicador_periodo_filtros_fn();
	revision_indicador_resize_();
	
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
			revision_indicador_periodo_filtros_fn();
			revision_indicador_resize_();
		});
    });
}

function revision_indicador_periodo_preguntas_evaluar(idindicador){
	$('.seccion #preguntas .pregunta .a_capturar[data-id="' + idindicador + '"]').unbind("click.mostrar").bind("click.mostrar", function(){
		scripts_task_in_progress = true;
		revision_indicador_idindicador = idindicador;

		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).find(".formulario").hide();
			$(this).find(".formulario").html("");
		});

		var html = $(".machotes #evaluar_formulario_indicador").html();
		$(html).appendTo('.seccion #preguntas .pregunta[data-id="' + idindicador + '"] .formulario');	
		$('.seccion #preguntas .pregunta[data-id="' + idindicador + '"] .formulario').show();
		
		revision_indicador_resize();

		revision_indicador_formulario_arr = [
			{"key":"aprobo", "nombre":"Aprobar captura del indicador", "ele":'.pregunta[data-id="' + idindicador + '"] input[name="input_aprobo"]', "tipo": "radio", "validar": "entero", "opcional": false, "onChange":function(){
				switch( $('.pregunta[data-id="' + idindicador + '"] input[name="input_aprobo"]:checked').val() ){
					case "1":
						form_opcional(revision_indicador_formulario_arr, "retroalimentacion", true, true);	
						$("#btn_pregunta_guardar").text("Aprobar");
						break;
					case "2":
						form_opcional(revision_indicador_formulario_arr, "retroalimentacion", false, true);
						$("#btn_pregunta_guardar").text("Enviar a revisión");
						break;
				}
			}},
			{"key":"retroalimentacion", "nombre":"Retroalimentación", "ele":'.pregunta[data-id="' + idindicador + '"] #input_retroalimentacion', "tipo": "textarea", "validar": "texto", "opcional": false},
			{"key":"notificar", "nombre":"Notificar via correo electrónico al actor", "ele":'.pregunta[data-id="' + idindicador + '"] input[name="input_notificar"]', "tipo": "check", "validar": "entero", "opcional": true},
		];
		
		if(revision_indicador_revision != null && revision_indicador_revision.hasOwnProperty(idindicador) && revision_indicador_revision[idindicador].hasOwnProperty("actual")){
			for(x in revision_indicador_revision[idindicador]["actual"]){
				var index = revision_indicador_formulario_arr.findIndex(function(elemento){ return elemento.key === x; });
				if(index >= 0){ 
					revision_indicador_formulario_arr[index]["value"] = revision_indicador_revision[idindicador]["actual"][x]; 
				}
			}
		}

		revision_indicador_periodo_preguntas_forma();
		
		revision_indicador_resize();

		return false;
		
	});
}

function revision_indicador_periodo_preguntas_forma(){
	form_init(revision_indicador_formulario_arr);
	$("#btn_pregunta_guardar").unbind('click').bind('click', function(){
		revision_indicador_periodo_preguntas_validar();
		return false;
	});	
	$("#btn_pregunta_regresar").unbind('click').bind('click', function(){
		scripts_task_in_progress = false;
		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).find(".formulario").hide();
			$(this).find(".formulario").html("");
		});
		revision_indicador_resize_();
		return false;
	});	
}

function revision_indicador_periodo_preguntas_validar(){
	respuesta = form_validar(revision_indicador_formulario_arr);
	if(respuesta.i == 0){ 
		revision_indicador_periodo_preguntas_servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<div class="align-center big margin-yb"><b>Por favor, ingrese lo siguiente:</b></div>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics('revision_indicador_formulario', 'validar', 'error');
		}
	}
}

function revision_indicador_periodo_preguntas_servicio(valores){
	event_google_analytics('revision_indicador_formulario', 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}

	data.append("idindicador", revision_indicador_idindicador);
	data.append("idperiodo", $("#input_periodo").val());
	data.append("actor", $("#input_actor").val());
	data.append("actor_municipio", ($("#input_actor_municipio").val() != "")?$("#input_actor_municipio").val():null);
	data.append("actor_catalogo", ($("#input_actor_catalogo").val() != "")?$("#input_actor_catalogo").val():null);
	data.append("actor_elemento", ($("#input_actor_elemento").val() != "")?$("#input_actor_elemento").val():null);
		
	valores = form_input_valores(valores, revision_indicador_formulario_arr);
	for(x in valores){ 
		var valor = valores[x];
		
		if(x == "notificar" && valor != null){
			if( Object.keys(valor["v"]).length > 0 && valor["v"][0] == 1){
				revision_indicador_enviar_retro = revision_indicador_idindicador;	
			}
		}
		
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
		
		
	}

	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/revision_indicadores_servicio.php", 
		{
			"ok" : function(respuesta){
				event_google_analytics('revision_indicador_formulario', 'servicio', 'ok');
				scripts_task_in_progress = false;
				//revision_indicador_enviar_retro = revision_indicador_idindicador;
				
				lightbox_abrir('<div align="center"><b>Se guardo la información correctamente</b></div>', {
					"aceptar" : {
						"txt": "Continuar",
						"fn": function(){ 
							revision_indicador_inicializar();
							revision_indicador_periodo(null);
						}
					}	
				}, {});		
			}, 
		},
		{}
	);	
}

function revision_indicador_periodo_preguntas_retro(idindicador){
	console.log('.seccion #preguntas .pregunta .a_retro[data-id="' + idindicador + '"]');
	
	$('.seccion #preguntas .pregunta .a_retro[data-id="' + idindicador + '"]').unbind("click.mostrar").bind("click.mostrar", function(){
		
		var html = '';
		if(revision_indicador_revision != null && revision_indicador_revision.hasOwnProperty(idindicador) && revision_indicador_revision[idindicador].hasOwnProperty("historico")){
			
			var historico = revision_indicador_revision[idindicador]["historico"].reverse();
			
			for(x in historico){
				html += '<div style="margin-bottom:1em; border-bottom:1px solid #ccc;">'
				var historia = historico[x];				
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

function revision_indicador_periodo_filtros(ele, datos, attr){
	//datos.sort();
	
	//$(ele +' option:not(:first)').remove();
	$(ele + '  > option:nth-child(n+3)').remove();
	
	var attr = $(ele).attr('rel');
	if (typeof attr !== 'undefined' && attr !== false) { } else { 
		attr = "";
	}
	
	for(var i in datos){
		$(ele).append('<option value="' + i + '">' + datos[i] + '</option>');
	}
	if($(ele + ' option[value="' + attr +'"]').length == 1){ 
		$(ele).val(attr);
	}
	
	$(ele).unbind("change.f").bind("change.f", function(){
		$(this).attr("rel", $(this).val());
		revision_indicador_periodo_filtros_fn();
		
		/*
		switch(ele){
			case "#input_filtro_ejes":
				$("#input_filtro_plazos").val("");
				break;
			case "#input_filtro_plazos":
				$("#input_filtro_ejes").val("");
				break;
			default:
				break;
		}
		
		if($(this).val() == ""){
			$('.seccion #preguntas .pregunta').each(function(index, element) {
				$(this).hide();
			});
		} else if($(this).val() == "-1"){
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
		revision_indicador_resize_();
	});
}

function revision_indicador_periodo_filtros_fn(){
	$('.seccion #preguntas .pregunta').each(function(index, element) {
		$(this).hide();
	});
	
	$('#div_estatus').hide();
	if(
		$("#input_filtro_ejes").val() != "" || 
		$("#input_filtro_metas_al").val() != "" ||
		$("#input_filtro_aprobado").val() != "" || 
		$("#input_filtro_estatus").val()
	){
		
		var filtro_eje = '';
		var filtro_metas_al = '';
		var filtro_aprobado = '';
		var filtro_estatus = '';
		
		if($("#input_filtro_ejes").val() != ""){
			if($("#input_filtro_ejes").val() == "-1"){
				filtro_eje = '[data-eje]';
			} else {
				filtro_eje = '[data-eje="' + $("#input_filtro_ejes").val() + '"]';
			}
		}
		
		if($("#input_filtro_metas_al").val() != ""){
			if($("#input_filtro_metas_al").val() == "-1"){
				filtro_metas_al = '[data-meta_al]';
			} else {
				filtro_metas_al = '[data-meta_al="' + $("#input_filtro_metas_al").val() + '"]';
			}
		}
		
		if($("#input_filtro_aprobado").val() != ""){
			filtro_aprobado = '[data-aprobado="' + $("#input_filtro_aprobado").val() + '"]';
		}
		
		if($("#input_filtro_estatus").val() != ""){
			filtro_estatus = '[data-estatus="' + $("#input_filtro_estatus").val() + '"]';
		}
		
		
		if($('.seccion #preguntas .pregunta' + filtro_eje + filtro_metas_al + filtro_aprobado + filtro_estatus).length == 0){
			lightbox_abrir('<div class="align-center big margin-yb"><b>Sin resultados</b></div>', {
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
		}
		
		var estatus_total = $('.seccion #preguntas .pregunta' + filtro_eje + filtro_metas_al + filtro_aprobado + filtro_estatus).length;
		
		$('.seccion #preguntas .pregunta' + filtro_eje + filtro_metas_al + filtro_aprobado + filtro_estatus).each(function(index, element) {
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
		
		$('#filtros').show();
		
	} 
}

function revision_indicador_periodo_preguntas_enviar(idindicador){
	$('.seccion #preguntas .pregunta .a_enviar[data-id="' + idindicador + '"]').unbind("click.enviar").bind("click.enviar", function(){
		lightbox_abrir('<div class="align-center big margin-yb"><b>Notificar</b></div> Se notificará al actor la últma revisión del indicador via correo electrónico.', {
			"aceptar" : {
				"txt": "Notificar",
				"fn": function(){
					
					/*
					var retroalimentacion = "";
					if(revision_indicador_revision != null && revision_indicador_revision.hasOwnProperty(idindicador) && revision_indicador_revision[idindicador].hasOwnProperty("historico")){
						var temp = revision_indicador_revision[idindicador]["historico"][revision_indicador_revision[idindicador]["historico"].length-1];
						if(temp["retroalimentacion"] != null && temp["retroalimentacion"] != ""){
							retroalimentacion = temp["retroalimentacion"];
						}
					}
					*/
					
					var retroalimentacion = revision_indicador_periodo_preguntas_retroalimentacion(idindicador);
					revision_indicador_periodo_preguntas_notificar(idindicador, retroalimentacion);
					/*
					revision_generales_notificar({
						"tipo" : "Indicador",
						"idperiodo" : $("#input_periodo").val(),
						"periodo" : $("#input_periodo option:selected").text(),
						
						"eje" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".detalles .eje").text(),
						"prioridad" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".detalles .prioridad").text(),
						"plazo" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".detalles .plazo").text(),
						"estrategia" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".detalles .estrategia").text(),
						
						"idactor" : $('#input_actor').val(),
						"actor" : $('#input_actor option:selected').text(),
						"idmunicipio" : $('#input_actor_municipio').val(),
						"municipio" : (($('#input_actor_municipio').val() != "")?$('#input_actor_municipio option:selected').text():""),
						
						
						"data_1" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".indicador b.big").text(),
						"data_2" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".resumen .meta").text(),
						"data_3" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".resumen .meta_al").text(),
						
						"cumplio" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".resumen .cumplio_txt").text(),
						"evaluacion" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".resumen .evaluacion").text(),
						"retroalimentacion" : retroalimentacion,
					});
					*/
				}
			},
			"cancelar" : {
				"txt": "Cerrar",
				"fn": null
			} 
		}, {});
		return false;
	});
}

function revision_indicador_periodo_preguntas_retroalimentacion(idindicador){
	var retroalimentacion = "";
	if(revision_indicador_revision != null && revision_indicador_revision.hasOwnProperty(idindicador) && revision_indicador_revision[idindicador].hasOwnProperty("historico")){
		var temp = revision_indicador_revision[idindicador]["historico"][revision_indicador_revision[idindicador]["historico"].length-1];
		if(temp["retroalimentacion"] != null && temp["retroalimentacion"] != ""){
			retroalimentacion = temp["retroalimentacion"];
		}
	}
	return retroalimentacion;
}
function revision_indicador_periodo_preguntas_notificar(idindicador, retroalimentacion){
	revision_generales_notificar({
		"tipo" : "Indicador",
		"idperiodo" : $("#input_periodo").val(),
		"periodo" : $("#input_periodo option:selected").text(),
		
		"eje" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".detalles .eje").text(),
		"prioridad" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".detalles .prioridad").text(),
		"plazo" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".detalles .plazo").text(),
		"estrategia" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".detalles .estrategia").text(),
		
		"idactor" : $('#input_actor').val(),
		"actor" : $('#input_actor option:selected').text(),
		"idmunicipio" : $('#input_actor_municipio').val(),
		"municipio" : (($('#input_actor_municipio').val() != "")?$('#input_actor_municipio option:selected').text():""),
		
		"idcatalogo" : $('#input_actor_catalogo').val(),
		"catalogo" : (($('#input_actor_catalogo').val() != "")?$('#input_actor_catalogo option:selected').text():""),
		"idelemento" : $('#input_actor_elemento').val(),
		"elemento" : (($('#input_actor_elemento').val() != "")?$('#input_actor_elemento option:selected').text():""),
		
		
		"data_1" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".indicador b.big").text(),
		"data_2" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".resumen .meta").text(),
		"data_3" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".resumen .meta_al").text(),
		
		"cumplio" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".resumen .cumplio_txt").text(),
		"evaluacion" : $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').find(".resumen .evaluacion").text(),
		"retroalimentacion" : retroalimentacion,
	});	
}
