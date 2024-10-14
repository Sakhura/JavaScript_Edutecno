/*SYG de Empleados
   1. symbol = rol empleado /
   2. objetos con propiedades privadas
   3. Proxy de Acceso
   4. console.log*/

//1.symbol = rol empleado 
/*Aquí se define un Symbol llamado roleSymbols. Este Symbol se utiliza como una clave única para representar el 
rol del empleado. Al ser un Symbol, es privado y no se puede acceder a él fácilmente desde el exterior.
Propósito: rolesSymbols se usa para definir un rol privado en el objeto empleado. Al ser un símbolo, 
no puede ser accedido directamente sin saber el símbolo que se usó, proporcionando una capa de "privacidad"*/
const roleSymbols = Symbol ('role');

// 2. objetos con propiedades privadas
/*Se crea un objeto empleado que tiene varias propiedades, incluyendo el rol del empleado (almacenado en el Symbol),
su nombre, salario y datos personales. La propiedad de rol es privada debido a que está definida con un Symbol, lo 
que significa que no se puede acceder directamente a ella mediante el nombre de la propiedad.
Descripción: Se define el objeto empleado con varias propiedades:
[rolesSymbols]: Esta propiedad usa el símbolo rolesSymbols como clave para asignarle el valor "empleado", lo que 
indica que este empleado tiene un rol específico. Al usar un símbolo, esta propiedad no será fácilmente visible ni 
accesible sin conocer el símbolo.*/
const empleado = {
    [roleSymbols]: 'empleado',
    nombre: 'Juan',
    salario: 250000,
    datosPersonales:{
        edad: 30,
        direccion: 'Calle 123',
    },
}; //Juan

// 3. Proxy de Acceso
/*Aquí se crea un Proxy llamado empleadoProxy que envuelve al objeto empleado. El Proxy permite interceptar 
operaciones de acceso a propiedades (get).
    -Permiso Completo: Si el rol del empleado es 'gerente', se permite acceder a cualquier propiedad.
    -Permiso Parcial: Si el rol no es 'gerente', se permite el acceso a todas las propiedades excepto salario y datosPersonales.
    -Sin Acceso: Si se intenta acceder a salario o datosPersonales, se imprime un mensaje de "Acceso Denegado" y se devuelve undefined.

Descripción: Aquí se crea un Proxy llamado empleadoProxy que envuelve el objeto empleado y utiliza un manejador 
(handler) que intercepta el acceso a las propiedades mediante la trampa get.
Trampa get:
Parámetros:
target: El objeto original (en este caso, empleado).
prop: La propiedad que se está intentando acceder.
receiver: El objeto Proxy.
Funcionamiento:
    -Si la propiedad existe y el rol es "Gerente": Se permite el acceso completo a todas las propiedades 
usando Reflect.get.
    -Si la propiedad no es ni salario ni datosPersonales: Se permite el acceso limitado y se retorna el valor 
    de la propiedad.
    -Si la propiedad es salario o datosPersonales: Se deniega el acceso y se muestra un mensaje de advertencia en
    la consola.
    Propósito: Este Proxy es utilizado para restringir el acceso a ciertas propiedades sensibles, como el salario y 
    datosPersonales, en función del rol del empleado.*/

const empleadoProxy = new Proxy (empleado, {
    get(target, prop, receiver) {
        if(Reflect.has(target, prop) && target[roleSymbols] ===  'gerente'){
            //permiso completo
            return Reflect.get(target, prop, receiver);
        } else if (prop !== 'salario' && prop !== 'datosPersonales') {
            //permiso parcial
            return Reflect.get(target, prop, receiver);
        }else{
            //sin acceso
            console.log(`Acceso Denegado a ${prop}`);
            return undefined;
        }
},
});

// 4. console.log
/* Verifica algunas operaciones  de acceso a propiedades del objeto proxy.
Primera Línea:
Acción: Se accede a la propiedad nombre del empleadoProxy.
Resultado: Como el acceso a nombre no está restringido, se retorna el valor "Juan".
Salida en Consola: Juan
Segunda Línea:
Acción: Se intenta acceder a la propiedad salario.
Resultado: El acceso es denegado porque no se tiene permiso para ver el salario (sólo el rol "Gerente" tendría permiso completo).
Salida en Consola: Acceso Denegado a salario
Tercera Línea:
Acción: Se intenta acceder a datosPersonales.
Resultado: Nuevamente, el acceso es denegado.
Salida en Consola: Acceso Denegado a datosPersonales

console.log(empleadoProxy.nombre);: Imprime "Juan" porque el nombre es accesible para todos los empleados.
console.log(empleadoProxy.salario);: Imprime "Acceso Denegado a salario" porque el salario es una propiedad privada y solo los gerentes pueden acceder a ella.
console.log(empleadoProxy.datosPersonales);: Imprime "Acceso Denegado a datosPersonales" por la misma razón.
*/

console.log(empleadoProxy.nombre); //Juan
console.log(empleadoProxy.salario); //Acceso Denegado a salario
console.log(empleadoProxy.datosPersonales); //Acceso Denegado a datosPersonales

/*El código implementa un sistema de control de acceso a un objeto que representa a un empleado, 
utilizando Symbols para propiedades privadas y un Proxy para gestionar los permisos de acceso según el rol 
del empleado. Esto permite mantener ciertos datos protegidos y controlar cómo se accede a ellos.*/
