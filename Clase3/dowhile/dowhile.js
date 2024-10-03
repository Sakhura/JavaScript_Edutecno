



let password = "";

do {
    password =prompt("Ingrese una contraseña minimo 6 caracteres: ");
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    }
} while (password.length <= 6);



















/*let valor;
do{
    valor= parseInt(prompt('Ingresar un nro entre 1 y 999: ', ''));
    document.write('El valor ' + valor + 'tiene '); 
    document.write('<br>');
    if (valor >= 1 && valor <= 9) {
        document.write('un dígito');
        document.write('<br>');
    }else{
        if (valor >= 10 && valor <= 99) {
            document.write('dos dígitos');
            document.write('<br>');
    }else{
        document.write('tres dígitos');
        document.write('<br>');
    }
    document.write('<br>');
    }
} while (valor !=0);*/
