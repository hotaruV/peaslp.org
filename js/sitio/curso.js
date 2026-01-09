function curso_ready(callback){
	sesion_verificar_ini = function(){	
		if(callback != null && typeof callback === 'function') { 
			callback();
		}
	}
	
	sesion_verificar_no = function(){
		if(callback != null && typeof callback === 'function') { 
			callback();
		}
	}
	curso_init();
	
}
function curso_load(){
	curso_resize();
}
function curso_resize(){
	console.log('curso_resize')
}

function curso_init(){
	$('.btn_inscribirse').each(function(index, element) {
        $(this).unbind('click').bind('click', function(){
			
			var contacto = 'de este <a href="' + $("#tit_curso").attr("data-contacto") + '">formulario</a>';
			if($('#tit_correo').length > 0){ contacto = 'del siguiente correo electrónico: <a href="mailto:' + $('#tit_correo').text() + '">' + $('#tit_correo').text() + '</a>'; }
			
			var html = '<p>Al finalizar el curso si tienes una calificación aprobatoria obtendrás una constancia de participación.</p><p>Para mayor información puedes ponerte en contacto a través ' + contacto + '</p>';
			var botones = {};
			var config = {};
			
			if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
				botones = {					
					"aceptar" : {
						"txt": "Inscribirse",
						"fn": function(){
							curso_inscribirse($('#tit_curso').attr('data-id'));
						}
					},
					"cancelar" : {
						"txt": "Cerrar",
						"fn": null
					} 
				};
				config = {
					"size" : "grande",	
				};
			} else {
				html += 'Para continuar con su inscripción al curso en línea es indispensable que se encuentre <a href="' + $('#tit_curso').attr('data-registro') + '">registrado</a> en la plataforma, si usted ya se registró, por favor <a href="' + $('#tit_curso').attr('data-iniciar') + '">inicie sesión</a> con el usuario y contraseña proporcionados al momento de su registro.';
				botones = {
					"aceptar" : {
						"txt": "Iniciar sesión",
						"fn": function(){
							window.location.href = $('#tit_curso').attr('data-iniciar');
						}
					},
					"cancelar" : {
						"txt": "Registrarse",
						"fn": function(){
							window.location.href = $('#tit_curso').attr('data-registro');
						}
					} 
				};	
				config = {
					"size" : "grande",	
					"close_btn" : true,
				};
			}
			
			lightbox_abrir('<h1>Inscribirse a ' + $("#tit_curso").text() + '</h1>' + html , botones, config);
			return false;
		});
    }); 
}

function curso_inscribirse(idcurso){
	var data = new FormData();
	data.append("id", sesion_data["id"]); 
	data.append("token", sesion_data["token"]); 
	data.append("dispositivo", sesion_data["dispositivo"]); 
	data.append("perfil", sesion_data["perfil"]);
	data.append("idcurso", idcurso); 
	

	var funcion = function(respuesta){		
		event_google_analytics('curso', 'inscribirse', 'ok');
		var html = '<h1>¡Felicidades!</h1>Usted ha sido inscrito al curso: <b>' + $("#tit_curso").text() + '</b>.';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Iniciar curso",
					"fn": function(){ 
						window.location.href = $('#tit_curso').attr('data-action');
					}
				}	
			}, 
			{}
		);		
	};
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/inscribirse.php", 
		{
			"ok" : funcion, 
			"err": function(data){
				if(data != null && data.hasOwnProperty('ok') && data['ok'] == 'CI0'){
					var html = '<h1>Mensaje:</h1>Usted ya está inscrito en el curso: <b>' + $("#tit_curso").text() + '</b>.';
					lightbox_abrir(
						html, 
						{
							"aceptar" : {
								"txt": "Continuar con el curso",
								"fn": function(){ 
									window.location.href = $('#tit_curso').attr('data-action');
								}
							}	
						}, 
						{
							"close_btn" : true,	
						}
					);
				}	
			}
		},
		{
			"timeout" : 60000
		}
	);
}