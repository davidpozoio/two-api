import { DrinkData } from "../models/DrinkModel";

//obtenemos todas las bebidas en base a un tipo
export function getAllDrinks(drinkType: string) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkType}`
  ).then((res) => res.json()) as Promise<{ drinks: DrinkData[] }>;
}
