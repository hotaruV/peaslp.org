<?php
if (!defined('APPLICATION')) exit;
/*
	$idactor debe estar definido antes de cargar este archivo
*/

$indicadorClass = new TablaJSON("indicador");
$lineaClass = new TablaJSON("linea");

$lineas = $lineaClass->getTablaJSONs(
	"
		AND activo = 1 
		AND JSON_CONTAINS(JSON_EXTRACT(linea_data, '$.actores.v[*].id'),'\"".$idactor."\"','$')
	",
	" CAST(JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.identificador')) AS CHAR) ASC ",
	", 
	(
		SELECT
			JSON_UNQUOTE(JSON_EXTRACT(eje_data, '$.eje')) 
		FROM
			eje
		WHERE
			ideje = JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.eje')) AND
			eliminado = 0
	) AS eje,
	(
		SELECT
			JSON_UNQUOTE(JSON_EXTRACT(eje_data, '$.color')) 
		FROM
			eje
		WHERE
			ideje = JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.eje')) AND
			eliminado = 0
	) AS color,
	(
		SELECT
			JSON_UNQUOTE(JSON_EXTRACT(prioridad_data, '$.prioridad')) 
		FROM
			prioridad
		WHERE
			idprioridad = JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.prioridad')) AND
			eliminado = 0
	) AS prioridad,
	(
		SELECT
			JSON_UNQUOTE(JSON_EXTRACT(plazo_data, '$.plazo')) 
		FROM
			plazo
		WHERE
			idplazo = (
				SELECT
					JSON_UNQUOTE(JSON_EXTRACT(prioridad_data, '$.plazo')) 
				FROM
					prioridad
				WHERE
					idprioridad = JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.prioridad')) AND
					eliminado = 0
			) AND
			eliminado = 0
	) AS plazo,
	(
		SELECT
			JSON_UNQUOTE(JSON_EXTRACT(prioridad_data, '$.plazo')) 
		FROM
			prioridad
		WHERE
			idprioridad = JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.prioridad')) AND
			eliminado = 0
	) AS idplazo,
	(
		SELECT
			JSON_UNQUOTE(JSON_EXTRACT(estrategia_data, '$.estrategia')) 
		FROM
			estrategia
		WHERE
			idestrategia = JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.estrategia')) AND
			eliminado = 0
	) AS estrategia,
	(
		SELECT
			JSON_UNQUOTE(JSON_EXTRACT(estrategia_data, '$.instituciones')) 
		FROM
			estrategia
		WHERE
			idestrategia = JSON_UNQUOTE(JSON_EXTRACT(linea_data, '$.estrategia')) AND
			eliminado = 0
	) AS instituciones
	"
);
$arbol_arr = array();
$ejes_arr = array();
$prioridades_arr = array();
$plazos_arr = array();
$estrategias_arr = array();
$idestrategia_arr = array();
$metas_al_arr = array();

$arreglos['encontro'] = 0;

foreach($lineas as $key => $linea){
	$lineas[$key]['linea_data'] = json_decode($lineas[$key]['linea_data'], true);
	$data = $lineas[$key]['linea_data'];
	
	$lineas[$key]["ideje"] = $data['eje'];
	
	if(
		isset($estrategias_filtro) and 
		$estrategias_filtro != NULL and 
		is_array($estrategias_filtro) and
		!empty($estrategias_filtro)
	){ 
		if (!in_array($data['estrategia'], $estrategias_filtro)) {
			unset($lineas[$key]);
			continue;
		} else {
			$arreglos['encontro']++;
		}
	}

	if(!isset($arbol_arr[$data['eje']])){
		$arbol_arr[$data['eje']] = array(
			"ideje" => $data['eje'],
			"eje" => $linea["eje"],
			"color" => $linea["color"],
			"prioridades" => array(
	
			)
		);
	}

	if(!isset($arbol_arr[$data['eje']]["prioridades"][$data['prioridad']])){
		$arbol_arr[$data['eje']]["prioridades"][$data['prioridad']] = array(
			"idprioridad" => $data['prioridad'],
			"prioridad" => $linea["prioridad"],
			"idplazo" => $linea["idplazo"],
			"plazo" => $linea["plazo"],
			"estrategias" => array(

			)
		);
	}
	if(!isset($arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["estrategias"][$data['estrategia']])){
		$arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["estrategias"][$data['estrategia']] = array(
			"idestrategia" => $data['estrategia'],
			"estrategia" => $linea["estrategia"],
			"instituciones" => json_decode($linea["instituciones"], true),
			"lineas" => array(

			),
			"indicadores" => array(

			)
		);
	}
	if(!isset($arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["estrategias"][$data['estrategia']]["lineas"][$linea['idlinea']])){
		$arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["estrategias"][$data['estrategia']]["lineas"][$linea['idlinea']] = array(
			"idlinea" => $linea['idlinea'],
			"linea" => $data["linea"],
			"actores" => $data["actores"],
			"anexo_ata" => ((isset($data["anexo_ata"]))?$data["anexo_ata"]:NULL),
		);
	}
	

	$ejes_arr[$lineas[$key]['linea_data']['eje']] = $linea["eje"];
	
	if($linea["plazo"] != NULL){
		$plazos_arr[$linea["idplazo"]] = $linea["plazo"];
	}
	//$prioridades_arr[$lineas[$key]['linea_data']['prioridad']] = $linea["prioridad"];
	//$estrategias_arr[$lineas[$key]['linea_data']['estrategia']] = $linea["estrategia"];
	$idestrategia_arr[$lineas[$key]['linea_data']['estrategia']] = $lineas[$key]['linea_data']['estrategia'];
}


$arreglos['lineas'] = $lineas;
$arreglos['ejes'] = $ejes_arr;
$arreglos['plazos'] = $plazos_arr;
//$arreglos['prioridades'] = $prioridades_arr;
//$arreglos['estrategias'] = $estrategias_arr;

$indicadores = $indicadorClass->getTablaJSONs(
	"
		AND activo = 1 
		AND FIND_IN_SET(JSON_UNQUOTE(JSON_EXTRACT(indicador_data, '$.estrategia')), '".implode(",", $idestrategia_arr)."')
	",
	" 
	
	(
		SELECT
			JSON_UNQUOTE(JSON_EXTRACT(estrategia_data, '$.identificador')) 
		FROM
			estrategia
		WHERE
			idestrategia = JSON_UNQUOTE(JSON_EXTRACT(indicador_data, '$.estrategia')) AND
			eliminado = 0
	)  ASC
	
	"
);

foreach($indicadores as $key => $indicador){
	$indicadores[$key]['indicador_data'] = json_decode($indicadores[$key]['indicador_data'], true);
	$data = $indicadores[$key]['indicador_data'];

	$indicadores[$key]["ideje"] = $data['eje'];
	$indicadores[$key]["eje"] = $arbol_arr[$data['eje']]["eje"];
	$indicadores[$key]["color"] = $arbol_arr[$data['eje']]["color"];
	$indicadores[$key]["prioridad"] = $arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["prioridad"];
	$indicadores[$key]["idplazo"] = $arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["idplazo"];
	$indicadores[$key]["plazo"] = $arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["plazo"];
	$indicadores[$key]["estrategia"] = $arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["estrategias"][$data['estrategia']]["estrategia"];
	$indicadores[$key]["instituciones"] = $arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["estrategias"][$data['estrategia']]["instituciones"];

	if(!isset($arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["estrategias"][$data['estrategia']]["indicadores"][$indicador['idindicador']])){
		$arbol_arr[$data['eje']]["prioridades"][$data['prioridad']]["estrategias"][$data['estrategia']]["indicadores"][$indicador['idindicador']] = array(
			"idindicador" => $indicador['idindicador'],
			"indicador" => $data["indicador"],
			"meta" => $data["meta"],
			"meta_al" => $data["meta_al"],
			"metodo" => $data["metodo"],
			"verificacion" => $data["verificacion"],
		);
	}

	$metas_al_arr[$data["meta_al"]] = $data["meta_al"];
}

$arreglos['indicadores'] = $indicadores;
$arreglos['metas_al'] = $metas_al_arr;
$arreglos['arbol'] = $arbol_arr;
?>