import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FashionAPIService {
  private apiUrl = 'http://localhost:4000/fashions';
  constructor(private http: HttpClient) { }
  getFashions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFashionById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
