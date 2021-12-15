if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
    desactivarAñadirMensaje();
    vacio();

    let botonRegistro = document.getElementById('registrase');
    let aceptarRegistro = document.getElementById('aceptarReg');
    let cancelarRegistro = document.getElementById('cancelarReg');
    let botonEntrar = document.getElementById('entrar');
    let aceptarEntrar = document.getElementById('aceptarEntra');
    let cancelarEntrar = document.getElementById('cancelarEntra');
    let definiciones = document.getElementById('definicion');
    let localidades = document.getElementById('añadirLocal');
    let coches = document.getElementById('añadirCoche');
		let comunidades = document.getElementById('comunidades');
		let botonMensaje = document.getElementById('añadirMensaje');
    let aceptarMensaje = document.getElementById('aceptarMen');
    let cancelarMensaje = document.getElementById('cancelarMen');

    if (document.addEventListener) {
      botonRegistro.addEventListener("click",abrirCuadroReg);
      aceptarRegistro.addEventListener("click",comprobarRegistro);
      cancelarRegistro.addEventListener("click",cerrarCuadroReg);
      botonEntrar.addEventListener("click",abrirCuadroEntra);
      aceptarEntrar.addEventListener("click",comprobarEntrar);
      cancelarEntrar.addEventListener("click",cerrarCuadroEntra);
      definiciones.addEventListener("click",añadirDefinicion);
      localidades.addEventListener("click",añadirLocalidad);
      coches.addEventListener("click",añadirCoche);
      comunidades.addEventListener("change",añadirProvincia);
			botonMensaje.addEventListener("click",abrirCuadroMen);
      aceptarMensaje.addEventListener("click",añadirMensaje);
      cancelarMensaje.addEventListener("click",cerrarCuadroMen);
    }
    else if (document.attachEvent){
      botonRegistro.attachEvent("click",abrirCuadroReg);
      aceptarRegistro.attachEvent("click",comprobarRegistro);
      cancelarRegistro.attachEvent("click",cerrarCuadroReg);
      botonEntrar.attachEvent("click",abrirCuadroEntra);
      aceptarEntrar.attachEvent("click",comprobarEntrar);
      cancelarEntrar.attachEvent("click",cerrarCuadroEntra);
      definiciones.attachEvent("click",añadirDefinicion);
      localidades.attachEvent("click",añadirLocalidad);
			coches.attachEvent("click",añadirCoche);
      comunidades.attachEvent("change",añadirProvincia);
			botonMensaje.addEventListener("click",abrirCuadroMen);
      aceptarMensaje.addEventListener("click",añadirMensaje);
      cancelarMensaje.addEventListener("click",cerrarCuadroMen);
    }
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById("formulario").elements.length; i++) {
    if (document.getElementById("formulario").elements[i].type == "text") {document.getElementById("formulario").elements[i].value = "";}
  }
  for (let i = 0; i < document.getElementById("formRegistro").elements.length; i++) {
    if (document.getElementById("formRegistro").elements[i].type == "text") {document.getElementById("formRegistro").elements[i].value = "";}
  }
  for (let i = 0; i < document.getElementById("formEntrar").elements.length; i++) {
    if (document.getElementById("formEntrar").elements[i].type == "text") {document.getElementById("formEntrar").elements[i].value = "";}
  }
	for (let i = 0; i < document.getElementById("formMensaje").elements.length; i++) {
    if (document.getElementById("formMensaje").elements[i].type == "text") {document.getElementById("formMensaje").elements[i].value = "";}
  }
}

function desactivarAñadirMensaje() {//Ponemos el hidden el botón añadir mensaje
  document.getElementById('añadirMensaje').textContent = "Añadir mensaje";
  let mensaje = document.getElementById("añadirMensaje");
  mensaje.setAttribute("disabled",true);
}

function abrirCuadroReg() {//Abrimos el cuadro de dialogo para el registro
  cerrarCuadroEntra();
	cerrarCuadroMen();
  let dialogo = document.getElementById("cuadro");
  dialogo.setAttribute("open",true);
}

function abrirCuadroEntra() {//Abrimos le cuadro de dialogo para la entrada
  cerrarCuadroReg();
	cerrarCuadroMen();
  let dialogo = document.getElementById("cuadro2");
  dialogo.setAttribute("open",true);
}

function abrirCuadroMen() {//Abrimos le cuadro de dialogo para la entrada
  cerrarCuadroReg();
  let dialogo = document.getElementById("cuadro3");
  dialogo.setAttribute("open",true);
}

function cerrarCuadroReg() {//Cerramos el cuadro de dialogo del registro
  let dialogo = document.getElementById("cuadro");
  dialogo.removeAttribute("open");
}

function cerrarCuadroEntra() {//Cerramos el cuadro de dialogo de la entrada
  let dialogo = document.getElementById("cuadro2");
  dialogo.removeAttribute("open");
}

function cerrarCuadroMen() {//Cerramos el cuadro de dialogo de la entrada
  let dialogo = document.getElementById("cuadro3");
  dialogo.removeAttribute("open");
}

function comprobarNombre(nombre) {//Comprobamos el formato del nombre
  let expRegNom =/^[a-záéíóúüñ]{3}([a-záéíóúüñ]|[0-9]){5,9}$/i;
  let comprobar = true;

  if (!expRegNom.test(nombre)){comprobar = false;}

  return comprobar;
}

function comprobarContraseña(contraseña) {//Comprobamos el formato de la contraseña
  let expRegCon =/^[a-záéíóúüñ]{2}([a-záéíóúüñ]|[0-9]|_){5,9}([a-záéíóúüñ]|[0-9])$/i;
  let comprobar = true;

  if (!expRegCon.test(contraseña)){comprobar = false;}

  return comprobar;
}

function comprobarRegistro() {//Comprobamos que el nombre y la contraseña del registro tengan un formato correcto y creamos la cookie de inicio de sesion
  let nombre = document.getElementById('nombreReg').value;
  let contraseña = document.getElementById('contraseñaReg').value;

  if (comprobarNombre(nombre) && comprobarContraseña(contraseña)) {crearCookie(nombre,contraseña);cerrarCuadroReg();alert("Nuevo usuario registrado")}
  else {alert("Formato Usuario/Contraseña Incorrecto");}
}

function crearCookie(usuario,contraseña) {
  document.cookie=usuario+"="+contraseña+";expires=true, 30 Jan 2030 00:00:00 GMT;";
}

function comprobarEntrar() {//En caso de ser correctos el nombre y contraseña accedemos con el usuario, habilitamos los mnesajes y cambiamos le botón entrar por cerrar sesion
  let usuario = document.getElementById('nombreEntra').value;
  let password = document.getElementById('contraseñaEntra').value;

  if (usuario == "" || password == ""){alert("No se ha introducido usuario/contraseña");}
  else {
    let cadena=document.cookie;
    let nombre=cadena.indexOf(usuario);
    let contraseña=cadena.indexOf("=",nombre+1);
    let fin=cadena.indexOf(";",contraseña+1);

    if(fin==-1){fin=cadena.length;}

    contraseña=cadena.substring(contraseña+1,fin);

    if (contraseña == password) {alert("Bienvenido");cerrarCuadroEntra();cambiarEtiquetaUsuario(usuario);activarCerrarSesion();}
    else {alert("Usuario o contraseña Incorrecto");}
  }
}

function cambiarEtiquetaUsuario(usuario) {//Le pasamos el usuario que hemos metido al acceder y lo añadimos al lado del literal USUARIO
  document.getElementById('nomUser').textContent += " : "+usuario;
}

function activarCerrarSesion() {//Activamos el "Añadir mensaje",cambiamos entrar por "cerrar sesion",Quitamos los eventos asignados a entrar y los cambiamos por cerrar sesion
  let mensaje = document.getElementById("añadirMensaje");
  mensaje.removeAttribute("disabled");
  document.getElementById("entrar").value = "Cerrar Sesión";

	let entrar = document.getElementById('entrar');
	if (document.removeEventListener) {
		entrar.removeEventListener("click",abrirCuadroEntra);
	} else if (document.detachEvent) {
		entrar.detachEvent("onclick",abrirCuadroEntra);
	}
	if (document.addEvenListener) {
		entrar.addEventListener("click",cerrarSesion);
	} else if (document.attachEvent) {
		entrar.attachEvent("onclick",cerrarSesion);
	}
}

function cerrarSesion() {//Desvativamos añadir mensaje, Quitamos el nombre del usuario, se cambia el literal "cerrar sesion" por "Entrar", quitamos los elementos asignados a cerrar sesion y los cambiamos por entrar
	desactivarAñadirMensaje();
	document.getElementById('nomUser').textContent = "Usuario";
	document.getElementById("entrar").value = "Entrar";
	alert("Adios");

	let cerrar = document.getElementById('entrar');
	if (document.removeEventListener) {
		cerrar.removeEventListener("click",cerrarSesion);
	} else if (document.detachEvent) {
		cerrar.detachEvent("onclick",cerrarSesion);
	}
	if (document.addEvenListener) {
		cerrar.addEvenListener("click",abrirCuadroEntra);
	} else if (document.attachEvent) {
		cerrar.attachEvent("onclick",abrirCuadroEntra);
	}
}

function añadirDefinicion() {//Concatenamos la palabra y el concepto para crear la definicion y la añadimos en forma de li al ol ya creado
  let palabra = document.getElementById("palabra").value;
  let concepto = document.getElementById("concepto").value+"\n";

  if (palabra == "" || concepto == "") {alert("Palabra/Concepto vacio");}
  else {
    let padre = document.getElementById("listaDefiniciones");
    let todosdt = padre.getElementsByTagName("dt");
    let todosdd = padre.getElementsByTagName("dd");
    let existe = false;
  	let indice = 0;

  	while (!existe && indice < todosdt.length){//En caso de que existe ya la palabra añadimos un nuevo dd
  		if (palabra == todosdt.item(indice).textContent) {
        existe=true;
        let nuevodd = document.createElement("dd");
        let textodd = document.createTextNode(concepto);
        nuevodd.appendChild(textodd);
        if (indice+1 < todosdt.length) {todosdt.item(indice+1).before(nuevodd);}
        else {padre.appendChild(nuevodd);}
      }
      indice++;
  	}

    if (!existe) {
      let nuevodt=document.createElement("dt");
      let textodt=document.createTextNode(palabra);
      let nuevodd=document.createElement("dd");
      let textodd=document.createTextNode(concepto);
      nuevodt.appendChild(textodt);
      nuevodd.appendChild(textodd);
      padre.appendChild(nuevodt);
      padre.appendChild(nuevodd);
    }
  }
}

function añadirLocalidad() {
  let localidad = document.getElementById("localidad").value;

  if (localidad == "") {alert("Localidad vacia");}
  else {
    let padre = document.getElementById("listaLocalidades");
    let todosli = padre.getElementsByTagName("li");
    let existe = false;
    let indice = 0;

    while (!existe && indice < todosli.length){
      if (localidad == todosli.item(indice).textContent) {existe = true;}
      else if (localidad < todosli.item(indice).textContent){
  			let nuevoli = document.createElement("li");
  			let textoli = document.createTextNode(localidad);
  			nuevoli.appendChild(textoli);
        padre.appendChild(nuevoli);
  			padre.insertBefore(nuevoli,todosli.item(indice));
  			existe = true;
  		}
      indice+=1;
    }

    if (!existe) {
      let nuevoli=document.createElement("li");
      let textoli=document.createTextNode(localidad);
      nuevoli.appendChild(textoli);
      padre.appendChild(nuevoli);
    }
  }
}

function añadirCoche() {
	let marca = document.getElementById("marca").value.trim();
	let modelo = document.getElementById("modelo").value.trim();
	let precio = document.getElementById("precio").value.trim();

	if (marca == "" || modelo == "" || precio == "") {alert("Marca/Modelo/Precio vacio");}
	else {
		let padre=document.querySelector("#tablaCoches>tbody");
		let todosTr = padre.getElementsByTagName("tr");
		let existe = false;
    let indice = 0;

		while (!existe && indice < todosTr.length){
			let todosTd = todosTr.item(indice).getElementsByTagName("td");
			if (marca == todosTd.item(0).textContent && modelo == todosTd.item(1).textContent) {existe = true;}
			else if (marca > todosTd.item(0).textContent){
				let linea=document.createElement("tr");
				let tdmarca=document.createElement("td");
				let tdmodelo=document.createElement("td");
				let tdprecio=document.createElement("td");
				let vmarca=document.createTextNode(marca);
				let vmodelo=document.createTextNode(modelo);
				let vprecio=document.createTextNode(precio);

				tdmarca.appendChild(vmarca);
				tdmodelo.appendChild(vmodelo);
				tdprecio.appendChild(vprecio);
				linea.appendChild(tdmarca);
				linea.appendChild(tdmodelo);
				linea.appendChild(tdprecio);
				padre.appendChild(linea);
				padre.insertBefore(linea,todosTr.item(indice));
				existe = true;
			}
			else if (marca == todosTd.item(0).textContent && modelo > todosTd.item(1).textContent) {
				let linea=document.createElement("tr");
				let tdmarca=document.createElement("td");
				let tdmodelo=document.createElement("td");
				let tdprecio=document.createElement("td");
				let vmarca=document.createTextNode(marca);
				let vmodelo=document.createTextNode(modelo);
				let vprecio=document.createTextNode(precio);

				tdmarca.appendChild(vmarca);
				tdmodelo.appendChild(vmodelo);
				tdprecio.appendChild(vprecio);
				linea.appendChild(tdmarca);
				linea.appendChild(tdmodelo);
				linea.appendChild(tdprecio);
				padre.appendChild(linea);
				padre.insertBefore(linea,todosTr.item(indice));
				existe = true;
			}
			indice+=1;
		}

		if (!existe) {
			let linea=document.createElement("tr");
			let tdmarca=document.createElement("td");
			let tdmodelo=document.createElement("td");
			let tdprecio=document.createElement("td");
			let vmarca=document.createTextNode(marca);
			let vmodelo=document.createTextNode(modelo);
			let vprecio=document.createTextNode(precio);

			tdmarca.appendChild(vmarca);
			tdmodelo.appendChild(vmodelo);
			tdprecio.appendChild(vprecio);
			linea.appendChild(tdmarca);
			linea.appendChild(tdmodelo);
			linea.appendChild(tdprecio);
			padre.appendChild(linea);
		}
	}
}

function añadirProvincia() {
	let selectComunidades = document.getElementById("comunidades")
	let comunidad = selectComunidades.options[selectComunidades.selectedIndex].value;
	let provincias = new Array();
	let padre = document.getElementById("provincia");
	borrarOptions(padre);

	switch (comunidad) {
		case "Andaluci­a":
			provincias = ["Huelva","Sevilla","Cordoba","Jaén","Cadiz","Malaga","Granada","Almería"];
			for (let i = 0; i < provincias.length; i++) {
				let nuevoOptions=document.createElement("option");
				let texto=document.createTextNode(provincias[i]);
				nuevoOptions.appendChild(texto);
				padre.appendChild(nuevoOptions);
			}
			incluirMensaje("Buena comida y ambiente");
			break;
		case "Madrid":
			let nuevoOptions=document.createElement("option");
			let texto=document.createTextNode("madrid");
			nuevoOptions.appendChild(texto);
			padre.appendChild(nuevoOptions);
			incluirMensaje("Capital de España");
			break;
	}
	//QUEDAN POR HACER EL RESTO DE COMUNIDADES PERO CON ESTO SE ENTIENDE LA IDEA
}

function borrarOptions(padre) {//Le pasamos el nodo padre y borrarmos todos sus elementos
	while (padre.firstChild) {
  padre.removeChild(padre.firstChild);
	}
}

function incluirMensaje(mensaje) {//Le pasamos un texto y lo incluimos en el parrafo que hay debajo del select de comunidad autonoma cuando seleccionemos unna
	document.getElementById('mensajeComunidad').textContent = mensaje;
}

function añadirMensaje() {//Cogemos el titulo y el contenido del mensaje y los metemos en un parrafo dentro de un div con el nombre del usuario que lo crea
	let titulo = document.getElementById('tituloMen').value.toLowerCase();
	let contenido = document.getElementById('comentarioMen').value.toLowerCase();
	let nombre = document.getElementById('nomUser').innerHTML;
	nombre = nombre.substr(9);

	let ruta = document.getElementById('formMensaje').foto.value;
	let padre = document.getElementById("contenedorMen");

	let contenedor = document.createElement("div");
	let idCon = document.createAttribute("id");
	idCon.value = "mensaje";
	contenedor.setAttributeNode(idCon);
	padre.appendChild(contenedor);

	let cabezera = document.createElement("div");
	let idCab = document.createAttribute("id");
	idCab.value = "cabezera";
	cabezera.setAttributeNode(idCab);
	contenedor.appendChild(cabezera);

	//Ponemos el nombre y la imagen
	let imagen = document.createElement("img");
	let src = document.createAttribute("src");
	src.value = ruta;
	imagen.setAttributeNode(src);
	let pnombre = document.createElement("h2");
	let texto = document.createTextNode(nombre);
	pnombre.appendChild(texto);
	cabezera.appendChild(imagen);
	cabezera.appendChild(pnombre);
	//Creamos el titulo
	let ptitulo=document.createElement("p");
	let negrita = document.createElement("b");
	let texto1=document.createTextNode(titulo);
	negrita.appendChild(texto1);
	ptitulo.appendChild(negrita);
	contenedor.appendChild(ptitulo);
	//Creamos el contenido
	let pcontenido=document.createElement("p");
	let texto2=document.createTextNode(contenido);
	pcontenido.appendChild(texto2);
	contenedor.appendChild(pcontenido);

	cerrarCuadroMen();
	vacioMen();
}

function vacioMen() {
	for (let i = 0; i < document.getElementById("formMensaje").elements.length; i++) {
    if (document.getElementById("formMensaje").elements[i].type == "text") {document.getElementById("formMensaje").elements[i].value = "";}
  }
}
