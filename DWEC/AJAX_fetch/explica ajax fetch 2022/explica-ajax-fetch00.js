fetch(url-programa-servidor,objeto-configuración)
		.then(función-correcto)
		.catch(función-error)
		
let objeto-configuración={
	method:"GET"|"POST" ,
	headers :{ "Content-Type":"application/x-www-form-urlencoded"},
	headers :{"Content-Type":"application/json"},
	headers : { "Content-Type":"text/plain"},
	cache:"no-cache"|"default" | "reload" | "no-store" | "force-cache" | 
			"only-if-cached" ,
	body: valor-enviado-post	
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