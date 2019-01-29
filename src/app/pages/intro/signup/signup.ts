import { Component } from '@angular/core';
import { LoginComponent } from '../login/login';
import { ForgotComponent } from '../forgot/forgot';
import { TabsPage } from '../../tabs/tabs';
import { DataPlaceholderService } from '../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: 'signup.html',
  styleUrls: ['signup.scss']
})
export class SignupComponent {

  user = {
    fullname: '',
    email: '',
    password: '',
    forgotPassword: ''
  };

  constructor(public router: Router) {}

  login() {
    this.router.navigateByUrl('login');
    // this.navCtrl.setRoot(LoginComponent);
  }

  signup() {
    this.router.navigateByUrl('signup');
    // this.navCtrl.setRoot(TabsPage);
  }

}
