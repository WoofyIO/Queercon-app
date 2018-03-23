import { Component } from '@angular/core';

import { EventsPage } from '../events/events';
import { SupportersPage } from '../supporters/supporters';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventsPage;
  tab3Root = SupportersPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
