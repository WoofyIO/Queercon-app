import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Qc15Page } from '../qc15/qc15';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

	goToQc15Page(destination){
		this.navCtrl.setRoot(Qc15Page);
	}
}
