window.onload = inicio;

function inicio () {
  document.formulario.comprobar.onclick = email;
}

function email () {
  var email = document.formulario.email.value.toLowerCase();

  if (email[0] < "a" || email[0] > "z") document.formulario.men.value = "Tiene que comenzar por una letra";
  else if (email.indexOf('@') == -1) document.formulario.men.value = "No se ha introducido el @";
  else if (email.indexOf('.') == -1) document.formulario.men.value = "No se ha introducido el . en el dominio";
  else if (comprobarUsuario(email) == false) document.formulario.men.value = "Caracter en el usuario incorrecto";
  else if (comprobarAnteriorArroba(email) == false) document.formulario.men.value = "Caracter anterior a @ incorrecto";
  else if (comprobarPosteriorArroba(email) == false) document.formulario.men.value = "Caracter posterior a @ incorrecto";
  else if (comprobarDominio(email) == false) document.formulario.men.value = "Caracter en el dominio incorrecto";
  else if (comprobarAnteriorPunto(email) == false) document.formulario.men.value = "Caracter anterior a . incorrecto";
  else if (comprobarPosteriorPunto(email) == false) document.formulario.men.value = "Caracteres posteriores a . incorrectos";
  else document.formulario.men.value = "Email valido";
}

function comprobarUsuario (email) {//Para comprobar la validez del usuario
  let comp = true;//Para controlar los caracteres que se usan
  let caracteresEpeciales = ["-",".","_"];
  let con = 1;//Para controlar la posicion de los caracteres en el email

  while (comp == true && con < email.indexOf('@') - 1) {//Vamos a comprobar que se pongan los caracteres completos hasta encontrar un @ o un caracter no permitido
    if (!caracteresEpeciales.includes(email[con]) && (email[con] < "a" || email[con] > "z") && (email[con] < 0 || email[con] > 9)) comp = false;
    con++;
  }

  return comp;
}

function comprobarAnteriorArroba (email) {//Comprobamos que el caracterer anterior al arroba sea letra o digito
  let comp = true;//Pra controlar los caracteres que se usan
  if ((email[email.indexOf('@') - 1] < "a" || email[email.indexOf('@') - 1] > "z") && (email[email.indexOf('@') - 1] < 0 || email[email.indexOf('@') - 1] > 9))comp = false;
  return comp;
}

function comprobarPosteriorArroba (email) {//Comprobamos que el caracterer anterior al arroba sea letra o digito
  let comp = true;//Pra controlar los caracteres que se usan
  if ((email[email.indexOf('@') + 1] < "a" || email[email.indexOf('@') + 1] > "z") && (email[email.indexOf('@') + 1] < 0 || email[email.indexOf('@') + 1] > 9))comp = false;
  return comp;
}

function comprobarDominio (email) {//Para comprobar la validez del dominio
  let comp = true;//Pra controlar los caracteres que se usan
  let con = 2;//Para controlar la posicón despues del arroba
  let caracteresEpeciales = ["-","_"];
  let posicion = email.indexOf('@')+con;

  while (comp == true && posicion < (email.indexOf('.') - 1)) {//Vamos a comprobar que se pongan los caracteres completos hasta encontrar un @ o un caracter no permitido
    if (!caracteresEpeciales.includes(email[posicion]) && (email[posicion] < "a" || email[posicion] > "z") && (email[posicion] < 0 || email[posicion] > 9)) comp = false;
    con++;
    posicion = email.indexOf('@')+con;
  }
  return comp;
}

function comprobarAnteriorPunto (email) {//Comprobamos que el caracterer anterior al punto sea letra o digito
  let comp = true;//Pra controlar los caracteres que se usan
  if ((email[email.indexOf('.') - 1] < "a" || email[email.indexOf('.') - 1] > "z") && (email[email.indexOf('.') - 1] < 0 || email[email.indexOf('.') - 1] > 9))comp = false;
  return comp;
}

function comprobarPosteriorPunto (email) {//Comprobamos que el caracterer posterior al punto sea letra o digito
  let comp = true;//Pra controlar los caracteres que se usan
  let final = email.length - (email.indexOf('.') + 1);//Asi controlamos el número de caracteres tras el punto
  let con = 1;//Para controlar la posicion despues del punto
  let posicion = email.indexOf('.')+con;

  if (final < 2 || final > 4)comp = false;
  else {
    while (con <= final) {
      if (email[posicion] < "a" || email[posicion] > "z")comp = false;
      con++;
    }
  }
  return comp;
}
