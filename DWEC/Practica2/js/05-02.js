window.onload = inicio;

function inicio() {
  //7 Cuando se carge la pagina sacamos un mensaje de bienvenida
  alert('Bienvenido');
  //1 Y 2
  document.primero.nif.onfocus = backgroundRojo;
  document.primero.nif.onblur = backgroundBlanco;
  document.primero.nombre.onfocus = backgroundRojo;
  document.primero.nombre.onblur = backgroundBlanco;
  document.primero.apellidos.onfocus = backgroundRojo;
  document.primero.apellidos.onblur = backgroundBlanco;
  document.primero.domicilio.onfocus = backgroundRojo;
  document.primero.domicilio.onblur = backgroundBlanco;
  document.primero.localidad.onfocus = backgroundRojo;
  document.primero.localidad.onblur = backgroundBlanco;
  document.primero.cp.onfocus = backgroundRojo;
  document.primero.cp.onblur = backgroundBlanco;
  document.primero.provincia.onfocus = backgroundRojo;
  document.primero.provincia.onblur = backgroundBlanco;
  //3
  document.primero.cp.onchange = comprobarCp;
  //4
  document.body.onkeyup = imagenesFondo;
  //5
  document.primero.provin[0].onclick = botonesSeleccion;
  document.primero.provin[1].onclick = botonesSeleccion;
  document.primero.provin[2].onclick = botonesSeleccion;
  document.primero.provin[3].onclick = botonesSeleccion;
  //6
  document.primero.viajar.onchange = contadorChecked;
  document.primero.leer.onchange = contadorChecked;
  document.primero.musica.onchange = contadorChecked;
  document.primero.cine.onchange = contadorChecked;
  document.primero.deporte.onchange = contadorChecked;
  document.primero.cenar.onchange = contadorChecked;
  //8
  document.primero.nombre.onchange = comprobarBlancoLetras;
  document.primero.apellidos.onchange = comprobarBlancoLetras;
  document.primero.localidad.onchange = comprobarBlancoLetras;
  //9
  document.primero.limpiar.onclick = limpiarDocumento;
  //10
  document.primero.enviar.onclick = validarFormulario;
}

var con = 0;

function backgroundBlanco (evento) {//FONDO BLANCO
  let eventos = evento || window.event;
  eventos.target.style.backgroundColor = "white";
}

function backgroundRojo (evento) {//FONDO ROJO
  let eventos = evento || window.event;
  eventos.target.style.backgroundColor = "red";
  eventos.target.value = "";
}

function imagenesFondo(evento) {//CAMBIAMOS IMAGEN CRTL + F3
  let eventos = evento || window.event;
  let referencias = ["./imagenes/Paris Torre Eiffel.jpg","./imagenes/atena acropoli.jpg","./imagenes/lisboa torre belem.jpg","./imagenes/roma fontana di trevi.jpg","./imagenes/Venecia Plaza San Marcos.jpg"]

  if (eventos.keyCode == 114 && eventos.ctrlKey) {
    eventos.target.style.backgroundImage = "url('"+referencias[con]+"')";
  }
  con = ++con % referencias.length;
}
var intervalo;
var con = 0;
var conAux = 0;
var creado = false;

function contadorChecked (evento) {//Comprobamos cuantos elementos estan creados
  let eventos = evento || window.event;
  con = 0;

  if (document.primero.viajar.checked == true)con++;
  if (document.primero.leer.checked == true)con++;
  if (document.primero.musica.checked == true)con++;
  if (document.primero.cine.checked == true)con++;
  if (document.primero.deporte.checked == true)con++;
  if (document.primero.cenar.checked == true)con++;

  if (con == 0)  document.primero.img_aficion.src = " "
  else if (conAux == 0 && con == 1) imagenAficciones()
  else if (conAux > con && con < 2) {clearInterval(intervalo);imagenAficciones();}
  else intervaloCreado();
  conAux = con;
}

function intervaloCreado () {//Vemos si esta creado o no el intervalo
  if (conAux >= 2) creado = true;
  if (conAux < 2) creado = false;

  imagenesSegundos();
}
function imagenesSegundos() {//Ponemos las imagenes cada 10 s en caso de que el irtevalo este creado
  if (creado == false) intervalo = setInterval(imagenAficciones,10000);
}

function imagenAficciones() {//Seleccionamos aficcion e imagen cada 10 s
  let referencias = [];

  if (document.primero.viajar.checked == true)referencias.push("./imagenes/viajar.jpg");
  if (document.primero.leer.checked == true)referencias.push("./imagenes/leer.jpg");
  if (document.primero.musica.checked == true)referencias.push("./imagenes/musica.jpg");
  if (document.primero.cine.checked == true)referencias.push("./imagenes/cine.jpg");
  if (document.primero.deporte.checked == true)referencias.push("./imagenes/deporte.jpg");
  if (document.primero.cenar.checked == true)referencias.push("./imagenes/cenar.jpg");

  document.primero.img_aficion.src = referencias[Math.floor(Math.random()*referencias.length)];
}

function comprobarBlancoLetras(evento) {//Comprobamos que solo se pasen blancos y letras
  let eventos = evento || window.event;
  let contenido = eventos.target.value.replace(/ /g, "").toLowerCase();

  for (var i = 0; i < contenido.length; i++) {
    if (contenido[i] < "a" || contenido[i] > "z") eventos.target.value = "Caracteres no admitidos";
  }
}

function limpiarDocumento() {//Limpiamos el documento al completo
  document.primero.reset();
}


function botonesSeleccion(evento) {//PONEMOS IMAGENES SEGUN LA PROVINCIA
  let eventos = evento || window.event;
  let referencias = ["./imagenes/cordoba.jpg","./imagenes/leon.jpg","./imagenes/segovia.jpg","./imagenes/sevilla.jpg"];
  let provincia = eventos.target.value;

  switch (provincia) {
    case "cordoba":
      document.primero.imgprovincia.src = referencias[0];
      break;
    case "leon":
      document.primero.imgprovincia.src = referencias[1];
      break;
    case "segovia":
      document.primero.imgprovincia.src = referencias[2];
      break;
    case "sevilla":
      document.primero.imgprovincia.src = referencias[3];
      break;
  }

}

function comprobarCp (evento) {//Comprobamos el formato del codigo postal
  let eventos = evento || window.event;
  let cp = eventos.target.value;
  let provincia = parseInt(cp.substr(0,2));

  if (isNaN(cp)) eventos.target.value = "Solo números";
  else if (cp.length < 0 || cp.length > 5) eventos.target.value = "Tamaño del cp erroneo 0-5";
  else if (provincia < 1 || provincia > 52) eventos.target.value = "Error en el codigo de la provincia";
  else {
    switch (provincia) {
      case 1:
      document.primero.provincia.value="Araba/Álava";
      break;
      case 2:
      document.primero.provincia.value="Albacete";
      break;
      case 3:
      document.primero.provincia.value="Alicante/Alacant";
      break;
      case 4:
      document.primero.provincia.value="Almería";
      break;
      case 5:
      document.primero.provincia.value="Ávila";
      break;
      case 6:
      document.primero.provincia.value="Badajoz";
      break;
      case 7:
      document.primero.provincia.value="Baleares";
      break;
      case 8:
      document.primero.provincia.value="Barcelona";
      break;
      case 9:
      document.primero.provincia.value="Burgos";
      break;
      case 10:
      document.primero.provincia.value="Cáceres";
      break;
      case 11:
      document.primero.provincia.value="Cádiz";
      break;
      case 12:
      document.primero.provincia.value="Castellón";
      break;
      case 13:
      document.primero.provincia.value="Ciudad Real";
      break;
      case 14:
      document.primero.provincia.value="Córdoba";
      break;
      case 15:
      document.primero.provincia.value="A Coruña";
      break;
      case 16:
      document.primero.provincia.value="Cuenca";
      break;
      case 17:
      document.primero.provincia.value="Gerona";
      break;
      case 18:
      document.primero.provincia.value="Granada";
      break;
      case 19:
      document.primero.provincia.value="Guadalajara";
      break;
      case 20:
      document.primero.provincia.value="Guipuzkoa";
      break;
      case 21:
      document.primero.provincia.value="Huelva";
      break;
      case 22:
      document.primero.provincia.value="Huesca";
      break;
      case 23:
      document.primero.provincia.value="Jaén";
      break;
      case 24:
      document.primero.provincia.value="León";
      break;
      case 25:
      document.primero.provincia.value="Lérida";
      break;
      case 26:
      document.primero.provincia.value="La Rioja";
      break;
      case 27:
      document.primero.provincia.value="Lugo";
      break;
      case 28:
      document.primero.provincia.value="Madrid";
      break;
      case 29:
      document.primero.provincia.value="Málaga";
      break;
      case 30:
      document.primero.provincia.value="Murcia";
      break;
      case 31:
      document.primero.provincia.value="Navarra";
      break;
      case 32:
      document.primero.provincia.value="Orense";
      break;
      case 33:
      document.primero.provincia.value="Asturias";
      break;
      case 34:
      document.primero.provincia.value="Palencia";
      break;
      case 35:
      document.primero.provincia.value="Las Palmas";
      break;
      case 36:
      document.primero.provincia.value="Pontevedra";
      break;
      case 37:
      document.primero.provincia.value="Salamanca";
      break;
      case 38:
      document.primero.provincia.value="Santa Cruz de Tenerife";
      break;
      case 39:
      document.primero.provincia.value="Cantabria";
      case 40:
      document.primero.provincia.value="Segovia";
      break;
      case 41:
      document.primero.provincia.value="Sevilla";
      break;
      case 42:
      document.primero.provincia.value="Soria";
      break;
      case 43:
      document.primero.provincia.value="Tarragona";
      break;
      case 44:
      document.primero.provincia.value="Teruel";
      break;
      case 45:
      document.primero.provincia.value="Toledo";
      break;
      case 46:
      document.primero.provincia.value="Valencia";
      break;
      case 47:
      document.primero.provincia.value="Valladolid";
      break;
      case 48:
      document.primero.provincia.value="Vizcaya";
      break;
      case 49:
      document.primero.provincia.value="Zamora";
      break;
      case 50:
      document.primero.provincia.value="Zaragoza";
      break;
      case 51:
      document.primero.provincia.value="Ceuta";
      break;
      case 52:
      document.primero.provincia.value="Melilla";
      break;
      default:
      document.primero.provincia.value="";
    }//Del switch
  }//Del else
}//De la funcion

function validarFormulario() {//Validamos el formulario segun las especificaciones dadas
  //Validar Nombre Apellidos Domicilio Localidad 1B 0M
  if (esNif() == 0) alert('Formato de NIF erroneo');
  else if (esNif() == 3) alert('Se ha introducido un DNI y no un nif');
  else if (esNif() == 2) alert('Caracter de control del nif erroneo');
  else if (validarNombre() == 0) alert('Formato de nombre incorrecto');
  else if (validarApellido() == 0) alert('Formato de apellido incorrecto');
  else if (validarDomicilio() == 0) alert('Formato de domicilio incorrecto');
  else if (validarLocalidad() == 0) alert('Formato de localidad incorrecto');
  else if (validarCp() == 0) alert('Formato de codigo postal incorrecto');
  else document.primero.submit();

//FUNCIONES PARA VALIDAR EL FORMULARIO------------------------------------------------------------------
  function validarNombre() {//Validamos el nombre
    let nombre = document.primero.nombre.value.replace(/ /g, "").toLowerCase();
    let comprobar = true;

    //Comprobamos el principio
    for (let i = 0; i < 3; i++) {
      if (nombre[i] < "a" || nombre[i] > "z") comprobar = false;
    }

    //Comprobamos la parte central del nombre
    for (let i = 0; i < nombre.length - 2; i++) {
      if (nombre[i] < "a" || nombre[i] > "z") comprobar = false;
    }

    //Comprobamos el final
    for (let i = nombre.length - 1; i > nombre.length - 3; i--) {
      if (nombre[i] < "a" || nombre[i] > "z") comprobar = false;
    }

    if (comprobar == true && nombre.length >= 6 && nombre.length <= 20) return 1;
    else return 0;
  }

  function validarApellido() {//Validamos el apellido
    let apellido = document.primero.apellidos.value.replace(/ /g, "").toLowerCase();
    let comprobar = true;


    //Comprobamos el principio
    for (let i = 0; i < 4; i++) {
      if (apellido[i] < "a" || apellido[i] > "z") comprobar = false;
    }

    //Comprobamos la parte central del nombre
    for (let i = 0; i < apellido.length - 5; i++) {
      if (apellido[i] < "a" || apellido[i] > "z") comprobar = false;
    }

    //Comprobamos el final
    for (let i = apellido.length - 1; i > apellido.length - 6; i--) {
      if (apellido[i] < "a" || apellido[i] > "z") comprobar = false;
    }

    if (comprobar == true && apellido.length >= 12 && apellido.length <= 35) return 1;
    else return 0;
  }

  function validarDomicilio() {
    let domicilio = document.primero.domicilio.value.replace(/ /g, "").toLowerCase();
    let comprobar = true;
    let caracteresEspeciales = ",º.";

    //Comprobamos el principio
    for (let i = 0; i < 3; i++) {
      if (domicilio[i] < "a" || domicilio[i] > "z") comprobar = false;
    }

    //Comprobamos la parte central del nombre
    for (let i = 0; i < domicilio.length - 3; i++) {
      if ((domicilio[i] < "a" || domicilio[i] > "z") && !caracteresEspeciales.includes(domicilio[i])) comprobar = false;
    }

    //Comprobamos el final
    for (let i = domicilio.length - 1; i > domicilio.length - 2; i--) {
      if (domicilio[i] < "a" || domicilio[i] > "z") comprobar = false;
    }

    if (comprobar == true && domicilio.length >= 12 && domicilio.length <= 35) return 1;
    else return 0;
  }

  function validarLocalidad() {//Validamos el apellido
    let localidad = document.primero.localidad.value.replace(/ /g, "").toLowerCase();
    let comprobar = true;

    //Comprobamos el principio
    for (let i = 0; i < 3; i++) {
      if (localidad[i] < "a" || localidad[i] > "z") comprobar = false;
    }

    //Comprobamos la parte central del nombre
    for (let i = 0; i < localidad.length - 5; i++) {
      if (localidad[i] < "a" || localidad[i] > "z") comprobar = false;
    }

    //Comprobamos el final
    for (let i = localidad.length - 1; i > localidad.length - 4; i--) {
      if (localidad[i] < "a" || localidad[i] > "z") comprobar = false;
    }

    if (comprobar == true && localidad.length >= 10 && localidad.length <= 30) return 1;
    else return 0;
  }

  function validarCp() {//Validamos que el codigo postal solo tenga digitos y este entre 1000 y 52999
    let cp = document.primero.cp.value;

    if (isNaN(cp) || cp < 1000 || cp > 52999) return 1;
    else return 0;
  }

  function esNif(nif) {
    let nifM = document.primero.nif.value.toUpperCase();
    let caracteresControl = "TRWAGMYFPDXBNJZSQVHLCKE";
    let caracteresIniciales = "XYZLKM";
    let numeros = 0;
    let caracterControl = "";

    if (nifM.length == 9) {
      //Calculamos el caracter de control
      if (nifM[0] == "Y") {
        numeros = 10000000+parseInt(nifM.substr(1,7));
        caracterControl = caracteresControl[suma%23];
      }
      else if (nifM[0] == "Z") {
        numeros = 20000000+parseInt(nifM.substr(1,7));
        caracterControl = caracteresControl[numeros%23];
      }
      else {
        numeros = parseInt(nifM.substr(0,8));
        caracterControl = caracteresControl[numeros%23];
      }
    }

    //Comprobamos la validez del nif
    if (caracterControl == nifM[nifM.length - 1]) return 1;
    else if (caracterControl != nifM[nifM.length - 1] && caracterControl != "") return 2;
    else if (nifM.length >= 6 && nifM.length <= 8 && !isNaN(nifM[0]) && parseInt(nifM.substr(0,nifM.length - 1)) > 100000) return 3;
    else return 0;
  }
}
