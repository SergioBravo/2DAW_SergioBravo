if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
  vacio();
  let boton = document.getElementById('comprobar');

  if (document.addEventListener) {
    boton.addEventListener("click",esTautograma);
  }
  else if (document.attachEvent){
    boton.attachEvent("click",esTautograma);
  }
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Borramos todos los input type text
    if (document.getElementById('formulario').elements[i].type == "text") {document.getElementById('formulario').elements[i].value = "";}
  }
}

function esTautograma() {//Comprobamos si la primera letra de todas las subcadenas que tiene nuestra frase es la misma
  let frase = document.getElementById("frase").value.toLowerCase();
	let tautograma = false;
	let cadenas = frase.split(" ");
	let letra = cadenas[0][0];

	for (let i = 1; i < cadenas.length; i++) {
		if (cadenas[i][0] == letra) {tautograma = true;}
		else {tautograma = false;}
	}

	if (tautograma) {
		document.getElementById("mensaje").value = "Es un tautograma";
	}
	else {
		document.getElementById("mensaje").value = "No es un tautograma";
	}
}
