window.onload = inicio;
var alfa = new Array();//Creamos el array;

function inicio() {
  vacio();
  document.formulario.completo.onclick = verArray;
  document.formulario.borrar.onclick = borrarElemento;
  document.formulario.añadir.onclick = añadir;
  document.formulario.consultar.onclick = consultarValor;
  document.formulario.numero.onclick = consultarTamaño;
  document.formulario.modificar.onclick = modificarArray;
}

function vacio() {//Borramos todos los datos
  document.formulario.indice.value = "";
  document.formulario.valor.value = "";
  document.formulario.texto.value = "";
}

function mensajeError(mensaje) {//Para mostrar los errores
  alert("ERROR: "+mensaje);
}

function comprobarExiste(indice) {
  let existe = false;

  for (let clave in alfa) {//Comprobamos que no existe el indice
    if (clave == indice) {existe = true;}
  }

  return existe;
}

function añadir() {//Le pasamos el indice y valor que recogemos del formulario y solo los añadira en caso de que no exista el indice
  let indice = document.formulario.indice.value.replace(/ /g, "");
  let valor = document.formulario.valor.value.replace(/ /g, "");

  if (indice == "" || valor == ""){mensajeError("Indice o Valor vacios");}//Comprobamos que no nos pasen una cadena vacia
  else {
    let existe = comprobarExiste(indice);

    if (!existe) {alfa[indice] = valor;alert("Elemento añadido "+indice+" ==> "+valor);vacio();}
    else if (existe && alfa[indice] == "") {alfa[indice] = valor;alert("Elemento añadido "+indice+" ==> "+valor);vacio();}
    else {mensajeError("El indice introducido ya existe dentro del array");verArray();}
  }
}

function size() {//Calculamos el tamaño del array
  let con = 0;
  for (let clave in alfa) {
    if (clave != "" && alfa[clave] != ""){con++;}
  }

  return con;
}

function consultarTamaño() {
  let con = size();

  if (con == 0) {alert("El array esta vacio");}
  else {alert("Hay "+con+" elemento/s en el array");}
}

function verArray() {//En caso de no estar vacio vemos el array en el textarea
  document.formulario.texto.value = "";
  tamaño = size();

  if (tamaño == 0){mensajeError("No hay elementos en el array");}
  else {
    for (let clave in alfa) {
      document.formulario.texto.value += "["+clave+" ==> "+alfa[clave]+"] \n";
    }
  }
}

function modificarArray() {//Cambiamos el valor de un indice por el nuevo que nos pasen
  let indice = document.formulario.indice.value.replace(/ /g, "");
  let valor = document.formulario.valor.value.replace(/ /g, "");

  if (indice == "" || valor == ""){mensajeError("Indice o Valor vacios");}//Comprobamos que no nos pasen una cadena vacia
  else {
    let existe = comprobarExiste(indice);

    if (existe) {alfa[indice] = valor;alert("Se ha modificado el valor de: "+indice);vacio();}
    else {mensajeError("No se ha encontrado el indice");verArray();}
  }
}

function consultarValor() {//En base al indice actual devolvemos el valor
  let indice = document.formulario.indice.value.replace(/ /g, "");

  if (indice == "") {mensajeError("Indice vacio");}//Comprobamos que no nos pasen un indice vacio
  else {
    let existe = comprobarExiste(indice);

    if (existe) {alert("El valor del indice "+indice+" es "+alfa[indice]);}
    else {mensajeError("No se ha encontrado el indice");verArray();}
  }
}

function borrarElemento() {//Ponemos el valor en base a un indice como cadena vacia
  let indice = document.formulario.indice.value.replace(/ /g, "");

  if (indice == "") {mensajeError("Indice vacio");}//Comprobamos que no nos pasen un indices vacio
  else {
    let existe = comprobarExiste(indice);

    if (existe) {alert("Se ha borrado el elemento con indice "+indice);alfa[indice] = "";vacio();}
    else {mensajeError("No se ha encontrado el indice");verArray();}
  }
}
