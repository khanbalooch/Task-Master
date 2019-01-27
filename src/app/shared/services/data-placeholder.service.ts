import { Injectable } from '@angular/core';
import { Contact, Event, Location, Note } from '../model';

@Injectable()
export class DataPlaceholderService {

  events: Event[] = [];
  contacts: Contact[] = [];
  locations: Location[] = [];
  notes: Note[] = [];
  mi: Contact;

}
