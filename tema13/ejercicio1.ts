// Ejercicio 1 - Tipos básicos

// Declaración de variables con tipos específicos
let nombreAlumno: string = "María García";
let edad: number = 22;
let estaMatriculado: boolean = true;
let notas: number[] = [9.0, 8.5, 9.5, 8.0, 9.2];
const centroEducativo: string = "IES Triana";

// Función que ejecuta el ejercicio
function ejecutarEjercicio1(): void {
    console.log("=== EJERCICIO 1: TIPOS BÁSICOS ===");
    console.log(`Nombre del alumno: ${nombreAlumno}`);
    console.log(`Edad: ${edad}`);
    console.log(`¿Está matriculado?: ${estaMatriculado}`);
    console.log(`Notas: ${notas.join(", ")}`);
    console.log(`Centro educativo: ${centroEducativo}`);
    console.log("==================================\n");
}

// Event listener para el botón
document.getElementById("btn1")?.addEventListener("click", ejecutarEjercicio1);