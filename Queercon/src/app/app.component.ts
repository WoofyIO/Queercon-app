import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

declare const codePush: any
declare const InstallMode: any
declare const Analytics: any

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      Analytics.trackEvent("Platform Ready");

      codePush.sync(null, {
        updateDialog: {
          appendReleaseDescription: true,
          mandatoryUpdateMessage: "An important content update has been installed",
          optionalUpdateMessage: "A content update is avalible. Install now?",
          descriptionPrefix: "\n\nChange log:\n"
        },
        installMode: InstallMode.IMMEDIATE
      });

    });
  }
}
