window.onload = inicio;
function inicio () {
  document.formulario.comprobar.onclick = comprueba;
}

function comprueba () {
  var nom = document.formulario.nom.value.replace(/ /g, "").toUpperCase();
  var arrayCaracteres = ["º","ª","-"];
  var letras = "ABCDEFGHIJKLMÑOPQRSTUVWXYZ";
  var aux = 0;//Para comprobar que empieza y termina por letra
  var comp = true;//Para comprobar que los caracteres intermedios son correctos
  var con1 = 1;//Para controlar la poscion del nombre

  for (var i = 0; i < letras.length; i++) {
    if (letras.includes(nom[0]) && letras.includes(nom[nom.length - 1])) aux = 1;//Para comprobar que Empieza por letra y termina por letra
  }

  while (con1 < nom.length - 1 && comp == true){//Para comprobar que entre el primer y el ultimo caracter esta todo bien escrito
    if (arrayCaracteres.includes(nom[con1]) || letras.includes(nom[con1]))comp = true;
    else comp = false;
    con1++;
  }

  if (nom.length < 3 || nom.length > 27) document.formulario.men.value = "Longitud erronea";//Comprobamos que la longitud este entre 3 y 27 caracteres
  else if (aux == 0) document.formulario.men.value = "Primer o ultimo caracter mal";
  else if (comp == false) document.formulario.men.value = "caracter intermedio erroneo";
  else document.formulario.men.value = "Nombre correcto";
}
