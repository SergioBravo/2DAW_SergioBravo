if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
	let todosA = document.getElementsByTagName("a");
	for (let i = 0; i < todosA.length; i++) {
		if (document.addEventListener) {
			todosA[i].addEventListener("click",obtenerArchivo);
		}
	  else if (document.attachEvent) {
			todosA[i].attachEvent("click",obtenerArchivo);
		}
	}
}

function obtenerArchivo(evento) {
	let eventos = evento||window.event;
	let nombre = eventos.target.text.toLowerCase();

  switch (nombre) {//Segun el el elemento de la lista seleccionado establecemos conexión con el servidor para recoger su .txt
  	case "cantabria":
			fetch("ficheros/cantabria.txt")
			.then(conexion)
			.catch(errores);
  		break;
  	case "cordoba":
			fetch("ficheros/cordoba.txt")
			.then(conexion)
			.catch(errores);
  		break;
  	case "segovia":
			fetch("ficheros/segovia.html")
			.then(conexion)
			.catch(errores);
  		break;
  	case "sevilla":
			fetch("ficheros/sevilla.html")
			.then(conexion)
			.catch(errores);
  		break;
    }
}

function conexion (response){//Comprobamos que se recibe el archivo y recogemos los datos
	if (response.ok)
		response.text().then(mostrarMensaje);
}

function mostrarMensaje(datos) {//Cambiamos el valor de la caja mensaje por el valor del texto que hemos recogido
	document.getElementById("contenido").innerHTML = datos;
}

function  errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("contenido").innerHTML = "error en la conexión con el servidor";
}
