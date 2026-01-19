<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Videojuegos - Catálogo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <style>
        body {
            background-color: #0a0a0a;
        }
        
        .pelicula-card {
            transition: transform 0.2s, box-shadow 0.2s;
            background-color: #1a1a1a !important;
            border-color: #00bb00 !important;
        }
        
        .pelicula-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 187, 0, 0.3) !important;
        }
        
        .pelicula-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
        
        .categoria-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 10;
            background-color: #00bb00 !important;
            color: #000 !important;
        }
        
        .card-title {
            color: #00bb00 !important;
        }
        
        .btn-outline-success {
            color: #00bb00 !important;
            border-color: #00bb00 !important;
        }
        
        .btn-outline-success:hover {
            background-color: #00bb00 !important;
            color: #000 !important;
        }
        
        input, select {
            background-color: #1a1a1a !important;
            color: #00bb00 !important;
            border-color: #00bb00 !important;
        }
        
        input::placeholder {
            color: #00bb00 !important;
            opacity: 0.6;
        }
        
        .text-success {
            color: #00bb00 !important;
        }
        
        .border-success {
            border-color: #00bb00 !important;
        }
        
        .bg-success {
            background-color: #00bb00 !important;
        }
    </style>
</head>
<body class="bg-dark text-white">
    <nav class="navbar navbar-dark bg-black border-bottom border-success">
        <div class="container-fluid">
            <a class="navbar-brand text-success" href="/">
                <i class="bi bi-joystick"></i> Catálogo de Videojuegos
            </a>
            <div>
                <a href="/admin/categorias" class="btn btn-outline-success btn-sm me-2">
                    <i class="bi bi-tags"></i> Géneros
                </a>
                <a href="/admin/peliculas" class="btn btn-outline-success btn-sm">
                    <i class="bi bi-gear"></i> Videojuegos
                </a>
            </div>
        </div>
    </nav>
    <div class="container my-5">
    <div class="row mb-4">
        <div class="col-md-6">
            <div class="card shadow bg-black border-success">
                <div class="card-body">
                    <div class="input-group">
                        <span class="input-group-text bg-success border-success"><i class="bi bi-search text-black"></i></span>
                        <input type="text" class="form-control form-control-lg bg-dark text-white border-success" id="busquedaPelicula" placeholder="Buscar videojuego por nombre...">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card shadow bg-black border-success">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            <h5 class="mb-0 text-success"><i class="bi bi-funnel"></i> Filtrar por género:</h5>
                        </div>
                        <div class="col-md-7">
                            <select class="form-select form-select-lg bg-dark text-white border-success" id="categoriaSelect">
                                <option value="" class="bg-dark">Todos los géneros</option>
                                @foreach($categorias as $categoria)
                                    <option value="{{ $categoria->id }}" class="bg-dark">{{ $categoria->nombre }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Contador de videojuegos -->
    <div class="row mb-4">
        <div class="col-md-12">
            <div class="alert alert-success mb-0 bg-black border-success text-success">
                <i class="bi bi-info-circle"></i> 
                <strong>Total de videojuegos:</strong> <span id="contadorPeliculas">0</span>
            </div>
        </div>
    </div>
    
    <div id="areaPeliculas">
        </div>

    <div class="text-center py-5 d-none" id="cargandoPeliculas">
        <div class="spinner-border text-success" role="status" style="width: 3rem; height: 3rem;">
            <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3 text-success">Cargando videojuegos...</p>
    </div>
</div> <footer class="bg-black border-top border-success text-success text-center py-3 mt-5">
    <p class="mb-0">&copy; 2026 Catálogo de Videojuegos - Plataforma AJAX con Fetch API</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
    // Cargar todas las películas al iniciar
    let peliculasOriginales = [];
    
    document.addEventListener('DOMContentLoaded', () => {
        cargarTodasPeliculas();
        
        // Agregar event listener al input de búsqueda
        document.getElementById('busquedaPelicula').addEventListener('input', (e) => {
            const termino = e.target.value.toLowerCase();
            if (termino === '') {
                cargarTodasPeliculas();
            } else {
                buscarPeliculasPorNombre(termino);
            }
        });
    });
    
    document.getElementById('categoriaSelect').addEventListener('change', () => {
        cargarPeliculasPorCategoria();
    });
    function mostrarCargando() {
        document.getElementById('cargandoPeliculas').classList.remove('d-none');
        document.getElementById('areaPeliculas').innerHTML = '';
    }

    function ocultarCargando() {
        document.getElementById('cargandoPeliculas').classList.add('d-none');
    }

    // Función para cargar todas las películas
    async function cargarTodasPeliculas() {
        try {
            mostrarCargando();
            const response = await fetch('/api/peliculas');

            if (!response.ok) {
                throw new Error('Error al cargar las películas');
            }

            const peliculas = await response.json();
            peliculasOriginales = peliculas;
            document.getElementById('busquedaPelicula').value = '';
            document.getElementById('categoriaSelect').value = '';
            mostrarPeliculas(peliculas, 'Todos los Videojuegos');
        } catch (error) {
            console.error('Error:', error);
            mostrarError('No se pudieron cargar las películas');
        } finally {
            ocultarCargando();
        }
    }
    
    // Función para buscar películas por nombre
    function buscarPeliculasPorNombre(termino) {
        const peliculasFiltradas = peliculasOriginales.filter(pelicula => 
            pelicula.nombre.toLowerCase().includes(termino)
        );
        
        mostrarPeliculas(peliculasFiltradas, `Videojuegos encontrados: "${termino}"`);
    }
    
    // Función para cargar películas por categoría
    async function cargarPeliculasPorCategoria() {
        const categoriaId = document.getElementById('categoriaSelect').value;

        if (!categoriaId) {
            cargarTodasPeliculas();
            return;
        }

        try {
            mostrarCargando();
            const response = await fetch(`/api/categorias/${categoriaId}/peliculas`);

            if (!response.ok) {
                throw new Error('Error al cargar las películas de la categoría');
            }

            const peliculas = await response.json();
            const categoriaTexto = document.getElementById('categoriaSelect').selectedOptions[0].text;
            mostrarPeliculas(peliculas, `Películas de ${categoriaTexto}`);
        } catch (error) {
            console.error('Error:', error);
            mostrarError('No se pudieron cargar las películas de la categoría');
        } finally {
            ocultarCargando();
        }
    }

    // Función para mostrar las películas en tarjetas
    function mostrarPeliculas(peliculas, titulo) {
        const areaPeliculas = document.getElementById('areaPeliculas');
        const contadorPeliculas = document.getElementById('contadorPeliculas');
        
        // Actualizar contador
        contadorPeliculas.textContent = peliculas.length;
        
        let html = `<h3 class="mb-3 text-success">${titulo} <span class="badge bg-success text-black">${peliculas.length}</span></h3><div class="row g-4">`;

        if (peliculas.length === 0) {
            html += `<div class="col-12"><div class="alert alert-success bg-black border-success text-success">No se encontraron videojuegos.</div></div>`;
        } else {
            peliculas.forEach(pelicula => {
                html += `
                    <div class="col-md-6 col-lg-3">
                        <div class="card pelicula-card shadow-sm h-100 bg-black border-success">
                            <div class="position-relative">
                                <img src="${pelicula.imagen || 'https://via.placeholder.com/400x600?text=Sin+Imagen'}" class="card-img-top pelicula-img" alt="${pelicula.nombre}" style="height: 300px; object-fit: cover;">
                                <span class="badge bg-success categoria-badge text-black">${pelicula.categoria.nombre}</span>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-success">${pelicula.nombre}</h5>
                                <p class="card-text small" style="color: #b3b3b3;">${pelicula.categoria.nombre}</p>
                                <a href="${pelicula.url_imdb || '#'}" target="_blank" class="btn btn-sm btn-outline-success w-100">
                                    <i class="bi bi-link-45deg"></i> Ver en Metacritic
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        html += `</div>`;
        areaPeliculas.innerHTML = html;
        ocultarCargando();
    }

    // Función para mostrar errores
    function mostrarError(mensaje) {
        const areaPeliculas = document.getElementById('areaPeliculas');
        areaPeliculas.innerHTML = `
            <div class="alert alert-success bg-black border-success text-success text-center" role="alert">
                <i class="bi bi-exclamation-triangle fs-1"></i>
                <h4 class="mt-3">Error</h4>
                <p>${mensaje}</p>
                <button class="btn btn-outline-success" onclick="cargarTodasPeliculas()">
                    <i class="bi bi-arrow-clockwise"></i> Reintentar
                </button>
            </div>
        `;
    }

</script>
