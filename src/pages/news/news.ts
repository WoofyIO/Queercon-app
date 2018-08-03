import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  private webWiew: any = window;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    

    if (!this.platform.is('core')) {
      console.log("queercon aaccaa loading not core");
      console.log(this.platform);
      this.webWiew.AppCenter.Analytics.trackEvent('QC news.ts');		
    }  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
