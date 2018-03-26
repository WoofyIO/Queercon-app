import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { ContactPage } from '../pages/contact/contact';
import { SupportersPage } from '../pages/supporters/supporters';

declare const codePush: any
declare const InstallMode: any
declare const AppCenter: any


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild(Nav) nav: Nav;
	
	rootPage:any = HomePage;
	
	pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
	
	
	this.pages = [
      { title: 'Home', component: HomePage },
	  { title: 'Events', component: EventsPage },
	  { title: 'Contact', component: ContactPage },
	  { title: 'Supporters', component: SupportersPage }
    ];

  }
	
	initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
	  
	  var success = function() {
		console.log("Event tracked");
	  }

	  var error = function(error) {
		console.error(error);
	  }
	  
	  AppCenter.Analytics.trackEvent('Platform Ready', success, error);
	  codePush.sync(null, {
		updateDialog: {
			appendReleaseDescription: true,
			mandatoryUpdateMessage: "An important content update has been installed",
			optionalUpdateMessage: "A content update is available. Install now?",
			descriptionPrefix: "\n\nChange log:\n"
		},
		installMode: InstallMode.IMMEDIATE
	  });
	  
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
