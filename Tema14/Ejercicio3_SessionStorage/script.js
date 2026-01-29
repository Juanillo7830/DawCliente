// Elementos del DOM
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputCurso = document.getElementById('curso');
const btnLimpiar = document.getElementById('limpiar');
const datosGuardados = document.getElementById('datosGuardados');
const mostrarNombre = document.getElementById('mostrarNombre');
const mostrarCurso = document.getElementById('mostrarCurso');

// Cargar datos al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
});

// Función para cargar datos desde sessionStorage
function cargarDatos() {
    const nombre = sessionStorage.getItem('nombre');
    const curso = sessionStorage.getItem('curso');

    if (nombre && curso) {
        inputNombre.value = nombre;
        inputCurso.value = curso;
        mostrarNombre.textContent = nombre;
        mostrarCurso.textContent = curso;
        datosGuardados.style.display = 'block';
    }
}

// Evento: Guardar formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const curso = inputCurso.value.trim();

    if (nombre === '' || curso === '') {
        alert('Por favor, rellena todos los campos');
        return;
    }

    // Guardar en sessionStorage
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('curso', curso);

    // Mostrar datos
    mostrarNombre.textContent = nombre;
    mostrarCurso.textContent = curso;
    datosGuardados.style.display = 'block';

    alert('Datos guardados en sessionStorage');
});

// Evento: Limpiar formulario
btnLimpiar.addEventListener('click', () => {
    inputNombre.value = '';
    inputCurso.value = '';
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('curso');
    datosGuardados.style.display = 'none';
    alert('Formulario limpiado');
});
