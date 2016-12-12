<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "password";
$database = "dawm8-developers-league";

try {
// echo "----- Connection -----";
// echo "<br/>";
$conn = new PDO("mysql:host=$servername;dbname=$database", 
					$username,
                    $password,
					array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$stmt = $conn->prepare("SELECT * FROM players");
$stmt->execute();
$players = $stmt->fetchAll(PDO::FETCH_ASSOC);

/*
$output = "";
foreach ($players as $key => $player) {
	if ($output != "") {$output .= ",";}
    $output .= '{"id":"'  . $player["id"] . '",';
    $output .= '"name":"'   . $player["name"]        . '",';
    $output .= '"surname":"'. $player["surname"]     . '"}';
}

$output ='{"records":['.$output.']}';

echo($output); */

$records = array("records" => $players);
echo unicode_decode(json_encode($records));
//echo json_encode($records);

} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;


#source: http://stackoverflow.com/questions/2934563/how-to-decode-unicode-escape-sequences-like-u00ed-to-proper-utf-8-encoded-char
function replace_unicode_escape_sequence($match) {
    return mb_convert_encoding(pack('H*', $match[1]), 'UTF-8', 'UCS-2BE');
}
function unicode_decode($str) {
    return preg_replace_callback('/\\\\u([0-9a-f]{4})/i', 'replace_unicode_escape_sequence', $str);
}

?>
