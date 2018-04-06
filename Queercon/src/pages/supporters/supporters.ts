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

	goToNewsPage(){ this.navCtrl.push(NewsPage); }
	goToLocalPage(){ this.navCtrl.push(LocalPage); }
	goToAboutPage(){ this.navCtrl.push(AboutPage); }
	goToVolunteerPage(){ this.navCtrl.push(VolunteerPage); }
	goToContactPage(){ this.navCtrl.push(ContactPage); }
	goToChatPage(){ this.navCtrl.push(ChatPage); }
	goToEventsPage(){ this.navCtrl.push(EventsPage); }
	goToQc15Page(){ this.navCtrl.push(Qc15Page); }
	goToQcRsaPage(){ this.navCtrl.push(QcRsa2018Page); }


}
