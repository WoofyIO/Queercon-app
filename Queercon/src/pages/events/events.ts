import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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
  //templateUrl: 'events.html',

  template: `

  <ion-header>
  
    <ion-navbar>
  
      <button ion-button menuToggle>
  
        <ion-icon name="menu"></ion-icon>
  
      </button>
  
      <ion-title>Events</ion-title>
  
    </ion-navbar>
  
  </ion-header>
  
  
  
  <ion-content>
  
    <ion-list>
  
      <ion-card *ngFor="let item of items" (click)="openEventDetailsPage(item)">
  
        <ion-card-header>
  
          {{ item.title }}
  
        </ion-card-header>
  
        <ion-card-content>
  
        {{ item.summary }}
  
        </ion-card-content>
  
      </ion-card>
  
    </ion-list>
  
  </ion-content>
  
  `
  
})
export class EventsPage {
  /* Remove in staging *///private webWiew: any = window;
  items = [];
  constructor(public nav: NavController) {
    console.log('QC Events constructor loaded');

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