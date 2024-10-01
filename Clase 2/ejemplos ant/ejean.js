let num1, num2;
num1 = parseInt(prompt('Ingrese el primer nro: '));
num2 = parseInt(prompt('Ingrese el segundo nro: '));
if(num1>num2) {
    document.write('El primer número es mayor que el segundo ' + num1);
}else{
    document.write('El segundo número es mayor que el primero ' + num2);
}