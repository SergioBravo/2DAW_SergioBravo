if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
  vacio();
  let boton = document.getElementById('comprobar');

  if (document.addEventListener) {
    boton.addEventListener("click",numeroOblongo);
  }
  else if (document.attachEvent){
    boton.attachEvent("click",numeroOblongo);
  }
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Borramos todos los input type text
    if (document.getElementById('formulario').elements[i].type == "text") {document.getElementById('formulario').elements[i].value = "";}
  }
}

function numeroOblongo() {//Comprobamos si el numero que nos han paso cumple n = x(x+1) siendo x un número entero
  let numero = document.getElementById("numero").value;
	let oblongo = false;

	for (let i = 1; i <= numero/2; i++) {//Sacamos sus divisores
		if (i*(i+1) == numero) {oblongo = true;}
	}

	if (oblongo) {
		document.getElementById("mensaje").value = "El número es oblongo";
	}
	else {
		document.getElementById("mensaje").value = "El número no es oblongo";
	}
}
