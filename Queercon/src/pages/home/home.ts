import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventsPage } from '../events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

	goToEventsPage(){
		this.navCtrl.setRoot(EventsPage);
	}
}
