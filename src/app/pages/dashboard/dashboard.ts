import { Component, OnInit, ViewChild } from '@angular/core';

import { TaskPage } from '../task/task';
import { NotesPage } from '../notes/notes';
import { CalendarPage } from '../calendar/calendar';
import { SettingPage } from '../setting/setting';

import { DataPlaceholderService } from '../../shared/services';
import * as moment from 'moment';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements OnInit {

  dashboardCards: Array<{ icon: string; text: string; component: any, color: string, number: number, subtext?: string; }>;
  @ViewChild('taskCanvas') taskCanvas;

  taskChart: any;
  completedEvents: number;

  constructor(
    public router: Router,
    private dataService: DataPlaceholderService) { }

  ngOnInit() {
    this.dashboardCards = [
      {
        component: CalendarPage,
        icon: 'calendar',
        text: 'Tasks',
        color: 'primary',
        number: this.dataService.events.length
      },
      {
        component: TaskPage,
        icon: 'note',
        text: 'Notes',
        color: 'secondary',
        number: this.dataService.notes.filter(note => {
          if (note.type === 'note') {return note;}
        }).length
      },
      {
        component: NotesPage,
        icon: 'list',
        text: 'Checklists',
        color: 'alternative',
        number: this.dataService.notes.filter(note => {
          if (note.type === 'list') {return note;}
        }).length
      }
    ];
    this.completedEvents =  this.dataService.events.filter(event => {
      if (event.completed) {
        return event;
      }
    }).length;

    const taskData = [
      this.dataService.events.filter(event => {
        let start = moment(event.start).startOf('month');
        let end = moment(event.start).endOf('month');
        if (moment().isBetween(start, end, null, '[]')) {
          return event;
        }
      }).length,
      this.dataService.events.filter(event => {
        let start = moment(event.start).startOf('week');
        let end = moment(event.start).endOf('week');
        if (moment().isBetween(start, end, null, '[]')) {
          return event;
        }
      }).length,
      this.dataService.events.filter(event => {
        let start = moment(event.start).startOf('day');
        let end = moment(event.start).endOf('day');
        if (moment().isBetween(start, end, null, '[]')) {
          return event;
        }
      }).length
    ];
    this.taskChart = new Chart(this.taskCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Month", "Week", "Today"],
        datasets: [{
          label: 'Task by Calendar',
          data: taskData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ]
        }]
      }

    });

  }

  openSetting() {
    this.router.navigateByUrl('SettingPage');
    // this.navCtrl.push(SettingPage);
  }

}
