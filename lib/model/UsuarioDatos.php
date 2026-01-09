<?php 
if (!defined('APPLICATION')) exit;
class UsuarioDatos extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $idusuario_datos = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario - Avatar');
	private $usuario_idusuario = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario');	
	private $usuario_datos = array('longitud'=>NULL,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Usuario datos');	
		
	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}
	
	
	public function getUsuarioDatos($usuario_idusuario){
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario_datos,
					usuario_idusuario,
					usuario_datos
				FROM 
					usuario_datos
				WHERE 
					usuario_idusuario = :usuario_idusuario AND
					activo = 1
			");
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	
	public function insertUsuarioDatos($usuario_idusuario, $usuario_datos){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->usuario_datos['valor'] = $usuario_datos;
		
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->usuario_datos));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare('
				INSERT INTO usuario_datos (
					usuario_idusuario,
					usuario_datos,
					fecha,
					activo 
				)
				VALUES (
					:usuario_idusuario,
					:usuario_datos,
					NOW(),
					1
				)
			');
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':usuario_datos', $this->usuario_datos['valor'], PDO::PARAM_STR, $this->usuario_datos['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	public function updateUsuarioDatos($idusuario_datos, $usuario_idusuario, $usuario_datos){	
		$this->idusuario_datos['valor'] = $idusuario_datos;
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->usuario_datos['valor'] = $usuario_datos;
		$validar = $this->validar->validarValores(array($this->idusuario_datos, $this->usuario_idusuario, $this->usuario_datos));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario_datos 
				SET 
					usuario_datos = :usuario_datos
				WHERE 
					idusuario_datos = :idusuario_datos AND 
					usuario_idusuario = :usuario_idusuario AND 
					activo = 1
			");
			$stmt->bindParam(':idusuario_datos', $this->idusuario_datos['valor'], PDO::PARAM_INT, $this->idusuario_datos['longitud']);
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':usuario_datos', $this->usuario_datos['valor'], PDO::PARAM_STR, $this->usuario_datos['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { 
				return 1; 
			} else { 
				return 1; 
			}
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
}
?>