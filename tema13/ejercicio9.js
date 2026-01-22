"use strict";
// Ejercicio 9 - Uso de unknown
var _a;
// Función que recibe un parámetro de tipo unknown
function toUpperSeguro(valor) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    }
    else {
        throw new Error("El valor no es un texto");
    }
}
// Función que ejecuta el ejercicio
function ejecutarEjercicio9() {
    console.log("=== EJERCICIO 9: USO DE UNKNOWN ===");
    // Prueba con un string
    try {
        const resultado1 = toUpperSeguro("typescript es genial");
        console.log(`Resultado: ${resultado1}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    // Prueba con un número (generará error)
    try {
        const resultado2 = toUpperSeguro(123);
        console.log(`Resultado: ${resultado2}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    // Prueba con un booleano (generará error)
    try {
        const resultado3 = toUpperSeguro(true);
        console.log(`Resultado: ${resultado3}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    console.log("===================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn9")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio9);
