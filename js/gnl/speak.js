var speak_voice = [];
var speak_voice_current = 0;
var speak_synth = null;

function speak_voces(lang, callback){
	speak_voice_current = 0;
	speak_voice = [];
	
	var voice = [];	
	var voices_arr = ["es-MX", "es_US", "en-US"];

	for (var i = 0; i < voices_arr.length; i++) { 
		if(voices_arr[i].indexOf(lang) >= 0){ 
			voice.push(voices_arr[i]); 
		} 
	}
	
	if(window.speechSynthesis) {
		var iniciar = function(voices){
			for(var i = 0; i < voices.length; i++) { 
				for(var j = 0; j < voice.length; j++){
					if(voice[j] == voices[i].lang){  
						speak_voice.push(voices[i]); 
					}	
				} 
			}
			if(speak_voice.length > 0){
				console.log(' speak_voces -> ' + speak_voice ); 
			}
			if(callback != null && typeof callback === 'function'){  
				callback();
			}
		};
		var voices = window.speechSynthesis.getVoices();
		if (voices.length !== 0) {
			iniciar(voices);
		} else {
			window.speechSynthesis.addEventListener("voiceschanged", function() {
				voices = window.speechSynthesis.getVoices();
				iniciar(voices);
			});
		}
	} 
}

function speak_hablar(lang, ele, callback){
	console.log('speak_hablar'); 	

	var gender = null;
	
	if(speak_voice.length == 0){ speak_voces(lang); }
	if(speak_synth != null){ speak_synth.cancel(); }
	
	
	if(speak_voice.length > 0){
		
		console.log('speak_hablar -> ' + speak_voice[speak_voice_current].lang);
		
		gender = speak_voice[speak_voice_current].name

		speak_synth = window.speechSynthesis;
		utterance = new SpeechSynthesisUtterance();
		utterance.text = $(ele).text();
		utterance.lang = speak_voice[speak_voice_current].lang;
		utterance.rate = 1;
		utterance.voice =  speak_voice[speak_voice_current];

		

		speak_synth.speak(utterance);
		
		speak_voice_current++;
		if(speak_voice.length <= speak_voice_current){
			speak_voice_current = 0;
		}

		utterance.onboundary = function(event){
			if(callback != null && callback.hasOwnProperty('fnBoundary') && callback["fnBoundary"] != null  && typeof callback["fnBoundary"] === 'function'){  
				callback["fnBoundary"](event.charIndex);
			}
		}
		
		utterance.onstart = function(event) { 
			if(ele != null){ $(ele).addClass("speak_hablar"); } 
			if(callback != null && callback.hasOwnProperty('fnStart') && callback["fnStart"] != null  && typeof callback["fnStart"] === 'function'){  
				callback["fnStart"]();
			}
		}
		utterance.onresume = function(event) { 
			if(ele != null){ $(ele).addClass("speak_hablar"); } 
			if(callback != null && callback.hasOwnProperty('fnResume') && callback["fnResume"] != null  && typeof callback["fnResume"] === 'function'){  
				callback["fnResume"]();
			}
		}
		utterance.onend = function(event) { 
			if(ele != null){ $(ele).removeClass("speak_hablar"); } 
			if(callback != null && callback.hasOwnProperty('fnEnd') && callback["fnEnd"] != null  && typeof callback["fnEnd"] === 'function'){  
				callback["fnEnd"]();
			}
		}
		utterance.onerror = function(event) { 
			if(ele != null){ $(ele).removeClass("speak_hablar"); } 
			if(callback != null && callback.hasOwnProperty('fnError') && callback["fnError"] != null  && typeof callback["fnError"] === 'function'){  
				callback["fnError"]();
			}
		}
		utterance.onpause = function(event) { 
			if(ele != null){ $(ele).removeClass("speak_hablar"); } 
			if(callback != null && callback.hasOwnProperty('fnPause') && callback["fnPause"] != null  && typeof callback["fnPause"] === 'function'){  
				callback["fnPause"]();
			}
		}
	}

	return gender;
}

function speak_detener(){
	if(speak_synth != null){ speak_synth.cancel(); }
}
