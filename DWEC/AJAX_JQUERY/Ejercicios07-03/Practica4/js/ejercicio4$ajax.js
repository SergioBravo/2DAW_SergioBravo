$(window).on("load",inicio);

function inicio() {
	$("#boton").on("click",enviarArchivo);
}

function enviarArchivo() {
	let nom = $("#nombre").val();
	let apel = $("#apellido").val();
	let pue = $("#puesto").val();

	if (nom == "" || apel == "" || pue == "") {
		alert("Deben rellenarse los campos obligatorios (*)");
	}
	else {
		let datos = new FormData();//Creamos el objeto from data
		//Añadimos los datos
		datos.append("nombre",nom);
		datos.append("apellido",apel);
		datos.append("puesto",pue);

	let configura={
		method:"POST",
		data:datos,
		success:mostrarSueldo,
		contentType: false,
		processData: false
	}

	$.ajax("php/ejercicio4.php",configura);
	}
}


function mostrarSueldo (valor) {
	$("#sueldo").val(valor);
}
