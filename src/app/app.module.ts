import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsPage } from './pages/tabs/tabs';
import { IntroPageModule } from './pages/intro/intro.module';
import { DashboardPageModule } from './pages/dashboard/dashboard.module';
import { TaskPageModule } from './pages/task/task.module';
import { NotesPageModule } from './pages/notes/notes.module';
import { CalendarPageModule } from './pages/calendar/calendar.module';
import { ProfilePageModule } from './pages/profile/profile.module';
import { SettingPageModule } from './pages/setting/setting.module';
import { ComponentsModule } from './components/components.module';
import { DataService, DataPlaceholderService } from './shared/services';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { TabsPageModule } from './pages/tabs/tabs.module';

export const APP_CONFIG = {
  iconMode: 'ios',
  mode: 'ios',
  tabsHideOnSubPages: true,
  tabsPlacement: 'bottom',
  dayShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  backButtonText: '',
  backButtonIcon: 'arrow-round-back-outline'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    ComponentsModule,
    TabsPageModule,
    IntroPageModule,
    DashboardPageModule,
    TaskPageModule,
    NotesPageModule,
    CalendarPageModule,
    ProfilePageModule,
    SettingPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    DataPlaceholderService,
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
