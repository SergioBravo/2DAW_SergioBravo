$(window).on("load",inicio);

function inicio() {
	vacio();pedirDatos();
	$("#marca").on("change",mandarDatos);
	$("#electrodomesticos").on("change",mandarDatos);
}

function vacio() {//Vaciamos todo el formulario
	$('#formulario')[0].reset();
}

function pedirDatos() {//Pedimos los datos JSON al servidor
	let configura = {
		method:"POST",
		headers:{"Content-Type":"application/json"},
		dataType:"text",
		success:rellenarSelect
	}
	$.ajax("php/ejercicio6.php",configura);
}

function rellenarSelect(datos) {//Recibimos los datos del servidor y rellenamos las select
	let misdatos = JSON.parse(datos);
	let padreMarca = $("#marca");

	for (let i = 0; i < misdatos.length; i++) {
		$(padreMarca).append("<option>"+misdatos[i]+"</option>");
	}
}

function mandarDatos() {//Mandamos una cadena JSON al servidor
	let vmarca = $("#marca").val();
	let velectro = $("#electrodomesticos").val();

	let datos = {
		marca:vmarca,
		electro:velectro
	}

	let datosJSON = JSON.stringify(datos);

	let configura = {
		method:"POST",
		headers:{"Content-Type":"application/json"},
		dataType:"text",
		data:datosJSON,
		success:mostrarValores
	}
	$.ajax("php/ejercicio6b.php",configura);
}

function mostrarValores(datos) {
	let misdatos = JSON.parse(datos);

	$("#ancho").val(misdatos.ancho);
	$("#alto").val(misdatos.alto);
	$("#fondo").val(misdatos.fondo);
}
