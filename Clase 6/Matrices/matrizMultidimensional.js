//bidimensional
class Estudiante{
    constructor(nombre, notaPorMateria){
        this.nombre = nombre;
        this.notaPorMateria = notaPorMateria;
}

mostrarNotas(){
    console.log(`Notas de ${this.nombre}`);
    this.notaPorMateria.array.forEach((notas, index) => {
        console.log(`Materia ${index + 1}: ${notas.join(', ')}`);
    });
}

promedioGeneral(){
    let totalNotas = 0;
    let totalMaterias= 0;
    this.notaPorMateria.forEach(notas => {
        totalNotas += notas.reduce((acc, curr) => acc + curr,0);
        totalMaterias += notas.length;
    });
    return totalNotas / totalMaterias;
}

}

const estudiante1 = new Estudiante('Sabina',[
    [8, 9, 7],
    [9, 8, 9],
    [7, 8, 9]
]);

estudiante1.mostrarNotas();
console.log(`Promedio General: ${estudiante1.promedioGeneral()}`);