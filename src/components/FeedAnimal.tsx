import { useState } from "react";
import { IAnimal } from "../models/IAnimal"

interface IFeedAnimalProps {
  animal: IAnimal;
}

export const FeedAnimal = ({animal}: IFeedAnimalProps) => {
  const [isFed, setIsFed] = useState(animal.isFed);

  const handleFeedClick = () => {
    setIsFed(true);
    console.log(isFed);
  }

    return (
        <>
          <button onClick={() => handleFeedClick()} disabled={isFed}>
            Mata djur
          </button>
        </>
    )
}