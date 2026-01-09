<?php
date_default_timezone_set('America/Mexico_City');
setlocale(LC_CTYPE, 'es_ES');

class ConectarDB
{
	// --- VARS ---
	static $var_server = "127.0.0.1:3306";
	static $var_user = "root";
	static $var_pass = 'm1h4ru';
	static $var_db = "pea_schema";

	public $conn = NULL;
	static private $instancia = NULL;

	// --- CONSTRUCT ---
	private function __construct()
	{
		try {
			$this->conn = @new PDO("mysql:host=" . self::$var_server . ";dbname=" . self::$var_db . ";charset=utf8", self::$var_user, self::$var_pass);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

			$now = new DateTime();
			$mins = $now->getOffset() / 60;
			$sgn = ($mins < 0 ? -1 : 1);
			$mins = abs($mins);
			$hrs = floor($mins / 60);
			$mins -= $hrs * 60;
			$offset = sprintf('%+d:%02d', $hrs * $sgn, $mins);

			$this->conn->exec("SET time_zone='$offset';");
		} catch (PDOException $e) {
			$this->conn = NULL;
			echo 'Caught exception: ',  $e->getMessage(), "\n";
			exit();
		}
	}
	// --- DESTRUCT --- 
	public function __destruct()
	{
		$this->conn = NULL;
	}
	// --- SINGLETON ---
	public static function singleton()
	{
		if (!isset(self::$instancia)) {
			$c = __CLASS__;
			self::$instancia = new $c;
		}
		return self::$instancia;
	}
}
