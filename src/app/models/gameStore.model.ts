import { Videogame } from "./videogame.model";

export interface GameStore {
    id: number;
    name: string;
    videogames: Videogame[];
}