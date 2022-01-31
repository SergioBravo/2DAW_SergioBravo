<?php
  $entrada = fopen('php://input','r');
  $datos = fgets($entrada);
  $valores = json_decode($datos,true);

  $objeto = new stdClass();
  $objeto->marca = $valores['marca'];
  $objeto->electro = $valores['electro'];
  $objeto->ancho = rand(15,150);
  $objeto->alto = rand(20,200);
  $objeto->fondo = rand(30,300);

  $respuesta = json_encode($objeto);

  echo $respuesta;
 ?>
