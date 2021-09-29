window.onload=primos;
function primos () {
  var con = 0;
  var num = 2;
  document.Nprimos.primos.value="";
  while (con <= 100){
    var primo = true;

    for (var i = 2; i <= num/2; i++) {
      if(num%i == 0){
        primo = false;
      }
  }

  if (primo){
    document.Nprimos.primos.value+=num+"|";
    con++;
  } 
  num++;
  }
}
