var prioridades_columns = ['prioridad', 'eje', 'plazo'];
var prioridades_foreign = [
	{'column' : 'eje', 'base' : 'eje'},
	{'column' : 'plazo', 'base' : 'plazo'},
];
var prioridades_arr = [
	{"key":"eje", "nombre":"Eje", "ele":"#input_eje", "tipo": "select", "validar": "entero", "opcional": false},
	{"key":"plazo", "nombre":"Plazo (temporalidad)", "ele":"#input_plazo", "tipo": "select", "validar": "entero", "opcional": false},
	{"key":"prioridad", "nombre":"Prioridad", "ele":"#input_prioridad", "tipo": "text", "validar": "texto", "opcional": false},
];

function prioridades_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){

			var _tabla_eje = new tablaJSON({"base": "eje"});
			_tabla_eje.loadData("all", "#input_eje", "select", {
				"orden": [
					{ 
						"col" : "eje", 
						"tipo" : "texto", 
						"dir" : "asc" 
					}
					
				]
			});

			var _tabla_plazo = new tablaJSON({"base": "plazo"});
			_tabla_plazo.loadData("all", "#input_plazo", "select", {
				"orden": [
					{ 
						"col" : "plazo", 
						"tipo" : "texto", 
						"dir" : "asc" 
					}
					
				]
			});


			var _tabla = new tablaJSON({
				"base": "prioridad", 
				"columns": prioridades_columns, 
				"arr" : prioridades_arr, 
				"foreign" : prioridades_foreign,
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
function prioridades_load(){
	prioridades_resize();
}
function prioridades_resize(){
	
}
