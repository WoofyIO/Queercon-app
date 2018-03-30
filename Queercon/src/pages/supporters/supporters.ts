import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Qc15Page } from '../qc15/qc15';
import { ChatPage } from '../chat/chat';
import { LocalPage } from '../local/local';
import { QcRsa2018Page } from '../qc-rsa2018/qc-rsa2018';
import { VolunteerPage } from '../volunteer/volunteer';
import { EventsPage } from '../events/events';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-supporters',
  templateUrl: 'supporters.html'
})
export class SupportersPage {

  /* Remove in staging *///private webWiew: any = window;

  constructor(public navCtrl: NavController) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('Supporters Loaded');

  }

	goToNewsPage(){ this.navCtrl.setRoot(NewsPage); }
	goToLocalPage(){ this.navCtrl.setRoot(LocalPage); }
	goToAboutPage(){ this.navCtrl.setRoot(AboutPage); }
	goToVolunteerPage(){ this.navCtrl.setRoot(VolunteerPage); }
	goToContactPage(){ this.navCtrl.setRoot(ContactPage); }
	goToChatPage(){ this.navCtrl.setRoot(ChatPage); }
	goToEventsPage(){ this.navCtrl.setRoot(EventsPage); }
	goToQc15Page(){ this.navCtrl.setRoot(Qc15Page); }
	goToQcRsaPage(){ this.navCtrl.setRoot(QcRsa2018Page); }


}
