import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:8090/our-vault/api';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movie`;
    return this.http.get<Movie[]>(url);;
  }
}
