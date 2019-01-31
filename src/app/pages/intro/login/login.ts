import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup';
import { ForgotComponent } from '../forgot/forgot';
import { NavParams } from '@ionic/angular';
import { TabsPage } from '../../tabs/tabs';
import { DataPlaceholderService } from '../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };

  constructor(public router: Router) {}

  signup() {
    this.router.navigateByUrl('signup');
    // this.navCtrl.setRoot(SignupComponent);
  }

  forgot() {
    this.router.navigateByUrl('forgot');
    // this.navCtrl.setRoot(ForgotComponent);
  }

  login() {
    this.router.navigateByUrl('tabs');
    // this.navCtrl.setRoot(TabsPage);
  }

}
