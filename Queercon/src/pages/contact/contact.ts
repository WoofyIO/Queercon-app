import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  /* Remove in staging *///private webWiew: any = window;

  constructor(public navCtrl: NavController) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('Contacts Loaded');

  }

}
