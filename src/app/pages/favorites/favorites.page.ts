import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];
  isLoading = true;

  constructor(
    private pokeApiService: PokeApiService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  async loadFavorites() {
    this.isLoading = true;
    const favoriteNames = this.favoritesService.getFavorites();
    const requests = favoriteNames.map(name => this.pokeApiService.getPokemonDetails(name));

    Promise.all(requests.map(req => req.toPromise())).then((data: any[]) => {
      this.favorites = data;
      this.isLoading = false;
    });
  }

  removeFavorite(name: string) {
    this.favoritesService.removeFavorite(name);
    this.favorites = this.favorites.filter(p => p.name !== name);
  }
}