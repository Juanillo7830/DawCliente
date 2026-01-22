"use strict";
// Ejercicio 3 - Parámetros opcionales
var _a;
// Función con parámetro opcional
function saludar(nombre) {
    if (nombre) {
        console.log(`Hola, ${nombre}.`);
    }
    else {
        console.log("Hola, invitado.");
    }
}
// Función que ejecuta el ejercicio
function ejecutarEjercicio3() {
    console.log("=== EJERCICIO 3: PARÁMETROS OPCIONALES ===");
    // Llamada con parámetro
    saludar("Juan");
    // Llamada sin parámetro
    saludar();
    console.log("==========================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn3")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio3);
