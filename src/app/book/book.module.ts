import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent,
    BookCardComponent
  ]
})
export class BookModule { }
