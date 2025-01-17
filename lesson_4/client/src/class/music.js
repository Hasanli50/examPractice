export class Music {
  constructor(
    name,
    description,
    image,
    price,
    isFavorite = false,
    isBasket = false
  ) {
    (this.name = name),
      (this.description = description),
      (this.image = image),
      (this.price = price),
      (this.isFavorite = isFavorite),
      (this.isBasket = isBasket);
  }
}
