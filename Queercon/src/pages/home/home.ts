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

	goToNewsPage(){ this.navCtrl.push(NewsPage); }
	goToLocalPage(){ this.navCtrl.push(LocalPage); }
	goToAboutPage(){ this.navCtrl.push(AboutPage); }
	goToVolunteerPage(){ this.navCtrl.push(VolunteerPage); }
	goToContactPage(){ this.navCtrl.push(ContactPage); }
	goToSupportersPage(){ this.navCtrl.push(SupportersPage); }
	goToChatPage(){ this.navCtrl.push(ChatPage); }
	goToEventsPage(){ this.navCtrl.push(EventsPage); }
	goToQc15Page(){ this.navCtrl.push(Qc15Page); }
	goToQcRsaPage(){ this.navCtrl.push(QcRsa2018Page); }

}
