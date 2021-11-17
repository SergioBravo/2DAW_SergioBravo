function suma() {
  let sumando=sumatorio(1,2,3,4,5,6,7,8);
  let dato=sumando.next();
  let resultado = "";
  while(!dato.done) {
    resultado+=dato.value+"|";
    dato=sumando.next();
  }
  document.formulario.mostrarSuma.value = resultado;
}

function* sumatorio() {
  let suma=0;
  for (let i = 0; i < arguments.length; i++) {
    suma+=arguments[i];
    yield suma*3;
  }
}
