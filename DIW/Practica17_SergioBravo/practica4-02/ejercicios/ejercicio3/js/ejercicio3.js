$(window).on("load",pestañas);//Cuando se carage la pagina se va a ejecutar la siguiente funcion

function pestañas() {//Creamos un formato de pestañas
  $(function(){
    $("#pesta").tabs({
      event:"mouseover"
    });
  });
}
