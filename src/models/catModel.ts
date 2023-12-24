import { DrinkData } from "./DrinkModel";

//interfaz que define el CatFact devuelto por la api "https://catfact.ninja/facts?max_length=100&limit=4"
export interface CatFactData {
  fact: string;
}

//esta interfaz une la interfaz CatFactDat y DrinkData, para definir la combinación
//de los datos devueltos por las dos apis.
export interface CatWithImage extends CatFactData, DrinkData {}
