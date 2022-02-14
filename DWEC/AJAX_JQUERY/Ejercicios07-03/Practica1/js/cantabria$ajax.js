$(window).on("load",inicio);

function inicio() {
	$("a").on("click",obtenerArchivo);
}

function obtenerArchivo(evento) {//Pedimos el archivo que corresponda al servidor
		let eventos = evento||window.event;
		let nombre = eventos.target.text.toLowerCase();
		let dato = "";
		let configuracion = {success: mostrarArchivo}
		switch (nombre) {//Segun el el elemento de la lista seleccionado establecemos conexión con el servidor para recoger su .txt
	  	case "cantabria":
			 	dato = $.ajax("ficheros/cantabria.txt",configuracion);
	  		break;
	  	case "cordoba":
				dato = $.ajax("ficheros/cordoba.txt",configuracion);
	  		break;
	  	case "segovia":
				dato = $.ajax("ficheros/segovia.html",configuracion);
	  		break;
	  	case "sevilla":
				dato = $.ajax("ficheros/sevilla.html",configuracion);
	  		break;
	    }
}

function mostrarArchivo(valor){//Mostramos el resultado
	$("#contenido").html(valor);
}
