<?php
if (!defined('APPLICATION')) exit;

class Usuario extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;

	private $idusuario = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario');
	private $usuario = array('longitud'=>250,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Usuario');
	private $usuario_data = array('longitud'=>65535,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Usuario data');
	private $perfil = array('longitud'=>2,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Perfil');
	private $contrasena = array('longitud'=>128,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Contraseña');
	private $salt = array('longitud'=>128,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Salt');
	private $contrasena2 = array('longitud'=>128,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Contraseña nueva');
	
	public $usuario_perfil_arr = array(1);

	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}

	public function insertUsuario($usuario, $usuario_data, $perfil, $contrasena){	
		$this->usuario['valor'] = $usuario;
		$this->usuario_data['valor'] = $usuario_data;
		$this->perfil['valor'] = $perfil;
		$this->contrasena['valor'] = $contrasena;
		$validar = $this->validar->validarValores(array($this->usuario, $this->usuario_data, $this->perfil, $this->contrasena));
		if(empty($validar)){
			$this->contrasena['valor'] = hash('sha512', $this->contrasena['valor']);
			$salt = hash('sha512', uniqid(mt_rand(), true));
			$stmt = $this->conectDB->conn->prepare('
				INSERT INTO usuario (
					usuario,
					usuario_data,
					perfil,
					contrasena,
					salt,
					fecha,
					activo 
				)
				VALUES (
					:usuario,
					:usuario_data,
					:perfil,
					:contrasena,
					:salt,
					NOW(),
					1
				)
			');
			$stmt->bindParam(':usuario', $this->usuario['valor'], PDO::PARAM_STR, $this->usuario['longitud']);
			$stmt->bindParam(':usuario_data', $this->usuario_data['valor'], PDO::PARAM_STR, $this->usuario_data['longitud']);
			$stmt->bindParam(':perfil', $this->perfil['valor'], PDO::PARAM_INT, $this->perfil['longitud']);
			$stmt->bindParam(':contrasena', $this->contrasena['valor'], PDO::PARAM_STR, $this->contrasena['longitud']);
			$stmt->bindParam(':salt', $salt, PDO::PARAM_STR, 128);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}

	public function updateUsuario($idusuario, $usuario, $usuario_data, $perfil){
		$this->idusuario['valor'] = $idusuario;
		$this->usuario['valor'] = $usuario;
		$this->usuario_data['valor'] = $usuario_data;
		$this->perfil['valor'] = $perfil;
		$validar = $this->validar->validarValores(array($this->idusuario, $this->usuario, $this->usuario_data, $this->perfil));
		if(empty($validar)){
			
			$salt = hash('sha512', uniqid(mt_rand(), true));

			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario 
				SET 
					usuario = :usuario,
					usuario_data = :usuario_data,
					perfil = :perfil,
					salt = :salt
				WHERE 
					idusuario = :idusuario AND 
					eliminado = 0
			");
			
			$stmt->bindParam(':idusuario', $this->idusuario['valor'], PDO::PARAM_INT, $this->idusuario['longitud']);
			$stmt->bindParam(':usuario', $this->usuario['valor'], PDO::PARAM_STR, $this->usuario['longitud']);
			$stmt->bindParam(':usuario_data', $this->usuario_data['valor'], PDO::PARAM_STR, $this->usuario_data['longitud']);
			$stmt->bindParam(':perfil', $this->perfil['valor'], PDO::PARAM_INT, $this->perfil['longitud']);
			$stmt->bindParam(':salt', $salt, PDO::PARAM_STR, 128);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return $validar;
		}	
	}
	
	public function getUsuarioByCorreo($usuario){	
		$this->usuario['valor'] = $usuario;
		$validar = $this->validar->validarValores(array($this->usuario));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario,
					usuario,
					perfil,
					salt
				FROM 
					usuario
				WHERE 
					usuario = :usuario AND
					/* activo = 1 AND */
					eliminado = 0
			");
			$stmt->bindParam(':usuario', $this->usuario['valor'], PDO::PARAM_STR, $this->usuario['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	
	public function getUsuario($idusuario){	
		$this->idusuario['valor'] = $idusuario;
		$validar = $this->validar->validarValores(array($this->idusuario));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					u.idusuario,
					u.usuario,
					u.perfil,
					p.perfil AS perfil_txt,
					u.salt,
					(
					SELECT
						ud.usuario_datos
					FROM 
						usuario_datos ud
					WHERE
						u.idusuario = ud.usuario_idusuario AND 
						ud.activo = 1
					) AS usuario_datos,
					u.usuario_data
				FROM 
					usuario u,
					perfil p
				WHERE 
					u.idusuario = :idusuario AND
					u.perfil = p.idperfil AND
					/* u.activo = 1  AND */
					u.eliminado = 0
			");
			$stmt->bindParam(':idusuario', $this->idusuario['valor'], PDO::PARAM_INT, $this->idusuario['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	
	public function loginToken($idusuario, $salt, $perfil) {
		$this->idusuario['valor'] = $idusuario;
		$this->salt['valor'] = $salt;
		$this->perfil['valor'] = $perfil;
		$validar = $this->validar->validarValores(array($this->idusuario, $this->salt, $this->perfil));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario,
					usuario,
					contrasena,
					salt,
					usuario_data
				FROM 
					usuario
				WHERE 
					idusuario = :idusuario AND
					salt = :salt AND
					perfil = :perfil AND
					activo = 1 AND
					eliminado = 0
			");
			$stmt->bindParam(':idusuario', $this->idusuario['valor'], PDO::PARAM_INT,  $this->idusuario['longitud']);
			$stmt->bindParam(':salt', $this->salt['valor'], PDO::PARAM_STR,  $this->salt['longitud']);
			$stmt->bindParam(':perfil', $this->perfil['valor'], PDO::PARAM_INT,  $this->perfil['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			if(!empty($objet)){
				return $this->getUsuario($objet['idusuario']);
			} else {
				return 0;
			}
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
	
	public function loginUsuario($usuario, $contrasena) {
		$this->usuario['valor'] = $usuario;
		$this->contrasena['valor'] = $contrasena;
		$validar = $this->validar->validarValores(array($this->usuario, $this->contrasena));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idusuario,
					usuario,
					contrasena,
					salt
				FROM 
					usuario 
				WHERE 
					usuario = :usuario AND
					activo = 1 AND
					eliminado = 0
			");
			$stmt->bindParam(':usuario', $this->usuario['valor'], PDO::PARAM_STR,  $this->usuario['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			if(!empty($objet)){
				$contrasena = hash('sha512', $this->contrasena['valor']);
				$intentos = $this->checkbrute($objet['usuario']);
				if($intentos){
					if($objet['contrasena'] != $contrasena) {
						//usuario y contraseña no coinciden
						$this->intento($this->usuario['valor'], $objet['idusuario']);
						return 0;
					} else {	
						//debe esperar a que se desbloque la cuenta
						return 0;
					}
				} else {						
					if($objet['contrasena'] == $contrasena) {
						return $objet['idusuario'];
					} else {
						//usuario y contraseña no coinciden
						$this->intento($this->usuario['valor'], $objet['idusuario']);
						return 0;
					}
				}
			} else {
				//error no coincide usario
				$intentos = $this->checkbrute($this->usuario['valor']);
				$this->intento($this->usuario['valor'], NULL);
				return 0;
			}
		} else {
			//datos incorrectos
			$this->intento($this->usuario['valor'], NULL);	
			return 0;
		}
	}
	
	private function checkbrute($usuario) {
		$this->usuario['valor'] = $usuario;
		$validar = $this->validar->validarValores(array($this->usuario));
		if(empty($validar)){
			$valid_attempts = date("Y-m-d H:i:s", strtotime("-2 hours"));
			$stmt = $this->conectDB->conn->prepare("SELECT COUNT(*) AS numero FROM usuario_intento WHERE usuario_intento = :usuario AND fecha > :fecha");
			$stmt->bindParam(':usuario', $this->usuario['valor'], PDO::PARAM_STR, $this->usuario['longitud']);
			$stmt->bindParam(':fecha', $valid_attempts, PDO::PARAM_STR, 19);
			$stmt->execute();
			$objeto = $stmt->fetchObject();
			if(is_object($objeto)){
				$objeto->numero;
				if($objeto->numero >= 20){ return true; } else { return false; }
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	
	private function intento($usuario, $idusuario) {
		$this->usuario['valor'] = $usuario;
		$idusuarioTemp = $this->idusuario;
		$idusuarioTemp['nulo'] = 1;
		$idusuarioTemp['valor'] = $idusuario;
		$validar = $this->validar->validarValores(array($this->usuario, $idusuarioTemp));
		if(empty($validar)){
			$idusuario_intento = NULL;	
			$stmt = $this->conectDB->conn->prepare("
				INSERT INTO usuario_intento (
					usuario_intento, 
					usuario_idusuario
				) VALUES (:usuario, :idusuario)" );
			$stmt->bindParam(':usuario', $this->usuario['valor'], PDO::PARAM_STR, $this->usuario['longitud']);
			$stmt->bindParam(':idusuario', $idusuarioTemp['valor'], PDO::PARAM_INT, $idusuarioTemp['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 0; }
		} else {
			return -1;
		}
	}
	
	public function updateContrasenaRecuperar($idusuario, $usuario, $contrasena){
		$this->idusuario['valor'] = $idusuario;
		$this->usuario['valor'] = $usuario;
		$this->contrasena['valor'] = $contrasena;	
		$validar = $this->validar->validarValores(array($this->idusuario, $this->usuario, $this->contrasena));
		if(empty($validar)){
			$this->contrasena['valor'] = hash('sha512', $this->contrasena['valor']);
			$salt = hash('sha512', uniqid(mt_rand(), true));
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario 
				SET 
					contrasena = :contrasena,
					salt = :salt
				WHERE 
					idusuario = :idusuario AND 
					usuario = :usuario AND
					activo = 1 AND
					eliminado = 0
			");
			$stmt->bindParam(':idusuario', $this->idusuario['valor'], PDO::PARAM_INT, $this->idusuario['longitud']);
			$stmt->bindParam(':usuario', $this->usuario['valor'], PDO::PARAM_STR, $this->usuario['longitud']);
			$stmt->bindParam(':contrasena', $this->contrasena['valor'], PDO::PARAM_STR, $this->contrasena['longitud']);
			$stmt->bindParam(':salt', $salt, PDO::PARAM_STR, 128);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
	
	public function updateContrasena($idusuario, $usuario, $contrasena){
		$this->idusuario['valor'] = $idusuario;
		$this->usuario['valor'] = $usuario;
		$this->contrasena['valor'] = $contrasena;	
		$validar = $this->validar->validarValores(array($this->idusuario, $this->usuario, $this->contrasena));
		if(empty($validar)){
			$this->contrasena['valor'] = hash('sha512', $this->contrasena['valor']);
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					usuario 
				SET 
					contrasena = :contrasena
				WHERE 
					idusuario = :idusuario AND 
					usuario = :usuario AND
					activo = 1 AND
					eliminado = 0
			");
			$stmt->bindParam(':idusuario', $this->idusuario['valor'], PDO::PARAM_INT, $this->idusuario['longitud']);
			$stmt->bindParam(':usuario', $this->usuario['valor'], PDO::PARAM_STR, $this->usuario['longitud']);
			$stmt->bindParam(':contrasena', $this->contrasena['valor'], PDO::PARAM_STR, $this->contrasena['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
	
}
?>