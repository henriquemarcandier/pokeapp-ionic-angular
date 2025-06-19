import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 20;
  isLoading: boolean = false;

  constructor(
    private pokeApiService: PokeApiService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.isLoading = true;
    this.pokeApiService.getPokemonList(this.offset, this.limit).subscribe({
      next: (res) => {
        const requests = res.results.map((pokemon: any) =>
          this.pokeApiService.getPokemonDetails(pokemon.name)
        );

        Promise.all(requests.map(req => req.toPromise())).then((data: any[]) => {
          this.pokemons.push(...data);
          this.offset += this.limit;
          this.isLoading = false;
        });
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  toggleFavorite(pokemonName: string) {
    if (this.favoritesService.isFavorite(pokemonName)) {
      this.favoritesService.removeFavorite(pokemonName);
    } else {
      this.favoritesService.addFavorite(pokemonName);
    }
  }

  isFavorite(pokemonName: string): boolean {
    return this.favoritesService.isFavorite(pokemonName);
  }
}