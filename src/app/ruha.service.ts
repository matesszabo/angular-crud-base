import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ruha {
  id?: number;   // Opcionalis ID, mivel új elem esetén nem kell
  nev: string;
  meret: string;
  szin: string;
  tipus: string;
}

@Injectable({
  providedIn: 'root'
})
export class RuhaService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` , 'Access-Control-Allow-Origin': '*'});
  }

  getAllRuha(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allRuha`, { headers: this.getHeaders() });
  }

  saveRuha(ruha: Ruha): Observable<Ruha> {
    return this.http.post<Ruha>(`${this.baseUrl}/saveruha`, ruha, { headers: this.getHeaders() });
  }

  updateRuha(ruha: Ruha): Observable<Ruha> {
    return this.http.put<Ruha>(`${this.baseUrl}/updateruha`, ruha, { headers: this.getHeaders() });
  }

  deleteRuha(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteruha?id=${id}`, { headers: this.getHeaders() });
  }
}
