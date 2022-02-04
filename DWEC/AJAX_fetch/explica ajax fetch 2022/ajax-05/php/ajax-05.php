<?php
	$entrada=fopen('php://input','r');
	$datos=fgets($entrada);
	$valores=json_decode($datos,true);
	
	$nuevo= new stdClass();
	$nuevo->nombre=$valores['nombr'];
	$nuevo->apellidos=$valores['apelli'];
	$nuevo->sueldo=rand(950,5000);
	
	$respuesta=json_encode($nuevo);
	
	echo $respuesta;
?>
