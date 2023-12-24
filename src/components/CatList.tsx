import { useEffect, useState } from "react";
import { CatWithImage } from "../models/CatModel";
import { getCats } from "../services/catService";

import "./catList.css";

export function CatList() {
  //se define el estado inicial del array de gatos
  const [cats, setCats] = useState<CatWithImage[]>([]);

  //usamos useEffect para evitar crear un loop infinito y los "[]" para que se ejecute solo una vez cuando el componente es creado.
  useEffect(() => {
    //se obtienen los gatos
    getCats().then((res) => {
      //una vez obtenido el resultado se establece el nuevo valor de cats
      //lo que causará un rerender del componente para actualizar el valor de cats.
      setCats(res);
    });
  }, []);

  return (
    <div className="list">
      {/*se recorre el array de cats y en cada iteracion
      se agrega el hecho y la imagen que corresponde*/}
      {cats.map((cat, index) => {
        return (
          <div key={index} className="cat-card">
            <h1>{cat.fact}</h1>
            <img src={cat.strDrinkThumb} alt="" />
          </div>
        );
      })}
    </div>
  );
}
