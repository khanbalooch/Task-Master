import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Event, Contact, Location } from '../../../shared/model';
import { DataPlaceholderService } from '../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
  styleUrls: ['event-detail.scss']
})
export class EventDetail implements OnInit {

  event: any;

  constructor(
    public router: Router,
    public popCtrl: PopoverController,
    public dataService: DataPlaceholderService
  ) {
  }

  ngOnInit() {
    // todo
    // this.event = this.navParams.data;
  }

  close() {
    // this.navCtrl.pop();
  }

  async presentMoreModal() {
    let more = await this.popCtrl.create({
      component: 'event-detail-popover',
      event: event
    });
    const data: any = await more.present();
      if (data) {
        const index = this.dataService.events.findIndex(event => event.id === data.id);
        if (data.deleted) {
          this.dataService.events.splice(index, 1);
        } else if (data.completed) {
          this.dataService.events.splice(index, 1, data);
        }
      }
  }


}

@Component({
  selector: 'event-detail-popover',
  template: `
    <ion-list>
    <ion-list-header>Manage Event</ion-list-header>
        <ion-item (click)="markAsComplete()">
        <ion-label color="dark">Mark as Completed</ion-label>
        <ion-toggle checked="false"></ion-toggle>
      </ion-item>
      <ion-item (click)="markAsDeleted()">
        Delete Event
        <ion-icon name="trash" item-end></ion-icon>
      </ion-item>
    </ion-list>
    <button ion-button full (click)="close()">Close</button>
  `,
  styles: ['ion-list { max-height: 230px; max-width:300px;overflow-y: auto; }']
})
export class EventDetailPopover {

  event: any;

  constructor(
    public modalController: ModalController
  ) {
    /** todo get data fro query */
    //this.event = navParams.data;
  }

  markAsComplete() {
    this.event.completed = true;
  }
  markAsDeleted() {
    this.event.deleted = true;
    this.close();
  }

  close() {
    this.modalController.dismiss(this.event);
  }
}
