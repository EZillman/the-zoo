import { useParams } from "react-router-dom"
import { FeedAnimal } from "./FeedAnimal"
import { Navigation } from "./Navigation"
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimalsFromLocalStorage } from "../services/animalService";

export const Animal = () => {

  const { id } = useParams();

  const [animal, setAnimal] = useState<IAnimal | null>(null);

  useEffect(() => {
    const savedAnimals = getAnimalsFromLocalStorage();
    const selectedAnimal = savedAnimals.find(animal => animal.id.toString() === id);
    if (selectedAnimal) {
      setAnimal(selectedAnimal);
    }
  }, [id])

  if (!animal) {
    return <div>Kan inte hitta djur</div>
  }

    return (
        <>
          <Navigation></Navigation>
          <div>
            <h2>{animal.name}</h2>
          </div>
          <FeedAnimal></FeedAnimal>
        </>
    )
}