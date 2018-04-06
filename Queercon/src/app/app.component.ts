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
	
	private webWiew: any = window;

	rootPage:any = HomePage;
	
	pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, AlertController: AlertController) {
		

		this.initializeApp(AlertController);

		if (this.platform.is('ios') || this.platform.is('android') ) {
			
			this.webWiew.AppCenter.Analytics.trackEvent('QC app.component.ts');		
		}
		
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'Latest News', component: NewsPage },
			{ title: 'Queercon 15 @ Defcon', component: Qc15Page },
			{ title: 'Queercon @ RSA', component: QcRsa2018Page },
			{ title: 'Events Calendar', component: EventsPage },
			{ title: 'Queercon Locals', component: LocalPage },
			{ title: 'Chat Room', component: ChatPage },
			{ title: 'Support Us', component: SupportersPage },
			{ title: 'About Queercon', component: AboutPage },
			{ title: 'Settings', component: SettingsPage }
		];



	}

	initializeApp(AlertController) {

		this.platform.ready().then(() => {
/* 			this.statusBar.styleDefault();
			this.statusBar.overlaysWebView(false); //adding padding for iOS
			this.statusBar.backgroundColorByHexString('#ffffff');
			this.splashScreen.hide(); */

			if (this.platform.is('android') ) {
			
				this.statusBar.styleDefault();
				this.statusBar.overlaysWebView(true);
				this.statusBar.backgroundColorByHexString('#000000');
				this.splashScreen.hide();
		
			}
			if (this.platform.is('ios') ) {
			
				this.statusBar.styleDefault();
				this.statusBar.overlaysWebView(false); //adding padding for iOS
				this.statusBar.backgroundColorByHexString('#ffffff');
				this.splashScreen.hide();	
			}


			console.log("queercon codepush next"),
			codePush.sync(null, {
				updateDialog: {
					appendReleaseDescription: true,
					mandatoryUpdateMessage: "An important content update has been installed",
					optionalUpdateMessage: "A content update is available. Install now?",
					descriptionPrefix: "\n\nChange log:\n"
				},
				installMode: InstallMode.IMMEDIATE
			});

			// Optional OneSignal code for iOS to prompt users later
			// Set your iOS Settings
			var iosSettings = {};
			iosSettings["kOSSettingsKeyAutoPrompt"] = true; // will not prompt users when start app 1st time
			iosSettings["kOSSettingsKeyInAppLaunchURL"] = true; // false opens safari with Launch URL

			let alert = AlertController.create();
			
			// OneSignal Code start:
			// Enable to debug issues.
			// window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
			
			var notificationOpenedCallback = function (jsonData) {
				console.log('queercon notificationOpenedCallback: ' + JSON.stringify(jsonData));
				alert.setTitle(jsonData.notification.payload.title);
				alert.setSubTitle(jsonData.notification.payload.body);
				alert.addButton("OK");
				alert.present();
				if (jsonData.notification.payload.additionalData != null) {
					console.log("queercon Here we access addtional data");
					if (jsonData.notification.payload.additionalData.openURL != null) {
						console.log("queercon Here we access the openURL sent in the notification data");
					}
				}
			};

			//This is a payload
/* 			{"action":{"type":0},"notification":{"isAppInFocus":false,"shown":true,"androidNotificationId":-1795320675,"displayType":0,"p
			ayload":{"notificationID":"979db93c-48f3-4838-8df0-6b1834d8c6c0","title":"test","body":"2","lockScreenVisibility":1,"groupMessage":"","fromProjectNumber":"278964097998","priority":5,"rawPayload":"{\"google.sent_time\":1522785572029,\"google.ttl\":259200,\"custom\":\"{\\
			\"i\\\":\\\"979db93c-48f3-4838-8df0-6b1834d8c6c0\\\"}\",\"oth_chnl\":\"\",\"pri\":\"5\",\"vis\":\"1\",\"from\":\"278964097998\",\"alert\":\"2\",\"title\":\"test\",\"grp_msg\":\"\",\"google.message_id\":\"0:1522785572045450%5a823b91f9fd7ecd\",\"notificationId\":-17953206
			75}"}}} */

			window["plugins"].OneSignal
				.startInit('d149d10e-71d8-4243-8827-f45a72d2d2ac','278964097998')
				.iOSSettings(iosSettings) // only needed if added Optional OneSignal code for iOS above
				.inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
				.handleNotificationOpened(notificationOpenedCallback)
				.handleNotificationReceived(function(jsonData) {
					let alertInWindow = AlertController.create();
					alertInWindow.setTitle(jsonData.payload.title);
					alertInWindow.setSubTitle(jsonData.payload.body);
					alertInWindow.addButton("OK");
					alertInWindow.present();
					console.log('queercon Did I receive a notification: ' + JSON.stringify(jsonData));
				  })
				.endInit();
		});

	}
		


	openPage(page) {
		this.nav.setRoot(page.component);
	}

	goHome() { 
		this.nav.setRoot(HomePage); 
	} 

}
