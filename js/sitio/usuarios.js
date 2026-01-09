var usuarios_columns = ['usuario', 'nombre', 'apellidos', 'u_perfil', "actor", "institucion", "actor_elemento", "municipio"];
var usuarios_foreign = [
	{'column' : 'actor', 'base' : 'actor'},
	{'column' : 'institucion', 'base' : 'institucion'},
];
var usuarios_arr = [
	{"key":"nombre", "nombre":"Nombre de la institución", "ele":"#input_nombre", "tipo": "text", "validar": "nombre", "opcional": false},
	{"key":"apellidos", "nombre":"Nombre completo", "ele":"#input_apellidos", "tipo": "text", "validar": "nombre", "opcional": true},
	{"key":"usuario", "nombre":"Usuario", "ele":"#input_correo", "tipo": "text", "validar": "nombre", "opcional": false},
	{"key":"contrasena", "nombre":"Contraseña", "ele":"#input_contrasena", "tipo": "text", "validar": "contrasena", "opcional": false},
	{"key":"contrasena_un_uso", "nombre":"Contraseña de un solo uso", "ele":'input[name="input_contrasena_un_uso"]', "tipo": "switch", "validar": "entero", "opcional": true },
	{"key":"correo_electronico", "nombre":"Correo electrónico", "ele":"#input_correo_electronico", "tipo": "text", "validar": "mail", "opcional": true},
	{
		"key":"u_perfil", 
		"nombre":"Perfil", 
		"ele":'input[name="input_perfil"]', 
		"tipo": "radio", 
		"validar": "entero", 
		"opcional": false,
		"onChange":function(){
			$(".change_perfil").each(function( index, value ) {
				$(this).hide();
			});
			switch($('input[name="input_perfil"]:checked').val()){
				case "4":
					form_opcional(usuarios_arr, "actor", false, false);
					form_opcional(usuarios_arr, "institucion", true, false);
					form_opcional(usuarios_arr, "institucion_municipio", true, false);
					$('#input_institucion').val("");
					$('#input_institucion_municipio').val("");
					break;
				case "5":
					form_opcional(usuarios_arr, "institucion", false, false);
					form_opcional(usuarios_arr, "actor", true, false);
					form_opcional(usuarios_arr, "actor_municipio", true, false);
					form_opcional(usuarios_arr, "actor_catalogo", true, false);
					form_opcional(usuarios_arr, "actor_elemento", true, false);
					$('#input_actor').val("");
					$('#input_actor_municipio').val("");				
					$('#input_actor_catalogo').val("");				
					$('#input_actor_elemento').val("");				
					break;
				default:
					$('#input_institucion').val("");
					$('#input_institucion_municipio').val("");
					$('#input_actor').val("");
					$('#input_actor_municipio').val("");	
					$('#input_actor_catalogo').val("");	
					$('#input_actor_elemento').val("");	
					
					form_opcional(usuarios_arr, "actor", true, false);
					form_opcional(usuarios_arr, "institucion", true, false);
					form_opcional(usuarios_arr, "actor_municipio", true, false);
					form_opcional(usuarios_arr, "actor_catalogo", true, false);
					form_opcional(usuarios_arr, "actor_elemento", true, false);
					form_opcional(usuarios_arr, "institucion_municipio", true, false);
					break;
			}
		}
	},
	{"key":"actor", "nombre":"Actor responsable", "ele":"#input_actor", "tipo": "select", "validar": "texto", "opcional": true, "onChange":function(){
		var municipios = $("#input_actor option:selected").attr("data-municipio");
		if(municipios == "1"){
			form_opcional(usuarios_arr, "actor_municipio", false, false);
		} else {
			form_opcional(usuarios_arr, "actor_municipio", true, false);
		}
		
		var catalogos = $("#input_actor option:selected").attr("data-catalogo");
		if(catalogos == "1"){
			form_opcional(usuarios_arr, "actor_catalogo", false, false);
			form_opcional(usuarios_arr, "actor_elemento", false, false);
			
			if($('#input_actor_catalogo option[value="' + $("#input_actor option:selected").attr("data-catalogo_pertenece") + '"]').length > 0){ 
				$("#input_actor_catalogo").val($("#input_actor option:selected").attr("data-catalogo_pertenece"));
				$("#input_actor_catalogo").trigger("change.form");
			}
		} else {
			form_opcional(usuarios_arr, "actor_catalogo", true, false);
			form_opcional(usuarios_arr, "actor_elemento", true, false);
		}
	}},
	{"key":"institucion", "nombre":"Institución coordinadora", "ele":"#input_institucion", "tipo": "select", "validar": "texto", "opcional": true, "onChange":function(){
		var municipios = $("#input_institucion option:selected").attr("data-municipio");
		
		if(municipios == "1"){
			form_opcional(usuarios_arr, "institucion_municipio", false, false);
		} else {
			form_opcional(usuarios_arr, "institucion_municipio", true, false);
		}
	}},
	{"key":"actor_municipio", "nombre":"Municipio del actor responsable", "ele":"#input_actor_municipio", "tipo": "select", "validar": "entero", "opcional": true},
	{"key":"institucion_municipio", "nombre":"Municipio de la Institución coordinadora", "ele":"#input_institucion_municipio", "tipo": "select", "validar": "entero", "opcional": true},
	
	{"key":"actor_catalogo", "nombre":"Catálogo del actor responsable", "ele":"#input_actor_catalogo", "tipo": "select", "validar": "entero", "opcional": true, "onChange":function(){
		if($("#input_actor_catalogo").val() != ""){
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
			}, function(){	form_rel("#input_actor_elemento"); }, 'catalogo');
		}
	}},
	{"key":"actor_elemento", "nombre":"Elemento del catálogo", "ele":"#input_actor_elemento", "tipo": "select", "validar": "entero", "opcional": true},
];

function usuarios_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){
			
			
			$("#a_contrasena").unbind("click").bind("click", function(){
				$("#input_contrasena").val(usuarios_generarCodigo(12));
				return false;
			});
			

			$(".change_perfil").each(function( index, value ) {
				$(this).hide();
			});

			$('#input_actor_municipio option:not(:first)').remove();
			for(var i in municipios_arr){
				$('#input_actor_municipio').append('<option value="' + municipios_arr[i]["id"] + '">' + municipios_arr[i]["municipio"] + '</option>');
			}
			
			$('#input_institucion_municipio option:not(:first)').remove();
			for(var i in municipios_arr){
				$('#input_institucion_municipio').append('<option value="' + municipios_arr[i]["id"] + '">' + municipios_arr[i]["municipio"] + '</option>');
			}

			var _tabla_actor = new tablaJSON({"base": "actor"});
			_tabla_actor.loadData("all", "#input_actor", "select", {
					"orden": [
						{ 
							"col" : "actor", 
							"tipo" : "texto", 
							"dir" : "asc" 
						}
						
					] 
				}, function(data){
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
						var tiene_es = ""
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
					
					var _tabla_catalogo = new tablaJSON({"base": "catalogo"});
					_tabla_catalogo.loadData("all", "#input_actor_catalogo", "select", {
						"orden": [
							{ 
								"col" : "catalogo", 
								"tipo" : "texto", 
								"dir" : "asc" 
							}
							
						]
					});
				}
			);

			var _tabla_institucion = new tablaJSON({"base": "institucion"});
			_tabla_institucion.loadData("all", "#input_institucion", "select", {
					"orden": [
						{ 
							"col" : "institucion", 
							"tipo" : "texto", 
							"dir" : "asc" 
						}
						
					] 
				}, function(data){
				for(var i in data){
					var institucion = data[i];
					var tiene = "0";
					if(
						institucion["institucion_data"].hasOwnProperty("municipios") &&
						institucion["institucion_data"]["municipios"].hasOwnProperty("v") &&
						institucion["institucion_data"]["municipios"]["v"][0] == 1
					){
						tiene = "1";
					} 
					$('#input_institucion option[value="' + institucion.idinstitucion + '"]').attr("data-municipio", tiene);
				}
			});

			var _tabla_perfil = new tablaJSON({"base": "perfil"});
			_tabla_perfil.loadData("all", "perfil", "radio", null, function(values){
			
				var index = form_index(usuarios_arr, "u_perfil");
				if(usuarios_arr.hasOwnProperty(index)){
					usuarios_arr[index]["valores"] = values;
				}

				var _tabla = new tablaJSON({
					"base": "usuario", 
					"columns": usuarios_columns, 
					"arr" : usuarios_arr, 
					"foreign" : usuarios_foreign,
					"ajax" : {
						"save" : "usuarios.php",
						"other" : "tablaJSON.php",
						"loadData" : "tablaJSON.php",
					},
					"onEvent" : {
						"update" : function(){
							form_opcional(usuarios_arr, "contrasena", true, true);
						}
					},
					"tabla_orden" : [ 2, "asc" ],
				});
				_tabla.init();

			});
		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	
	sesion_verificar_no = function(){
		
	}
}
function usuarios_load(){
	usuarios_resize();
}
function usuarios_resize(){
	
}

function usuarios_generarCodigo(longitud){
	var pattern = "23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ!;#$%&()*+-/:;=?@[]{}_";
	var key = '';    
	for(i=0; i<longitud; i++){
    	key += pattern.charAt( Math.floor( Math.random() * pattern.length ) );
	}
	return key;
}
