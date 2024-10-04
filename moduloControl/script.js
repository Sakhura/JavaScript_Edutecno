function calcularPrecioTotal (tipoAsiento){
    let precioUnitario;

    switch (tipoAsiento){
        case '1': //turista
            precioUnitario = 5000;
            cantidadAsiento(precioUnitario);
            break;
        case '2': //economica
            precioUnitario = 9000;
            cantidadAsiento(precioUnitario);
            break;
        case '3': //primera
            precioUnitario = 13000;
            cantidadAsiento(precioUnitario);
            break;
        default:
            alert('Tipo de asiento no valido');
            break;
    }
}


function cantidadAsiento(precioUnitario){
    let cantidadAsiento;

    while(true){
        cantidadAsiento =parseInt(prompt("Ingrese la cantidad de asientos a reservar: "));
        if (cantidadAsiento >= 0){
            break;
        } else {
            alert('La cantidad de asientos debe ser mayor a 0');
        }
    }
    let PrecioTotal = precioUnitario * cantidadAsiento;

    if (cantidadAsiento >=5){
        PrecioTotal = PrecioTotal * 0.9;
    }
    alert(`El precio total de su reserva es : $ ${PrecioTotal}`);
}

function realizarReserva(){
    let tipoAsiento = prompt("Ingrese el tipo de asiento que desea reservar. \n1.- Asiento Turista $5.000 \n2.- Asiento Economico $9.000 \n3.- Asiento Primera $13.000");

    calcularPrecioTotal(tipoAsiento);
}

realizarReserva();