import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { Qc15Page } from '../pages/qc15/qc15';
import { ChatPage } from '../pages/chat/chat';
import { LocalPage } from '../pages/local/local';
import { QcRsa2018Page } from '../pages/qc-rsa2018/qc-rsa2018';
import { VolunteerPage } from '../pages/volunteer/volunteer';
import { EventsPage as EventsPage, EventsDetailsPage} from '../pages/events/events';
import { SupportersPage } from '../pages/supporters/supporters';
import { AboutPage } from '../pages/about/about';
import { NewsPage } from '../pages/news/news';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Calendar } from '@ionic-native/calendar';

import {OneSignal} from '@ionic-native/onesignal';



@NgModule({
  declarations: [
    EventsPage,
    EventsDetailsPage,
    MyApp,
    NewsPage,
    SupportersPage,
    Qc15Page,
    ChatPage,
    LocalPage,
    QcRsa2018Page,
    VolunteerPage,
    AboutPage,
    HomePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
       statusbarPadding: false,
     },
     {
       links: [
      { component: EventsPage, name: 'EventsPage', segment: 'navigation-basic' },
      { component: EventsDetailsPage, name: 'NavigationDetailsPage', segment: 'navigation-details' },
    ]
  })
],
  bootstrap: [IonicApp],
  entryComponents: [
    EventsPage,
    EventsDetailsPage,
    MyApp,
    NewsPage,
    SupportersPage,
    Qc15Page,
    ChatPage,
    LocalPage,
    QcRsa2018Page,
    VolunteerPage,
    AboutPage,
    HomePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar,
    OneSignal
  ]
})
export class AppModule {}
