import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  /* Remove in staging *///rivate webWiew: any = window;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   /* Remove in staging */// this.webWiew.AppCenter.Analytics.trackEvent('QC RSA 18 Loaded');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QcRsa2018Page');
  }

}
