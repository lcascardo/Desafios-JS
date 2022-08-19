let sandwich = "";
let ingredientes = prompt("INGRESAR INGREDIENTES PARA TU SANDWICH, PARA SALIR INGRESE ESC");
while(ingredientes!="ESC"){
    sandwich += ingredientes + " ";
    ingredientes = prompt("INGRESAR INGREDIENTES PARA TU SANDWICH, PARA SALIR INGRESE ESC");
}
alert("SU SANDWICH TIENE: " + sandwich);