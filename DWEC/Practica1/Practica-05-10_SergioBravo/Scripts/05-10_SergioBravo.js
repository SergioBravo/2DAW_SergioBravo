window.onload = inicio;

function inicio () {
  document.formulario.comprobar.onclick = email;
}

function email () {
  var url = document.formulario.url.value.toLowerCase();

  if (url[0] != "w" && (url.lastIndexOf('/') > 7 || url.lastIndexOf('/') < 6)) document.formulario.men.value = "La cadena inicial tiene una longitud incorrecta";
  else if ((url.length - (url.lastIndexOf('.') + 1)) < 2 || (url.length - (url.lastIndexOf('.') + 1)) > 4) document.formulario.men.value = "El TLD puede tener 2-4 caracteres";
  else if (url.indexOf('.') > 11 || url.indexOf('.') == -1) document.formulario.men.value = "Falta el punto tras www";
  else if (url.lastIndexOf('.') < (url.length - 5) || url.indexOf('.') == -1) document.formulario.men.value = "Falta . antes del TLD";
  else if (comprobarInicio(url) == false) document.formulario.men.value = "Debe incluir http:// o https:// o ninguna";
  else if (comprobarWww(url) == false) document.formulario.men.value = "Debe incluir la cadena www.";
  else if (comprobarDepuesPunto(url) == false) document.formulario.men.value = "Caracter tras primer punto mal";
  else if (comprobarDominio(url) == false) document.formulario.men.value = "caracter en el dominio mal";
  else if (comprobarAntesUltimoPunto(url) == false) document.formulario.men.value = "Caracter antes del punto de TLD incorrecto";
  else if (final(url) == false) document.formulario.men.value = "Formato de TLD incorrecto";
  else document.formulario.men.value = "URL correcta";

}

function comprobarInicio (url) {//Para comprobar que el protocolo es correcto
  let inicio = ["http://","https://"];//Guaardamos las cadenas de texto que son validas
  let comp = true;//Para comprobar que se estan cumpliendo las condiciones

  if (url.indexOf("w") == 7 && !inicio.includes(url.substr(0,7))) comp = false;//Comprobamos que si al no empezar por www y no cumplir los requisitos iniciales se nos devuelva un false siendo http
  if (url.indexOf("w") == 8 && !inicio.includes(url.substr(0,8))) comp = false; //Comprobamos que si al no empezar por www y no cumplir los requisitos iniciales se nos devuelva un false siendo https

  return comp;
}

function comprobarWww (url) {//Para comprobar que el subdominio es correcto
  let comp = true;

  if (url.substr(url.indexOf("w"),3) != "www") comp = false;//Comprobamos que apartir de la primera posicion de la w la sigan ortas dos ww

  return comp;
}

function comprobarDepuesPunto (url) {//Para comprobar el caracter tras el punto
  let comp = true;

  if (url[url.indexOf(".") + 1] < "a" || url[url.indexOf(".") + 1] > "z") comp = false;//Comprobamos que el siguiente caracter al primer punto sea una letra

  return comp;
}

function comprobarDominio (url) {//Para comprobar que los caracteres del dominio son correctos
  let comp = true;
  let posicion = (url.indexOf('.') + 2);//Para controlar la posicion en el dominio tras la primera letra
 
  while (comp == true && posicion < (url.lastIndexOf('.') - 1)) {//Vamos a comprobar que se pongan los caracteres correctos hasta el siguiente la posicion anterior al ultimo punto
    if (url[posicion] != "-" && (url[posicion] < "a" || url[posicion] > "z") || (url[posicion] < 0 || url[posicion] > 9)) comp = false;
    posicion++;
  }
  return comp;
}

function comprobarAntesUltimoPunto (url) {//Comprobamos que el caracter anterior al ultimo punto sea un número o una letra
  let comp = true;

  if ((url[url.lastIndexOf(".") - 1] < "a" || url[url.lastIndexOf(".") - 1] > "z") || (url[url.lastIndexOf(".") - 1] < 0 || url[url.lastIndexOf(".") - 1] > 9)) comp = false;

  return comp;
}

function final (url) {//Comprobamos que el final termine por letras y no supere los 4 caracteres
  let comp = true;//Pra controlar los caracteres que se usan
  let final = url.length - (url.lastIndexOf('.') + 1);//Asi controlamos el número de caracteres tras el punto
  let con = 0;//Para controlar la posicion despues del punto
  let posicion = url.lastIndexOf('.')+1;

  while (con < final) {
   if (url[posicion] < "a" || url[posicion] > "z") comp = false;
    posicion++;
    con++;
  }

  return comp;
}
