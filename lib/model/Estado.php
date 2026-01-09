<?php 
if (!defined('APPLICATION')) exit;
class Estado extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $idestado = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Estado');
		
	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}
	
	public function getEstado($idestado){
		$this->idestado['valor'] = $idestado;
		$validar = $this->validar->validarValores(array($this->idestado));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idestado,
					estado,
					clave
				FROM 
					estado
				WHERE 
					idestado = :idestado AND
					activo = 1
			");
			$stmt->bindParam(':idestado', $this->idestado['valor'], PDO::PARAM_INT, $this->idestado['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	
	public function getEstados(){
		$stmt = $this->conectDB->conn->prepare("
			SELECT 
				idestado,
				estado,
				clave
			FROM 
				estado
			WHERE 
				activo = 1
			ORDER BY
				estado ASC
		");
		$stmt->execute();
		$objet = $stmt->fetchALL(PDO::FETCH_ASSOC);
		return $objet;	
	}
}
?>