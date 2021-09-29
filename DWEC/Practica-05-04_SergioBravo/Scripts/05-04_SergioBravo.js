window.onload=inicio;
function inicio () {
	document.formulario.Convertir.onclick = convertir;
}
function convertir (){
	var dec = Number(document.formulario.dec.value);

	//CONVERTIR A BINARIO USANDO TOSTRING
	document.formulario.bin.value = dec.toString(2);
	//CONVERTIR A OCTAL CON TOSTRING
	document.formulario.oct.value = dec.toString(8);
	//CONVERTIR A HEXADECIMAL CON TOSTRING
	document.formulario.hex.value = dec.toString(16);
}
