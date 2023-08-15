import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8090/our-vault/api';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    const url = `${this.baseUrl}/book`; 
    return this.http.get<Book[]>(url);
  }
}
