<?php

use App\Http\Controllers\PeliculasController;
use App\Models\Pelicula;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriaController;

//portada publica
Route::get('/', [PeliculasController::class, 'portada'])->name('portada');

Route::prefix('api')->group(function () {
    //Peliculas
    Route::get('/peliculas', [PeliculasController::class, 'list'])->name('api.peliculas.list');
    //categorias
    Route::get('/categorias/{id}/peliculas', [CategoriaController::class, 'peliculas'])->name('api.categorias.peliculas');
});
