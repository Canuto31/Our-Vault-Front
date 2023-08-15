import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameStore } from 'src/app/models/gameStore.model';

@Injectable({
  providedIn: 'root'
})
export class GameStoreService {
  private baseUrl = 'http://localhost:8090/our-vault/api/others';

  constructor(private http: HttpClient) { }

  getGameStores(): Observable<GameStore[]> {
    const url = `${this.baseUrl}/game-store`;
    return this.http.get<GameStore[]>(url);
  }
}
