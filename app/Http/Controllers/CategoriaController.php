<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
  public function peliculas($id)
    {
        $categoria = Categoria::findOrFail($id);
        $peliculas = $categoria->peliculas()->with('categoria')->get();
        return response()->json($peliculas);
    }
}
