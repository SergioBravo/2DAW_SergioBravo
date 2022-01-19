if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
  vacio();
  let cadena = document.cookie;
  let nombre = cadena.indexOf("aficiones");
  if (nombre != -1) {
    mostrarMensaje(cadena);
  }
  let boton = document.getElementById('enviar');

  if (document.addEventListener) {
    boton.addEventListener("click",validarFormulario);
  }
  else if (document.attachEvent){
    boton.attachEvent("click",validarFormulario);
  }
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

  if (mensaje == "") {document.getElementById('formulario').submit();alert("Documento correcto");crearCookie();}
  else {alert(mensaje);}
  mensaje = "";
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Borramos todos los input type text
    if (document.getElementById('formulario').elements[i].type == "text") {document.getElementById('formulario').elements[i].value = "";}
  }

  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Desmarcamos todos los checkbox
    if (document.getElementById('formulario').elements[i].type == "checkbox") {document.getElementById('formulario').elements[i].checked = false;}
  }

  document.getElementById('texto').value = "";
}

function validarApellido() {//Validamos el formato del apellido a traves de una expresión regular
  let apellido = document.getElementById("apellido").value;
  let expRegApe =/^[a-záéíóúüñ][a-záéíóúüñ \-]{5,}[a-záéíóúüñ]$/i;

  if (!expRegApe.test(apellido)){mensaje += "Formato de Apellido incorrecto \n";}
}

function validarNombre() {//Validamos el formato del nombre
  let nombre = document.getElementById("nombre").value;
  let expRegNom =/^[a-záéíóúüñ]([a-záéíóúüñ]| |ª|º|.){1,28}[a-záéíóúüñ]$/i;

  if (!expRegNom.test(nombre)){mensaje += "Formato de Nombre incorrecto \n";}
}

function validarTipoVia() {//validamos el formato del tipo de via y el tipo que nos pasan
  let via = document.getElementById("tvia").value;
  let correcto = true;
  let expRegTvia =/^((calle)|(plaza)|(camino)|(avenida)|(plazuela)|(bulevar)|(carretera)|(paseo)|(travesia))$/i;

  if (!expRegTvia.test(via)){mensaje += "No se ha puesto un tipo de vía admisible \n";}
}

function validarNombreVia() {//Validamos el formato del nombre de la via
  let via = document.getElementById("nvia").value;
  let expRegNvia =/^[a-záéíóúüñ]([a-záéíóúüñ]| ){1,33}[a-záéíóúüñ]$/i;

  if (!expRegNvia.test(via)){mensaje += "Formato del nombre de la via incorrecto \n";}
}

function validarNumero() {//Validamos el formato del número
  let numero = document.getElementById("numero").value;

  let expRegNumero =/((\d)*|^(s\/n)$)/i;

  if (!expRegNumero.test(numero)){mensaje += "Formato de número incorrecto \n";}
}

function validarPortal() {//Validamos el formato del portal
  let portal = document.getElementById("portal").value;

  let expRegPortal =/([a-záéíóúüñ]|[0-9])*/i;

  if (!expRegPortal.test(portal)){mensaje += "Formato de portal incorrecto \n";}
}

function validarPiso() {//Valudamos el formato del piso
  let piso = document.getElementById("piso").value;

  let expRegPiso =/[0-9]*/g;

  if (!expRegPiso.test(piso)){mensaje += "Formato de piso/planta incorrecto \n";}
}

function validarPuerta() {//Validamos el formato de la puerta
  let puerta = document.getElementById("puerta").value;

  let expRegPuerta =/([a-záéíóúüñ]|[0-9])*/i;

  if (!expRegPuerta.test(puerta)){mensaje += "Formato de puerta incorrecto \n";}
}

function validarLocalidad() {//Validamos el formato de la localidad
  let localidad = document.getElementById("localidad").value;

  let expRegLoc =/^[a-záéíóúüñ]([a-záéíóúüñ]| ){1,38}[a-záéíóúüñ]$/i;

  if (!expRegLoc.test(localidad)){mensaje += "Formato de localidad incorrecto \n";}
}

function validarCodigoPostal() {//Validamos el codigo postal
  let cp = document.getElementById("cp").value;

  let expRegCp = /\d/g;

  if (!expRegCp.test(cp)) {mensaje += "Formato de codigo postal incorrecto \n";}
}

function validarProvincia() {//Validamos el formato de la provincia
  let provincia = document.getElementById("provincia").value;

  let expRegPro =/^[a-záéíóúüñ]([a-záéíóúüñ]| ){4,30}[a-záéíóúüñ]$/i;

  if (!expRegPro.test(provincia)) {mensaje += "Formato de provincia incorrecto \n";}
}

function validarPais() {//Validamos el formato de la pais
  let pais = document.getElementById("pais").value;

  let expRegPai =/^[a-záéíóúüñ]([a-záéíóúüñ]| ){6,26}[a-záéíóúüñ]$/i;

  if (!expRegPai.test(pais)) {mensaje += "Formato de pais incorrecto \n";}
}

function validarPuesto() {//Validamos el formato del puesto
  let puesto = document.getElementById("puesto").value;

  let expRegPue =/^[a-záéíóúüñ]([a-záéíóúüñ]| |-|[0-9]){8,23}[a-záéíóúüñ]$/i;

  if (!expRegPue.test(puesto)) {mensaje += "Formato de puesto incorrecto \n";}
}

function validarEmpresa() {//Validamos el formato del empresa
  let empresa = document.getElementById("empresa").value;

  let expRegEmp =/^[a-záéíóúüñ]([a-záéíóúüñ]| |-|[0-9]|.){4,23}[a-záéíóúüñ]$/i;

  if (!expRegEmp.test(empresa)) {mensaje += "Formato de empresa incorrecto \n";}
}

function validarCategoria() {//Validamos el formato de la categoria
  let categoria = document.getElementById("categoria").value;

  let expRegCat =/^[a-záéíóúüñ]([a-záéíóúüñ]| |[0-9]|.){4,23}[a-záéíóúüñ]$/i;

  if (!expRegCat.test(categoria)) {mensaje += "Formato de categoria incorrecto \n";}
}

function validarAficiones() {//Comprobamos cuantas aficiones estan marcadas
  let con = 0;

  for (let i = 0; i < document.getElementById("formulario").elements.length; i++) {
    if (document.getElementById("formulario").elements[i].type == "checkbox" && document.getElementById("formulario").elements[i].checked) con++;
  }

  if (con < 3) mensaje += "Se deben seleccionar al menos tres aficiones \n";
}

function sacarAficiones() {//Comprobamos las aficiones seleccionadas y metemos su valor en un array que luego devolvemos
  let con = 0;
  let aficiones = new Array;

  for (let i = 0; i < document.getElementById("formulario").elements.length; i++) {
    if (document.getElementById("formulario").elements[i].type == "checkbox" && document.getElementById("formulario").elements[i].checked) {aficiones[con] = document.getElementById("formulario").elements[i].value;con++;}
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
  document.getElementById("texto").value += texto+"\n";
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
