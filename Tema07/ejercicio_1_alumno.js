// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  function raizCuadrada(numero) {
    return Math.sqrt(numero);
  }

  const res = raizCuadrada(v);

  out.textContent = `Resultado: ${res}`;

});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';
  function alerta(mensaje) {
    alert(mensaje);
  }
    alerta(msg);
  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';


});

// Ejercicio 3 - new Function (plantilla)

document.getElementById('run-e3').addEventListener('click', function () {

  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);
  const out = document.getElementById('out-e3');

  const sumaFunction = new Function('a', 'b', 'return a + b;');
  const resultado = sumaFunction(a, b);

  out.textContent = `Resultado de la suma: ${resultado}`;
});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
  var x;
  const out = document.getElementById('out-e4');
  x = 10;
  out.textContent += `\nEl valor de x es: ${x}`;
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const resultado = (function () {
    console.log('Ejecutando IIFE');
    return 42;
  })();

  document.getElementById('out-e5').textContent = `Resultado de la IIFE: ${resultado}`;
});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {
  // Obtener valores y convertir a números
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const out = document.getElementById('out-e6');
  
  // Definir función anónima con validación de división por cero
  const dividir = function(x, y) {
    // Validar que los operandos sean números
    if (isNaN(x) || isNaN(y)) {
      return 'Error: Por favor ingrese números válidos';
    }
    // Validar división por cero
    if (y === 0) {
      return 'Error: No es posible dividir por cero';
    }
    return x / y;
  };

  const resultado = dividir(a, b);
  out.textContent = `Resultado de la división: ${resultado}`;
});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {
  // Obtener valores del formulario
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const out = document.getElementById('out-e7');

  // Definir función flecha multiplicar
  const multiplicar = (a, b) => a * b;

  // Validar entradas y mostrar resultado
  if (isNaN(a) || isNaN(b)) {
    out.textContent = 'Error: Por favor ingrese números válidos';
  } else {
    const resultado = multiplicar(a, b);
    out.textContent = `Resultado de la multiplicación: ${resultado}`;
  }
});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {
  // Implementar función con parámetro por defecto
  function saludar(nombre = 'Invitado') {
    // Limpiar el nombre de espacios en blanco
    nombre = nombre.trim();
    // Si está vacío después del trim, usar el valor por defecto
    if (nombre === '') {
      nombre = 'Invitado';
    }
    return `¡Hola, ${nombre}!`;
  }

  const nombre = document.getElementById('a-e8').value;
  const out = document.getElementById('out-e8');
  out.textContent = saludar(nombre);

});

// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {
  // Implementar closure con función externa e interna
  function externa(prefijo) {
    // La función interna "recuerda" el prefijo de la función externa
    function interna(texto) {
      // Usar el prefijo del scope externo y convertir el texto a mayúsculas
      return `${prefijo}: ${texto.toUpperCase()}`;
    }
    return interna(); // Retornar la función interna
  }

  const texto = document.getElementById('a-e9').value || 'texto ejemplo';
  const out = document.getElementById('out-e9');
  
  // Crear una función con prefijo fijo
  const conPrefijo = externa('Mensaje');
  // La función retornada "recuerda" el prefijo
  const resultado = conPrefijo(texto);
  
  out.textContent = resultado;
});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {
  // Obtener el texto de entrada y elemento de salida
  const texto = document.getElementById('a-e10').value || 'Hola Mundo';
  const out = document.getElementById('out-e10');

  // Usar métodos nativos de String
  const longitud = texto.length;                    // Longitud del string
  const mayusculas = texto.toUpperCase();          // Convertir a mayúsculas
  const textoTrimmed = texto.trim();               // Eliminar espacios inicio/fin
  const indiceMundo = texto.indexOf('Mundo');      // Buscar palabra 'Mundo'
  
  // Usar métodos nativos de Math y Date
  const numeroAleatorio = Math.random();           // Número aleatorio entre 0 y 1
  const timestamp = new Date(Date.now())           // Fecha actual
    .toLocaleTimeString();                        // Formatear como hora legible

  // Mostrar todos los resultados
  out.innerHTML = `
    📏 Longitud: ${longitud}<br>
    ⬆️ Mayúsculas: "${mayusculas}"<br>
    ✂️ Sin espacios: "${textoTrimmed}"<br>
    🔍 Índice de 'Mundo': ${indiceMundo}<br>
    🎲 Número aleatorio: ${numeroAleatorio.toFixed(4)}<br>
    ⏰ Hora actual: ${timestamp}
  `;
});
