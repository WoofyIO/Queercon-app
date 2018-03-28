import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'events-details.html',
})
export class EventsDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
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
  items = [];

  constructor(public nav: NavController) {
    this.items = [
      {
        'title': 'Event 1',
        'summary': '1111111111',
        'description': 'Blah Blah Blah',
        'host': 'QC'
      },
      {
        'title': 'Event 2',
        'summary': '1111111111',
        'description': 'Blah Blah Blah',
        'host': 'QC'
      },
      {
        'title': 'Event 3',
        'summary': '1111111111',
        'description': 'Blah Blah Blah',
        'host': 'SEA'
      },
      {
        'title': 'Event 4',
        'summary': '1111111111',
        'description': 'Blah Blah Blah',
        'host': 'DC'
      },
    ]
  }

  openEventDetailsPage(item) {
    this.nav.push(EventsDetailsPage, { item: item });
  }

}