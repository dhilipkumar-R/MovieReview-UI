import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

 SaveMovie(formData: any): Observable<any> {

  return this.http
  .post('https://localhost:5001/api/Values/SaveMovieName',
     formData,
  )
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }

 SaveTitle(formData: any, rating: any, id: any, user: any): Observable<any> {

  return this.http
  .post(`https://localhost:5001/api/Values/SaveTitle?rating=${rating}&id=${id}&username=${user}`,
     formData,
  )
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }

 GetList(username: any): Observable<any> {

  return this.http
  .get(`https://localhost:5001/api/Values/GetMovieList?username=${username}`)
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }

 GetMyreviews(username: any): Observable<any> {

  return this.http
  .get(`https://localhost:5001/api/Values/GetMyreviews?username=${username}`)
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }
 GetTitle(id: any, username): Observable<any> {

  return this.http
  .get(`https://localhost:5001/api/Values/GetTitle?id=${id}&user=${username}`)
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }
}
