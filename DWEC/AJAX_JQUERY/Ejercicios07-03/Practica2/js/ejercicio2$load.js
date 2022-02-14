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
		$("#nota").load("php/ejercicio2$load.php?nombre="+nombre+"&apellido="+apellido+"&modulo="+modulo);
	}
}
