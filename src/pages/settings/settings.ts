import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

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
  codeBr: string;


  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {


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

    var msg = "";
    var key = "";

    if (this.platform.is('android'))
    {
      key = "ek1YEsrSrNY6MMroICfOL-k_yA7Cry87dPT4G";
      msg = "Checking Android Production......";
    }
    if (this.platform.is('ios'))
    {
      key = "TIpaV2ZUghgyX250gk_zZ3hTo5KKH1Z4xmz8G";
      msg = "Checking iOS Production......";
    }

    codePush.checkForUpdate(function (update) {
      if (!update) {
        console.log("queercon aaccaa staging no update");
        alert("No Update Avalible");
      } 
    },
    null,
    key);

/*     let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast); */
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
      deploymentKey: key,
      ignoreFailedUpdates: false
    });	

  }

  checkUpdatesStaging() {

    var msg = "";
    var key = "";

    if (this.platform.is('android'))
    {
      key = "qLWMZpKH2vSiODwb1-qHLte__0tyHJLmdPT4M";
      msg = "Checking Android Staging...";
    }
    if (this.platform.is('ios'))
    {
      key = "Vfe7GWkriXItBozGs16cj3OAk_MYryWNgXzIz";
      msg = "Checking iOS Staging...";
    }

    codePush.checkForUpdate(function (update) {
      if (!update) {
        console.log("queercon aaccaa staging no update");
        alert("No Update Avalible");

      } 
    },
    null,
    key);

/*     let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast); */
    
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
      deploymentKey: key,
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

        if(localPackage.deploymentKey == "qLWMZpKH2vSiODwb1-qHLte__0tyHJLmdPT4M") 
        {
           self.codeBr = "Android Staging"; 
        }
        if(localPackage.deploymentKey == "ek1YEsrSrNY6MMroICfOL-k_yA7Cry87dPT4G") 
        {
           self.codeBr = "Android Production"; 
        }
        if(localPackage.deploymentKey == "Vfe7GWkriXItBozGs16cj3OAk_MYryWNgXzIz") 
        {
           self.codeBr = "iOS Staging"; 
        }
        if(localPackage.deploymentKey == "TIpaV2ZUghgyX250gk_zZ3hTo5KKH1Z4xmz8G") 
        {
           self.codeBr = "iOS Production"; 
        }

        self.verDesc = localPackage.description;

      });

      if(self.verDesc == null) { self.verDesc = "No Codepush Update Yet"; }
      if(self.codeBr == null) { self.codeBr = "No Codepush Update Yet"; }
      if(self.codeVer == null) { self.codeVer = "No Codepush Update Yet"; }
      if(self.appVer == null) { self.appVer = "No Codepush Update Yet"; }
  
    }
  }


}
