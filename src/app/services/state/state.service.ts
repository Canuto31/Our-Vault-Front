import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from 'src/app/models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private baseUrl = 'http://localhost:8090/our-vault/api/others';

  constructor(private http: HttpClient) { }

  getStates(): Observable<State[]> {
    const url = `${this.baseUrl}/state`;
    return this.http.get<State[]>(url);
  }
}
