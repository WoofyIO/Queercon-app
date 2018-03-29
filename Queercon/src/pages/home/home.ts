import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Qc15Page } from '../qc15/qc15';
import { ChatPage } from '../chat/chat';
import { LocalPage } from '../local/local';
import { QcRsa2018Page } from '../qc-rsa2018/qc-rsa2018';
import { VolunteerPage } from '../volunteer/volunteer';
import { EventsPage } from '../events/events';
import { ContactPage } from '../contact/contact';
import { SupportersPage } from '../supporters/supporters';
import { AboutPage } from '../about/about';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {



  constructor(public navCtrl: NavController) {


  }

	goToNewsPage(){ this.navCtrl.setRoot(NewsPage); }
	goToLocalPage(){ this.navCtrl.setRoot(LocalPage); }
	goToAboutPage(){ this.navCtrl.setRoot(AboutPage); }
	goToVolunteerPage(){ this.navCtrl.setRoot(VolunteerPage); }
	goToContactPage(){ this.navCtrl.setRoot(ContactPage); }
	goToSupportersPage(){ this.navCtrl.setRoot(SupportersPage); }
	goToChatPage(){ this.navCtrl.setRoot(ChatPage); }
	goToEventsPage(){ this.navCtrl.setRoot(EventsPage); }
	goToQc15Page(){ this.navCtrl.setRoot(Qc15Page); }
	goToQcRsaPage(){ this.navCtrl.setRoot(QcRsa2018Page); }

}
