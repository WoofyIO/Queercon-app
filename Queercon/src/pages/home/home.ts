import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Qc15Page } from '../qc15/qc15';
import { QcRsa2018Page } from '../qc-rsa2018/qc-rsa2018';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

	goToQc15Page(){
		this.navCtrl.setRoot(Qc15Page);
	}

	goToQcRsaPage(){
		this.navCtrl.setRoot(QcRsa2018Page);
	}

}
