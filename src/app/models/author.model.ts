import { Book } from '../book/book.model';

export interface Author {
    id: number;
    name: string;
    books: Book[];
}