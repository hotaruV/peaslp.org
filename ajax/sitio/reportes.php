<?php
define('APPLICATION', true);

require_once "../../lib/class/Validar.php";
require_once "../../lib/class/Util.php";
require_once "../../lib/class/ConectarDB.php";

require_once "../../part/config.php";
require_once "../../part/gnl/variables.php";
require_once "../../part/gnl/idioma.php";

$idioma = "es";
$url_lang = "";

require_once "../../lib/model/Usuario.php";
require_once "../../lib/model/UsuarioDispositivo.php";
require_once "../../lib/model/UsuarioDispositivoAcceso.php";
require_once "../../lib/model/UsuarioIngreso.php";

$usuarioClass = new Usuario();
$usuarioDispositivoClass = new UsuarioDispositivo();
$usuarioDispositivoAccesoClass = new UsuarioDispositivoAcceso();
$usuarioIngresoClass = new UsuarioIngreso();

require_once "../../part/gnl/login/verificar_login_ajax.php";
require_once "../../part/gnl/login/verificar_login_ingreso.php";
require_once "../../part/gnl/login/verificar_login_ajax_sesion.php";

header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');

$arreglos = array();

if (isset($_POST) && isset($_POST['token'])) {

	require_once "../../lib/model/TablaJSON.php";

	$vars = array(
		'idperiodo' => array("leyenda" => "Periodo", "tipo" => "entero", "nulo" => 0),
		'tipo'      => array("leyenda" => "Tipo", "tipo" => "texto", "nulo" => 0), // lineas|indicadores
	);

	$error_post = 0;
	$reportes_post = array();
	foreach ($vars as $key => $var) {
		if (isset($_POST[$key])) {
			$reportes_post[$key] = $_POST[$key];
		} else {
			$error_post = 1;
		}
	}

	if ($error_post == 0) {

		$reportes_data = array();
		$error = array();

		foreach ($vars as $key => $var) {
			$ok = false;
			$info = '';

			if (isset($reportes_post[$key])) {
				$validacion = validarData($reportes_post[$key], $var);
				if ($validacion["ok"]) {
					$ok = true;
					$reportes_data[$key] = $validacion["valor"];
				} else {
					$info = $validacion["info"];
				}
			} else {
				$info = 'No se recibió el dato.';
			}

			if (!$ok) {
				$error[$key] = $info;
			}
		}

		if (empty($error)) {

			$metas_al_global = array();

			$periodoClass  = new TablaJSON("periodo");
			$actorClass    = new TablaJSON("actor");
			$capturaClass  = new TablaJSON("captura");
			$revisionClass = new TablaJSON("revision");
			$elementoClass = new TablaJSON("elemento");

			$tipo = NULL;
			if ($reportes_data["tipo"] == "lineas") {
				$tipo = 'linea';
			} else if ($reportes_data["tipo"] == "indicadores") {
				// si en tu BD este valor es distinto, cámbialo aquí
				$tipo = 'captura';
			}

			$idperiodo = (int)$reportes_data["idperiodo"];

			$periodo = $periodoClass->getTablaJSONID($idperiodo);
			if (is_array($periodo) && !empty($periodo)) {

				$periodo["periodo_data"] = json_decode($periodo["periodo_data"], true);

				$municipios = json_decode($actorClass->municipios, true);
				if (!is_array($municipios)) {
					$municipios = array();
				}

				// =========================
				// FIX: Index municipios por id (evita foreach gigante y errores raros)
				// =========================
				$municipiosIndex = array();
				foreach ($municipios as $m) {
					if (!isset($m['id'])) continue;
					$municipiosIndex[(string)$m['id']] = isset($m['municipio']) ? $m['municipio'] : null;
				}

				// Actores activos
				$actores = $actorClass->getTablaJSONs(
					" AND activo = 1 ",
					" CAST(JSON_UNQUOTE(JSON_EXTRACT(actor_data, '$.actor')) AS CHAR) ASC "
				);

				// =========================
				// Helpers null seguro (JSON null vs "null")
				// =========================
				if (!function_exists('_normNull')) {
					function _normNull($v)
					{
						if ($v === null) return 'null';
						$s = is_string($v) ? trim($v) : trim((string)$v);
						if ($s === '' || strtolower($s) === 'null') return 'null';
						return $s;
					}
				}

				if (!function_exists('_makeKey')) {
					function _makeKey($actor, $muni, $cat, $ele)
					{
						$muniKey = _normNull($muni); // 'null' o id
						$catKey  = (_normNull($cat) === 'null') ? '' : _normNull($cat);
						$eleKey  = (_normNull($ele) === 'null') ? '' : _normNull($ele);
						return (string)$actor . '|' . $muniKey . '|' . $catKey . '|' . $eleKey;
					}
				}

				// =========================
				// NUEVO: contar estados dentro del JSON "lineas"
				// - Para 'linea' y para 'captura' funciona igual (si trae lineas).
				// - Si no trae lineas, queda en 0 sin reventar.
				// =========================
				if (!function_exists('_countEstadosLineas')) {
					function _countEstadosLineas($capturaDataDecoded)
					{
						$out = array(
							'total_lineas' => 0,
							'cumplidas' => 0,
							'no_cumplidas' => 0,
							'sin_estado' => 0,
						);

						if (!is_array($capturaDataDecoded)) return $out;
						if (!isset($capturaDataDecoded['lineas']) || !is_array($capturaDataDecoded['lineas'])) return $out;

						foreach ($capturaDataDecoded['lineas'] as $lineaObj) {
							$out['total_lineas']++;

							$estado = null;
							if (isset($lineaObj['cumplio']['v'][0])) $estado = (string)$lineaObj['cumplio']['v'][0];

							if ($estado === '1') $out['cumplidas']++;
							else if ($estado === '2') $out['no_cumplidas']++;
							else $out['sin_estado']++;
						}

						return $out;
					}
				}

				// =========================
				// Batch: capturas del periodo/tipo
				// =========================
				$capturasRows = $capturaClass->getTablaJSONs("
                    AND activo = 1
                    AND captura = '" . $tipo . "'
                    AND JSON_UNQUOTE(JSON_EXTRACT(captura_data, '$.periodo')) = " . $idperiodo . "
                ", " fecha DESC ");

				$capturasIndex = array();
				$capturasStats = array(); // key => counts

				foreach ($capturasRows as $row) {
					$d = json_decode($row['captura_data'], true);
					if (!is_array($d)) {
						continue;
					}

					$a = isset($d['actor']) ? (string)$d['actor'] : '';
					if ($a === '') {
						continue;
					}

					$muni = $d['actor_municipio'] ?? null; // puede ser null real
					$cat  = $d['actor_catalogo'] ?? null;
					$ele  = $d['actor_elemento'] ?? null;

					$key = _makeKey($a, $muni, $cat, $ele);

					// más reciente por combinación
					if (!isset($capturasIndex[$key])) {
						$row['captura_data'] = $d; // decodificado
						$capturasIndex[$key] = $row;
						$capturasStats[$key] = _countEstadosLineas($d);
					}
				}

				// =========================
				// Batch: revisiones del periodo/tipo
				// =========================
				$revisionesRows = $revisionClass->getTablaJSONs("
                    AND activo = 1
                    AND revision = '" . $tipo . "'
                    AND JSON_UNQUOTE(JSON_EXTRACT(revision_data, '$.periodo')) = " . $idperiodo . "
                ", " fecha DESC ");

				$revisionesIndex = array();
				foreach ($revisionesRows as $row) {
					$d = json_decode($row['revision_data'], true);
					if (!is_array($d)) {
						continue;
					}

					$a = isset($d['actor']) ? (string)$d['actor'] : '';
					if ($a === '') {
						continue;
					}

					$muni = $d['actor_municipio'] ?? null;
					$cat  = $d['actor_catalogo'] ?? null;
					$ele  = $d['actor_elemento'] ?? null;

					$key = _makeKey($a, $muni, $cat, $ele);

					if (!isset($revisionesIndex[$key])) {
						$row['revision_data'] = $d;
						$revisionesIndex[$key] = $row;
					}
				}

				// =========================
				// Armar estructura por actor (MISMA salida que tu original)
				// + FIX: agrega totales planos para DataTable:
				//   total_lineas, cumplidas, no_cumplidas, sin_estado
				// =========================
				foreach ($actores as $keyActor => $actor) {

					$actores[$keyActor]['actor_data'] = json_decode($actores[$keyActor]['actor_data'], true);
					$data = $actores[$keyActor]['actor_data'];

					$municipioFlag = false;
					$catalogosFlag = false;

					if (isset($data["municipios"]["v"][0]) && (int)$data["municipios"]["v"][0] === 1) {
						$municipioFlag = true;
					}
					if (isset($data["catalogos"]["v"][0]) && (int)$data["catalogos"]["v"][0] === 1) {
						$catalogosFlag = true;
					}

					$actores[$keyActor]["municipios"] = $municipioFlag;
					$actores[$keyActor]["catalogos"] = $catalogosFlag;

					// FIX: inicializa totales SIEMPRE (para que no queden "--")
					$actores[$keyActor]["total_lineas"] = 0;
					$actores[$keyActor]["cumplidas"] = 0;
					$actores[$keyActor]["no_cumplidas"] = 0;
					$actores[$keyActor]["sin_estado"] = 0;

					$idactor = (string)$actor['idactor'];

					if ($municipioFlag) {

						$actores[$keyActor]['captura'] = array();
						$actores[$keyActor]['revision'] = array();

						foreach ($municipiosIndex as $mid => $muniNombre) {
							$key = _makeKey($idactor, $mid, null, null);

							if (isset($capturasIndex[$key])) {
								$actores[$keyActor]['captura'][$mid] = array(
									"municipio" => $muniNombre,
									"captura" => $capturasIndex[$key]
								);

								// Suma totales de esa combinación (YA filtrada a la más reciente)
								if (isset($capturasStats[$key])) {
									$actores[$keyActor]["total_lineas"] += (int)$capturasStats[$key]['total_lineas'];
									$actores[$keyActor]["cumplidas"]    += (int)$capturasStats[$key]['cumplidas'];
									$actores[$keyActor]["no_cumplidas"] += (int)$capturasStats[$key]['no_cumplidas'];
									$actores[$keyActor]["sin_estado"]   += (int)$capturasStats[$key]['sin_estado'];
								}
							}

							if (isset($revisionesIndex[$key])) {
								$actores[$keyActor]['revision'][$mid] = array(
									"municipio" => $muniNombre,
									"revision" => $revisionesIndex[$key]
								);
							}
						}
					} else if ($catalogosFlag) {

						$actores[$keyActor]['captura'] = array();
						$actores[$keyActor]['revision'] = array();

						$catalogoPertenece = $data["catalogo_pertenece"];

						$elementos = $elementoClass->getTablaJSONs(" 
                            AND activo = 1 
                            AND JSON_UNQUOTE(JSON_EXTRACT(elemento_data, '$.catalogo')) = " . $catalogoPertenece . "
                        ", " CAST(JSON_UNQUOTE(JSON_EXTRACT(elemento_data, '$.elemento')) AS CHAR) ASC ");

						foreach ($elementos as $item) {
							$item['elemento_data'] = json_decode($item['elemento_data'], true);

							$idelemento = (string)$item["idelemento"];
							$nombreElemento = $item['elemento_data']["elemento"];

							// CLAVE: municipio = null, pero catalogo/elemento con valor
							$key = _makeKey($idactor, null, $catalogoPertenece, $idelemento);

							$actores[$keyActor]['captura'][$idelemento] = array(
								"idcatalogo" => $catalogoPertenece,
								"idelemento" => $idelemento,
								"elemento" => $nombreElemento,
								"captura" => isset($capturasIndex[$key]) ? $capturasIndex[$key] : NULL
							);

							$actores[$keyActor]['revision'][$idelemento] = array(
								"idcatalogo" => $catalogoPertenece,
								"idelemento" => $idelemento,
								"elemento" => $nombreElemento,
								"revision" => isset($revisionesIndex[$key]) ? $revisionesIndex[$key] : NULL
							);

							// Suma totales (si hay captura real)
							if (isset($capturasStats[$key])) {
								$actores[$keyActor]["total_lineas"] += (int)$capturasStats[$key]['total_lineas'];
								$actores[$keyActor]["cumplidas"]    += (int)$capturasStats[$key]['cumplidas'];
								$actores[$keyActor]["no_cumplidas"] += (int)$capturasStats[$key]['no_cumplidas'];
								$actores[$keyActor]["sin_estado"]   += (int)$capturasStats[$key]['sin_estado'];
							}
						}
					} else {

						// NORMAL real: municipio null, catalogo null, elemento null
						$key = _makeKey($idactor, null, null, null);

						if (isset($capturasIndex[$key])) {
							$actores[$keyActor]['captura'] = $capturasIndex[$key];

							if (isset($capturasStats[$key])) {
								$actores[$keyActor]["total_lineas"] = (int)$capturasStats[$key]['total_lineas'];
								$actores[$keyActor]["cumplidas"]    = (int)$capturasStats[$key]['cumplidas'];
								$actores[$keyActor]["no_cumplidas"] = (int)$capturasStats[$key]['no_cumplidas'];
								$actores[$keyActor]["sin_estado"]   = (int)$capturasStats[$key]['sin_estado'];
							}
						}
						if (isset($revisionesIndex[$key])) {
							$actores[$keyActor]['revision'] = $revisionesIndex[$key];
						}
					}

					// Tu función original (intacta)
					$respuesta = lineas_indicadores_actor($actor['idactor']);

					$actores[$keyActor]['lineas'] = $respuesta["lineas"];
					$actores[$keyActor]['indicadores'] = $respuesta["indicadores"];

					foreach ($respuesta["metas_al_arr"] as $llave3 => $meta) {
						if (!isset($metas_al_global[$llave3])) {
							$metas_al_global[$llave3] = $meta;
						}
					}
				}

				$arreglos["actores"] = $actores;
				$arreglos["metas_al"] = $metas_al_global;
			}

			$arreglos['ok'] = 1;
		} else {
			$arreglos['ok'] = -7;
			$arreglos['error'] = $error;
		}
	} else {
		$arreglos['ok'] = -3;
		$arreglos['paso'] = 1;
	}
} else {
	$arreglos['ok'] = -3;
	$arreglos['paso'] = 2;
}

$arreglos = utf8_converter($arreglos);
echo json_encode($arreglos);

function lineas_indicadores_actor($idactor)
{
	$arreglos = array();
	require "part_preguntas.php";

	return array(
		'lineas' => $lineas,
		'indicadores' => $indicadores,
		'metas_al_arr' => $metas_al_arr,
	);
}
