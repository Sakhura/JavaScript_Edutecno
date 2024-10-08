class Estudiante{
    constructor(nombre, notas){
        this.nombre = nombre;
        this.notas = notas;
    }

    promedioNota(){
        const total= this.notas.reduce((acc, curr)=> acc + curr, 0);
        return total /this.notas.length;
    }
}

class Escuela{
    constructor(){
        this.estudiantes= []; //matriz estudiantes
}

agregarEstudiante(estudiantes){
    this.estudiantes.push(estudiantes); // + un estudiante a mi matriz
}

mostrarEstuadiantes(){
    this.estudiantes.forEach(estudiante => {
        console.log(`Estudiante: ${estudiante.nombre}, Promedio: ${estudiante.promedioNota()}`);
    });
}
}

const estudiante1 =new Estudiante('Sabina', [10, 20, 30, 40]);
const estudiante2 =new Estudiante('Pablo', [60, 70, 90, 100]);

const escuela = new Escuela();
escuela.agregarEstudiante(estudiante1);
escuela.agregarEstudiante(estudiante2);


