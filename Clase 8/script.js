//puntos claves Symbols
//Unicidad:  Los símbolos son únicos en un contexto.

const symb1 = Symbol('descripcion');
const symb2 = Symbol('descripcion');
console.log(symb1 === symb2) // false

//Propiedades objetos
const sym = Symbol('miSymbol');
const obj = {
    [sym]: 'valor',
};
console.log(obj[sym]) // valor

// symbols global

const globalSymbols = Symbol.for('globalSymbols');
const anotherglobalSymbols = Symbol.for('anotherglobalSymbols');
console.log(globalSymbols === anotherglobalSymbols) // true


