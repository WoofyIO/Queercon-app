import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/*
 * Generated class for the QcRsa2018Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qc-rsa2018',
  templateUrl: 'qc-rsa2018.html',
})
export class QcRsa2018Page {

  private webWiew: any = window;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
   /* Remove in staging */// this.webWiew.AppCenter.Analytics.trackEvent('QC RSA 18 Loaded');

   if (!this.platform.is('core')) {
    console.log("queercon aaccaa loading not core");
    this.webWiew.AppCenter.Analytics.trackEvent('QC qc-rsa2018.ts');		
  }  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QcRsa2018Page');
  }

}
