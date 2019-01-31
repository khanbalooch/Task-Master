import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DataPlaceholderService } from '../../../shared/services';
import { Note } from '../../../shared/model';
import { ColorsComponent } from '../../../components/components.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.html',
  styleUrls: ['add-note.scss']
})
export class AddNoteComponent {

  note = {
    id: '',
    title: '',
    type: '',
    note: '',
    color: '',
    created: ''

  };

  constructor(
    public router: ActivatedRoute,
    public popCtrl: PopoverController,
    public dataService: DataPlaceholderService) {

      this.note.id = this.router.snapshot.paramMap.get('id');
      this.note.title = this.router.snapshot.paramMap.get('title');
      this.note.type = this.router.snapshot.paramMap.get('type');
      this.note.note = this.router.snapshot.paramMap.get('note');
      this.note.color = this.router.snapshot.paramMap.get('color');
      this.note.created = this.router.snapshot.paramMap.get('created');

  }

  async openColor() {
    const colorModal = await this.popCtrl.create({
      component: 'colors',
      event: event
    });
    // this.note.color =  await colorModal.present();
    /*colorModal.onDidDismiss((data) => {
      if (data) { this.note.color = data }
    });*/
  }

  addListItem() {
    this.note.list.push({text: '', checked: false});
  }

  removeListItem(index) {
    this.note.list.splice(index, 1);
  }

  getSummary(note){
    return ((note.list.filter(list=> list.checked).length)/note.list.length) * 100;
  }

  save(){
    if(this.note.id){
      const index = this.dataService.notes.findIndex(event=> event.id ===this.note.id)
      this.dataService.notes.splice(index, 1, this.note);
    }else{
      this.dataService.notes.push(this.note);
    }

    // this.navCtrl.pop(); needs to change to ionic 4 version
  }

}
