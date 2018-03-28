import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.webWiew.AppCenter.Analytics.trackEvent('Chat Loaded');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
