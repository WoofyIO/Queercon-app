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

    if (!this.platform.is('mobileweb')) {
      console.log("queercon aaccaa loading not mobileweb");
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
    
    if (!this.platform.is('mobileweb')) {
      console.log("queercon aaccaa loading not mobileweb");
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
        "title": "TOOOL DC",
        "location": "The Board Room, DC",
        "summary": "Bring your concentration and a bite to eat to this QC lockpicking session.",
        "date": "WED 06 JUN",
        "hours": "18:30 - 20:30",
        "icon1": "",
        "description": "Come lockpick and drink with us! Lockpicks and locks are provided, just bring yourself! (They don't serve food so it's Bring Your Own Food).",
        "map": "https://goo.gl/maps/C2sdfY9AnKw",
        "reservation": "https://www.facebook.com/events/1903929682981325/",
        "host": "DC"
      },
      {
        "title": "Northwest Pinball & Arcade Show",
        "location": "Greater Tacoma Convention Center",
        "summary": "Queercon SEA goes to the Northwest Pinball & Arcade Show",
        "date": "SAT 09 JUN",
        "hours": "13:30 - 20:30",
        "icon1": "",
        "description": "Queercon Seattle is going to the Northwest Pinball & Arcade show on Saturday! Tickets to the show can be bought at the door for $30, and all games are on free play once you're inside. Come play hundreds of arcade and pinball games with us. More info on the show at http://www.nwpinballshow.com/",
        "map": "https://goo.gl/maps/mKqSMsBNEYR2",
        "reservation": "https://www.facebook.com/events/212871739325873/",
        "host": "SEA"
      },
      {
        "title": "Drag Brunch - Pre-Baltimore Pride",
        "location": "El Bufalo Tequila Bar and Kitchen (Baltimore, MD)",
        "summary": "QC DC goes to Baltimore Pride!",
        "date": "SAT 16 JUN",
        "hours": "12:00 - 14:00",
        "icon1": "",
        "description": "We're avoiding the rain and lightning during DC Pride by going to Baltimore Pride with brunch beforehand! $20 at the door. If it's too full we'll migrate elsewhere. Stay up to date on what's happening in Telegram the day of.",
        "map": "https://goo.gl/maps/tjw39xBjqXU2",
        "reservation": "https://www.facebook.com/events/1876164739349004/",
        "host": "DC"
      },
      {
        "title": "Queercon @ HOPE XII",
        "location": "Hotel Pennsylvania NYC",
        "summary": "Queercon is going to HOPE XII",
        "date": "20 - 22 JUL",
        "hours": "09:00 - 21:00",
        "icon1": "",
        "description": "We are still working this one out - but please keep an eye on the group, and this event.",
        "map": "https://binged.it/2xLSS4l",
        "reservation": "https://www.facebook.com/events/1976853352566334/",
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
