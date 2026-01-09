<?php 
if (!defined('APPLICATION')) exit;
class Formulario{
	private $errores;   		
	public function __construct(){ }
	public function __destruct(){} 	
	public function verificar($token, $session, $arreglo, $post){
		$regreso = $this->verificarToken($token, $session);
		if($regreso == 1){
			unset($_SESSION[$session]);
			return $this->verificarDatos($arreglo, $post);
		} else { 
			unset($_SESSION[$session]);
			return $regreso; 
		}
	}
	private function verificarToken($token, $session){
		if(!isset($_SESSION[$session])){ 
			$this->errores = "Error, intente de nuevo.";
			return "f1"; 
		}
		if($_SESSION[$session] == $token){ 
			return 1; 
		} else { 
			$this->errores = "Error, intente de nuevo.";
			return "f2"; 
		}
	}
	private function verificarDatos($arreglo, $post){
		$arreglo = (is_array($arreglo))?$arreglo:array();
		$existe = 0;
		if( count($arreglo) != count($post)){ 
			$this->errores = "Error, intente de nuevo.";
			return "f3"; 
		}
		foreach($arreglo as $id => $dato){ 
			if(!isset($post[$id])){ 
				$existe = 1; 
				$this->errores = "Error, intente de nuevo."; 
			} 
		}
		return ($existe == 0)?1:"f4";
	}
	public function getError(){
		$texto = "Error. ";
		if(is_array($this->errores)){ foreach($this->errores as $dato){ $texto .= $dato."\\n"; } } else { $texto = $this->errores; }
		return $texto;
	}
}
?>