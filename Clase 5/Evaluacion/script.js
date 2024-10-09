// fc c rear obj empleados

function Empleado(nombre, salario, departamento){
    this.nombre = nombre;
    this.salario = salario;
    this.departamento= departamento;

    this.cacularSalarioConAumento = function(porcentajeAumento){
        const aumento = (porcentajeAumento / 100) * this.salario;
        this.salario += aumento;
        return this.salario;
    };

    this.cambiarDepartamento = function( nuevoDepartamento){
        this.departamento = nuevoDepartamento;
    };

    this.obtenerDetalles = function(){
        return `Nombre: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`;
    };
}

const empleado1 = new Empleado ("Sabina", 50000, "Ventas");
console.log(empleado1.obtenerDetalles());

empleado1.cacularSalarioConAumento(10);
console.log(empleado1.obtenerDetalles());

empleado1.cambiarDepartamento("Informática");
console.log(empleado1.obtenerDetalles());
