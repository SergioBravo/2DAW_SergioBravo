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
let peticion;
function proceso(){
	
	// primer paso crear objeto
	if (window.XMLHttpRequest)
		peticion=new XMLHttpRequest()
	else if (window.ActiveXObject)
		peticion=new ActiveXObject("Microsoft.XMLHTTP");
	
	// segundo paso asignar evento readystatechange
	if (document.addEventListener)
		peticion.addEventListener("readystatechange",procesar)
	else if (document.attachEvent)
		peticion.attachEvent("onreadystatechange",procesar);
	
	// tercer paso establecer conexión con el servidor
	
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	peticion.open("POST","php/ajax-05.php");
		
	
	// cuarto paso establecer la cabecera si es necesaria
		// cabecera para paso de parámetros con POST y envío de JSON
	peticion.setRequestHeader("Content-Type","application/json");
	
	//quinto paso realizar la solicitud al servidor
		// si no se pasan parámetros o bien se pasan parámetros mediante
		// get
	let vnombre=document.getElementById("nombre").value;
	let vapellidos=document.getElementById("apellidos").value;
	
	let datos=new Object();
	datos.nombr=vnombre;
	datos.apelli=vapellidos;
	let datosJSON=JSON.stringify(datos);
	peticion.send(datosJSON);	
}


function procesar(){
	if (peticion.readyState==4)
		if (peticion.status==200){
			// tratar datos recibidos
				// dato recibido que no es xml
			let misdatos=JSON.parse(peticion.responseText);
			document.getElementById("resultado").textContent=misdatos.nombre +
			"  " + misdatos.apellidos + "  " +misdatos.sueldo;
			
		}
}