import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private key = 'favorites';

  getFavorites(): string[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  addFavorite(name: string) {
    const favorites = this.getFavorites();
    if (!favorites.includes(name)) {
      favorites.push(name);
      localStorage.setItem(this.key, JSON.stringify(favorites));
    }
  }

  removeFavorite(name: string) {
    const favorites = this.getFavorites().filter(fav => fav !== name);
    localStorage.setItem(this.key, JSON.stringify(favorites));
  }

  isFavorite(name: string): boolean {
    return this.getFavorites().includes(name);
  }
}