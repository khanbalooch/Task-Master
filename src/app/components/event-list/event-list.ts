import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.html',
  styleUrls: ['./event-list.scss'],
})
export class EventListComponent {

  @Input() events: any[] = [];
  @Input() grouped: boolean;
  @Output() openEvent = new EventEmitter<any>();
  groupedEvents: any[]= [];

  constructor() {}

  ngOnInit() {
    if(this.grouped){
      this.groupEvents(this.events);
    }
  }

  updateEvent(ev, event){
    event.completed = ev.value;
  }

  open(event){
    this.openEvent.emit(event);
  }

  groupEvents(events) {
    let sortedContacts = events.sort(function (a, b) {
      return (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0);
    });
    let currentDate = moment().subtract(1, 'day');
    let currentEvents = [];
    this.groupedEvents = [];
    sortedContacts.forEach(value => {
      let start = moment(value.start).startOf('day');
      let end = moment(value.start).endOf('day');
      if (!moment(currentDate).isBetween(start, end, null, '[]')) {
        currentDate = value.start;
        let newGroup = {
          date: currentDate,
          events: []
        };
        currentEvents = newGroup.events;
        this.groupedEvents.push(newGroup);
      }
      currentEvents.push(value);
    });
  }

}
