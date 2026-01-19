<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pelicula extends Model
{
  public function categoria()
  {
      return $this->belongsTo(Categoria::class);
  }
}
