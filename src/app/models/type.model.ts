import { State } from "./state.model";
import { Category } from "./category.model";

export interface Type {
    id: number;
    name: string;
    states: State[];
    categories: Category[];
}