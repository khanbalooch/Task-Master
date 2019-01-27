import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

import { ProfilePage } from './profile';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,
    IonicModule,
    CommonModule
  ],
})
export class ProfilePageModule {}
