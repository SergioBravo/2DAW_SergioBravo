function duplicado() {
  let potencia = duplica(1,2,3,4,5,6,7);
  let dato = potencia.next();
  let resultado = "";
  while(!dato.done) {
    resultado+=dato.value+"|";
    dato=potencia.next();
  }
  document.formulario.mostrarDupli.value = resultado;
}

function* duplica() {
  let pot = 0;
  for (let i = 0; i < arguments.length; i++) {
    pot = potencia(arguments[i]);
    yield* pot;
  }
}

function* potencia(num) {
  yield num**2;
}
