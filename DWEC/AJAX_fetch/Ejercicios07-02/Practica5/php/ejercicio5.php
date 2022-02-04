<?php
	$cadenaXml = "<registro><marcastv><marca>Samsung</marca></marcastv><marcastv><marca>LG</marca></marcastv><marcastv><marca>Sony</marca></marcastv><marcastv><marca>PanaSonic</marca></marcastv><dimensionestv><dimension>40</dimension></dimensionestv><dimensionestv><dimension>50</dimension></dimensionestv><dimensionestv><dimension>60</dimension></dimensionestv><dimensionestv><dimension>70</dimension></dimensionestv></registro>";
	header("content-type:text/xml");
	echo $cadenaXml;
?>
