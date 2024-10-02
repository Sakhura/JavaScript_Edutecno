// ingreso de 3 colores switch , mostrar mensaje

//variables

let colores;
colores = prompt (' Ingrese alguno de estos colores rojo, verde o azul');
switch (colores) {
    case'rojo':
        document.write('Ingreso el color rojo');
        break;
        case 'verde':
            document.write('Ingresaste el color verde');
            break;
            case 'azul':
                document.write('Ingresaste el color azul');
                break;  
                default:
                    document.write('Color no reconocido');

}
