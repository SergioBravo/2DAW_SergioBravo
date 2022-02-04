if (document.addEventListener)
	window.addEventListener("load",principio)
else if (document.attachEvent)
	window.attachEvent("onload",principio);
	
function principio(){
	let boton=document.getElementById("miboton");
	if (document.addEventListener)
		boton.addEventListener("click",iniciar-conexion)
	else if (document.attachEvent)
		boton.attachEvent("onclick",iniciar-conexion);
}

function iniciar-conexion(){
	fetch(url-programa-servidor,objeto-configuración)
		.then(función-correcto)
		.catch(función-error)
}

function función-correcto(response){
	if (response.ok)
		response.text().then(tratamiento);
	
	if (response.ok)
		response.json().then(tratamiento);
}

function función-error(){
	// mensaje de error
}

function tratamiento(valor-devuelto){
	// tratamiento valor devuelto
}

