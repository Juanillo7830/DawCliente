<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelicula;
use App\Models\Categoria;

class PeliculasController extends Controller
{
    public function portada()
    {
        $categorias = Categoria::all();
        return view('peliculas.portada', compact('categorias'));
    }
    public function list(): \Illuminate\Http\JsonResponse
    {
        $peliculas = Pelicula::with('categoria')->get();
        return response()->json($peliculas);
    }
}