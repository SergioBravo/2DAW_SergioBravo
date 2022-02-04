if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

var peticion_http;

function inicio() {
	vacio();pedirMarcas();

	let caja1 = document.getElementById("marca");
	let caja2 = document.getElementById("electrodomesticos");

	if (document.addEventListener) {
		caja1.addEventListener("change",enviarDatos);
		caja2.addEventListener("change",enviarDatos);
	}
  else if (document.attachEvent) {
		caja1.attachEvent("onchange",enviarDatos);
		caja2.attachEvent("onchange",enviarDatos);
	}
}

function vacio() {//Limpiamos los datos que se queden en las cajas de texto
  for (let i = 0; i < document.getElementById("formulario").elements.length; i++) {
    if (document.getElementById("formulario").elements[i].type == "text") {document.getElementById("formulario").elements[i].value = "";}
  }
}

function pedirMarcas() {//Pedimos la información de las marcas que esta guardada en el servidor en formato Json
	let configuracion = {method:"GET"};
	fetch("php/ejercicio6.php",configuracion)
		.then(pedir)
		.catch(errores);
}

function pedir(respuesta) {//En caso de recibir una respuesta del servidor llamos a la funcion rellenarSelect
	if (respuesta.ok)
		respuesta.text().then(rellenarSelect);
}

function rellenarSelect(datos) {//Añadimos los options al select "Marca" recogiendo los valores que nos devuelve el servidor y transformandolos a Json
	let misdatos=JSON.parse(datos);
	let padreMarca = document.getElementById("marca");

	for (let i = 0; i < misdatos.length; i++) {
		let nuevoOptions = document.createElement("option");
		let texto = document.createTextNode(misdatos[i]);
		nuevoOptions.appendChild(texto);
		padreMarca.appendChild(nuevoOptions);
	}
}

function enviarDatos() {//Creamos un objeto en javascript y lo mandamos al servidor en formato JSON
	let vmarca = document.getElementById("marca").value;
	let velectro = document.getElementById("electrodomesticos").value;

	let datos={
		marca:vmarca,
		electro:velectro
	}

	let datosJSON = JSON.stringify(datos);

	let configura = {
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:datosJSON
	}

	fetch("php/ejercicio6b.php", configura)
		.then(enviar)
		.catch(errores);
}

function enviar(respuesta) {//En caso de recibir una respuesta del servidor llamamos a mostrarDatos
	if (respuesta.ok)
		respuesta.text().then(mostrarDatos);
}

function mostrarDatos(datos) {//Recogemos la respuesta del servidor y ponemos el sueldo en su correspondiente caja
		let misdatos = JSON.parse(datos);
		document.getElementById("ancho").value = misdatos.ancho;
		document.getElementById("alto").value = misdatos.alto;
		document.getElementById("fondo").value = misdatos.fondo;
}

function errores() {//En caso de que falle la conexión mostramos un mensaje
	alert("error en la conexión con el servidor");
}
