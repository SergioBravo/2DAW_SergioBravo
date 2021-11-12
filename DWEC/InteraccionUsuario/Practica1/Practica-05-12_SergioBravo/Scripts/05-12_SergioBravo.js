window.onload = inicio;

function inicio () {
  document.formulario.comp.onclick = comprueba;
}

function comprueba () {
  var dir = document.formulario.dir.value.toLowerCase();

  if (dir.length < 8 || dir.length > 42) document.formulario.mensaje.value = "El número de caracteres es 8-42";
  else if (principio(dir) == false) document.formulario.mensaje.value = "La direccion debe empezar por letra";
  else if (despuesInicio(dir) == false) document.formulario.mensaje.value = "Caracteres intermedios incorrectos";
  else if (final(dir) == false) document.formulario.mensaje.value = "La direccion debe acabar por digito";
  else document.formulario.mensaje.value = "Direccion correcta";
}

function principio (dir) {//Comprobamos que comienza por letra
  let comp = true;

  for (let i = 0; i < 3; i++) {
    if (dir[i] < "a" || dir[i] > "z") comp = false;
  }
  return comp;
}

function despuesInicio (dir) {//Comprobamos que le siguien letras,digitos o cararteres especiales
  let comp = true;
  let posicion = 1;//Para controlar que sea apartir del 3 caracter
  let caracteresEspeciales = ['º','ª','/','-'];

  while (comp == true && posicion < (dir.length - 2)) {//Miramos los caracteres hasta la posicion antes del final
    if ((!caracteresEspeciales.includes(dir[posicion])) && (dir[posicion] < "a" || dir[posicion] > "z") && (dir[posicion] < 9 || dir[posicion] > 9))comp = false;
    posicion++;
  }
  return comp;
}

function final (dir) {//Comprobamos que la posicion del final cumplan las caracteristicas
  let comp = true;
  let posicion = dir.length - 1;

  if ((dir[posicion] < "a" || dir[posicion] > "z") && (dir[posicion] < 9 || dir[posicion] > 9)) comp = false;
  return comp;
}
