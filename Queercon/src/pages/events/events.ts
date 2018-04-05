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

  openEventReservation() {
    window.open(this.item.reservation, '_system', 'location=yes');
  }

  openEventMap() {
    window.open(this.item.map, '_system', 'location=yes');
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
        "title": "Poco Social Hour",
        "location": "Poco Wine + Spirits, Seattle",
        "summary": "Enjoy a cocktail and some socialization every Thursday!",
        "date": "EVERY THUR",
        "hours": "19:30 - 22:00",
        "icon1": "[21+]",
        "description": "Every Thursday, many Seattle QC attendees gather for drinks and socializing before wandering home or out to the bars. Please know, Poco is a 21+ venue, sorry... Watch for other special events for everyone!",
        "map": "https://goo.gl/maps/WvmC2ejHhem",
        "reservation": "https://www.facebook.com/groups/queerconsea/",
        "host": "SEA"
      },
      {
        "title": "Queercon RSA Mixer",
        "location": "Hamburger Mary's San Francisco",
        "summary": "Come join us for a low key evening at the new Hamburger Mary’s in the Castro at the end of RSA this year.",
        "date": "THU 19 APR",
        "hours": "19:30 - 23:00",
        "icon1": "",
        "description": "Come join us for a low key evening at the new Hamburger Mary’s in the Castro at the end of RSA this year.",
        "map": "https://goo.gl/maps/EknU1Wg7P7A2",
        "reservation": "https://www.facebook.com/events/189231201695228/",
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