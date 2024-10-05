function determinarBuenMomentoPicnic(temperaturaActual, lluvia,tiempoLibre){
    let message = '';

    if (isNaN(temperaturaActual) && !isNaN(tiempoLibre)){
        temperaturaActual = parseFloat(temperaturaActual);
        tiempoLibre = parseInt(tiempoLibre);

        if (temperaturaActual >= 12 && temperaturaActual <=30){
            if (lluvia === 'no' && tiempoLibre >=90){
                message = 'El clima es ideal para un picnic.';
            } else if (lluvia === 'si') {
                message = 'Esta lloviendo te vas a mojar.';
            } else if (tiempoLibre <90) {
                message = 'No tienes suficiente tiempo libre'
            } else {
                message = 'No es el mejor momento para un picnic.';
            }
        } else if (temperaturaActual <12){
            message = 'La temperatura es muy baja para un picnic.';
        } else {
            message = 'La temperatura es muy alta para un picnic.';
        }
    } else{
        message = 'Ingrese valores acorde a lo indicado por los mensajes';
    }
    
alert(message);
}



function planificarPicnic(){
    let temperaturaActual, lluvia, tiempoLibre;

    do{
        temperaturaActual = prompt('¿Cúal es la temperatura actual?');
    } while (isNaN(parseFloat(temperaturaActual)));

    do{
        lluvia = prompt('¿Esta lloviendo?').toLowerCase();
    } while (lluvia !== 'si' && lluvia !== 'no' && lluvia !='si');

    do{
        tiempoLibre = prompt('¿Cuántos minutos tienes disponibles?');
    } while (isNaN(parseInt(tiempoLibre)))

        determinarBuenMomentoPicnic (temperaturaActual, lluvia, tiempoLibre)
}

planificarPicnic();


