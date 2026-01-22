"use strict";
// Ejercicio 2 - Funciones tipadas
var _a;
// Función que calcula la media de dos números
function calcularMedia(num1, num2) {
    return (num1 + num2) / 2;
}
// Función que ejecuta el ejercicio
function ejecutarEjercicio2() {
    console.log("=== EJERCICIO 2: FUNCIONES TIPADAS ===");
    // Llamada correcta
    const media = calcularMedia(9, 7);
    console.log(`La media de 9 y 7 es: ${media}`);
    // Llamada incorrecta (comentada para evitar error en compilación)
    // const mediaIncorrecta = calcularMedia("8", 6); 
    // Error: El argumento de tipo 'string' no se puede asignar al parámetro de tipo 'number'
    console.log("======================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn2")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio2);
