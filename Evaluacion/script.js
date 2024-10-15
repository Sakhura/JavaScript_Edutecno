// Clase Producto

class Producto{
    constructor(nombre, precio ){
        this.nombre = nombre;
        this.precio = precio;
}
}


//clase Carrito

class  Carrito{
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto, cantidad){
        this.productos.push({producto, cantidad});
    }
    calculartotal() {
        let total = 0;
        this.productos.forEach((item) => {
          total += item.producto.precio * item.cantidad;
        });
        return total;
    }

    mostrarDetalleCompra() {
        alert('Detalle de la Compra: ');
        this.productos.forEach((item, index) => {
            alert(
            `${index +1}. ${item.producto.nombre} x ${item.cantidad} -$${(
                item.producto.precio * item.cantidad
            ).toFixed(2)}`
            );
        });
    }

}

//Productos disponibles

const productosDisponibles =[
    new Producto('Leche', 1000),
    new Producto('Pan de Molde',2000),
    new Producto('Queso', 1200),
    new Producto('Mermelada', 890),
    new Producto('Azucar', 1300),
];

// fc del usuario

function mostrarProductos(){
    alert(
        'Productos Disponibles: \n1-Leche $1000\n2.- Pan de Molde $2000 \n3.- Queso $1200\n4.- Mermelada $890\n5.- Azúcar $1300'
    );

}

function agregarAlCarrito(carrito, indexProducto, cantidad){
    const productoSeleccionado= productosDisponibles[indexProducto - 1];

    if(!productoSeleccionado){
        alert('Producto no disponible,  por favor selecciona otro');
        return;
    }

    carrito.agregarProducto(productoSeleccionado, cantidad);
    alert (`${cantidad} ${productoSeleccionado.nombre} (s) agregado (s) al carrito`);
}

function finalizarCompra(carrito){
    carrito.mostrarDetalleCompra();
    const total = carrito.calculartotal();
    alert(`Compra finalizada Total: $ ${total}`);
}


// iteración  sobre el carrito

const  carritoUsuario = new Carrito();
    while(true){
        mostrarProductos();

        const indexProducto= parseInt(prompt('Ingresa el número del producto que deseas agregar al carrito'));
        const cantidad = parseInt(prompt('Ingresa la cantidad que deseas comprar'));
    
//validaciones
        if(isNaN(indexProducto) || indexProducto<1 || indexProducto>productosDisponibles.length || isNaN(cantidad) || cantidad <=0){
            alert('Entrada no válida. Ingresar número válidos');
            continue;
        }

        agregarAlCarrito(carritoUsuario, indexProducto, cantidad);

        const continuar = prompt('¿Deseas seguir agregando productos? (s/n').toLocaleLowerCase();
        if(continuar !== 's'){
            break;
    }
}


// llamada de finalizar Compra

finalizarCompra(carritoUsuario);