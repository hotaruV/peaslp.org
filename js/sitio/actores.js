var actores_columns = ['actor', 'siglas', 'catalogo_pertenece'];
var actores_arr = [
	{"key":"actor", "nombre":"Actor responsable", "ele":"#input_actor", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"siglas", "nombre":"Siglas", "ele":"#input_siglas", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"municipios", "nombre":"Municipios", "ele":'input[name="input_municipios"]', "tipo": "switch", "validar": "entero", "opcional": true},
	{"key":"catalogos", "nombre":"Catálogos", "ele":'input[name="input_catalogos"]', "tipo": "switch", "validar": "entero", "opcional": true, "onChange":function(){
		if($('input[name="input_catalogos"]:checked').val() == "1"){	
			form_opcional(actores_arr, "catalogo_pertenece", false, false);
		} else {
			form_opcional(actores_arr, "catalogo_pertenece", true, false);
		}
	}},
	{"key":"catalogo_pertenece", "nombre":"Catálogo al que pertenece el actor responsable", "ele":"#input_catalogo_pertenece", "tipo": "select", "validar": "entero", "opcional": true},
];
var actores_foreign = [
	{'column' : 'catalogo_pertenece', 'base' : 'catalogo', 'column_f' : 'catalogo' },
];

function actores_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1,2])){
			
			$("#div_catalogo_pertenece").hide();
			var _tabla_catalogo = new tablaJSON({"base": "catalogo"});
			_tabla_catalogo.loadData("all", "#input_catalogo_pertenece", "select", {
				"orden": [
					{ 
						"col" : "catalogo", 
						"tipo" : "texto", 
						"dir" : "asc" 
					}
					
				]
			});
			
			var _tabla = new tablaJSON({
				"base": "actor", 
				"columns": actores_columns, 
				"arr" : actores_arr, 	
				"foreign" : actores_foreign,
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
function actores_load(){
	actores_resize();
}
function actores_resize(){
	
}