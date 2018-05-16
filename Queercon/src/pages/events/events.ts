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
        "title": "Let's take a hike - Ensign Peak",
        "location": "Ensign Peak trailhead",
        "summary": "Let's go hike Ensign Peak and take a group picture overlooking the valley.",
        "date": "SAT 19 MAY",
        "hours": "11:00 - 13:00",
        "icon1": "",
        "description": "The hike is fairly easy, though it little steep in sections, but offers an amazing view of the valley. Afterwards we can grab a bite to eat or something else.",
        "map": "https://goo.gl/maps/36wXDtDSvTz",
        "reservation": "https://www.facebook.com/events/2164708526889022/",
        "host": "SLC"
      },
      {
        "title": "AIDS Walk NY",
        "location": "Central Park, NYC",
        "summary": "Join Team Queercon NYC in fundraising to combat HIV/AIDS",
        "date": "SUN 20 MAY",
        "hours": "08:00 - 14:00",
        "icon1": "",
        "description": "This year, we are going to participate in AIDS Walk New York as a team. Come join us for the walk in Central Park. Join our team, or donate to the cause here: https://ny.aidswalk.net/queerconnyc We will meet at Southeast corner of Central Park at 59th St & 5th Ave. Stay tuned to our Telegram channel for updates.",
        "map": "https://goo.gl/maps/ZdJd18aJwgz",
        "reservation": "https://ny.aidswalk.net/queerconnyc",
        "host": "NYC"
      },
      {
        "title": "Queercon @ Hushcon East",
        "location": "Hushcon East",
        "summary": "Coming soon, we'll be there with mixers and/or evening social events!",
        "date": "FRI 01 JUN",
        "hours": "09:00 - 23:00",
        "icon1": "",
        "description": "Coming soon, we'll be there with mixers and/or evening social events!",
        "map": "https://goo.gl/maps/HrMPUB3Uqy32",
        "reservation": "https://www.facebook.com/events/170631757064102/",
        "host": "QC"
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
        "title": "SaintCON 2018",
        "location": "Utah Valley Convention Center",
        "summary": "Join for a nonprofit conference in Salt Lake City, 17 years running.",
        "date": "15 - 19 OCT",
        "hours": "09:00 - 23:00",
        "icon1": "",
        "description": "SAINTCON is a nonprofit conference devoted to security training and awareness, and presented by the UtahSAINT Organization. SAINTCON was founded in 2001, originally designed to provide security training to Utah based public entities. Today the conference has grown into a large gathering of security professionals, students, and interested individuals. From security to community, we focus on working together to promote security in all areas of technology. Many of the attendees of SAINTCON include computer security professionals, IT professionals, security researchers, students, or anyone with a general interst in technology security related topics.",
        "map": "https://goo.gl/maps/ktY91xHjxPM2",
        "reservation": "https://www.facebook.com/events/397972780636546/",
        "host": "QC"
      }
    ];
   
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
