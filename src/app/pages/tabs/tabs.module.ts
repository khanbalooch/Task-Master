import { NgModule } from '@angular/core';
import { TabsPage } from './tabs';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.routing.module';


@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ]
})
export class TabsPageModule {}
