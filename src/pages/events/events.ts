import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

/* import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; */


@Component({
  templateUrl: 'events-details.html',
})

export class EventsDetailsPage {
  item;
  private webWiew: any = window;

  constructor(public platform: Platform, params: NavParams) {
    
    this.item = params.data.item;

    if (!this.platform.is('core')) {
      console.log("queercon aaccaa loading not core");
      this.webWiew.AppCenter.Analytics.trackEvent('QC event-details.ts: ' + this.item.title);		
    }  

    
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

private webWiew: any = window;

  items = [];
  constructor(public platform: Platform, public nav: NavController, /* public http: Http */) {
    console.log('QC Events constructor loaded');
    
    if (!this.platform.is('core')) {
      console.log("queercon aaccaa loading not core");
      this.webWiew.AppCenter.Analytics.trackEvent('QC events.ts');		
    }  

/*     let localData = this.http.get('events.json').map(res => res.json().events);
    localData.subscribe(data => {
      this.items = data;
    }) */


    //
    //
    //
    //
    //
    // QC LOCALS!! This bellow is the bit to edit and add what you need to :)
    //
    //
    //
    //

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
        "title": "World Maker Faire (NYC)",
        "location": "New York Hall of Science",
        "summary": "Check out geeky fun things at Maker Faire",
        "date": "SAT 22 SEP",
        "hours": "13:00 - 18:00",
        "icon1": "",
        "description": "Let's geek out at Maker Faire. We will meet at 13:00 inside the Maker Faire grounds near the Rocket Park. Map link here: https://goo.gl/maps/KotRNpX9DB72 After Maker Faire, we can head out to get some food together (place TBD). See you soon!",
        "map": "https://goo.gl/maps/KotRNpX9DB72",
        "reservation": "https://www.facebook.com/events/239219866864114/",
        "host": "NYC"
      },
      {
        "title": "SaintCON 2018",
        "location": "Utah Valley Convention Center",
        "summary": "Join for a nonprofit conference in Salt Lake City, 17 years running.",
        "date": "15 - 19 OCT",
        "hours": "09:00 - 23:00",
        "icon1": "",
        "description": "SAINTCON is a nonprofit conference devoted to security training and awareness, and presented by the UtahSAINT Organization. SAINTCON was founded in 2001, originally designed to provide security training to Utah based public entities. Today the conference has grown into a large gathering of security professionals, students, and interested individuals. From security to community, we focus on working together to promote security in all areas of technology. Many of the attendees of SAINTCON include computer security professionals, IT professionals, security researchers, students, or anyone with a general interst in technology security related topics.",
        "map": "https://goo.gl/maps/ktY91xHjxPM2",
        "reservation": "https://www.facebook.com/events/397972780636546/",
        "host": "SLC"
      }
    ];

    //Nothing more for you bellow.. unless you want to do coding for me
   
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
