      const regexUsername = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
      const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const regexContrasena = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?¿]).{8,}$/;
      const regexEdad = /^\d+$/;

        // Funciones para gestión de cookies
        function setCookie(name, value, days) {
            let cookie = `${name}=${encodeURIComponent(value)}; path=/;`;
            if (days !== null){
                cookie += ` max-age=${days * 24 * 60 * 60};`;
            }
            cookie += "; path=/";
            document.cookie = cookie;
        }

        function getCookie(name) {
            let cookies= new Map();
            let all = document.cookie;
            let list = all.split("; ");
            for (let i = 0; i < list.length; i++) {
                let cookie = list[i];
                let p = cookie.indexOf("=");
                let cname = cookie.substring(0, p);
                let cvalue = cookie.substring(p + 1);
                value=decodeURIComponent(cvalue);
                cookies.set(cname, value);
            }
            return cookies.get(name);
        }

        function deleteCookie(name) {
            document.cookie = name + '=; Max-Age=0; path=/';
        }

        // Función para validar un campo
        function validateField(input, regex, validMsgId) {
            const value = input.value.trim();
            const validMsg = document.getElementById(validMsgId);

            if (value === '') {
                input.className = '';
                validMsg.textContent = '';
                validMsg.className = 'validation-message';
                return false;
            }

            if (regex.test(value)) {
                input.className = 'valid';
                validMsg.textContent = '✓ Correcto';
                validMsg.className = 'validation-message success';
                return true;
            } else {
                input.className = 'invalid';
                validMsg.textContent = '✗ Formato incorrecto';
                validMsg.className = 'validation-message error';
                return false;
            }
        }

        // 1. Evento window.onload
        window.onload = function() {
            
            // usar localStorage como respaldo para mostrar el nombre guardado.
            const savedUsername = getCookie('username') || localStorage.getItem('username');
            const mensajeBienvenida = document.getElementById('mensajeBienvenida');

            if (savedUsername) {
                mensajeBienvenida.innerHTML = `<div class="welcome-message">¡Bienvenido de nuevo, ${savedUsername}!</div>`;
                document.getElementById('username').value = savedUsername;
                // Validar el campo automáticamente
                validateField(document.getElementById('username'), regexUsername, 'validUsername');
            }
        };

        // Configurar campos del formulario
        const campos = [
            { id: 'username', regex: regexUsername, helpId: 'helpUsername', validId: 'validUsername' },
            { id: 'correo', regex: regexCorreo, helpId: 'ayudaCorreo', validId: 'validoCorreo' },
            { id: 'contrasena', regex: regexContrasena, helpId: 'ayudaContrasena', validId: 'validoContrasena' },
            { id: 'edad', regex: regexEdad, helpId: 'ayudaEdad', validId: 'validoEdad' }
        ];

        campos.forEach(campo => {
            const input = document.getElementById(campo.id);
            const msgAyuda = document.getElementById(campo.helpId);

            // 2. Evento onfocus
            input.onfocus = function() {
                msgAyuda.classList.add('show');
            };

            // 3. Evento onblur
            input.onblur = function() {
                msgAyuda.classList.remove('show');
            };

            // 4. Evento oninput
            input.oninput = function() {
                validateField(input, campo.regex, campo.validId);
            };
        });

        // 6. Evento submit
        const formulario = document.getElementById('miFormulario');
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validar todos los campos
            let todoValido = true;
            campos.forEach(campo => {
                const input = document.getElementById(campo.id);
                if (!validateField(input, campo.regex, campo.validId) || input.value.trim() === '') {
                    todoValido = false;
                }
            });

            if (!todoValido) {
                alert('Por favor, corrige los errores antes de enviar el formulario.');
                return;
            }

            // Si todo es válido, guardar cookie y también guardar en localStorage
            //Al no funcionarme las cookies en file:// he usado localStorage como respaldo
            const username = document.getElementById('username').value;
            setCookie('username', username, 7);
            try { localStorage.setItem('username', username); } catch (e) {}

            const mensajeInfo = document.getElementById('mensajeInfo');
            mensajeInfo.innerHTML = '<div class="info-message">✓ Formulario enviado correctamente. Cookie guardada por 7 días.</div>';

            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                mensajeInfo.innerHTML = '';
            }, 5000);
        });

        // 7. Evento onclick del botón "Eliminar cookie"
        document.getElementById('btnEliminarCookie').onclick = function() {
            deleteCookie('username');
            try { localStorage.removeItem('username'); } catch (e) {}
            document.getElementById('mensajeBienvenida').innerHTML = '';
            
            const mensajeInfo = document.getElementById('mensajeInfo');
            mensajeInfo.innerHTML = '<div class="info-message">✓ Cookie eliminada correctamente.</div>';

            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
                mensajeInfo.innerHTML = '';
            }, 3000);
        };