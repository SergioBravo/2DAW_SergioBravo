window.onload = inicio;

function inicio() {
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
}

function backgroundBlanco (evento) {
  let eventos = evento || window.event;
  eventos.target.style.backgroundColor = "white";
}

function backgroundRojo (evento) {
  let eventos = evento || window.event;
  eventos.target.style.backgroundColor = "red";
  eventos.target.value = "";
}

function comprobarCp (evento) {
  let eventos = evento || window.event;
  
}
