import { Component } from '@angular/core';
import {ReCaptchaV3Service} from "ng-recaptcha";
import {RecaptchaService} from "./service/recaptcha.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaptchaEjemplo';
  public robot: boolean;
  constructor(   private recaptchaV3Service: ReCaptchaV3Service,   public captchaSerice: RecaptchaService

  ) {
    this.robot = true;
    this.recaptchaV3Service.execute('')
      .subscribe((token) => {
        const auxiliar = this.captchaSerice.getToken(token)
        if (  auxiliar.includes('true') ) {
          this.robot = false;
        }
      });
  }
}
