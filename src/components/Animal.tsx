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
    return (
      <>      
        <Navigation></Navigation>
        <div>Kan inte hitta djur</div>
      </>

    )
  }

    return (
        <>
          <section>
            <h1 className="animal-name">{animal.name}</h1>
            <Navigation></Navigation>
            <article className="animal-presentation">
              <img src={animal.imageUrl} alt="Bild saknas"/>
              <p>{animal.yearOfBirth}</p>
              <p>Mediciner: {animal.medicine}</p>
              <p className="long-description">{animal.longDescription}</p>
            </article>

          </section>
          <FeedAnimal animal={animal}></FeedAnimal>
        </>
    )
}