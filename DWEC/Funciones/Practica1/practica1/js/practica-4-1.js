window.onload = inicio;

function inicio() {
  document.formulario.resultado.onclick = mostrarMedia;
}

function mostrarMedia() {
  document.formulario.mostrar.value = media(7,8,9,10);
}
function media() {
  let media = 0;

  if (arguments.length != 0) {//En caso de que haya algun parametro hacemos la media si no nos quedamos con el valor 0
    let suma = 0;

    for (var i = 0; i < arguments.length; i++) {//Sacamos la suma de todos los parametros que nos pasen
      suma += arguments[i];
    }
    media=suma/arguments.length;
  }

  return media;
}
