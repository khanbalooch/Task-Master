import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { slideDownAnimation } from '../../animations/slide-down.animation';
import { DataPlaceholderService } from '../../shared/services';
import { AddEvent } from './add-event/add-event';
import { EventDetail } from './detail/event-detail';
import { Event } from '../../shared/model';
import { SettingPage } from '../setting/setting';
import { Router } from '@angular/router';
import { MonthPopoverComponent } from 'src/app/components/month-popover/month-popover.component';


@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
  styleUrls: ['calendar.scss'],
  animations: [slideDownAnimation]
})
export class CalendarPage implements OnInit {

  selected: any;
  start: any;
  month: any;
  weeks: any[] = [];
  dayEvents: any[] = [];
  weekDayNames: string[];
  events: Event[] = [];

  constructor(
    public router: Router,
    public popCtrl: PopoverController,
    public dataService: DataPlaceholderService
  ) { }

  ngOnInit() {
    this.weekDayNames = moment.weekdays();
    if (!this.selected) {
      this.selected = this._removeTime(moment());
      this.month = this.selected.clone();
      this.start = this.selected.clone();
      this.start.date(1);
      this._removeTime(this.start.day(0));
    }
  }

  ionViewDidEnter() {
    this.events = this.dataService.events;
    this._buildMonth(this.start, this.month, this.events);
  }

  select(day) {
    this.selected = day.date;
    this.dayEvents = day.events;
  }

  jumpToMonth(data) {

    let month = moment(data);
    //let next = month.clone();
    let next  = moment(data);
    next.date(1);
    this._removeTime(next.day(0));
    this.month = month.month(month.month());
    this._buildMonth(next, this.month, this.events);
  }

  next() {
    let next = this.month.clone();
    next.date(1);
    this._removeTime(next.month(next.month() + 1)).day(0);
    this.month = this.month.month(this.month.month() + 1);
    this._buildMonth(next, this.month, this.events);
  }

  previous() {
    let previous = this.month.clone();
    this._removeTime(previous.month(previous.month() - 1).date(1));
    this.month.month(this.month.month() - 1);
    this._buildMonth(previous, this.month, this.events);
  }

  _removeTime(date) {
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  _buildMonth(start, month, calendar_events) {
    this.selected = null;
    this.weeks = [];
    var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
    while (!done) {
      this.weeks.push({ days: this._buildWeek(date.clone(), month, calendar_events) });
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
  }

  _buildWeek(date, month, calendar_events) {
    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push({
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(moment(new Date()).startOf('day'), 'day'),
        date: date
      });

      date = date.clone();
      date.add(1, "d");
    }
    days.forEach(element => {
      calendar_events.forEach(eventItem => {
        let _eventItem = Object.assign({}, eventItem);
        let start = moment(eventItem.start).startOf('day');
        let end = moment(eventItem.start).endOf('day');
        if (moment(element.date).isBetween(start, end, null, '[]')) {
          !element.events ? element.events = [] : null
          element.events.push(_eventItem);
        }
      });
    });
    return days;
  }

  add(){
    this.router.navigateByUrl('AddEvent'); // navCtrl.push(AddEvent);
  }

  open(event) {
    this.router.navigateByUrl('EventDetail', event); // this.navCtrl.push(EventDetail, event);
  }

  async presentMonthModal() {
    const monthModal: any = await this.popCtrl.create({
      component: MonthPopoverComponent,
      event: event
    });

    monthModal.onDidDismiss().then(month => {
      if (month) {
        //this.jumpToMonth(month.data);
      }
    });

    return await monthModal.present();

  }

  openSetting() {
    this.router.navigateByUrl('SettingPage'); // this.navCtrl.push(SettingPage);
  }

}

/*@Component({
  selector: 'month-popover',
  template: `
    <ion-list>
      <ion-list-header>Select a month</ion-list-header>
      <button ion-item (click)="close(month)" *ngFor="let month of months">{{month}}</button>

    </ion-list>
  `,
  styles: ['ion-list { max-height: 230px; overflow-y: auto; }']
})
export class MonthPopover {

  months: any[];

  constructor(public modalController: ModalController) {
    this.months = moment.months();
  }

  close(month) {
    this.modalController.dismiss(moment().month(month));
  }
}*/
