$(window).on("load",inicio);

function inicio() {
	vacio();pedirDatos();
	$("#marca").on("change",enviarDatos);
	$("#dimensiones").on("change",enviarDatos);
}

function vacio() {//Vaciamos todo el formulario
	$('#formulario')[0].reset();
}

function pedirDatos() {//Pedimos una cadena xml al servidor
	let configuracion = {method:"get",
											dataType:"xml",
											success:rellenarSelect}

	let datos = $.ajax("php/ejercicio5.php", configuracion);
}

function rellenarSelect(datos) {
	let marcas = $(datos).find("marca");
	let dimensiones = $(datos).find("dimension");
	let padreMarca = $("#marca");
	let padreDimension = $("#dimensiones");

	for (let i = 0; i < marcas.length; i++) {
		$(padreMarca).append("<option>"+$(marcas).eq(i).text()+"</option>");
	}

	for (let i = 0; i < dimensiones.length; i++) {
		$(padreDimension).append("<option>"+$(dimensiones).eq(i).text()+"</option>");
	}
}

function enviarDatos() {
	let vmarca=$("#marca").val();
	let vdimension=$("#dimensiones").val();
	let cadenaxml = "<tipostv><tv><marca>"+vmarca+"</marca><dimensiones>"+vdimension+"</dimensiones></tv></tipostv>";


	let estado = {
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		dataType:"xml",
		data:cadenaxml,
		success:mostrarPrecio
	}
	$.ajax("php/ejercicio5b.php",estado);
}

function mostrarPrecio(datos) {
	let sueldo = $(datos).find("precio").eq(0).text();
	$("#precio").val(sueldo);
}
