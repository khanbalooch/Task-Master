import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
import { ComponentsModule } from '../../components/components.module';
import { DirectiveModule } from '../../shared/directives/directive.module';

import { CalendarPage } from './calendar';
import { AddEvent } from './add-event/add-event';
import { EventDetail, EventDetailPopover } from './detail/event-detail';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  },
  {
    path: 'addevent',
    component: AddEvent
  },
  {
    path: 'eventdetails',
    component: EventDetail
  }
];

@NgModule({
  declarations: [
    CalendarPage,
    AddEvent,
    EventDetail,
    EventDetailPopover
  ],
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    DirectiveModule,
    MomentModule
  ],
  entryComponents: [
    AddEvent,
    EventDetail,
    EventDetailPopover
  ]
})
export class CalendarPageModule {}
