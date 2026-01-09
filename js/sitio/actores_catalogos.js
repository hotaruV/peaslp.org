var actores_catalogos_columns = ['catalogo'];
var actores_catalogos_arr = [
	{"key":"catalogo", "nombre":"Catálogo", "ele":"#input_catalogo", "tipo": "text", "validar": "texto", "opcional": false},
];

function actores_catalogos_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){

			var _tabla = new tablaJSON({
				"base": "catalogo", 
				"columns": actores_catalogos_columns, 
				"arr" : actores_catalogos_arr, 	
			});
			_tabla.init();
			
		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	sesion_verificar_no = function(){
		
	}
}
function actores_catalogos_load(){
	actores_catalogos_resize();
}
function actores_catalogos_resize(){
	
}