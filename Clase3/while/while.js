/*let x;
x = -10;

while(x<=100){
    document.write(x);
    document.write('<br>');
    x++;
   // x = x + 1; 
}*/

// concepto de acumulador

let x = 1;
let acumulador = 0;
let valor;

while (x<=5){
    valor = parseInt(prompt('Ingrese un valor: ')); //ingrese datos 
    acumulador = acumulador + valor;
    x = x + 1;
}

document.write('la suma de los valores ingresador es: ' + acumulador + '<br>');

