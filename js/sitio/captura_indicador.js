var captura_indicador_formulario_arr = null;
var captura_indicador_captura = null;
var captura_indicador_revision = null;
var captura_indicador_datos = {};
var captura_indicador_idindicador = null;

function captura_indicador_ready(){
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
				$("#input_filtro_metas_al").val("");
				captura_indicador_periodo($(this).val());
			});
		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	sesion_verificar_no = function(){
		
	}
}
function captura_indicador_load(){
	captura_indicador_resize();
}
function captura_indicador_resize(){
	scripts_resize();
}

function captura_indicador_resize_(){
	captura_indicador_resize();
	setTimeout(function(){
		captura_indicador_resize();
	}, 200);
}


function captura_indicador_periodo(periodo){
	if(periodo != ""){
		captura_indicador_periodo_servicio(periodo);
		//$('#filtros').show();
	} else {
		$('#div_estatus').hide();
		$('#preguntas').html("");
		$('#filtros').hide();
	}
}

function captura_indicador_periodo_servicio(periodo){
	var data = new FormData();
	data.append("id", sesion_data["id"]); 
	data.append("token", sesion_data["token"]); 
	data.append("dispositivo", sesion_data["dispositivo"]); 
	data.append("perfil", sesion_data["perfil"]);
	data.append("periodo", periodo); 

	var funcion = function(respuesta){		
		event_google_analytics('captura', 'periodo', 'ok');
		
		captura_indicador_formulario_arr = null;
		captura_indicador_idindicador = null;

		if(respuesta.hasOwnProperty("ejes") && respuesta.hasOwnProperty("ejes")){
			captura_indicador_periodo_filtros("#input_filtro_ejes", respuesta.ejes, "data-eje");
		}
		if(respuesta.hasOwnProperty("metas_al") && respuesta.hasOwnProperty("metas_al")){
			captura_indicador_periodo_filtros("#input_filtro_metas_al", respuesta.metas_al, "data-meta_al");
		}

		captura_indicador_captura = null;
		if(respuesta.hasOwnProperty("captura") && respuesta.captura.hasOwnProperty("captura_data")){
			captura_indicador_captura = respuesta.captura.captura_data.indicadores;
		}
		
		captura_indicador_revision = null;
		if(respuesta.hasOwnProperty("revision") && respuesta.revision.hasOwnProperty("revision_data")){
			captura_indicador_revision = respuesta.revision.revision_data.indicadores;
		}
		
		$(".btn_filtro").each(function(index, element) {
			$(this).removeClass("activo");
		});
		
		$("#input_filtro_aprobado").val("");
		$("#input_filtro_estatus").val("");

		captura_indicador_periodo_preguntas(respuesta);
		
		$("#btn_copiar").unbind("click.copiar").bind("click.copiar", function(){
			
			return false;
		});
		
		$("#btn_imprimir").unbind("click.imprimir").bind("click.imprimir", function(){
			var html = $('#form_captura').html();
			var css = '';
			
			var titulo = $('.seccion.navegacion .txt_perfil').html();
			
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

function captura_indicador_periodo_preguntas(respuesta){
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
		$(pregunta).attr("data-aprobado", "0");
		$(pregunta).attr("data-estatus", "0");
		
		
		$(pregunta).find(".indicador b.big").html(indicador.indicador_data.indicador);

		$(pregunta).find(".resumen").show();
		$(pregunta).find(".formulario").hide();

		$(pregunta).find(".detalles .eje").html('<div style=" padding:2px 5px;  background-color:' + indicador.color + '; color:#FFF; margin-bottom:0.5em;"><b>' + indicador.eje + '</b></div>');
		$(pregunta).find(".detalles .prioridad").text(indicador.prioridad);
		$(pregunta).find(".detalles .plazo").text(indicador.plazo);
		$(pregunta).find(".detalles .estrategia").text(indicador.estrategia);
		
		$(pregunta).find(".resumen .porcentaje").text(0);

		$(pregunta).find(".resumen .meta").text(indicador.indicador_data.meta);
		$(pregunta).find(".resumen .meta_al").text(indicador.indicador_data.meta_al);
		
		$(pregunta).find(".resumen .a_retro .retro").text(0);
		$(pregunta).find(".resumen .a_retro").attr("data-id", indicador.idindicador);

		$(pregunta).find(".resumen .a_capturar").attr("data-id", indicador.idindicador);
		$(pregunta).find(".resumen .a_enviar").hide();

		$(pregunta).find(".resumen .metodo").text(indicador.indicador_data.metodo);
		
		$(pregunta).find(".resumen .cumplio").attr("data-cumplio", "0");

		//captura_indicador_periodo_preguntas_ver(indicador.idindicador);
		captura_indicador_periodo_preguntas_capturar(indicador.idindicador, indicador.indicador_data.metodo);
		captura_indicador_periodo_preguntas_retro(indicador.idindicador);
		
		$(pregunta).find(".resumen .evidencia").hide();
		
		if(captura_indicador_captura != null && captura_indicador_captura.hasOwnProperty(indicador.idindicador)){
			$(pregunta).attr("data-captura", "true");
			if(
				captura_indicador_captura[indicador.idindicador].hasOwnProperty('iniciado') && 
				captura_indicador_captura[indicador.idindicador].iniciado != null  && 
				Object.keys(captura_indicador_captura[indicador.idindicador].iniciado['v']).length > 0 &&
				captura_indicador_captura[indicador.idindicador].iniciado['v'][0] == "1"
			){				
				$(pregunta).find(".resumen .cumplio").html('<b style="color:blue">' + captura_indicador_captura[indicador.idindicador]["avance"] + '</b>');
				$(pregunta).find(".detalles .estatus_captura").css("background-color", "blue");
				
				$(pregunta).attr("data-estatus", "1");
				$(pregunta).find(".resumen .cumplio").attr("data-cumplio", "1");
				
				var temp = captura_indicador_captura[indicador.idindicador]["iniciado"]["v"][0];
				
				if(temp == "1" && captura_indicador_captura[indicador.idindicador]["iniciado"]["e"].hasOwnProperty(temp)){
					$(pregunta).find(".resumen .porcentaje").text(captura_indicador_captura[indicador.idindicador]["iniciado"]["e"][temp]);	
					if(captura_indicador_captura[indicador.idindicador]["iniciado"]["e"][temp] == "100"){ 
						$(pregunta).find(".resumen .cumplio").html('<b style="color:green">' + captura_indicador_captura[indicador.idindicador]["avance"] + '</b>');
						$(pregunta).find(".detalles .estatus_captura").css("background-color", "springgreen");
						
						$(pregunta).attr("data-estatus", "3");
						$(pregunta).find(".resumen .cumplio").attr("data-cumplio", "3");
					}
				}
				
				var evidencia = captura_indicador_captura[indicador.idindicador]["evidencia"];
				if(evidencia != null && Object.keys(evidencia['v']).length > 0){
					$(pregunta).find(".resumen .evidencia").show();
					var html = '<ul>';
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
			$(pregunta).find(".resumen .evidencia").hide();
		}
		
		if(captura_indicador_revision != null && captura_indicador_revision.hasOwnProperty(indicador.idindicador) && captura_indicador_revision[indicador.idindicador].hasOwnProperty("actual")){
			$(pregunta).attr("data-revision", "true");
			var temp = captura_indicador_revision[indicador.idindicador]["actual"]["aprobo"]["v"][0];
			var aprobo = revision_generales_estatus(temp);
			$(pregunta).attr("data-aprobado", temp);
			$(pregunta).find(".resumen .evaluacion").html(aprobo.aprobo_txt);
			
			$(pregunta).find(".resumen .retro").text(Object.keys(captura_indicador_revision[indicador.idindicador]["historico"]).length);
			$(pregunta).find(".detalles .estatus_revision").css("background-color", aprobo.color);
		}
	}
	captura_indicador_periodo_filtros_fn();
	captura_indicador_resize_();
	
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
			captura_indicador_periodo_filtros_fn();
			captura_indicador_resize_();
		});
    });
}

function captura_indicador_periodo_preguntas_ver(idindicador){
	$('.seccion #preguntas .pregunta .a_ver[data-id="' + idindicador + '"]').unbind("click.mostrar").bind("click.mostrar", function(){
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

function captura_indicador_periodo_preguntas_capturar(idindicador, txt){
	$('.seccion #preguntas .pregunta .a_capturar[data-id="' + idindicador + '"]').unbind("click.mostrar").bind("click.mostrar", function(){
		
		scripts_task_in_progress = true;
		
		captura_indicador_idindicador = idindicador;

		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).find(".resumen").show();
			$(this).find(".formulario").hide();
			$(this).find(".formulario").html("");
		});

		$('.seccion #preguntas .pregunta[data-id="' + idindicador + '"] .resumen').hide();
		$('.seccion #preguntas .pregunta[data-id="' + idindicador + '"] .formulario').show();

		var html = $(".machotes #pregunta_formulario_indicador").html();
		var forma = $(html).appendTo('.seccion #preguntas .pregunta[data-id="' + idindicador + '"] .formulario');	

		$(forma).find("div.avance.p").text(txt);

		captura_indicador_resize();

		captura_indicador_formulario_arr = [
			{"key":"iniciado", "nombre":"El indicador ya se inició", "ele":'.pregunta[data-id="' + idindicador + '"] input[name="input_iniciado"]', "tipo": "radio", "validar": "entero", "opcional": false, "especificar": true, "especificar_validar": "porcentaje", "onChange":function(){
				switch( $('.pregunta[data-id="' + idindicador + '"] input[name="input_iniciado"]:checked').val() ){
					case "1":
						$('.pregunta[data-id="' + idindicador + '"] #div_iniciado').show();
						form_opcional(captura_indicador_formulario_arr, "avance", false, true);	
						form_opcional(captura_indicador_formulario_arr, "evidencia", false, true);	
						break;
					case "2":
						$('.pregunta[data-id="' + idindicador + '"] #div_iniciado').hide();
						form_opcional(captura_indicador_formulario_arr, "avance", true, true);
						form_opcional(captura_indicador_formulario_arr, "evidencia", true, true);	
						break;
				}
			}},
			{"key":"avance", "nombre":txt, "ele":'.pregunta[data-id="' + idindicador + '"] #input_avance', "tipo": "textarea", "validar": "texto", "opcional": false},
			{"key":"evidencia", "nombre":"Evidencia", "ele":'.pregunta[data-id="' + idindicador + '"] #input_evidencia', "tipo": "file", "validar": "documento", "opcional": false,"callback": function(){ captura_indicador_resize(); }, "url_files": "files/indicadores/" }
		];

		if(captura_indicador_captura != null && captura_indicador_captura.hasOwnProperty(idindicador)){
			for(x in captura_indicador_captura[idindicador]){
				var index = captura_indicador_formulario_arr.findIndex(function(elemento){ return elemento.key === x; });
				if(index >= 0){ 
					captura_indicador_formulario_arr[index]["value"] = captura_indicador_captura[idindicador][x]; 
				}
			}
		}

		captura_indicador_periodo_preguntas_forma();
		
		/*
		$('.seccion #preguntas .pregunta[data-id="' + idindicador + '"] .formulario').show('fast', function(){
			$('html, body').animate({
				scrollTop: $('.seccion #preguntas .pregunta[data-id="' + idindicador + '"]').offset().top
			}, 1000);
			captura_indicador_resize();
		});
		*/
		
		captura_indicador_resize();

		return false;
		
	});
}
function captura_indicador_periodo_preguntas_forma(){
	form_init(captura_indicador_formulario_arr);
	$("#btn_pregunta_guardar").unbind('click').bind('click', function(){
		captura_indicador_periodo_preguntas_validar();
		return false;
	});	
	$("#btn_pregunta_regresar").unbind('click').bind('click', function(){
		
		scripts_task_in_progress = false;
		
		$('.seccion #preguntas .pregunta').each(function(index, element) {
			$(this).find(".resumen").show();
			$(this).find(".formulario").hide();
			$(this).find(".formulario").html("");
		});
		captura_indicador_resize_();
		return false;
	});	
}

function captura_indicador_periodo_preguntas_validar(){
	respuesta = form_validar(captura_indicador_formulario_arr);
	if(respuesta.i == 0){ 
		captura_indicador_periodo_preguntas_servicio(respuesta.valores); 
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

function captura_indicador_periodo_preguntas_servicio(valores){
	event_google_analytics('captura_indicador_formulario', 'servicio', 'iniciar');	
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}

	data.append("idindicador", captura_indicador_idindicador);
	data.append("idperiodo", $("#input_periodo").val());
	valores = form_input_valores(valores, captura_indicador_formulario_arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		data.append(x, valor); 
	}

	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/captura_indicadores_servicio.php", 
		{
			"ok" : function(respuesta){
				event_google_analytics('captura_indicador_formulario', 'servicio', 'ok');
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
									captura_indicador_periodo($("#input_periodo").val());
								}
							}	
						}, 
						{}
					);
				}
				
				var files = form_input_file_enviar(captura_indicador_formulario_arr);
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
					data["base_arr"] = 'indicadores';
					
					data["idcaptura"] = respuesta.id;
					data["idperiodo"] = $("#input_periodo").val();
					data["idindicador"] = captura_indicador_idindicador;
					
					ajax_archivos(0, data, files, url_sitio + "ajax/sitio/captura_archivos.php", funcion, false);
				} else { funcion(null); }
				
			}, 
		},
		{}
	);	
}

function captura_indicador_periodo_preguntas_retro(idindicador){
	$('.seccion #preguntas .pregunta .a_retro[data-id="' + idindicador + '"]').unbind("click.mostrar").bind("click.mostrar", function(){
		var html = '';
		if(captura_indicador_revision != null && captura_indicador_revision.hasOwnProperty(idindicador) && captura_indicador_revision[idindicador].hasOwnProperty("historico")){
			for(x in captura_indicador_revision[idindicador]["historico"]){
				html += '<div style="margin-bottom:1em; border-bottom:1px solid #ccc;">'
				var historia = captura_indicador_revision[idindicador]["historico"][x];				
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

function captura_indicador_periodo_filtros(ele, datos, attr){
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
		captura_indicador_periodo_filtros_fn();
		
		/*
		switch(ele){
			case "#input_filtro_ejes":
				$("#input_filtro_metas_al").val("");
				break;
			case "#input_filtro_metas_al":
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
		captura_indicador_resize_();
	});
}

function captura_indicador_periodo_filtros_fn(){
	$('.seccion #preguntas .pregunta').each(function(index, element) {
		$(this).hide();
	});
	$('#div_estatus').hide();
	if(
		$("#input_filtro_ejes").val() != "" || 
		$("#input_filtro_metas_al").val() != ""
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
			lightbox_abrir('<div class="align-center big margin-yb"><b>No hay indicadores que coincidan con la búsqueda realizada.</b></div>', {
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
		$('#div_estatus #estatus_total').text(estatus_total);
		
		$('#div_estatus #estatus_aprobados').text(estatus_aprobados);
		$('#div_estatus #estatus_rechazados').text(estatus_rechazados);
		$('#div_estatus #estatus_revision_').text(estatus_revision_);
		
		$('#div_estatus').show();
		
		$('#btn_revision').unbind('click').bind('click', function(){
			if(estatus_captura == estatus_total && estatus_captura > 0){ 
				caputra_generales_revision({
					"tipo" : "Indicadores",
					
					"idperiodo" : $("#input_periodo").val(),
					"periodo" : $("#input_periodo option:selected").text(),
					
					"idactor" : sesion_data["id"],
					"actor" : sesion_data["txt_perfil"],
					"perfil_txt" : sesion_data["perfil_txt"],
					
					"eje": $("#input_filtro_ejes option:selected").text(),
					"filtro": $("#input_filtro_metas_al option:selected").text(),
					"filtro_txt": "Meta al año"
				});
			} else {
				lightbox_abrir('<div class="align-center big margin-yb"><b>Advertencia</b></div>Capture todos los indicadores para solicitar una revisión.', {
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

function captura_indicador_periodo_filtros_estatus(){
	$('.seccion #preguntas .pregunta').each(function(index, element) {
		$(this).hide();
	});
	
}