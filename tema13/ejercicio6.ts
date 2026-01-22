// Ejercicio 6 - Clases y encapsulación

// Clase con propiedad pública y privada
class Persona {
    public nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método público para presentarse
    presentarse(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Función que ejecuta el ejercicio
function ejecutarEjercicio6(): void {
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
document.getElementById("btn6")?.addEventListener("click", ejecutarEjercicio6);