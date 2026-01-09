<?php 
define('APPLICATION', true);
require_once "../../lib/class/Validar.php";
require_once "../../lib/class/Util.php";
require_once "../../lib/class/ConectarDB.php";

require_once "../../part/config.php";
require_once "../../part/paginas.php";
require_once "../../part/gnl/variables.php";
require_once "../../part/gnl/idioma.php";

$idioma = "es";
$url_lang = "";

require_once "../../lib/model/Usuario.php";
require_once "../../lib/model/UsuarioDispositivo.php";
require_once "../../lib/model/UsuarioDispositivoAcceso.php";
require_once "../../lib/model/UsuarioIngreso.php";

$usuarioClass = new Usuario();
$usuarioDispositivoClass = new UsuarioDispositivo();
$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();
$usuarioIngresoClass = new UsuarioIngreso();

require_once "../../part/gnl/login/verificar_login_ajax.php"; 
require_once "../../part/gnl/login/verificar_login_ingreso.php";
require_once "../../part/gnl/login/verificar_login_ajax_sesion.php";

header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');
$arreglos = array();

if(
	isset($_POST) and
	isset($_POST['token']) and
	isset($_POST['base']) and
	isset($_POST['action']) and
	isset($_POST['name']) and
	isset($_POST['index']) and
	isset($_POST['key'])
){
	require_once "../../lib/class/class.upload.php";
	require_once "../../lib/model/TablaJSON.php";
	
	$vars = array(
		'base' => array("leyenda" => "Base", "tipo" => "texto", "nulo" => 0),
		'action' => array("leyenda" => "Acción", "tipo" => "texto", "nulo" => 0),
		'name' => array("leyenda" => "Nombre del archivo", "tipo" => "texto", "nulo" => 0),
		'index' => array("leyenda" => "Acción", "tipo" => "", "nulo" => 0),
		'key' => array("leyenda" => "Llave", "tipo" => "texto", "nulo" => 0),
	);		
	
	if(isset($_POST['base']) and isset($_POST['action'])){
		if(in_array(trim($_POST['action']), array('upload'))){
			switch(trim($_POST['base'])){
				/*
				case "slide": 
					$place_arr = array(
						'folder' => 'slide',
						'keys' => array(
							'landscape' => 'landscape', 
							'portrait' => 'portrait'
						),
						'size' => array()
					);
					break;
				*/
			}
		}
	}
	
	$error_post = 0;
	$tabla_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $tabla_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	if ($error_post == 0) {
		$tabla_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($tabla_post[$key])){ 
				$validacion = validarData($tabla_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$tabla_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			$file_src = NULL;
			$file_name = NULL;
			
			$idTablaJSON = NULL;
			if(isset($_POST['id'.$tabla_data['base']])){ 
				$idTablaJSON = intval($_POST['id'.$tabla_data['base']]); 
			}
			
			if(in_array($tabla_data['key'], $place_arr['keys']) and $idTablaJSON != NULL) {
				$handle = new Upload($_FILES['file']);
				if ($handle->uploaded) {
					$file_name = $handle->file_src_name;
					$handle->file_new_name_body = 'f_'.$idTablaJSON."_".$place_arr['keys'][$tabla_data['key']]."_".$tabla_data['index']."_".rand(0, 1000);
					$handle->Process("../../files/".$place_arr['folder']);
					
					if ($handle->processed) { 
						$file_src = $handle->file_dst_name;
						$file_name_body = $handle->file_dst_name_body;
						$arreglos['file'] = 1; 
				
						if(
							is_array($place_arr['size']) and 
							isset($place_arr['size'][$tabla_data['key']]) and 
							is_array($place_arr['size'][$tabla_data['key']]) and 
							!empty($place_arr['size'][$tabla_data['key']])
						){
							foreach($place_arr['size'][$tabla_data['key']] as $size => $tamano){
								$handle->image_ratio = true;
								$handle->image_resize = true;
								$handle->image_convert = 'jpg';
								$handle->jpeg_quality = 92;
								$handle->image_x = $tamano['x'];
								$handle->image_y = $tamano['y'];
		
								$handle->file_new_name_body = $file_name_body."_".$size;
								$handle->Process("../../files/".$place_arr['folder']);
							}
						}	
					} 
					else { $arreglos['file'] = 0; }
				} else { $arreglos['file'] = 0; }
			}
		
			if($arreglos['file'] == 1){
				$resultado = 0;

				$tablaJSONClass = new TablaJSON($tabla_data['base']);
				
				if($idTablaJSON != NULL){
					$obj = $tablaJSONClass->getTablaJSONID($idTablaJSON, '');
					if(is_array($obj) and !empty($obj)){
						$temp = json_decode($obj[$tabla_data['base'].'_data'], true);
						
						if($temp[$tabla_data['key']]["v"][$tabla_data['index']] == $file_name){
							$temp[$tabla_data['key']]["l"][$tabla_data['index']] = $file_src;
						}
						
						$resultado = $tablaJSONClass->updateTablaJSON($idTablaJSON, $temp[$tabla_data['base']], json_encode($temp));
						if($resultado > 0){ 
							$arreglos['msj'] = $resultado;
							$arreglos['id'] = $obj['id'.$tabla_data['base']]; 
							$arreglos['ok'] = 1; 
						}
					} else {
						$arreglos['ok'] = $obj;		
					}
				} else {
					$arreglos['ok'] = -1;	
				}
			}
		} else {
			$arreglos['ok'] = -7; 
			$arreglos['error'] = $error; 
		}				
	} else { $arreglos['ok'] = -3; $arreglos['paso'] = 1; }
} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>