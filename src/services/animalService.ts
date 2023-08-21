import { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

const BASEURL = import.meta.env.VITE_ANIMALS_URL;


export const getAnimals = async () => {
    return await get<IAnimal[]>(BASEURL);
}
