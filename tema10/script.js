// Credenciales válidas
const VALID_EMAIL = 'test@medac.es';
const VALID_PASSWORD = '1234';

// Referencias a elementos del DOM
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const spinnerContainer = document.getElementById('spinnerContainer');
const alertContainer = document.getElementById('alertContainer');

// Event listener para el formulario
loginForm.addEventListener('submit', handleLogin);

/**
 * Maneja el evento submit del formulario
 *  Evento del formulario
 */
async function handleLogin(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validación en cliente
    if (!validateForm(email, password)) {
        return;
    }

    // Limpiar alertas previas
    clearAlert();

    // Mostrar spinner
    showSpinner();

    try {
        // Llamar a la función de autenticación (Promesa)
        const result = await authenticateUser(email, password);
        // Si la promesa se resuelve correctamente
        showSuccessAlert(result);
        
        // Limpiar el formulario
        loginForm.reset();
    } catch (error) {
        // Si la promesa se rechaza
        showErrorAlert(error);
    } finally {
        // Ocultar spinner en cualquier caso
        hideSpinner();
    }
}

/**
 * Valida que los campos no estén vacíos
 * - Email ingresado
 * Contraseña ingresada
 *  - True si es válido, False si no
 */
function validateForm(email, password) {
    if (email === '' || password === '') {
        showErrorAlert('Por favor, completa todos los campos');
        return false;
    }

    if (email !== VALID_EMAIL && password !== VALID_PASSWORD) {
        // No mostramos la validación aquí, solo en la respuesta del servidor simulado
        return true;
    }

    return true;
}

/**
 * Simula una autenticación en el servidor usando una Promesa
 * - Email del usuario
 * - Contraseña del usuario
 * - Promesa que se resuelve o rechaza
 */
function authenticateUser(email, password) {
    return new Promise((resolve, reject) => {
        // Simular tiempo de red (1-2 segundos)
        const delay = Math.random() * 1000 + 1000;

        setTimeout(() => {
            // Verificar credenciales
            if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                // Credenciales correctas - resolve
                resolve('¡Bienvenido! Has iniciado sesión correctamente.');
            } else {
                // Credenciales incorrectas - reject
                reject('Email o contraseña incorrectos. Por favor, intenta de nuevo.');
            }
        }, delay);
    });
}

/**
 * Muestra el spinner de carga
 */
function showSpinner() {
    spinnerContainer.style.display = 'block';
}

/**
 * Oculta el spinner de carga
 */
function hideSpinner() {
    spinnerContainer.style.display = 'none';
}

/**
 * Muestra una alerta de éxito
 * - Mensaje de éxito
 */
function showSuccessAlert(message) {
    alertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>¡Éxito!</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    alertContainer.style.display = 'block';
}

/**
 * Muestra una alerta de error
 * - Mensaje de error
 */
function showErrorAlert(message) {
    alertContainer.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    alertContainer.style.display = 'block';
}

/**
 * Limpia las alertas mostradas
 */
function clearAlert() {
    alertContainer.innerHTML = '';
    alertContainer.style.display = 'none';
}
