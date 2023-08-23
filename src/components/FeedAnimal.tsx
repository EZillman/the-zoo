import { useState } from "react";
import { IAnimal } from "../models/IAnimal"

interface IFeedAnimalProps {
  animal: IAnimal;
}

export const FeedAnimal = ({animal}: IFeedAnimalProps) => {
  const [isFed, setIsFed] = useState(animal.isFed);

  const handleFeedClick = () => {
    setIsFed(true);

    const currentTime = new Date().toString();
    animal.lastFed = currentTime;
    console.log(animal.name, "var senast matad: ", currentTime)

    const savedAnimals = JSON.parse(localStorage.getItem("animals") || "[]");
    const updatedAnimals = savedAnimals.map((savedAnimal: IAnimal) => {
      if (savedAnimal.id === animal.id) {
        return animal;
      }
      return savedAnimal;
    })
    localStorage.setItem("animals", JSON.stringify(updatedAnimals));
  }

    return (
        <>
          <button onClick={() => handleFeedClick()} disabled={isFed}>
            Mata djur
          </button>
        </>
    )
}