if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
  vacio();
  let boton = document.getElementById('comprobar');

  if (document.addEventListener) {
    boton.addEventListener("click",numeroMalvado);
  }
  else if (document.attachEvent){
    boton.attachEvent("click",numeroMalvado);
  }
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Borramos todos los input type text
    if (document.getElementById('formulario').elements[i].type == "text") {document.getElementById('formulario').elements[i].value = "";}
  }
}

function numeroMalvado() {
  let numero = document.getElementById("numero").value;
  let con = 0;

  let binario = convertirBinario(numero)+"";

  for (let i = 0; i < binario.length; i++) {
    if (binario[i] == "1") {con++;}
  }

  if (con%2 == 0) {
    document.getElementById("mensaje").value = "El número es malvado";
  }
  else {
    document.getElementById("mensaje").value = "El número no es malvado";
  }
}

function convertirBinario(numero) {
    let binario = 0;
    let resto = 0;
    let i = 1;

    while (numero != 0) {
        resto = numero % 2;
        numero = parseInt(numero / 2);
        binario = binario + resto * i;
        i = i * 10;
    }
    return binario;
}
