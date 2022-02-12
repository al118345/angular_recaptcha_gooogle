import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  public isBrowser  = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      this.isBrowser = true;
    }
  }

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

}
