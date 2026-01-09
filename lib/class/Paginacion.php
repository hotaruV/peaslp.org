<?php
if (!defined('APPLICATION')) exit;
class Paginacion {
	private $tamano;
	private $registros;
	private $paginas;
	private $pagina_actual;
	private $pagina_limit;

	public function __construct(){
		$this->tamano = 20;
	}
	public function __destruct(){
		$this->tamano = NULL;
		$this->registros = NULL;
		$this->paginas = NULL;
		$this->pagina_actual = NULL;
		$this->pagina_limit = NULL;
	}
	
	public function paginacion($registros, $pagina_actual = 1, $orden = NULL, $tamano = NULL){
		$this->pagina_actual = $pagina_actual;
		$this->registros = $registros;
		$this->tamano = ($tamano != NULL)? $tamano : $this->tamano;
		$this->paginas = ceil($this->registros / $this->tamano);
		$this->pagina_limit = ($this->pagina_actual - 1) * $this->tamano;
		
		$orden = ($orden != NULL) ? " ORDER BY ".$orden : "";
		$limite = " LIMIT ".$this->pagina_limit.",".$this->tamano;
		return array('orden'=>$orden, 'limite'=>$limite);
	}
	public function imprimir($urlLiga, $quitar = array()){
		$textHtml = "";
		if($this->paginas <= 1) { return "&nbsp;"; }
		$total = 6;
		$media = $total / 2;
		$min = $this->pagina_actual - $media;
		if($min < 1){ $min = 1; }
		$subtotal = $total - ($this->pagina_actual - $min);
		$max = $this->pagina_actual + $subtotal;
		if($max > $this->paginas){ $max = $this->paginas; }
		$textHtml = '<div class="paginacion">';
		
		$query_string = $_SERVER['QUERY_STRING'];
		$query_string = $this->remove_querystring_var($query_string, $quitar);
		
		$query_string = preg_replace('/(^|&)pag=[0-9]{1,}(&|$)/', "",$query_string);
		if($query_string != ''){ $query_string = $query_string."&"; }
		$query_string = "?".$query_string;
		//$paginaUrl = $_SERVER['PHP_SELF'];
		$paginaUrl = $urlLiga;
		if($paginaUrl == "/index.php"){ $paginaUrl = ""; }
		$temp = $query_string;
		if($query_string == "?"){
			$temp = "";
		} else {
			$temp = substr($query_string, 0, strlen($query_string)-1);
		}
		
		if($this->pagina_actual != 1 ){ 
			$textHtml .= '<a href="'.$paginaUrl.$temp.'"> &laquo; </a>'; 
		} else { 
			$textHtml .= '<span class="span"> &laquo; </span>'; 
		}
		if($this->pagina_actual != 1){ 
			if($this->pagina_actual-1 == 1){
				$textHtml .= '<a href="'.$paginaUrl.$temp.'"> &lsaquo; </a>';
			} else {
				$textHtml .= '<a href="'.$paginaUrl.$query_string.'pag='.($this->pagina_actual-1).'"> &lsaquo; </a>'; 
			}
		} else {  
			$textHtml .= '<span class="span"> &lsaquo; </span>'; 
		}
		for($i=$min; $i<=$max; $i++){ 
			$direccion = $paginaUrl.$temp;
			if($i != 1){ $direccion = $paginaUrl.$query_string.'pag='.$i; }
			$textHtml .= ($this->pagina_actual == $i) ? '<span>'.$i.'</span>' : '<a href="'.$direccion.'">'.$i.'</a>'; 
		}
		
		if($this->pagina_actual != $this->registros and ($this->pagina_actual + 1) <= $this->paginas ){ $textHtml .= '<a href="'.$paginaUrl.$query_string.'pag='.($this->pagina_actual+1).'" class="span"> &rsaquo; </a>'; } else { $textHtml .= '<span class="span"> &rsaquo; </span>'; }
		if($this->pagina_actual != $this->paginas and $this->paginas > 0  ){ $textHtml .= ' <a href="'.$paginaUrl.$query_string.'pag='.$this->paginas.'" class="span"> &raquo; </a> '; } else { $textHtml .= '<span class="span"> &raquo; </span>'; }
		$textHtml .= '</div> ';
		return $textHtml;
	}
	
	function remove_querystring_var($url, $quitar) {
		if (is_array($quitar)){
			foreach($quitar as $key){
				parse_str($url, $result_array);
				unset($result_array[$key]);
				$url = http_build_query($result_array);
			}
		}
		return $url;
	}
}
?>