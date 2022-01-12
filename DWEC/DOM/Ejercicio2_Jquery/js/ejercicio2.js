$(window).on("load",inicio);

function inicio() {
    vacio();

    $("#adefinicion").on("click",añadirDefinicion);
    $("#qdefinicion").on("click",quitarDefinicion);
    $("#añadirLocal").on("click",añadirLocalidad);
    $("#añadirCoche").on("click",añadirCoche);
    $("#quitarCoche").on("click",borrarCoches);
    $("#comunidades").on("change",añadirProvincia);
    $("#Cambiarcolores").on("click",cambiarColores);
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  $('#formulario')[0].reset();
}

function añadirDefinicion() {//Cojemos el valor de la palabra y el concepto y los añadimos a la lista de definiciones
  let palabra = $('#palabra').val();
  let concepto = $('#concepto').val();

  if (palabra == "" || concepto == "") {alert("Palabra/Concepto vacio");}
  else {
    let existe = false;
    let todosdt = $("#listaDefiniciones dt");

    for (let i = 0; i < $(todosdt).length; i++) {//Comprobamos si existe la palabra y en caso de que exista añadimos solo la definicion
      if (palabra == $(todosdt).eq(i).text()) {
        existe = true;
        if (i == $(todosdt).length - 1) {$("#listaDefiniciones").append("<dd>"+concepto+"</dd>");}//Comprobamos que no sea el final de la lista
        else {
          $(todosdt).eq(i+1).before("<dd>"+concepto+"</dd>");
        }
      }
    }

    if (!existe) {
      $("#listaDefiniciones").append("<dt>"+palabra+"</dt>");
      $("#listaDefiniciones").append("<dd>"+concepto+"</dd>");
    }
  }
}

function quitarDefinicion() {//Comprobamos la palabra y borrarmos el termino que corresponde a la misma junto con sus definiciones
  let palabra = $('#palabra').val();

  if (palabra == "" || concepto == "") {alert("Palabra vacia");}
  else {
    let lista = $("#listaDefiniciones *");

    for (let i = 0; i < $(lista).length; i++) {
      if (palabra == $(lista).eq(i).text()) {
          let elementos = $(lista).eq(i).nextUntil("dt");
          $(lista).eq(i).remove();
          for (let x = $(elementos).length - 1; x >= 0; x--) {
            $(elementos).eq(x).remove();
          }
      }
    }
  }
}

function añadirLocalidad() {
  let localidad = $("#localidad").val();

  if (localidad == "") {alert("Localidad vacia");}
  else {
    let existe = false;
    let indice = 0;
    let todosli = $("#listaLocalidades li");

    while (!existe && indice < todosli.length){//Comprobamos que no existe la localidad y en caso de ya haber alguna la ponemos en orden
      if (localidad == $(todosli).eq(indice).text()) {existe = true;}
      else if (localidad < $(todosli).eq(indice).text()){
        $(todosli).eq(indice).before("<li>"+localidad+"</li>");
        existe = true;
      }
      indice+=1;
    }

    if (!existe) {
      $("#listaLocalidades").append("<li>"+localidad+"</li>");
    }
  }
}

function añadirCoche() {//Cogemos los valores de marca,modelo y precio y los añadimos ordenados a la tabla
	let marca = $("#marca").val();
	let modelo = $("#modelo").val();
	let precio = $("#precio").val();

	if (marca == "" || modelo == "" || precio == "") {alert("Marca/Modelo/Precio vacio");}
	else {
    let existe = false;
    let todosTr = $("#tablaCoches>tbody tr");
    let indice = 0;

    while (!existe && indice < todosTr.length) {
      let todosTd = $(todosTr).eq(indice).find("td");
      if (marca == $(todosTd).eq(0).text() && modelo == $(todosTd).eq(1).text()) {existe = true;}
      else if (marca > $(todosTd).eq(0).text()){
        $(todosTr).eq(indice).before("<tr><td>"+marca+"</td><td>"+modelo+"</td><td>"+precio+"</td></tr>");
        existe = true;
      }
      else if (marca == $(todosTd).eq(0).text() && modelo > $(todosTd).eq(1).text()) {
        $(todosTr).eq(indice).before("<tr><td>"+marca+"</td><td>"+modelo+"</td><td>"+precio+"</td></tr>");
        existe = true;
      }
      indice+=1;
    }

    if (!existe) {
      $("#tablaCoches>tbody").append("<tr><td>"+marca+"</td><td>"+modelo+"</td><td>"+precio+"</td></tr>");
    }
  }
}

function borrarCoches() {//Le pasamos la marca y el modelo y borramos el coche
  let marca = $("#marca").val();
  let modelo = $("#modelo").val();

	if (marca == "" || modelo == "" || precio == "") {alert("Marca/Modelo vacio");}
  else {
    let todosTr = $("#tablaCoches>tbody tr");

    for (let i = 0; i < todosTr.length; i++) {
      let todosTd = $(todosTr).eq(i).find("td");
      if (marca == $(todosTd).eq(0).text() && modelo == $(todosTd).eq(1).text()) {
        $(todosTr).eq(i).remove();
      }
    }
  }
}

function añadirProvincia() {
  borrarOptions();
	let comunidad = $("#comunidades").val();
	let provincias = new Array();

	switch (comunidad) {
		case "Andaluci­a":
			provincias = ["Huelva","Sevilla","Cordoba","Jaén","Cadiz","Malaga","Granada","Almería"];
			for (let i = 0; i < provincias.length; i++) {
        $("#provincia").append("<option>"+provincias[i]+"</option>");
			}
			incluirMensaje("Buena comida y ambiente");
			break;
		case "Madrid":
      $("#provincia").append("<option>Madrid</option>");
			incluirMensaje("Capital de España");
			break;
	}
	//QUEDAN POR HACER EL RESTO DE COMUNIDADES PERO CON ESTO SE ENTIENDE LA IDEA
}
function borrarOptions() {//Borramos todas las options del select "Provincias"
  $("#provincia").empty();
}
function incluirMensaje(mensaje) {//Le pasamos un texto que pondremos en la caja de "mensajeComunidad"
  $("#mensajeComunidad").text(mensaje);
}

function cambiarColores() {//Generamos seis números aleatorios entre 0 y 255 y se lo aplicamos a la tabla
  let num1 = NumerosAleatorios(0, 255),num2 = NumerosAleatorios(0, 255),num3 = NumerosAleatorios(0, 255),
      num6 = NumerosAleatorios(0, 255),num5 = NumerosAleatorios(0, 255),num4 = NumerosAleatorios(0, 255);

  $("#tablaFinal tr:even").css("background-color","rgb("+num1+","+num2+","+num3+")");
  $("#tablaFinal tr:odd").css("background-color","rgb("+num4+","+num5+","+num6+")");
}

function NumerosAleatorios(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}
