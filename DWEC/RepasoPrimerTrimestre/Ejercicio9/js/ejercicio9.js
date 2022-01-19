if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
  vacio();
  let boton = document.getElementById('comprobar');

  if (document.addEventListener) {
    boton.addEventListener("click",soloLetras);
  }
  else if (document.attachEvent){
    boton.attachEvent("click",soloLetras);
  }
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Borramos todos los input type text
    if (document.getElementById('formulario').elements[i].type == "text") {document.getElementById('formulario').elements[i].value = "";}
  }
}

function soloLetras() {//Comprobamos si la primera letra de todas las subcadenas que tiene nuestra frase es la misma
  let frase = document.getElementById("frase").value.toLowerCase();
	let soloLetras = true;

	for (let i = 0; i < frase.length; i++) {
		if ((frase[i] < "a" || frase[i] > "z") && frase[i] != " ") {soloLetras = false;}
	}

	if (soloLetras) {document.getElementById("mensaje").value = "La frase solo contiene letras";}
	else {document.getElementById("mensaje").value = "La frase no contiene solo letras";}
}
