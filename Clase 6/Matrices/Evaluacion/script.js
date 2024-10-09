//fc crear objetos de tarea
function Tarea(descripcion){
    this.descripcion = descripcion;
    this.completada = false;
}

//fc principal
function gestionarTareas(){
    const listaTareas =[];

    //agregar tareas
    function agregarTarea(descripcion){
        const nuevaTarea = new Tarea(descripcion)
            listaTareas.push(nuevaTarea);
    
    }
    //fc marcar las tareas
    function marcarTareaCompletada(index){
        if (index >= 0 && index < listaTareas.length){
            listaTareas[index].completada = true;
        }
    }
    //filtro tarea x estado, pdte o completada

    function filtrarTarea(estado) {
        return listaTareas.filter(tarea => tarea.completada === estado);
    }

    //mostrar nro total de tareas
    function mostrarNroTotalTareas(){
        console.log(`El número totas de tareas: ${listaTareas.length}`);
    }

    //ej de uso
    agregarTarea("Leer papers");
    agregarTarea("Prácticar HTML, CSS y JS");
    agregarTarea("Realizar los Ejercicios de Consolidación");

    marcarTareaCompletada(0);

    const tareasPendientes = filtrarTarea(false);
    console.log("Tareas pendientes ", tareasPendientes);

    mostrarNroTotalTareas();

}


//llamar fc principal

gestionarTareas();