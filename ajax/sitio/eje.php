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
	
	require_once "../../lib/model/TablaJSON.php";
		
	$ejeClass = new TablaJSON('eje');
	$ideje = NULL;
	if(isset($_POST['ideje'])){ $ideje = intval($_POST['ideje']); }
	
	$vars = array(
		'eje' => array("leyenda" => "Eje", "tipo" => "texto", "nulo" => 1),
		'action' => array("leyenda" => "Acción", "tipo" => "texto", "nulo" => 0),
	);		
	
	$default = array(
		'creo' => $usuario['idusuario'],
		'modifico' => array(
		
		),
		'fecha' => date('Y-m-d H:i:s'),
		'modificacion' => NULL,
		'activo' => true,
	);
	$error_post = 0;
	$eje_post = array();
	foreach($vars as $key => $var){ 
		if(isset($_POST[$key])){ $eje_post[$key] = $_POST[$key]; }
		else { $error_post = 1; }
	}
	if ($error_post == 0) {
		$eje_data = array();
		$error = array();
		foreach($vars as $key => $var){ 
			$ok = false;
			$info = '';
			if(isset($eje_post[$key])){ 
				$validacion = validarData($eje_post[$key], $var);
				if($validacion["ok"]){ 
					$ok = true; 
					$eje_data[$key] = $validacion["valor"];
				} else { $info = $validacion["info"]; }
			} else { $info = 'No se recibió el dato.'; }
			if(!$ok){ $error[$key] = $info; }
		}
		if(empty($error)){
			if($eje_data['action'] == 'get'){
				//obtener
				if($ideje != NULL){
					$eje = $ejeClass->getTablaJSONID($ideje, '');
					if(is_array($eje) and !empty($eje)){
						$eje['eje_data'] = json_decode($eje['eje_data'], true);
						$arreglos['eje'] = $eje;
						$arreglos['ok'] = 1;
					} else {
						$arreglos['ok'] = $eje;		
					}
				} else {
					$arreglos['ok'] = -1;			
				}
			} else if($eje_data['action'] == 'del'){
				//borrar
				if($ideje != NULL){
					$eje = $ejeClass->getTablaJSONID($ideje, '');
					if(is_array($eje) and !empty($eje)){
						$arreglos['ok'] = $ejeClass->deleteTablaJSON($ideje);
					} else {
						$arreglos['ok'] = $eje;		
					}						
				} else {
					$arreglos['ok'] = -1;			
				}
			} else if($eje_data['action'] == 'all'){
				//todo
				$sql_ad = "";
				$ejes = $ejeClass->getTablaJSONs('');
				foreach($ejes as $key => $eje){
					$ejes[$key]['eje_data'] = json_decode($eje['eje_data'], true);
				}
				$arreglos['ejes'] = $ejes;	
				$arreglos['ok'] = 1;	
				
			} else if($eje_data['action'] == 'datatable'){
				//datatable
				
				$sql_ad = '';
				$columnas = array(
					'eje',
					'fecha',
					'modificacion',
				);
				
				## Read value
				$draw = $_POST['draw'];
				$row = $_POST['start'];
				$rowperpage = $_POST['length']; // Rows display per page
				$columnIndex = $_POST['order'][0]['column']; // Column index
				$columnName = $columnas[$columnIndex]; // Column name
				$columnSortOrder = $_POST['order'][0]['dir']; // asc or desc
				$searchValue = $_POST['search']['value']; // Search value
				
				## Search 
				$searchQuery = " ";
				if($searchValue != ''){
					$searchQuery = "
						AND (
							JSON_UNQUOTE(JSON_EXTRACT(eje_data, '$.eje')) like '%".$searchValue."%'
						)
					";
				}
				
				## Total number of records without filtering
				$todos = $ejeClass->getTablaJSONTotal($sql_ad);
				$totalRecords = $todos['total'];
				
				## Total number of record with filtering
				$todos_filtro = $ejeClass->getTablaJSONTotalFiltro($searchQuery, $sql_ad);
				$totalRecordwithFilter = $todos_filtro['total'];		
				
				## Fetch records
				$ejes = $ejeClass->getTablaJSONDataTable($searchQuery, $columnName, $columnSortOrder, $row, $rowperpage, $sql_ad);
				
				$data = array();
				foreach($ejes as $key => $eje){
					$a_link = '';
					$a_link .= '<a href="#" data-id="'.$eje['ideje'].'" class="a_editar">Editar</a> | ';
					$a_link .= '<a href="#" data-id="'.$eje['ideje'].'" class="a_eliminar">Eliminar</a>';
					
					$text = '';
					
					$data[] = array( 
						"eje" => $eje['eje'],
						"fecha" => $eje['fecha'],
						"modificacion" => $eje['modificacion'],
						"acciones" => $a_link
					);	
				}
				
				## Response
				$response = array(
					"draw" => intval($draw),
					"iTotalRecords" => $totalRecordwithFilter,
					"iTotalDisplayRecords" => $totalRecords,
					"aaData" => utf8_converter($data),
					"ok" => 1
				);
				echo json_encode($response);
				exit;
				
			} else {
				//insertar / editar
				if($ideje != NULL){
					$eje = $ejeClass->getTablaJSONID($ideje, '');
					if(is_array($eje) and !empty($eje)){ 
						
						$temp = json_decode($eje['eje_data'], true);
						if (json_last_error() === JSON_ERROR_NONE) { }
						else { $temp = array(); }
						
						foreach($default as $llave => $var){ 
							if(isset($temp[$llave])){ $eje_data[$llave] = $temp[$llave]; }
							else { $eje_data[$llave] = $var; }
						}
						
						$eje_data['modifico'][] = array( 
							'usuario' => $usuario['idusuario'], 
							'fecha' => date('Y-m-d H:i:s')
						);
						$eje_data['modificacion'] = date('Y-m-d H:i:s');
							
						$resultado = $ejeClass->updateTablaJSON($ideje, $eje_data['eje'], json_encode($eje_data));
						if($resultado >= 0){ 
							$arreglos['msj'] = $resultado;
							$resultado = $eje['ideje']; 
						} 
					}
				} else {
					foreach($default as $key => $valor){ $eje_data[$key] = $valor; }
					$resultado = $ejeClass->insertTablaJSON($eje_data['eje'], json_encode($eje_data));
				}
				
				if($resultado > 0){		
					$arreglos['ok'] = 1;
				} else {
					$arreglos['ok'] = $resultado;
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
