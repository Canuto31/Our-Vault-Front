import { Category } from './category.model';
import { StreamPage } from './streamPage.model';
import { State } from './state.model';

export interface Movie {
    id: number;
    name: string;
    duration: number;
    category: Category;
    streamPage: StreamPage;
    image: String;
    trailer: String;
    state: State;
    rate: number;
}