import { Category } from './category.model';
import { Author } from './author.model';
import { State } from './state.model';

export interface Book {
    id: number;
    name: string;
    category: Category;
    price: number;
    image: string;
    pagesAmount: number;
    author: Author;
    state: State;
    rate: number;
}