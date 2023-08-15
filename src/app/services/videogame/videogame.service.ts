import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogame } from 'src/app/models/videogame.model';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {
  private baseUrl = 'http://localhost:8090/our-vault/api';

  constructor(private http: HttpClient) { }

  getVideogames(): Observable<Videogame[]> {
    const url = `${this.baseUrl}/videogame`;
    return this.http.get<Videogame[]>(url);
  }
}
