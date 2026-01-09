<?php 
define('APPLICATION', true);
require_once "../../lib/class/Validar.php";
require_once "../../lib/class/Util.php";
require_once "../../lib/class/ConectarDB.php";

require_once "../../part/config.php";
require_once "../../part/gnl/variables.php";
require_once "../../part/gnl/idioma.php";

$idioma = "es";
$url_lang = "";

header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');
$arreglos = array();
if(
	isset($_POST) and
	isset($_POST['id']) and
	isset($_POST['token']) and
	isset($_POST['dispositivo']) and
	isset($_POST['perfil']) 
){
	require_once "../../lib/model/Usuario.php";
	require_once "../../lib/model/UsuarioDatos.php";
	require_once "../../lib/model/UsuarioDispositivo.php";
	require_once "../../lib/model/UsuarioDispositivoAcceso.php";
	
	require_once "../../lib/model/TablaJSON.php";
	
	$usuarioClass = new Usuario();
	$usuarioDatosClass = new UsuarioDatos();
	$usuarioDispositivoClass = new UsuarioDispositivo();
	$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();
		
	$idusuario = intval($_POST['id']);
	$salt = strip_tags($_POST['token']);
	$dispositivo = strip_tags($_POST['dispositivo']);
	$perfil = strip_tags($_POST['perfil']);
	
	$usuario = $usuarioClass->loginToken($idusuario, $salt, $perfil);
	if(is_array($usuario) and !empty($usuario)){
		$arreglos['oku'] = 1;
		
		/*
			$navegador = '';
			if(isset($_SERVER) and isset($_SERVER['HTTP_USER_AGENT']) and $_SERVER['HTTP_USER_AGENT'] != ""){ $navegador = $_SERVER['HTTP_USER_AGENT']; }
			$navegador = hash('sha512', $navegador);
		*/
		
		$navegador = (isset($_COOKIE[$usuarioDispositivoAccesoClass->cookie]))?$_COOKIE[$usuarioDispositivoAccesoClass->cookie]:'';
		
		$resultado = $usuarioDispositivoClass->getUsuarioDispositivo($usuario['idusuario'], $navegador, $dispositivo);
		if(is_array($resultado) and !empty($resultado)){
			
			$usuario['usuario_data'] = json_decode($usuario['usuario_data'], true);
			
			$txt_perfil = "";
			switch(intval($usuario['perfil'])){
				case 1:
					//Admin
					
					break;
				case 4:
					//Actor
					$txt_perfil = "";	
					if(isset($usuario['usuario_data']["actor"])){
						$actorClass = new TablaJSON("actor");
						$actor = $actorClass->getTablaJSONID($usuario['usuario_data']["actor"]);
						if(is_array($actor) and !empty($actor)){
							$actor['actor_data'] = json_decode($actor['actor_data'], true);
							$txt_perfil = $actor['actor_data']['actor'];
							if(trim($actor['actor_data']['actor']) != trim($actor['actor_data']['siglas'])){
								$txt_perfil .= " (".$actor['actor_data']['siglas'].")";
							}
							if($usuario['usuario_data']["actor_municipio"] != ""){
								$municipios = json_decode($actorClass->municipios, true);
								foreach($municipios as $llave => $municipio){
									if($municipio["id"] == $usuario['usuario_data']["actor_municipio"]){
										$txt_perfil .= " - ".$municipio["municipio"];
										break;	
									}
								}
							}
							
							if(isset($usuario['usuario_data']["actor_catalogo"]) and  $usuario['usuario_data']["actor_catalogo"] != ""){
								if(isset($usuario['usuario_data']["actor_elemento"]) and  $usuario['usuario_data']["actor_elemento"] != ""){
									$elementoClass = new TablaJSON("elemento");
									$elemento = $elementoClass->getTablaJSONID($usuario['usuario_data']["actor_elemento"]);
									if(is_array($elemento) and !empty($elemento)){
										$elemento['elemento_data'] = json_decode($elemento['elemento_data'], true);
										$txt_perfil .= " - ".$elemento['elemento_data']['elemento'];
									}
								}
							}
						}
					}
					break;
				case 5:
					//Institución
					$txt_perfil = "";		
					if(isset($usuario['usuario_data']["institucion"])){
						$institucionClass = new TablaJSON("institucion");
						$institucion = $institucionClass->getTablaJSONID($usuario['usuario_data']["institucion"]);
						if(is_array($institucion) and !empty($institucion)){
							$institucion['institucion_data'] = json_decode($institucion['institucion_data'], true);
							$txt_perfil = $institucion['institucion_data']['institucion'];
							if(trim($institucion['institucion_data']['institucion']) != trim($institucion['institucion_data']['siglas'])){
								$txt_perfil .= " (".$institucion['institucion_data']['siglas'].")";
							}
							if($usuario['usuario_data']["institucion_municipio"] != ""){
								$municipios = json_decode($institucionClass->municipios, true);
								foreach($municipios as $llave => $municipio){
									if($municipio["id"] == $usuario['usuario_data']["institucion_municipio"]){
										$txt_perfil .= " - ".$municipio["municipio"];
										break;	
									}
								}
							}
						}
					}
					break;
					
			}
			/*
			$usuario['usuario_data']["actor"];
			
			
			*/
			
			$arreglos['ok'] = 1;
			$arreglos['oku'] = 2;
			
			$arreglos['id'] = $usuario['idusuario'];
			$arreglos['perfil'] = $usuario['perfil'];
			$arreglos['perfil_txt'] = $usuario['perfil_txt'];
			$arreglos['salt'] = $usuario['salt'];
			
			$arreglos['token'] = "";
			
			$arreglos['dispositivo'] = $dispositivo;
			$arreglos['txt_perfil'] = $txt_perfil;
			
			$idusuario = $usuario['idusuario'];
			//$arreglos['usuario']['usuario_datos'] = usuarioDatosBasicos($arreglos['usuario']['usuario_datos']);
			
		} else { $arreglos['ok'] = -2; $arreglos['paso'] = 3; }
	} else { $arreglos['ok'] = -2; $arreglos['paso'] = 2; }
} else { $arreglos['ok'] = -2; $arreglos['paso'] = 1; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>