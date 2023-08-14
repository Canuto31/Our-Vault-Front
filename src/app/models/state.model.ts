import { Type } from './type.model';
import { Book } from './book.model';
import { Videogame } from './videogame.model';
import { Movie } from './movie.model';
import { Serie } from './serie.model';

export interface State {
    id: number;
    name: string;
    types: Type[];
    books: Book[];
    videogames: Videogame[];
    movies: Movie[];
    series: Serie[];
}