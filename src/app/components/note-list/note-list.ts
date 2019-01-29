import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'note-list',
  templateUrl: 'note-list.html',
  styleUrls: ['note-list.scss']
})
export class NoteListComponent {

  @Input() notes: any[];
  @Output() openNote = new EventEmitter<any>();

  constructor() {}

  open(note){
    this.openNote.emit(note);
  }

  getSummary(note){
    return ((note.list.filter(list=> list.checked).length)/note.list.length) * 100;
  }

}
