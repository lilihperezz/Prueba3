
var numero =parseInt( prompt("Ingrese un número entero"));
if(numero % 2 !=0){
  window.alert("Odd!");
}
else if(numero %2 ==0 &&  numero > 2 &&  numero <5){
	window.alert("Good!");
}
else if(numero %2 ==0 && numero > 6 && numero < 20){
	window.alert("Great!");
}
else if(numero % 2 == 0 && numero > 20){
	window.alert("Perfect!");
}


