<?php
if (!defined('APPLICATION')) exit;

class TablaJSON extends ConectarDB{
	private $conectDB;
	public $error;
	private $validar;
	
	private $base = NULL;
	private $idtabla = array('longitud'=>11,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'ID');
	private $tabla  = array('longitud'=>750,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Tabla');
	private $tabla_data = array('longitud'=>16777215,'tipo'=>'texto','valor'=>NULL,'nulo'=>0,'titulo'=>'Tabla Data');
	private $activo = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Activo');
	private $eliminado = array('longitud'=>1,'tipo'=>'entero','valor'=>NULL,'nulo'=>0,'titulo'=>'Eliminado');
	
	public $municipios = '[{"id":"1","municipio":"Ahualulco"},{"id":"2","municipio":"Alaquines"},{"id":"3","municipio":"Aquismón"},{"id":"4","municipio":"Armadillo de los Infantes"},{"id":"5","municipio":"Cárdenas"},{"id":"6","municipio":"Catorce"},{"id":"7","municipio":"Cedral"},{"id":"8","municipio":"Cerritos"},{"id":"9","municipio":"Cerro de San Pedro"},{"id":"10","municipio":"Ciudad del Maíz"},{"id":"11","municipio":"Ciudad Fernández"},{"id":"12","municipio":"Tancanhuitz"},{"id":"13","municipio":"Ciudad Valles"},{"id":"14","municipio":"Coxcatlán"},{"id":"15","municipio":"Charcas"},{"id":"16","municipio":"Ebano"},{"id":"17","municipio":"Guadalcázar"},{"id":"18","municipio":"Huehuetlán"},{"id":"19","municipio":"Lagunillas"},{"id":"20","municipio":"Matehuala"},{"id":"21","municipio":"Mexquitic de Carmona"},{"id":"22","municipio":"Moctezuma"},{"id":"23","municipio":"Rayón"},{"id":"24","municipio":"Rioverde"},{"id":"25","municipio":"Salinas"},{"id":"26","municipio":"San Antonio"},{"id":"27","municipio":"San Ciro de Acosta"},{"id":"28","municipio":"San Luis Potosí"},{"id":"29","municipio":"San Martín Chalchicuahutla"},{"id":"30","municipio":"San Nicolás Tolentino"},{"id":"31","municipio":"Santa Catarina"},{"id":"32","municipio":"Santa María del Río"},{"id":"33","municipio":"Santo Domingo"},{"id":"34","municipio":"San Vicente Tancuayalab"},{"id":"35","municipio":"Soledad de Gracaino Sánchez"},{"id":"36","municipio":"Tamasopo"},{"id":"37","municipio":"Tamazunchale"},{"id":"38","municipio":"Tampacán"},{"id":"39","municipio":"Tampamolón Corona"},{"id":"40","municipio":"Tamuín"},{"id":"41","municipio":"Tanlajás"},{"id":"42","municipio":"Tanquián de Escobedo"},{"id":"43","municipio":"Tierra Nueva"},{"id":"44","municipio":"Vanegas"},{"id":"45","municipio":"Venado"},{"id":"46","municipio":"Villa de Arriaga"},{"id":"47","municipio":"Villa de Guadalupe"},{"id":"48","municipio":"Villa de la Paz"},{"id":"49","municipio":"Villa de Ramos"},{"id":"50","municipio":"Villa de Reyes"},{"id":"51","municipio":"Villa Hidalgo"},{"id":"52","municipio":"Villa Juárez"},{"id":"53","municipio":"Axtla de Terrazas"},{"id":"54","municipio":"Xilitla"},{"id":"55","municipio":"Zaragoza"},{"id":"56","municipio":"Villa de Arista"},{"id":"57","municipio":"Matlapa"},{"id":"58","municipio":"El Naranjo"}]';
	
	public function __construct($base) {
		$this->conectDB = parent::singleton();
		$this->validar = new Validar();
		$this->base = $base;
	}
	public function __destruct() {}	
	
	public function getTablaJSONTotal($sql_ad = ' AND activo = 1 '){	
		$stmt = $this->conectDB->conn->prepare("
			SELECT
				COUNT(id".$this->base.") AS total
			FROM 
				".$this->base."
			WHERE  
				eliminado = 0
				".$sql_ad."
		");
		$stmt->execute();
		$objet = $stmt->fetch(PDO::FETCH_ASSOC);
		return $objet;	
	}
	
	public function getTablaJSONTotalFiltro($searchQuery, $sql_ad = ' AND activo = 1 '){	
		$stmt = $this->conectDB->conn->prepare("
			SELECT
				COUNT(id".$this->base.") AS total
			FROM 
				".$this->base."
			WHERE
				eliminado = 0
				".$searchQuery."
				".$sql_ad."
		");
		$stmt->execute();
		$objet = $stmt->fetch(PDO::FETCH_ASSOC);
		return $objet;	
	}
	
	public function getTablaJSONDataTable($searchQuery, $columnName, $columnSortOrder, $row, $rowperpage, $sql_ad = ' AND activo = 1 ', $sql_cols = ''){	
		$stmt = $this->conectDB->conn->prepare("
			SELECT
				id".$this->base.",
				".$this->base.",
				".$this->base."_data,
				".$sql_cols."
				fecha,
				modificacion
			FROM 
				".$this->base."
			WHERE
				eliminado = 0
				".$searchQuery."
				".$sql_ad."
			ORDER BY
				".$columnName." ".$columnSortOrder."
			LIMIT 
				".$row.",".$rowperpage."
		");
		$stmt->execute();
		$objet = $stmt->fetchALL(PDO::FETCH_ASSOC);
		return $objet;	
	}
	
	public function numTablaJSONs($sql_ad = ' AND activo = 1 '){
		$stmt = $this->conectDB->conn->prepare("
			SELECT
				COUNT(id".$this->base.") as total
			FROM 
				".$this->base."
			WHERE 
				eliminado = 0
				".$sql_ad."
			ORDER BY 
				fecha DESC
		");
		$stmt->execute();
		$objet = $stmt->fetch(PDO::FETCH_ASSOC);
		return $objet['total'];
	}
	
	public function getTablaJSONsPag($url, $pagina = 1, $tamano = 8, $sql_ad = ' AND activo = 1 ', $orderBy = " fecha DESC "){
		$paginar = new Paginacion();
		$orden_limite = $paginar->paginacion($this->numTablaJSONs($sql_ad), $pagina, NULL, $tamano);
		
		$stmt = $this->conectDB->conn->prepare("
			SELECT  
				id".$this->base.",
				".$this->base.",
				".$this->base."_data,
				fecha,
				modificacion
			FROM 
				".$this->base."
			WHERE 
				eliminado = 0
				".$sql_ad."
			ORDER BY 
				".$orderBy."
			".$orden_limite['limite']."
		");
		$stmt->execute();
		$objet = $stmt->fetchALL(PDO::FETCH_ASSOC);
		$resultados = array($objet, $paginar->imprimir($url));	
		return $resultados;
	}
	
	public function getTablaJSONs($sql_ad = ' AND activo = 1 ', $orderBy = " fecha DESC ", $sql_cols = ''){
		
		$stmt = $this->conectDB->conn->prepare("
			SELECT 
				id".$this->base.",
				".$this->base.",
				".$this->base."_data,
				fecha,
				modificacion
				".$sql_cols."
			FROM 
				".$this->base." 
			WHERE 
				eliminado = 0
				".$sql_ad."
			ORDER BY 
				".$orderBy."	
		");
		
		/*
		echo "
			SELECT 
				id".$this->base.",
				".$this->base.",
				".$this->base."_data,
				fecha,
				modificacion
				".$sql_cols."
			FROM 
				".$this->base." 
			WHERE 
				eliminado = 0
				".$sql_ad."
			ORDER BY 
				".$orderBy."	
		";
		*/
		
		$stmt->execute();
		$objet = $stmt->fetchALL(PDO::FETCH_ASSOC);
		return $objet;
	}

	public function getTablaJSONUnique($sql_ad = ' AND activo = 1 ', $orderBy = " fecha DESC ", $sql_cols = ''){
		
		$stmt = $this->conectDB->conn->prepare("
			SELECT 
				id".$this->base.",
				".$this->base.",
				".$this->base."_data,
				fecha,
				modificacion
				".$sql_cols."
			FROM 
				".$this->base." 
			WHERE 
				eliminado = 0
				".$sql_ad."
			ORDER BY 
				".$orderBy."	
		");
		$stmt->execute();
		$objet = $stmt->fetch(PDO::FETCH_ASSOC);
		return $objet;
	}
	
	
	public function getTablaJSONID($idtabla, $sql_ad = ' AND activo = 1 ', $sql_cols = ''){	
		$this->idtabla['valor'] = $idtabla;
		$validar = $this->validar->validarValores(array($this->idtabla));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				SELECT 
					id".$this->base.",
					".$this->base.",
					".$this->base."_data,
					fecha,
					modificacion
					".$sql_cols."
				FROM 
					".$this->base." 
				WHERE 
					id".$this->base." = :idtabla AND
					eliminado = 0
					".$sql_ad."
			");
			$stmt->bindParam(':idtabla', $this->idtabla['valor'], PDO::PARAM_INT, $this->idtabla['longitud']);
			$stmt->execute();
			$objet = $stmt->fetch(PDO::FETCH_ASSOC);
			return $objet;
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}			
	}
	
	public function insertTablaJSON($tabla, $tabla_data){	
		$this->tabla['valor'] = $tabla;
		$this->tabla_data['valor'] = $tabla_data;
		$validar = $this->validar->validarValores(array($this->tabla, $this->tabla_data));
		
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				INSERT INTO ".$this->base." (
					".$this->base.",
					".$this->base."_data,
					fecha,
					activo,
					eliminado
				)
				VALUES (
					:tabla,
					:tabla_data,
					NOW(),
					1,
					0
				)
			");
			$stmt->bindParam(':tabla', $this->tabla['valor'], PDO::PARAM_STR, $this->tabla['longitud']);
			$stmt->bindParam(':tabla_data', $this->tabla_data['valor'], PDO::PARAM_STR, $this->tabla_data['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return $this->conectDB->conn->lastInsertId(); } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}		
	}
	public function updateTablaJSON($idtabla, $tabla, $tabla_data){	
		$this->idtabla['valor'] = $idtabla;
		$this->tabla['valor'] = $tabla;
		$this->tabla_data['valor'] = $tabla_data;
		$validar = $this->validar->validarValores(array($this->idtabla, $this->tabla, $this->tabla_data));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					".$this->base." 
				SET 
					".$this->base." = :tabla, 
					".$this->base."_data = :tabla_data
				WHERE 
					id".$this->base." = :idtabla AND 
					eliminado = 0
			");
			$stmt->bindParam(':idtabla', $this->idtabla['valor'], PDO::PARAM_INT, $this->idtabla['longitud']);
			$stmt->bindParam(':tabla', $this->tabla['valor'], PDO::PARAM_STR, $this->tabla['longitud']);
			$stmt->bindParam(':tabla_data', $this->tabla_data['valor'], PDO::PARAM_STR, $this->tabla_data['longitud']);
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
	
	
	public function activoTablaJSON($idtabla, $activo){		
		$this->idtabla['valor'] = $idtabla;
		$this->activo['valor'] = $activo;
		$validar = $this->validar->validarValores(array($this->idtabla, $this->activo));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					".$this->base." 
				SET 
					activo = :activo
				WHERE 
					id".$this->base." = :idtabla AND 
					eliminado = 0
			");
			$stmt->bindParam(':idtabla', $this->idtabla['valor'], PDO::PARAM_INT, $this->idtabla['longitud']);
			$stmt->bindParam(':activo', $this->activo['valor'], PDO::PARAM_INT, $this->activo['longitud']);
			$stmt->execute();

			if($stmt->rowCount() > 0) { 
				$stmt = $this->conectDB->conn->prepare("
					UPDATE 
						".$this->base." 
					SET  
						".$this->base."_data = JSON_SET(".$this->base."_data, '$.activo', '".($activo ? true : false)."') 
					WHERE 
						id".$this->base." = :idtabla AND 
						eliminado = 0
				");
				$stmt->bindParam(':idtabla', $this->idtabla['valor'], PDO::PARAM_INT, $this->idtabla['longitud']);
				$stmt->execute();
				return 1; 
			} else { 
				return 0; 
			}
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
	
	public function setTablaJSON($idtabla, $column, $valor){		
		$this->idtabla['valor'] = $idtabla;
		$validar = $this->validar->validarValores(array($this->idtabla));
		if(empty($validar)){
			
			
				$stmt = $this->conectDB->conn->prepare("
					UPDATE 
						".$this->base." 
					SET  
						".$this->base."_data = JSON_SET(".$this->base."_data, '$.".$column."', '".$valor."') 
					WHERE 
						id".$this->base." = :idtabla AND 
						eliminado = 0
				");
				$stmt->bindParam(':idtabla', $this->idtabla['valor'], PDO::PARAM_INT, $this->idtabla['longitud']);
				$stmt->execute();
				if($stmt->rowCount() > 0) { 
					return 1; 
				} else { 
					return 0; 
				}
			
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
	
	public function deleteTablaJSON($idtabla){		
		$this->idtabla['valor'] = $idtabla;
		$validar = $this->validar->validarValores(array($this->idtabla));
		if(empty($validar)){
			$stmt = $this->conectDB->conn->prepare("
				UPDATE 
					".$this->base." 
				SET 
					activo = 0,
					eliminado = 1
				WHERE 
					id".$this->base." = :idtabla
			");
			$stmt->bindParam(':idtabla', $this->idtabla['valor'], PDO::PARAM_INT, $this->idtabla['longitud']);
			$stmt->execute();
			if($stmt->rowCount() > 0) { return 1; } else { return 0; }
		} else {
			error_log(print_r($validar, TRUE));
			return -1;
		}
	}
	
}
?>