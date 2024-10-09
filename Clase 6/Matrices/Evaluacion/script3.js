// Clase para crear objetos de tarea
class Tarea {
    constructor(descripcion) {
      this.descripcion = descripcion;
      this.completada = false;
    }
  }
  
  // Clase para gestionar tareas
  class Tareas {
    constructor() {
      this.listaTareas = [];
    }
  
    agregarTarea(descripcion: string) {
      const nuevaTarea = new Tarea(descripcion);
      this.listaTareas.push(nuevaTarea);
    }
  
    completarTarea(index: number) {
      if (index >= 0 && index < this.listaTareas.length) {
        this.listaTareas[index].completada = true;
      }
    }
  
    filtrarTareas(estado: boolean) {
      return this.listaTareas.filter(tarea => tarea.completada === estado);
    }
  
    mostrarNumeroTotalTareas() {
      console.log(`Número total de tareas: ${this.listaTareas.length}`);
    }
  }
  
  // Ejemplos de uso
  const tareas = new Tareas();
  
  tareas.agregarTarea("Hacer ejercicio");
  tareas.agregarTarea("Estudiar JavaScript");
  tareas.agregarTarea("Preparar la cena");
  
  tareas.completarTarea(0);
  
  const tareasPendientes = tareas.filtrarTareas(false);
  console.log("Tareas pendientes:", tareasPendientes);
  
  tareas.mostrarNumeroTotalTareas();