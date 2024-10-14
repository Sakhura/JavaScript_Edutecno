/**/

const roleSymbol = Symbol('role');

const empleado = {
    [roleSymbol]: 'supervisor',
    nombre: 'JuanaMaria',
    salario: 500000,
    datosPersonales: {
        edad: 35,
        direccion: 'Calle 123',
    },
};

//Proxy
const empleadoProxy = new Proxy(empleado, {
    get(target, prop, receiver) {
        
        if(Reflect.has(target, prop) && target[roleSymbol]=== 'gerente'){
            return Reflect.get(target, prop, receiver);
        }else if(Reflect.has(target, prop) && target[roleSymbol]=== 'supervisor'){
            if(prop !== 'salario'){
                return Reflect.get(target, prop, receiver);
            }else{
                console.log(`Acceso Denegado a ${prop} para supervisor`);
                return undefined;
            }
        }else if (prop !== 'salario' && prop !== 'datosPersonales'){
            return Reflect.get(target, prop, receiver);
        }else{
            console.log(`Acceso Denegado a ${prop}`);
            return undefined;
        }
    },
});

console.log(empleadoProxy.nombre); // acc permitido
console.log(empleadoProxy.salario); // denegado que supervidor vea salario
console.log(empleadoProxy.datosPersonales); // denegado para otro empleado 