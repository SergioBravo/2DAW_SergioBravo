if ( document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio() {
  vacio();
  let boton = document.getElementById('comprobar');

  if (document.addEventListener) {
    boton.addEventListener("click",numeroDeSmith);
  }
  else if (document.attachEvent){
    boton.attachEvent("click",numeroDeSmith);
  }
}

function vacio() {//Borramos el contenido de todas las cajas de texto
  for (let i = 0; i < document.getElementById('formulario').elements.length; i++) {//Borramos todos los input type text
    if (document.getElementById('formulario').elements[i].type == "text") {document.getElementById('formulario').elements[i].value = "";}
  }
}

function numeroDeSmith() {//Comprobamos si el numero es un número de smith sabiendo que la suma de los números que componen al mismo debe de ser igual a la suma de sus divisiores
  let numero = document.getElementById("numero").value+"";
	let smith = false;
	let sumaNumero = 0;
	let sumaDivisor = 0;

	//Casos especiales
	if (numero < 10 )

	for (let i = 0; i < numero.length; i++) {//Calculamos la suma de números que componen a nuestro número
		sumaNumero += parseInt(numero[i],10);
	}

	numero = parseInt(numero,10);
	let div = 2;
	while (numero != 1 && numero > 0) {
		if (numero%div == 0 && esPrimo(div)) {
			if (div > 9) {
				div = div+"";
				for (let i = 0; i < div.length; i++) {
					sumaDivisor += parseInt(div[i],10);
				}
				div = parseInt(div,10);
				numero = numero/div;
				div = 2;
			}
			else {
				sumaDivisor += div;
				numero = numero/div;
				div = 2;
			}
		}
		div++;
	}

	if (sumaNumero == sumaDivisor) {smith = true;}

	if (smith) {
		document.getElementById("mensaje").value = "El número es un número de Smith";
	}
	else {
		document.getElementById("mensaje").value = "El número no es un número de Smith";
	}
}

function esPrimo (numero) {
	let primo = true;
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) {primo = false;}
	for (let i = 2; i < numero / 2; i++) {
		if (numero % i == 0) {primo = false;}
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}
