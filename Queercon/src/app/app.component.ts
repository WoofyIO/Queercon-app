import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { Qc15Page } from '../pages/qc15/qc15';
import { ChatPage } from '../pages/chat/chat';
import { LocalPage } from '../pages/local/local';
import { QcRsa2018Page } from '../pages/qc-rsa2018/qc-rsa2018';
import { VolunteerPage } from '../pages/volunteer/volunteer';
import { EventsPage } from '../pages/events/events';
import { SupportersPage } from '../pages/supporters/supporters';
import { AboutPage } from '../pages/about/about';
import { NewsPage } from '../pages/news/news';
import { SettingsPage } from '../pages/settings/settings';

declare const codePush: any
declare const InstallMode: any


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild(Nav) nav: Nav;
	
	/* Remove in staging *///private webWiew: any = window;

	rootPage:any = HomePage;
	
	pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, AlertController: AlertController) {
		
		/* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('App loaded');
		
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'Latest News', component: NewsPage },
			{ title: 'Queercon 15 @ Defcon', component: Qc15Page },
			{ title: 'Queercon @ RSA', component: QcRsa2018Page },
			{ title: 'Events Calendar', component: EventsPage },
			{ title: 'Queercon Locals', component: LocalPage },
			{ title: 'Chat Room', component: ChatPage },
			{ title: 'Support Us', component: SupportersPage },
			{ title: 'Volunteer', component: VolunteerPage },
			{ title: 'About Queercon', component: AboutPage },
			{ title: 'Settings', component: SettingsPage }
		];

		
		platform.ready().then(() => {

			/* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('App Ready');


			
			codePush.sync(null, {
				updateDialog: {
					appendReleaseDescription: true,
					mandatoryUpdateMessage: "An important content update has been installed",
					optionalUpdateMessage: "A content update is available. Install now?",
					descriptionPrefix: "\n\nChange log:\n"
				},
				installMode: InstallMode.IMMEDIATE
			});
			

			statusBar.styleDefault();

			splashScreen.hide();


			// Optional OneSignal code for iOS to prompt users later
			// Set your iOS Settings
			var iosSettings = {};
			iosSettings["kOSSettingsKeyAutoPrompt"] = true; // will not prompt users when start app 1st time
			iosSettings["kOSSettingsKeyInAppLaunchURL"] = true; // false opens safari with Launch URL

/* 			var notificationOpenedCallback = function(jsonData) {
				console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
				if (jsonData.notification.payload.additionalData != null) {
					console.log("Here we access addtional data");
					if (jsonData.notification.payload.additionalData.openURL != null) {
						console.log("Here we access the openURL sent in the notification data");
					}
				}
			}; */

			window["plugins"].OneSignal
        	.startInit('d149d10e-71d8-4243-8827-f45a72d2d2ac','278964097998')
	        .iOSSettings(iosSettings) // only needed if added Optional OneSignal code for iOS above
	        .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
			.handleNotificationReceived(function(jsonData) {
				let popup = AlertController.create();
				popup.setTitle(jsonData.payload.title);
				popup.setSubTitle(jsonData.payload.body);
				popup.addButton("OK");
				popup.present();
				console.log('Did I receive a notification: ' + JSON.stringify(jsonData));
			  })
			.endInit();

/* 			window["plugins"].OneSignal.enableNotificationsWhenActive(true);
			window["plugins"].OneSignal.enableInAppAlertNotification(true);
			window["plugins"].OneSignal.promptLocation(); */
		});

	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}

}
