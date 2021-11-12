window.onload = inicio;

function inicio () {
  document.formulario.comprobar.onclick = localidad;
}

function localidad () {
  var local = document.formulario.localidad.value.toLowerCase();

  if (local.length < 7 || local.length > 35) document.formulario.men.value = "El número de caracteres es 7-35";
  else if (principio(local) == false) document.formulario.men.value = "La localidad debe empezar por tres letras";
  else if (despuesInicio(local) == false) document.formulario.men.value = "Caracteres tras las 3 primeras letras incorrectos";
  else if (final(local) == false) document.formulario.men.value = "La localidad debe acabar por dos letras";
  else document.formulario.men.value = "Localidad correcta";
}

function principio (local) {//Comprobamos que comienza por tres letras
  let comp = true;

  for (var i = 0; i < 3; i++) {
    if (local[i] < "a" || local[i] > "z") comp = false;
  }
  return comp;
}

function despuesInicio (local) {//Comprobamos que le siguien letras o espacios

  let comp = true;
  posicion = 3;//Para controlar que sea apartir del 3 caracter

  while (comp == true && posicion < (local.length - 3)) {//Miramos los caracteres hasta dos posiciones antes del final
    if ((local[posicion] < "a" || local[posicion] > "z") && (local[posicion] != " ")) comp = false;
    posicion++;
  }
  return comp;
}

function final (local) {//Comprobamos que las dos posiciones del final cumplan las caracteristicas
  let comp = true;
  let posicion = local.length - 3;

  if (local[posicion + 1] < "a" || local[posicion + 1] > "z" || local[posicion + 2] < "a" || local[posicion + 2] > "z") comp = false;
  return comp;
}
