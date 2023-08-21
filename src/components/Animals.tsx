import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal"
import { getAnimalsFromLocalStorage } from "../services/animalService";
import { Navigation } from "./Navigation"


export const Animals = () => {

  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const savedAnimals = getAnimalsFromLocalStorage();
    setAnimals(savedAnimals);
  }, [])

    return (
        <>
          <Navigation></Navigation>
          <h2>Alla djur</h2>
          <div>
            {animals.map(animal => (
              <div key={animal.id}>
                <h3>{animal.name}</h3>
                <p>{animal.shortDescription}</p>
                <img src={animal.imageUrl} alt={animal.name}/>
              </div>
            ))}
          </div>
        </>
    )
}