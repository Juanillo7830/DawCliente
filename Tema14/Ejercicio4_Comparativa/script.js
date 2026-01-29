// Elementos del DOM
const inputTexto = document.getElementById('texto');
const btnGuardarLocal = document.getElementById('guardarLocal');
const btnGuardarSession = document.getElementById('guardarSession');
const valorLocal = document.getElementById('valorLocal');
const valorSession = document.getElementById('valorSession');
const btnLimpiarLocal = document.getElementById('limpiarLocal');
const btnLimpiarSession = document.getElementById('limpiarSession');

// Cargar datos al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarDatos();
});

// Función para mostrar los datos almacenados
function mostrarDatos() {
    const local = localStorage.getItem('texto');
    const session = sessionStorage.getItem('texto');

    valorLocal.textContent = local || 'Sin datos';
    valorSession.textContent = session || 'Sin datos';
}

// Evento: Guardar en localStorage
btnGuardarLocal.addEventListener('click', () => {
    const texto = inputTexto.value.trim();

    if (texto === '') {
        alert('Por favor, introduce un texto');
        return;
    }

    localStorage.setItem('texto', texto);
    mostrarDatos();
    alert('Texto guardado en localStorage');
});

// Evento: Guardar en sessionStorage
btnGuardarSession.addEventListener('click', () => {
    const texto = inputTexto.value.trim();

    if (texto === '') {
        alert('Por favor, introduce un texto');
        return;
    }

    sessionStorage.setItem('texto', texto);
    mostrarDatos();
    alert('Texto guardado en sessionStorage');
});

// Evento: Limpiar localStorage
btnLimpiarLocal.addEventListener('click', () => {
    localStorage.removeItem('texto');
    mostrarDatos();
    alert('localStorage limpiado');
});

// Evento: Limpiar sessionStorage
btnLimpiarSession.addEventListener('click', () => {
    sessionStorage.removeItem('texto');
    mostrarDatos();
    alert('sessionStorage limpiado');
});
