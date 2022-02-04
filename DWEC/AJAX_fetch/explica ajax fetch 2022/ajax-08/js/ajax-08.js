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
	let misdatos= new FormData();
	misdatos.append("nombr",vnombre);
	misdatos.append("apelli",vapellidos);
	
	let configura={
		method:"POST",
		body:misdatos
	}
		
	fetch("php/ajax-08.php", configura)
		.then(tratar)
		.catch(errores);
}

function  errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}

function tratar(respuesta){
	if (respuesta.ok)
		respuesta.text().then(procesar);
}

function procesar(resultado){
	document.getElementById("resultado").textContent=resultado;	
}