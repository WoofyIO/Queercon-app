import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private webWiew: any = window;

  constructor(public navCtrl: NavController) {
    this.webWiew.AppCenter.Analytics.trackEvent('Contacts Loaded');

  }

}
