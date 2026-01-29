// Elementos del DOM
const inputTarea = document.getElementById('inputTarea');
const btnAnadir = document.getElementById('btnAnadir');
const listaTareas = document.getElementById('listaTareas');
const btnLimpiar = document.getElementById('btnLimpiar');
const filtroTodas = document.getElementById('filtroTodas');
const filtroPendientes = document.getElementById('filtroPendientes');
const filtroCompletadas = document.getElementById('filtroCompletadas');
const totalTareasSpan = document.getElementById('totalTareas');
const tareasCompletadasSpan = document.getElementById('tareasCompletadas');
const tareasPendientesSpan = document.getElementById('tareasPendientes');

// Variables
let tareas = [];
let filtroActual = 'todas';

// Cargar tareas al iniciar
document.addEventListener('DOMContentLoaded', () => {
    cargarTareas();
    renderizarTareas();
});

// ========== FUNCIONES DE ALMACENAMIENTO ==========

// Función para cargar tareas desde localStorage
function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');

    if (tareasGuardadas) {
        tareas = JSON.parse(tareasGuardadas);
    } else {
        tareas = [];
    }
}

// Función para guardar tareas en localStorage
function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    // Emitir evento de cambio para sincronización entre pestañas
    actualizarOtrasPestanas();
}

// ========== FUNCIONES DE RENDERIZADO ==========

// Función para renderizar las tareas
function renderizarTareas() {
    listaTareas.innerHTML = '';

    // Filtrar tareas según el filtro activo
    let tareasFiltradas = tareas;

    if (filtroActual === 'pendientes') {
        tareasFiltradas = tareas.filter(t => !t.completada);
    } else if (filtroActual === 'completadas') {
        tareasFiltradas = tareas.filter(t => t.completada);
    }

    // Si no hay tareas
    if (tareasFiltradas.length === 0) {
        listaTareas.innerHTML = `
            <div class="lista-vacia">
                <p>📭 No hay tareas</p>
                <small>Agrega una nueva tarea para comenzar</small>
            </div>
        `;
    } else {
        // Crear elementos de tareas
        tareasFiltradas.forEach((tarea, index) => {
            const indiceOriginal = tareas.indexOf(tarea);
            const li = document.createElement('li');
            li.className = `tarea ${tarea.completada ? 'completada' : ''}`;

            li.innerHTML = `
                <input
                    type="checkbox"
                    class="checkbox"
                    ${tarea.completada ? 'checked' : ''}
                    data-index="${indiceOriginal}"
                >
                <span class="texto-tarea">${escaparHTML(tarea.texto)}</span>
                <button class="btn-eliminar" data-index="${indiceOriginal}">Eliminar</button>
            `;

            // Eventos del checkbox
            const checkbox = li.querySelector('.checkbox');
            checkbox.addEventListener('change', () => {
                toggleCompletada(indiceOriginal);
            });

            // Evento del botón eliminar
            const btnEliminar = li.querySelector('.btn-eliminar');
            btnEliminar.addEventListener('click', () => {
                eliminarTarea(indiceOriginal);
            });

            listaTareas.appendChild(li);
        });
    }

    // Actualizar estadísticas
    actualizarEstadisticas();
}

// Función para escapar HTML (seguridad)
function escaparHTML(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

// ========== FUNCIONES DE TAREAS ==========

// Función para agregar una tarea
function agregarTarea() {
    const texto = inputTarea.value.trim();

    if (texto === '') {
        alert('Por favor, escribe una tarea');
        return;
    }

    // Crear objeto tarea
    const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false,
        fechaCreacion: new Date().toLocaleString()
    };

    // Agregar a array
    tareas.push(nuevaTarea);

    // Guardar y renderizar
    guardarTareas();
    renderizarTareas();

    // Limpiar input
    inputTarea.value = '';
    inputTarea.focus();
}

// Función para marcar como completada
function toggleCompletada(index) {
    if (tareas[index]) {
        tareas[index].completada = !tareas[index].completada;
        guardarTareas();
        renderizarTareas();
    }
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    if (tareas[index]) {
        tareas.splice(index, 1);
        guardarTareas();
        renderizarTareas();
    }
}

// Función para borrar todas las completadas
function borrarCompletadas() {
    if (tareas.some(t => t.completada)) {
        if (confirm('¿Estás seguro de que deseas eliminar todas las tareas completadas?')) {
            tareas = tareas.filter(t => !t.completada);
            guardarTareas();
            renderizarTareas();
        }
    } else {
        alert('No hay tareas completadas para eliminar');
    }
}

// ========== FUNCIONES DE ESTADÍSTICAS ==========

// Función para actualizar estadísticas
function actualizarEstadisticas() {
    const total = tareas.length;
    const completadas = tareas.filter(t => t.completada).length;
    const pendientes = total - completadas;

    totalTareasSpan.textContent = total;
    tareasCompletadasSpan.textContent = completadas;
    tareasPendientesSpan.textContent = pendientes;
}

// ========== FUNCIONES DE FILTROS ==========

// Función para cambiar filtro
function cambiarFiltro(nuevoFiltro) {
    filtroActual = nuevoFiltro;

    // Actualizar botones activos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('activo');
    });

    if (nuevoFiltro === 'todas') {
        filtroTodas.classList.add('activo');
    } else if (nuevoFiltro === 'pendientes') {
        filtroPendientes.classList.add('activo');
    } else if (nuevoFiltro === 'completadas') {
        filtroCompletadas.classList.add('activo');
    }

    renderizarTareas();
}

// ========== SINCRONIZACIÓN ENTRE PESTAÑAS ==========

// Función para actualizar otras pestañas
function actualizarOtrasPestanas() {
    // Emitir evento storage (solo funciona entre pestañas distintas)
    window.dispatchEvent(new StorageEvent('storage', {
        key: 'tareas',
        newValue: JSON.stringify(tareas),
        oldValue: null,
        storageArea: localStorage
    }));
}

// Escuchar cambios en localStorage (desde otras pestañas)
window.addEventListener('storage', (e) => {
    if (e.key === 'tareas') {
        cargarTareas();
        renderizarTareas();
    }
});

// ========== EVENTOS ==========

// Agregar tarea con botón
btnAnadir.addEventListener('click', agregarTarea);

// Agregar tarea con Enter
inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

// Eventos de filtros
filtroTodas.addEventListener('click', () => cambiarFiltro('todas'));
filtroPendientes.addEventListener('click', () => cambiarFiltro('pendientes'));
filtroCompletadas.addEventListener('click', () => cambiarFiltro('completadas'));

// Botón limpiar completadas
btnLimpiar.addEventListener('click', borrarCompletadas);
