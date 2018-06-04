import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
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

  private webWiew: any = window;

  pushID: string;
  pushTags: string;
  appVer: string;
  codeVer: string;
  verDesc: string;


  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {


    if (!this.platform.is('mobileweb')) {
      console.log("queercon aaccaa loading not mobileweb");
      this.webWiew.AppCenter.Analytics.trackEvent('QC settings.ts');		
    }  
  
    this.pushID = "";
    this.pushTags = "";
    console.log("queercon const userId: " + this.pushID);

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');

    if (!this.platform.is('mobileweb')) {
      this.platform.ready().then(()=>this.getPushTags());
      this.platform.ready().then(()=>this.getPushID());
      this.platform.ready().then(()=>this.getVerData());
    }
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
        mandatoryUpdateMessage: "An important content update is about to be installed",
        optionalUpdateMessage: "A content update is available. Install now?",
        descriptionPrefix: "\n\nChange log:\n",
        mandatoryContinueButtonLabel: "OK",
        updateTitle: "Content Update Available"

      },
      installMode: InstallMode.IMMEDIATE,
      ignoreFailedUpdates: false
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

  getVerData() {
    let self = this;

    if (!this.platform.is('mobileweb')) {
      codePush.getCurrentPackage(function (localPackage) {

        self.appVer = localPackage.appVersion;
        self.codeVer = localPackage.label;
        self.verDesc = localPackage.description;

      });
  
    }
  }


}
