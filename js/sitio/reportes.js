var reportes_tabla = null;
var reportes_data = null;

// FIX: helper para números seguros
function _toFiniteNumber(v) {
	v = parseFloat(v);
	return (Number.isFinite(v) ? v : null);
}

function reportes_ready() {

	$('#download_data').hide();

	sesion_verificar_ini = function () {
		if (sesion_permisos([1, 5])) {

			var _tabla_periodos = new tablaJSON({ "base": "periodo" });
			_tabla_periodos.loadData("all", "#input_periodo", "select", {
				"orden": [
					{
						"col": "inicia",
						"tipo": "fecha",
						"dir": "asc"
					}

				]
			});

			var _tabla_periodos = new tablaJSON({ "base": "eje" });
			_tabla_periodos.loadData("all", "#input_filtro_ejes", "select", {
				"orden": [
					{
						"col": "eje",
						"tipo": "texto",
						"dir": "asc"
					}

				]
			});

			if ($("#input_filtro_plazos").length > 0) {
				var _tabla_periodos = new tablaJSON({ "base": "plazo" });
				_tabla_periodos.loadData("all", "#input_filtro_plazos", "select", {
					"orden": [
						{
							"col": "plazo",
							"tipo": "texto",
							"dir": "asc"
						}

					]
				});
			}

			$("#input_periodo").unbind("change.f").bind("change.f", function () {

				if ($("#input_periodo").val() != "") {

					$("#btn_descarga_full").attr("href", $("#btn_descarga_full").attr("data-href") + "&idperiodo=" + $("#input_periodo").val());

					$("#input_filtro_ejes").val("");
					$("#input_filtro_metas_al").val("");
					$("#input_filtro_plazos").val("");

					var data = new FormData();
					data.append("id", sesion_data["id"]);
					data.append("token", sesion_data["token"]);
					data.append("dispositivo", sesion_data["dispositivo"]);
					data.append("perfil", sesion_data["perfil"]);
					data.append("idperiodo", $("#input_periodo").val());
					data.append("tipo", (($("#input_filtro_plazos").length > 0) ? "lineas" : "indicadores"));
					ajax_enviar(
						data,
						url_sitio + "ajax/sitio/reportes.php",
						{
							"ok": function (respuesta) {

								if ($("#input_filtro_metas_al").length > 0) {
									$('#input_filtro_metas_al  > option:nth-child(n+3)').remove();

									var attr = $("#input_filtro_metas_al").attr('rel');
									if (typeof attr !== 'undefined' && attr !== false) { } else {
										attr = "";
									}

									for (var i in respuesta.metas_al) {
										$("#input_filtro_metas_al").append('<option value="' + i + '" ' + ((attr == i) ? "selected" : "") + '>' + respuesta.metas_al[i] + '</option>');
									}
								}

								reportes_data = respuesta;
								reportes_datos(reportes_data, (($("#input_filtro_plazos").length > 0) ? "lineas" : "indicadores"));

							}
						},
						{}
					);
				} else {
					if (reportes_tabla != null) {
						reportes_tabla.clear();
						reportes_tabla.destroy();
						$('#table_data').empty();
						reportes_tabla = null;
					}
				}
			});

			$("#input_filtro_ejes").unbind("change.f").bind("change.f", function () {
				if (reportes_data != null) {
					lightbox_abrir('<div class="align-center">cargando datos...</div>', {}, {});
					setTimeout(function () {
						reportes_datos(reportes_data, (($("#input_filtro_plazos").length > 0) ? "lineas" : "indicadores"));
					}, 1000);
				}
			});

			$("#input_filtro_plazos").unbind("change.f").bind("change.f", function () {
				if (reportes_data != null) {
					lightbox_abrir('<div class="align-center">cargando datos...</div>', {}, {});
					setTimeout(function () {
						reportes_datos(reportes_data, "lineas");
					}, 1000);
				}
			});

			$("#input_filtro_metas_al").unbind("change.f").bind("change.f", function () {
				if (reportes_data != null) {
					lightbox_abrir('<div class="align-center">cargando datos...</div>', {}, {});
					setTimeout(function () {
						reportes_datos(reportes_data, "indicadores");
					}, 1000);
				}
			});
		}
	}

	sesion_verificar_no = function () {

	}
}
function reportes_load() {
	reportes_resize();
}
function reportes_resize() {
	scripts_resize();
}

function reportes_resize_() {
	reportes_resize();
	setTimeout(function () {
		reportes_resize();
	}, 200);
}

function reportes_datos_borrar(actores, i, tipo, identificador, ident, actor, municipios_arr) {
	var index = actores[i][tipo].findIndex(function (elemento) { if (typeof elemento !== 'undefined') { return elemento[identificador] === ident; } });
	if (index >= 0) { delete actores[i][tipo][index]; }

	if (!actor.municipios) {
		if (
			actor.hasOwnProperty("captura") &&
			actor.captura.hasOwnProperty("captura_data") &&
			actor.captura.captura_data[tipo].hasOwnProperty(ident)) {
			delete actores[i].captura.captura_data[tipo][ident];
		}
		if (
			actor.hasOwnProperty("revision") &&
			actor.revision.hasOwnProperty("revision_data") &&
			actor.revision.revision_data[tipo].hasOwnProperty(ident)) {
			delete actores[i].revision.revision_data[tipo][ident];
		}
	} else {
		for (var z in municipios_arr) {
			if (
				actor.hasOwnProperty("captura") &&
				actor.captura.hasOwnProperty(municipios_arr[z]["id"]) &&
				actor.captura[municipios_arr[z]["id"]].hasOwnProperty("captura") &&
				actor.captura[municipios_arr[z]["id"]].captura.hasOwnProperty("captura_data") &&
				actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo].hasOwnProperty(ident)) {
				delete actores[i].captura[municipios_arr[z]["id"]].captura.captura_data[tipo][ident];
			}
			if (
				actor.hasOwnProperty("revision") &&
				actor.revision.hasOwnProperty(municipios_arr[z]["id"]) &&
				actor.revision[municipios_arr[z]["id"]].hasOwnProperty("revision") &&
				actor.revision[municipios_arr[z]["id"]].revision.hasOwnProperty("revision_data") &&
				actor.revision[municipios_arr[z]["id"]].revision.revision_data[tipo].hasOwnProperty(ident)) {
				delete actores[i].revision[municipios_arr[z]["id"]].revision.revision_data[tipo][ident];
			}
		}
	}
}

function reportes_datos(respuesta, tipo) {

	var promerdio_municipios = {};

	var actores = JSON.parse(JSON.stringify(respuesta.actores));
	var columnas = [];

	columnas.push({ data: 'actor', title: "Actor", "orderable": true, className: "dt-head-left dt-body-left no_wrap" });
	columnas.push({ data: 'enlace', title: "Vista", "orderable": true, className: "dt-head-left dt-body-left no_wrap" });
	columnas.push({ data: 'elementos', title: ((tipo == "lineas") ? "Líneas <br> de acción" : "Indicadores"), "orderable": true, className: "dt-head-left dt-body-left no_wrap" });
	columnas.push({ data: 'capturados', title: "Capturados", "orderable": true, className: "dt-head-left dt-body-left no_wrap" });
	columnas.push({ data: 'aprobados', title: "Aprobados", "orderable": true, className: "dt-head-left dt-body-left no_wrap" });
	columnas.push({ data: 'rechazados', title: "Rechazados", "orderable": true, className: "dt-head-left dt-body-left no_wrap" });
	columnas.push({ data: 'revision', title: "En revisión", "orderable": true, className: "dt-head-left dt-body-left no_wrap" });
	columnas.push({ data: 'avance', title: "Avance promedio <br> (solo aprobados)", "orderable": true, className: "dt-head-left dt-body-left no_wrap" });

	//filtrar por eje / meta / plazos
	var filtro_eje = null;
	if ($("#input_filtro_ejes").val() != "") {
		filtro_eje = $("#input_filtro_ejes").val();
	}

	var filtro_plazos = null;
	if ($("#input_filtro_plazos").val() != "") {
		filtro_plazos = $("#input_filtro_plazos").val();
	}

	var filtro_metas = null;
	if ($("#input_filtro_metas_al").val() != "") {
		filtro_metas = $("#input_filtro_metas_al").val();
	}

	for (i in actores) {
		var actor = actores[i];
		if (actor.hasOwnProperty("captura") && actor.captura.hasOwnProperty("captura_data")) {
			//console.log("capturas sin filtro => ", Object.keys(actor.captura.captura_data[tipo]).length);
		}

		var datos = (tipo == "lineas") ? actor.lineas : actor.indicadores;
		var identificador = (tipo == "lineas") ? "idlinea" : "idindicador";

		if (filtro_eje != null) {
			for (k in datos) {
				var ident = datos[k][identificador];
				var suma = true;
				if (datos[k]["ideje"] == filtro_eje) {
					suma = true;
					if (filtro_plazos != null) {
						suma = false;
						if (datos[k]["idplazo"] == filtro_plazos) {
							suma = true;
						}
					}
					if (filtro_metas != null) {
						suma = false;
						if (datos[k]["indicador_data"]["meta_al"] == filtro_metas) {
							suma = true;
						}
					}
				} else {
					suma = false;
				}

				if (!suma) {
					reportes_datos_borrar(actores, i, tipo, identificador, ident, actor, municipios_arr);
				}
			}
		} else if (filtro_plazos != null) {
			for (k in datos) {
				var ident = datos[k][identificador];
				if (datos[k]["idplazo"] != filtro_plazos) {
					reportes_datos_borrar(actores, i, tipo, identificador, ident, actor, municipios_arr);
				}
			}
		} else if (filtro_metas != null) {
			for (k in datos) {
				var ident = datos[k][identificador];
				if (datos[k]["indicador_data"]["meta_al"] != filtro_metas) {
					reportes_datos_borrar(actores, i, tipo, identificador, ident, actor, municipios_arr);
				}
			}
		}

	}


	var data = [];

	for (i in actores) {
		var actor = actores[i];

		if (actor.hasOwnProperty("captura") && actor.captura.hasOwnProperty("captura_data")) {
			//console.log("capturas con filtro => ", Object.keys(actor.captura.captura_data[tipo]).length);
		}

		var tiene = "";
		if (actor.municipios || actor.catalogos) {
			tiene = '<a href="#" class="a_municipios" data-id="' + actor.idactor + '">' + form_trim(actor.actor) + '</a>';
		}
		var valores = {}
		valores["enlace"] = '--';

		var temp = form_trim(actor.actor);
		if (tiene != "") {
			temp = tiene;
		} else {
			valores["enlace"] = '<a href="#" class="a_ir" data-id="' + actor.idactor + '" ><img src="' + url_sitio + 'img/sitio/enlace.png"></a> ';
		}
		valores["actor"] = temp;



		if (actor.municipios || actor.catalogos) {
			valores["elementos"] = (tipo == "lineas") ? Object.keys(actor.lineas).length : Object.keys(actor.indicadores).length;
			valores["capturados"] = "--";
			valores["aprobados"] = "--";
			valores["rechazados"] = "--";
			valores["revision"] = "--";
			valores["avance"] = '<span class="promedio_mun_' + actor.idactor + '">--</span>';
			promerdio_municipios[actor.idactor] = new Array();
		} else {

			valores["elementos"] = (tipo == "lineas") ? Object.keys(actor.lineas).length : Object.keys(actor.indicadores).length;
			valores["capturados"] = 0;
			valores["aprobados"] = 0;
			valores["rechazados"] = 0;
			valores["revision"] = 0;
			valores["avance"] = 0;

			if (actor.hasOwnProperty("captura")) {
				valores["capturados"] = Object.keys(actor.captura.captura_data[tipo]).length;
			}

			if (actor.hasOwnProperty("revision")) {
				var elementos = actor.revision.revision_data[tipo];
				for (var j in elementos) {
					var estatus = parseInt(elementos[j]["actual"]["aprobo"]["v"][0], 10);
					switch (estatus) {
						case 1:
							valores["aprobados"]++;

							if (
								tipo == "indicadores" &&
								actor.hasOwnProperty("captura") &&
								actor.captura.hasOwnProperty("captura_data") &&
								actor.captura.captura_data[tipo].hasOwnProperty(j) &&
								actor.captura.captura_data[tipo][j].hasOwnProperty('iniciado') &&
								actor.captura.captura_data[tipo][j]["iniciado"]['v'][0] == "1" &&
								actor.captura.captura_data[tipo][j]["iniciado"].hasOwnProperty("e") &&
								actor.captura.captura_data[tipo][j]["iniciado"]["e"].hasOwnProperty("1")
							) {
								valores["avance"] += parseInt(actor.captura.captura_data[tipo][j]["iniciado"]["e"][1]);
							} else if (
								tipo == "lineas" &&
								actor.hasOwnProperty("captura") &&
								actor.captura.hasOwnProperty("captura_data") &&
								actor.captura.captura_data[tipo].hasOwnProperty(j) &&
								actor.captura.captura_data[tipo][j].hasOwnProperty('cumplio')
							) {
								var temp = actor.captura.captura_data[tipo][j]["cumplio"]["v"][0];
								var avance = 0;
								switch (temp) {
									case "2":
									case "3":
										avance = parseInt(actor.captura.captura_data[tipo][j]["cumplio"]["e"][temp], 10);
										break;
									case "4":
										avance = 100;
										break;
								}
								valores["avance"] += avance;
							}
							break;
						case 2:
							valores["rechazados"]++;
							break;
						case 3:
							valores["revision"]++;
							break;
					}
				}
			}
		}

		if (valores["avance"] > 0) {
			// OJO: aquí puede dar NaN si elementos==0 (pero más abajo lo tapamos con '--')
			valores["avance"] = (valores["avance"] / valores["elementos"]).toFixed(2);
		}
		if (valores["avance"] != '<span class="promedio_mun_' + actor.idactor + '">--</span>') {
			valores["avance"] = valores["avance"] + "%"
		}

		if (valores["elementos"] == 0) {
			valores["capturados"] = "--";
			valores["aprobados"] = "--";
			valores["rechazados"] = "--";
			valores["revision"] = "--";
			valores["avance"] = "--";
		}

		data.push(valores);


		if (tiene != "") {
			if (actor.municipios) {
				for (var z in municipios_arr) {
					var valores = {}
					valores["actor"] = '<span data-id="' + actor.idactor + '" data-municipio="' + municipios_arr[z]["id"] + '"  class="municipios">' + form_trim(actor.actor) + " - " + municipios_arr[z]["municipio"] + "</span> ";

					valores["enlace"] = '<a href="#" class="a_ir" data-id="' + actor.idactor + '" data-municipio="' + municipios_arr[z]["id"] + '" ><img src="' + url_sitio + 'img/sitio/enlace.png"></a> ';

					valores["elementos"] = (tipo == "lineas") ? Object.keys(actor.lineas).length : Object.keys(actor.indicadores).length;
					valores["capturados"] = 0;
					valores["aprobados"] = 0;
					valores["rechazados"] = 0;
					valores["revision"] = 0;
					valores["avance"] = 0;

					if (actor.captura.hasOwnProperty(municipios_arr[z]["id"])) {
						valores["capturados"] = Object.keys(actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo]).length;
					}

					if (actor.revision.hasOwnProperty(municipios_arr[z]["id"])) {
						var elementos = actor.revision[municipios_arr[z]["id"]].revision.revision_data[tipo];
						for (var j in elementos) {
							var estatus = parseInt(elementos[j]["actual"]["aprobo"]["v"][0], 10);

							switch (estatus) {
								case 1:
									valores["aprobados"]++;
									if (
										tipo == "indicadores" &&
										actor.hasOwnProperty("captura") &&
										actor.captura.hasOwnProperty(municipios_arr[z]["id"]) &&
										actor.captura[municipios_arr[z]["id"]].hasOwnProperty("captura") &&
										actor.captura[municipios_arr[z]["id"]].captura.hasOwnProperty("captura_data") &&
										actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo].hasOwnProperty(j) &&
										actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j].hasOwnProperty('iniciado') &&
										actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["iniciado"]['v'][0] == "1" &&
										actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["iniciado"].hasOwnProperty("e") &&
										actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["iniciado"]["e"].hasOwnProperty("1")
									) {
										valores["avance"] += parseInt(actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["iniciado"]["e"][1]);
									} else if (
										tipo == "lineas" &&
										actor.hasOwnProperty("captura") &&
										actor.captura.hasOwnProperty(municipios_arr[z]["id"]) &&
										actor.captura[municipios_arr[z]["id"]].hasOwnProperty("captura") &&
										actor.captura[municipios_arr[z]["id"]].captura.hasOwnProperty("captura_data") &&
										actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo].hasOwnProperty(j) &&
										actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j].hasOwnProperty('cumplio')
									) {
										var temp = actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["cumplio"]["v"][0];
										var avance = 0;
										switch (temp) {
											case "2":
											case "3":
												avance = parseInt(actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["cumplio"]["e"][temp], 10);
												break;
											case "4":
												avance = 100;
												break;
										}
										valores["avance"] += avance;
									}
									break;
								case 2:
									valores["rechazados"]++;
									break;
								case 3:
									valores["revision"]++;
									break;
							}
						}
					}

					// FIX: calcular avance_num seguro
					var avance_num = null;
					if (valores["elementos"] > 0) {
						if (valores["avance"] > 0) {
							avance_num = parseFloat((valores["avance"] / valores["elementos"]).toFixed(2));
						} else {
							avance_num = 0;
						}
					}

					// FIX: guardar solo números finitos para el promedio
					if (avance_num !== null && Number.isFinite(avance_num)) {
						promerdio_municipios[actor.idactor].push(avance_num);
					}

					// mostrar
					if (avance_num === null) {
						valores["avance"] = "--";
					} else {
						valores["avance"] = avance_num.toFixed(2) + "%";
					}

					if (valores["elementos"] == 0) {
						valores["capturados"] = "--";
						valores["aprobados"] = "--";
						valores["rechazados"] = "--";
						valores["revision"] = "--";
						valores["avance"] = "--";
					}

					data.push(valores);
				}
			}
			if (actor.catalogos) {
				for (var z in actor.captura) {
					var valores = {}
					valores["actor"] = '<span data-id="' + actor.idactor + '" data-catalogo="' + actor.captura[z]["idcatalogo"] + '"  data-elemento="' + actor.captura[z]["idelemento"] + '"  class="catalogos">' + form_trim(actor.actor) + " - " + actor.captura[z]["elemento"] + "</span> ";

					valores["enlace"] = '<a href="#" class="a_ir" data-id="' + actor.idactor + '" data-catalogo="' + actor.captura[z]["idcatalogo"] + '"  data-elemento="' + actor.captura[z]["idelemento"] + '"><img src="' + url_sitio + 'img/sitio/enlace.png"></a> ';

					valores["elementos"] = (tipo == "lineas") ? Object.keys(actor.lineas).length : Object.keys(actor.indicadores).length;
					valores["capturados"] = 0;
					valores["aprobados"] = 0;
					valores["rechazados"] = 0;
					valores["revision"] = 0;
					valores["avance"] = 0;

					if (actor.captura[z].captura != null) {
						valores["capturados"] = Object.keys(actor.captura[z].captura.captura_data[tipo]).length;
					}

					if (actor.captura[z].captura != null && actor.revision[z].revision != null) {
						var elementos = actor.revision[z].revision.revision_data[tipo];
						for (var j in elementos) {
							var estatus = parseInt(elementos[j]["actual"]["aprobo"]["v"][0], 10);

							switch (estatus) {
								case 1:
									valores["aprobados"]++;
									if (
										tipo == "indicadores" &&
										actor.hasOwnProperty("captura") &&
										actor.captura[z].hasOwnProperty("captura") &&
										actor.captura[z].captura.hasOwnProperty("captura_data") &&
										actor.captura[z].captura.captura_data[tipo].hasOwnProperty(j) &&
										actor.captura[z].captura.captura_data[tipo][j].hasOwnProperty('iniciado') &&
										actor.captura[z].captura.captura_data[tipo][j]["iniciado"]['v'][0] == "1" &&
										actor.captura[z].captura.captura_data[tipo][j]["iniciado"].hasOwnProperty("e") &&
										actor.captura[z].captura.captura_data[tipo][j]["iniciado"]["e"].hasOwnProperty("1")
									) {
										valores["avance"] += parseInt(actor.captura[z].captura.captura_data[tipo][j]["iniciado"]["e"][1]);
									} else if (
										tipo == "lineas" &&
										actor.hasOwnProperty("captura") &&
										actor.captura[z].hasOwnProperty("captura") &&
										actor.captura[z].captura.hasOwnProperty("captura_data") &&
										actor.captura[z].captura.captura_data[tipo].hasOwnProperty(j) &&
										actor.captura[z].captura.captura_data[tipo][j].hasOwnProperty('cumplio')
									) {
										var temp = actor.captura[z].captura.captura_data[tipo][j]["cumplio"]["v"][0];
										var avance = 0;
										switch (temp) {
											case "2":
											case "3":
												avance = parseInt(actor.captura[z].captura.captura_data[tipo][j]["cumplio"]["e"][temp], 10);
												break;
											case "4":
												avance = 100;
												break;
										}
										valores["avance"] += avance;
									}
									break;
								case 2:
									valores["rechazados"]++;
									break;
								case 3:
									valores["revision"]++;
									break;
							}
						}
					}

					// FIX: avance_num seguro
					var avance_num = null;
					if (valores["elementos"] > 0) {
						if (valores["avance"] > 0) {
							avance_num = parseFloat((valores["avance"] / valores["elementos"]).toFixed(2));
						} else {
							avance_num = 0;
						}
					}

					// FIX: guardar solo números finitos
					if (avance_num !== null && Number.isFinite(avance_num)) {
						promerdio_municipios[actor.idactor].push(avance_num);
					}

					// mostrar
					if (avance_num === null) {
						valores["avance"] = "--";
					} else {
						valores["avance"] = avance_num.toFixed(2) + "%";
					}

					if (valores["elementos"] == 0) {
						valores["capturados"] = "--";
						valores["aprobados"] = "--";
						valores["rechazados"] = "--";
						valores["revision"] = "--";
						valores["avance"] = "--";
					}

					data.push(valores);
				}
			}

		}
	}


	if (reportes_tabla != null) {
		reportes_tabla.clear();
		reportes_tabla.destroy();
		$('#table_data').empty();
		reportes_tabla = null;
	}

	reportes_tabla = $('#table_data').DataTable({
		"language": datatable_lang,
		"pageLength": 1500,
		responsive: true,
		columns: columnas,
		ordering: true,
		data: data,
		order: [[0, "asc"]],
		"fnDrawCallback": function () {
			reportes_resize_();
		},
		"fnInitComplete": function () {
			reportes_resize_();
		},

	});

	$('#table_data').off('click', '.a_municipios');
	$('#table_data').on('click', '.a_municipios', function (evt) {

		var id = $(this).attr("data-id");
		$('#table_data tr span[data-id="' + id + '"]').each(function (index, element) {
			$(this).closest('tr').toggle('fast', function () {
				reportes_resize_();
			});
		});

		return false;
	});

	$('#table_data tr a.a_ir').each(function (index, element) {
		//$(this).attr("target", "_blank");
	});

	$('#table_data').off('click', '.a_ir');
	$('#table_data').on('click', '.a_ir', function (evt) {

		var actor = $(this).attr("data-id");
		var periodo = $("#input_periodo").val();
		var municipio = '';
		var catalogo = '';
		var elemento = '';

		var attr = $(this).attr('data-municipio');
		if (typeof attr !== 'undefined' && attr !== false) {
			municipio = '&m=' + attr;
		}

		attr = $(this).attr('data-catalogo');
		if (typeof attr !== 'undefined' && attr !== false) {
			catalogo = '&cat=' + attr;
			elemento = '&ele=' + $(this).attr('data-elemento');
		}

		var eje = $("#input_filtro_ejes").val();
		if (eje == "") {
			eje = "-1";
		}

		var adicional = "";
		if (tipo == "lineas") {
			adicional = $("#input_filtro_plazos").val();
		} else if (tipo == "indicadores") {
			adicional = $("#input_filtro_metas_al").val();
		}
		if (adicional == "") {
			adicional = "-1";
		}

		window.location.href = $('#download_data').attr("data-url") + '?a=' + actor + municipio + catalogo + elemento + '&p=' + periodo + '&e=' + eje + '&ad=' + adicional;

		return false;
	});



	$('#table_data tr span.municipios').each(function (index, element) {
		$(this).closest('tr').hide();
	});

	$('#table_data tr span.catalogos').each(function (index, element) {
		$(this).closest('tr').hide();
	});

	// FIX: promedio municipal seguro (sin NaN)
	for (var j in promerdio_municipios) {
		var avances = promerdio_municipios[j] || [];
		var suma = 0;
		var count = 0;

		for (var z = 0; z < avances.length; z++) {
			var n = _toFiniteNumber(avances[z]);
			if (n !== null) {
				suma += n;
				count++;
			}
		}

		var html = "--";
		if (count > 0) {
			html = (suma / count).toFixed(2) + "%";
		}

		$('#table_data tr span.promedio_mun_' + j).html(html);
	}

	$("#btn_descarga").unbind("click").bind("click", function () {
		reportes_descarga(columnas, data, tipo);
		false;
	});

	lightbox_cerrar();

	$('#download_data').show();

	reportes_resize_();
}


function reportes_descarga(columnas, data, tipo) {

	var csv = '';

	var subtitulo = '';
	if (tipo == "lineas") {
		subtitulo = 'Líneas de acción';
	} else if (tipo == 'indicadores') {
		subtitulo = 'Indicadores';
	}
	csv += subtitulo + '\n';
	csv += '\n';
	csv += '\"' + $('<div>' + 'Eje: ' + $('#input_filtro_ejes option:selected').text() + '</div>').text() + '\"' + '\n';
	if ($("#input_filtro_plazos").length > 0) {
		csv += '\"' + $('<div>' + 'Plazo: ' + $('#input_filtro_plazos option:selected').text() + '</div>').text() + '\"' + '\n';
	}
	if ($("#input_filtro_metas_al").length > 0) {
		csv += '\"' + $('<div>' + 'Meta al año: ' + $('#input_filtro_metas_al option:selected').text() + '</div>').text() + '\"' + '\n';
	}

	var fecha = new Date();
	var month = '' + (fecha.getMonth() + 1);
	var day = '' + fecha.getDate();
	var year = fecha.getFullYear();
	fecha = [year, month, day].join('-') + ' ' + [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()].join(':');
	fecha = form_fecha(fecha);

	csv += '\"' + $('<div>' + fecha.formato + '</div>').text() + '\"' + '\n';
	csv += '\n';

	var header = new Array();
	for (var i in columnas) {
		if (columnas[i].title != "Vista") {
			header.push('\"' + $('<div>' + columnas[i].title + '</div>').text() + '\"');
		}
	}
	header = header.join(',');
	csv += header + '\n';

	for (var i in data) {
		var row = data[i];
		var keys = Object.keys(row);
		var values = new Array();
		for (var j in keys) {
			if (keys[j] != "enlace") {
				values.push('\"' + $('<div>' + row[keys[j]] + '</div>').text() + '\"');
			}
		}
		values = values.join(',');
		csv += values + '\n';
	}



	var blob = new Blob(["\uFEFF" + csv], { type: 'application/csv; charset=UTF-8' });
	var url = URL.createObjectURL(blob);
	var link = document.createElement('a');
	link.href = url;
	link.setAttribute('download', "reporte_" + convertToSlug($('<div>' + subtitulo + '</div>').text()) + "_" + convertToSlug($('<div>' + fecha.formato + '</div>').text()) + ".csv");
	document.body.appendChild(link);
	link.click();

	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}

function convertToSlug(Text) {
	return Text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}