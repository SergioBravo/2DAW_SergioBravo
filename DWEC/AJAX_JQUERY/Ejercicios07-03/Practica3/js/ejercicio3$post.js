$(window).on("load",inicio);

function inicio(){
	$("#boton").on("click",enviarArchivo);
}

function enviarArchivo() {
	let nombre = $("#nombre").val();
	let apellido = $("#apellido").val();
	let modulo = $("#modulo").val();
	let nota = $("#nota").val();

	if (nombre == "" || apellido == "" || modulo == "" || nota == "") {
    alert("Deben rellenarse los campos obligatorios (*)");
  }
	else {
		let enviar = $.post("php/ejercicio3.php", {nombre:nombre,apellido:apellido,modulo:modulo,nota:nota},mostrarResultado);
	}
}

function mostrarResultado(valor) {
	$("#resultado").val(valor);
}
