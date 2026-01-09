<?php
if($usuario_logeado){
	
	$idusuario = NULL;
	if(isset($usuario['idusuario'])){ $idusuario = $usuario['idusuario']; }
	else {
		$usuario_dispositivo = $usuarioDispositivoClass->getUsuarioDispositivoNavegador($navegador_id, $navegador);
		if(is_array($usuario_dispositivo) and !empty($usuario_dispositivo))	{ 
			$idusuario = $usuario_dispositivo['usuario_idusuario']; 
		}
		if($idusuario != NULL){
			$usuario = $usuarioClass->getUsuario($idusuario);
		}
	}
	
	if($idusuario != NULL){		
		$insertar = true;
		$viejo = false;
		$usuario_ingreso = array();
		$usuarioIngreso = $usuarioIngresoClass->getUsuarioIngreso($idusuario);
		if(is_array($usuarioIngreso) and !empty($usuarioIngreso)){ 
			$usuario_ingreso = json_decode(trim($usuarioIngreso['usuario_ingreso']), true); 
			$insertar = false;
		} 
		if(isset($usuario_ingreso[count($usuario_ingreso) - 1]['ft']) and $usuario_ingreso[count($usuario_ingreso) - 1]['ft'] != ""){ 
			
			$fecha = str_split($usuario_ingreso[count($usuario_ingreso) - 1]['ft'], 2);
			$fecha = "20".$fecha[0]."-".$fecha[1]."-".$fecha[2]." ".$fecha[3].":".$fecha[4].":".$fecha[5];
			
			$now = date('ymdHis');
			$now = str_split($now, 2);
			$now = "20".$now[0]."-".$now[1]."-".$now[2]." ".$now[3].":".$now[4].":".$now[5];
			
			if(strtotime($now) > strtotime("+5 min", strtotime($fecha))){ $viejo = true; }
			
		} else if(isset($usuario_ingreso[count($usuario_ingreso) - 1]['fi']) and $usuario_ingreso[count($usuario_ingreso) - 1]['fi'] != ""){ 
			
			$fecha = str_split($usuario_ingreso[count($usuario_ingreso) - 1]['fi'], 2);
			$fecha = "20".$fecha[0]."-".$fecha[1]."-".$fecha[2]." ".$fecha[3].":".$fecha[4].":".$fecha[5];
			
			$now = date('ymdHis');
			$now = str_split($now, 2);
			$now = "20".$now[0]."-".$now[1]."-".$now[2]." ".$now[3].":".$now[4].":".$now[5];
			
			if(strtotime($now) > strtotime("+5 min", strtotime($fecha))){ $viejo = true; }	
			
		} else { $viejo = true; }
		if($viejo){	
			$usuario_ingreso[] = array(
				"fi" => date('ymdHis'),
				"ft" => '',
				"ff" => '',
			);
		} else {
			if(isset($usuario_ingreso[count($usuario_ingreso) - 1]['ft'])){ 
				$usuario_ingreso[count($usuario_ingreso) - 1]['ft'] = date('ymdHis'); 
			}
		}
		$usuario_ingreso = json_encode(utf8_converter($usuario_ingreso));
		if($insertar){ $resultado = $usuarioIngresoClass->insertUsuarioIngreso($idusuario, $usuario_ingreso); } 
		else { $resultado = $usuarioIngresoClass->updateUsuarioIngreso($usuarioIngreso['idusuario_ingreso'], $idusuario, $usuario_ingreso); }
	}	
}
?>