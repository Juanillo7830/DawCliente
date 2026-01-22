"use strict";
// Ejercicio 5 - Arrays de interfaces
var _a;
// Array de productos
const productos = [
    { id: 1, nombre: "Auriculares inalámbricos", precio: 89.99 },
    { id: 2, nombre: "Webcam HD", precio: 149.99 },
    { id: 3, nombre: "Micrófono condensador", precio: 199.99 }
];
// Función que ejecuta el ejercicio
function ejecutarEjercicio5() {
    console.log("=== EJERCICIO 5: ARRAYS DE INTERFACES ===");
    let precioTotal = 0;
    console.log("Lista de productos:");
    productos.forEach((producto) => {
        console.log(`- ${producto.nombre}: €${producto.precio}`);
        precioTotal += producto.precio;
    });
    console.log(`\nPrecio total de todos los productos: €${precioTotal.toFixed(2)}`);
    console.log("=========================================\n");
}
// Event listener para el botón
(_a = document.getElementById("btn5")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ejecutarEjercicio5);
