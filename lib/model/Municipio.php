<?php 
if (!defined('APPLICATION')) exit;
class Municipio extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $idmunicipio = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Municipio');	
	private $estado_idestado = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Estado');
		
	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}
	
	public function getMunicipio($idmunicipio){
		$this->idmunicipio['valor'] = $idmunicipio;
		$validar = $this->validar->validarValores(array($this->idmunicipio));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idmunicipio,
					municipio,
					estado_idestado
				FROM 
					municipio
				WHERE 
					idmunicipio = :idmunicipio AND
					activo = 1
			");
			$stmt->bindParam(':idmunicipio', $this->idmunicipio['valor'], PDO::PARAM_INT, $this->idmunicipio['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	
	public function getMunicipiosByEstado($estado_idestado){
		$this->estado_idestado['valor'] = $estado_idestado;
		$validar = $this->validar->validarValores(array($this->estado_idestado));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idmunicipio,
					municipio
				FROM 
					municipio
				WHERE 
					estado_idestado = :estado_idestado AND
					activo = 1
			");
			$stmt->bindParam(':estado_idestado', $this->estado_idestado['valor'], PDO::PARAM_INT, $this->estado_idestado['longitud']);
			$stmt->execute();
			$objet = $stmt->fetchALL(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	
	public function getMunicipiosALL(){
		$stmt = $this->conectDB->conn->prepare("
			SELECT 
				idmunicipio,
				municipio
			FROM 
				municipio
			WHERE 
				activo = 1
		");
		$stmt->execute();
		$objet = $stmt->fetchALL(PDO::FETCH_ASSOC);
		return $objet;	
	}
	
	public function getMunicipiosByEstadoPlantel($estado_idestado){
		$this->estado_idestado['valor'] = $estado_idestado;
		$validar = $this->validar->validarValores(array($this->estado_idestado));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					DISTINCT(m.idmunicipio),
					m.municipio
				FROM 
					municipio m,
					plantel p
				WHERE 
					m.estado_idestado = :estado_idestado AND
					p.municipio_idmunicipio = m.idmunicipio AND
					p.estado_idestado = m.estado_idestado AND
					m.activo = 1 AND
					p.activo = 1
			");
			$stmt->bindParam(':estado_idestado', $this->estado_idestado['valor'], PDO::PARAM_INT, $this->estado_idestado['longitud']);
			$stmt->execute();
			$objet = $stmt->fetchALL(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
}
?>