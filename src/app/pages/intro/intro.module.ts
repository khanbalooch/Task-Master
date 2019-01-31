import { NgModule } from '@angular/core';
import { IntroPage } from './intro';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { ForgotComponent } from './forgot/forgot';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: '',
    component: IntroPage
  }
];
@NgModule({
  declarations: [
    IntroPage,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule,
    CommonModule
  ],
  entryComponents: [
    IntroPage,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
  ]
})
export class IntroPageModule {}
