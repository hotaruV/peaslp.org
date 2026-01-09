<?php 
if (!defined('APPLICATION')) exit;
class ShortUrl extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	protected static $chars = "abcdfghjkmnpqrstvwxyz|ABCDFGHJKLMNPQRSTVWXYZ|0123456789";
	private $idshort_url = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID Short Url');
	private $short_url = array('longitud'=>25,'tipo'=>'texto','valor'=>NULL,'nulo'=>1,'titulo'=>'Short Url');
	private $long_url = array('longitud'=>500,'tipo'=>'texto','valor'=>NULL,'nulo'=>1,'titulo'=>'Long Url');
		
	public function __construct() {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
	}
	public function __destruct() {}
	
	public function getShortUrl($idshort_url){
		$this->idshort_url['valor'] = $idshort_url;
		$validar = $this->validar->validarValores(array($this->idshort_url));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idshort_url,
					long_url,
					short_url,
					hits
				FROM 
					short_url
				WHERE 
					idshort_url = :idshort_url AND
					activo = 1
			");
			$stmt->bindParam(':idshort_url', $this->idshort_url['valor'], PDO::PARAM_INT, $this->idshort_url['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	public function getShortUrlByCode($short_url){
		$this->short_url['valor'] = $short_url;
		$validar = $this->validar->validarValores(array($this->short_url));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idshort_url,
					long_url,
					short_url,
					hits
				FROM 
					short_url
				WHERE 
					short_url = :short_url AND
					activo = 1
			");
			$stmt->bindParam(':short_url', $this->short_url['valor'], PDO::PARAM_STR, $this->short_url['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			if(is_array($objet) and !empty($objet)){ $this->updateShortUrl($objet['idshort_url']); }
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	public function getShortUrlByURL($long_url){
		$this->long_url['valor'] = $long_url;
		$validar = $this->validar->validarValores(array($this->long_url));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					idshort_url,
					long_url,
					short_url,
					hits
				FROM 
					short_url
				WHERE 
					long_url = :long_url AND
					activo = 1
			");
			$stmt->bindParam(':long_url', $this->long_url['valor'], PDO::PARAM_STR, $this->long_url['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;	
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}	
	}
	public function insertShortUrl($long_url, $length){	
		$this->long_url['valor'] = $long_url;
		$short_url = NULL;
		while($short_url == NULL){
			$temp = $this->generateRandomString($length);
			$existe = $this->getShortUrlByCode($temp);
			if($existe === false){ $short_url = $temp; }
		}
		$this->short_url['valor'] = $short_url;
		
		$validar = $this->validar->validarValores(array($this->long_url, $this->short_url));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare('
				INSERT INTO short_url (
					long_url,
					short_url,
					hits,
					fecha,
					activo 
				)
				VALUES (
					:long_url,
					:short_url,
					0,
					NOW(),
					1
				)
			');
			$stmt->bindParam(':long_url', $this->long_url['valor'], PDO::PARAM_STR, $this->long_url['longitud']);
			$stmt->bindParam(':short_url', $this->short_url['valor'], PDO::PARAM_STR, $this->short_url['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->getShortUrl($this->conectDB->conn->lastInsertId()); } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	
	public function insertShortUrlUnique($long_url, $length){	
		$existe = $this->getShortUrlByURL($long_url);
		if(is_array($existe) and !empty($existe)){ return $existe; }
		else { return $this->insertShortUrl($long_url, $length); }
	}
	
	public function updateShortUrl($idshort_url){		
		$this->idshort_url['valor'] = $idshort_url;
		$validar = $this->validar->validarValores(array($this->idshort_url));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					short_url 
				SET 
					hits = hits + 1
				WHERE 
					idshort_url = :idshort_url AND 
					activo = 1
			");
			$stmt->bindParam(':idshort_url', $this->idshort_url['valor'], PDO::PARAM_INT, $this->idshort_url['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 1; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
	
	public function generateRandomString($length = 6){
        $sets = explode('|', self::$chars);
        $all = '';
        $randString = '';
        foreach($sets as $set){
            $randString .= $set[array_rand(str_split($set))];
            $all .= $set;
        }
        $all = str_split($all);
        for($i = 0; $i < $length - count($sets); $i++){
            $randString .= $all[array_rand($all)];
        }
        $randString = str_shuffle($randString);
        return $randString;
    }
}
?>