window.onload = inicio;

function inicio() {
  document.formulario.cp.onblur = verProvincia;
  document.formulario.cbanco.onblur = ponerCodigo;
  document.formulario.csucursal.onblur = ponerCodigo;
  document.formulario.ncuenta.onblur = ponerCodigo;
}
var mensaje = "";
function validarFormulario() {
  validarNombre();
  validarCodigoEmpresa();
  comprobarNif();
  validarDireccion();
  validarLocalidad();
  validarCodigoPostal();
  validarTelefono();
  validarFecha();
  comprobarBotones();
  comprobarComunidades();
  comprobarBanco();
  comprobarIban();

  if (mensaje == "") {document.formulario.submit();alert("Documento correcto");}
  else {alert(mensaje);}
  mensaje = "";
}

function validarNombre() {
  let nombre = document.formulario.nombre.value;
  let expRegNom =/^[a-záéíóúüñ]([a-záéíóúüñ0-9ªº-]|.)+[a-záéíóúüñ0-9.]$/i;
  if (!expRegNom.test(nombre)){mensaje += "Formato de nombre incorrecto \n";}
}

function validarCodigoEmpresa() {
  let codigo = document.formulario.cempresa.value;
  let expRegCod =new RegExp("^[a-záéíóúüñ0-9]{5,10}$",'i');
  if (!expRegCod.test(codigo)) {mensaje += "Formato de codigo de empresa incorrecto \n";}
}

function comprobarNif() {
  let cadena = document.formulario.nif.value.replace(/ /g, "");
  cadena.trim();
  if (NifCif(cadena) == "C2")mensaje += "Cif caracter control mal \n";
  if (NifCif(cadena) == "N2")mensaje += "NIf caracter control mal \n";
  if (NifCif(cadena) == "N3")mensaje += "Se ha metido un dni \n";
  if (NifCif(cadena) == "0") mensaje += "Valor erroneo CIF/NIF \n";
}

function validarDireccion() {
  let direccion = document.formulario.direccion.value;
  let expRegDir =/^[a-záéíóúüñ]([a-záéíóúüñ0-9ªº-]|[\.\/])+[a-záéíóúüñ0-9.]$/i;
  if (!expRegDir.test(direccion)){mensaje += "Formato de dirección incorrecto \n";}
}

function validarLocalidad() {
  let localidad = document.formulario.localidad.value;
  let expRegloc =new RegExp("^[a-záéíóúüñ][a-záéíóúüñ ]+[a-záéíóúüñ]$",'i');
  if (!expRegloc.test(localidad)) {mensaje += "Formato de localidad incorrecto \n";}
}

function validarCodigoPostal() {
  let cp = document.formulario.cp.value.trim();
  let expRegCodp = /^((0?\d)|([1234]\d)|(5[12]))\d{3}$/i;
  if (!expRegCodp.test(cp)) mensaje += "Formato de codigo postal incorrecto \n";
}

function verProvincia() {
  let cp = document.formulario.cp.value.trim();
  let expRegCodp = /^((0?\d)|([1234]\d)|(5[12]))\d{3}$/i;

  if (expRegCodp.test(cp)) {añadirProvincias(cp);}
  else document.formulario.provincia.value = " ";
}

function añadirProvincias(cp) {
  let provincia = parseInt(cp.substr(0,2));
  switch (provincia) {
    case 1:
    document.formulario.provincia.value="Araba/Álava";
    break;
    case 2:
    document.formulario.provincia.value="Albacete";
    break;
    case 3:
    document.formulario.provincia.value="Alicante/Alacant";
    break;
    case 4:
    document.formulario.provincia.value="Almería";
    break;
    case 5:
    document.formulario.provincia.value="Ávila";
    break;
    case 6:
    document.formulario.provincia.value="Badajoz";
    break;
    case 7:
    document.formulario.provincia.value="Baleares";
    break;
    case 8:
    document.formulario.provincia.value="Barcelona";
    break;
    case 9:
    document.formulario.provincia.value="Burgos";
    break;
    case 10:
    document.formulario.provincia.value="Cáceres";
    break;
    case 11:
    document.formulario.provincia.value="Cádiz";
    break;
    case 12:
    document.formulario.provincia.value="Castellón";
    break;
    case 13:
    document.formulario.provincia.value="Ciudad Real";
    break;
    case 14:
    document.formulario.provincia.value="Córdoba";
    break;
    case 15:
    document.formulario.provincia.value="A Coruña";
    break;
    case 16:
    document.formulario.provincia.value="Cuenca";
    break;
    case 17:
    document.formulario.provincia.value="Gerona";
    break;
    case 18:
    document.formulario.provincia.value="Granada";
    break;
    case 19:
    document.formulario.provincia.value="Guadalajara";
    break;
    case 20:
    document.formulario.provincia.value="Guipuzkoa";
    break;
    case 21:
    document.formulario.provincia.value="Huelva";
    break;
    case 22:
    document.formulario.provincia.value="Huesca";
    break;
    case 23:
    document.formulario.provincia.value="Jaén";
    break;
    case 24:
    document.formulario.provincia.value="León";
    break;
    case 25:
    document.formulario.provincia.value="Lérida";
    break;
    case 26:
    document.formulario.provincia.value="La Rioja";
    break;
    case 27:
    document.formulario.provincia.value="Lugo";
    break;
    case 28:
    document.formulario.provincia.value="Madrid";
    break;
    case 29:
    document.formulario.provincia.value="Málaga";
    break;
    case 30:
    document.formulario.provincia.value="Murcia";
    break;
    case 31:
    document.formulario.provincia.value="Navarra";
    break;
    case 32:
    document.formulario.provincia.value="Orense";
    break;
    case 33:
    document.formulario.provincia.value="Asturias";
    break;
    case 34:
    document.formulario.provincia.value="Palencia";
    break;
    case 35:
    document.formulario.provincia.value="Las Palmas";
    break;
    case 36:
    document.formulario.provincia.value="Pontevedra";
    break;
    case 37:
    document.formulario.provincia.value="Salamanca";
    break;
    case 38:
    document.formulario.provincia.value="Santa Cruz de Tenerife";
    break;
    case 39:
    document.formulario.provincia.value="Cantabria";
    case 40:
    document.formulario.provincia.value="Segovia";
    break;
    case 41:
    document.formulario.provincia.value="Sevilla";
    break;
    case 42:
    document.formulario.provincia.value="Soria";
    break;
    case 43:
    document.formulario.provincia.value="Tarragona";
    break;
    case 44:
    document.formulario.provincia.value="Teruel";
    break;
    case 45:
    document.formulario.provincia.value="Toledo";
    break;
    case 46:
    document.formulario.provincia.value="Valencia";
    break;
    case 47:
    document.formulario.provincia.value="Valladolid";
    break;
    case 48:
    document.formulario.provincia.value="Vizcaya";
    break;
    case 49:
    document.formulario.provincia.value="Zamora";
    break;
    case 50:
    document.formulario.provincia.value="Zaragoza";
    break;
    case 51:
    document.formulario.provincia.value="Ceuta";
    break;
    case 52:
    document.formulario.provincia.value="Melilla";
    break;
  }//Del switch
}

function validarTelefono() {
  let telefono = document.formulario.telefono.value.trim();
  let expRegTelefono =  new RegExp("^[967]\\d{8}$","g");
  if (!expRegTelefono.test(telefono)) mensaje += "Formato de telefono incorrecto \n";
}

/*function validarFax() {
  let fax = document.formulario.telefono.value.trim();
  let expRegFax = new RegExp("^9\d{9}");
  if (!expRegFax.test(fax)) mensaje += "Formato de fax incorrecto \n";
}*/

function validarFecha() {
  let fecha = document.formulario.fempresa.value;
  let expRegFecha = /^\d{1,2}[\/\-]\d{1,2}[\/\-]((\d{2})|(\d{4}))$/;
  if (!expRegFecha.test(fecha)) mensaje += "Formato de fecha incorrecto \n";
}

function comprobarBotones() {
  let con = 0;

  for (let i = 0; i < document.formulario.elements.length; i++) {
    if (document.formulario.elements[i].type == "checkbox" && document.formulario.elements[i].checked) con++;
  }

  if (con < 1) mensaje += "No se ha seleccionado ninguna casilla de verificación \n";

  con = 0;

  for (let i = 0; i < document.formulario.elements.length; i++) {
    if (document.formulario.elements[i].type == "radio" && document.formulario.elements[i].checked) con++;
  }

  if (con < 1) mensaje += "No se ha seleccionado ningun botón \n";
  if (con > 2) mensaje += "Solo se puede seleccionar un botón por sección \n";
}

function comprobarComunidades() {
  let comunidades = document.formulario.lista;
  let con = 0;

  for (let i = 0; i < comunidades.length; i++) {
    if (comunidades[i].selected)con++;
  }

  if (con < 2)mensaje += "Número de comunidades mal \n";
}

function comprobarBanco() {
  let cBanco = document.formulario.cbanco.value,
  cSucursal = document.formulario.csucursal.value,
  nCuenta = document.formulario.ncuenta.value;
  let expRegcbs = new RegExp("^[0-9]{4}$"),
  expRegcuenta = new RegExp("^[0-9]{10}$");
  let comprobar = "";

  if (!expRegcbs.test(cBanco))comprobar += "Tamaño del codigo del banco incorrecto \n";
  if (!expRegcbs.test(cSucursal))comprobar += "Tamaño del codigo de oficina incorrecto \n";
  if (!expRegcuenta.test(nCuenta))comprobar += "Tamaño del codigo del numero de cuenta incorrecto \n";

  if (comprobar != "")mensaje += comprobar;
}

function ponerCodigo() {
  let cBanco = document.formulario.cbanco.value,
  cSucursal = document.formulario.csucursal.value,
  nCuenta = document.formulario.ncuenta.value;
  let expRegcbs = new RegExp("^[0-9]{4}$"),
  expRegcuenta = new RegExp("^[0-9]{10}$");
  let comprobar = "";

  if (!expRegcbs.test(cBanco))comprobar += "0";
  if (!expRegcbs.test(cSucursal))comprobar += "0";
  if (!expRegcuenta.test(nCuenta))comprobar += "0";

  if (comprobar == "") document.formulario.ccontrol.value = codigosControl(cBanco,cSucursal,nCuenta);
  else document.formulario.ccontrol.value = " ";
}

function comprobarIban() {
  let iban = document.formulario.iban.value.toLowerCase();
  iban = iban.trim();//Quitamos los blancos del principio y el final de la cadena
  let expRegIban = /^[a-z]{2}[0-9]{22}$/i;
  if (!expRegIban.test(iban)) mensaje += "Formato de Iban incorrecto \n";
  else {
    if (!comprobarIBAN(iban)) mensaje += "Iban incorrecto \n";
  }
}
