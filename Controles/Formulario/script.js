//En este problema tenemos cuatro controles: 1 FORM, 1 BUTTON, 2 TEXT. El evento que se dispara al presionar el botón se llama mostrar.

let vec = [];
for (let f = 0; f < 10; f++) {
    let valor = parseInt(Math.random() * 1000);
    vec.push(valor);
}
document.write('Vector antes de borrar<br>');
for (let f = 0; f < 10; f++) {
    document.write(vec[f] + '<br>');
}
for (let f = 0; f < 10; f = f + 2) {
    delete vec[f];
}
document.write('Vector luego de borrar las posiciones pares<br>');
for (let f = 0; f < 10; f++) {
    document.write(vec[f] + '<br>');
}