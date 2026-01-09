var mapa = null;
var mapa_markers = [];
var mapa_config = {
	"init" : false,
	"lastWacthID" : null,
	"accuracy" : null,
	"permiso" : false,
	"zoom" : 4,
	"latLng" : null,
	"geocodeFun" : null,
	"opciones": {
		"enableHighAccuracy" : true,
		"timeout" : 5000,
		"maximumAge" : 30000	
	}
}

function mapa_init(callback){
	mapa_leaflet(callback);
}

function mapa_finish(callback){
	
	mapa_markers_delete(mapa);
	mapa_watch_clear();
	mapa = null;
	
	if(callback != null  && typeof callback === 'function') { 
		callback(); 
	}
}

function mapa_leaflet(callback){
	$.ajax({
		url: url_sitio + 'js/ext/leaflet.js',
		dataType: "script",
		cache: true,
		success: function() {
			mapa_config["init"] = true;
			if(callback != null  && typeof callback === 'function') { 
				callback(); 
			}
		}
	});
}

function mapa_watch() {
	mapa_watch_clear();
	
    mapa_config["lastWacthID"] = window.navigator.geolocation.watchPosition(
		function(position){
			console.log('watchPosition -> ok', position);
			map_position(
				position.coords.latitude, 
				position.coords.longitude, 
				position.coords.accuracy
			);
		}, 
		function(err){
			console.log('watchPosition -> err', err);
			mapa_geo_err(err);
		}, mapa_config["opciones"]
	);
    return false;
}

function mapa_watch_clear() {
    if ( mapa_config["lastWacthID"] != null ){
		navigator.geolocation.clearWatch(mapa_config["lastWacthID"]);
		mapa_config["lastWacthID"] = null;
	}
    return false;
}

function mapa_geo_err(err) {
	var msj = null;
	if (err.code == err.PERMISSION_DENIED){
		msj = "El usuario no ha concedido los privilegios de geolocalización";
		setCookie("PERMISSION_DENIED", "1", 15);
	} else if (err.code == err.POSITION_UNAVAILABLE){
		msj = "Posicion no disponible. La señal es mejor en un área abierta.";
	} else if (err.code == err.TIMEOUT){
		msj = "Demasiado tiempo intentando obtener la localización. La señal es mejor en un área abierta.";
	} else if (err.code == err.UNKNOWN){
		msj = "Error desconocido";
	} else {
		msj = "Error insesperado";
	}
	console.log('watchPosition -> err -> msj', msj);
	return msj;	
}

function mapa_accuracy(map, accuracy, permitida, lat, lng){
	if(mapa_config["accuracy"] == null){
		mapa_config["accuracy"] = L.circle([lat, lng], {
			stroke: true,
			color: '#1bb6ff',
			opacity: 0.3,
			weight: 1,
	    fillColor: "#61a0bf",
	    fillOpacity: 0.2,
	    radius: Math.round(accuracy)
    }).addTo(map);
	} else {
		mapa_config["accuracy"].setRadius(Math.round(accuracy));
		mapa_config["accuracy"].setLatLng([lat, lng]);
	}
	if(accuracy <= permitida){	return true; } else { return false; };
}

function mapa_distance_points(p1, p2) {
	var R = 6378137; // Earth’s mean radius in meter
	var dLat = mapa_rad(p2.lat - p1.lat);
	var dLong = mapa_rad(p2.lng - p1.lng);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(mapa_rad(p1.lat)) * Math.cos(mapa_rad(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return Math.round(d); // returns the distance in meter
};

function mapa_rad(x) {
  return x * Math.PI / 180;
};

function mapa_distance_format(distance){
	if(distance != null){
		distance = parseFloat(distance / 1000);
		if( distance < 10){ distance = distance.toFixed(2) + " km"; }
		else { distance = distance.toFixed(0) + " km"; }
	} else { distance = "--"; }
	return distance;
}


function mapa_markers_add(location, functions, poner, atributos){
	var marker = null;
	var opciones = {
		
	};
	if(atributos != null){ 
		for (key in atributos) { 
			opciones[key] = atributos[key]; 
		} 
	}
	var marker = L.marker(location, opciones);
  	map.addLayer(marker);

	if(functions != null  && functions.hasOwnProperty('click') && typeof functions["click"] === 'function') { 
		marker.on('click', function(ev) {
			functions["click"](this);
		});
	}
	if(functions != null  && functions.hasOwnProperty('dragend') && typeof functions["dragend"] === 'function') { 
		marker.on('dragend', function(ev) {
			functions["dragend"](this);
		});
	}
	if(poner){ mapa_markers.push(marker); }
	return marker;
}

function mapa_markers_delete(){
	for (var i = 0; i < mapa_markers.length; i++) { mapa_markers[i].remove(); }
	mapa_markers = [];
}

function mapa_geolocalizar(callbacks, follow){
	console.log('mapa_geolocalizar');

	if (navigator.geolocation) {
		console.log('geolocation true');
		
    	navigator.geolocation.getCurrentPosition(
			function(position) {
				mapa_config["latLng"] = {	
					"lat" : position.coords.latitude, 
					"lng" : position.coords.longitude, 
					"accuracy" : position.coords.accuracy
				};
				mapa_config["permiso"] = true;
	
				map_position(
					position.coords.latitude, 
					position.coords.longitude, 
					position.coords.accuracy
				);
				
				if(callbacks != null  && callbacks.hasOwnProperty('ok') && typeof callbacks["ok"] === 'function') { 
					callbacks["ok"]({ 
						lat:position.coords.latitude, 
						lng:position.coords.longitude, 
						acc:position.coords.accuracy
					}); 
				}
				
				if(follow){ 
					mapa_watch(); 
				} else { 
					mapa_watch_clear(); 
				}
				
			}, function(err) {
				if(callbacks != null  && callbacks.hasOwnProperty('err') && typeof callbacks["err"] === 'function') { 
					callbacks["err"](err);
				}
			}
		);
  	} else {
		console.log('geolocation false');
		lightbox_abrir(
			"<h1>Advertencia</h1>No se han concedido los privilegios de geolocalización.", 
			{
				"aceptar" : {
					"txt": "Cerrar",
					"fn": function(){
						if(callbacks != null  && callbacks.hasOwnProperty('no') && typeof callbacks["no"] === 'function') { 
							callbacks["no"]();
						}
					}
				},
			}, 
			{}
		);
  	}
}

function map_position(latitude, longitude, exactitud) {
	mapa_config["latLng"] = {	
		"lat" : latitude, 
		"lng" : longitude, 
		"accuracy" : exactitud
	};	
	if(mapa_config["geocodeFun"] != null  && typeof mapa_config["geocodeFun"] === 'function') { 
		mapa_config["geocodeFun"](mapa_config["latLng"]); 
	}
}