<?php
if (!defined('APPLICATION')) exit;

$redirect = false;
$path = $_SERVER['REQUEST_URI'] ?? '/';
$host = $_SERVER['HTTP_HOST'] ?? '';

// Normaliza host (quita puerto)
$hostNormalizado = strtolower(preg_replace('/:\d+$/', '', $host));

// =========================
// Seguridad: canonical host
// - En local (Valet *.test / localhost) NO redirigimos al dominio prod.
// - En prod, sí forzamos $target_host.
// =========================
$esLocal = (
    $hostNormalizado === 'localhost' ||
    $hostNormalizado === '127.0.0.1' ||
    substr($hostNormalizado, -5) === '.test'
);

// Checking host
if (!$esLocal) {
    // $target_host debe venir de config.php
    if (isset($target_host) && $target_host && $hostNormalizado !== strtolower($target_host)) {
        $redirect = true;
        $host = $target_host;
    }
}

$url = $host . $path;

// Checking path (quita /index.php)
$pattern = "^(.*)(/index\.php)$^";
preg_match_all($pattern, $url, $match);

if (isset($match[0][0]) && $match[0][0] != "") {
    $redirect = true;
    $url = $match[1][0] . "/";
}

// Redirect
if ($redirect) {
    header('HTTP/1.1 301 Moved Permanently');

    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'
        || (($_SERVER['SERVER_PORT'] ?? null) == 443))
        ? "https://"
        : "http://";

    // ✅ Antes estaba hardcodeado a http:// — ahora respeta protocolo
    header('Location: ' . $protocol . $url);
    exit;
}
