function revision_generales_estatus(aprobo){
	var aprobo_txt = "";
	var aprobo_color = "gray";
	switch(aprobo){
		case "1":
			aprobo_txt = '<b style="color:green;">Aprobado</b>';
			aprobo_color = "springgreen";
			break;
		case "2":
			aprobo_txt = '<b style="color:red;">Rechazado</b>';
			aprobo_color = "red";
			break;
		case "3":
			aprobo_txt = '<b style="color:blue;">Enviado a revisión</b>';
			aprobo_color = "blue";
			break;
	}
	return {
		"aprobo": aprobo,
		"aprobo_txt": aprobo_txt,
		"color": aprobo_color
	}
}

function revision_generales_notificar(valores){
	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	for(x in valores){ 
		var valor = valores[x];
		data.append(x, valor); 
	}
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/revision_notificar.php", 
		{
			"ok" : function(respuesta){
				event_google_analytics('revision_generales_notificar', 'servicio', 'ok');
				
				var html = '<div align="center"><b>Se envió la notificación correctamente</b></div>';
				lightbox_abrir(
					html, 
					{
						"aceptar" : {
							"txt": "Ok",
							"fn": null
						}	
					}, 
					{}
				);
				
			}, 
		},
		{}
	);	
}