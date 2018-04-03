import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; */


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
  constructor(public nav: NavController, /* public http: Http */) {
    console.log('QC Events constructor loaded');

/*     let localData = this.http.get('events.json').map(res => res.json().events);
    localData.subscribe(data => {
      this.items = data;
    }) */

    this.items = [
      {
        "title": "Queercon Mixer",
        "location": "Queercon Suite",
        "summary": "Join us for something awesome and this will be fun. Except not for the staff, just for attendees. For the rest of us this is nonstop miserable work.",
        "date": "04 AUG",
        "hours": "16:00 - 20:00",
        "icon1": "X",
        "description": "This is for the details page",
        "host": "QC"
      },
      {
        "title": "Queercon Mixer",
        "location": "Queercon Suite",
        "summary": "Join us for something awesome and this will be fun. Except not for the staff, just for attendees. For the rest of us this is nonstop miserable work.",
        "date": "04 AUG",
        "hours": "16:00 - 20:00",
        "icon1": "X",
        "description": "This is for the details page",
        "host": "QC"
      },
      {
        "title": "Queercon Mixer",
        "location": "Queercon Suite",
        "summary": "Join us for something awesome and this will be fun. Except not for the staff, just for attendees. For the rest of us this is nonstop miserable work.",
        "date": "04 AUG",
        "hours": "16:00 - 20:00",
        "icon1": "X",
        "description": "This is for the details page",
        "host": "QC"
      },
      {
        "title": "Queercon Mixer",
        "location": "Queercon Suite",
        "summary": "Join us for something awesome and this will be fun. Except not for the staff, just for attendees. For the rest of us this is nonstop miserable work.",
        "date": "04 AUG",
        "hours": "16:00 - 20:00",
        "icon1": "X",
        "description": "This is for the details page",
        "host": "QC"
      }
    ]

  


    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('EventsPage Loaded');
   
    /* let localData = http.get('assets/js/events.json').map(res => res.json().events);
    localData.subscribe(data => {
      this.items = data;
      console.log('QC LocalData');
    }) */

    
  }

  openEventDetailsPage(item) {
    this.nav.push(EventsDetailsPage, { item: item });
  }

}