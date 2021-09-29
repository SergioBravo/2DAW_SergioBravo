window.onload = inicio;

function inicio () {
  document.formulario.comprobar.onclick = palindromo;
}

function palindromo () {
  var cad = document.formulario.palindromo.value.replace(/ /g, "").toLowerCase();
  var comp = true;
  var inversa = "";

  for (let i = cad.length - 1; i >= 0;i--){//Creamos la cadena a la inversa
    inversa += cad[i];
  }

  if (inversa == cad) document.formulario.mensaje.value = "Es palindromo";
  else document.formulario.mensaje.value = "No es palindromo";
}
