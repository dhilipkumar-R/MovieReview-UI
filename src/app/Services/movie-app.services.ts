import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }
private apiUrl = environment.BASE_API_URL;

 SaveMovie(formData: any): Observable<any> {

  return this.http
  .post(`${this.apiUrl}/SaveMovieName`,
     formData,
  )
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }

 SaveTitle(formData: any, rating: any, id: any, user: any): Observable<any> {

  return this.http
  .post(`${this.apiUrl}/SaveTitle?rating=${rating}&id=${id}&username=${user}`,
     formData,
  )
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }

 GetList(username: any): Observable<any> {

  return this.http
  .get(`${this.apiUrl}/GetMovieList?username=${username}`)
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }

 GetMyreviews(username: any): Observable<any> {

  return this.http
  .get(`${this.apiUrl}/GetMyreviews?username=${username}`)
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }
 GetTitle(id: any, username): Observable<any> {

  return this.http
  .get(`${this.apiUrl}/GetTitle?id=${id}&user=${username}`)
  .map((response: any) => response)
  .catch((error: any) => observableThrowError(error));
 }
}
