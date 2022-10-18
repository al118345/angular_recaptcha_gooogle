import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SincronoComponent } from './components/sincrono/sincrono.component';
import { AsincronoComponent } from './components/asincrono/asincrono.component';
import {MenuComponent} from "./components/menu/menu.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SincronoComponent,
    MenuComponent,
    AsincronoComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaV3Module,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    //llave de ejemplo 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
    useValue: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
