import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-month-popover',
  templateUrl: './month-popover.component.html',
  styleUrls: ['./month-popover.component.scss']
})
export class MonthPopoverComponent implements OnInit {

  months: any[];

  constructor(public popOverController: PopoverController) {
    this.months = moment.months();
  }
  ngOnInit() {

  }
  close(month) {
    this.popOverController.dismiss(month);
  }

}
