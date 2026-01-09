<?php 
if (!defined('APPLICATION')) exit;
class UsuarioIngreso extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $idusuario_ingreso = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario - Ingreso');
	private $usuario_idusuario = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario');	
	private $usuario_ingreso = array('longitud'=>NULL,'tipo'=>'texto','valor'=>NULL,'nulo'=>1,'titulo'=>'Ingresos');
		
	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}
	
	public function getUsuarioIngreso($usuario_idusuario){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario_ingreso,
					usuario_idusuario,
					usuario_ingreso
				FROM 
					usuario_ingreso
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
	public function insertUsuarioIngreso($usuario_idusuario, $usuario_ingreso){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->usuario_ingreso['valor'] = $usuario_ingreso;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->usuario_ingreso));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare('
				INSERT INTO usuario_ingreso (
					usuario_idusuario,
					usuario_ingreso,
					fecha,
					activo 
				)
				VALUES (
					:usuario_idusuario,
					:usuario_ingreso,
					NOW(),
					1
				)
			');
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':usuario_ingreso', $this->usuario_ingreso['valor'], PDO::PARAM_STR, $this->usuario_ingreso['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	public function updateUsuarioIngreso($idusuario_ingreso, $usuario_idusuario, $usuario_ingreso){	
		$this->idusuario_ingreso['valor'] = $idusuario_ingreso;
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->usuario_ingreso['valor'] = $usuario_ingreso;
		$validar = $this->validar->validarValores(array($this->idusuario_ingreso, $this->usuario_idusuario, $this->usuario_ingreso));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario_ingreso 
				SET 
					usuario_ingreso = :usuario_ingreso
				WHERE 
					idusuario_ingreso = :idusuario_ingreso AND 
					usuario_idusuario = :usuario_idusuario AND 
					activo = 1
			");
			$stmt->bindParam(':idusuario_ingreso', $this->idusuario_ingreso['valor'], PDO::PARAM_INT, $this->idusuario_ingreso['longitud']);
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':usuario_ingreso', $this->usuario_ingreso['valor'], PDO::PARAM_STR, $this->usuario_ingreso['longitud']);
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
	
	public function getUsuarioIngresoFecha($fecha, $sql_ad = ""){			
		$stmt = $this->conectDB->conn->prepare("
			SELECT 
				COUNT(ui.idusuario_ingreso) AS total
			FROM 
				usuario_ingreso ui,
				usuario u 
			WHERE 
				ui.usuario_ingreso LIKE '%".intval($fecha)."%' AND
				u.idusuario = ui.usuario_idusuario AND
				u.activo = 1 AND
				ui.activo = 1
				".$sql_ad."
		");
		$stmt->execute();
		$objet = $stmt->fetch(PDO::FETCH_ASSOC);
		return $objet;	
	}
}
?>