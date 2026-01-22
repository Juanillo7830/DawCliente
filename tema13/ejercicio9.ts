// Ejercicio 9 - Uso de unknown

// Función que recibe un parámetro de tipo unknown
function toUpperSeguro(valor: unknown): string {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else {
        throw new Error("El valor no es un texto");
    }
}

// Función que ejecuta el ejercicio
function ejecutarEjercicio9(): void {
    console.log("=== EJERCICIO 9: USO DE UNKNOWN ===");
    
    // Prueba con un string
    try {
        const resultado1 = toUpperSeguro("typescript es genial");
        console.log(`Resultado: ${resultado1}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    
    // Prueba con un número (generará error)
    try {
        const resultado2 = toUpperSeguro(123);
        console.log(`Resultado: ${resultado2}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    
    // Prueba con un booleano (generará error)
    try {
        const resultado3 = toUpperSeguro(true);
        console.log(`Resultado: ${resultado3}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    
    console.log("===================================\n");
}

// Event listener para el botón
document.getElementById("btn9")?.addEventListener("click", ejecutarEjercicio9);