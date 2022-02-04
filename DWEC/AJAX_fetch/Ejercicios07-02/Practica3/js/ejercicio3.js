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
  //Establecemos la conexión con el servidor
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let modulo = document.getElementById("modulo").value;
  let nota = document.getElementById("nota").value;

  if (nombre == "" || apellido == "" || modulo == "" || nota == "") {
    alert("Deben rellenarse los campos obligatorios (*)");
  }
  else {//Lo haremos con el metodo POST
		let estado={
			method:"POST",
			headers:{"Content-Type":"application/x-www-form-urlencoded"},
			body:"nombre="+nombre+"&apellido="+apellido+"&modulo="+modulo+"&nota="+nota
		}
		fetch("php/ejercicio3.php", estado)
			.then(conexión)
			.catch(errores);
  }
}

function conexión(valor){
	if (valor.ok)
		valor.text().then(procesar);
}

function  errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").value = "error en la conexión con el servidor"
}

function procesar(dato){
	document.getElementById("resultado").value = dato;
}
