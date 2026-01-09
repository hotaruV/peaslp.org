<?php 
if (!defined('APPLICATION')) exit;

class Validar {   		
	private $tipo;
	public $mensaje;
			
	public function __construct(){  
		$this->mensaje = "Ingrese correctamente los siguientes datos: "	;
		$this->tipo = array();
		$this->tipo['entero'] = array(1, FALSE);
		$this->tipo['numero'] = array(2, FALSE);
		$this->tipo['flotante'] = array(3, FALSE);
		$this->tipo['correo'] = array(4, TRUE);
		$this->tipo['fecha'] = array(5, TRUE);
		$this->tipo['texto'] = array(6, TRUE);
		$this->tipo['verdadero'] = array(7, FALSE);
		$this->tipo['imagen'] = array(8, TRUE);
		$this->tipo['url'] = array(9, TRUE);
		$this->tipo['imagenUnico'] = array(10, TRUE);
		$this->tipo['paginaWeb'] = array(11, TRUE);
		$this->tipo['archivoWeb'] = array(12, TRUE);
		$this->tipo['documento'] = array(13, TRUE);
		$this->tipo['horas'] = array(14, TRUE);
		$this->tipo['ip'] = array(15, TRUE);
		$this->tipo['alphanumerico'] = array(16, TRUE);
		$this->tipo['archivoUnico'] = array(17, TRUE);
		$this->tipo['fecha_completa'] = array(18, TRUE);
  	}
	
	public function __destruct(){  
		unset($this->tipo);
		unset($this->mensaje);
	} 
	
	public function comillas($tipo){
		return $this->tipo[$tipo][1];
	}

	public function validar($item){  
	
		//print_r($item);
		$res = array();
		/* NULO */
		if($item['nulo'] == 0){
			$res = $this->obligatorio($item['valor']);
			if( !$res['valido'] ){ return $res; }
		}
		/* LONGITUD */
		if($item['longitud'] != NULL){
			$res = $this->longitud($item['valor'], $item['longitud']);
			if( !$res['valido'] ){ return $res; } 
		}
		/* NULOS Y VACIOS */
		if((trim($item['valor']) == '' or $item['valor'] == 'NULL') and $item['nulo'] == 1){
			return array('valido' => TRUE, 'descripcion' => '');
		}
		/* TIPO DE DATO */	
	
		switch($this->tipo[$item['tipo']][0]){
			case 1:
				$res = $this->entero($item['valor']);
				break;
			case 2:
				$res = $this->numero($item['valor']);
				break;
			case 3:
				$res = $this->flotante($item['valor']);
				break;
			case 4:
				$res = $this->correo($item['valor']);
				break;
			case 5:
				$res = $this->fecha($item['valor']);
				break;
			case 6:
				$res = $this->texto($item['valor']);
				break;
			case 7:
				$res = $this->verdadero($item['valor']);
				break;
			case 8:
				$res = $this->imagen($item['valor']);
				break;
			case 9:
				$res = $this->url($item['valor']);
				break;
			case 10:
				$res = $this->imagenUnico($item['valor'], $item['identificador']);
				break;
			case 11:
				$res = $this->paginaWeb($item['valor']);
				break;
			case 12:
				$res = $this->archivoWeb($item['valor']);
				break;
			case 13:
				$res = $this->documento($item['valor']);
				break;
			case 14:
				$res = $this->horas($item['valor']);
				break;
			case 15:
				$res = $this->ipV($item['valor']);
				break;
			case 16:
				$res = $this->alphanumerico($item['valor']);
				break;
			case 17:
				$res = $this->archivoUnico($item['valor'], $item['identificador']);
				break;	
			case 18:
				$res = $this->fecha_completa($item['valor']);
				break;
			default:
				$res = NULL;
				break;
		}
		return $res;

	}  
	protected function obligatorio($valor){
		return array('valido' => (trim($valor) != '' ), 'descripcion' => 'es un campo obligatorio.');
	}
	protected function longitud($valor, $longitud){
		return array('valido' => (strlen($valor) <= $longitud), 'descripcion' => 'debe tener una longitud máxima de: '.$longitud. ' '.(($longitud != 1)?'caracteres':'caracter'));
	}
	protected function entero($valor){
		return array('valido' => preg_match( '/^\d*$/', $valor), 'descripcion' => 'debe ser un número entero.');
	}
	protected function numero($valor){
		return array('valido' => is_numeric($valor), 'descripcion' => 'debe ser un número.');
	}
	protected function flotante($valor){
		return array('valido' => is_float($valor), 'descripcion' => 'debe ser un número flotante.');
	}
	protected function correo($valor){
		//return array('valido' => ereg('^[a-zA-Z0-9]+([\.]?[a-zA-Z0-9_-]+)*@'.'[a-zA-Z0-9]+([\.-]+[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$', $valor), 'descripcion' => 'debe ser un correo electrónico válido');
		//return array('valido' => preg_match('/^[a-zA-Z0-9]+([\.]?[a-zA-Z0-9_-]+)*@'.'[a-zA-Z0-9]+([\.-]+[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/', $valor), 'descripcion' => 'debe ser un correo electrónico válido');
		//return array('valido' => preg_match('/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/', $valor), 'descripcion' => 'debe ser un correo electrónico válido');
		return array('valido' => filter_var($valor, FILTER_VALIDATE_EMAIL), 'descripcion' => 'debe ser un correo electrónico válido');
	}
	protected function fecha($valor){
		/*$valorD = explode("-", $valor);
		return array('valido' => ( preg_match('/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/', $valor) and checkdate($valorD[1], $valorD[2], $valorD[0]) ), 'descripcion' => 'debe ser una fecha válida y con el formato: YYYY-MM-DD');*/
		$resultado = $this->validateDate($valor, $format = 'Y-m-d');
		return array('valido' => ($resultado), 'descripcion' => 'debe ser una fecha válida y con el formato: YYYY-MM-DD');
	}
	protected function fecha_completa($valor){
		$resultado = $this->validateDate($valor, $format = 'Y-m-d H:i:s');
		return array('valido' => ($resultado), 'descripcion' => 'debe ser una fecha válida y con el formato: YYYY-MM-DD 24H:min:seg');
	}
	
	function validateDate($date, $format = 'Y-m-d H:i:s'){
		$d = new DateTime(date($format, strtotime($date)));
    	//$d = DateTime::createFromFormat($format, $date);
    	return $d && $d->format($format) == $date;
	}
	
	protected function horas($valor){
		//return array('valido' => ( ereg('([0-9]{2}):([0-5][0-9])', $valor) ), 'descripcion' => 'debe ser una hora válida y con el formato: HH:MM');
		return array('valido' => preg_match('/([0-9]{2}):([0-5][0-9])/', $valor), 'descripcion' => 'debe ser una hora válida y con el formato: HH:MM');
	}
	protected function texto($valor){
		return array('valido' => 1, 'descripcion' => 'debe de ingresar un texto');
	}
	protected function alphanumerico($valor){
		return array('valido' => preg_match('/^[\w\-]+$/', $valor), 'descripcion' => 'debe ser alphanumerico');
	}
	protected function verdadero($valor){
		//return array('valido' => ereg('^0|1{1}$', $valor), 'descripcion' => 'debe ser 1 ó 0');
		return array('valido' => preg_match('/^0|1{1}$/', $valor), 'descripcion' => 'debe ser 1 ó 0');
	}
	protected function imagen($valor){
		//return array('valido' => eregi(".(jpg|jpeg|gif|png|bmp|swf)$", $valor), 'descripcion' => 'debe ser un archivo con la extensión: jpg, jpeg, gif, bmp, png, swf');
		return array('valido' => preg_match("/.(jpg|jpeg|gif|png|bmp|swf)$/", strtolower($valor)), 'descripcion' => 'debe ser un archivo con la extensión: jpg, jpeg, gif, bmp, png, swf');
	}
	protected function imagenUnico($valor, $identificador){
		//$valido = eregi(".(jpg|jpeg|gif|png|bmp)$", $valor);
		$valido = preg_match("/.(jpg|jpeg|gif|png|bmp)$/", strtolower($valor));
		$descripcion = "debe ser un archivo con la extensión: jpg, jpeg, gif, bmp, png";
		if($valido){
			return array('valido' => $valido, 'descripcion' => $descripcion);
			/*$limit_size = 2097152;
			//echo $_FILES[$identificador]['size'];
			$file_size = $_FILES[$identificador]['size'];
			if($file_size != 0 and $file_size <= $limit_size){
				return array('valido' => true, 'descripcion' => "debe ser un archivo con un peso menor de 2MB");
			} else {
				return array('valido' => false, 'descripcion' => "debe ser un archivo con un peso menor de 2MB");
			}*/
		} else {
			return array('valido' => $valido, 'descripcion' => $descripcion);
		}
	}
	protected function archivoUnico($valor, $identificador){
		$valido = preg_match("/.(wav|mp3)$/", strtolower($valor));
		$descripcion = "debe ser un archivo con la extensión: mp3|mp4|jpg|jpeg|png";
		if($valido){
			return array('valido' => $valido, 'descripcion' => $descripcion);
		} else {
			return array('valido' => $valido, 'descripcion' => $descripcion);
		}
	}
	protected function paginaWeb($valor){
		//return array('valido' => eregi(".(html|htm|php)$", $valor), 'descripcion' => 'debe ser un archivo con la extensión: html, htm, php');
		return array('valido' => preg_match("/.(html|htm|php)$/i", $valor), 'descripcion' => 'debe ser un archivo con la extensión: html, htm, php');
	}
	protected function archivoWeb($valor){
		//return array('valido' => eregi(".(jpg|jpeg|gif|png|bmp|swf|html|htm|php|xml|css|js|doc|docx|pdf)$", $valor), 'descripcion' => 'debe ser un archivo con la extensión: jpg, jpeg, gif, bmp, png, swf, html, htm, php, xml, css, js, doc, docx, pdf');
		return array('valido' => preg_match("/.(jpg|jpeg|gif|png|bmp|swf|html|htm|php|xml|css|js|doc|docx|pdf)$/i", $valor), 'descripcion' => 'debe ser un archivo con la extensión: jpg, jpeg, gif, bmp, png, swf, html, htm, php, xml, css, js, doc, docx, pdf');
	}
	protected function documento($valor){
		//return array('valido' => eregi(".(doc|docx|pdf)$", $valor), 'descripcion' => 'debe ser un archivo con la extensión: doc, docx, pdf');
		return array('valido' => preg_match("/.(doc|docx|pdf|xls|xlsx|ppt|pptx)$/i", $valor), 'descripcion' => 'debe ser un archivo con la extensión: doc, docx, pdf, xls, xlsx, ppt, pptx');
	}
	protected function url($valor){
		return array('valido' => preg_match('/^(http|https|ftp):\/\/([A-Z0-9][A-Z0-9_-]*(?:\.[A-Z0-9][A-Z0-9_-]*)+):?(\d+)?\/?/i', $valor), 'descripcion' => 'debe ser una dirección web válida.');
	}
	protected function ipV($valor){
		$validacion ="/^([1-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-5]))\.";
		$validacion .="([0-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-5]))\.";
		$validacion .="([0-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-5]))\.";
		$validacion .="([1-9]|[1-9][0-9]|1([0-9][0-9])|2([0-4][0-9]|5[0-4]))$/";		
		//return array('valido' => ereg($validacion,$valor), 'descripcion' => 'debe ser un formato de IP válido con el formato: 1.1.1.1');
		return array('valido' => preg_match($validacion,$valor), 'descripcion' => 'debe ser un formato de IP válido con el formato: 1.1.1.1');
	}
	public function validarValores($valores){
		$error = array();
		$validacion = array();
		foreach ($valores as $ident => $dato ) {
			$validacion[$ident] = $this->validar($dato);
			if(!$validacion[$ident]['valido']){
				$error['error'][] = $dato['titulo'].": ".$validacion[$ident]['descripcion'].$ident;
			}
		}
		if(empty($error)) {
			return $error;
		} else {
			
			array_unshift($error['error'], $this->mensaje."-".$_SERVER["SCRIPT_FILENAME"]);
			array_unshift($error['error'], print_r(debug_backtrace(), TRUE));
			return $error['error'];
			
		}
	}
}
?>