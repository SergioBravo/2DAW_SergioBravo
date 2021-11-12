window.onload = inicio;

function inicio() {
  document.formulario.maximo.onclick = mostrarMaximos;
}

function mostrarMaximos() {
  maximos = maximos(1,10,2,9,12);
  document.formulario.primero.value = maximos[0];
  document.formulario.segundo.value = maximos[1];
}
function maximos() {
  let primerValor = 0;
  let segundoValor = 0;

  if (arguments.length > 3) {//En caso de que nos pasen menos de tres parametros
    for (var i = 0; i < arguments.length; i++) {//Sacamos el primer valor maximo
      if (arguments[i] > primerValor) {primerValor = arguments[i];}
    }

    for (var i = 0; i < arguments.length; i++) {//Sacamos el segundo valor maximo
      if (arguments[i] > segundoValor && arguments[i] < primerValor) {segundoValor = arguments[i];}
    }
  }

  return [primerValor,segundoValor];
}
