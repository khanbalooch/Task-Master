import { Component } from '@angular/core';
import { NavParams, NavController, PopoverController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Event, Contact, Location } from '../../shared/model';
import { DataPlaceholderService } from '../../shared/services';

@Component({
  selector: 'contact-popover',
  templateUrl: 'contact-popover.html',
  styleUrls: ['./contact-popover.scss'],
})
export class ContactPopoverComponent {

  contacts: any[] = [];
  selected_contacts: Contact[] = [];

  constructor(
    public modalController: ModalController,
    private dataService: DataPlaceholderService,
    private navParams: NavParams
  ) {
    this.contacts = dataService.contacts;
    if (this.navParams.data.length > 0) {
      this.navParams.data.map(contact => { contact.check = true; return contact })
      this.contacts = _.unionBy(this.contacts, this.navParams.data)
    }
  }

  close() {
    this.selected_contacts = <any>this.contacts.filter(contact => contact.check)
    this.modalController.dismiss(this.selected_contacts);
  }
}
