if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

var peticion_http;

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

  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }

  if (document.addEventListener) {//Ejecutara la funcion en caso de detectar algun intento de conexión al servidor
		peticion_http.addEventListener("readystatechange",mostrarMensaje);
	}
  else if (document.attachEvent) {
		peticion_http.attachEvent("onreadystatechange",mostrarMensaje);
	}

  switch (nombre) {//Segun el el elemento de la lista seleccionado establecemos conexión con el servidor para recoger su .txt
  	case "cantabria":
			peticion_http.open('GET','ficheros/cantabria.txt',true);
  		break;
  	case "cordoba":
			peticion_http.open('GET','ficheros/cordoba.txt',true);
  		break;
  	case "segovia":
			peticion_http.open('GET','ficheros/segovia.html',true);
  		break;
  	case "sevilla":
			peticion_http.open('GET','ficheros/sevilla.html',true);
  		break;
    }
  peticion_http.send(null);
}

function mostrarMensaje() {//Cambiamos el valor de la caja mensaje por el valor del texto que hemos recogido
  if(peticion_http.readyState == 4) {
    if(peticion_http.status == 200) {
      let ele_div = document.getElementById("contenido");
      ele_div.innerHTML = peticion_http.responseText;
    }
  }
}
