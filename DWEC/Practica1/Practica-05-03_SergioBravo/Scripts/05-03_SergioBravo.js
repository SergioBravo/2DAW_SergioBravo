window.onload=inicio;
function inicio () {
	document.formulario.calcular.onclick = calcularPrimos;
}
function calcularPrimos () {
	var ini = Number(document.formulario.ni.value);
	var fi = Number(document.formulario.nf.value);

	document.formulario.primos.value+="|";
  	for (var i = ini+1; i < fi; i++){
    	var primo = true;
    	for (var x = 2; x <= i/2; x++) {
      		if(i%x == 0){
        		primo = false;
      		}
    	}
    	if (primo) document.formulario.primos.value+=i+"|";
  	}
}

function sumar () {
	var ini = Number(document.formulario.ni.value);
	var fi = Number(document.formulario.nf.value);

	var sumar = ini + fi;

	document.formulario.primos.value=sumar;
}
