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
    peticion_http.open("GET","php/ejercicio6.php");
    peticion_http.send(null);
}

function rellenarSelect() {//Añadimos los options al select "Marca" recogiendo los valores que nos devuelve el servidor y transformandolos a Json
  if(peticion_http.readyState == 4) {
    if(peticion_http.status == 200) {
			let datos = JSON.parse(peticion_http.responseText);
			let padreMarca = document.getElementById("marca");

			for (let i = 0; i < datos.length; i++) {
				let nuevoOptions = document.createElement("option");
				let texto = document.createTextNode(datos[i]);
				nuevoOptions.appendChild(texto);
				padreMarca.appendChild(nuevoOptions);
			}
    }
  }
}

function enviarDatos() {//Creamos un objeto en javascript y lo mandamos al servidor en formato JSON
	// primer paso crear objeto
	if (window.XMLHttpRequest) {
		peticion_http = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// segundo paso asignar evento readystatechange
	if (document.addEventListener) {
		peticion_http.addEventListener("readystatechange",mostrarDatos);
	}
	else if (document.attachEvent){
		peticion_http.attachEvent("onreadystatechange",mostrarDatos);
	}
	// tercer paso establecer conexión con el servidor
	peticion_http.open("POST","php/ejercicio6b.php");
	// cuarto paso establecer la cabecera si es necesaria
		// cabecera para paso de parámetros con POST y envío de XML
	peticion_http.setRequestHeader("Content-Type","application/json");
	//quinto paso realizar la solicitud al servidor
	let vmarca = document.getElementById("marca").value;
	let velectro = document.getElementById("electrodomesticos").value;
	//Creamos el objeto datos
	let datos = new Object();
	datos.marca = vmarca;
	datos.electro = velectro;
	//Pasamos datos a JSON
	let datosJSON = JSON.stringify(datos);
	//Por ultimo mandamos los datos
	peticion_http.send(datosJSON);
}

function mostrarDatos() {//Recogemos la respuesta del servidor y ponemos el sueldo en su correspondiente caja
	if (peticion_http.readyState == 4) {
		if (peticion_http.status == 200){
			let misdatos = JSON.parse(peticion_http.responseText);
			document.getElementById("ancho").value = misdatos.ancho;
			document.getElementById("alto").value = misdatos.alto;
			document.getElementById("fondo").value = misdatos.fondo;
		}
	}
}
