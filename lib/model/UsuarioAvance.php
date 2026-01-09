<?php 
if (!defined('APPLICATION')) exit;
class UsuarioAvance extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $idusuario_avance = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario - Avance');
	private $usuario_idusuario = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario');	
	private $usuario_avance = array('longitud'=>NULL,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Usuario Avance');	
		
	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}
	
	
	public function getUsuarioAvance($usuario_idusuario){
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario_avance,
					usuario_idusuario,
					usuario_avance
				FROM 
					usuario_avance
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
	
	public function insertUsuarioAvance($usuario_idusuario, $usuario_avance){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->usuario_avance['valor'] = $usuario_avance;
		
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->usuario_avance));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare('
				INSERT INTO usuario_avance (
					usuario_idusuario,
					usuario_avance,
					fecha,
					activo 
				)
				VALUES (
					:usuario_idusuario,
					:usuario_avance,
					NOW(),
					1
				)
			');
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':usuario_avance', $this->usuario_avance['valor'], PDO::PARAM_STR, $this->usuario_avance['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	public function updateUsuarioAvance($idusuario_avance, $usuario_idusuario, $usuario_avance){	
		$this->idusuario_avance['valor'] = $idusuario_avance;
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->usuario_avance['valor'] = $usuario_avance;
		$validar = $this->validar->validarValores(array($this->idusuario_avance, $this->usuario_idusuario, $this->usuario_avance));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario_avance 
				SET 
					usuario_avance = :usuario_avance
				WHERE 
					idusuario_avance = :idusuario_avance AND 
					usuario_idusuario = :usuario_idusuario AND 
					activo = 1
			");
			$stmt->bindParam(':idusuario_avance', $this->idusuario_avance['valor'], PDO::PARAM_INT, $this->idusuario_avance['longitud']);
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':usuario_avance', $this->usuario_avance['valor'], PDO::PARAM_STR, $this->usuario_avance['longitud']);
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