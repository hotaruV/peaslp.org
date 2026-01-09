<?php 
if (!defined('APPLICATION')) exit;
class ContactoData extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $idcontacto = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario - Avatar');
	private $usuario_idusuario = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>1,'titulo'=>'ID Usuario');	
	private $contacto = array('longitud'=>NULL,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Usuario datos');	
		
	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}
	
	public function insertContacto($contacto, $usuario_idusuario = NULL){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->contacto['valor'] = $contacto;
		
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->contacto));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare('
				INSERT INTO contacto (
					usuario_idusuario,
					contacto,
					fecha,
					activo 
				)
				VALUES (
					:usuario_idusuario,
					:contacto,
					NOW(),
					1
				)
			');
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':contacto', $this->contacto['valor'], PDO::PARAM_STR, $this->contacto['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	public function updateContacto($idcontacto, $contacto, $usuario_idusuario = NULL){	
		$this->idcontacto['valor'] = $idcontacto;
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->contacto['valor'] = $contacto;
		$validar = $this->validar->validarValores(array($this->idcontacto, $this->usuario_idusuario, $this->contacto));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					contacto 
				SET 
					contacto = :contacto
				WHERE 
					idcontacto = :idcontacto AND 
					usuario_idusuario = :usuario_idusuario AND 
					activo = 1
			");
			$stmt->bindParam(':idcontacto', $this->idcontacto['valor'], PDO::PARAM_INT, $this->idcontacto['longitud']);
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':contacto', $this->contacto['valor'], PDO::PARAM_STR, $this->contacto['longitud']);
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