$(window).on("load",inicio);//Cuando se carage la pagina se va a ejecutar la siguiente funcion

function inicio() {
    $("#iniciar").on("click",iniciarBarra);
}

function iniciarBarra() {
  let tiempo = $("#tiempo").val();

  if (tiempo < 0) {
    alert("Se debe introducir un número positivo");
  }
  else {
    let contador;
      $(function(){
        $("#barra").progressbar({
          value:1,
          change:function(){
            $("#progreso").text($("#barra").progressbar("value")+"%");
          },
          complete:function(){
            $("#progreso").text("Complete!");
            clearInterval(contador);
          }
        });
        function sigue(){
          let valor = $("#barra").progressbar("value");
          $("#barra").progressbar("value", valor +1);
        }
        contador = setInterval(sigue,(tiempo*1000));
      });
  }
}
