if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);
	
function inicio(){
	let miboton=document.getElementById("conexion");
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
		// solicitud a un programa php, que devuelve valor/es
	peticion.open("GET","php/programa.php");
		// solicitud del contenido de un fichero de tipo texto
	peticion.open("GET","php/programa.txt");
		// solicitud a un programa php con paso de parámetros fijos
		// mediante get
	peticion.open("GET","php/programa.php?nombre=Félix&apellidos=Muñoz");
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
	peticion.open("GET","php/programa.php?nombre="+vnombre+"&apellidos="+vapellidos);
		// solicitud a un programa php con paso de parámetros 
		// mediante post
	peticion.open("POST","php/programa.php");
	
	// cuarto paso establecer la cabecera si es necesaria
		// cabcera para paso de parámetros con POST y envío de XML
	peticion.setRequestHeader("Content-Type","application/x-www-urlencoded");
		// cabcera cuando se envía un objeto JSON
	peticion.setRequestHeader("Content-Type","application/json");
	
	//quinto paso realizar la solicitud al servidor
		// si no se pasan parámetros o bien se pasan parámetros mediante
		// get
	peticion.send(null);
		// si se pasan parámetros mediante post, parámetros fijos
	peticion.send("nombre=Félix&apellidos=Muñoz");
		// si se pasan parámetros mediante post, parámetros en variables
	peticion.send("nombre="+vnombre+"&apellidos="+vapellidos);
}


function procesar(){
	if (peticion.readyState==4)
		if (peticion.status==200){
			// tratar datos recibidos
				// dato recibido que no es xml
			peticion.responseText
				// dato recibido que es XML.
			peticion.responseXML
		}
}