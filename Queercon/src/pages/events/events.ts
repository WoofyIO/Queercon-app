import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'events-details.html',
})

export class EventsDetailsPage {
  item;
  /* Remove in staging *///private webWiew: any = window;
  constructor(params: NavParams) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('EventsPage Detail Loaded');
    let localData = http.get('assets/events.json').map(res => res.json().items);
    this.item = params.data.item;
  }
}

    

@Component({
  templateUrl: 'events.html',
})
export class EventsPage {
  /* Remove in staging *///private webWiew: any = window;
  events: any[];
  constructor(public nav: NavController, http: Http) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('EventsPage Loaded');
    let localData = http.get('assets/events.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.events = data;
    }
  }

  openEventDetailsPage(item) {
    this.nav.push(EventsDetailsPage, { item: item });
  }

}