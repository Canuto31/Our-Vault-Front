import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StreamPage } from 'src/app/models/streamPage.model';

@Injectable({
  providedIn: 'root'
})
export class StreamPageService {
  private baseUrl = 'http://localhost:8090/our-vault/api/others';

  constructor(private http: HttpClient) { }

  getStreamPages(): Observable<StreamPage[]> {
    const url = `${this.baseUrl}/stream-page`;
    return this.http.get<StreamPage[]>(url);
  }
}
