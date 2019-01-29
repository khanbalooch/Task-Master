import { Component, OnInit } from '@angular/core';
import { DataPlaceholderService } from '../../shared/services';
import { Event } from '../../shared/model';
import { Router } from '@angular/router';

@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
  styleUrls: ['task.scss']
})
export class TaskPage implements OnInit {

  events: Event[] = [];

  constructor(
    public router: Router,
    public dataService: DataPlaceholderService
  ) { }

  ngOnInit() {
    this.events = this.dataService.events;
  }

  add() {
    this.router.navigateByUrl('addevent');
    // this.navCtrl.push(AddEvent);
  }

  open(event) {
    this.router.navigateByUrl('EventDetail', event);
    //this.navCtrl.push(EventDetail, event);
  }

  openSetting() {
    this.router.navigateByUrl('setting');
    // this.navCtrl.push(SettingPage);
  }

}
