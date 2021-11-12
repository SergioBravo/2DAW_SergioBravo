window.onload = inicio;

function inicio() {
  document.formulario.minimo.onclick = mostrarMinimos;
}

function mostrarMinimos() {
  let uno = Number(document.formulario.uno.value), dos = Number(document.formulario.dos.value), tres = Number(document.formulario.tres.value),
      cuatro = Number(document.formulario.cuatro.value), cinco = Number(document.formulario.cinco.value);

  if (cuatro != "" && cinco != ""){document.formulario.seis.value = minimos(uno,dos,tres,cuatro,cinco);}//solo metemos cuatro y cinco cuando contengan algun valor
  else {document.formulario.seis.value = minimos(uno,dos,tres);}
}

function minimos(uno,dos,tres,cuatro = 13,cinco = 7) {
  let minimo = uno;
  let numeros = [dos,tres,cuatro,cinco];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < minimo) {minimo = numeros[i];}
  }

  return minimo;
}
