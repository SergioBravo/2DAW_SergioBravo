window.onload = inicio;
function inicio () {
  document.formulario.comprobar.onclick = fecha;
}

function fecha () {
  var fecha = document.formulario.fecha.value;
  if (fecha[2] == "/") {
    fecha = document.formulario.fecha.value.split('/');//Creamos un array usando el delimitador / para sacar el dia,mes y año

    if (fecha[0].length > 2)document.formulario.men.value = "Los días solo pueden tener dos digitos";//Comprobamos los digitos de los dias
    else if (fecha[1].length > 2)document.formulario.men.value = "Los meses solo pueden tener dos digitos";//Comprobamos los digitos de los meses
    else if (fecha[1] > 12 || fecha[1] < 1)document.formulario.men.value = "Meses 1 - 12";//Comprobamos que no se pasen de 12 meses
    else if (fecha[2].length > 4)document.formulario.men.value = "Los años solo pueden tener cuatro digitos";//Comprobamos los digitos de los años
    else if ((parseInt(fecha[1], 10) == 1 || parseInt(fecha[1], 10) == 3 || parseInt(fecha[1], 10) == 5 || parseInt(fecha[1], 10) == 7
      || parseInt(fecha[1], 10) == 8 || parseInt(fecha[1], 10) == 10 || parseInt(fecha[1], 10) == 12) && parseInt(fecha[0], 10) > 31) document.formulario.men.value = "El mes "+fecha[1]+" solo tiene 31 días";

    else if ((parseInt(fecha[1], 10) == 4 || parseInt(fecha[1], 10) == 6 || parseInt(fecha[1], 10) == 9
      || parseInt(fecha[1], 10) == 11) && parseInt(fecha[0], 10) > 30)document.formulario.men.value = "El mes "+fecha[1]+" solo tiene 30 días";

    else if (bisiesto(fecha[2]) == true && parseInt(fecha[1], 10) == 2 && parseInt(fecha[0], 10) > 29)document.formulario.men.value = "El mes "+fecha[1]+" solo tiene 29 días en años bisiestos";

    else if (bisiesto(fecha[2]) == false && parseInt(fecha[1], 10) == 2 && parseInt(fecha[0], 10) > 28)document.formulario.men.value = "El mes "+fecha[1]+" solo tiene 28 días en años no bisiestos";

    else document.formulario.men.value = "Fecha correcta";
  }
  else document.formulario.men.value = "Formato de separado incorrecto usar /";


}

function bisiesto (año){
  return (año % 400 == 0) ? true :
    (año % 100 == 0) ? false :
      año % 4 == 0;
}
