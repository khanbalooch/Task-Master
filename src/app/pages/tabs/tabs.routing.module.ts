import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs';
import { NotesPage } from '../notes/notes';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: '',
              loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
            }
          ]
        },
        {
          path: 'task',
          children: [
            {
              path: '',
              loadChildren: '../task/task.module#TaskPageModule'
            }
          ]
        },
        {
          path: 'notes',
          children: [
            {
              path: '',
              loadChildren: '../notes/notes.module#NotesPageModule'
            }
          ]
        },
        {
            path: 'calendar',
            children: [
              {
                path: '',
                loadChildren: '../calendar/calendar.module#CalendarPageModule'
              }
            ]
        },
        {
            path: 'profile',
            children: [
              {
                path: '',
                loadChildren: '../profile/profile.module#ProfilePageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/dashboard',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/dashboard',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
