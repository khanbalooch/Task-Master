import { Component, OnInit } from '@angular/core';
import { Note } from '../../shared/model';
import { DataPlaceholderService } from '../../shared/services';
import { AddNoteComponent } from './add-note/add-note';
import { SettingPage } from '../setting/setting';
import { Router } from '@angular/router';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
  styleUrls: ['notes.scss']
})
export class NotesPage implements OnInit {

  notes = [
    {
      id: 1,
      title: 'Life Note',
      type: 'note',
      note: 'Appreciate Life’s Simple Pleasures',
      color: 'Yellow',
      created: 'Today'
    },
    {
      id: 1,
      title: 'Love Note',
      type: 'note',
      note: 'Foster and Nurture Relationships',
      color: 'Red',
      created: 'Today'
    },
    {
      id: 1,
      title: 'Adventure Note',
      type: 'note',
      note: 'Travel to Distant Places',
      color: 'Pink',
      created: 'Today'
    }
  ];

  constructor(
    public router: Router,
    public dataService: DataPlaceholderService ) { }

  ngOnInit() {
    // todo
    // Get list of notes from rest api
  }

  ionViewDidEnter() {
    // todo
    // update list of notes
  }

  openNote(note) {
    this.router.navigate(['/addnote', note]);
    // this.navCtrl.push(AddNoteComponent, note);
  }

  add(type) {
    const note: Note = {
      color: '#ccc',
      title: '',
      type: type,
      list: []
    };

    this.router.navigate(['/addnote', note]);
  }

  openSetting() {
    this.router.navigateByUrl('setting');
  }

}
