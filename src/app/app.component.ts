import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
// import { DataService, DataPlaceholderService } from '../shared/services';

/*import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TaskPage } from '../pages/task/task';
import { NotesPage } from '../pages/notes/notes';
import { CalendarPage } from '../pages/calendar/calendar';
import { ProfilePage } from '../pages/profile/profile';*/

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  rootPage: any;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private router: Router
    // private dataService: DataService,
    // private placeholderService: DataPlaceholderService
  ) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    // get all data and cache in placeholer service
    // then navigate to rootpage
    /*Observable.forkJoin(
      dataService.getRandomContact(),
      dataService.getContacts(),
      dataService.getEvents(),
      dataService.getLocations(),
      dataService.getNotes()
    ).subscribe(response => {
      placeholderService.mi = response[0];
      placeholderService.contacts = response[1];
      placeholderService.events = response[2];
      placeholderService.locations = response[3];
      placeholderService.notes = response[4];*/

      // this.rootPage = IntroPage;
      // this.router.navigateByUrl('');
    });
  }
}
