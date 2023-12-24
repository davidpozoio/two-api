import { CatFactData, CatWithImage } from "../models/catModel";
import { getAllDrinks } from "./drinksService";

//esta función retorna todos los hechos de gatos.
export function getAllCatsFact() {
  return fetch("https://catfact.ninja/facts?max_length=100&limit=4").then(
    (res) => res.json()
  ) as Promise<{ data: CatFactData[] }>;
}

// esta función combina los datos devueltos por la api de gatos y la de drinks
export function getCats() {
  return getAllCatsFact().then((cats) => {
    return getAllDrinks("margarita").then((res) => {
      //combinamos los datos de las dos apis
      const catsWithImages: CatWithImage[] = cats.data.map((cat, index) => {
        return {
          fact: cat.fact,
          strDrinkThumb: res.drinks[index].strDrinkThumb ?? "",
        };
      });
      //devolvemos el valor con los datos combinados
      return catsWithImages;
    });
  });
}
