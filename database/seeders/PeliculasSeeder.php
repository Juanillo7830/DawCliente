<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categoria;
use App\Models\Pelicula;


class PeliculasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Limpiar datos existentes para evitar duplicados
        Pelicula::truncate();
        Categoria::truncate();
        
        // Crear géneros de videojuegos
        $accion = Categoria::create(['nombre' => 'Acción']);
        $rpg = Categoria::create(['nombre' => 'RPG']);
        $estrategia = Categoria::create(['nombre' => 'Estrategia']);
        $aventura = Categoria::create(['nombre' => 'Aventura']);
        $deportes = Categoria::create(['nombre' => 'Deportes']);
        $puzzle = Categoria::create(['nombre' => 'Puzzle']);

        // Crear videojuegos de ejemplo
        $videojuegos = [
            // --- ACCIÓN ---
            [
                'nombre' => 'Elden Ring',
                'categoria_id' => $accion->id,
                'imagen' => 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1767883716',
                'url_imdb' => 'https://www.metacritic.com/game/pc/elden-ring'
            ],
            [
                'nombre' => 'God of War Ragnarök',
                'categoria_id' => $accion->id,
                'imagen' => 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1750909504',
                'url_imdb' => 'https://www.metacritic.com/game/playstation-5/god-of-war-ragnarok'
            ],
            [
                'nombre' => 'Cyberpunk 2077',
                'categoria_id' => $accion->id,
                'imagen' => 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
                'url_imdb' => 'https://www.metacritic.com/game/pc/cyberpunk-2077'
            ],

            // --- RPG ---
            [
                'nombre' => 'Baldur\'s Gate 3',
                'categoria_id' => $rpg->id,
                'imagen' => 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png?w=440',
                'url_imdb' => 'https://www.metacritic.com/game/pc/baldurs-gate-3'
            ],
            [
                'nombre' => 'Final Fantasy XVI',
                'categoria_id' => $rpg->id,
                'imagen' => 'https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_XVI_cover_art.png',
                'url_imdb' => 'https://www.metacritic.com/game/playstation-5/final-fantasy-xvi'
            ],
            [
                'nombre' => 'Starfield',
                'categoria_id' => $rpg->id,
                'imagen' => 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1749757928',
                'url_imdb' => 'https://www.metacritic.com/game/pc/starfield'
            ],

            // --- ESTRATEGIA ---
            [
                'nombre' => 'Civilization VI',
                'categoria_id' => $estrategia->id,
                'imagen' => 'https://gaming-cdn.com/images/news/articles/6796/cover/1000x563/2k-games-anuncia-civilization-vii-con-un-primer-teaser-cover6663794436569.jpg',
                'url_imdb' => 'https://www.metacritic.com/game/pc/sid-meiers-civilization-vi'
            ],
            [
                'nombre' => 'StarCraft II',
                'categoria_id' => $estrategia->id,
                'imagen' => 'data:image/jpeg;base64,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',
                'url_imdb' => 'https://www.metacritic.com/game/pc/starcraft-ii-wings-of-liberty'
            ],
            [
                'nombre' => 'Total War: Three Kingdoms',
                'categoria_id' => $estrategia->id,
                'imagen' => 'https://upload.wikimedia.org/wikipedia/en/3/32/Total_War_Three_Kingdoms_cover_art.jpg',
                'url_imdb' => 'https://www.metacritic.com/game/pc/total-war-three-kingdoms'
            ],

            // --- AVENTURA ---
            [
                'nombre' => 'The Legend of Zelda: Tears of the Kingdom',
                'categoria_id' => $aventura->id,
                'imagen' => 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg/250px-The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg',
                'url_imdb' => 'https://www.metacritic.com/game/switch/the-legend-of-zelda-tears-of-the-kingdom'
            ],
            [
                'nombre' => 'Uncharted 4: A Thief\'s End',
                'categoria_id' => $aventura->id,
                'imagen' => 'https://m.media-amazon.com/images/M/MV5BNTFmN2M0MGMtMTI5Ny00NzRlLWFlZGYtZDM0N2VmOTUwYTdmXkEyXkFqcGc@._V1_.jpg',
                'url_imdb' => 'https://www.metacritic.com/game/playstation-4/uncharted-4-a-thiefs-end'
            ],
            [
                'nombre' => 'Tomb Raider',
                'categoria_id' => $aventura->id,
                'imagen' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AYau55Ao46-ozeQ7U2sqRyxDN1w8rJytdg&s',
                'url_imdb' => 'https://www.metacritic.com/game/pc/shadow-of-the-tomb-raider'
            ],

            // --- DEPORTES ---
            [
                'nombre' => 'EA Sports FC 26',
                'categoria_id' => $deportes->id,
                'imagen' => 'https://cdn2.unrealengine.com/egs-easportsfc26standardedition-eacanada-s1-2560x1440-7bbd20e219a6.jpg?resize=1&w=480&h=270&quality=medium',
                'url_imdb' => 'https://www.metacritic.com/game/pc/ea-sports-fc-24'
            ],
            [
                'nombre' => 'NBA 2K26',
                'categoria_id' => $deportes->id,
                'imagen' => 'https://upload.wikimedia.org/wikipedia/en/1/1d/NBA_2K26_Leave_No_Doubt_edition_cover.jpg',
                'url_imdb' => 'https://www.metacritic.com/game/pc/nba-2k24'
            ],
            [
                'nombre' => 'Forza Motorsport 7',
                'categoria_id' => $deportes->id,
                'imagen' => 'https://support.forzamotorsport.net/hc/article_attachments/4404442774163',
                'url_imdb' => 'https://www.metacritic.com/game/pc/forza-motorsport-7'
            ],

            // --- PUZZLE ---
            [
                'nombre' => 'Portal 2',
                'categoria_id' => $puzzle->id,
                'imagen' => 'https://media.vandal.net/m/8775/20101225101630_1.jpg',
                'url_imdb' => 'https://www.metacritic.com/game/pc/portal-2'
            ],
            [
                'nombre' => 'The Witness',
                'categoria_id' => $puzzle->id,
                'imagen' => 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/210970/header.jpg?t=1720810823',
                'url_imdb' => 'https://www.metacritic.com/game/pc/the-witness'
            ],
            [
                'nombre' => 'Tetris Effect',
                'categoria_id' => $puzzle->id,
                'imagen' => 'https://image.api.playstation.com/vulcan/ap/rnd/202301/2006/KjVYStE0uxgsVNvSqSCjwVKE.jpg',
                'url_imdb' => 'https://www.metacritic.com/game/playstation-4/tetris-effect'
            ],
        ];

        foreach ($videojuegos as $videojuego) {
            Pelicula::create($videojuego);
        }

        $this->command->info('✅ Seeder de videojuegos ejecutado correctamente: 6 géneros y 18 videojuegos creados.');
    }
}



    

