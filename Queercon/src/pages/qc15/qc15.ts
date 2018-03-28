import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Qc15Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qc15',
  templateUrl: 'qc15.html',
})
export class Qc15Page {

  private webWiew: any = window;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.webWiew.AppCenter.Analytics.trackEvent('QC15 Loaded');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Qc15Page');
  }

}
