<?php
if (!defined('APPLICATION')) exit;

class UsuarioDispositivoAcceso extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	public $cookie = "san_luis_potosi"; //1 día en segundo
	public $cookie_id = "pipea"; //1 día en segundo
	public $tiempo = 86400; //1 día en segundo
	public $dias = 365; //365 días
	
	private $idusuario_dispositivo_acceso = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario Dispositivo Acceso');
	private $usuario_dispositivo_idusuario_dispositivo  = array('longitud'=>150,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario Dispositivo');
	private $usuario_dispositivo_acceso = array('longitud'=>19,'tipo'=>'fecha_completa','valor'=>NULL,'nulo'=>0,'titulo'=>'Dispositivo acceso');
	private $activo = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Activo');

	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}

	public function getUsuarioDispositivoAcceso($usuario_dispositivo_idusuario_dispositivo){	
		$this->usuario_dispositivo_idusuario_dispositivo['valor'] = $usuario_dispositivo_idusuario_dispositivo;
		$validar = $this->validar->validarValores(array($this->usuario_dispositivo_idusuario_dispositivo));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario_dispositivo_acceso,
					usuario_dispositivo_idusuario_dispositivo,
					usuario_dispositivo_acceso
				FROM 
					usuario_dispositivo_acceso
				WHERE 
					usuario_dispositivo_idusuario_dispositivo = :usuario_dispositivo_idusuario_dispositivo AND
					activo = 1
			");
			$stmt->bindParam(':usuario_dispositivo_idusuario_dispositivo', $this->usuario_dispositivo_idusuario_dispositivo['valor'], PDO::PARAM_INT, $this->usuario_dispositivo_idusuario_dispositivo['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	
	public function insertUsuarioDispositivoAcceso($usuario_dispositivo_idusuario_dispositivo) {
		$this->usuario_dispositivo_idusuario_dispositivo['valor'] = $usuario_dispositivo_idusuario_dispositivo;
		$validar = $this->validar->validarValores(array($this->usuario_dispositivo_idusuario_dispositivo));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				INSERT INTO usuario_dispositivo_acceso (
					usuario_dispositivo_idusuario_dispositivo, 
					usuario_dispositivo_acceso,
					fecha,
					activo
				) VALUES (
					:usuario_dispositivo_idusuario_dispositivo, 
					NOW(),
					NOW(),
					1
				)
			");
			$stmt->bindParam(':usuario_dispositivo_idusuario_dispositivo', $this->usuario_dispositivo_idusuario_dispositivo['valor'], PDO::PARAM_INT, $this->usuario_dispositivo_idusuario_dispositivo['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			return -1;
		}
	}
	
	public function updateUsuarioDispositivoAcceso($usuario_dispositivo_idusuario_dispositivo){	
		$this->usuario_dispositivo_idusuario_dispositivo['valor'] = $usuario_dispositivo_idusuario_dispositivo;
		$validar = $this->validar->validarValores(array($this->usuario_dispositivo_idusuario_dispositivo));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario_dispositivo_acceso 
				SET 
					usuario_dispositivo_acceso = NOW()
				WHERE 
					usuario_dispositivo_idusuario_dispositivo = :usuario_dispositivo_idusuario_dispositivo AND
					activo = 1
			");
			$stmt->bindParam(':usuario_dispositivo_idusuario_dispositivo', $this->usuario_dispositivo_idusuario_dispositivo['valor'], PDO::PARAM_INT, $this->usuario_dispositivo_idusuario_dispositivo['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	
	public function activarUsuarioDispositivoAcceso($usuario_dispositivo_idusuario_dispositivo, $activo){	
		$this->usuario_dispositivo_idusuario_dispositivo['valor'] = $usuario_dispositivo_idusuario_dispositivo;
		$this->activo['valor'] = $activo;
		$validar = $this->validar->validarValores(array($this->usuario_dispositivo_idusuario_dispositivo, $this->activo));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario_dispositivo_acceso 
				SET 
					activo = :activo
				WHERE 
					usuario_dispositivo_idusuario_dispositivo = :usuario_dispositivo_idusuario_dispositivo
			");
			$stmt->bindParam(':usuario_dispositivo_idusuario_dispositivo', $this->usuario_dispositivo_idusuario_dispositivo['valor'], PDO::PARAM_INT, $this->usuario_dispositivo_idusuario_dispositivo['longitud']);
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