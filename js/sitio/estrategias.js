var estrategias_columns = ['identificador', 'estrategia', 'instituciones', 'fecha'];
var estrategias_columns_tipo = {
	'identificador' : 'numero', 
};
var estrategias_arr = [
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
	{"key":"prioridad", "nombre":"Prioridad", "ele":"#input_prioridad", "tipo": "select", "validar": "entero", "opcional": false},
	{"key":"identificador", "nombre":"#", "ele":"#input_identificador", "tipo": "text", "validar": "numero", "opcional": false},
	{"key":"estrategia", "nombre":"Estrategia", "ele":"#input_estrategia", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"instituciones", "nombre":"Instituciones coordinadoras", "ele":"#input_instituciones", "tipo": "tokens", "validar": "texto", "opcional": false, "valores":[]},
];

function estrategias_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){

			var _tabla_institucion = new tablaJSON({"base": "institucion"});
			_tabla_institucion.loadData("all", "#input_instituciones", "tokens", null, function(values){
				
				var index = form_index(estrategias_arr, "instituciones");
				if(estrategias_arr.hasOwnProperty(index)){
					estrategias_arr[index]["valores"] = values;
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
					"base": "estrategia", 
					"columns": estrategias_columns, 
					"columns_type": estrategias_columns_tipo, 
					"arr" : estrategias_arr,
					"tabla_orden" : [ 1, "asc" ],
				});
				_tabla.init();
				
			}, ['siglas','institucion']);

		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	
	sesion_verificar_no = function(){
		
	}
}
function estrategias_load(){
	estrategias_resize();
}
function estrategias_resize(){
	
}