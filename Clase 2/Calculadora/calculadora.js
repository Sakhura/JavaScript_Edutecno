//botones 
function getValue(buttonValue){
    var key = document.getElementById(buttonValue).innerHTML;
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value= screen + key;
}

//valor cero
function getZero(){
    var key = "0";
    var screen = document.getElementById("screen").value;
    document.getElementById('screen').value= screen + key;
}

// punto decimal
function addDecimal(){
    var key = ".";
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen + key;
    console.log(screen);
}

//limpiar pantalla
function clearScreen(){
    var screen = document.getElementById("screen").value="";
}

//resultados de las operaciones
function solve(){
    var screen = document.getElementById("screen").value;
    console.log("solve" + screen);
    console.log("solve" + eval(screen))
    var screen = document.getElementById("screen").value = eval (screen);
}