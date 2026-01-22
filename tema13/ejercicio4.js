"use strict";
// Ejercicio 4 - Interfaces como tipo
var _a;
// Variable de tipo Producto correcta
const producto1 = {
    id: 1,
    nombre: "pizza",
    precio: 20000.99
};
// Objeto incorrecto (comentado para evitar error)
// const productoIncorrecto: Producto = {
//     id: 2,
//     nombre: "hamburguesa"
//     // Falta la propiedad 'precio'
// };
// Función que ejecuta el ejercicio
function ejecutarEjercicio4() {
    console.log("=== EJERCICIO 4: INTERFACES COMO TIPO ===");
    console.log("Producto correcto:");
    console.log(`ID: ${producto1.id}`);
    console.log(`Nombre: ${producto1.nombre}`);
    console.log(`Precio: ${producto1.precio}€`);
    console.log("=========================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn4")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio4);
