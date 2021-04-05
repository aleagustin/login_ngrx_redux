import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import  { map, catchError } from 'rxjs/operators'
import { Observable, throwError }  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  URL = 'https://'
  constructor(private http: HttpClient) { 


  }


  doLogin(user): Observable<Object> {
    return this.http.post(this.URL + '/users/sign_in.json', user).pipe(
      map((res) => res),
      catchError((err) => throwError(err))
    );
  }
 
  


}
