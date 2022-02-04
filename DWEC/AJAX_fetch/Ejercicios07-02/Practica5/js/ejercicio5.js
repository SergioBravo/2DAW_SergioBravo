if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
	vacio();pedirDatos();

	let caja1 = document.getElementById("marca");
	let caja2 = document.getElementById("dimensiones");

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

function pedirDatos() {//Pedimos la información contenida en el servidor
		let configuracion = {method:"GET"};
		fetch("php/ejercicio5.php",configuracion)
			.then(pedir)
			.catch(errores);
}

function pedir(respuesta) {//En caso de recibir una respuesta del servidor llamos a la funcion rellenarSelect
	if (respuesta.ok)
		respuesta.text().then(rellenarSelect);
}

function rellenarSelect(datos) {//Cambiamos el valor de la caja mensaje por el valor del texto que hemos recogido
		let pasar = new DOMParser();
		let misdatos = pasar.parseFromString(datos,"application/xml");
    let marcas = misdatos.getElementsByTagName("marca");
    let dimensiones = misdatos.getElementsByTagName("dimension");
		let padreMarca = document.getElementById("marca");
		let padreDimension = document.getElementById("dimensiones");

		for (let i = 0; i < marcas.length; i++) {
			let nuevoOptions = document.createElement("option");
			let texto = document.createTextNode(marcas.item(i).textContent);
			nuevoOptions.appendChild(texto);
			padreMarca.appendChild(nuevoOptions);
		}

		for (let i = 0; i < dimensiones.length; i++) {
			let nuevoOptions = document.createElement("option");
			let texto = document.createTextNode(dimensiones.item(i).textContent);
			nuevoOptions.appendChild(texto);
			padreDimension.appendChild(nuevoOptions);
		}
}

function enviarDatos() {//Mandamos los datos de los options seleccionados en formato xml al servidor
	let vmarca = document.getElementById("marca").value;
	let vdimension = document.getElementById("dimensiones").value;
	let cadenaxml = "<tipostv><tv><marca>"+vmarca+"</marca><dimensiones>"+vdimension+"</dimensiones></tv></tipostv>";

	let estado={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		body:cadenaxml
	}
	fetch("php/ejercicio5b.php", estado)
		.then(enviar)
		.catch(errores);
}

function enviar(respuesta){//En caso de recibir respuesta del servidor llamamos a mostrar sueldo
	if (respuesta.ok)
		respuesta.text().then(mostrarSueldo);
}

function mostrarSueldo(datos) {//Recogemos la respuesta del servidor y ponemos el sueldo en su correspondiente caja
		let parsar = new DOMParser();
		let misdatos = parsar.parseFromString(datos,"application/xml");
		let precio = misdatos.getElementsByTagName("precio").item(0).textContent;
		document.getElementById("precio").value = precio;
}

function errores() {//En caso de que falle la conexión mostramos un mensaje
	alert("error en la conexión con el servidor");
}
