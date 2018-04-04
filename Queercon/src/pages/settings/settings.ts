import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare const codePush: any
declare const InstallMode: any


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  /* Remove in staging *///private webWiew: any = window;

  pushID: string;
  pushTags: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    /* Remove in staging *///this.webWiew.AppCenter.Analytics.trackEvent('Settings Loaded');
  
    this.pushID = "";
    this.pushTags = "";
    console.log("queercon const userId: " + this.pushID);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  checkUpdates() {
    let toast = this.toastCtrl.create({
      message: 'Checking for Updates......',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
    codePush.sync(null, {
      updateDialog: {
        appendReleaseDescription: true,
        mandatoryUpdateMessage: "An important content update has been installed",
        optionalUpdateMessage: "A content update is available. Install now?",
        descriptionPrefix: "\n\nChange log:\n"
      },
      installMode: InstallMode.IMMEDIATE
    });

  }

  getPushTags() {

    let self = this;

/*     window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
      console.log("queercon pushsub hasPrompted: " + status.permissionStatus.hasPrompted); // Bool
      console.log("queercon pushsub status: " + status.permissionStatus.status); // Integer: 0 = Not Determined, 1 = Denied, 2 = Authorized
    
      console.log("queercon pushsub subscribed: " + status.subscriptionStatus.subscribed); // Bool
      console.log("queercon pushsub userSubscriptionSetting: " + status.subscriptionStatus.userSubscriptionSetting); // Bool
      console.log("queercon pushsub userId: " + status.subscriptionStatus.userId); // String: OneSignal Player ID
      console.log("queercon pushsub pushToken: " + status.subscriptionStatus.pushToken); // String: Device Identifier from FCM/APNs
    }); */

    window["plugins"].OneSignal.getTags(function(tags) {
      console.log('queercon Tags Received: ' + JSON.stringify(tags));
      self.pushTags = JSON.stringify(tags);

    });

  }

  getPushID() {

    let self = this;

    window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
      console.log("queercon pushsub userId: " + status.subscriptionStatus.userId); // String: OneSignal Player ID
      self.pushID = status.subscriptionStatus.userId;
      console.log("queercon pushsub pushid set: " +  self.pushID);
    });

  }


}
