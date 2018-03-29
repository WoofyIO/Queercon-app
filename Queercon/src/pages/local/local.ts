import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  /* Remove in staging *///private webWiew: any = window;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('Locals Loaded');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalPage');
  }

}
