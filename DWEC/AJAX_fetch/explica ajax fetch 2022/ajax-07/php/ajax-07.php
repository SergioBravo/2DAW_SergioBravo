<?php
	$entrada=fopen('php://input','r');
	$datos=fgets($entrada);
	$valores=simplexml_load_string($datos);
	
	$nom=$valores->persona[0]->nombre;
	$resto=$nom->attributes();
	$apell=$resto['apellidos'];
	$nuevo=rand(950,5000);
	
	$respuesta="<personal><persona><nombre apellidos='".$apell.
				"' sueldo='".$nuevo."' >".$nom.
				"</nombre></persona></personal>";
				
	header('Content-type:text/xml');
	
	echo $respuesta;
?>
