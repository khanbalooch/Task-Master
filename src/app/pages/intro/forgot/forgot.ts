import { Component } from '@angular/core';

/**
 * Generated class for the ForgotComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'forgot',
  templateUrl: 'forgot.html',
  styleUrls: ['forgot.scss']
})
export class ForgotComponent {

  text: string;

  constructor() {
    console.log('Hello ForgotComponent Component');
    this.text = 'Hello World';
  }

}
