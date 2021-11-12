window.onload=inicio;
function inicio(){
  document.formulario.comprobar.onclick=contar;
}
function contar () {
  var cad = document.formulario.cad.value.toUpperCase();
  var voc = document.formulario.voc.value.toUpperCase();
  var con = 0;//De las veces que se repite
  var con2 = 0;//de el número de veces que coinciden
  var con3 = 0;//de control de la posicion en la cadena

  if (voc.length == 1) {
    //creamos un bucle para contar el número de apariciones de los caracteres
    for (let i = 0;i < cad.length;i++) {
      if (cad[i] == voc) con++;
    }
  }else {
      cad = document.formulario.cad.value.replace(/ /g, "").toUpperCase();
      voc = document.formulario.voc.value.replace(/ /g, "").toUpperCase();

      while (con3 <= cad.length) {//contamos el número de apariciones de la cadena de texto
        if (cad[con3] == voc[con2]) con2++;
        else con2=0;

        if (con2 == voc.length)con++;
        con3++;
      }
    }
      //Metemos el resultado en una caja de texto
      if (voc.length == 0 || cad.length == 0) {
        document.formulario.men.value = "Falta texto en alguna o ambas cajas";
      }else document.formulario.men.value = "El caracter o la subcadena se repiten "+con+" veces";
  }
