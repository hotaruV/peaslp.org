var instituciones_columns = ['institucion', 'siglas'];
var instituciones_arr = [
	{"key":"institucion", "nombre":"Institución coordinadora", "ele":"#input_institucion", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"siglas", "nombre":"Siglas", "ele":"#input_siglas", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"municipios", "nombre":"Municipios", "ele":'input[name="input_municipios"]', "tipo": "switch", "validar": "entero", "opcional": true}
];

function instituciones_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){

			var _tabla = new tablaJSON({
				"base": "institucion", 
				"columns": instituciones_columns, 
				"arr" : instituciones_arr,
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
function instituciones_load(){
	instituciones_resize();
}
function instituciones_resize(){
	
}