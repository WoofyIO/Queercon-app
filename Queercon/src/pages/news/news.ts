import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.webWiew.AppCenter.Analytics.trackEvent('News Loaded');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
