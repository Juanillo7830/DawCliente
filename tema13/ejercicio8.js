"use strict";
// Ejercicio 8 - Manejo de errores
var _a;
// Función que lanza error si el número es negativo
function doblarPositivo(n) {
    if (n < 0) {
        throw new Error("El número no puede ser negativo");
    }
    return n * 2;
}
// Función que ejecuta el ejercicio
function ejecutarEjercicio8() {
    console.log("=== EJERCICIO 8: MANEJO DE ERRORES ===");
    // Llamada con valor positivo
    try {
        const resultado1 = doblarPositivo(10);
        console.log(`El doble de 10 es: ${resultado1}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    // Llamada con valor negativo
    try {
        const resultado2 = doblarPositivo(-7);
        console.log(`El doble de -7 es: ${resultado2}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    console.log("======================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn8")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio8);
