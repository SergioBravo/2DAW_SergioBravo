var mensaje = "";
function validarFormulario() {
  validarNombre();
  validarCodigoEmpresa();
  comprobarNif();
  validarDireccion();
  validarLocalidad();
  validarCodigoPostal();
  validarTelefono();
  //La fecha la validamos usando el tipo date dentro del input
  comprobarBotones();
  comprobarComunidades();
  comprobarBanco();
  comprobarIban();

  if (mensaje == "") {document.formulario.submit();alert("Documento correcto");}
  else {alert(mensaje);}
  mensaje = "";
}

function validarNombre() {
  let nombre = document.formulario.nombre.value.toLowerCase();
  let cespeciales = "ªº-.";
  let control = 0;
  //Validamos el centro
  for (let i = 1; i < nombre.length - 1; i++) {
    if ((nombre[i] < "a" || nombre[i] > "z")&&(nombre[i] < 0 || nombre[i] > 9)&&!cespeciales.inlcudes(nombre[i])) control = 1;
  }

  if (nombre == "" ||(nombre[0] < "a" || nombre[0] > "z")||control==1||
     ((nombre[nombre.length - 1] < "a" || nombre[nombre.length - 1] > "z")
     &&(nombre[nombre.length - 1] < 0 || nombre[nombre.length - 1] > 9)&&nombre[nombre.length - 1] != ".")){mensaje += "Formato de nombre incorrecto \n";}
}

function validarCodigoEmpresa() {
  let codigo = document.formulario.cempresa.value;
  let control = 0;
  //Validamos el codigo
  for (let i = 1; i < codigo.length; i++) {
    if ((codigo[i] < "a" || codigo[i] > "z")&&(codigo[i] < 0 || codigo[i] > 9)) control = 1;
  }
  if (codigo.length < 5 || codigo.length > 10 || control == 1) {mensaje += "Formato de codigo de empresa incorrecto \n";}
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
  let direccion = document.formulario.direccion.value.toLowerCase();
  let cespeciales = "ªº-./";
  let control = 0;
  //Validamos el centro
  for (let i = 1; i < direccion.length - 1; i++) {
    if ((direccion[i] < "a" || direccion[i] > "z")&&(direccion[i] < 0 || direccion[i] > 9)&&!cespeciales.inlcudes(direccion[i])) control = 1;
  }

  if ((direccion[0] < "a" || direccion[0] > "z")||control==1||
     ((direccion[direccion.length - 1] < "a" || direccion[direccion.length - 1] > "z")
     &&(direccion[direccion.length - 1] < 0 || direccion[direccion.length - 1] > 9))){mensaje += "Formato de dirección incorrecto \n";}
}

function validarLocalidad() {
  let localidad = document.formulario.localidad.value.replace(/ /g, "").toLowerCase();
  let control = 0;
  //Validamos el centro
  for (let i = 1; i < localidad.length - 1; i++) {
    if ((localidad[i] < "a" || localidad[i] > "z")) control = 1;
  }

  if ((localidad[0] < "a" || localidad[0] > "z") || (localidad[localidad.length - 1] < "a" || localidad[localidad.length - 1] > "z") || control == 1){mensaje += "Formato de localidad incorrecto \n";}
}

function validarCodigoPostal() {
  let cp = document.formulario.cp.value.trim();

  if (cp < 1000 || cp > 52999)mensaje += "Formato de codigo postal incorrecto \n";
}

function validarTelefono() {
  let telefono = document.formulario.telefono.value.trim();

  if (telefono.length != 9 || (telefono[0] != 6 && telefono[0] != 9 && telefono[0] != 7)) mensaje += "Formato de telefono incorrecto \n";
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

  comprobar = "";

  if (cBanco.length != 4)comprobar += "Tamaño del codigo del banco incorrecto \n";
  if (cSucursal.length != 4)comprobar += "Tamaño del codigo de oficina incorrecto \n";
  if (nCuenta.length != 10)comprobar += "Tamaño del codigo del numero de cuenta incorrecto \n";

  if (comprobar != "")mensaje += comprobar;
  else {
    document.formulario.ccontrol.onBlur = ponerCodigo();

    function ponerCodigo() {document.formulario.ccontrol.value = codigosControl(cBanco,cSucursal,nCuenta)}
  }
}
function comprobarIban() {
  let iban = document.formulario.iban.value.toLowerCase().replace(/ /g, "");
  iban = iban.trim();//Quitamos los blancos del principio y el final de la cadena
  let control = 0;
  //Validamos el resto del iban
  for (let i = 2; i < iban.length; i++) {
    if (isNaN(iban[i])) control = 1;
  }

  if (iban[0] < "a" || iban[0] > "z"||iban[1] < "a" || iban[1] > "z" || control == 1 || iban.length > 34 || iban.length < 15) mensaje += "Formato del iban incorrecto \n";
  else if (comprobarIBAN(iban) == false) mensaje += "Iban incorrecto \n";
}
