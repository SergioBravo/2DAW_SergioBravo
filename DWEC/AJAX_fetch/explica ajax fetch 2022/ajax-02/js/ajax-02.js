if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);
	
function inicio(){
	let miboton=document.getElementById("solicitud");
	if (document.addEventListener)
		miboton.addEventListener("click",proceso)
	else if (document.attachEvent)
		miboton.attachEvent("onclick",proceso);
}

function proceso(){
	let vnombre=document.getElementById("nombre").value;
	let vapellidos=document.getElementById("apellidos").value;
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	let configuracion={method:"GET"};
	fetch("php/ajax-02.php?nombre="+vnombre+"&apellidos="+vapellidos,configuracion)
		.then(comienzo)
		.catch(errores);
}

function comienzo(respuesta){
	if (respuesta.ok)
		respuesta.text().then(procesamiento);
}

function  errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}
function procesamiento(dato){
	document.getElementById("resultado").textContent=dato;	
}