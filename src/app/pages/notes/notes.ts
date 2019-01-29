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

  notes: Note[] = [];

  constructor(
    public router: Router,
    public dataService: DataPlaceholderService ) { }

  ngOnInit() {
    this.notes = this.dataService.notes;
  }

  ionViewDidEnter() {
    this.notes = this.dataService.notes;
  }

  openNote(note) {
    this.router.navigateByUrl('addcomponent', note);
    // this.navCtrl.push(AddNoteComponent, note);
  }

  add(type) {
    const note: Note = {
      color: '#ccc',
      title: '',
      type: type,
      list: []
    };

    this.router.navigateByUrl('addnotecomponent');
    // this.navCtrl.push(AddNoteComponent, note);
  }

  openSetting(){
    this.router.navigateByUrl('setting');
    //this.navCtrl.push(SettingPage);
  }

}
