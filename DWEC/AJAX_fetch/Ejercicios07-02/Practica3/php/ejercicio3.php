<?php
	$nombre = $_POST["nombre"];
	$apellido = $_POST["apellido"];
	$modulo = $_POST["modulo"];
	$nota = $_POST["nota"];
	$resultado = "";
	//HACEMOS UNA CONVERSIÓN DE LA NOTA
	if ($nota < 5) {$resultado = "SUSPENSO";}
	else if ($nota >= 5 && $nota < 6) {$resultado = "SUFICIENTE";}
	else if ($nota >= 6 && $nota < 7) {$resultado = "BIEN";}
	else if ($nota >= 7 && $nota < 9) {$resultado = "NOTABLE";}
	else if ($nota >= 9 && $nota <= 10) {$resultado = "SOBRESALIENTE";}
	else {$resultado = "NOTA INVALIDA";}

  echo $resultado;//Para que el contenido que se nos devuelva sea el resultado de la transformación de la nota
?>
