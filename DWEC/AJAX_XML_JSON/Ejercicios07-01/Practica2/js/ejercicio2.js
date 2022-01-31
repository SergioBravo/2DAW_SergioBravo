if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

var peticion_http;

function inicio() {
  //Vaciamos el formulario siempre que entremos
  vacio();
  //Logica del programa
	let boton = document.getElementById('boton');

  if (document.addEventListener) {
		boton.addEventListener("click",enviarArchivo);
	}
  else if (document.attachEvent) {
		boton.attachEvent("click",enviarArchivo);
	}
}

function vacio() {
  for (let i = 0; i < document.getElementById("formulario").elements.length; i++) {
    if (document.getElementById("formulario").elements[i].type == "text") {document.getElementById("formulario").elements[i].value = "";}
  }
}

function enviarArchivo() {
  //Para comenzar creamos el objeto
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //Asignamos el evento readystatechange
  if (document.addEventListener) {//Ejecutara la funcion en caso de detectar algun intento de conexión al servidor
		peticion_http.addEventListener("readystatechange",mostrarMensaje);
	}
  else if (document.attachEvent) {
		peticion_http.attachEvent("onreadystatechange",mostrarMensaje);
	}
  //Establecemos la conexión con el servidor
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let modulo = document.getElementById("modulo").value;

  if (nombre == "" || apellido == "" || modulo == "") {
    alert("Deben rellenarse los campos obligatorios (*)");
  }
  else {
    peticion_http.open("GET","php/ejercicio2.php?nombre="+nombre+"&apellido="+apellido+"&modulo="+modulo);
    peticion_http.send(null);
  }
}

function mostrarMensaje() {//Cambiamos el valor de la caja mensaje por el valor del texto que hemos recogido
  if(peticion_http.readyState == 4) {
    if(peticion_http.status == 200) {
      document.getElementById("nota").value = peticion_http.responseText;
    }
  }
}
