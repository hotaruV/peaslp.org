<?php
if (!defined('APPLICATION')) exit;

class UsuarioDispositivo extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $idusuario_dispositivo = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID UsuarioDispositivo');
	private $usuario_idusuario  = array('longitud'=>150,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario');
	private $navegador = array('longitud'=>128,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Navegador');
	private $salt = array('longitud'=>128,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Salt');
	private $activo = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Activo');

	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}

	public function getUsuarioDispositivo($usuario_idusuario, $navegador, $salt){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->navegador['valor'] = $navegador;
		$this->salt['valor'] = $salt;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->navegador, $this->salt));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario_dispositivo
				FROM 
					usuario_dispositivo
				WHERE 
					usuario_idusuario = :usuario_idusuario AND
					navegador = :navegador AND
					salt = :salt AND
					activo = 1
			");
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':navegador', $this->navegador['valor'], PDO::PARAM_STR, $this->navegador['longitud']);
			$stmt->bindParam(':salt', $this->salt['valor'], PDO::PARAM_STR, $this->salt['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			/*error_log(print_r($validar, TRUE));*/
			return -1;
		}		
	}
	
	public function getUsuarioDispositivoNavegador($usuario_idusuario, $navegador){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->navegador['valor'] = $navegador;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->navegador));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario_dispositivo,
					usuario_idusuario,
					salt
				FROM 
					usuario_dispositivo
				WHERE 
					usuario_idusuario = :usuario_idusuario AND
					navegador = :navegador AND
					activo = 1
			");
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':navegador', $this->navegador['valor'], PDO::PARAM_STR, $this->navegador['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	
	public function getUsuarioDispositivoLocal($usuario_idusuario, $salt){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->salt['valor'] = $salt;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->salt));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario_dispositivo
				FROM 
					usuario_dispositivo
				WHERE 
					usuario_idusuario = :usuario_idusuario AND
					salt = :salt AND
					activo = 1
			");
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':salt', $this->salt['valor'], PDO::PARAM_STR, $this->salt['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	
	public function insertUsuarioDispositivo($usuario_idusuario, $navegador, $salt) {
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->navegador['valor'] = $navegador;
		$this->salt['valor'] = $salt;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->navegador, $this->salt));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				INSERT INTO usuario_dispositivo (
					usuario_idusuario, 
					navegador,
					salt,
					fecha,
					activo
				) VALUES (
					:usuario_idusuario, 
					:navegador,
					:salt,
					NOW(),
					1
				)
			");
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':navegador', $this->navegador['valor'], PDO::PARAM_STR, $this->navegador['longitud']);
			$stmt->bindParam(':salt', $this->salt['valor'], PDO::PARAM_STR, $this->salt['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			return -1;
		}
	}
	
	public function activarUsuarioDispositivo($idusuario_dispositivo, $activo){	
		$this->idusuario_dispositivo['valor'] = $idusuario_dispositivo;
		$this->activo['valor'] = $activo;
		$validar = $this->validar->validarValores(array($this->idusuario_dispositivo, $this->activo));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario_dispositivo 
				SET 
					activo = :activo
				WHERE 
					idusuario_dispositivo = :idusuario_dispositivo
			");
			$stmt->bindParam(':idusuario_dispositivo', $this->idusuario_dispositivo['valor'], PDO::PARAM_INT, $this->idusuario_dispositivo['longitud']);
			$stmt->bindParam(':activo', $this->activo['valor'], PDO::PARAM_INT, $this->activo['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
}
?>