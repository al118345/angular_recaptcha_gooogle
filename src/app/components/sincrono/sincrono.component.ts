import { Component, OnInit } from '@angular/core';
import {ReCaptchaV3Service} from "ng-recaptcha";
import {RecaptchaService} from "../../service/recaptcha.service";

@Component({
  selector: 'app-sincrono',
  templateUrl: './sincrono.component.html',
  styleUrls: ['./sincrono.component.css']
})
export class SincronoComponent implements OnInit {
  public robot: boolean;
  public presionado: boolean;

  constructor(   private recaptchaV3Service: ReCaptchaV3Service,   public captchaSerice: RecaptchaService

  ) {
    this.robot = true;
    this.presionado = false;
  }


  ngOnInit(): void {
  }

  getInfoRecaptcha() {
    this.robot = true;
    this.presionado = true;
    this.recaptchaV3Service.execute('')
      .subscribe((token) => {
        const auxiliar = this.captchaSerice.getToken(token)
        if (  auxiliar.includes('true') ) {
          this.robot = false;
        }
      });

  }
}
