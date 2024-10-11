let numeroGrande = 1_000_000; // Un millón
console.log(numeroGrande); // 1000000

let numeroConDecimales = 123_456.78; // 123456.78
console.log(numeroConDecimales); // 123456.78

let binario = 0b1010_1011; // 171 en decimal
console.log(binario); // 171

let hexadecimal = 0xFF_EC_DE_5E; // 4294901760 en decimal
console.log(hexadecimal); // 4294901760


// operador de fusion nula
//let resultado= valor1 ?? valor2;

let Brasil = null;
let Chile = "Gol";
let  resultado2 = Brasil ?? Chile;
console.log(resultado2); // 1


// encadenamiento opcional
const usuario ={
    nombre: "Juan",
    direccion: {
        ciudad: "Santiago"
    }
};

console.log(usuario.direccion?.ciudad);
console.log(usuario.direccion?.pais);
