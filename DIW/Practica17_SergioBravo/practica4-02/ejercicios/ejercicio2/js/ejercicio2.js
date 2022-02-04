$(window).on("load",inicio);//Cuando se carage la pagina se va a ejecutar la siguiente funcion

function inicio() {
  vacio();
  $("#dialogo").dialog({//Creamos el cuadro de dialogo y recogemos los datos del mismo
    autoOpen:false,
    buttons:{
      Cancelar:function(){
        $(this).dialog("close");
      },
      Aceptar:function(){
        $("#nombre").val($("#nom").val());
        $("#apellidos").val($("#ape").val());
        $(this).dialog("close");
      }
    }
  });

  $(function(){
    $("#Hsemanales").slider({
      value:0,
      min:0,
      max:40,
      step:1,
      orientation:"horizontal",
      slide :function(event,elemento){
          $("#numeroHoras").val(elemento.value);
        }
    });
  });

  $(function(){//Creamos un select Menu para las comunidades autonomas
    $("#comunidad").selectmenu({});
  });

  $("#nombre").on("focus",abrirDialogo);
  $("#apellidos").on("focus",abrirDialogo);
  calendario();
  controles();
  enviar();
}

function vacio() {//Borramos todo el contenido
  $('#formulario')[0].reset();
  $('input[type="text"]').val('');
}

function calendario() {//Mostramos el desplegable de un calendario con JqueryUI
  $( "#nacimiento" ).datepicker();
}

function controles() {//Mostramos mensajes de ayuda cuando nos situemos encima de cada input. El contenido de los mismos es el contenido del atributo title
  $( "document" ).tooltip();
}

function enviar() {//Creamos el botón enviar con JqueryUI
  $("#enviar").button({label:"Enviar"});
}

function abrirDialogo(){//Abrimos el cuadro de dialogo
    $("#dialogo").dialog("open");
}
