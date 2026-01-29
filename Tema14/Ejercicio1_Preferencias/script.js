// Elementos del DOM
const inputNombre = document.getElementById('nombre');
const selectColor = document.getElementById('color');
const btnGuardar = document.getElementById('guardar');
const btnRestablecer = document.getElementById('restablecer');

// Cargar preferencias al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarPreferencias();
});

// Función para cargar preferencias desde localStorage
function cargarPreferencias() {
    const nombre = localStorage.getItem('nombre');
    const color = localStorage.getItem('colorFondo');

    if (nombre) {
        inputNombre.value = nombre;
    }

    if (color) {
        selectColor.value = color;
        aplicarColor(color);
    }
}

// Función para aplicar el color de fondo
function aplicarColor(color) {
    document.body.style.backgroundColor = color;
}

// Evento: Guardar preferencias
btnGuardar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    const color = selectColor.value;

    if (nombre === '') {
        alert('Por favor, introduce tu nombre');
        return;
    }

    // Guardar en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('colorFondo', color);

    // Aplicar color
    aplicarColor(color);

    alert('¡Preferencias guardadas exitosamente!');
});

// Evento: Restablecer preferencias
btnRestablecer.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas restablecer las preferencias?')) {
        // Eliminar del localStorage
        localStorage.removeItem('nombre');
        localStorage.removeItem('colorFondo');

        // Limpiar interfaz
        inputNombre.value = '';
        selectColor.value = 'white';
        aplicarColor('white');

        alert('Preferencias restablecidas');
    }
});

// Evento: Cambiar color en tiempo real (opcional)
selectColor.addEventListener('change', () => {
    aplicarColor(selectColor.value);
});
