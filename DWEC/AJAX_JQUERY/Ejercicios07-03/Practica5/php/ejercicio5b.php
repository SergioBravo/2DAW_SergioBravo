<?php
  $ficheroEntrada = fopen('php://input','r');
  $datos = fgets($ficheroEntrada);
  $datosXML = simplexml_load_string($datos);
  $mar = $datosXML->tv[0]->marca;
  $dim = $datosXML->tv[0]->dimensiones;
  $marcas = ["Samsung","LG","Sony","PanaSonic"];
  $dimension = ["40","50","60","70"];
  $arrayPrecios = array(
    array(1500,1600,1700,1800),
    array(2500,2600,2700,2800),
    array(3500,3600,3700,3800),
    array(4500,4600,4700,4800)
  );
  $po1 = array_search($mar, $marcas);//Sacamos el indice que corresponde a la posicion que ocupa el elemento que le pasamos
  $po2 = array_search($dim, $dimension);
  $pre = $arrayPrecios[$po1][$po2];

  $respuesta = "<tipostv><tv><marca>".$mar."</marca><dimensiones>".$dim."</dimensiones><precio>".$pre."</precio></tv></tipostv>";

  header('Content-type:text/xml');

  echo $respuesta;
 ?>
