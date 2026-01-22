// Ejercicio 8 - Manejo de errores

// Función que lanza error si el número es negativo
function doblarPositivo(n: number): number {
    if (n < 0) {
        throw new Error("El número no puede ser negativo");
    }
    return n * 2;
}

// Función que ejecuta el ejercicio
function ejecutarEjercicio8(): void {
    console.log("=== EJERCICIO 8: MANEJO DE ERRORES ===");
    
    // Llamada con valor positivo
    try {
        const resultado1 = doblarPositivo(10);
        console.log(`El doble de 10 es: ${resultado1}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    
    // Llamada con valor negativo
    try {
        const resultado2 = doblarPositivo(-7);
        console.log(`El doble de -7 es: ${resultado2}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
    
    console.log("======================================\n");
}

// Event listener para el botón
document.getElementById("btn8")?.addEventListener("click", ejecutarEjercicio8);