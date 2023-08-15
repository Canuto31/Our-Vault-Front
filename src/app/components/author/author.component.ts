import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author/author.service';
import { Author } from 'src/app/models/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService) {};

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAuthors().subscribe(authors => this.authors = authors);
  }
}
