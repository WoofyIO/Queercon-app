import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  private webWiew: any = window;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
 

    if (!this.platform.is('core')) {
      console.log("queercon aaccaa loading not core");
      this.webWiew.AppCenter.Analytics.trackEvent('QC chat.ts');		
    }  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
