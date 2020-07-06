<?php
require '../dbconfig.php';

$sql = "SELECT * FROM api";
$result = $mysqli -> query($sql);

while($row = $result -> fetch_assoc()){
    $json[] = $row;
}

$data['data'] = $json;
echo json_encode($data);

header('Content-Type:application/json');

?>