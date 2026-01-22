// Ejercicio 3 - Parámetros opcionales

// Función con parámetro opcional
function saludar(nombre?: string): void {
    if (nombre) {
        console.log(`Hola, ${nombre}.`);
    } else {
        console.log("Hola, invitado.");
    }
}

// Función que ejecuta el ejercicio
function ejecutarEjercicio3(): void {
    console.log("=== EJERCICIO 3: PARÁMETROS OPCIONALES ===");
    
    // Llamada con parámetro
    saludar("Juan");
    
    // Llamada sin parámetro
    saludar();
    
    console.log("==========================================\n");
}

// Event listener para el botón
document.getElementById("btn3")?.addEventListener("click", ejecutarEjercicio3);