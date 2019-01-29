import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Event, Contact, Location } from '../../../shared/model';
import { DataPlaceholderService } from '../../../shared/services';
import { ColorsComponent, ContactPopoverComponent } from '../../../components/components.module';

@Component({
  selector: 'add-event',
  templateUrl: 'add-event.html',
  styleUrls: ['add-event.scss']
})
export class AddEvent {

  event: Event = { reminders: [{}], color: '#ff0000', start: new Date().toISOString(), end: new Date().toISOString(), title: '', };
  remindTimes = [10, 30, 60, 120, 160, 1440];
  locations: Location[] = [];

  constructor(
    public navCtrl: NavController,
    public popCtrl: PopoverController,
    private dataService: DataPlaceholderService
  ) { }

  getHumanize(time) {
    return moment.duration(time, 'minutes').humanize(true);
  }

  addReminder() {
    this.event.reminders.push({});
  }

  removeReminder(i) {
    this.event.reminders.splice(i, 1);
  }

  async openColors() {
    const colorModal: any = await this.popCtrl.create({
      component: 'colors',
      event: event
    });
    this.event.color = await colorModal.present();
    /*colorModal.onDidDismiss((data) => {
      if (data) { this.event.color = data }
    });*/
  }

  async addInvite() {
    const invitesModal: any = await this.popCtrl.create({
      component: 'contact-popover',
      event: event
    });

    this.event.invites = await invitesModal.present();
    /*invitesModal.onDidDismiss((data) => {
      if (data) { this.event.invites = data }
    });*/
  }

  searchLocations(ev) {
    const val = ev;
    if (val && val.trim() !== '') {
      this.locations = this.dataService.locations.filter((location) => {
        return (location.place.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (location.city.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (location.country.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  locationSelected(location) {
    this.locations = [];
    this.event.location = location.place + ', ' + location.city + ', ' + location.country;
  }

  save() {
    this.event.reminders = this.event.reminders.map(reminder => { return moment(this.event.start).subtract(reminder, 'minutes') });
    if (this.event.id) {
      const index = this.dataService.events.findIndex(event => event.id === this.event.id)
      this.dataService.events.splice(index, 1, this.event);
    } else {
      this.dataService.events.push(this.event);
    }
    this.navCtrl.pop();
  }

}
