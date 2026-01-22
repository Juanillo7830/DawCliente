// Ejercicio 4 - Interfaces como tipo

// Definición de la interfaz
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

// Variable de tipo Producto correcta
const producto1: Producto = {
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
function ejecutarEjercicio4(): void {
    console.log("=== EJERCICIO 4: INTERFACES COMO TIPO ===");
    console.log("Producto correcto:");
    console.log(`ID: ${producto1.id}`);
    console.log(`Nombre: ${producto1.nombre}`);
    console.log(`Precio: ${producto1.precio}€`);
    console.log("=========================================\n");
}

// Event listener para el botón
document.getElementById("btn4")?.addEventListener("click", ejecutarEjercicio4);