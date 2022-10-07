import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SincronoComponent } from './components/sincrono/sincrono.component';
import { AsincronoComponent } from './components/asincrono/asincrono.component';

@NgModule({
  declarations: [
    AppComponent,
    SincronoComponent,
    AsincronoComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaV3Module,
    HttpClientModule


  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: 'tu_clave',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
