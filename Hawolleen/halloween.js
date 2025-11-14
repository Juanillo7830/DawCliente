/**
 * ====================================
 * JUEGO DE HALLOWEEN - ATRAPA CALABAZAS
 * Ejercicio para Estudiantes de 2º DAM
 * ====================================
 * 
 * INSTRUCCIONES PARA EL ALUMNO:
 * 
 * Este archivo contiene un juego de Halloween parcialmente implementado.
 * Tu tarea es completar las funciones que están marcadas con "// TODO".
 * 
 * EJERCICIOS A COMPLETAR:
 * 1. Completar la función de movimiento con teclado
 * 2. Implementar la lógica de puntuación
 * 3. Completar la detección de colisiones
 * 4. Finalizar la función de reinicio del juego
 * 
 * ¡Lee los comentarios detenidamente y sigue las instrucciones!
 */

// ================================
// VARIABLES DEL JUEGO (YA IMPLEMENTADAS)
// ================================
//ponme musica de ambiente de halloween
const backgroundMusic = new Audio('music/HalloweenMusic.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

const gameContainer = document.getElementById('gameContainer');
const player = document.getElementById('player');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const gameOverScreen = document.getElementById('gameOver');
const finalScoreDisplay = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');

let score = 0;
let lives = 3;
let playerPosition = 270; // Posición inicial centrada
let gameActive = true;
let fallingObjects = [];
let gameSpeed = 2;
let spawnInterval;
let gameLoop;

// Configuración del juego (NO MODIFICAR)
const PLAYER_SPEED = 15;
const CONTAINER_WIDTH = 600;
const CONTAINER_HEIGHT = 500;
const PLAYER_WIDTH = 60;
const OBJECT_SIZE = 40;

// ================================
// FUNCIONES A COMPLETAR POR EL ALUMNO
// ================================

/**
 * EJERCICIO 1: MOVIMIENTO CON TECLADO
 * 
 * Completa esta función para que el jugador se mueva con las flechas del teclado.
 * 
 * PISTAS:
 * - Usa e.key para detectar qué tecla se presionó
 * - 'ArrowLeft' es la flecha izquierda
 * - 'ArrowRight' es la flecha derecha
 * - Usa Math.max() para que no se salga por la izquierda (mínimo 0)
 * - Usa Math.min() para que no se salga por la derecha (máximo CONTAINER_WIDTH - PLAYER_WIDTH)
 * - Actualiza la posición visual con player.style.left
 */
function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        if (!gameActive) return;

        // TODO: Completa el código aquí
        if (e.key === 'ArrowLeft') {
            // TODO: Mueve el jugador hacia la izquierda
            // Pista: playerPosition = Math.max(0, playerPosition - PLAYER_SPEED);
            playerPosition = Math.max(0, playerPosition - PLAYER_SPEED);
        } else if (e.key === 'ArrowRight') {
            // TODO: Mueve el jugador hacia la derecha  
            // Pista: playerPosition = Math.min(CONTAINER_WIDTH - PLAYER_WIDTH, playerPosition + PLAYER_SPEED);
            playerPosition = Math.min(CONTAINER_WIDTH - PLAYER_WIDTH, playerPosition + PLAYER_SPEED);
        }

        // TODO: Actualiza la posición visual del jugador
        // Pista: player.style.left = playerPosition + 'px';
        player.style.left = playerPosition + 'px';

    });
}

/**
 * EJERCICIO 2: SISTEMA DE PUNTUACIÓN
 * 
 * Completa esta función para manejar cuando el jugador atrapa un objeto.
 * 
 * INSTRUCCIONES:
 * - Si el objeto es 'good' (calabaza): suma 10 puntos
 * - Si el objeto es 'bad' (fantasma): resta 1 vida
 * - Actualiza la interfaz mostrando la nueva puntuación/vidas
 * - Si las vidas llegan a 0, termina el juego
 * - Cada 50 puntos, aumenta la velocidad del juego en 0.5
 */
function handleCollision(objType) {
    if (objType === 'good') {
        // TODO: El jugador atrapó una calabaza
        // 1. Suma 10 puntos al score
        score += 10;
        // 2. Actualiza el texto que muestra la puntuación
        scoreDisplay.textContent = score;

        // 3. Si los puntos son múltiplo de 50, aumenta la velocidad
        // Pista: usa (score % 50 === 0) para verificar si es múltiplo
        if (score % 50 === 0) {
            gameSpeed += 0.5;
        }


    } else if (objType === 'bad') {
        // TODO: El jugador tocó un fantasma
        // 1. Resta 1 vida
        lives -= 1;

        // 2. Actualiza el texto que muestra las vidas
        livesDisplay.textContent = lives;

        // 3. Si no quedan vidas, llama a endGame()
        if (lives === 0) {
            endGame();
        }

    }
}

/**
 * EJERCICIO 3: DETECCIÓN DE COLISIONES
 * 
 * Esta función debe detectar si el jugador ha tocado un objeto que cae.
 * 
 * EXPLICACIÓN DE COLISIONES:
 * Dos rectángulos se superponen si:
 * - El lado izquierdo del objeto1 está a la izquierda del lado derecho del objeto2 Y
 * - El lado derecho del objeto1 está a la derecha del lado izquierdo del objeto2 Y  
 * - El lado superior del objeto1 está arriba del lado inferior del objeto2 Y
 * - El lado inferior del objeto1 está abajo del lado superior del objeto2
 */
function checkCollision(obj) {
    // Rectángulo del objeto que cae
    const objRect = {
        left: obj.x,
        right: obj.x + OBJECT_SIZE,
        top: obj.y,
        bottom: obj.y + OBJECT_SIZE
    };

    // Rectángulo del jugador
    const playerRect = {
        left: playerPosition,
        right: playerPosition + PLAYER_WIDTH,
        top: CONTAINER_HEIGHT - 70,
        bottom: CONTAINER_HEIGHT - 10
    };

    // TODO: Completa la detección de colisión
    // Devuelve true si hay colisión, false si no la hay
    // 
    // Pista: return objRect.left < playerRect.right &&
    //               objRect.right > playerRect.left &&
    //               objRect.top < playerRect.bottom &&
    //               objRect.bottom > playerRect.top;
    

    return objRect.left < playerRect.right &&
           objRect.right > playerRect.left &&
           objRect.top < playerRect.bottom &&
           objRect.bottom > playerRect.top;

}

/**
 * EJERCICIO 4: REINICIAR EL JUEGO
 * 
 * Esta función debe devolver todas las variables a su estado inicial.
 */
function resetGameVariables() {
    // TODO: Reinicia las variables del juego a sus valores iniciales
    // 1. score = 0
    score = 0;
    // 2. lives = 3
    lives = 3;

    // 3. gameSpeed = 2
    gameSpeed = 2;

    // 4. gameActive = true
    gameActive = true;

    // 5. playerPosition = 270
    playerPosition = 270;

    // TODO: Actualiza la interfaz
    // 1. Actualiza el texto de puntuación
    scoreDisplay.textContent = score;

    // 2. Actualiza el texto de vidas
    livesDisplay.textContent = lives;

    // 3. Actualiza la posición visual del jugador
    player.style.left = playerPosition + 'px';

    // 4. Oculta la pantalla de game over
    gameOverScreen.style.display = 'none';

}

// ================================
// FUNCIONES YA IMPLEMENTADAS (NO MODIFICAR)
// ================================

/**
 * Inicializar la posición del jugador
 */
function initializePlayer() {
    player.style.left = playerPosition + 'px';
}

/**
 * Control del jugador con ratón (YA IMPLEMENTADO)
 */
function setupMouseControls() {
    gameContainer.addEventListener('mousemove', (e) => {
        if (!gameActive) return;

        const rect = gameContainer.getBoundingClientRect();
        playerPosition = Math.max(0, Math.min(CONTAINER_WIDTH - PLAYER_WIDTH, e.clientX - rect.left - PLAYER_WIDTH / 2));
        player.style.left = playerPosition + 'px';
    });
}

/**
 * Crear objeto que cae (calabaza o fantasma) - YA IMPLEMENTADO
 */
function createFallingObject() {
    const obj = document.createElement('div');
    obj.className = 'falling-object';

    // 70% calabazas (buenas), 30% fantasmas (malos)
    const isGood = Math.random() < 0.7;
    obj.textContent = isGood ? '🎃' : '👻';
    obj.dataset.type = isGood ? 'good' : 'bad';

    // Posición aleatoria horizontal
    const randomX = Math.random() * (CONTAINER_WIDTH - OBJECT_SIZE);
    obj.style.left = randomX + 'px';
    obj.style.top = '-50px';

    gameContainer.appendChild(obj);
    fallingObjects.push({
        element: obj,
        x: randomX,
        y: -50,
        type: isGood ? 'good' : 'bad'
    });
}

/**
 * Actualizar el estado del juego - YA IMPLEMENTADO
 */
function update() {
    if (!gameActive) return;

    // Actualizar objetos que caen
    for (let i = fallingObjects.length - 1; i >= 0; i--) {
        const obj = fallingObjects[i];
        obj.y += gameSpeed;
        obj.element.style.top = obj.y + 'px';

        // Comprobar colisión (USARÁ TU FUNCIÓN)
        if (checkCollision(obj)) {
            handleCollision(obj.type); // USARÁ TU FUNCIÓN
            obj.element.remove();
            fallingObjects.splice(i, 1);
            continue;
        }

        // Eliminar si sale de pantalla
        if (obj.y > CONTAINER_HEIGHT) {
            obj.element.remove();
            fallingObjects.splice(i, 1);
        }
    }
}

/**
 * Finalizar el juego - YA IMPLEMENTADO
 */
function endGame() {
    gameActive = false;
    clearInterval(spawnInterval);
    clearInterval(gameLoop);

    finalScoreDisplay.textContent = score;
    gameOverScreen.style.display = 'block';
}

/**
 * Reiniciar el juego - USARÁ TU FUNCIÓN
 */
function restartGame() {
    // Limpiar objetos existentes
    fallingObjects.forEach(obj => obj.element.remove());
    fallingObjects = [];

    // Reiniciar variables (USARÁ TU FUNCIÓN)
    resetGameVariables();

    // Iniciar juego
    startGame();
}

/**
 * Iniciar el juego - YA IMPLEMENTADO
 */
function startGame() {
    // Crear objetos cada 1 segundo
    spawnInterval = setInterval(createFallingObject, 1000);

    // Actualizar juego cada 30ms (~33 FPS)
    gameLoop = setInterval(update, 30);
}

/**
 * Configurar event listeners - YA IMPLEMENTADO
 */
function setupEventListeners() {
    restartBtn.addEventListener('click', restartGame);
}

/**
 * Inicialización del juego - YA IMPLEMENTADO
 */
function initGame() {
    initializePlayer();
    setupKeyboardControls(); // USARÁ TU FUNCIÓN
    setupMouseControls();
    setupEventListeners();
    startGame();
}

// Iniciar el juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initGame);

// ================================
// NOTAS PARA EL ESTUDIANTE
// ================================

/*
CONSEJOS PARA COMPLETAR LOS EJERCICIOS:

1. Lee cada TODO detenidamente
2. Usa las pistas que se proporcionan
3. Prueba el juego después de cada ejercicio completado
4. Si algo no funciona, revisa la consola del navegador (F12)
5. Pregunta al profesor si tienes dudas

ORDEN RECOMENDADO:
1. Ejercicio 1 (Movimiento) - Es el más fácil
2. Ejercicio 4 (Reinicio) - Ayuda a probar mejor
3. Ejercicio 2 (Puntuación) - Lógica de juego
4. Ejercicio 3 (Colisiones) - El más complejo

¡Buena suerte programando! 🎃
*/