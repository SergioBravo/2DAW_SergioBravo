window.onload=inicio;
function inicio (){
	document.formulario.Convertir.onclick=comprobar;
}
function comprobar (){
	var vocales="AaEeIiOoUu";
	var cadena = document.formulario.cad.value;
	var voc = 0;

	for (var i = 0; i<cadena.length; i++){
		for (var x = 0; x<vocales.length; x++){
			if (cadena[i] == vocales[x]) voc++;
		}
	}

	document.formulario.voc.value = voc;
	document.formulario.con.value = cadena.length - voc;
}
