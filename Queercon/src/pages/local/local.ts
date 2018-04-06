import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the LocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local',
  templateUrl: 'local.html',
})
export class LocalPage {

  private webWiew: any = window;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    

    if (!this.platform.is('mobileweb')) {
      console.log("queercon aaccaa loading not mobileweb");
      this.webWiew.AppCenter.Analytics.trackEvent('QC local.ts');		
    }  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalPage');
  }

}
