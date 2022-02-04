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
	let cadenaxml="<personal><persona><nombre apellidos=' "+vapellidos+"'>"+vnombre+
						"</nombre></persona></personal>";
	
	let estado={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		body:cadenaxml
	}
	fetch("php/ajax-07.php", estado)
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
	let parsar=new DOMParser();
	let misdatos=parsar.parseFromString(resultado,"application/xml");	
	let nom=misdatos.getElementsByTagName("nombre").item(0);
	let ape=nom.getAttribute("apellidos");
	let suel=nom.getAttribute("sueldo");
	let cadena=nom.textContent + "  " + ape + "  "+suel;
	document.getElementById("resultado").textContent=cadena;	
}