var var_form_archivos = {};
var var_form_file_size = 0;
var var_form_meses = {
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
	'12':'Diciembre',
	'1':'Enero',
	'2':'Febrero',
	'3':'Marzo',
	'4':'Abril',
	'5':'Mayo',
	'6':'Junio',
	'7':'Julio',
	'8':'Agosto',
	'9':'Septiembre',
}
var var_form_passphrase = null;
var var_form_passphrase_c = 'secret';

function form_resize(){
	scripts_resize();
}

function form_fecha(fecha){
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
	
	var mes_n = var_form_meses[month]; 
	
	var formato = day + ' ' + mes_n + ', ' + year + '. ' + hours + ':' + minutes + ' hrs.';
	var formato_min = day + ' ' + mes_n.substring(0,3) + ', ' + year + '. ' + hours + ':' + minutes + ' hrs.';
	return { "formato": formato, "formato_min": formato_min, "fecha": fecha[0], "hora": fecha[1]};
}

function form_validar(objetos){
	var i = 0;
	var alerta = "";
	var valores = {};
	
	for(var j in objetos){
		var respuesta = form_input_validar(objetos[j]);
		if(respuesta.ok == true){ valores[objetos[j].key] = respuesta.valor; } 
		else if(respuesta.ok == false){ 
			i = 1; 
			alerta += " - " + respuesta.info + "<br>";
		} 
	}
	return { "i": i, "alerta": alerta, "valores": valores };
}

function form_calificar(objetos){
	var ok = 0;	
	var err = 0;	
	for(var j in objetos){
		var respuesta = form_input_validar(objetos[j]);
		if(respuesta.ok == true){ 
			var r = form_input_calificar(objetos[j], respuesta.valor);
			if(r.correcto){
				ok++;
			} else {
				err++;
			} 
		} else if(respuesta.ok == false){ 
			err++;
		} 
	}

	return { 
		"ok" : ok,
		"err" : err,
		"total": Object.keys(objetos).length,
		"porcentaje": Math.round((ok * 100) / Object.keys(objetos).length)
	};
}

function form_input_calificar(objeto, value){
	var correcto = false;
	var ele = (objeto.hasOwnProperty('ele'))?objeto.ele:null;
	var tipo = (objeto.hasOwnProperty('tipo'))?objeto.tipo:null;
	
	switch(tipo){
		case "text":
		case "textarea":
		case "select":
			break;
		case "fecha":
			break;
		case "file":
			break;
		case "switch":
			break;
		case "check":
			break;
		case "radio":
			if(value != null){ 
				for (zz in value['v']) {
					if(
						$(ele + '[value="' + value['v'][zz] + '"]').is(':checked') &&
						$(ele + '[value="' + value['v'][zz] + '"]').attr("data-ok") == "true"
					){
						correcto = true;
					}
				}
			}
			break;		
	}
	return { 
		"correcto" : correcto,
	};
}

function form_retroalimentacion(objetos){
	var resumen = {
		"ok" : 0,
		"err" : 0,
		"total" : 0,
	}
	for(var j in objetos){
		resumen["total"]++;
		var ele = (objetos[j].hasOwnProperty('ele'))?objetos[j].ele:null;
		var respuesta = form_input_validar(objetos[j]);
		
		var r = form_input_calificar(objetos[j], respuesta.valor);
		var item = $(ele).parents(".item");
		var retro = $(item).attr("data-retro");
		$(item).find(".retro").text('');
		$(item).find(".retro").removeClass("correcto, incorrecto");
		$(item).find(".retro").hide();
		
		if (typeof retro !== 'undefined' && retro !== false) {
			$(item).find(".retro").text(retro);
		} else {
			retro = null;
		}
		$(item).find(".retro").show();
		if(r.correcto){
			resumen["ok"]++;
			$(item).find(".retro").addClass("correcto");
			if(retro == null){ $(item).find(".retro").text("Correcto"); }
		} else {
			resumen["err"]++;
			$(item).find(".retro").addClass("incorrecto");
			if(retro == null){ $(item).find(".retro").text("Incorrecto"); }
		} 
		
	}
	return resumen;
}

function form_encode(valor){
	console.log('form_encode', valor);	
	//var encrypted = btoa(valor);
	var encrypted = CryptoJS.AES.encrypt(valor, var_form_passphrase);
	//console.log(encrypted);
	//console.log(encrypted.key.toString());
	encrypted = encrypted.toString(); 
	
	return encrypted.toString(); 
}
function form_decode(valor){
	//var decrypted = atob(valor);
	var decrypted = CryptoJS.AES.decrypt(valor, var_form_passphrase);
	decrypted = decrypted.toString(CryptoJS.enc.Utf8);
	return decrypted;
}


function form_values(objetos){
	var values = {};
	for(var j in objetos){
		var respuesta = form_input_validar(objetos[j]);
		if(respuesta.ok){ values[objetos[j].key] = respuesta.valor; } 
	}
	return values;
}


function form_input_file_enviar(objetos){
	var files = [];
	for(var j in objetos){
		var objeto = objetos[j];
		var ele = (objeto.hasOwnProperty('ele'))?objeto.ele:null;
		var key = (objeto.hasOwnProperty('key'))?objeto.key:null;
		var tipo = (objeto.hasOwnProperty('tipo'))?objeto.tipo:null;
		if(tipo == "file"){
			var unique = $(ele).attr('data-id');
			for (index in var_form_archivos[unique]) {
				if (var_form_archivos[unique][index] instanceof File){
					files.push({ index:index, name:(var_form_archivos[unique][index].name), file:var_form_archivos[unique][index], key:key });
				}
			}
		}
	}
	return files;
}

function form_input_files(input_arr, data, callback){
	var files = form_input_file_enviar(input_arr);
	
	if(files.length > 0){
		guardarAjaxArchivos(0, data, files, url_sitio + "ajax/archivos.php", 
			function(response){ if(callback != null  && typeof callback === 'function') { callback(response); } }
		);
	} else { if(callback != null  && typeof callback === 'function') { callback(null); } }
	
	
}

function form_init(objetos){
	for(var j in objetos){
		form_input_init(objetos[j]);
	}
}

function form_clean(objetos){
	for(var j in objetos){ 
		if(objetos[j].hasOwnProperty('value')){ delete objetos[j].value; }	
		if(objetos[j].hasOwnProperty('txt_default')){ objetos[j].value = objetos[j].txt_default; }	
		if(objetos[j].hasOwnProperty('ele')){ 
			var ele = (objetos[j].hasOwnProperty('ele'))?objetos[j].ele:null;
			$(ele).attr('rel', ''); 
		}

	}
	return objetos;
}



function form_input_error(ele, tipo, error){
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

function form_input_init(objeto){
	
	var key = (objeto.hasOwnProperty('key'))?objeto.key:null;
	var ele = (objeto.hasOwnProperty('ele'))?objeto.ele:null;
	var tipo = (objeto.hasOwnProperty('tipo'))?objeto.tipo:null;
	var variable = (objeto.hasOwnProperty('variable'))?objeto.variable:null;
	var especificar = (objeto.hasOwnProperty('especificar'))?objeto.especificar:null;
	var especificar_validar = (objeto.hasOwnProperty('especificar_validar'))?objeto.especificar_validar:null;
	var txt_default = (objeto.hasOwnProperty('txt_default'))?objeto.txt_default:null;
	var value = (objeto.hasOwnProperty('value'))?objeto.value:'';
	var valores = (objeto.hasOwnProperty('valores'))?objeto.valores:[];
	var confirmar = (objeto.hasOwnProperty('confirmar'))?objeto.confirmar:null;
	var confirmar_value = (objeto.hasOwnProperty('confirmar_value'))?objeto.confirmar_value:'';
	var callback = (objeto.hasOwnProperty('callback'))?objeto.callback:null;
	var url_files = (objeto.hasOwnProperty('url_files'))?objeto.url_files:null;
	var limite = (objeto.hasOwnProperty('limite'))?objeto.limite:2500;
	var limite_tipo = (objeto.hasOwnProperty('limite_tipo'))?objeto.limite_tipo:'letras';
	var maxlength = (objeto.hasOwnProperty('maxlength'))?objeto.maxlength:null;
	var encode = (objeto.hasOwnProperty('encode'))?objeto.encode:null;
	var onChange = (objeto.hasOwnProperty('onChange'))?objeto.onChange:null;
	

	
	
	form_input_error(ele, tipo, false);
	if(confirmar != null){ form_input_error(confirmar, "text", false); }
	
	value = form_input_valor(objeto);

	switch(tipo){
		case "text":
		case "textarea":
		case "select":
			if(value != ''){ 
				if(tipo == "select"){ 
					if($(ele + ' option[value="' + value +'"]').length == 0){ 
						$(ele).append('<option value="' + value + '">' + value + '</option>');
					} 
					$(ele).attr('rel', value); 
				} 
				$(ele).val(value); 
				if(onChange != null  && typeof onChange === 'function') { 
					onChange();
					form_resize();
				}
			} else { $(ele).val(''); }
			
			var dataType = $(ele).attr('data-type');
			if (typeof dataType !== 'undefined' && dataType !== false) {
				switch(dataType){
					case "numero":
					form_comma_number(ele);	
					form_comma_number_evento(ele);	
					break;
				}
			}
			
			if(tipo == "textarea"){ 
				if(limite != null){
					$(ele).addClass("auto");
					$(ele).unbind('keydown').bind('keydown', function(e){ 
						if(limite_tipo == 'letras'){ form_limit_text(this, limite); }
						else if(limite_tipo == 'palabras'){ form_limit_words(e, this, limite); }
					});

					$(ele).unbind('keyup').bind('keyup', function(e){ 
						if(limite_tipo == 'letras'){ form_limit_text(this, limite); }
						else if(limite_tipo == 'palabras'){ form_limit_words(e, this, limite); }
						form_textarea_resize(this, callback); 
					});
					//setTimeout(function(){
						form_textarea_resize($(ele)[0], callback); 
					//}, 200);
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

			if(onChange != null  && typeof onChange === 'function') { 
				$(ele).unbind("change.form").bind("change.form", function(){ 
					onChange();
					form_resize();
				});
			}

			break;
		case "fecha":
			if(value != ''){ 
				$(ele).val(value); 
			} else { 
				$(ele).val(''); 
			}
			if(maxlength != null){ $(ele).attr('maxlength', maxlength); }
			
			var picker = $(ele).pickadate({
				format: 'd mmmm, yyyy',
				formatSubmit: 'yyyy-mm-dd',
				selectMonths: true,
				selectYears: 60,
				//max: true
			});
			picker = picker.pickadate('picker');
			
			if(value != ""){ 
				picker.set('select', value, { format: 'yyyy-mm-dd' });  
			} else { 
				picker.clear(); 
			}
			
		case "file":
			
			$(ele + " .input_file").val("");
			$(ele + " .files").html("");
			//var unique = key;
			var unique = $(ele).attr('data-id');
			var_form_archivos[unique] = [];
			
			if(value != null){
				
				for (zz in value['v']) {
					var enlace = '';
					if(value.hasOwnProperty('l') && value['l'].hasOwnProperty(zz)) { enlace = value['l'][zz]; }
					form_input_file_list(unique, zz, {name: value['v'][zz], enlace:enlace}, url_files, function(){ 
						if(callback != null  && typeof callback === 'function') { callback(); }
					});
				}
			}
			
			$(ele + " .input_add").unbind('click').bind('click',  function() { 
				var limite = parseInt($(this).parent().attr('data-limit'), 10);	
				
				if(Object.keys(var_form_archivos[unique]).length >= limite){ 
					lightbox_abrir('<div class="align-left"><b>Máximo ' + limite + ' archivos</b></div>', {
						"cancelar" : {
							"txt": "Ok",
							"fn": null
						} 
					}, {});
				} else { 
					$(ele + " .input_file").click(); 
				} 
				return false;
			});
				
			$(ele + " .input_file").unbind('change').bind('change',  function(){
				var limite = parseInt($(this).parent().attr('data-limit'), 10);
				var extensiones = $(this).parent().attr('data-ext');
				extensiones = extensiones.split(",");
				if($(this).val() != ""){ 
					form_input_file_read(this, unique, limite, extensiones, url_files, function(){ 
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
				form_input_init_switch(this, especificar, txt_default);
				if(onChange != null  && typeof onChange === 'function') { 
					onChange();
					form_resize();
				}
				
				if(especificar != null){ 
					var especificar_value = (objeto.hasOwnProperty('especificar_value'))?objeto.especificar_value:'';
					var dataType = $(especificar).attr('data-type');
					if (typeof dataType !== 'undefined' && dataType !== false) {
						switch(dataType){
							case "numero":
							form_comma_number(especificar);	
							form_comma_number_evento(especificar);	
							break;
						}
					}
					$(especificar).val(especificar_value); 
				}
				var dataType = $(ele).attr('data-type');
				if (typeof dataType !== 'undefined' && dataType !== false) {
					switch(dataType){
						case "switch":
							$(this).unbind('click.form').bind('click.form', function(){ form_input_init_switch(this, especificar, txt_default); });
							form_input_init_switch(this, especificar, txt_default);
							break;	
					}
				}
				
				if(onChange != null  && typeof onChange === 'function') { 
					$(this).unbind("change.form").bind("change.form", function(){
						onChange();
						form_resize();
					});
				}
			});
			break;
		case "radio":
		case "check":
			$(ele).each(function(index, element) {
				var valor = $(this).val();	
				$(this).prop('checked', false);
				
				
				if($(this).closest('.r').find('#extra_' + valor).length > 0){ $(this).closest('.r').find('#extra_' + valor).html('');	}
				
				var filtros = $(this).closest('.r').find('#extra_' + valor).attr('data-filto');
				var name = $(this).closest('.r').find('#extra_' + valor).attr('data-name');
				
				if (typeof filtros !== 'undefined' && filtros !== false && $(this).closest('.r').find('#extra_' + valor).length > 0 && $(this).closest('.r').find('#extra_' + valor).html() == '') {
					try { filtros = JSON.parse(filtros); } 
					catch (e) { filtros = null; }
					if(filtros != null && filtros.hasOwnProperty('especificar') && filtros.especificar == true){
						var html = '<input type="text" value="" id="extra_input_' + valor + '"  class="input gris" maxlength="250" placeholder="Especifique: ' + name + '" />'; 	
						
						$(this).closest('.r').find('#extra_' + valor).html(html);	
						$(this).closest('.r').find('#extra_' + valor).hide();	
					}
				}
				
				$(this).unbind('click.form').bind('click.form',  function() {
					$(ele).each(function(index, element) {
						var valor = $(this).val();			
						if($(this).is(':checked')){ 
							$(this).closest('.r').find('#extra_' + valor).show();
						} else {
							$(this).closest('.r').find('#extra_' + valor).hide();	
						}
					});
				});

				if(onChange != null  && typeof onChange === 'function') { 
					$(this).unbind("change.form").bind("change.form", function(){
						onChange();
						form_resize();
					});
				}
				
			});
			
			if(value != null){
				if(value.constructor !== Object){ 
					try {
						value = JSON.parse(value);
					} catch (e) {
						value = {v:[],e:{}};
					}
				} 
				for (zz in value['v']) {
					
					$(ele + '[value="' + value['v'][zz] + '"]').prop('checked', true);
					
					if($(ele + '[value="' + value['v'][zz] + '"]').closest('.r').find('#extra_' + value['v'][zz]).length > 0){ 
						$(ele + '[value="' + value['v'][zz] + '"]').closest('.r').find('#extra_' + value['v'][zz]).show(); 
						$(ele + '[value="' + value['v'][zz] + '"]').closest('.r').find('#extra_input_' + value['v'][zz]).val(value['e'][value['v'][zz]]);
					}
					if(onChange != null  && typeof onChange === 'function') { 
						onChange();
						form_resize();
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
		case "tokens":
			
			$(ele).tokenInput('destroy');

			var settings = {
				hintText: "...",
				noResultsText: "Sin resultados",
				searchingText: "Buscando...",
				preventDuplicates: true,
				excludeCurrent: true,
				prePopulate: [],
				theme: "facebook",
				onAdd: function (item) { form_resize(); },
				onReady: function (item) { form_resize(); },
			};

			if(value != null){
				if(value.constructor !== Object){ 
					try {
						value = JSON.parse(value);
					} catch (e) {
						value = {v:[],e:{}};
					}
				} 
				settings.prePopulate = form_input_init_tokens(value['v']);
			}
			
			$(ele).tokenInput(form_input_init_tokens(valores), settings);
			break;
	}
	if(confirmar != null){ 
		$(confirmar).on('paste', function (e) { return false; }); 
		$(confirmar).val(confirmar_value);	
	}
}

function form_input_init_tokens(valores){
	var populate = [];
	for (zz in valores) {
		var obj = { "id" : valores[zz]["id"] };
		var name = [valores[zz]["name"]];
		var conta = 1;
		while(valores[zz].hasOwnProperty('name' + conta)){
			name.push( valores[zz]['name' + conta] );
			conta++;
		}
		obj["name"] = name.join(', ');
		populate.push(obj); 
	}
	return populate;
}

function form_input_init_switch(ele, especificar, txt_default){
	console.log('form_input_init_switch', ele, especificar, txt_default);
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

function form_input_valores(datos, objetos){	
	for(x in datos){
		var index = objetos.findIndex(function(ele){ return ele.key === x; });
		if(index >= 0){ 
			objetos[index]["value"] = datos[x]; 
			datos[x] = form_input_valor(objetos[index])
		}
	}
	return datos;
}

function form_input_valor(objeto){
	var encode = (objeto.hasOwnProperty('encode'))?objeto.encode:null;
	var value = (objeto.hasOwnProperty('value'))?objeto.value:'';
	var tipo = (objeto.hasOwnProperty('tipo'))?objeto.tipo:null;
	
	if(value != null && value != '' && encode == true){
		switch(tipo){
			case "file":
			case "radio":
			case "check":
			case "switch":
			case "tokens":
				value = JSON.parse(form_decode(value));
				break;
			default:
				value = form_decode(value);		
				break;
		}
	}
	return value;
}

function form_object_data(data){
	if(data != null && data.constructor === Object){ 
		var text = [];
		for (i in data['v']) { text.push(data['v'][i]); }
		return text.toString();
	}
	return data;
}

function form_input_validar(objeto){
	//console.log('form_input_validar -> ', objeto);
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
			if(form_trim($(ele).val()) != ""){ 
				ok = true; 
				valor = $(ele).val();
				
				var datoInf = form_input_validar_dato(valor, validar, ok, info, nombre, ele);
				valor = datoInf.valor;
				ok = datoInf.ok;
				info = datoInf.info;
				
				if(ok == true){ 
					if(confirmar != null){
						if(form_trim($(ele).val()) != form_trim($(confirmar).val())){ 
							ok = false;  
							info += nombre + ' y su confirmación no coincide.'; 
							form_input_error(confirmar, "text", true);
						} else {
							form_input_error(confirmar, "text", false);
						}
					} 
				} else {
					if(confirmar != null){ form_input_error(confirmar, "text", true); }
				}
			} else {
				if(opcional == true){ ok = true; } 
				else { info += nombre + '.'; }
				if(confirmar != null){ form_input_error(confirmar, "text", true); }
			}
			break;
		case "file":
			var arr_values = {v:{}, l:{}};	
			var unique = $(ele).attr('data-id');
			if(Object.keys(var_form_archivos[unique]).length > 0){
				ok = true;
				for (x in var_form_archivos[unique]) {
					arr_values.v[x] = var_form_archivos[unique][x].name; 
					var archivo = null;
					if(var_form_archivos[unique][x].hasOwnProperty('enlace')){ archivo = var_form_archivos[unique][x].enlace; }
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
				if(opcional == true){ ok = true; } 
				else { info += nombre + '.'; }
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
					var especificar_valor = form_trim($(especificar).val());
					if(especificar_valor != ""){ 
						ok = true; 
						if(especificar_validar != null){
							
							var datoInf = form_input_validar_dato(especificar_valor, especificar_validar, ok, info, nombre, especificar);
							especificar_valor = datoInf.valor;
							ok = datoInf.ok;
							info = datoInf.info;
							
							arr_values.e[valor] = especificar_valor;
							
						}
					} else { info += nombre + ' (especifique).'; } 
					
					if(ok == true){ 
						form_input_error(especificar, 'especificar', false);
					} else {
						form_input_error(especificar, 'especificar', true);
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
					
					//console.log(1);
					
					var filtros = $(this).closest('.r').find('#extra_' + valor).attr('data-filto');
					var name = $(this).closest('.r').find('#extra_' + valor).attr('data-name');
					
					//console.log($(this).closest('.r').find('#extra_' + valor).val());
					
					var unique = Math.random().toString(36).substr(2, 9);
					$(this).closest('.r').find('#extra_input_' + valor).addClass(unique);
					
					if (typeof filtros !== 'undefined' && filtros !== false) {
						try { filtros = JSON.parse(filtros); } 
						catch (e) { filtros = null; }
						
						//console.log(2);
						
						if(filtros != null && filtros.hasOwnProperty('especificar') && filtros.especificar == true){
							
							//console.log(3);
							
							if($(this).closest('.r').find('#extra_input_' + valor).length > 0){ 
							
							
								//console.log(4);
							//if($('#extra_input_' + valor).length > 0){ 
								var especificar_valor = form_trim($(this).closest('.r').find('#extra_input_' + valor).val()); 
								//var especificar_valor = form_trim($('#extra_input_' + valor).val()); 
								//console.log(ele, '#extra_' + valor)
								//console.log(especificar_valor);
								if(especificar_valor == ""){ 
									arr_especifique.push(name);
									ok = false;
								} else {
									//console.log('#extra_input_' + valor + "." + unique);
									var datoInf = form_input_validar_dato(especificar_valor, especificar_validar, true, '', name + '<small>', '#extra_input_' + valor + "." + unique);
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
		case "tokens":
			var arr_values = {v:[]};
			var tokens = $(ele).tokenInput('get');
			if(Object.keys(tokens).length > 0){
				ok = true;
				for(var i in tokens){
					arr_values.v.push({
						"id": tokens[i].id 
					}); 
				}
			} else {
				if(opcional == true){ ok = true; } 
				else { info += nombre + '.'; }
			}
			valor = arr_values;
			break;
		
	}
	
	if(!ok){ form_input_error(ele, tipo, true); } 
	else { form_input_error(ele, tipo, false); } 
	
	if(encode == true && valor != null){
		switch(tipo){
			case "file":
			case "radio":
			case "check":
			case "switch":
				valor = form_encode(JSON.stringify(valor));
				break;
			default:
				valor = form_encode(valor);		
				break;
		}
	}
	return {"ok":ok, "valor":valor, "info":info};
}

function form_input_validar_info(validar){
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
		case "porcentaje":
			txt = 'Porcentaje de avance';
			break;
		default:
			txt = '';
			break;
	}
	return txt;		
}
function form_input_validar_dato(valor, validar, ok, info, nombre, ele){
	
	//console.log(ele);
	
	var v_correo =/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
	var v_entero = /^\d+$/;
	var v_horario = /^(0[0-9]|1[0-9]|2[0-3])(:)([0-5][0-9])$/;

	if(typeof valor !== "undefined" && valor != null){
		switch(validar){
			case "url":
				if(!form_validUrl(valor)){ 
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
				if(!form_isNumber(valor)) { 
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
			case "porcentaje":
				if(!v_entero.test(valor)) { 
					ok = false; 
					info += nombre + ' (sólo números).'; 
				} else if(valor > 100 || valor < 0){ 
					ok = false; 
					info += nombre + ' (Porcentaje 0% al 100%).'; 
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
	} else {
		ok = false; 
		info += nombre + ' (no definido).'; 
	}
	return {"valor":valor, "ok":ok, "info":info};
}

function form_input_file_read(input, id, limite, extensiones, url_files, fun_resize){
	var i = 0;
	var alerta = "";
	if (input.files && input.files.length > 0) {
		for(var j = 0, f; file = input.files[j]; j++) {
			var resultado = form_input_file_valid(file, false, extensiones, var_form_file_size);
			if(resultado == ""){
				 
				if(Object.keys(var_form_archivos[id]).length <  limite){ 
					form_input_file_list(id, Math.random().toString(36).substr(2, 9), file, url_files, fun_resize); 
				} else { 
					i = 1; 
					alerta += 'Máximo ' + limite + ' archivos.<br>'; 
					break; 
				}
			} else { i = 1; alerta += resultado + "<br>"; }
		}
		if(i == 1){ 
			lightbox_abrir('<div class="align-left"><b>Advertencia</b></div>' + alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
		}
	}
}

function form_input_file_valid(file, mostrar, extensiones){
	var alerta = "";
	var nombre = file.name;
	
	var temp = [];
	for(x in extensiones){ temp.push(extensiones[x]); temp.push((extensiones[x]).toUpperCase()); }
	if(!(new RegExp('(' + temp.join('|').replace(/\./g, '\\.') + ')$')).test(nombre)){
		alerta += "El archivo: " + nombre + " no tiene una extensión válida. <br />Las extensiones válidas son: " + extensiones.join(", ") + ".";
	}
	
	if(file.size > var_form_file_size){
		if(alerta != ""){ alerta += "<br>"; }
		alerta += "El archivo: " + nombre + " excede el límite permitido de " + (var_form_file_size/1024/1024 ) + "MB. Favor de ajustar el archivo o seleccionar otro.";
	}
	if(mostrar && alerta != ""){ 
		lightbox_abrir('<div class="align-left"><b>Advertencia</b></div>' + alerta, {
			"cancelar" : {
				"txt": "Ok",
				"fn": null
			} 
		}, {});
	}
	return alerta;
}

function form_input_file_list(id, pos, file, url_files, fun_resize){
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
		
	var archivo = $(html).appendTo('.archivos[data-id="' + id + '"] .files');
	$(archivo).attr('data-pos', pos);
	$(archivo).find(".nombre").html((name));
	$(archivo).find(".acciones .quitar").attr('data-id', id);
	$(archivo).find(".acciones .quitar").attr('data-pos', pos);
	$(archivo).find(".acciones .quitar").unbind('click').bind('click', function(){
		var id = $(this).attr('data-id');
		var pos = $(this).attr('data-pos');
		
		lightbox_abrir('<div class="align-left"><b>¿Seguro deseas eliminar el archivo: ' + (var_form_archivos[id][pos].name) + '?</b></div>', {
			"aceptar" : {
				"txt": "Sí",
				"fn":  function(){
					delete var_form_archivos[id][pos];
					$('.archivos[data-id="' + id + '"] .files .archivo[data-pos="' + pos + '"]').remove();		
					lightbox_cerrar();
					fun_resize();
				}
			},
			"cancelar" : {
				"txt": "No",
				"fn": null
			} 
		}, {});
		return false;
	});
	
	if(!var_form_archivos.hasOwnProperty(id)){ var_form_archivos[id] = []; }
	
	var_form_archivos[id][pos] = file;
	fun_resize();
}

function form_uniqID(length) {
    var resultado = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var contador = 0;
    while (contador < length) { resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); contador += 1; }
    return resultado;
}

function form_validUrl(str){
	try {
		var url = new URL(str);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch (e) {
		return false;  
	}
}

function form_trim(str){
	if (typeof str !== "undefined" && str != null) {
		return str.replace(/^\s+|\s+$/g,"");
	} else {
		return null;
	}
}

function form_comma_number(ele){	
	var n = $(ele).val();
	n += '';
	n = n.replace(/,/g, '');
	var x = n.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '0.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + ',' + '$2'); }
	if(x2 != ''){ 
		x2 = x2.split('.');
		var recortar = false;
		if(x2[1].length > 1){ recortar = true; }
		if(recortar){
			x2 = parseFloat(x2[0] + '.' + x2[1]).toFixed(2); 
			x2 = x2.split('.');
		} 
		x2 = "." + x2[1];
	};
	$(ele).val(x1 + x2);
	form_comma_number_reverse(ele);
}
function form_comma_number_evento(ele){
	$(ele).unbind('keypress keyup blur').bind('keypress keyup blur', function(event){
		if(event.which == 44){ return true; }
		if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57  )) { event.preventDefault(); }
		form_comma_number(ele);
	});	
}
function form_comma_number_reverse(ele){
	var n = $(ele).val();
	n += '';
	n = n.replace(/,/g, '');
	$(ele).attr('data-valor', n);
}

function form_isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function form_limit_text(limitField, limitNum) { 
	if (limitField.value.length > limitNum) { 
		limitField.value = limitField.value.substring(0, limitNum); 
	} 
	var div_error = $(limitField).next();
	if(div_error.hasClass("error")){
		div_error.children('span.maximo').html(limitNum - limitField.value.length);
	}
}
function form_limit_words(e, limitField, MAX_WORDS) { 
	var BACKSPACE  = 8;
    var DELETE     = 46;
    var valid_keys = [BACKSPACE, DELETE];
    var words      = limitField.value.split(' ');
    if (words.length >= MAX_WORDS && valid_keys.indexOf(e.keyCode) == -1) {
        e.preventDefault();
        words.length = MAX_WORDS;
        limitField.value = words.join(' ');
    }
}
function form_textarea_resize(elemento, funcion){
	if(form_trim($(elemento).val()) != ""){	
		var altura = 0;
		$(elemento).css("height", "auto");
		while(altura < $(elemento)[0].scrollHeight + parseFloat($(elemento).css("borderTopWidth")) + parseFloat($(elemento).css("borderBottomWidth"))) { altura = altura + 1; };
		if(altura != 0){  $(elemento).height(altura); }
	} else { $(elemento).css("height","28px"); $(elemento).val(""); }
	form_resize();
	if(funcion != null){ funcion(); }
}

function form_index(arr, key) {
	return arr.findIndex(function(elemento){ return elemento.key === key; });
}

function form_opcional(arr, key, opcional, visible){
	var index = form_index(arr, key);
	var element = null;
	if(arr.hasOwnProperty(index)){ 
		arr[index]["opcional"] = opcional; 
		element = arr[index]["ele"];
	}
	
	if($(element).closest('.item').length > 0){
		$(element).closest('.item').attr("data-obligatorio", !opcional);
		$(element).closest('.item').show();
		if(!visible){
			if(opcional){
				$(element).closest('.item').hide();
				$(element).val('');
			}
		}
	}
}

function form_rel(ele) {
	var attr = $(ele).attr('rel');
	if (typeof attr !== 'undefined' && attr !== false && $(ele + " option[value='" + attr + "']").length != 0) {
		$(ele).val(attr); 
	}
}

function form_nl2br(str, is_xhtml) {
    if (typeof str === 'undefined' || str === null) { return ''; }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}