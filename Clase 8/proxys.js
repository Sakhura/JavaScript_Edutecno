//Proxys

const target={
    message: 'Hola Clase'
};

const handler = {
    get(target, prop){
        if(prop in target){
            return target[prop];
        } else {
        return 'Propiedad no encontrada';
    }
}
};

const proxy = new Proxy(target, handler);

console.log(proxy.message); //Hola Clase
console.log(proxy.nonExistent); //Propiedad no encontrada