if (document.addEventListener)
	window.addEventListener("load",principio)
else if (document.attachEvent)
	window.attachEvent("onload",principio);
	
function principio(){
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
	
}

