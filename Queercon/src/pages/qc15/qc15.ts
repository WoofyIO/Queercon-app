import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  /* Remove in staging *///private webWiew: any = window;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('QC15 Loaded');

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
