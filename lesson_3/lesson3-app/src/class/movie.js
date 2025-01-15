import { nanoid } from "nanoid";
export class Movie {
  constructor(title, genre, release_year, director, rating = 0) {
    (this.id = nanoid()),
      (this.title = title),
      (this.genre = genre),
      (this.release_year = release_year),
      (this.director = director),
      (this.isFavorite = false),
      (this.isBasket = false),
      (this.rating = rating);
  }
}
