var periodos_correos = new Array();
var periodos_dots = null;
var periodos_columns = ['periodo', 'color', 'inicia', 'termina', "inicia_revision", "termina_revision"];
var periodos_arr = [
	{"key":"periodo", "nombre":"Periodo", "ele":"#input_periodo", "tipo": "text", "validar": "texto", "opcional": false},
	{"key":"inicia", "nombre":"Inicia captura", "ele":"#input_inicia", "tipo": "fecha", "validar": "fecha", "opcional": false},
	{"key":"termina", "nombre":"Termina captura", "ele":"#input_termina", "tipo": "fecha", "validar": "fecha", "opcional": false},
	{"key":"inicia_revision", "nombre":"Inicia revisión", "ele":"#input_inicia_revision", "tipo": "fecha", "validar": "fecha", "opcional": false},
	{"key":"termina_revision", "nombre":"Termina revisión", "ele":"#input_termina_revision", "tipo": "fecha", "validar": "fecha", "opcional": false},
];

function periodos_ready(){
	sesion_verificar_ini = function(){	
		if(sesion_permisos([1])){

			var _tabla = new tablaJSON({
				"base": "periodo", 
				"columns": periodos_columns, 
				"arr" : periodos_arr, 	
				"tabla_orden" : [ 2, "asc" ],
			});
			_tabla.init();
			
			$('#table_data').off('click', '.a_carga');
			$('#table_data').off('click', '.a_revision');
			
			$('#table_data').on('click', '.a_carga', function (evt) {
				var id = parseInt($(this).attr("data-id"), 10);
				var txt = $(this).attr("data-txt");
				lightbox_abrir('<h1>Recordatorio de captura</h1>¿Estas seguro de enviar un <b>recordatorio de CAPTURA</b> a todos los <b>ACTORES</b> para el periodo: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b>', {
					"aceptar" : {
						"txt": "Enviar",
						"fn": function(){
							periodos_recordatorios(id, txt, 'captura');
						}
					},
					"cancelar" : {
						"txt": "Cerrar",
						"fn": null
					} 
				}, {});
				return false;
			});
			$('#table_data').on('click', '.a_revision', function (evt) {
				var id = parseInt($(this).attr("data-id"), 10);
				var txt = $(this).attr("data-txt");
				lightbox_abrir('<h1>Recordatorio de revisión</h1>¿Estas seguro de enviar un <b>recordatorio de REVISIÓN</b> a todas las <b>INSTITUCIONES COORDINADORAS</b> para el periodo: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b>', {
					"aceptar" : {
						"txt": "Enviar",
						"fn": function(){
							periodos_recordatorios(id, txt, 'revision');
						}
					},
					"cancelar" : {
						"txt": "Cerrar",
						"fn": null
					} 
				}, {});
				return false;
				return false;
			});

		} else {
			window.location.href = $('#a_panel').attr('href');
		}
	}
	sesion_verificar_no = function(){
		
	}
}
function periodos_load(){
	periodos_resize();
}
function periodos_resize(){
	
}

function periodos_recordatorios(ident, txt, tipo){
	
	var data = new FormData();
	data.append("token", ""); 
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	
	data.append("ident", ident); 
	data.append("txt", txt); 
	data.append("tipo", tipo); 

	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/recordatorios.php", 
		{
			"ok" : function(respuesta){
				lightbox_abrir(
					'<div class="align-center big margin-yb"><b>Enviando recordatorios de ' + tipo + '</b></div><p>Recordatorios enviados: <b><span class="num" id="txt_num">' + "0" + '</span> de <span class="total">' + Object.keys(respuesta.correos).length + '</span></b>.</p><p>Exito: <b id="txt_exito">0</b><br /> Error: <b id="txt_error">0</b><br /></p> <div id="txt_enviando">.</div> <div id="txt_info">Espere a que el proceso termine.<br> <b>Nota: Este proceso puede tardar un tiempo</b>.</div>', 
					{},
					{
						"ele": "#lightbox_caja_enviar",
						"size": "grande"
					}
				);
				
				periodos_dots = window.setInterval(function() {
					var wait = document.getElementById("txt_enviando");
					if ( wait.innerHTML.length > 15 ){
						wait.innerHTML = ".";
					} else {
						wait.innerHTML += ".";
					}
				}, 500);
				
				
				periodos_correos = new Array();
				for(var i in respuesta.correos){
					periodos_correos.push({
						"correo" : respuesta.correos[i].correo,
						"nombre" : respuesta.correos[i].nombre,
						"detalle" : respuesta.correos[i].detalle,
					});	
				}
				periodos_recordatorios_enviar_correo(ident, txt, tipo, 0);	
			}, 
		},
		{}
	);
}


function periodos_recordatorios_enviar_correo(ident, txt, tipo, pos){
	
	if(pos < periodos_correos.length){ 	
		var data = new FormData();
		data.append("token", ""); 
		if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
			data.append("id", sesion_data["id"]); 
			data.append("token", sesion_data["token"]); 
			data.append("dispositivo", sesion_data["dispositivo"]); 
			data.append("perfil", sesion_data["perfil"]);
		} else {
			data.append("token", ""); 
		}
		
		data.append("ident", ident); 
		data.append("txt", txt); 
		data.append("tipo", tipo); 	
		data.append("correo",  periodos_correos[pos]["correo"]); 	
		data.append("nombre", periodos_correos[pos]["nombre"]); 	
		data.append("detalle", periodos_correos[pos]["detalle"]); 	
		
		ajax_enviar(
			data, 
			url_sitio + "ajax/sitio/recordatorios_enviar.php", 
			{
				"ok" : function(respuesta){
					
					
					$("#lightbox_caja_enviar #txt_num").text((parseInt($("#lightbox_caja_enviar #txt_num").text(), 10) + 1));
					
					switch(parseInt(respuesta.exito, 10)){
						case 1:
							$("#lightbox_caja_enviar #txt_exito").text((parseInt($("#lightbox_caja_enviar #txt_exito").text(), 10) + 1));
							break;
						default:
							$("#lightbox_caja_enviar #txt_error").text((parseInt($("#lightbox_caja_enviar #txt_error").text(), 10) + 1));
							break;
					}
					pos++;
					if(pos < periodos_correos.length){ 	
						setTimeout(function(){ 
							periodos_recordatorios_enviar_correo(ident, txt, tipo, pos);
						}, 5000);	
					} else {
						periodos_recordatorios_enviar_termino();
					}
				}, 
			},
			{
				"ligthbox" : false,	
			}
		);
	} else {
		periodos_recordatorios_enviar_termino();
	}
}

function periodos_recordatorios_enviar_termino(){
	$('#lightbox_caja_enviar #txt_info').hide();
	$('#lightbox_caja_enviar #txt_enviando').hide();
	if(periodos_dots != null){ 
		clearInterval(periodos_dots);
		periodos_dots = null;
	}
	
	$('#lightbox_caja_enviar .boton.aceptar').show();
	$('#lightbox_caja_enviar .boton.aceptar').parent().show();
	$('#lightbox_caja_enviar .boton.aceptar').val("Cerrar");
	$('#lightbox_caja_enviar .boton.aceptar').unbind('click').bind('click', function(){
		
		$("#lightbox_caja_enviar").removeClass("activo");
		
		$('#lightbox_caja_enviar .boton').each(function(index, element) {
		   $(this).hide();
		   $(this).unbind("click");
		});
		
	});	
	$('#lightbox_caja_enviar .botones').show();
	$('#lightbox_caja_enviar .botones .col').removeClass('col2'); 
	
}