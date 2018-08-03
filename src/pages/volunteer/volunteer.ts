import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the VolunteerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volunteer',
  templateUrl: 'volunteer.html',
})
export class VolunteerPage {

  private webWiew: any = window;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    
    if (!this.platform.is('core')) {
      console.log("queercon aaccaa loading not core");
      this.webWiew.AppCenter.Analytics.trackEvent('QC volunteer.ts');		
    }  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteerPage');
  }

}
