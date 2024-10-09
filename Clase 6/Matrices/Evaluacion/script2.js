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

  agregarTarea(descripcion) {
    if (descripcion) {
      const nuevaTarea = new Tarea(descripcion);
      this.listaTareas.push(nuevaTarea);
      return this; // Permitir encadenar métodos
    } else {
      console.error("La descripción de la tarea no puede estar vacía.");
    }
  }

  completarTarea(index) {
    if (index >= 0 && index < this.listaTareas.length) {
      this.listaTareas[index].completada = true;
    } else {
      console.error("Índice fuera de rango.");
    }
    return this; // Permitir encadenar métodos
  }

  eliminarTarea(index) {
    if (index >= 0 && index < this.listaTareas.length) {
      this.listaTareas.splice(index, 1);
    } else {
      console.error("Índice fuera de rango.");
    }
    return this; // Permitir encadenar métodos
  }

  filtrarTareas(estado) {
    return this.listaTareas.filter((tarea) => tarea.completada === estado);
  }

  mostrarNumeroTotalTareas() {
    console.log(`Número total de tareas: ${this.listaTareas.length}`);
  }

  mostrarTareas() {
    if (this.listaTareas.length > 0) {
      console.log("Lista de tareas:");
      this.listaTareas.map((tarea, index) => {
        console.log(
          `${index + 1}. ${tarea.descripcion} - ${
            tarea.completada ? "Completada" : "Pendiente"
          }`
        );
      });
    } else {
      console.log("No hay tareas en la lista.");
    }
  }
}

// Ejemplos de uso
const tareas = new Tareas();

tareas
  .agregarTarea("Hacer ejercicio")
  .agregarTarea("Estudiar JavaScript")
  .agregarTarea("Preparar la cena")
  .completarTarea(0)
  .eliminarTarea(2);

const tareasPendientes = tareas.filtrarTareas(false);
console.log("Tareas pendientes:", tareasPendientes);

tareas.mostrarTareas();
tareas.mostrarNumeroTotalTareas();
