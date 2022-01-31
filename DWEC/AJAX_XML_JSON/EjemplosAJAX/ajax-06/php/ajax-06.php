<?php
	$entrada=fopen('php://input','r');
	$datos=fgets($entrada);
	$valores=simplexml_load_string($datos);
	
	$nom=$valores->persona[0]->nombre;
	$apell=$valores->persona[0]->apellidos;
	$nuevo=rand(950,5000);
	
	$respuesta="<personal><persona><nombre>".$nom."</nombre><apellidos>".
				$apell."</apellidos><sueldo>".$nuevo.
				"</sueldo></persona></personal>";
				
	header('Content-type:text/xml');
	
	echo $respuesta;
?>
