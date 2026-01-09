var ejes_columns = ['eje', 'color'];
var ejes_columns_tipo = {
	'eje' : 'texto', 
};
var ejes_arr = [
	{"key":"eje", "nombre":"Eje", "ele":"#input_eje", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"color", "nombre":"Color hexadecimal", "ele":"#input_color", "tipo": "text", "validar": "hexadecimal", "opcional": false},
];

function ejes_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){

			var _tabla = new tablaJSON({
				"base": "eje", 
				"columns": ejes_columns, 
				"columns_type": ejes_columns_tipo, 
				"arr" : ejes_arr, 	
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
function ejes_load(){
	ejes_resize();
}
function ejes_resize(){
	
}