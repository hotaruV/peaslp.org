<?php 
if (!defined('APPLICATION')) exit;
header('X-Content-Type-Options: nosniff');
header('Content-Type: text/html; charset=UTF-8'); 
ini_set('session.cookie_samesite', 'None');
header("X-Frame-Options: ALLOW-FROM wibik.com");
header('Content-Security-Policy: frame-ancestors wibik.com seseaslp.org');

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$csp_rules = "default-src 'self' *.tawk.to tawk.to; script-src 'self' 'unsafe-inline' 'unsafe-eval' www.gstatic.com www.google-analytics.com www.google.com ssl.gstatic.com ajax.googleapis.com *.facebook.net *.facebook.com www.questionpro.com *.flickr.com livestream.com embed.tawk.to; frame-src *.facebook.com *.youtube.com *.google.com livestream.com *.tawk.to; style-src 'self' 'unsafe-inline'  fonts.googleapis.com fonts.gstatic.com www.questionpro.com; img-src 'self' *.yahoo.com *.staticflickr.com *.facebook.com *.google-analytics.com stats.g.doubleclick.net www.questionpro.com img.youtube.com *.tawk.to; font-src 'self' fonts.gstatic.com *.tawk.to; connect-src 'self' geo.query.yahoo.com *.flickr.com *.tawk.to wss://*.tawk.to;";
//foreach (array("Content-Security-Policy", "X-Content-Security-Policy", "X-WebKit-CSP" ) as $csp){ header($csp . ": " . $csp_rules); }

function sanitize_output($buffer) {
    $search = array(
        '/\>[^\S ]+/s',     // strip whitespaces after tags, except space
        '/[^\S ]+\</s',     // strip whitespaces before tags, except space
        '/(\s)+/s',         // shorten multiple whitespace sequences
        '/<!--(.|\s)*?-->/' // Remove HTML comments
    );
    $replace = array(
        '>',
        '<',
        '\\1',
        ''
    );
    $buffer = preg_replace($search, $replace, $buffer);
    return $buffer;
}
ob_start("sanitize_output");
?>