import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion} from '../classes/Fashion';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientFashionService {
  constructor(private _http: HttpClient) { }

  // getFashions(): Observable<any> {
  //   const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
  //   const requestOptions: Object = {
  //     headers: headers,
  //     responseType: "text"
  //   }
  //   return this._http.get<any>("/fashions", requestOptions).pipe(
  //     map(res => JSON.parse(res) as Array<Fashion>),
  //     retry(3),
  //     catchError(this.handleError))
  // }
  getFashions(): Observable<Fashion[]> {
    return this._http.get<Fashion[]>('http://localhost:4000/fashions').pipe(
        tap(data => console.log("✅ API Response:", data)),  // Log để kiểm tra dữ liệu
        retry(3),
        catchError(this.handleError)
    );
}

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

  getFashion(id: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/fashions/" + id, requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError))
  }
  // get fashion by style
  getFashionsByStyle(style: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/fashions/style/" + style, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>),
      retry(3),
      catchError(this.handleError))
  }
}