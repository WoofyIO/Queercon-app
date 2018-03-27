import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Qc15Page } from '../pages/qc15/qc15';
import { ChatPage } from '../pages/chat/chat';
import { LocalPage } from '../pages/local/local';
import { QcRsa2018Page } from '../pages/qc-rsa2018/qc-rsa2018';
import { VolunteerPage } from '../pages/volunteer/volunteer';
import { EventsPage } from '../pages/events/events';
import { ContactPage } from '../pages/contact/contact';
import { SupportersPage } from '../pages/supporters/supporters';
import { AboutPage } from '../pages/about/about';
import { NewsPage } from '../pages/news/news';

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
      { title: 'Latest News', component: NewsPage },
	  { title: 'Queercon 15 @ Defcon', component: Qc15Page },
	  { title: 'Queercon @ RSA', component: QcRsa2018Page },
	  { title: 'Events Calendar', component: EventsPage },
	  { title: 'Queercon Locals', component: LocalPage },
	  { title: 'Chat Room', component: ChatPage },
	  { title: 'Events', component: EventsPage },
	  { title: 'Support Us', component: SupportersPage },
	  { title: 'Volunteer', component: VolunteerPage },
	  { title: 'About Queercon', component: AboutPage }
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
		

		var onNotificationReceived = function(pushNotification) {
			var message = pushNotification.message;
			var title = pushNotification.title;

			if (message === null || message === undefined) {
					// Android messages received in the background don't include a message. On Android, that fact can be used to
					// check if the message was received in the background or foreground. For iOS the message is always present.
					title = 'Android background';
					message = '<empty>';
			}

			// Custom name/value pairs set in the App Center web portal are in customProperties
			if (pushNotification.customProperties && Object.keys(pushNotification.customProperties).length > 0) {
					message += '\nCustom properties:\n' + JSON.stringify(pushNotification.customProperties);
			}

			console.log(title, message);
	}

	  AppCenter.Push.addEventListener('notificationReceived', onNotificationReceived);   

	  
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
