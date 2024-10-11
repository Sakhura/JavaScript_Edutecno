//mt devuelve una posicion especifica
let texto = "Hola";
console.log(texto.charAt(1)); // l

//unir cadenas de texto
let texto1 = "Hola";
let texto2 = "Mundo";
console.log(texto1.concat(texto2)); // Hola Mundo

//cadena dentro  de una cadena
let texto3 = "Hola Mundo";
console.log(texto3.includes("Mundo")); // 

//lastIndexOf 
let texto4 = "Hola Mundo, Hola";
console.log(texto4.lastIndexOf("Hola")); //11

//Reemplazar texto
let texto5 = "Hola Mundo";
console.log(texto5.replace("Mundo", "Pablito Neuquen")); // Hola Pablito Neuquen

let texto6 = "15123456-K";
console.log(texto6.replace("-", "")); // Hola Pablito Neuquen

//dividir cadenas
let texto7 = "Hola,Mundo";
console.log(texto7.split(",")); // ["Hola", "Mundo"]

