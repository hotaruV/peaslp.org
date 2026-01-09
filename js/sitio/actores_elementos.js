var actores_elementos_columns = ['elemento', 'catalogo'];
var actores_elementos_foreign = [
	{'column' : 'catalogo', 'base' : 'catalogo'},
];
var actores_elementos_arr = [
	{"key":"catalogo", "nombre":"Catálogo", "ele":"#input_catalogo", "tipo": "select", "validar": "entero", "opcional": false},
	{"key":"elemento", "nombre":"Elemento", "ele":"#input_elemento", "tipo": "text", "validar": "texto", "opcional": false},
];

function actores_elementos_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){

			var _tabla_catalogo = new tablaJSON({"base": "catalogo"});
			_tabla_catalogo.loadData("all", "#input_catalogo", "select", {
				"orden": [
					{ 
						"col" : "catalogo", 
						"tipo" : "texto", 
						"dir" : "asc" 
					}
					
				]
			});

			var _tabla = new tablaJSON({
				"base": "elemento", 
				"columns": actores_elementos_columns, 
				"arr" : actores_elementos_arr, 
				"foreign" : actores_elementos_foreign,
				"tabla_orden" : [ 2, "asc" ],
			});
			_tabla.init();

		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	
	sesion_verificar_no = function(){
		
	}
}
function actores_elementos_load(){
	actores_elementos_resize();
}
function actores_elementos_resize(){
	
}
