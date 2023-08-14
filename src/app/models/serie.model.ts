import { Category } from './category.model';
import { StreamPage } from './streamPage.model';
import { State } from './state.model';

export interface Serie {
    id: number;
    name: String;
    seasons: number;
    chapterForSeason: number;
    durationForChapter: number;
    category: Category;
    streamPage: StreamPage;
    image: String;
    trailer: String;
    currentlySeason: number;
    currentlyChapter: number;
    state: State;
    rate: number;
}