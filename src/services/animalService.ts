import { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

const BASEURL = import.meta.env.VITE_ANIMALS_URL;

export const ANIMALS_STORAGE_KEY = "animals";

export const getAnimalsFromLocalStorage = (): IAnimal[] => {
    const animalsData = localStorage.getItem(ANIMALS_STORAGE_KEY);
    if (animalsData) {
        return JSON.parse(animalsData) as IAnimal[];
    }
    return [];
}


export const getAnimals = async () => {
    const animals = await get<IAnimal[]>(BASEURL);
    localStorage.setItem("animals", JSON.stringify(animals));
    return animals;
}
