var var_global_s = false;
var var_global_archivos = {};
var var_global_file_size = 0;
var var_global_meses = {
	'01':'Enero',
	'02':'Febrero',
	'03':'Marzo',
	'04':'Abril',
	'05':'Mayo',
	'06':'Junio',
	'07':'Julio',
	'08':'Agosto',
	'09':'Septiembre',
	'10':'Octubre',
	'11':'Noviembre',
	'12':'Diciembre'
}
var var_global_passphrase = null;
var var_global_passphrase_c = 'secret';

var var_global_menu_top = 100;

function global_init(){
	//console.log('global_init');
	$(window).scroll(function(){ 
		if($("img[data-src]").length > 0) { img_load_scroll(); }
		if($('.contenido .header .menu').hasClass('fixed')){
			if($(window).scrollTop() <= var_global_menu_top){ $('.contenido .header .menu').removeClass('fixed'); } 	
		} else {
			if($(window).scrollTop() >= $('.contenido .header .menu').position().top){ 
				var_global_menu_top = $('.contenido .header .menu').position().top;
				$('.contenido .header .menu').addClass('fixed'); 
			} 	
		}
		
	});
	if($("img[data-src]").length > 0) {  img_load_scroll(); }
	$('a[data-btn]').each(function(index, element) { $(this).bind('click', function(){ event_google_analytics(window.location.pathname, $(this).attr('data-btn'), $(this).attr('data-desc')); }); });
	
	fun_sesion_verificar(function(){
		if (typeof sesion_verificar_ini !== 'undefined'){
			if(sesion_verificar_ini != null){ sesion_verificar_ini(); }
		}
		index_ready();
	}, function(){
		if(var_global_s){
			fun_sesion_cerrar();
		} else {
			if (typeof sesion_verificar_no !== 'undefined'){
				if(sesion_verificar_no != null){ sesion_verificar_no(); }
			}
		}
		index_ready();
	});	
	
	$('.btn_cerrar_sesion').each(function(index, element) {
    	$(this).unbind('click').bind('click',  function() {
			fun_sesion_cerrar_aviso();
			return false;
		});    
    });
	
	$("a.dropdown").each(function(index, element) {
		console.log("a.dropdown");
		var timeOut = null;		
		$(this).unbind('mouseenter').bind('mouseenter', function() {
			console.log("a.dropdown mouseenter", $(this).next().length);
			var item_menu = this;
			if($(this).next().length > 0){
				var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	
				if(w > 800){
					if ($(this).next().is(':hidden')) {
						
						if(timeOut != null){ clearTimeout(timeOut); }
						$("a.dropdown").each(function(index, element) { 
							$(this).next().hide(); 
							$(this).removeClass("activo");
						});
						$(this).next().css('z-index', '20');
						$(item_menu).addClass("activo");
						$(this).next().show(0, 'linear', function(){
							/*
							$(".info_overlay").show();
							fn_altura_columnas('.menu', '.col_same_m', 800);
							*/
							var elemento = this;
							$(elemento).unbind('mouseenter').bind('mouseenter', function() {
								if(timeOut != null){ clearTimeout(timeOut); }	
							});
							$(elemento).unbind('mouseleave').bind('mouseleave', function() { 
								if(timeOut != null){ clearTimeout(timeOut); }
								timeOut = setTimeout(function(){ 
									$(elemento).css('z-index', '10');
									$(elemento).hide(); 
									$(elemento).parent().find("a").removeClass("activo");
									/*$(".info_overlay").hide();*/
								}, 2000);
							});
							$(document).on('click', function (e) {
								if(!$(elemento).is(':hidden')){
									if(timeOut != null){ clearTimeout(timeOut); }
									if ($(e.target).closest(elemento).length === 0 && !$(e.target).is(':hidden')) {
										$(elemento).css('z-index', '10');
										$(elemento).hide(); 
										$(elemento).parent().find("a").removeClass("activo");
										/*$(".info_overlay").hide();*/
									}
								}
							});
						});
					}
				}
			} else {
				if(timeOut != null){ clearTimeout(timeOut); }
				if(w > 800){
					$("a.dropdown").each(function(index, element) { 
						$(this).next().css('z-index', '10');
						$(this).next().hide(); 
						$(this).removeClass("activo");
					});	
				}
				/*$(".info_overlay").hide();*/
			}
		});
		$(this).unbind('mouseleave').bind('mouseleave', function() { });
	});
}

function global_resize(){
	//console.log('global_resize');
	img_load_scroll();
	fn_altura_columnas('.seccion', '.col_same_600_a', 600);
	fn_altura_columnas('.seccion', '.col_same_600_b', 600);
	fn_altura_columnas('.seccion', '.col_same_600', 600);
	fn_altura_columnas('.seccion', '.col_same_bol1', 600);
	fn_altura_columnas('.seccion', '.col_same_bol2', 600);
	
	
	fn_altura_columnas('.seccion', '.col_same_980', 980);
	fn_altura_columnas('.seccion', '.col_same_0', 0);
	fn_altura_columnas('.seccion', '.col_same_ods', 980);
	fn_altura_columnas('.footer', '.col_same_600', 600);
	
}

function global_municipios(estado, municipio){
	console.log('global_municipios');
	if($(estado).val() != ""){
		$(municipio).html('<option value="">cargando...</option>');
		var funcion = function(respuesta){		
			var municipios = respuesta.municipios;
			$(municipio).html('<option value="">Seleccione</option>');
			for(var i = 0; i < municipios.length; i++){ $(municipio).append('<option value="' + municipios[i].idmunicipio + '" >' + municipios[i].municipio + '</option>'); }
			if($(municipio).attr('rel') != ""){ if($(municipio + " option[value='" + $(municipio).attr('rel') + "']").length != 0){ 
				$(municipio).val($(municipio).attr('rel'));
				//$(municipio).trigger('change.cambio');
				$(municipio).trigger('change.saltos');  
			}}
		}
		
		$.ajax({
			dataType: "json",
			url: url_sitio + "json/municipios_" + $(estado).val() + ".json",
			success: funcion,
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				console.log(thrownError);
				$(municipio).html('<option value="">intente nuevamente...</option>');
		  	}
		});

	} else {
		$(municipio).html('<option value="">Seleccione primero un estado</option>');
	}
}

function global_fecha(fecha){
	var fecha_txt;
	fecha = fecha.split(" ");
	
	var tiempo = fecha[0]; 
	var hora = fecha[1];
	
	tiempo = tiempo.split("-");
	hora = hora.split(":");
	
	var year = tiempo[0];
	var month = tiempo[1];
	var day = tiempo[2];
	var hours = hora[0];
	var minutes = hora[1];
	var seconds = hora[2];
	
	var mes_n = var_global_meses[month]; 
	
	var formato = day + ' ' + mes_n + ', ' + year + '. ' + hours + ':' + minutes + ' hrs.';
	var formato_min = day + ' ' + mes_n.substring(0,3) + ', ' + year + '. ' + hours + ':' + minutes + ' hrs.';
	return { "formato": formato, "formato_min": formato_min, "fecha": fecha[0], "hora": fecha[1]};
}

function global_form_validar(objetos){
	var i = 0;
	var alerta = "";
	var valores = {};
	
	for(var j in objetos){
		var respuesta = global_input_validar(objetos[j]);
		if(respuesta.ok == true){ valores[objetos[j].key] = respuesta.valor; } 
		else if(respuesta.ok == false){ 
			i = 1; 
			alerta += " - " + respuesta.info + "<br>";
		} 
	}
	return { "i": i, "alerta": alerta, "valores": valores };
}

function global_encode(valor){
	console.log('global_encode', valor);	
	//var encrypted = btoa(valor);
	var encrypted = CryptoJS.AES.encrypt(valor, var_global_passphrase);
	//console.log(encrypted);
	//console.log(encrypted.key.toString());
	encrypted = encrypted.toString(); 
	
	return encrypted.toString(); 
}
function global_decode(valor){
	//var decrypted = atob(valor);
	var decrypted = CryptoJS.AES.decrypt(valor, var_global_passphrase);
	decrypted = decrypted.toString(CryptoJS.enc.Utf8);
	return decrypted;
}


function global_form_values(objetos){
	var values = {};
	for(var j in objetos){
		var respuesta = global_input_validar(objetos[j]);
		if(respuesta.ok){ values[objetos[j].key] = respuesta.valor; } 
	}
	return values;
}


function global_input_file_enviar(objetos){
	var files = [];
	for(var j in objetos){
		var objeto = objetos[j];
		var ele = (objeto.hasOwnProperty('ele'))?objeto.ele:null;
		var key = (objeto.hasOwnProperty('key'))?objeto.key:null;
		var tipo = (objeto.hasOwnProperty('tipo'))?objeto.tipo:null;
		if(tipo == "file"){
			var unique = $(ele).attr('data-id');
			for (index in var_global_archivos[unique]) {
				if (var_global_archivos[unique][index] instanceof File){
					files.push({ index:index, name:(var_global_archivos[unique][index].name), file:var_global_archivos[unique][index], key:key });
				}
			}
		}
	}
	return files;
}

function global_input_files(input_arr, data, callback){
	var files = global_input_file_enviar(input_arr);
	
	if(files.length > 0){
		guardarAjaxArchivos(0, data, files, url_sitio + "ajax/archivos.php", 
			function(response){ if(callback != null  && typeof callback === 'function') { callback(response); } }
		);
	} else { if(callback != null  && typeof callback === 'function') { callback(null); } }
	
	
}

function global_form_init(objetos){
	for(var j in objetos){
		global_input_init(objetos[j]);
	}
}

function global_input_error(ele, tipo, error){
	switch(tipo){
		case "text":
		case "textarea":
		case "select":
		case "fecha":
		case "file":
			if(error){
				$(ele).parent().find('span.normal').addClass('error'); 
				$(ele).addClass('error_i'); 
			} else {
				$(ele).parent().find('span.normal').removeClass('error');
				$(ele).removeClass('error_i'); 
			}
			break;
		case "switch":
		case "radio":
		case "check":
			$(ele).each(function(index, element) {
            	if(error){
					$(this).closest('.input_espacio').find('span.normal').addClass('error'); 
					$(this).closest('.input_espacio').find('.input_sim').addClass('error_i'); 
					$(this).addClass('error_i'); 
				} else {
					$(this).closest('.input_espacio').find('span.normal').removeClass('error');
					$(this).closest('.input_espacio').find('.input_sim').removeClass('error_i'); 
					$(this).removeClass('error_i'); 
				}    
            });
			break;
		case "_txt":
		case "_fecha":
		case "hidden":
			break;
	}
}

function global_input_init(objeto){
	
	var key = (objeto.hasOwnProperty('key'))?objeto.key:null;
	var ele = (objeto.hasOwnProperty('ele'))?objeto.ele:null;
	var tipo = (objeto.hasOwnProperty('tipo'))?objeto.tipo:null;
	var variable = (objeto.hasOwnProperty('variable'))?objeto.variable:null;
	var especificar = (objeto.hasOwnProperty('especificar'))?objeto.especificar:null;
	var especificar_validar = (objeto.hasOwnProperty('especificar_validar'))?objeto.especificar_validar:null;
	var txt_default = (objeto.hasOwnProperty('txt_default'))?objeto.txt_default:null;
	var value = (objeto.hasOwnProperty('value'))?objeto.value:'';
	var confirmar = (objeto.hasOwnProperty('confirmar'))?objeto.confirmar:null;
	var confirmar_value = (objeto.hasOwnProperty('confirmar_value'))?objeto.confirmar_value:'';
	var callback = (objeto.hasOwnProperty('callback'))?objeto.callback:null;
	var url_files = (objeto.hasOwnProperty('url_files'))?objeto.url_files:null;
	var limite = (objeto.hasOwnProperty('limite'))?objeto.limite:null;
	var maxlength = (objeto.hasOwnProperty('maxlength'))?objeto.maxlength:null;
	var encode = (objeto.hasOwnProperty('encode'))?objeto.encode:null;
	
	global_input_error(ele, tipo, false);
	if(confirmar != null){ global_input_error(confirmar, "text", false); }
	
	value = global_input_valor(objeto);
	
	switch(tipo){
		case "text":
		case "textarea":
		case "select":
			if(value != null){ 
				if(tipo == "select"){ 
					if($(ele + ' option[value="' + value +'"]').length > 0){ 
						$(ele).val(value); 
						$(ele).attr('rel', value); 
					} else { 
						$(ele).append('<option value="' + value + '">' + value + '</option>');
						$(ele).val(value);
						$(ele).attr('rel', value);  
					} 
				} else { $(ele).val(value); }
			} else { $(ele).val(''); }
			
			var dataType = $(ele).attr('data-type');
			if (typeof dataType !== 'undefined' && dataType !== false) {
				switch(dataType){
					case "numero":
					commaSeparateNumber(ele);	
					commaSeparateNumberEvento(ele);	
					break;
				}
			}
			
			if(tipo == "textarea"){ 
				if(limite != null){
					$(ele).unbind('keydown').bind('keydown', function(e){ 
						limitText(this, limite); 
						//limitWords(e, this, limite); 
					});

					$(ele).unbind('keyup').bind('keyup', function(e){ 
						limitText(this, limite); 
						//limitWords(e, this, limite); 
						resizeTexto(this, callback); 
					});
					resizeTexto($(ele), callback); 
				}
			}
			
			if(tipo == "select"){ 
				var temp_function = function(element){
					if($(element).val() != ""){ $(element).removeClass("placeholder"); } 
					else { $(element).addClass("placeholder"); }
				}
				temp_function(ele);
				$(ele).unbind('change.style').bind('change.style', function(e){ temp_function(this); });
			}
			
			if(maxlength != null){ $(ele).attr('maxlength', maxlength); }
			break;
		case "fecha":
			if(value != null){ $(ele).val(value); }
			else { $(ele).val(''); }
			if(maxlength != null){ $(ele).attr('maxlength', maxlength); }
			
			var picker = $(ele).pickadate({
				format: 'd mmmm, yyyy',
				formatSubmit: 'yyyy-mm-dd',
				selectMonths: true,
				selectYears: 60,
				max: true
			});
			picker = picker.pickadate('picker');
			
			if(value != null){ picker.set('select', value, { format: 'yyyy-mm-dd' });  }
			else { picker.clear(); }
			
		case "file":
			
			$(ele + " .input_file").val("");
			$(ele + " .files").html("");
			//var unique = key;
			var unique = $(ele).attr('data-id');
			var_global_archivos[unique] = [];
			
			if(value != null){
				
				for (zz in value['v']) {
					var enlace = '';
					if(value.hasOwnProperty('l') && value['l'].hasOwnProperty(zz)) { enlace = value['l'][zz]; }
					global_input_file_list(unique, zz, {name: value['v'][zz], enlace:enlace}, url_files, function(){ 
						if(callback != null  && typeof callback === 'function') { callback(); }
					});
				}
			}
			
			$(ele + " .input_add").unbind('click').bind('click',  function() { 
				var limite = parseInt($(this).parent().attr('data-limit'), 10);	
				if(Object.size(var_global_archivos[unique]) >= limite){ lightbox_abrir('<h1>Máximo ' + limite + ' archivos</h1>', null, v_boton); } 
				else { $(ele + " .input_file").click(); } 
				return false;
			});
				
			$(ele + " .input_file").unbind('change').bind('change',  function(){
				var limite = parseInt($(this).parent().attr('data-limit'), 10);
				var extensiones = $(this).parent().attr('data-ext');
				extensiones = extensiones.split(",");
				if($(this).val() != ""){ 
					global_input_file_read(this, unique, limite, extensiones, url_files, function(){ 
						if(callback != null  && typeof callback === 'function') { callback(); }
					}); 
				} 
			});
			
			break;
		case "switch":
			
			$(ele).each(function(index, element) {
				var valor = $(this).val();	
				$(this).prop('checked', false);
				if(value != null){ 
					for(zz in value['v']) { if($(this).val() == value['v'][zz]){  $(this).prop('checked', true); } } 
				}
				/*
				if(value == $(this).val()) { 
					console.log('si checked');
					$(this).prop('checked', true); 
				} else { 
					console.log('no checked');
					$(this).prop('checked', false); 
				}
				*/
				global_input_init_switch(this, especificar, txt_default);
				
				if(especificar != null){ 
					var especificar_value = (objeto.hasOwnProperty('especificar_value'))?objeto.especificar_value:'';
					var dataType = $(especificar).attr('data-type');
					if (typeof dataType !== 'undefined' && dataType !== false) {
						switch(dataType){
							case "numero":
							commaSeparateNumber(especificar);	
							commaSeparateNumberEvento(especificar);	
							break;
						}
					}
					$(especificar).val(especificar_value); 
				}
				var dataType = $(ele).attr('data-type');
				if (typeof dataType !== 'undefined' && dataType !== false) {
					switch(dataType){
						case "switch":
							$(this).unbind('click').bind('click', function(){ global_input_init_switch(this, especificar, txt_default); });
							global_input_init_switch(this, especificar, txt_default);
							break;	
					}
				}
			});
			break;
		case "radio":
		case "check":
			$(ele).each(function(index, element) {
				var valor = $(this).val();	
				$(this).prop('checked', false);
				if($('#extra_' + $(this).val()).length > 0){ $('#extra_' + $(this).val()).html('');	}
				
				var filtros = $('#extra_' + valor).attr('data-filto');
				if (typeof filtros !== 'undefined' && filtros !== false && $('#extra_' + $(this).val()).length > 0 && $('#extra_' + valor).html() == '') {
					try { filtros = JSON.parse(filtros); } 
					catch (e) { filtros = null; }
					if(filtros != null && filtros.hasOwnProperty('especificar') && filtros.especificar == true){
						var html = '<input type="text" value="" id="extra_input_' + valor + '"  class="input gris" maxlength="250" placeholder="Especifique: ' + global_input_validar_info(especificar_validar) + '" />'; 	
						$('#extra_' + valor).html(html);	
						$('#extra_' + valor).hide();	
					}
				}
				
				$(this).unbind('click').bind('click',  function() {
					var valor = $(this).val();			
					if($(this).is(':checked')){ 
						$('#extra_' + valor).show();
					} else {
						$('#extra_' + valor).hide();	
					}
				});
				
			});
			
			if(value != null){
				for (zz in value['v']) {
					$(ele + '[value="' + value['v'][zz] + '"]').prop('checked', true);
					if($('#extra_' + value['v'][zz]).length > 0){ 
						$('#extra_' + value['v'][zz]).show(); 
						$('#extra_input_' + value['v'][zz]).val(value['e'][value['v'][zz]]);
					}
				}
			}
			break;
		case "_txt":
		case "_fecha":
			break;
		case "hidden":
			if(value != null){ $(ele).val(value); }
			else { $(ele).val(''); }
			break;
	}
	if(confirmar != null){ 
		$(confirmar).on('paste', function (e) { return false; }); 
		$(confirmar).val(confirmar_value);	
	}
}

function global_input_init_switch(ele, especificar, txt_default){
	console.log('global_input_init_switch', ele, especificar, txt_default);
	if($(ele).is(':checked')){ 
		$(ele).parent().find('.switch').addClass('on');
		if(especificar != null){ $(especificar).show(); }
		if(txt_default != null){ $(txt_default).hide(); }
	} else { 
		$(ele).parent().find('.switch').removeClass('on'); 
		if(especificar != null){ $(especificar).hide(); }
		if(txt_default != null){ $(txt_default).show(); }
	}	
}

function global_input_valores(datos, objetos){	
	for(x in datos){
		var index = objetos.findIndex(function(ele){ return ele.key === x; });
		if(index >= 0){ 
			objetos[index]["value"] = datos[x]; 
			datos[x] = global_input_valor(objetos[index])
		}
	}
	return datos;
}

function global_input_valor(objeto){
	var encode = (objeto.hasOwnProperty('encode'))?objeto.encode:null;
	var value = (objeto.hasOwnProperty('value'))?objeto.value:'';
	var tipo = (objeto.hasOwnProperty('tipo'))?objeto.tipo:null;
	
	if(value != null && value != '' && encode == true){
		switch(tipo){
			case "file":
			case "radio":
			case "check":
			case "switch":
				value = JSON.parse(global_decode(value));
				break;
			default:
				value = global_decode(value);		
				break;
		}
	}
	return value;
}

function global_object_data(data){
	if(data != null && data.constructor === Object){ 
		var text = [];
		for (i in data['v']) { text.push(data['v'][i]); }
		return text.toString();
	}
	return data;
}

function global_input_validar(objeto){
	//console.log('global_input_validar -> ', objeto);
	var nombre = (objeto.hasOwnProperty('nombre'))?objeto.nombre:null;
	var ele = (objeto.hasOwnProperty('ele'))?objeto.ele:null;
	var tipo = (objeto.hasOwnProperty('tipo'))?objeto.tipo:null;
	var tipo_txt = (objeto.hasOwnProperty('tipo_txt'))?objeto.tipo_txt:null;
	var validar = (objeto.hasOwnProperty('validar'))?objeto.validar:null;
	var opcional = (objeto.hasOwnProperty('opcional'))?objeto.opcional:null;
	var value = (objeto.hasOwnProperty('value'))?objeto.value:'';
	var confirmar = (objeto.hasOwnProperty('confirmar'))?objeto.confirmar:null;
	var especificar = (objeto.hasOwnProperty('especificar'))?objeto.especificar:null;
	var especificar_validar = (objeto.hasOwnProperty('especificar_validar'))?objeto.especificar_validar:null;
	var encode = (objeto.hasOwnProperty('encode'))?objeto.encode:null;
	
	var ok = false;
	var info = '';
	var valor = null;
	
	switch(tipo){
		case "text":
		case "textarea":
		case "select":
		case "hidden":
			if(trim($(ele).val()) != ""){ 
				ok = true; 
				valor = $(ele).val();
				
				var datoInf = global_input_validar_dato(valor, validar, ok, info, nombre, ele);
				valor = datoInf.valor;
				ok = datoInf.ok;
				info = datoInf.info;
				
				if(ok == true){ 
					if(confirmar != null){
						if(trim($(ele).val()) != trim($(confirmar).val())){ 
							ok = false;  
							info += nombre + ' y su confirmación no coincide.'; 
							global_input_error(confirmar, "text", true);
						} else {
							global_input_error(confirmar, "text", false);
						}
					} 
				} else {
					if(confirmar != null){ global_input_error(confirmar, "text", true); }
				}
			} else {
				if(opcional == true){ ok = true; } 
				else { info += nombre + '.'; }
				if(confirmar != null){ global_input_error(confirmar, "text", true); }
			}
			break;
		case "file":
			var arr_values = {v:{}, l:{}};	
			var unique = $(ele).attr('data-id');
			if(Object.size(var_global_archivos[unique]) > 0){
				ok = true;
				for (x in var_global_archivos[unique]) {
					arr_values.v[x] = var_global_archivos[unique][x].name; 
					var archivo = null;
					if(var_global_archivos[unique][x].hasOwnProperty('enlace')){ archivo = var_global_archivos[unique][x].enlace; }
					arr_values.l[x] = archivo;
				}
			} else {
				if(opcional == true){ ok = true; } 
				else { info += nombre + '.'; }
			}
			valor = arr_values;
			break;
		case "fecha":
			var picker = $(ele).pickadate();
			picker = picker.pickadate('picker');
			valor = picker.get('select');
			if(valor != null){
				ok = true;
				valor = picker.get('select', 'yyyy-mm-dd');
			} else {
				info += nombre + '.';	
			}
			break;
		case "switch":
			var arr_values = {v:[],e:{}};
			
			if( $(ele + ':checked').length == 0){ 
				if(opcional == true){ ok = true; } 
				else { info += nombre + '.'; } 
			} else {
				$(ele + ':checked').each(function(index, element) { arr_values.v.push($(this).val()); });
				
				if(especificar != null){
					var especificar_valor = trim($(especificar).val());
					if(especificar_valor != ""){ 
						ok = true; 
						if(especificar_validar != null){
							
							var datoInf = global_input_validar_dato(especificar_valor, especificar_validar, ok, info, nombre, especificar);
							especificar_valor = datoInf.valor;
							ok = datoInf.ok;
							info = datoInf.info;
							
							arr_values.e[valor] = especificar_valor;
							
						}
					} else { info += nombre + ' (especifique).'; } 
					
					if(ok == true){ 
						global_input_error(especificar, 'especificar', false);
					} else {
						global_input_error(especificar, 'especificar', true);
					}
					
				} else {
					ok = true;
					
				}
			}
			valor = arr_values;
			break;
		case "radio":
		case "check":
			var arr_values = {v:[],e:{}};
			var arr_especifique = [];
			
			if( $(ele + ':checked').length == 0){ 
				if(opcional == true){ ok = true; } 
				else { info += nombre + '.'; } 
			} else {
				ok = true;
				$(ele + ':checked').each(function(index, element) { arr_values.v.push($(this).val()); });
			}
			
			$(ele).each(function(index, element) {
				if($(this).is(':checked')){ 
					var valor = $(this).val();	
					var filtros = $('#extra_' + valor).attr('data-filto');
					var name = $('#extra_' + valor).attr('data-name');
					
					if (typeof filtros !== 'undefined' && filtros !== false) {
						try { filtros = JSON.parse(filtros); } 
						catch (e) { filtros = null; }
						
						if(filtros != null && filtros.hasOwnProperty('especificar') && filtros.especificar == true){
							if($('#extra_input_' + valor).length > 0){ 
								var especificar_valor = trim($('#extra_input_' + valor).val()); 
								if(especificar_valor == ""){ 
									arr_especifique.push(name);
									ok = false;
								} else {
									var datoInf = global_input_validar_dato(especificar_valor, especificar_validar, true, '', name + '<small>', '#extra_input_' + valor);
									if(datoInf.ok){ arr_values.e[valor] = datoInf.valor; } 
									else { 
										ok = false;
										arr_especifique.push(datoInf.info + '</small>'); 
									}
								}
							}
						}
					}
				} 
			});
			
			if(arr_especifique.length > 0){	info += nombre + '. Especifique: ' + arr_especifique.join(", "); }
			valor = arr_values;
			break;
		case "_txt":
			ok = true; 
			if(tipo_txt == "select"){ valor = $(ele + " option:selected").text(); } 
			else if(tipo_txt == "radio" || tipo_txt == "check"){ valor = $(ele + ":checked").parent().text(); }
			break;
		case "_fecha":
			ok = true; 			
			var _fecha = new Date();
			valor = _fecha.getFullYear() + '-' + pad((_fecha.getMonth() + 1), 2) + '-' + pad(_fecha.getDate(), 2) + ' ' + pad(_fecha.getHours(), 2) + ':' + pad(_fecha.getMinutes(), 2) + ':' + pad(_fecha.getSeconds(), 2);
			if(value != '' && validar == 'fecha'){ valor = value; }
			break;
		
	}
	
	if(!ok){ global_input_error(ele, tipo, true); } 
	else { global_input_error(ele, tipo, false); } 
	
	if(encode == true && valor != null){
		switch(tipo){
			case "file":
			case "radio":
			case "check":
			case "switch":
				valor = global_encode(JSON.stringify(valor));
				break;
			default:
				valor = global_encode(valor);		
				break;
		}
	}
	return {"ok":ok, "valor":valor, "info":info};
}

function global_input_validar_info(validar){
	var txt = '';
	switch(validar){
		case "url":
			txt = 'p. ej: https://iluminemosdeazul.org.';
			break;
		case "telefono":
			txt = '';
			break;
		case "mail":
			txt = '';
			break;
		case "numero":
			txt = '';
			break;
		case "entero":
			txt = '';
			break;
		case "contrasena":
			txt = '';
			break;
		case "cp":
			txt = '';
			break;
		case "anio":
			txt = '';
			break;
		default:
			txt = '';
			break;
	}
	return txt;
			
}
function global_input_validar_dato(valor, validar, ok, info, nombre, ele){
	switch(validar){
		case "url":
			if(!global_validUrl(valor)){ 
				ok = false; 
				info += nombre + ' (dirección web no válida).'; 
			} 
			break;
		case "telefono":
			if(!v_entero.test(valor)) { 
				ok = false; 
				info += nombre + ' (sólo números).'; 
			} else if(valor.length != 10){ 
				ok = false; 
				info += nombre + ' (10 dígitos).'; 
			}
			break;
		case "mail":
			if(!v_correo.test(valor)) { 
				ok = false;  
				info += nombre + ' no válido.'; 
			}
			break;
		case "numero":
			var attr = $(ele).attr("data-valor");
			if (typeof attr !== 'undefined' && attr !== false) { valor = parseFloat(attr); }
			if(!isNumber(valor)) { 
				ok = false;  
				info += nombre + ' (sólo números).'; 
			}
			break;
		case "entero":
			if(!v_entero.test(valor)) { 
				ok = false;
				info += nombre + ' (sólo números enteros).'; 
			} 
			break;
		case "contrasena":
			if(valor.length < 8){ 
				ok = false;
				info += nombre + ' debe tener al menos 8 caracteres.'; 
			}	
			break;
		case "cp":
			if(!v_entero.test(valor)) { 
				ok = false; 
				info += nombre + ' (sólo números).'; 
			} else if(valor.length != 5){ 
				ok = false; 
				info += nombre + ' (5 dígitos).'; 
			}
			break;
		case "anio":
			if(!v_entero.test(valor)) { 
				ok = false; 
				info += nombre + ' (sólo números).'; 
			} else if(valor.length != 4){ 
				ok = false; 
				info += nombre + ' (4 dígitos).'; 
			}
			break;
		case "horario":
			if(!v_horario.test(valor)) { 
				ok = false; 
				info += nombre + ' (horario válido).'; 
			} else if(valor.length != 5){ 
				ok = false; 
				info += nombre + ' (5 caracteres: HH:MM).'; 
			}
			break;
		case "mayor_edad":
			if(!v_entero.test(valor)) { 
				ok = false; 
				info += nombre + ' (sólo números).'; 
			} else if(parseInt(valor, 10) < 18){ 
				ok = false; 
				info += nombre + ' (sólo personas mayores de edad).'; 
			}
			break;
		default:
			break;
	}
	return {"valor":valor, "ok":ok, "info":info};
}

function global_input_file_read(input, id, limite, extensiones, url_files, fun_resize){
	var i = 0;
	var alerta = "";
	if (input.files && input.files.length > 0) {
		for(var j = 0, f; file = input.files[j]; j++) {
			var resultado = global_input_file_valid(file, false, extensiones, var_global_file_size);
			if(resultado == ""){
				if(Object.size(var_global_archivos[id]) <  limite){ global_input_file_list(id, Math.random().toString(36).substr(2, 9), file, url_files, fun_resize); } 
				else { i = 1; alerta += 'Máximo ' + limite + ' archivos.<br>'; break; }
			} else { i = 1; alerta += resultado + "<br>"; }
		}
		if(i == 1){ lightbox_abrir("<h1>Advertencia</h1>" + alerta, null, v_boton); }
	}
}

function global_input_file_valid(file, mostrar, extensiones){
	var alerta = "";
	var nombre = file.name;
	
	var temp = [];
	for(x in extensiones){ temp.push(extensiones[x]); temp.push((extensiones[x]).toUpperCase()); }
	if(!(new RegExp('(' + temp.join('|').replace(/\./g, '\\.') + ')$')).test(nombre)){
		alerta += "El archivo: " + nombre + " no tiene una extensión válida. <br />Las extensiones válidas son: " + extensiones.join(", ") + ".";
	}
	
	if(file.size > var_global_file_size){
		if(alerta != ""){ alerta += "<br>"; }
		alerta += "El archivo: " + nombre + " excede el límite permitido de " + (var_global_file_size/1024/1024 ) + "MB. Favor de ajustar el archivo o seleccionar otro.";
	}
	if(mostrar && alerta != ""){ lightbox_abrir("<h1>Advertencia</h1>" + alerta, null, v_boton); }
	return alerta;
}

function global_input_file_list(id, pos, file, url_files, fun_resize){
	var name = '';
	if (file instanceof File){ name = (file.name); } 
	else {
		name = file.name;
		if(typeof index_modo !== 'undefined' && index_modo == "offline"){
			name = '<a href="#" class="a_localFile" data-file="' + file.name + '" target="_blank">' + file.name + '</a>'; 
		} else if(file.hasOwnProperty('enlace') && file.enlace != null) { 
			name = '<a href="' + url_sitio + url_files + file.enlace + '" target="_blank">' + file.name + '</a>'; 
		}
	}	
	var html = $(".machotes #archivo").html();
	
	console.log('.archivos[data-id="' + id + '"');
	
	var archivo = $(html).appendTo('.archivos[data-id="' + id + '"] .files');
	$(archivo).attr('data-pos', pos);
	$(archivo).find(".nombre").html((name));
	$(archivo).find(".acciones .quitar").attr('data-id', id);
	$(archivo).find(".acciones .quitar").attr('data-pos', pos);
	$(archivo).find(".acciones .quitar").unbind('click').bind('click', function(){
		var id = $(this).attr('data-id');
		var pos = $(this).attr('data-pos');
	
		lightbox_abrir("¿Seguro deseas eliminar el archivo: <b>" + (var_global_archivos[id][pos].name) + "</b>?", function(){
			delete var_global_archivos[id][pos];
			$('.archivos[data-id="' + id + '"] .files .archivo[data-pos="' + pos + '"]').remove();		
			lightbox_cerrar();
			fun_resize();
		}, { aceptar:'Sí', cancelar:'No' });
		return false;
	});
	
	if(!var_global_archivos.hasOwnProperty(id)){ var_global_archivos[id] = []; }
	
	var_global_archivos[id][pos] = file;
	fun_resize();
}

function global_uniqID(length) {
    var resultado = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var contador = 0;
    while (contador < length) { resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); contador += 1; }
    return resultado;
}

function global_copy(text, funcion) {
	if (!navigator.clipboard) { global_copyOld(text, funcion); return; }
	navigator.clipboard.writeText(text).then(function() {
		if(funcion != null && typeof funcion === 'function'){ funcion(true); }	
	}, function(err) {
		if(funcion != null && typeof funcion === 'function'){ funcion(false); }	
	});
}

function global_copyOld(text, funcion) {
	var textArea = document.createElement("textarea");
	textArea.value = text;
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	try {
		var successful = document.execCommand('copy');
		if(successful){ if(funcion != null && typeof funcion === 'function'){ funcion(true); } }
		else { if(funcion != null && typeof funcion === 'function'){ funcion(false); } }
	} catch (err) { if(funcion != null && typeof funcion === 'function'){ funcion(false); }	}
	document.body.removeChild(textArea);
}

function global_catchPaste(evt, ele, callback) {
	/*
	if (navigator.clipboard && navigator.clipboard.readText) { navigator.clipboard.readText().then(callback); } 
	else if (evt.originalEvent && evt.originalEvent.clipboardData) { callback(evt.originalEvent.clipboardData.getData('text')); } 
	else if (evt.clipboardData) { callback(evt.clipboardData.getData('text/plain')); } 
	else if (window.clipboardData) { callback(window.clipboardData.getData('Text')); } 
	else { setTimeout(function() { callback($(ele).val()); }, 100); }
	*/
	setTimeout(function() { callback($(ele).val()); }, 100);
}

function global_hexToRGB(h) {
	var r = 0;
	var g = 0;
	var b = 0;
	if(h.length == 4) {
		r = "0x" + h[1] + h[1];
		g = "0x" + h[2] + h[2];	
		b = "0x" + h[3] + h[3];
	} else if (h.length == 7) {
    	r = "0x" + h[1] + h[2];
    	g = "0x" + h[3] + h[4];
    	b = "0x" + h[5] + h[6];
  	}
  	return {"r": r, "g": g, "b": b};
}

function global_validUrl(str){
	try {
		var url = new URL(str);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch (e) {
		return false;  
	}
}