// Ejercicio 7 - Clases e interfaces

// Definición de la interfaz Empleado
interface Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
}

// Clase que implementa la interfaz
class EmpleadoEmpresa implements Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;

    constructor(id: number, nombre: string, sueldoMensual: number) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }

    // Método para calcular el sueldo anual
    calcularSueldoAnual(): number {
        return this.sueldoMensual * 12;
    }
}

// Función que ejecuta el ejercicio
function ejecutarEjercicio7(): void {
    console.log("=== EJERCICIO 7: CLASES E INTERFACES ===");
    
    const empleado = new EmpleadoEmpresa(205, "David Ramos", 3200);
    
    console.log(`Empleado: ${empleado.nombre}`);
    console.log(`ID: ${empleado.id}`);
    console.log(`Sueldo mensual: €${empleado.sueldoMensual}`);
    console.log(`Sueldo anual: €${empleado.calcularSueldoAnual()}`);
    
    console.log("========================================\n");
}

// Event listener para el botón
document.getElementById("btn7")?.addEventListener("click", ejecutarEjercicio7);