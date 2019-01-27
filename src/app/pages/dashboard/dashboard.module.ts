import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { DashboardPage } from './dashboard';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule,
    ComponentsModule
  ],
})
export class DashboardPageModule {}
