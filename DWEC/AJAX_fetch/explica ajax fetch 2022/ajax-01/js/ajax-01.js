if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);
	
function inicio(){
	// solicitud del contenido de un fichero de tipo texto
	fetch("texto/programa.txt")
		.then(inicial)
		.catch(errores);		
}

function inicial(response){
	if (response.ok)
		response.text().then(mostrar);
}

function mostrar(dato){	
	document.getElementById("resultado").textContent=dato;
}

function  errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}