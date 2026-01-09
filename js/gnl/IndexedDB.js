var _iDB_config = {
	inicial: null,
	version: 1,
	database: 'database'
}

//constructor
function _indexedDB(config) {
	console.log('_indexedDB', config);
	this.estatus = 1;
	this.dbIn = null;
	this.inicial = (config.hasOwnProperty('inicial'))?config.inicial:null;
	this.version = (config.hasOwnProperty('version'))?config.version:1;
	this.database = (config.hasOwnProperty('database'))?config.database:'database';
}

_indexedDB.prototype.init = function(validar) {
	console.log('_indexedDB -> init', validar);
	
	if(validar){
		window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
		window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
		if (window.indexedDB) { } else {
			console.log('no _indexedDB -> init');
			if(this.inicial != null && typeof this.inicial === 'function'){ this.inicial(false); }	
			return false;
		}
	}
	
	var request = indexedDB.open(this.database, this.version);
	request.onerror = function(event) {
		console.log("indexedDB -> onerror");
	};
	request.onsuccess = function(event) {
		console.log("indexedDB -> onsuccess");
		_iDB.dbIn = request.result;
		_iDB.dbIn.onerror = function(event) { console.log("Database error: ",  event); };
		if(_iDB.inicial != null && typeof _iDB.inicial === 'function'){ 
			_iDB.inicial({ ok: _iDB.estatus}); 
		} 
	};	
	request.onupgradeneeded = function(event) {
		console.log("indexedDB -> onupgradeneeded");
		console.log("indexedDB -> onupgradeneeded -> old: " + event.oldVersion);
		console.log("indexedDB -> onupgradeneeded -> new: " + event.newVersion);
		_iDB.estatus = 0;
		_iDB.dbIn = event.target.result;
		var objectStore;
		if(event.oldVersion < 1 && _iDB.version >= 1){ 
			objectStore = _iDB.dbIn.createObjectStore("preferencia", {keyPath: "id"}); 
			objectStore = _iDB.dbIn.createObjectStore("avisos", {keyPath: "id", autoIncrement: true});
		}
		if(event.oldVersion != 0){
			var respuesta = { ok: 0, accion: 'reload',  msj: "<h1>Nueva actualización disponible</h1> Da clic en \"Recargar\" para contar con la versión más reciente." };
			if(_iDB.inicial != null && typeof _iDB.inicial === 'function'){ _iDB.inicial(respuesta); }
		}
	}
	
}

_indexedDB.prototype.addData = function(table, data, funcion) {
	console.log('_indexedDB -> addData');
	if(this.dbIn != null){
		console.log("_indexedDB -> addData -> db");
		var request = this.dbIn.transaction([table], "readwrite").objectStore(table).add(data);
		request.onsuccess = function(event) {
			console.log("_indexedDB -> addData -> db -> success -> " + event.target.result);
			if(funcion != null && typeof funcion === 'function'){ funcion({ok:true, id:event.target.result}); }
		};
		request.onerror = function(event) {
			console.log("_indexedDB -> addData -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion({ok:false, id:null}); }
		}
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion({ok:false, id:null}); }
	}
}

_indexedDB.prototype.updateData = function(table, data, funcion) {
	console.log('_indexedDB -> updateData');
	if(this.dbIn != null){
		console.log("_indexedDB -> updateData -> db");
		
		var request = this.dbIn.transaction([table], "readwrite").objectStore(table).put(data);
		request.onsuccess = function(event) {
			console.log("_indexedDB -> updateData -> db -> success -> " + event.target.result);
			if(funcion != null && typeof funcion === 'function'){ funcion({ok:true, id:event.target.result}); }
		};
		request.onerror = function(event) {
			console.log("_indexedDB -> updateData -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion({ok:false, id:null}); }
		}
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion({ok:false, id:null}); }
	}
}

_indexedDB.prototype.readData = function(table, id, funcion) {
	console.log('_indexedDB -> readData');
	if(this.dbIn != null){
		console.log("_indexedDB -> readData -> " + id);
		var request = this.dbIn.transaction([table], 'readonly').objectStore(table).get(id);
		request.onerror = function(event) {
			console.log("_indexedDB -> readData -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion(null); }
		};
		request.onsuccess = function(event) {
			console.log("_indexedDB -> readData -> db -> success");
			if(typeof(request.result) !== "undefined"){ 
				if(funcion != null && typeof funcion === 'function'){ funcion(request.result); } 
			} else {
				if(funcion != null && typeof funcion === 'function'){ funcion(null); } 
			}
		};
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion(null); }
	}
}

_indexedDB.prototype.readAll = function(table, funcion){
	console.log('_indexedDB -> readAll');
	data = [];
	if(this.dbIn != null){
		console.log("_indexedDB -> readAll -> db");
		var objectStore = this.dbIn.transaction([table], 'readonly').objectStore(table);
		objectStore.openCursor().onsuccess = function(event) {
			//console.log("_indexedDB -> readAll -> db -> success");
			var cursor = event.target.result;
			if (cursor) {
				data.push(cursor.value);
				cursor.continue();
			} else { 
				console.log("_indexedDB -> readAll -> db -> success -> finish");
				if(funcion != null && typeof funcion === 'function'){ funcion(data); }
			}
		};
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion(data); }
	}
}

_indexedDB.prototype.removeData = function(table, id, funcion) {
	console.log('_indexedDB -> removeData');
	if(this.dbIn != null){
		console.log("_indexedDB -> removeData -> db");
		var request = this.dbIn.transaction([table], "readwrite").objectStore(table).delete(id);
		request.onsuccess = function(event) {
			console.log("_indexedDB -> removeData -> db -> success");
			if(funcion != null && typeof funcion === 'function'){ funcion(true); }
		};
		request.onerror = function(event) {
			console.log("_indexedDB -> removeData -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion(false); }
		};
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion(false); }
	}
}

_indexedDB.prototype.removeAll = function(table, funcion) {
	console.log('_indexedDB -> removeAll');
	if(this.dbIn != null){
		console.log("_indexedDB -> removeAll -> db");
		var request = this.dbIn.transaction([table], "readwrite").objectStore(table).clear();
		request.onsuccess = function(event) {
			console.log("_indexedDB -> removeAll -> db -> success");
			if(funcion != null && typeof funcion === 'function'){ funcion(true); }
		};
		request.onerror = function(event) {
			console.log("_indexedDB -> removeAll -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion(false); }
		};
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion(false); }
	}
}