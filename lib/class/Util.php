<?php 
if (!defined('APPLICATION')) exit;

function utf8_converter($array){
	if(is_array($array)){
		array_walk_recursive($array, function(&$item, $key){
			if(!mb_detect_encoding($item, 'utf-8', true)){
					$item = utf8_encode($item);
			}
		});
	}
    return $array;
}
function get_client_ip(){
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP')) $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR')) $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED')) $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR')) $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED')) $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR')) $ipaddress = getenv('REMOTE_ADDR');
    else $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

function generarCodigo($longitud) {
	$key = '';
	$pattern = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ!;#$%&()*+-/:;=?@[]{}_';
	$max = strlen($pattern)-1;
	for($i=0;$i < $longitud;$i++) $key .= $pattern[mt_rand(0,$max)];
	return $key;
}
function generarCodigoNum($longitud) {
	$key = '';
	$pattern = '0123456789';
	$max = strlen($pattern)-1;
	for($i=0;$i < $longitud;$i++) $key .= $pattern[mt_rand(0,$max)];
	return $key;
}

function send_notification($tokens, $titulo = "TITULO", $mensaje = "MENSAJE", $id = "ID", $Authorization = ""){
	$url = 'https://fcm.googleapis.com/fcm/send';
	$fields = array(
		'registration_ids' => $tokens,
		'data' => array(
			'titulo' => $titulo,
			'mensaje' => $mensaje,
			'id' => $id,
		),
	);
	$headers = array(
		'Authorization:key = '.$Authorization,
		'Content-Type: application/json'
	);
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);  
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
	$result = curl_exec($ch);           
	if ($result === FALSE) {
	   die('Curl failed: ' . curl_error($ch));
	}
	curl_close($ch);
	return $result;
}

function formatoMoneda($cantidad){
	return "$".number_format($cantidad, 2, '.', ',');
}

function mesesEspanol($mes, $idioma){
	switch($idioma){
		case "es":
			$meses_espanol=array(
				'00'=>'',
				'01'=>'Enero',
				'02'=>'Febrero',
				'03'=>'Marzo',
				'04'=>'Abril',
				'05'=>'Mayo',
				'06'=>'Junio',
				'07'=>'Julio',
				'08'=>'Agosto',
				'09'=>'Septiembre',
				'10'=>'Octubre',
				'11'=>'Noviembre',
				'12'=>'Diciembre'
			);
			break;
		case "en":
			$meses_espanol=array(
				'00'=>'',
				'01'=>'January',
				'02'=>'February',
				'03'=>'March',
				'04'=>'April',
				'05'=>'May',
				'06'=>'June',
				'07'=>'July',
				'08'=>'August',
				'09'=>'September',
				'10'=>'October',
				'11'=>'November',
				'12'=>'December'
			);
			break;	
	}
	return $meses_espanol[$mes];
}

function diasEspanol($dia, $idioma){
	switch($idioma){
		case "es":
			$dias_espanol=array(
				'1'=>'Lunes',
				'2'=>'Martes',
				'3'=>'Miércoles',
				'4'=>'Jueves',
				'5'=>'Viernes',
				'6'=>'Sábado',
				'7'=>'Domingo',
			);
			break;
		case "en":
			$dias_espanol=array(
				'1'=>'Monday',
				'2'=>'Tuesday',
				'3'=>'Wednesday',
				'4'=>'Thursday',
				'5'=>'Friday',
				'6'=>'Saturday',
				'7'=>'Sunday',
			);
			break;
	}
	return $dias_espanol[$dia];
}

function mesesEspanolCorto($mes, $idioma){
	$mes = mesesEspanol($mes, $idioma);
	return substr($mes, 0, 3);
}


function trim_text($input, $length = 700, $ellipses = true, $strip_html = true) {
	if ($strip_html) {
		$input = strip_tags($input);
	}
	if (strlen($input) <= $length) {
		return $input;
	}
	$last_space = strrpos(substr($input, 0, $length), ' ');
	$trimmed_text = substr($input, 0, $last_space);
	if ($ellipses) {
		$trimmed_text .= '...';
	}
	return $trimmed_text;
}

function formatoFecha($fecha){
	$dia_1 = date('d',strtotime($fecha));
	$mes_1 = date('m',strtotime($fecha));
	$anio_1 = date('Y',strtotime($fecha));
	$horas_1 = date('H',strtotime($fecha));
	$min_1 = date('i',strtotime($fecha));
	$seg_1 = date('s',strtotime($fecha));
	return $dia_1.".".$mes_1.".".$anio_1;
}
function formatoFechaDiaMes($fecha, $idioma){
	$dia_1 = date('d',strtotime($fecha));
	$mes_1 = mesesEspanol(date('m',strtotime($fecha)), $idioma);
	$anio_1 = date('Y',strtotime($fecha));
	$horas_1 = date('H',strtotime($fecha));
	$min_1 = date('i',strtotime($fecha));
	$seg_1 = date('s',strtotime($fecha));
	return $dia_1." ".$mes_1;
}
function formatoFechaDiaMesAnio($fecha, $idioma){
	$dia_1 = date('d',strtotime($fecha));
	$mes_1 = mesesEspanol(date('m',strtotime($fecha)), $idioma);
	$anio_1 = date('Y',strtotime($fecha));
	$horas_1 = date('H',strtotime($fecha));
	$min_1 = date('i',strtotime($fecha));
	$seg_1 = date('s',strtotime($fecha));
	return $dia_1." de ".$mes_1.' de '.$anio_1;
}

function formatoFechaMesAnio($fecha, $idioma){
	$dia_1 = date('d',strtotime($fecha));
	$mes_1 = mesesEspanol(date('m',strtotime($fecha)), $idioma);
	$anio_1 = date('Y',strtotime($fecha));
	$horas_1 = date('H',strtotime($fecha));
	$min_1 = date('i',strtotime($fecha));
	$seg_1 = date('s',strtotime($fecha));
	return $mes_1.', '.$anio_1;
}

function formatoFechaDiaMesHora($fecha, $idioma){
	$dia_1 = date('d',strtotime($fecha));
	$mes_1 = mesesEspanol(date('m',strtotime($fecha)), $idioma);
	$anio_1 = date('Y',strtotime($fecha));
	$horas_1 = date('H',strtotime($fecha));
	$min_1 = date('i',strtotime($fecha));
	$seg_1 = date('s',strtotime($fecha));
	return $dia_1." ".$mes_1.', '.$anio_1.". ".$horas_1.":".$min_1." hrs.";
}

function formatoFechaDiaMesHoraMin($fecha, $idioma){
	$dia_1 = date('d',strtotime($fecha));
	$mes_1 = mesesEspanolCorto(date('m',strtotime($fecha)), $idioma);
	$anio_1 = date('Y',strtotime($fecha));
	$horas_1 = date('H',strtotime($fecha));
	$min_1 = date('i',strtotime($fecha));
	$seg_1 = date('s',strtotime($fecha));
	return $dia_1."-".$mes_1.'-'.$anio_1." ".$horas_1.":".$min_1;
}

function escapeJavaScriptText($string){
    return str_replace("\n", '\n', str_replace('"', '\"', addcslashes(str_replace("\r", '', (string)$string), "\0..\37'\\")));
}

function slugify($text){
	$text = preg_replace('~[^\pL\d]+~u', '-', $text);
  	$text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
  	$text = preg_replace('~[^-\w]+~', '', $text);
  	$text = trim($text, '-');
  	$text = preg_replace('~-+~', '-', $text);
  	$text = strtolower($text);
  	if (empty($text)) { return 'n-a'; }
  	return $text;
}

function hex2rgba($color, $opacity = false) {
	$default = 'rgb(0,0,0)';
	//Return default if no color provided
	if(empty($color))
          return $default; 
	//Sanitize $color if "#" is provided 
	if ($color[0] == '#' ) {
		$color = substr( $color, 1 );
	}
	//Check if color has 6 or 3 characters and get values
	if (strlen($color) == 6) {
			$hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
	} elseif ( strlen( $color ) == 3 ) {
			$hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
	} else {
			return $default;
	}
	//Convert hexadec to rgb
	$rgb =  array_map('hexdec', $hex);
	//Check if opacity is set(rgba or rgb)
	if($opacity){
		if(abs($opacity) > 1)
			$opacity = 1.0;
		$output = 'rgba('.implode(",",$rgb).','.$opacity.')';
	} else {
		$output = 'rgb('.implode(",",$rgb).')';
	}
	//Return rgb(a) color string
	return $output;
}

function parse_size($size) {
  $unit = preg_replace('/[^bkmgtpezy]/i', '', $size); // Remove the non-unit characters from the size.
  $size = preg_replace('/[^0-9\.]/', '', $size); // Remove the non-numeric characters from the size.
  if ($unit) {
    // Find the position of the unit in the ordered string which is the power of magnitude to multiply a kilobyte by.
    return round($size * pow(1024, stripos('bkmgtpezy', $unit[0])));
  }
  else {
    return round($size);
  }
}

function AddWorkingDays($startDate, $adddays){
  $retdate = $startDate;
  $sign = "+";
  if($adddays < 0){
    $adddays = $adddays*-1;
    $sign = "-";
  }
  while ($adddays > 0) {
    $retdate = date ( 'Y-m-d' , strtotime ( "$retdate {$sign}1 day" ) );
    $what_day = date("N", strtotime($retdate));
    if ( $what_day != 6 && $what_day != 7 ) {
    	$adddays--;
	}
  };
  return $retdate;
}

function search($array, $key, $value){
    $results = array();
    if (is_array($array)) {
        if (isset($array[$key]) && $array[$key] == $value) {
            $results[] = $array;
        }
        foreach ($array as $subarray) {
            $results = array_merge($results, search($subarray, $key, $value));
        }
    }
    return $results;
}

function isHTML($string){
	if($string != strip_tags($string)){ return true; }
	else { return false; }
}

function mask($str, $first, $last) {
    $len = strlen($str);
    $toShow = $first + $last;
    return substr($str, 0, $len <= $toShow ? 0 : $first).str_repeat("*", $len - ($len <= $toShow ? 0 : $toShow)).substr($str, $len - $last, $len <= $toShow ? 0 : $last);
}

function mask_email($email) {
	if(filter_var($email, FILTER_VALIDATE_EMAIL) !== false){
		$mail_parts = explode("@", $email);
		$domain_parts = explode('.', $mail_parts[1]);
	
		$mail_parts[0] = mask($mail_parts[0], 2, 1); // show first 2 letters and last 1 letter
		$domain_parts[0] = mask($domain_parts[0], 2, 1); // same here
		$mail_parts[1] = implode('.', $domain_parts);
	
		return implode("@", $mail_parts);
	} else {
		return NULL;	
	}
}

function youtube_id_from_url($url) {
	$pattern =
    '%^# Match any youtube URL
    (?:https?://)?  # Optional scheme. Either http or https
    (?:www\.)?      # Optional www subdomain
    (?:             # Group Host alternatives
      youtu\.be/    # Either youtu.be,
    | youtube\.com  # or youtube.com
      (?:           # Group path alternatives
        /embed/     # Either /embed/
      | /v/         # or /v/
      | .*v=        # or /watch\?v=
      )             # End path alternatives.
    )               # End Host alternatives.
    ([\w-]{10,12})  # Allow 10-12 for 11 char youtube id.
    ($|&).*         # if additional parameters are also in query string after video id.
    $%x'
    ;
	$result = preg_match($pattern, $url, $matches);
	if ($result) {
		return $matches[1];
	}
	return false;
}

function minToHrsMin($minutos) {
	$formato =  "";
	$horas = floor($minutos / 60);          
    $minutos = $minutos % 60;
	if($horas > 0){ $formato = str_pad($horas, 2, '0', STR_PAD_LEFT).":".str_pad($minutos, 2, '0', STR_PAD_LEFT)." hrs."; }
	else { $formato = str_pad($minutos, 2, '0', STR_PAD_LEFT)." min."; }
	return $formato;
}

function usuarioDatosBasicos($usuario_datos) {
	$usuario_datos = json_decode($usuario_datos, true); 
	$usuario_datos_arr = array(
		"nombre" => (isset($usuario_datos['nombre'])?$usuario_datos["nombre"]:''),
		"apellidos" => (isset($usuario_datos['apellidos'])?$usuario_datos["apellidos"]:''),
		"institucion" => (isset($usuario_datos['institucion'])?$usuario_datos["institucion"]:''),
		"estado" => (isset($usuario_datos['estado'])?$usuario_datos["estado"]:''),
		"estado_txt" => (isset($usuario_datos['estado_txt'])?$usuario_datos["estado_txt"]:''),
		"perfil" => (isset($usuario_datos['perfil'])?$usuario_datos["perfil"]:array()),
		"correo" => (isset($usuario_datos['correo'])?$usuario_datos["correo"]:''),
	);
	
	return $usuario_datos_arr;
}

function usuarioDatosLimpiar($usuario_datos) {
	
	return $usuario_datos;
}

function elementoFiltro($filtro){
	if($filtro != NULL){ 
		$temp = json_decode($filtro, true); 
		if (json_last_error() === JSON_ERROR_NONE) { $filtro = $temp; }
	}
	return $filtro;
}

function validarData($valor, $config){
	
	$ok = false;
	$info = '';
	
	$tipo = isset($config['tipo'])?$config['tipo']:NULL; 
	$validar = isset($config['validar'])?$config['validar']:NULL; 
	$nulo = isset($config['nulo'])?$config['nulo']:1; 
	$max = isset($config['max'])?$config['max']:NULL; 
	$leyenda = isset($config['leyenda'])?$config['leyenda']:''; 
	
	if(!is_null($valor) && (is_numeric($valor) || !empty(trim($valor))) && $valor != "null"){
		$valor = trim($valor);
		switch($tipo){
			case "url":
				if(filter_var(trim($valor), FILTER_VALIDATE_URL)){ $ok = true; } 
				else { $info = 'Dirección web inválida.'; }
				break;
			case "telefono":
				if(is_int($valor)){ 
					if(strlen($valor) == 10){ $ok = true; } 
					else { $info = '10 dígitos'; }
				} else { $info = 'Sólo números enteros'; }
				break;
			case "mail":
				if(filter_var($valor, FILTER_VALIDATE_EMAIL)){ $ok = true; } 
				else { $info = 'No válido.'; }
				break;
			case "numero":
				if(is_numeric($valor)){ $ok = true; } 
				else { $info = 'Sólo números'; }
				break;
			case "entero":
				if(filter_var($valor, FILTER_VALIDATE_INT)){ $ok = true; }  
				else { $info = 'Sólo números enteros'; }
				break;
			case "contrasena":
				if(strlen($valor) >= 8){ $ok = true; } 
				else { $info = 'Debe tener al menos 8 caracteres.'; }
				break;
			case "cp":
				if(filter_var($valor, FILTER_VALIDATE_INT)){
					if(strlen($valor) == 5){ $ok = true; } 
					else { $info = '5 dígitos'; }
				} else { $info = 'Sólo números enteros'; }
				break;
			case "anio":
				if(filter_var($valor, FILTER_VALIDATE_INT)){
					if(strlen($valor) == 4){ $ok = true; } 
					else { $info = '4 dígitos'; }
				} else { $info = 'Sólo números enteros'; }
				break;
			case "fecha":
				if(strtotime($valor)){
					$ok = true;
					$valor = date('Y-m-d', strtotime($valor));
				} else { $info = 'Debe ser una fecha válida'; }
				break;
			case "archivo":
				$valor = json_decode($valor, true);
				if (json_last_error() === JSON_ERROR_NONE) {
					if(count($valor["v"]) > 0){ $ok = true; }
					else { if($nulo == 1){ $ok = true; } }
					if($validar != NULL){
						foreach($valor["v"] as $key => $archivo){
								
						}
						foreach($valor["l"] as $key => $archivo){
								
						}
					} 
				}
				break;
			case "switch":
			case "check":
			case "radio":	
				$valor = json_decode($valor, true);
				if (json_last_error() === JSON_ERROR_NONE) {
					if(count($valor["v"]) > 0){ $ok = true; }
					else { if($nulo == 1){ $ok = true; } }
					if($validar != NULL){
						foreach($valor["v"] as $key => $archivo){
								
						}
						foreach($valor["e"] as $key => $archivo){
								
						}
					} 
				}
				break;
			case "objeto":	
					$valor = json_decode($valor, true);
					if (json_last_error() === JSON_ERROR_NONE) {
						$ok = true;
					}
					break;
			default:
				$ok = true;
				$valor = strip_tags($valor);
				break;
		}
		
		if($max != NULL){
			if(strlen($valor) > $max){
				$ok = false;
				$info = 'Debe tener una longitud máxima de: '.$max;
			}
		}
		
	} else {
		$valor = NULL;
		if($nulo == 1){ $ok = true; }
		else { $info = 'Campo obligatorio';  }
	}
	
	if($leyenda != ''){ $info = $leyenda.': '.$info; }
	return array(
		"ok" => $ok, 
		"valor" => $valor, 
		"info" => $info, 
	);
}

function seccionCalificaciones($calificaciones) {
	$seccion_tipo_arr = array();
	foreach($calificaciones as $llave => $calificacion){
		switch($llave){
			case 1:
				$seccion_tipo_arr["ingresar"] = array("c" => $calificacion, "i" => $llave, "m" => "Ingresar a la actividad.");
				break;
			case 2:
				$seccion_tipo_arr["comentarios"] = array("c" => $calificacion, "i" => $llave, "m" => "Realizar al menos un comentario.");
				break;
			case 3:
				$seccion_tipo_arr["archivos"] = array("c" => $calificacion, "i" => $llave, "m" => "Subir al menos un archivo.");
				break;
			case 4:
				$seccion_tipo_arr["enlaces"] = array("c" => $calificacion, "i" => $llave, "m" => "Dar clic en los enlaces.");
				break;
			case 5:
				$seccion_tipo_arr["descargas"] = array("c" => $calificacion, "i" => $llave, "m" => "Descargar al menos un documento de la actividad.");
				break;
			case 6:
				$seccion_tipo_arr["encuestas"] = array("c" => $calificacion, "i" => $llave, "m" => "Responder las preguntas.");
				break;
			case 7:
				$seccion_tipo_arr["didactica"] = array("c" => $calificacion, "i" => $llave, "m" => "");
				break;
			case 8:
				$seccion_tipo_arr["videos"] = array("c" => $calificacion, "i" => $llave, "m" => "Debes ver los videos hasta el final.");
				break;
			case 9:
				$seccion_tipo_arr["tiempo"] = array("c" => $calificacion, "i" => $llave, "m" => "Debes ver todo el contenido de la actividad.");
				break;
			case 10:
				$seccion_tipo_arr["actividad"] = array("c" => $calificacion, "i" => $llave, "m" => "Debes completar la actividad.");
				break;
		}
	}
	return $seccion_tipo_arr;
}

function avanceSeccionUsuario($secciones_usuario_obj, $seccion_tipo_arr, $dia = NULL, $now = NULL) {
	
	$atrasada = false;
	$completo = 0;
	$pct = 0;
	$tipos = array();
	$comentarios = NULL;
	$evaluacion = NULL;
	$fecha = NULL;
	
	foreach($seccion_tipo_arr as $tipo){ 
		$tipos[$tipo['i']] = array( "ok" => 0, "pct" => $tipo['c']); 
		switch($tipo['i']){
			case "2":
				$comentarios = 0;
				break;	
		}
		
	}
	
	foreach($secciones_usuario_obj as $key => $seccion_usuario){
		
		if($fecha == NULL or $fecha < $seccion_usuario['modificacion']){
			$fecha = $seccion_usuario['modificacion'];
		}
		
		if(isset($seccion_tipo_arr[$seccion_usuario['seccion_tipo']])){			
			if($seccion_usuario['seccion_tipo'] == "comentarios"){
				if($comentarios == NULL){ $comentarios = 0; }
				$comentarios++;	
			}			
			switch($seccion_usuario['seccion_tipo']){
				case "encuestas":
					$calificacion = intval($seccion_usuario['calificacion']);
					$evaluacion = true;
					if($tipos[$seccion_tipo_arr[$seccion_usuario['seccion_tipo']]['i']]["ok"] == 0){
						$pct += ( $calificacion * $seccion_tipo_arr[$seccion_usuario['seccion_tipo']]['c'] ) / 100;		
					}
					break;
				case "enlaces":
				case "videos":
					$calificacion = intval($seccion_usuario['calificacion']);
					$pct = intval($seccion_usuario['calificacion']);
					
					break;
				default:
					if($tipos[$seccion_tipo_arr[$seccion_usuario['seccion_tipo']]['i']]["ok"] == 0){
						$pct += $seccion_tipo_arr[$seccion_usuario['seccion_tipo']]['c'];		
					}
					break;
			}			
			$tipos[$seccion_tipo_arr[$seccion_usuario['seccion_tipo']]['i']]["ok"] = 1;
		} 
	}
	
	if($pct == 100){ $completo = 1; }
	if($evaluacion != NULL){
		if($pct >= 70){ $completo = 1; }		
	}
	if($dia != NULL and $now != NULL){ if($completo == 0 and $dia < $now) { $atrasada = true; } }
	
	return array(
		"atrasada" => $atrasada,
		"completo" => $completo,
		"pct" => $pct,
		"tipos" => $tipos,
		"fecha" => $fecha,
	);
}

function tiempoPromedio($usuario){
	$usuarioIngresoClass = new UsuarioIngreso();
	$total_ingreso = 0;
	$promedio_ingreso = "00:00:00"; 
	$total_tiempo = "00:00:00";
	
	$usuarioIngreso = $usuarioIngresoClass->getUsuarioIngreso($usuario['idusuario']);
	if(is_array($usuarioIngreso) and !empty($usuarioIngreso)){ 
		
		$segundos_suma = 0;
		$usuarioIngreso = json_decode($usuarioIngreso['usuario_ingreso'], true); 
		
		foreach($usuarioIngreso as $ingreso){ 
		
			$fecha_ini = str_split($ingreso['fi'], 2);
			if($ingreso['ff'] != ""){ $fecha_fin = $ingreso['ff']; }
			else { $fecha_fin = $ingreso['ft']; }
			
			if($fecha_fin != ""){
				$formato_ini = (count($fecha_ini) == 5)?'ymdHi':'ymdHis';
				$formato_ini_seg = (count($fecha_ini) == 5)?'00':$fecha_ini[5];
				$formato_fin = str_split($fecha_fin, 2);
				$formato_fin = (count($formato_fin) == 5)?'ymdHi':'ymdHis';	
				$back = DateTime::createFromFormat($formato_ini, $ingreso['fi']);
				$now = DateTime::createFromFormat($formato_fin, $fecha_fin);
				
				$segundos = $now->getTimestamp() - $back->getTimestamp();
				$total_ingreso++;	
				$segundos_suma += $segundos;
			}	
								
		}
		
		if($total_ingreso > 0){ 
			$total_tiempo = gmdate("H:i:s", $segundos_suma); 
			$promedio_ingreso = gmdate("H:i:s", $segundos_suma / $total_ingreso); 
		} 
	}
	
	return array("total" => $total_ingreso, "promedio" => $promedio_ingreso, "suma" => $total_tiempo);
}

function formatBytes($bytes, $precision = 2) { 
    $units = array('B', 'KB', 'MB', 'GB', 'TB'); 
   
    $bytes = max($bytes, 0); 
    $pow = floor(($bytes ? log($bytes) : 0) / log(1024)); 
    $pow = min($pow, count($units) - 1); 
   
    // Uncomment one of the following alternatives
    $bytes /= pow(1024, $pow);
    // $bytes /= (1 << (10 * $pow)); 
   
    return round($bytes, $precision) . $units[$pow]; 
} 
?>