import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { EventsPage } from '../events/events';

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

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    
    if (!this.platform.is('mobileweb')) {
      console.log("queercon aaccaa loading not mobileweb");
      this.webWiew.AppCenter.Analytics.trackEvent('QC qc15.ts');		
    }  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Qc15Page');
  }

  presentBadgeViewToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Not a chance! Come to Queercon. :)',
      duration: 3000,
      position: position
    });
    toast.present(toast);
  }

  presentBadgeReserveToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Badge reservation is not open yet, watch Facebook for more',
      duration: 3000,
      position: position
    });
    toast.present(toast);
  }

  goToEventsPage(){ this.navCtrl.push(EventsPage); }

}
