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

		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
		
	let vnombre=document.getElementById("nombre").value;
	let vapellidos=document.getElementById("apellidos").value;
	
	let datos={
		nombr:vnombre,
		apelli:vapellidos
	}
	let datosJSON=JSON.stringify(datos);
		
	let configura={
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:datosJSON
	}
	fetch("php/ajax-05.php", configura)
		.then(tratar)
		.catch(errores);
}

function tratar(respuesta){
	if (respuesta.ok)
		respuesta.json().then(procesar);
}

function  errores(){
	alert("error en la conexión con el servidor");
	document.getElementById("resultado").textContent="error en la conexión con el servidor"
}

function procesar(misdatos){
	document.getElementById("resultado").textContent=misdatos.nombre +
	"  " + misdatos.apellidos + "  " +misdatos.sueldo;		
}