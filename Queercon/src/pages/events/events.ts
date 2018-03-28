import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private webWiew: any = window;

  constructor(public navCtrl: NavController) {
    this.webWiew.AppCenter.Analytics.trackEvent('Events Loaded');

  }
  



}
