import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  isModalVisible: boolean = false;
  selectedBookIndex: number = -1;
  selectedBook: Book | undefined;

  constructor(
    private bookService: BookService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  openBookModal(book: Book) {
    this.selectedBook = book;
    this.modalService.open(book.image);
  }
}
