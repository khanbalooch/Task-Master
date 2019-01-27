import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

import { TaskPage } from './task';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TaskPage
  }
];
@NgModule({
  declarations: [
    TaskPage,
  ],
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
})
export class TaskPageModule {}
