import { Component, ViewChild } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { TaskPage } from '../task/task';
import { NotesPage } from '../notes/notes';
import { CalendarPage } from '../calendar/calendar';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tab',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  tab1Root = DashboardPage;
  tab2Root = TaskPage;
  tab3Root = NotesPage;
  tab4Root = CalendarPage;
  tab5Root = ProfilePage;

  constructor() {}
}
