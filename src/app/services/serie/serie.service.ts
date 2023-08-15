import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/models/serie.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private baseUrl = 'http://localhost:8090/our-vault/api';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    const url = `${this.baseUrl}/serie`;
    return this.http.get<Serie[]>(url);
  }
}
