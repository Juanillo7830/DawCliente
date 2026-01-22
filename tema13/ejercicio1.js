"use strict";
// Ejercicio 1 - Tipos básicos
var _a;
// Declaración de variables con tipos específicos
let nombreAlumno = "María García";
let edad = 22;
let estaMatriculado = true;
let notas = [9.0, 8.5, 9.5, 8.0, 9.2];
const centroEducativo = "IES Triana";
// Función que ejecuta el ejercicio
function ejecutarEjercicio1() {
    console.log("=== EJERCICIO 1: TIPOS BÁSICOS ===");
    console.log(`Nombre del alumno: ${nombreAlumno}`);
    console.log(`Edad: ${edad}`);
    console.log(`¿Está matriculado?: ${estaMatriculado}`);
    console.log(`Notas: ${notas.join(", ")}`);
    console.log(`Centro educativo: ${centroEducativo}`);
    console.log("==================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio1);
