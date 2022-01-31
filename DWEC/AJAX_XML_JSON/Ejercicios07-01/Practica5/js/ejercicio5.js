if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

var peticion_http;

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

function enviarDatos() {//Mandamos los datos de los options seleccionados en formato xml al servidor
	// primer paso crear objeto
	if (window.XMLHttpRequest) {
		peticion_http = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// segundo paso asignar evento readystatechange
	if (document.addEventListener) {
		peticion_http.addEventListener("readystatechange",mostrarSueldo);
	}
	else if (document.attachEvent){
		peticion_http.attachEvent("onreadystatechange",mostrarSueldo);
	}
	// tercer paso establecer conexión con el servidor
	peticion_http.open("POST","php/ejercicio5b.php");
	// cuarto paso establecer la cabecera si es necesaria
		// cabecera para paso de parámetros con POST y envío de XML
	peticion_http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//quinto paso realizar la solicitud al servidor
	let vmarca = document.getElementById("marca").value;
	let vdimension = document.getElementById("dimensiones").value;
	let cadenaxml = "<tipostv><tv><marca>"+vmarca+"</marca><dimensiones>"+vdimension+"</dimensiones></tv></tipostv>";
	//Por ultimo mandamos la cadena al servidor
	peticion_http.send(cadenaxml);
}

function mostrarSueldo() {//Recogemos la respuesta del servidor y ponemos el sueldo en su correspondiente caja
	if (peticion_http.readyState == 4) {
		if (peticion_http.status == 200){
			let misdatos = peticion_http.responseXML;
			let precio = misdatos.getElementsByTagName("precio").item(0).textContent;
			document.getElementById("precio").value = precio;
		}
	}
}

function pedirDatos() {//Pedimos la información contenida en el servidor
  //Para comenzar creamos el objeto
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //Asignamos el evento readystatechange
  if (document.addEventListener) {//Ejecutara la funcion en caso de detectar algun intento de conexión al servidor
		peticion_http.addEventListener("readystatechange",rellenarSelect);
	}
  else if (document.attachEvent) {
		peticion_http.attachEvent("onreadystatechange",rellenarSelect);
	}
  //Establecemos la conexión con el servidor
    peticion_http.open("GET","php/ejercicio5.php");
    peticion_http.send(null);
}

function rellenarSelect() {//Cambiamos el valor de la caja mensaje por el valor del texto que hemos recogido
  if(peticion_http.readyState == 4) {
    if(peticion_http.status == 200) {
			let datos = peticion_http.responseXML;
      let marcas = datos.getElementsByTagName("marca");
      let dimensiones = datos.getElementsByTagName("dimension");
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
  }
}
