var linea_de_accion_columns = ['identificador', 'linea', 'eje', 'actores'];
var linea_de_accion_columns_tipo = {
	'identificador' : 'texto', 
};
var linea_de_accion_arr = [
	{
		"key":"eje", 
		"nombre":"Eje", 
		"ele":"#input_eje", 
		"tipo": "select", 
		"validar": "entero", 
		"opcional": false,
		"onChange":function(){
			var _tabla = new tablaJSON({"base": "prioridad"});
			_tabla.loadData("filter", "#input_prioridad", "select", {
				"ident": $("#input_eje").val(),
				"orden": [
					{ 
						"col" : "prioridad", 
						"tipo" : "texto", 
						"dir" : "asc" 
					}
					
				] 
			}, function(){	form_rel("#input_prioridad"); }, 'eje');
		}
	},
	{
		"key":"prioridad", 
		"nombre":"Prioridad", 
		"ele":"#input_prioridad", 
		"tipo": "select", 
		"validar": "entero", 
		"opcional": false,
		"onChange":function(){
			var _tabla = new tablaJSON({"base": "estrategia"});
			_tabla.loadData("filter", "#input_estrategia", "select", {
				"ident": $("#input_prioridad").val(),
				"orden": [
					{ 
						"col" : "estrategia", 
						"tipo" : "texto", 
						"dir" : "asc" 
					}
					
				] 
			}, function(){ form_rel("#input_estrategia"); }, 'prioridad');
		}
	},
	{"key":"estrategia", "nombre":"Estrategia", "ele":"#input_estrategia", "tipo": "select", "validar": "entero", "opcional": false},
	{"key":"identificador", "nombre":"#", "ele":"#input_identificador", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"linea", "nombre":"Línea de acción", "ele":"#input_linea_de_accion", "tipo": "textarea", "validar": "texto", "opcional": false, "limite": 500},
	{"key":"actores", "nombre":"Actores responsables", "ele":'#input_actores', "tipo": "tokens", "validar": "texto", "opcional": false},
	{"key":"anexo_ata", "nombre":"Anexo ATA", "ele":"#input_anexo_ata", "tipo": "text", "validar": "numero", "opcional": true},
];
var linea_de_accion_foreign = [
	{'column' : 'eje', 'base' : 'eje'},
	{'column' : 'prioridad', 'base' : 'prioridad'},
	{'column' : 'estrategia', 'base' : 'estrategia'},
];

function linea_de_accion_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1,2])){

			var _tabla_actor = new tablaJSON({"base": "actor"});
			_tabla_actor.loadData("all", "#input_actores", "tokens", null, function(values){

				var index = form_index(linea_de_accion_arr, "actores");
				if(linea_de_accion_arr.hasOwnProperty(index)){
					linea_de_accion_arr[index]["valores"] = values;
				}

				var _tabla_data = new tablaJSON({"base": "eje"});
				_tabla_data.loadData("all", "#input_eje", "select", {
					"orden": [
						{ 
							"col" : "eje", 
							"tipo" : "texto", 
							"dir" : "asc" 
						}
						
					]
				});
				
				var _tabla = new tablaJSON({
					"base": "linea", 
					"columns": linea_de_accion_columns, 
					"columns_type": linea_de_accion_columns_tipo, 
					"arr" : linea_de_accion_arr, 	
					"foreign" : linea_de_accion_foreign,
					"tabla_orden" : [ 1, "asc" ],
				});
				_tabla.init();

			}, ['siglas', 'actor']);
			
		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	
	sesion_verificar_no = function(){
		
	}
}
function linea_de_accion_load(){
	linea_de_accion_resize();
}
function linea_de_accion_resize(){
	
}