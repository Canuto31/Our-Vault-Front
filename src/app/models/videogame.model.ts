import { Category } from './category.model';
import { GameStore } from './gameStore.model';
import { State } from './state.model';

export interface Videogame {
    id: number;
    name: string;
    category: Category;
    gameStore: GameStore;
    price: number;
    image: string;
    trailer: string;
    state: State;
    rate: number;
}