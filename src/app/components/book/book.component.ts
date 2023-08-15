import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {};

  ngOnInit(): void {
      
  }

  getBooks(): void {
    this.bookService.getBook().subscribe(books => this.books = books);
  }
}
