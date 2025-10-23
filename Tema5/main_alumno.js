/* =========================================================================
   Tema 5 – Práctica DOM - Archivo del Alumno
   
   INSTRUCCIONES:
   1. Completa la funcionalidad de cada ejercicio siguiendo los comentarios
   2. Usa solo JavaScript vanilla (sin librerías externas)
   3. Sigue el patrón del Ejercicio 1 que está completado como ejemplo
   ========================================================================= */

/* ==============================================================
   Ejercicio 1 – Selectores y modificación (EJEMPLO COMPLETADO)
   ============================================================== */

// 1. Seleccionamos los elementos que vamos a usar
const contenido = document.getElementById('contenido');
const btnEj1 = document.getElementById('btn-ej1');

// 2. Añadimos el evento click al botón
btnEj1.addEventListener('click', function () {
    // Cambiar el texto del primer párrafo
    const primerParrafo = contenido.querySelector('p');
    primerParrafo.textContent = 'Este texto ha sido modificado con JavaScript';

    // Cambiar el color del segundo párrafo
    const segundoParrafo = contenido.querySelectorAll('p')[1];
    if (segundoParrafo) {
        segundoParrafo.style.color = 'blue';
    }

    // Añadir clase "resaltado" a todos los párrafos
    const todosLosParrafos = contenido.querySelectorAll('p');
    for (let i = 0; i < todosLosParrafos.length; i++) {
        todosLosParrafos[i].classList.add('resaltado');
    }
});

/* ============================================================
   TODO: Ejercicio 2 – Crear y eliminar elementos del DOM
   ============================================================ */

const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
const contenido2 = document.getElementById('contenido2');

// TODO: 2. Crear función para el botón "Añadir párrafo"
//         - Crear un nuevo elemento <p>
//         - Asignar texto: "Nuevo párrafo añadido"
//         - Añadir clase Bootstrap: "mb-2"
//         - Agregarlo al contenedor #contenido
//         - Aplicar eventos hover (función del ejercicio 3)
   btnAdd.addEventListener('click', function () {
      const nuevoParrafo = document.createElement('p');
      nuevoParrafo.textContent = 'Nuevo párrafo añadido';
      nuevoParrafo.classList.add('contenido2', 'mb-2');
      contenido2.appendChild(nuevoParrafo);
      aplicarHover(nuevoParrafo);
   });
// TODO: 3. Crear función para el botón "Eliminar párrafo"
//         - Buscar todos los párrafos en #contenido
//         - Si hay párrafos, eliminar el último
btnRemove.addEventListener('click', function () {
   const parrafos = contenido2.getElementsByTagName('p');
   if (parrafos.length > 0) {
      contenido2.removeChild(parrafos[parrafos.length - 1]);
   }
});


/* ==========================================
   TODO: Ejercicio 3 – Eventos de ratón (hover)
   ========================================== */

// TODO: 1. Crear función para cuando entra el ratón
//         - Cambiar backgroundColor a '#e7f5ff'
   const parrafo = document.querySelector('#contenido3 p');
   parrafo.addEventListener('mouseover', function () {
      parrafo.style.backgroundColor = '#e7f5ff';
   });
// TODO: 2. Crear función para cuando sale el ratón
//         - Restaurar backgroundColor a ''
   parrafo.addEventListener('mouseout', function () {
      parrafo.style.backgroundColor = '';
   });
// TODO: 3. Crear función para aplicar eventos hover a un párrafo
//         - Usar addEventListener para 'mouseover' y 'mouseout'
   1
   
// TODO: 4. Aplicar hover a todos los párrafos existentes inicialmente
function aplicarHover(elemento) {
   elemento.addEventListener('mouseover', function () {
      elemento.style.backgroundColor = '#e7f5ff';
   });
   elemento.addEventListener('mouseout', function () {
      elemento.style.backgroundColor = '';
   });
}

const parrafosEj3 = contenido.getElementsByTagName('p');
for (let i = 0; i < parrafosEj3.length; i++) {
   aplicarHover(parrafosEj3[i]);
}

/* ======================================================
   TODO: Ejercicio 4 – Trabajar con inputs y formularios
   ====================================================== */

// TODO: 1. Seleccionar elementos: input (#nuevoTexto), botón (#btn-cambiar), mensaje error (#msg-ej4)

// TODO: 2. Crear función para el botón "Cambiar texto"
//         - Obtener valor del input (usar .trim())
//         - Si está vacío: mostrar mensaje error, enfocar input
//         - Si tiene texto: ocultar error, cambiar texto del primer párrafo
const btnCambiar = document.getElementById('btn-cambiar');
const nuevoTexto = document.getElementById('nuevoTexto');
const msgEj4 = document.getElementById('msg-ej4');
const primerParrafoEj4 = document.querySelector('#contenido4 p');

btnCambiar.addEventListener('click', function () {
   const texto = nuevoTexto.value.trim();
   if (texto === '') {
      msgEj4.style.display = 'block';
      nuevoTexto.focus();
   } else {
      msgEj4.style.display = 'none';
      primerParrafoEj4.textContent = texto;
   }
});

/* ===================================================
   TODO: Ejercicio 5 – Lista de tareas (To-Do List)
   =================================================== */

// TODO: 1. Seleccionar elementos: input (#tareaInput), botones (#btn-tarea, #btn-borrar-completadas), lista (#listaTareas)
const tareaInput = document.getElementById('tareaInput');
const btnTarea = document.getElementById('btn-tarea');
const btnBorrarCompletadas = document.getElementById('btn-borrar-completadas');
const listaTareas = document.getElementById('listaTareas');
// TODO: 2. Función para añadir tarea
//         - Obtener texto del input
//         - Si no está vacío: crear <li>, añadir texto, agregar evento click para toggle clase 'completada'
//         - Limpiar input y enfocar
btnTarea.addEventListener('click', function () {
   const textoTarea = tareaInput.value.trim();
   if (textoTarea !== '') {
      const nuevaTarea = document.createElement('li');
      nuevaTarea.textContent = textoTarea;
      nuevaTarea.addEventListener('click', function () {
         nuevaTarea.classList.toggle('completada');
      });
      listaTareas.appendChild(nuevaTarea);
      tareaInput.value = '';
      tareaInput.focus();
   }else{
      return;
   }
});
// TODO: 3. Función para borrar tareas completadas
//         - Buscar todos los <li> con clase 'completada'
//         - Eliminar cada uno de la lista


btnBorrarCompletadas.addEventListener('click', function () {
   const tareasCompletadas = listaTareas.querySelectorAll('.completada');
   for (let i = 0; i < tareasCompletadas.length; i++) {
      listaTareas.removeChild(tareasCompletadas[i]);
   }
});

/* ===================================================
   CONSEJOS PARA LOS ALUMNOS:
   
   - Usa console.log() para depurar tu código
   - Prueba cada función por separado antes de continuar
   - Recuerda usar IDs únicos para cada elemento
   - Las clases CSS ya están definidas en custom.css
   - Si algo no funciona, revisa la consola del navegador
   =================================================== */