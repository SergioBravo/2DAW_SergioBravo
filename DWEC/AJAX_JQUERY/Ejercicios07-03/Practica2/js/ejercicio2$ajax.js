$(window).on("load",inicio);

function inicio(){
	$("#boton").on("click",enviarArchivo);
}

function enviarArchivo() {
	let nombre = $("#nombre").val();
	let apellido = $("#apellido").val();
	let modulo = $("#modulo").val();

	if (nombre == "" || apellido == "" || modulo == "") {
    alert("Deben rellenarse los campos obligatorios (*)");
  }
	else {
		let configuracion = {	method:"get",
						data:{nombre:nombre,apellido:apellido,modulo:modulo},
						success:mostrarArchivo}
		let enviar = $.ajax("php/ejercicio2$ajax.php", configuracion);
	}
}

function mostrarArchivo (valor) {
	$("#nota").val(valor);
}
