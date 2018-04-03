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
    this.item = params.data.item;
  }
}

    

@Component({
  templateUrl: 'events.html',
})
export class EventsPage {
  /* Remove in staging *///private webWiew: any = window;
  items = [];
  constructor(public nav: NavController, http: Http) {
    console.log('QC Events constructor loaded');
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('EventsPage Loaded');
    let localData = http.get('assets/js/events.json').map(res => res.json().events);
    localData.subscribe(data => {
      this.items = data;
      console.log('QC LocalData');
    })
  }

  openEventDetailsPage(item) {
    this.nav.push(EventsDetailsPage, { item: item });
  }

}