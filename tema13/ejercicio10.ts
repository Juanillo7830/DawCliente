// Ejercicio 10 - Mini proyecto: gestión de alumnos

// Definición de la interfaz Alumno
interface Alumno {
    id: number;
    nombre: string;
    notas: number[];
}

// Clase que implementa la interfaz Alumno
class AlumnoApp implements Alumno {
    id: number;
    nombre: string;
    notas: number[];

    constructor(id: number, nombre: string, notas: number[]) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }

    // Método para calcular la nota media
    calcularNotaMedia(): number {
        if (this.notas.length === 0) {
            return 0;
        }
        // Suma todas las notas y divide entre el número de notas
        const suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }

    // Método que devuelve un resumen del alumno
    obtenerResumen(): string {
        const media = this.calcularNotaMedia();
        return `Alumno: ${this.nombre} (ID: ${this.id}) - Notas: [${this.notas.join(", ")}] - Media: ${media.toFixed(2)}`;
    }
}

// Función que ejecuta el ejercicio
function ejecutarEjercicio10(): void {
    console.log("=== EJERCICIO 10: MINI PROYECTO - GESTIÓN DE ALUMNOS ===");

    // Crear array de alumnos
    const alumnos: AlumnoApp[] = [
        new AlumnoApp(1, "Miguel Sánchez", [7.5, 8.5, 8.0, 7.8]),
        new AlumnoApp(2, "Isa González", [8.0, 8.5, 9.0, 8.5]),
        new AlumnoApp(3, "Alejandro Vázquez", [6.5, 7.0, 7.5, 6.8])
    ];

    // Mostrar resumen de cada alumno
    console.log("\nResumen de alumnos:");
    console.log("-------------------");
    alumnos.forEach((alumno) => {
        console.log(alumno.obtenerResumen());
    });

    // Calcular media global
    let sumaMedias: number = 0;
    alumnos.forEach((alumno) => {
        sumaMedias += alumno.calcularNotaMedia();
    });
    const mediaGlobal = sumaMedias / alumnos.length;

    console.log("\n-------------------");
    console.log(`Media global de todos los alumnos: ${mediaGlobal.toFixed(2)}`);
    console.log("========================================================\n");
}

// Event listener para el botón
document.getElementById("btn10")?.addEventListener("click", ejecutarEjercicio10);
