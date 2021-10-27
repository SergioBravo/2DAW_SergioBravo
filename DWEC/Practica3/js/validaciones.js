function NifCif(cadena) {
  let codigo;

  if (esCif(cadena) == 1)codigo = "C1";//CifCorrecto
  else if (esCif(cadena) == 2)codigo = "C2";//CifMalCaracterControl
  else if (esNif(cadena) == 1)codigo = "N1";//NifCorrecto
  else if (esNif(cadena) == 2)codigo = "N2";//NifMalCaracterControl
  else if (esNif(cadena) == 3)codigo = "N3";//NifDni
  else codigo = "0";//CadenaNoNifCif

  return codigo;
}

function esNif(nif) {
  let nifM = nif.toUpperCase();
  let caracteresControl = "TRWAGMYFPDXBNJZSQVHLCKE";
  let caracteresIniciales = "XYZLKM";
  let numeros = 0;
  let caracterControl = "";
  let codigo;

  if (nifM.length == 9) {
    //Calculamos el caracter de control
    if (nifM[0] == "Y") {
      numeros = 10000000+parseInt(nifM.substr(1,7));
      caracterControl = caracteresControl[suma%23];
    }
    else if (nifM[0] == "Z") {
      numeros = 20000000+parseInt(nifM.substr(1,7));
      caracterControl = caracteresControl[numeros%23];
    }
    else {
      numeros = parseInt(nifM.substr(0,8));
      caracterControl = caracteresControl[numeros%23];
    }
  }

  //Comprobamos la validez del nif
  if (!isNaN(nif[0]) && caracterControl == nifM[nifM.length - 1]) codigo = 1;
  else if ((nif[0] == "Y" || nif[0] == "Z") && caracterControl == nifM[nifM.length - 1]) codigo = 1;
  else if (!isNaN(nif[0]) && caracterControl != nifM[nifM.length - 1] && caracterControl != "") codigo = 2;
  else if ((nif[0] == "Y" || nif[0] == "Z") && caracterControl != nifM[nifM.length - 1] && caracterControl != "") codigo = 2;
  else if (nif.length >= 6 && nif.length <= 8 && !isNaN(nif[0]) && parseInt(nifM.substr(0,nifM.length - 1)) > 100000) codigo = 3;
  else codigo = 0;

  return codigo;
}

  function esCif(cif) {
    let cifM = cif.toLowerCase();
    let num = cifM.substr(1,7);//Sacamos las 7 posiciones que deberian ocupar los digitos y comprobaremos que sean números con la funcion isNaN(num) que nos deberia devolver un false
    let caracterControl = "jabcdefghi";
    let codigo;

    if ((cifM[0] >= "a" && cifM[0] <= "v") && !isNaN(cifM[cifM.length - 1]) && cifM[cifM.length - 1] == PosicionCaracter(num) && !isNaN(num) && num.length == 7) codigo =  1;
    else if (((cifM[0] >= "p" && cifM[0] <= "s") || cifM[0] == "w") && cifM[cifM.length - 1] == caracterControl[PosicionCaracter(num)] && !isNaN(num) && num.length == 7) codigo = 1;
    else if ((cifM[0] >= "a" && cifM[0] <= "v") && !isNaN(cifM[cifM.length - 1]) && cifM[cifM.length - 1] != PosicionCaracter(num) && !isNaN(num) && num.length == 7) codigo = 2;
    else if (((cifM[0] >= "p" && cifM[0] <= "s") || cifM[0] == "w") && cifM[cifM.length - 1] != caracterControl[PosicionCaracter(num)] && !isNaN(num) && num.length == 7) codigo = 2;
    else codigo = 0;

    return codigo;

//----------------CALCULAMOS LA POSICION DEL CARACTER DE CONTROL---------------------------------------------------------------------------
    function PosicionCaracter(num) {
      //SACAMOS EL CARACTER DE CONTROL
      let sumaA = 0, sumaB=0, caracter=0;

      //SACAMOS LA SUMA B QUE ES LA DE LAS POSICIONES IMPARES MULTIPLICADAS POR 2
      for (let i = 0; i < num.length; i+=2) {
        let multi = (num[i]*2)+'';//Lo convertimos en cadena concatenando para luego poder sacar sus componentes

        if (parseInt(multi) > 9) {sumaB+=(parseInt(multi[0])+parseInt(multi[1]));}//Si el resultado es mayor de 9 acumulamos la suma de sus componentes
        else sumaB+=parseInt(multi);
      }
      //SACAMOS LA SUMA DE LAS POSICIONES PARES
      for (let i = 1; i < num.length; i+=2) {
        sumaA+=parseInt(num[i]);
      }
      //DIVIDIMOS EL VALOR DE SUMAR LAS DOS SUMAS ENTRE 10
      caracter=parseInt((sumaA+sumaB)%10);
      if (caracter == 10) caracter = 0;
      //AVERIGUAMOS EL CARACTER DE CONTROL
      caracter=10-caracter;

      return caracter;
    }//fin de posicioncaracter

  }//fin escif

function codigosControl(cBanco,cSucursal,nCuenta) {
  let suma1=0,suma2=0,primerdigito=0,segundodigito=0,codigocontrol='';
  //OBTENEMOS LA PRIMERA SUMA CON EL CODIGO DEL BANCO MULTIPLICANDO SUS CIFRAS 1*4 2*8 3*5 4*10
  suma1=(parseInt(cBanco[0])*4)+(parseInt(cBanco[1])*8)+(parseInt(cBanco[2])*5)+(parseInt(cBanco[3])*10);
  //OBTENEMOS LA SEGUNDA SUMA CON EL CODIGO DE LA SUCURSAL MULTIPLICANDO SUS CIFRAS 1*9 2*7 3*3 4*6
  suma2=(parseInt(cSucursal[0])*9)+(parseInt(cSucursal[1])*7)+(parseInt(cSucursal[2])*3)+(parseInt(cSucursal[3])*6);
  //SACAMOS EL RESTO LA SUMA DE LAS SUMAS ENTRE 11
  primerdigito=parseInt((suma1+suma2)%11);
  primerdigito=(11-primerdigito)+'';
  if (primerdigito == "10") primerdigito="1";
  if (primerdigito == "11") primerdigito="0";
  //OBTENEMOS LA TERCERA SUMA CON EL NÚMERO DE CUENTA MULTIPLICADO POR 1*1 2*2 3*4 4*8 5*5 6*10 7*9 8*7 9*3 10*6
  suma3 = (parseInt(nCuenta[0])*1)+(parseInt(nCuenta[1])*2)+(parseInt(nCuenta[2])*4)+(parseInt(nCuenta[3])*8)+(parseInt(nCuenta[4])*5)+
          (parseInt(nCuenta[5])*10)+(parseInt(nCuenta[6])*9)+(parseInt(nCuenta[7])*7)+(parseInt(nCuenta[8])*3)+(parseInt(nCuenta[9])*6);
  //SACAMOS EL RESTO DE LA SUMA ENTRE 11
  segundodigito=parseInt(suma3%11);
  segundodigito=(11-segundodigito)+'';
  if (segundodigito == "10") segundodigito="1";
  if (segundodigito == "11") segundodigito="0";

  codigocontrol=primerdigito+segundodigito
  return codigocontrol;
}//fincodigosControl

function calculoIBANEspanya(cCuenta) {
  let iban = cCuenta.replace(/ /g, "")+"142800";
  iban = iban.trim();
  let codigocontrol = 0;
  let ibanEs = "";

  codigocontrol = parseInt(iban,10)%97;
  codigocontrol = (98 - codigocontrol)+'';

  if (codigocontrol < 10) ibanEs = "ES0"+codigocontrol+" "+cCuenta;//Devolvemos el IBAN
  else ibanEs = "ES "+codigocontrol+" "+cCuenta;//Devolvemos el IBAN

  return ibanEs;
}

function comprobarIBAN(iban) {
    let cuatroCaracteres = iban.substr(0,4);//Guardamos los 4 primeros caracteres
    let ibanAux = iban.substr(4,(iban.length - 4));//Quitamos los 4 primeros caracteres de la cadena
    let letras = "abcdefghijklmnopqrstuvwxz";
    let control;

    ibanAux += cuatroCaracteres;

    for (let i = 0; i < ibanAux.length; i++) {//Cambiamos las letras por su correspondiente valor
      if (letras.indexOf(ibanAux[i]) != -1) ibanAux = ibanAux.replaceAll(ibanAux[i],10+letras.indexOf(ibanAux[i]));
    }

    let inicial = 0;//Para controlar la posicion inical
    let final = 7;//Para controlar la posicion final
    let resto = "";
    while (inicial < ibanAux.length) {//Vamos a ir sacando números del ibanAux de 9 en 9 para poder operar con ellos
      resto += ibanAux.substring(inicial,final);
      resto = parseInt(resto,10)%97;
      inicial += 7;final += 7;
    }
    if (resto == 1)control = true;
    else control = false;

    return control;
}//finfuncion
