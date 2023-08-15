import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from 'src/app/models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private baseUrl = 'http://localhost:8090/our-vault/api/others';

  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    const url = `${this.baseUrl}/type`;
    return this.http.get<Type[]>(url);
  }
}
