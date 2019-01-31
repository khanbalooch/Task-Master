import { NgModule } from '@angular/core';
import { ComponentsModule, ColorsComponent } from '../../components/components.module';
import { MomentModule } from 'ngx-moment';
import { NotesPage } from './notes';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { DirectiveModule } from '../../shared/directives/directive.module';
import { AddNoteComponent } from './add-note/add-note';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  },
  {
    path: 'addnote',
    component: AddNoteComponent
  }
];

@NgModule({
  declarations: [
    NotesPage,
    AddNoteComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule,
    FormsModule,
    MomentModule,
    ComponentsModule,
    PipeModule,
    DirectiveModule
  ],
  entryComponents: [
    AddNoteComponent,
    ColorsComponent

  ]
})
export class NotesPageModule {}
