import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private baseUrl = 'http://localhost:8090/our-vault/api/others';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    const url = `${this.baseUrl}/author`;
    return this.http.get<Author[]>(url);
  }
}
