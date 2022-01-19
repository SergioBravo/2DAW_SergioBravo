if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
  vacio();
  let boton = document.getElementById('comprobar');

  if (document.addEventListener) {
    boton.addEventListener("click",numeroPerfecto);
  }
  else if (document.attachEvent){
    boton.attachEvent("click",numeroPerfecto);
  }
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Borramos todos los input type text
    if (document.getElementById('formulario').elements[i].type == "text") {document.getElementById('formulario').elements[i].value = "";}
  }
}

function numeroPerfecto() {//Comprobamos si el numero es perfecto siendo igual a la suma de todos sus divisores
  let numero = document.getElementById("numero").value;
	let perfecto = false;
	let suma = 0;

	for (let i = 0; i <= numero/2; i++) {//Calculamos la suma de todos sus divisores
		if (numero%i == 0) {suma += i;}
	}

	if (suma == numero) {perfecto = true;}

	if (perfecto) {
		document.getElementById("mensaje").value = "El número es perfecto";
	}
	else {
		document.getElementById("mensaje").value = "El número no es perfecto";
	}
}
