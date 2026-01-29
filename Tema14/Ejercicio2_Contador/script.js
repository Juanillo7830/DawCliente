// Elementos del DOM
const contadorDisplay = document.getElementById('contador');
const btnReiniciar = document.getElementById('reiniciar');

// Cargar contador al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    incrementarContador();
    mostrarContador();
});

// Función para incrementar el contador
function incrementarContador() {
    let contador = localStorage.getItem('visitas');
    
    // Convertir a número (si no existe, es null, lo convertimos a 0)
    contador = contador ? Number(contador) : 0;
    
    // Incrementar en 1
    contador++;
    
    // Guardar en localStorage
    localStorage.setItem('visitas', String(contador));
}

// Función para mostrar el contador
function mostrarContador() {
    const contador = localStorage.getItem('visitas');
    const numero = contador ? Number(contador) : 0;
    contadorDisplay.textContent = numero;
}

// Evento: Reiniciar contador
btnReiniciar.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas reiniciar el contador?')) {
        localStorage.removeItem('visitas');
        contadorDisplay.textContent = '0';
        alert('Contador reiniciado');
    }
});
