"use strict";
// Ejercicio 6 - Clases y encapsulación
var _a;
// Clase con propiedad pública y privada
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método público para presentarse
    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
// Función que ejecuta el ejercicio
function ejecutarEjercicio6() {
    console.log("=== EJERCICIO 6: CLASES Y ENCAPSULACIÓN ===");
    const persona = new Persona("Laura", 28);
    // Llamada al método presentarse
    persona.presentarse();
    // Acceso a propiedad pública (funciona)
    console.log(`Nombre (público): ${persona.nombre}`);
    // Intento de acceso a propiedad privada (comentado - daría error)
    // console.log(`Edad (privada): ${persona.edad}`);
    // Error: La propiedad 'edad' es privada y solo se puede acceder desde la clase 'Persona'
    console.log("===========================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn6")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio6);
