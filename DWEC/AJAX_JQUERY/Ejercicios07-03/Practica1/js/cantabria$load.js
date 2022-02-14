$(window).on("load",inicio);

function inicio() {
	$("a").on("click",obtenerArchivo);
}

function obtenerArchivo(evento) {//Pedimos el archivo que corresponda al servidor
		let eventos = evento||window.event;
		let nombre = eventos.target.text.toLowerCase();
		switch (nombre) {//Segun el el elemento de la lista seleccionado establecemos conexión con el servidor para recoger su .txt
	  	case "cantabria":
				$("#contenido").load("ficheros/cantabria.txt");
	  		break;
	  	case "cordoba":
				$("#contenido").load("ficheros/cordoba.txt");
	  		break;
	  	case "segovia":
				$("#contenido").load("ficheros/segovia.html");
	  		break;
	  	case "sevilla":
				$("#contenido").load("ficheros/sevilla.html");
	  		break;
	    }
}
