if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

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
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let modulo = document.getElementById("modulo").value;

  if (nombre == "" || apellido == "" || modulo == "") {
    alert("Deben rellenarse los campos obligatorios (*)");
  }
  else {
		let configuracion = {method:"GET"};
		fetch("php/ejercicio2.php?nombre="+nombre+"&apellido="+apellido+"&modulo="+modulo,configuracion)
			.then(conexion)
			.catch(errores);
  }
}

function conexion(respuesta){
	if (respuesta.ok)
		respuesta.text().then(mostrarMensaje);
}

function mostrarMensaje(dato){
	document.getElementById("nota").value = dato;
}

function errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("nota").value = "error en la conexión con el servidor"
}
