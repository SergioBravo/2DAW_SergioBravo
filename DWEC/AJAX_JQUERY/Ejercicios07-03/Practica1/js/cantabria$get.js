$(window).on("load",inicio);

function inicio() {
	$("a").on("click",obtenerArchivo);
}

function obtenerArchivo(evento) {//Pedimos el archivo que corresponda al servidor
		let eventos = evento||window.event;
		let nombre = eventos.target.text.toLowerCase();
		let dato = "";
		switch (nombre) {//Segun el el elemento de la lista seleccionado establecemos conexión con el servidor para recoger su .txt
	  	case "cantabria":
			 	dato = $.get("ficheros/cantabria.txt", mostrarArchivo);
	  		break;
	  	case "cordoba":
				dato = $.get("ficheros/cordoba.txt", mostrarArchivo);
	  		break;
	  	case "segovia":
				dato = $.get("ficheros/segovia.html", mostrarArchivo);
	  		break;
	  	case "sevilla":
				dato = $.get("ficheros/sevilla.html", mostrarArchivo);
	  		break;
	    }
}

function mostrarArchivo(valor){//Mostramos el resultado
		$("#contenido").html(valor);
}
