import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as moment from 'moment';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getEvents(): Observable<any> {
    return this.http.get('assets/data/events.json')
    .map((res) => res.json().map((event, index) => {
      event.id = index + 1;
      event.start = this.randomDate();
      event.end = moment(event.start).add(1, 'day');
      return event;
    }))
    .catch(error => Observable.throw(error.json().error || 'Server error'))
  }

  getContacts(): Observable<any>{
    return this.http.get('assets/data/contacts.json')
    .map((res) => res.json().map((contact, index) => {
      contact.id = index + 1;
      return contact;
    }))
    .catch(error => Observable.throw(error.json().error || 'Server error'))
  }

  getLocations(): Observable<any>{
    return this.http.get('assets/data/locations.json')
    .map((res) => res.json().map((location, index) => {
      location.id = index + 1;
      return location;
    }))
    .catch(error => Observable.throw(error.json().error || 'Server error'))
  }

  getNotes(): Observable<any>{
    return this.http.get('assets/data/notes.json')
    .map((res) => res.json().map((note, index) => {
      note.id = index + 1;
      note.created = this.randomOlderDate().toISOString();
      return note;
    }))
    .catch(error => Observable.throw(error.json().error || 'Server error'))
  }

  getRandomContact(): Observable<any>{
    return this.http.get('assets/data/contacts.json')
    .map((res) => res.json()[this.randomNumber(0, 40)])
    .catch(error => Observable.throw(error.json().error || 'Server error'))
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomDate() {
    const start = new Date(moment().startOf('month').toISOString());
    const end = new Date(moment().endOf('month').toISOString());
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

randomOlderDate() {
  const start = new Date(moment().subtract(1, 'month').startOf('month').toISOString());
  const end = new Date(moment().subtract(1, 'month').endOf('month').toISOString());
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

}
