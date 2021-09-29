window.onload=primos;
function primos () {
  document.Nprimos.primos.value="";
  for (var i = 2; i < 100; i++){
    var primo = true;
    for (var x = 2; x <= i/2; x++) {
      if(i%x == 0){
        primo = false;
      }
    }
    if (primo) document.Nprimos.primos.value+=i+"|";
  }
}
