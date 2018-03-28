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
//declare const AppCenter: any


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild(Nav) nav: Nav;
	
	private webWiew: any = window;

	rootPage:any = HomePage;
	
	pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		
		this.webWiew.AppCenter.Analytics.trackEvent('App loaded');
		
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
			{ title: 'Contact', component: ContactPage },
			{ title: 'About Queercon', component: AboutPage }
		];
		
		platform.ready().then(() => {

			this.webWiew.AppCenter.Analytics.trackEvent('App Ready');

      // Okay, so the platform is ready and our plugins are available.

			// Here you can do any higher level native things you might need.
			
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

    });

  }
	

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
