var indicadores_columns = ['estrategia', 'indicador', 'meta', 'meta_al'];
var indicadores_columns_tipo = {
	'identificador' : 'texto', 
};
var indicadores_foreign = [
	{'column' : 'eje', 'base' : 'eje'},
	{'column' : 'prioridad', 'base' : 'prioridad'},
	{'column' : 'estrategia', 'base' : 'estrategia', 'column_f' : 'identificador'},
];
var indicadores_arr = [
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
	{"key":"indicador", "nombre":"Indicador", "ele":"#input_indicador", "tipo": "textarea", "validar": "texto", "opcional": false, "limite": 500},
	{"key":"meta_al", "nombre":"Al año", "ele":"#input_meta_al", "tipo": "text", "validar": "anio", "opcional": false},
	{"key":"meta", "nombre":"Meta", "ele":"#input_meta", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"metodo", "nombre":"Método de cálculo", "ele":"#input_metodo", "tipo": "textarea", "validar": "texto", "opcional": false, "limite": 500},
	{"key":"verificacion", "nombre":"Fuente de verificación", "ele":"#input_verificacion", "tipo": "textarea", "validar": "texto", "opcional": false, "limite": 500},
];

function indicadores_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1,2])){
			
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
				"base": "indicador", 
				"columns": indicadores_columns, 
				"columns_type": indicadores_columns_tipo, 
				"arr" : indicadores_arr, 	
				"foreign" : indicadores_foreign,
				"tabla_orden" : [ 1, "asc" ],
			});
			_tabla.init();

		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	
	sesion_verificar_no = function(){
		
	}
}
function indicadores_load(){
	indicadores_resize();
}
function indicadores_resize(){
	
}