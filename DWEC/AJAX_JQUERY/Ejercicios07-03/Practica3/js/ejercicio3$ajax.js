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
		let configuracion = {	method:"post",
							data:{nombre:nombre,apellido:apellido,modulo:modulo,nota:nota},
							success:mostrarResultado}


		let enviar = $.ajax("php/ejercicio3.php",configuracion);
	}
}

function mostrarResultado(valor) {
	$("#resultado").val(valor);
}
