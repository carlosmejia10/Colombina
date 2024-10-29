import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private apiUrl = '/api/historial';

  constructor(private http: HttpClient) {}

  getHistorial(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
