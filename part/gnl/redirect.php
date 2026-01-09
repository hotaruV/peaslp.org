<?php
if (!defined('APPLICATION')) exit;
$redirect = false;
$path = $_SERVER['REQUEST_URI'];
$host = $_SERVER['HTTP_HOST'];
// Checking host

if ($host != $target_host) {
    $redirect = true;
    $host = $target_host;
}
$url = $host . $path;
// Checking path
$pattern = "^(.*)(/index\.php)$^";
preg_match_all($pattern, $url, $match);
if (isset($match[0][0])) {
    if ($match[0][0] != "") {
        $redirect = true;
        $url = $match[1][0] . "/";
    }
}

// Redirect
if ($redirect) {
    header('HTTP/1.1 301 Moved Permanently');
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    header('Location: http://' . $url);
    exit;
}
