import { Component } from '@angular/core';

import { CalendarPage } from '../calendar/calendar';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalendarPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
