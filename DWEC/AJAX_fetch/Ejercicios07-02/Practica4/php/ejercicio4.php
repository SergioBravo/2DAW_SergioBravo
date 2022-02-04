<?php
	$nombre = $_POST["nombre"];
	$apellido = $_POST["apellido"];
	$modulo = $_POST["puesto"];
	$sueldo = rand(1000,3250);//Generamos un valor aleatorio para el sueldo entre 1000 y 3250

  echo $sueldo;//Para que el contenido que se nos devuelva sea el sueldo
?>
