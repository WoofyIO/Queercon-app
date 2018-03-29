import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-supporters',
  templateUrl: 'supporters.html'
})
export class SupportersPage {

  /* Remove in staging *///private webWiew: any = window;

  constructor(public navCtrl: NavController) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('Supporters Loaded');

  }

}
