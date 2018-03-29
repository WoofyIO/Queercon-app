import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  /* Remove in staging *///private webWiew: any = window;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('About Loaded');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
