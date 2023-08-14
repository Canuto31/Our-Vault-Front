import { Movie } from './movie.model';
import { Serie } from './serie.model';

export interface StreamPage {
    id: number;
    name: string;
    movies: Movie[];
    series: Serie[];
}