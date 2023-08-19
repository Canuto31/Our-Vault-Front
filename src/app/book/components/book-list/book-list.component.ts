import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/book/book.model';
import { BookService } from 'src/app/book/service/book/book.service';
import { Author } from 'src/app/models/author.model';
import { Category } from 'src/app/models/category.model';
import { State } from 'src/app/models/state.model';
import { AuthorService } from 'src/app/services/author/author.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  isModalVisible: boolean = false;
  selectedBookIndex: number = -1;
  selectedBook: Book | undefined;

  filteredBooks: Book[] = [];
  filteredBooksByCheckbox: Book[] = [];

  selectedCategories: { [category: string]: boolean } = {};
  selectedStates: { [status: string]: boolean } = {};
  selectedAuthors: { [author: string]: boolean } = {};

  categories: Category[] = [];
  states: State[] = [];
  authors: Author[] = [];

  filtersOpen = true;

  constructor(
    private bookService: BookService,
    private modalService: NgbModal,
    private categoryService: CategoryService,
    private stateService: StateService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.getBooks();
    this.getCategories();
    this.getStates();
    this.getAuthors();

    this.initializeCategoryFilters();
    this.initializeStateFilters();
    this.initializeAuthorsFilters();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
      this.filteredBooks = books;
      this.filteredBooksByCheckbox = books;
      if (this.books.length > 0 && this.books[0].category) {
        console.log(this.selectedCategories[this.books[0].category.name]);
      } else {
        console.log("No hay libros disponibles o la categoría no está definida.");
      }
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories.filter(category => category.types.some(type => type.name === "Book"));
    });
  }

  getStates(): void {
    this.stateService.getStates().subscribe((states) => {
      this.states = states.filter(state => state.types.some(type => type.name === "Book"));
    });
  }

  getAuthors(): void {
    this.authorService
      .getAuthors()
      .subscribe(authors => this.authors = authors);
  }

  openBookModal(book: Book) {
    this.selectedBook = book;
    this.modalService.open(book.image);
  }

  initializeCategoryFilters(): void {
    for (const category of this.categories) {
      this.selectedCategories[category.name] = false;
    }
    for (const category of this.categories) {
      console.log("hola", this.selectedCategories[category.name]);
    }
    this.applyFilters();
  }

  initializeStateFilters(): void {
    for (const state of this.states) {
      this.selectedStates[state.name] = false;
    }
    this.applyFilters();
  }

  initializeAuthorsFilters(): void {
    for (const author of this.authors) {
      this.selectedAuthors[author.name] = false;
    }
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredBooks = this.books.filter(book => {
      const categoryFilter = this.selectedCategories[book.category?.name] !== undefined ? this.selectedCategories[book.category.name] : true;
      const stateFilter = this.selectedStates[book.state?.name] !== undefined ? this.selectedStates[book.state.name] : true;
      const authorFilter = this.selectedAuthors[book.author?.name] !== undefined ? this.selectedAuthors[book.author.name] : true;
      console.log(`Book: ${book.name}, Category: ${categoryFilter}, State: ${stateFilter}, Author: ${authorFilter}`);
      return categoryFilter && stateFilter && authorFilter;
    });
  }

  applySearch(event: Event) {
    const searchText = (event.target as HTMLInputElement).value;
    this.filteredBooks = this.filteredBooksByCheckbox.filter((book) =>
      book.name.toLowerCase().includes(searchText.toLowerCase())
    );
    // this.applyFilters();
  }

  toggleCategory(categoryName: string) {
    this.selectedCategories[categoryName] =
      !this.selectedCategories[categoryName];
      console.log("ANTES", this.selectedCategories[categoryName]);
      console.log("AHORA", !this.selectedCategories[categoryName]);
    this.applyFilters();
  }

  toggleState(stateName: string) {
    this.selectedStates[stateName] = !this.selectedStates[stateName];
    this.applyFilters();
  }

  toggleAuthor(authorName: string) {
    this.selectedAuthors[authorName] = !this.selectedAuthors[authorName];
    this.applyFilters();
  }

  toggleFilters() {
    this.filtersOpen = !this.filtersOpen;
  }
}
