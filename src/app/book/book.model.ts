import { Category } from '../models/category.model';
import { Author } from '../models/author.model';
import { State } from '../models/state.model';

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