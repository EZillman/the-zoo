import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal"
import { getAnimalsFromLocalStorage } from "../services/animalService";
import { useNavigate } from "react-router-dom";


export const Animals = () => {

  const navigate = useNavigate();

  const handleAnimalClick = (id: string) => {
    navigate(`/animal/${id}`)
  }

  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const savedAnimals = getAnimalsFromLocalStorage();
    setAnimals(savedAnimals);
  }, [])

    return (
        <>

          <h1>Mitt Zoo</h1>
          <p>Välkommen till mitt Zoo! Djuren är hungriga och jag har tyvärr inte tid att mata dem, men du kanske kan? Börja med att klicka på ett djur!</p>
          <div>
            {animals.map(animal => (
              <div 
              onClick={() => handleAnimalClick("animal")}
              key={animal.id}>
                <h3>{animal.name}</h3>
                <p>{animal.shortDescription}</p>
                <img src={animal.imageUrl} alt={animal.name}/>
              </div>
            ))}
          </div>
        </>
    )
}