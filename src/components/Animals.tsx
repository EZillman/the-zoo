import { IAnimal } from "../models/IAnimal"
import { Navigation } from "./Navigation"


interface IAnimalsProps {
  animals: IAnimal[];
}

export const Animals = () => {

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