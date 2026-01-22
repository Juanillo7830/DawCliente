"use strict";
// Ejercicio 7 - Clases e interfaces
var _a;
// Clase que implementa la interfaz
class EmpleadoEmpresa {
    constructor(id, nombre, sueldoMensual) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    // Método para calcular el sueldo anual
    calcularSueldoAnual() {
        return this.sueldoMensual * 12;
    }
}
// Función que ejecuta el ejercicio
function ejecutarEjercicio7() {
    console.log("=== EJERCICIO 7: CLASES E INTERFACES ===");
    const empleado = new EmpleadoEmpresa(205, "David Ramos", 3200);
    console.log(`Empleado: ${empleado.nombre}`);
    console.log(`ID: ${empleado.id}`);
    console.log(`Sueldo mensual: €${empleado.sueldoMensual}`);
    console.log(`Sueldo anual: €${empleado.calcularSueldoAnual()}`);
    console.log("========================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn7")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio7);
