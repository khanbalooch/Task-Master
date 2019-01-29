import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DataPlaceholderService } from '../../../shared/services';
import { Note } from '../../../shared/model';
import { ColorsComponent } from '../../../components/components.module';
import { Router } from '@angular/router';

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.html',
  styleUrls: ['add-note.scss']
})
export class AddNoteComponent {

  note: any;

  constructor(
    public router: Router,
    public popCtrl: PopoverController,
    public dataService: DataPlaceholderService) {
    // todo
    // this.note = navParams.data;
  }

  async openColor() {
    const colorModal = await this.popCtrl.create({
      component: 'colors',
      event: event
    });
    this.note.color =  await colorModal.present();
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
