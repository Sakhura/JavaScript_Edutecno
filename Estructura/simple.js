//variables
let valor1;
let valor2;

//mostrar al cliente
valor1 = prompt('Ingrese valor 1: ');
valor2 = prompt('Ingresar valor 2: ');

//convertir let a nro
nro1 = parseFloat(valor1);
nro2 = parseFloat(valor2);

//realizar las operaciones
let suma = nro1 + nro2;
let resta = nro1 - nro2;
let multiplicacion= nro1 * nro2;
let division= nro1 / nro2;

//mostrar al usuario dev
console.log("El primer nro es: ", nro1);
console.log("El segundo nro es: ", nro2);
console.log("la suma es: ", suma);
console.log("la resta es: ", resta);
console.log("La multiplicacion es: ", multiplicacion);
console.log("La división es: ", division);

//mostrar cliente
document.write("El primer nro es: ", nro1);
document.write('<br>');
document.write("El segundo nro es: ", nro2);
document.write('<br>');
document.write('La suma es: ');
document.write(suma);
document.write('<br>');
document.write('La resta es: ');
document.write(resta);
document.write('<br>');
document.write('La multiplicacion es: ');
document.write(multiplicacion);
document.write('<br>');
document.write('La división es: ');
document.write(division);

