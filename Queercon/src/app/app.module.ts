import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { Qc15Page } from '../pages/qc15/qc15';
import { ChatPage } from '../pages/chat/chat';
import { LocalPage } from '../pages/local/local';
import { QcRsa2018Page } from '../pages/qc-rsa2018/qc-rsa2018';
import { VolunteerPage } from '../pages/volunteer/volunteer';
import { EventsPage } from '../pages/events/events';
import { ContactPage } from '../pages/contact/contact';
import { SupportersPage } from '../pages/supporters/supporters';
import { AboutPage } from '../pages/about/about';
import { NewsPage } from '../pages/news/news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Calendar } from '@ionic-native/calendar';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    SupportersPage,
    Qc15Page,
    ChatPage,
    LocalPage,
    QcRsa2018Page,
    VolunteerPage,
    EventsPage,
    AboutPage,
    ContactPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    SupportersPage,
    Qc15Page,
    ChatPage,
    LocalPage,
    QcRsa2018Page,
    VolunteerPage,
    EventsPage,
    AboutPage,
    ContactPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	Calendar
  ]
})
export class AppModule {}
