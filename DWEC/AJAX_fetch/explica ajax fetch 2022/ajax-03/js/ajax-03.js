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

	// establecer conexión con el servidor
	let vnombre=document.getElementById("nombre").value;
	let vapellidos=document.getElementById("apellidos").value;
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	//let cadena=;
	let estado={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		body:"nombr="+vnombre+"&apelli="+vapellidos
	}
	fetch("php/ajax-03.php", estado)
		.then(despues)
		.catch(errores);

}

function despues(valor){
	if (valor.ok)
		valor.text().then(procesar);
}

function  errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}

function procesar(dato){	
	document.getElementById("resultado").textContent=dato;	
}