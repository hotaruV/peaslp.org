<?php
define('APPLICATION', true);
require_once "../../lib/class/Validar.php";
require_once "../../lib/class/Util.php";
require_once "../../lib/class/ConectarDB.php";
require_once "../../lib/class/Contacto.php";
require_once "../../lib/phpmailer/class.phpmailer.php";
require_once "../../lib/phpmailer/class.smtp.php";

require_once "../../part/config.php";
require_once "../../part/gnl/variables.php";
require_once "../../part/gnl/idioma.php";

$idioma = "es";
$url_lang = "";

require_once "../../lib/model/Usuario.php";
require_once "../../lib/model/UsuarioDatos.php";
require_once "../../lib/model/UsuarioDispositivo.php";
require_once "../../lib/model/UsuarioDispositivoAcceso.php";
require_once "../../lib/model/UsuarioIngreso.php";

$usuarioClass = new Usuario();
$usuarioDatosClass = new UsuarioDatos();
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
	isset($_POST['token'])
){
		require_once "../../lib/model/Curso.php";
		require_once "../../lib/model/CursoContenido.php";
		require_once "../../lib/model/CursoUsuario.php";
		
		$cursoClass = new Curso();
		$cursoContenidoClass = new CursoContenido();
		$cursoUsuarioClass = new CursoUsuario();
	
		$vars = array(
			'idcurso' => array("leyenda" => "Curso", "tipo" => "entero", "nulo" => 0),
		);
		
		$error_post = 0;
		$panel_indice_post = array();
		foreach($vars as $key => $var){ 
			if(isset($_POST[$key])){ $panel_indice_post[$key] = $_POST[$key]; }
			else { $error_post = 1; }
		}
		if ($error_post == 0) {
			$panel_indice_data = array();
			$error = array();
			foreach($vars as $key => $var){ 
				$ok = false;
				$info = '';
				if(isset($panel_indice_post[$key])){ 
					$validacion = validarData($panel_indice_post[$key], $var);
					if($validacion["ok"]){ 
						$ok = true; 
						$panel_indice_data[$key] = $validacion["valor"];
					} else { $info = $validacion["info"]; }
				} else { $info = 'No se recibió el dato.'; }
				if(!$ok){ $error[$key] = $info; }
			}
			if(empty($error)){
				
				$indice = $cursoContenidoClass->getCursoContenidosByCurso($panel_indice_post['idcurso'], " AND tipo = 1 ");
				foreach($indice as $key => $item){
					$indice[$key]['data'] = json_decode($indice[$key]['curso_contenido_data'], true); 
					$indice[$key]['hijos'] = NULL;
					$hijos = array();
					
					$hijos = $cursoContenidoClass->getCursoContenidosByCurso($panel_indice_post['idcurso'], " AND 
						tipo = 2 AND  
						REGEXP_REPLACE(JSON_UNQUOTE(JSON_EXTRACT(curso_contenido_data, '$.orden')), '\.[^.]*$', '') = ".$indice[$key]['data']['orden']."
						
					");
					
					if(is_array($hijos) and !empty($hijos)){
						foreach($hijos as $llave => $ele){
							$hijos[$llave]['data'] = json_decode($hijos[$llave]['curso_contenido_data'], true); 
						}
						$indice[$key]['hijos'] = $hijos;
					}
				}
				
				
				
				$arreglos['indice'] = $indice;
				$arreglos['ok'] = 1;
 
			} else {
				$arreglos['ok'] = -7; 
				$arreglos['error'] = $error; 
			}	
		} else { $arreglos['ok'] = -3; $arreglos['paso'] = 1; }
	//} 
} else { $arreglos['ok'] = -3; $arreglos['paso'] = 2; }
$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);
?>
