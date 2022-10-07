import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

import { Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  public isBrowser  = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,     private http: HttpClient) {
    if (isPlatformBrowser(platformId)) {
      this.isBrowser = true;
    }
  }

  /*
  Modo de comunicación con el servidor síncrono
  parametro token: string
  return string
   */
  getToken(token: string): string {
    if  (this.isBrowser == true){
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://0.0.0.0:5000/api/v1/verificar/'+token+'/', false);
      xhr.send();
      return  xhr.responseText ;
    } else {
      return 'false'
    }
  }


  /*
  Modo de comunicación con el servidor asíncrono
  parametro token: string
  return Observable<any>
   */
  getTokenClientModule(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
      return this.http.post<any>( 'http://0.0.0.0:5000/api/v1/verificar/' + token +'/', httpOptions)
        .pipe(
          map((response) => response),
          catchError((err) => {
            console.log('error caught in service')
            console.error(err);
            return throwError(err);
          })
        );
  }

}
