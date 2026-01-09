var plazos_columns = ['plazo'];
var plazos_arr = [
	{"key":"plazo", "nombre":"Plazo (temporalidad)", "ele":"#input_plazo", "tipo": "text", "validar": "texto", "opcional": false},
];

function plazos_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){

			var _tabla = new tablaJSON({
				"base": "plazo", 
				"columns": plazos_columns, 
				"arr" : plazos_arr, 	
			});
			_tabla.init();
			
		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	sesion_verificar_no = function(){
		
	}
}
function plazos_load(){
	plazos_resize();
}
function plazos_resize(){
	
}