<?php 
if (!defined('APPLICATION')) exit;
class Notificacion extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $idnotificacion = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Notificación');
	private $usuario_idusuario = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Usuario');	
	private $notificacion = array('longitud'=>NULL,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Notificación');	
	private $web = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Ver en la plataforma web: 1 -> sí | 0 -> no');
	private $web_visto = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Visto');
	private $email = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Correo electrónico');
	private $email_p = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Correo electrónico personal');
	private $sms = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'SMS');
	private $whatsapp = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'WhatsApp');
	private $ignorar = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Ignorar');
	
	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}
	
	
	public function getNotificaciones($usuario_idusuario, $limite){
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$validar = $this->validar->validarValores(array($this->usuario_idusuario));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idnotificacion,
					usuario_idusuario,
					notificacion,
					web,
					web_visto,
					email,
					email_p,
					sms,
					whatsapp,
					ignorar,
					fecha
				FROM 
					notificacion
				WHERE 
					usuario_idusuario = :usuario_idusuario AND
					web = 1 AND
					activo = 1
				ORDER BY 
					fecha DESC
				LIMIT
					".$limite."
			");
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->execute();
			$objet = $stmt->fetchALL(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	
	public function getNotificacionesTipo($tipo){		
		$sql_add = "";
		switch($tipo){
			case "email":
				$sql_add = " email = 0 AND ";
				break;	
			case "email_p":
				$sql_add = " email_p = 0 AND ";
				break;
			case "sms":
				$sql_add = " sms = 0 AND ";
				break;
			case "whatsapp":
				$sql_add = " whatsapp = 0 AND ";
				break;
		}
	
		$stmt = $this->conectDB->conn->prepare("
			SELECT 
				idnotificacion,
				usuario_idusuario,
				notificacion,
				web,
				web_visto,
				email,
				email_p,
				sms,
				whatsapp,
				ignorar,
				fecha
			FROM 
				notificacion
			WHERE 
				".$sql_add."
				activo = 1
			ORDER BY 
				fecha DESC
		");
		$stmt->execute();
		$objet = $stmt->fetch(PDO::FETCH_ASSOC);
		return $objet;	
	}
	
	public function insertNotificacion($usuario_idusuario, $notificacion, $web = 1, $email = 0, $email_p = 0, $sms = 0, $whatsapp = 0, $ignorar = 0){	
		$this->usuario_idusuario['valor'] = $usuario_idusuario;
		$this->notificacion['valor'] = $notificacion;
		$this->web['valor'] = $web;
		$this->email['valor'] = $email;
		$this->email_p['valor'] = $email_p;
		$this->sms['valor'] = $sms;
		$this->whatsapp['valor'] = $whatsapp;
		$this->ignorar['valor'] = $ignorar;
		
		$validar = $this->validar->validarValores(array($this->usuario_idusuario, $this->notificacion));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare('
				INSERT INTO notificacion (
					usuario_idusuario,
					notificacion,
					web,
					web_visto,
					email,
					email_p,
					sms,
					whatsapp,
					ignorar,
					fecha,
					activo 
				)
				VALUES (
					:usuario_idusuario,
					:notificacion,
					:web,
					0,
					:email,
					:email_p,
					:sms,
					:whatsapp,
					:ignorar,
					NOW(),
					1
				)
			');
			$stmt->bindParam(':usuario_idusuario', $this->usuario_idusuario['valor'], PDO::PARAM_INT, $this->usuario_idusuario['longitud']);
			$stmt->bindParam(':notificacion', $this->notificacion['valor'], PDO::PARAM_STR, $this->notificacion['longitud']);
			$stmt->bindParam(':web', $this->web['valor'], PDO::PARAM_INT, $this->web['longitud']);
			$stmt->bindParam(':email', $this->email['valor'], PDO::PARAM_INT, $this->email['longitud']);
			$stmt->bindParam(':email_p', $this->email_p['valor'], PDO::PARAM_INT, $this->email_p['longitud']);
			$stmt->bindParam(':sms', $this->sms['valor'], PDO::PARAM_INT, $this->sms['longitud']);
			$stmt->bindParam(':whatsapp', $this->whatsapp['valor'], PDO::PARAM_INT, $this->whatsapp['longitud']);
			$stmt->bindParam(':ignorar', $this->ignorar['valor'], PDO::PARAM_INT, $this->ignorar['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	
	public function updateNotificacionesTipo($idnotificacion, $tipo){		
		$this->idnotificacion['valor'] = $idnotificacion;
		$sql_add = "";
		switch($tipo){
			case "web_visto":
				$sql_add = " web_visto = 1 ";
				break;	
			case "email":
				$sql_add = " email = 1 ";
				break;
			case "email_p":
				$sql_add = " email_p = 1 ";
				break;
			case "sms":
				$sql_add = " sms = 1 ";
				break;
			case "whatsapp":
				$sql_add = " whatsapp = 1 ";
				break;
		}
		$validar = $this->validar->validarValores(array($this->idnotificacion));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					notificacion 
				SET 
					".$sql_add."
				WHERE 
					idnotificacion = :idnotificacion AND 
					activo = 1
			");
			$stmt->bindParam(':idnotificacion', $this->idnotificacion['valor'], PDO::PARAM_INT, $this->idnotificacion['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 1; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
	
	public function deleteNotificaciones($idnotificacion){		
		$this->idnotificacion['valor'] = $idnotificacion;
		$validar = $this->validar->validarValores(array($this->idnotificacion));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					notificacion 
				SET 
					activo = 0
				WHERE 
					idnotificacion = :idnotificacion AND 
					activo = 1
			");
			$stmt->bindParam(':idnotificacion', $this->idnotificacion['valor'], PDO::PARAM_INT, $this->idnotificacion['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 1; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
}
?>