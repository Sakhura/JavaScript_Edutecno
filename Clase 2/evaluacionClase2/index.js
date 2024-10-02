//categoria
function obtenerCategoria(){
    return prompt("Ingrese categoria del producto: ");
}
//descuento
function calcularDescuento(categoria){
    switch(categoria.toLower()){
        case "electronica":
            return 10; //10% dscto
        case "ropa":
            return 5; //5% dscto
        default:
        return 0; //0% dscto

    }
}
//precio
//stock