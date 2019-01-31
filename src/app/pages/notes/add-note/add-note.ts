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
    public actRouter: ActivatedRoute,
    public router: Router,
    public popCtrl: PopoverController,
    public dataService: DataPlaceholderService) {

      this.note.id = this.actRouter.snapshot.paramMap.get('id');
      this.note.title = this.actRouter.snapshot.paramMap.get('title');
      this.note.type = this.actRouter.snapshot.paramMap.get('type');
      this.note.note = this.actRouter.snapshot.paramMap.get('note');
      this.note.color = this.actRouter.snapshot.paramMap.get('color');
      this.note.created = this.actRouter.snapshot.paramMap.get('created');

  }

  async openColor() {
    const colorModal = await this.popCtrl.create({
      component: ColorsComponent,
      event: event
    });
    colorModal.onDidDismiss().then(result => {
      this.note.color = result.data;
    });
    return await colorModal.present();

  }


  addListItem() {
    //this.note.list.push({text: '', checked: false});
  }

  removeListItem(index) {
    //this.note.list.splice(index, 1);
  }

  getSummary(note){
    return ((note.list.filter(list=> list.checked).length)/note.list.length) * 100;
  }

  save(){
    /*if(this.note.id) {
      const index = this.dataService.notes.findIndex(event=> event.id ===this.note.id)
      this.dataService.notes.splice(index, 1, this.note);
    }else{
      this.dataService.notes.push(this.note);
    }*/
      this.router.navigateByUrl('/tabs/notes');
    // this.navCtrl.pop(); needs to change to ionic 4 version*/
  }
  back() {
    this.router.navigateByUrl('/tabs/notes');
  }

}
