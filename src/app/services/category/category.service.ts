import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8090/our-vault/api/others';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    const url = `${this.baseUrl}/category`;
    return this.http.get<Category[]>(url);
  }
}
