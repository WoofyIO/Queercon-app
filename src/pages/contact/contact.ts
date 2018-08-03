import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private webWiew: any = window;

  constructor(public platform: Platform, public navCtrl: NavController) {

    if (!this.platform.is('core')) {
      console.log("queercon aaccaa loading not core");
      this.webWiew.AppCenter.Analytics.trackEvent('QC contact.ts');		
    }  


  }

}
