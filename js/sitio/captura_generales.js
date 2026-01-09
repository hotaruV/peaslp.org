function captura_generales_estatus(cumplio, avance){
	var cumplio_txt = "";
	var cumplio_color = "gray";
	switch(cumplio){
		case "1":
			cumplio_txt = '<b style="color:red">No se ha iniciado</b>';
			cumplio_color = "red";
			avance = 0;
			break;
		case "2":
			cumplio_txt = '<b style="color:orange">En planeación</b>';
			cumplio_color = "orange";
			break;
		case "3":
			cumplio_txt = '<b style="color:blue">En proceso</b>';
			cumplio_color = "blue";
			break;
		case "4":
			cumplio_txt = '<b style="color:green">Finalizado</b>';
			cumplio_color = "springgreen";
			avance = 100;
			break;
	}
	return {
		"cumplio": cumplio,
		"cumplio_txt": cumplio_txt,
		"avance": avance,
		"color": cumplio_color,
	}
}


function caputra_generales_revision(valores){
	
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
		url_sitio + "ajax/sitio/captura_revision.php", 
		{
			"ok" : function(respuesta){
				event_google_analytics('caputra_generales_revision', 'servicio', 'ok');
				
				var html = '<div align="center"><b>Se envió la solicitud de revisión correctamente</b></div>';
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