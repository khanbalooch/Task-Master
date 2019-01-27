import { NgModule } from '@angular/core';
import { TabsPage } from './tabs';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];
@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule
  ],
  entryComponents: [
    TabsPage,
  ]
})
export class TabsPageModule {}
