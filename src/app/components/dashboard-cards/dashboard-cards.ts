import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'dashboard-cards',
  templateUrl: 'dashboard-cards.html',
  styleUrls: ['./dashboard-cards.scss'],
})

export class DashboardCardsComponent {

  @Input() items: Array<{icon: string; text: string; component: any, color: string, number: string, subtext?: string; }>;


  constructor(public router: Router) { }

  goToPage(page) {
    this.router.navigateByUrl(page);
    // this.navCtrl.setRoot(page);
  }

}
