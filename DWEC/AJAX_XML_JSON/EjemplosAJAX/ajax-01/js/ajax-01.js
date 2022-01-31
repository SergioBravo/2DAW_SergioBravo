if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);
	
function inicio(){
	let peticion;
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
		
		// solicitud del contenido de un fichero de tipo texto
	peticion.open("GET","texto/programa.txt");
		
	// cuarto paso establecer la cabecera si es necesaria
		
	//quinto paso realizar la solicitud al servidor
		// si no se pasan parámetros o bien se pasan parámetros mediante
		// get
	peticion.send(null);
		
}

function procesar(evento){
	let eventos=evento||window.event;
	if (eventos.target.readyState==4)
		if (eventos.target.status==200){
			// procesar los datos
			// eventos.target.responseText
			document.getElementById("resultado").textContent=eventos.target.responseText;
		}
}