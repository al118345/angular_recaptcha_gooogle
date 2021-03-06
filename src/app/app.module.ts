import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaV3Module

  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: 'tu_clave',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
