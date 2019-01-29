import { Component, OnInit } from '@angular/core';
import { DataPlaceholderService } from '../../shared/services';
import { IntroPage } from '../intro/intro';
import { SettingPage } from '../setting/setting';
import { AddEvent } from '../calendar/add-event/add-event';
import { EventDetail } from '../calendar/detail/event-detail';
import { AddNoteComponent } from '../notes/add-note/add-note';
import { Router } from '@angular/router';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  styleUrls: ['profile.scss']
})
export class ProfilePage implements OnInit {

  user: any;
  events: any[];
  notes: any[];
  tabs: { text: string; active?: boolean }[];
  tab: { text: string; active?: boolean };

  constructor(
    public router: Router,
    private dataService: DataPlaceholderService
  ) {
    this.user = dataService.mi;
    this.events = dataService.events.filter(event => new Date(event.start.toString()).getDate() === new Date().getDate());
    this.notes = dataService.notes.filter(event => new Date(event.created.toString()).getDate() === new Date().getDate());
  }

  ngOnInit() {
    this.setUpTabs();
    console.log('ionViewDidLoad ProfilePage');
  }

  setUpTabs() {
    this.tabs = [
      {
        text: 'Events',
        active: true
      },
      {
        text: 'Notes',
      }
    ];
    this.tab = this.tabs[0];
  }

  setSelectedTab(tab) {
    this.tabs.map(tab => {
      tab.active = false;
      return tab
    });
    tab.active = true;
    this.tab = tab;
  }

  addEvent() {
    this.router.navigateByUrl('addevent');
    // this.navCtrl.push(AddEvent);
  }

  addNote() {
    const note = {
      color: '#ccc',
      title: '',
      type: 'note',
      list: []
    }
    this.router.navigateByUrl('AddNoteCompoenet');
    // this.navCtrl.push(AddNoteComponent, note);
  }

  openEvent(event) {
    this.router.navigateByUrl('eventDtail', event);
    // this.navCtrl.push(EventDetail, event);
  }

  openNote(note) {

    this.router.navigateByUrl('AddNoteComponent', note);
    // this.navCtrl.push(AddNoteComponent, note);
  }

  getSummary(note){
    return ((note.list.filter(list=> list.checked).length)/note.list.length) * 100;
  }

  openSetting() {
    this.router.navigateByUrl('setting');
    // this.navCtrl.push(SettingPage);
  }

  openIntro() {
    this.router.navigateByUrl('intro');
    // this.navCtrl.push(IntroPage);
  }

}
