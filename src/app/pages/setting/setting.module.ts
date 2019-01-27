import { NgModule } from '@angular/core';
import { SettingPage } from './setting';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SettingPage
  }
];
@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule
  ],
  entryComponents: [
    SettingPage,
  ]
})
export class SettingPageModule {}
