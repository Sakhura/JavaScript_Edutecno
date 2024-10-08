/*X persona, ver su saldo actual, permitir que persona X pueda depositar o retirar dinero*/

class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }


depositar(dinero) {
    this.saldo = this.saldo + dinero;
}

retirar(dinero) {
    this.saldo = this.saldo - dinero;
}

}

const cliente1 =new Cliente ('Sabina', 1000);
document.write('Nombre del cliente: ' + cliente1.nombre + '<br>');
document.write('Saldo del cliente: ' + cliente1.saldo + '<br>');
// Sabina deposita $500
cliente1.depositar(500);
document.write('Saldo del cliente después de depositar: ' + cliente1.saldo + '<br>');
// Sabina retira $200
cliente1.retirar(200);
document.write('Saldo del cliente después de retirar: ' + cliente1.saldo + '<br>');
