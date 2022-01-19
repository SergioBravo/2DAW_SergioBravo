if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
  vacio();
  let boton = document.getElementById('comprobar');

  if (document.addEventListener) {
    boton.addEventListener("click",numeroCapicua);
  }
  else if (document.attachEvent){
    boton.attachEvent("click",numeroCapicua);
  }
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Borramos todos los input type text
    if (document.getElementById('formulario').elements[i].type == "text") {document.getElementById('formulario').elements[i].value = "";}
  }
}

function numeroCapicua() {//Comprobamos si el numero se lee igual del derecho que del reves
  let numero = document.getElementById("numero").value+"";
	let capicua = false;
	let reves = numero.split("").reverse().join("");

	if (parseInt(numero,10) == parseInt(reves,10)) {capicua = true;}

	if (capicua) {
		document.getElementById("mensaje").value = "El número es capicua";
	}
	else {
		document.getElementById("mensaje").value = "El número no es capicua";
	}
}
