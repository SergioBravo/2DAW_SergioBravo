window.onload = inicio;

function inicio() {
  vacio();
  let cadena = document.cookie;
  let nombre = cadena.indexOf("aficiones");
  if (nombre != -1) {
    mostrarMensaje(cadena);
  }
  document.formulario.enviar.onclick = validarFormulario;
}

var mensaje = "";
function validarFormulario() {
  validarApellido();
  validarNombre();
  validarTipoVia();
  validarNombreVia();
  validarNumero();
  validarPortal();
  validarPiso();
  validarPuerta();
  validarLocalidad();
  validarCodigoPostal();
  validarProvincia();
  validarPais();
  validarPuesto();
  validarEmpresa();
  validarCategoria();
  validarAficiones();

  if (mensaje == "") {document.formulario.submit();alert("Documento correcto");crearCookie();}
  else {alert(mensaje);}
  mensaje = "";
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.formulario.elements.length; i++) {//Borramos todos los input type text
    if (document.formulario.elements[i].type == "text") {document.formulario.elements[i].value = "";}
  }

  for (let i = 0; i < document.formulario.elements.length; i++) {//Desmarcamos todos los checkbox
    if (document.formulario.elements[i].type == "checkbox") {document.formulario.elements[i].checked = false;}
  }

  document.formulario.texto.value = "";
}

function validarApellido() {//Validamos el formato del apellido a traves de una expresión regular
  let apellido = document.formulario.apellido.value.replace(/ /g, "").toLowerCase();
  let tamaño = apellido.length;
  let correcto = true;

  if (tamaño < 7) {correcto = false;}
  else {
    if (apellido[0] < "a" || apellido[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if ((apellido[i] < "a" || apellido[i] > "z") && apellido[i] != "-") {correcto = false;}
    }

    if (apellido[tamaño - 1] < "a" || apellido[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato de Apellido incorrecto \n";}
}

function validarNombre() {//Validamos el formato del nombre
  let nombre = document.formulario.nombre.value.replace(/ /g, "").toLowerCase();
  let tamaño = nombre.length;
  let correcto = true;
  let caracteresEspeciales = ["º","ª","."];

  if (tamaño < 3 || tamaño > 30) {correcto = false;}
  else {
    if (nombre[0] < "a" || nombre[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if ((nombre[i] < "a" || nombre[i] > "z") && !caracteresEspeciales.includes(nombre[i])) {correcto = false;}
    }

    if (nombre[tamaño - 1] < "a" || nombre[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato de Nombre incorrecto \n";}
}

function validarTipoVia() {//validamos el formato del tipo de via y el tipo que nos pasan
  let via = document.formulario.tvia.value.replace(/ /g, "").toLowerCase();
  let correcto = true;
  let tipos = ["calle","plaza","camino","avenida","plazuela","bulevar","carretera","paseo","travesia"];

  if (via.length == 0) {correcto = false;}

  for (let i = 0; i < via.length; i++) {
    if (via[i] < "a" || via[i] > "z") {correcto = false;}
  }

  if (!correcto) {
    mensaje += "Formato de via incorrecto \n";
  }
  else {
    if (!tipos.includes(via)) {mensaje += "No se ha puesto un tipo de vía admisible \n";}
  }
}

function validarNombreVia() {//Validamos el formato del nombre de la via
  let nombrevia = document.formulario.nvia.value.replace(/ /g, "").toLowerCase();
  let tamaño = nombrevia.length;
  let correcto = true;

  if (tamaño < 3 || tamaño > 35) {correcto = false;}
  else {
    if (nombrevia[0] < "a" || nombrevia[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if (nombrevia[i] < "a" || nombrevia[i] > "z") {correcto = false;}
    }

    if (nombrevia[tamaño - 1] < "a" || nombrevia[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato del nombre de la via incorrecto \n";}
}

function validarNumero() {//Validamos el formato del número
  let numero = document.formulario.numero.value.toLowerCase();
  let tamaño = numero.length;

  if (isNaN(numero) && numero != "s/n" && numero != "") {mensaje += "Formato de número incorrecto \n";}
}

function validarPortal() {//Validamos el formato del portal
  let portal = document.formulario.portal.value.toLowerCase();
  let tamaño = portal.length;
  let correcto = true;

  for (let i = 0; i < tamaño; i++) {
    if ((portal[i] < "a" || portal[i] > "z") && (portal[i] < 0 || portal[i] > 9)) {correcto = false;}
  }

  if (!correcto && portal != "") {mensaje += "Formato de portal incorrecto \n";}
}

function validarPiso() {//Valudamos el formato del piso
  let piso = document.formulario.piso.value;

  if (isNaN(piso) && piso != "") {mensaje += "Formato de piso/planta incorrecto \n";}
}

function validarPuerta() {//Validamos el formato de la puerta
  let puerta = document.formulario.puerta.value.toLowerCase();
  let tamaño = puerta.length;
  let correcto = true;

  for (let i = 0; i < tamaño; i++) {
    if ((puerta[i] < "a" || puerta[i] > "z") && (puerta[i] < 0 || puerta[i] > 9)) {correcto = false;}
  }

  if (!correcto && puerta != "") {mensaje += "Formato de puerta incorrecto \n";}
}

function validarLocalidad() {//Validamos el formato de la localidad
  let localidad = document.formulario.localidad.value.replace(/ /g, "").toLowerCase();
  let tamaño = localidad.length;
  let correcto = true;

  if (tamaño < 3 || tamaño > 40) {correcto = false;}
  else {
    if (localidad[0] < "a" || localidad[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if (localidad[i] < "a" || localidad[i] > "z") {correcto = false;}
    }

    if (localidad[tamaño - 1] < "a" || localidad[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato de localidad incorrecto \n";}
}

function validarCodigoPostal() {//Validamos el codigo postal
  let cp = document.formulario.cp.value.trim();

  if (isNaN(cp)) {mensaje += "Formato de codigo postal incorrecto \n";}
}

function validarProvincia() {//Validamos el formato de la provincia
  let provincia = document.formulario.provincia.value.replace(/ /g, "").toLowerCase();
  let tamaño = provincia.length;
  let correcto = true;

  if (tamaño < 6 || tamaño > 32) {correcto = false;}
  else {
    if (provincia[0] < "a" || provincia[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if (provincia[i] < "a" || provincia[i] > "z") {correcto = false;}
    }

    if (provincia[tamaño - 1] < "a" || provincia[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato de provincia incorrecto \n";}
}

function validarPais() {//Validamos el formato de la pais
  let pais = document.formulario.pais.value.replace(/ /g, "").toLowerCase();
  let tamaño = pais.length;
  let correcto = true;

  if (tamaño < 8 || tamaño > 28) {correcto = false;}
  else {
    if (pais[0] < "a" || pais[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if (pais[i] < "a" || pais[i] > "z") {correcto = false;}
    }

    if (pais[tamaño - 1] < "a" || pais[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato de pais incorrecto \n";}
}

function validarPuesto() {//Validamos el formato del puesto
  let puesto = document.formulario.puesto.value.replace(/ /g, "").toLowerCase();
  let tamaño = puesto.length;
  let correcto = true;

  if (tamaño < 10 || tamaño > 25) {correcto = false;}
  else {
    if (puesto[0] < "a" || puesto[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if (((puesto[i] < "a" || puesto[i] > "z") && (puesto[i] < 0 || puesto[i] > 9)) && puesto[i] != "-") {correcto = false;}
    }

    if (puesto[tamaño - 1] < "a" || puesto[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato de puesto incorrecto \n";}
}

function validarEmpresa() {//Validamos el formato del empresa
  let empresa = document.formulario.empresa.value.replace(/ /g, "").toLowerCase();
  let tamaño = empresa.length;
  let correcto = true;
  let caracteresEspeciales = ["-","."];

  if (tamaño < 6 || tamaño > 25) {correcto = false;}
  else {
    if (empresa[0] < "a" || empresa[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if (((empresa[i] < "a" || empresa[i] > "z") && (empresa[i] < 0 || empresa[i] > 9)) && !caracteresEspeciales.includes(empresa[i])) {correcto = false;}
    }

    if (empresa[tamaño - 1] < "a" || empresa[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato de empresa incorrecto \n";}
}

function validarCategoria() {//Validamos el formato de la categoria
  let categoria = document.formulario.categoria.value.replace(/ /g, "").toLowerCase();
  let tamaño = categoria.length;
  let correcto = true;

  if (tamaño < 8 || tamaño > 20) {correcto = false;}
  else {
    if (categoria[0] < "a" || categoria[0] > "z") {correcto = false;}

    for (let i = 1; i < tamaño - 2; i++) {
      if (((categoria[i] < "a" || categoria[i] > "z") && (categoria[i] < 0 || categoria[i] > 9)) && categoria[i] != ".") {correcto = false;}
    }

    if (categoria[tamaño - 1] < "a" || categoria[tamaño - 1] > "z") {correcto = false;}
  }

  if (!correcto) {mensaje += "Formato de categoria incorrecto \n";}
}

function validarAficiones() {//Comprobamos cuantas aficiones estan marcadas
  let con = 0;

  for (let i = 0; i < document.formulario.elements.length; i++) {
    if (document.formulario.elements[i].type == "checkbox" && document.formulario.elements[i].checked) con++;
  }

  if (con < 3) mensaje += "Se deben seleccionar al menos tres aficiones \n";
}

function sacarAficiones() {//Comprobamos las aficiones seleccionadas y metemos su valor en un array que luego devolvemos
  let con = 0;
  let aficiones = new Array;

  for (let i = 0; i < document.formulario.elements.length; i++) {
    if (document.formulario.elements[i].type == "checkbox" && document.formulario.elements[i].checked) {aficiones[con] = document.formulario.elements[i].value;con++;}
  }

  return aficiones;
}

function crearCookie() {//Creamos la cookie con todas las aficiones que esten puestas
  let aficiones = sacarAficiones();
  let cookie = "aficiones=";
  for (let i = 0; i < aficiones.length; i++) {
    cookie += aficiones[i]+"-";
  }
  document.cookie=cookie+";expires=true, 30 Jan 2030 00:00:00 GMT;";
}

function mostrarMensaje(cadena) {
  let todasAficiones = leerCookie(cadena);

  for (let i = 0; i < todasAficiones.length; i++) {
    switch (todasAficiones[i]) {
      case "EscucharMusica":
        ponerTexto("Escuche el último disco de su grupo/cantante preferido");
        break;
      case "Viajar":
        ponerTexto("Lo ideal es un viaje al caribe");
        break;
      case "Leer":
        ponerTexto("Lea el último libro de su escritor favorito");
        break;
      case "HacerDeporte":
        ponerTexto("Siempre es bueno correr");
        break;
      case "HacerFotos":
        ponerTexto("Las mejores cámaras de fotos Nikon y Canon");
        break;
      case "GrabarVideos":
        ponerTexto("Grabe sus videos con las cámaras rápidas de 5000 fps");
        break;
      case "SalirACenar":
        ponerTexto("Vaya a un restaurante con estrella Michelin");
        break;
      case "SalirDeCopas":
        ponerTexto("Si bebes no conduzcas");
        break;
    }
  }
}

function ponerTexto(texto) {
  document.formulario.texto.value += texto+"\n";
}

function leerCookie(cadena) {//Leemos la cookie guardada y devolvemos un array con las aficiones
  let aficion = "";
  let inicio = cadena.indexOf("=");
  let con = 0;
  let todasAficiones = new Array;
  for (let i = inicio+1; i < cadena.length; i++) {//Sacamos todas las aficiones
    if (cadena[i] == "-") {
      todasAficiones[con] = aficion;
      aficion = "";
      con++;
    }
    else {
      aficion += cadena[i];
    }
  }
  return todasAficiones;
}
