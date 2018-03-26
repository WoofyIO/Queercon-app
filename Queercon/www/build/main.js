webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToEventsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Queercon-ionic-app\Queercon\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page"> \n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/full_name_band.png"/>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="goToEventsPage()"> \n\n    <img src="assets/imgs/rsa.jpg"/>\n\n    <div class="card-title">Queercon @RSA</div>\n\n    <div class="card-subtitle">April 16- 20</div>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n\n\n<!--\n\n<ion-content padding>\n\n<img src="assets/imgs/full_name_band.png">\n\n	<ion-card>\n\n		<ion-card-header>\n\n			<h2>Welcome to the new QC App</h2>\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<p>Please check back regularly as we continue to enhance it and populate it with content.</p>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n  	<ion-card>\n\n		<ion-card-header>\n\n			<h2>QC14 is Over, Ready for QC15?</h2>\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<p>Queercon 14 is over, and Queercon 15 is a few months away, but planning is in full swing. We also have a very active community with many events hosted around the US (and the world). Please check out "Stay in Touch", to connect with local groups.</p>\n\n		</ion-card-content>\n\n	</ion-card>\n\n	\n\n	 <ion-card>\n\n		<ion-card-header>\n\n			<h2>QC Locals</h2>\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<p>Interested in running a Queercon event in your home town? or starting a locals group? please reach out to us!</p>\n\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>\n\n-->\n\n\n\n'/*ion-inline-end:"C:\Queercon-ionic-app\Queercon\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsPage = (function () {
    function EventsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"C:\Queercon-ionic-app\Queercon\src\pages\events\events.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Events\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  \n\n  <ion-list-header><h1>Queercon, Inc</h1></ion-list-header>\n\n  \n\n          <ion-item text-wrap>\n\n	<ion-card>\n\n		<ion-card-header>\n\n			My Event cool prod\n\n		</ion-card-header>\n\n		<ion-card-content>\n\n			<p>The most awesome party</p>\n\n		</ion-card-content>\n\n		<ion-row class="cardfooter">\n\n		<ion-col>\n\n            <p>Start: 2/15/20 2015</p>\n\n			<p>End: 2/15/20 2015</p>\n\n		</ion-col>\n\n    </ion-row>\n\n	</ion-card>\n\n    </ion-item>\n\n	\n\n	<ion-list-header><h1>Queercon Locals</h1></ion-list-header>\n\n	\n\n	<ion-list-header><h2>QC New York City</h2></ion-list-header>\n\n	\n\n	<ion-list-header><h2>QC Seattle</h2></ion-list-header>\n\n	\n\n	<ion-list-header><h2>QC DC</h2></ion-list-header>\n\n\n\n	\n\n	<ion-list-header><h2>QC San Francisco</h2></ion-list-header>\n\n	\n\n	\n\n	<ion-list-header><h2>QC Denver</h2></ion-list-header>\n\n	\n\n   	\n\n	</ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Queercon-ionic-app\Queercon\src\pages\events\events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Queercon-ionic-app\Queercon\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Stay in Touch\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n  \n\n  <ion-list-header><h1>Queercon, Inc</h1></ion-list-header>\n\n  \n\n    <ion-item text-wrap onclick="window.open(\'https://www.queercon.org\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/thumbsquare.png">\n\n      </ion-avatar>\n\n      <h2>Queercon Website</h2>\n\n	  <p>Stay up to date with whats going on, and read recent posts.</p>\n\n    </ion-item>\n\n   \n\n   <ion-item text-wrap onclick="window.open(\'https://www.twitter.com/queercon\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/twitter.png">\n\n      </ion-avatar>\n\n      <h2>@queercon</h2>\n\n	  <h3>Follow us on Twitter.</h3>\n\n	  <p>We will tweet schedule changes, badge releases, contest information.</p>\n\n    </ion-item>\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://www.facebook.com/groups/126504813280/\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/facebook.png">\n\n      </ion-avatar>\n\n      <h2>Facebook</h2>\n\n	  <p>The Facebook group of the LOTS and LOTS of members of Queercon. Join Us.</p>\n\n    </ion-item>	\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://t.me/joinchat/GYnq3kbjrYjhs035_bvU_g\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/telegram.png">\n\n      </ion-avatar>\n\n      <h2>Queercon Telegram Channel</h2>\n\n      <p>This is our primary, moderated social chat channel</p>\n\n    </ion-item>\n\n	\n\n   <ion-item text-wrap onclick="window.open(\'mailto:help@queercon.org\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/email.png">\n\n      </ion-avatar>\n\n      <h2>help@queercon.org</h2>\n\n	  <h3>Email Us</h3>\n\n	  <p>Need to go "old school" and email us? Use this.</p>\n\n    </ion-item>\n\n	\n\n	<ion-list-header><h1>Queercon Locals</h1></ion-list-header>\n\n	\n\n	<ion-list-header><h2>QC New York City</h2></ion-list-header>\n\n	\n\n	<ion-item text-wrap onclick="window.open(\'https://queercon.nyc\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/thumbsquare.png">\n\n      </ion-avatar>\n\n      <h2>QC NYC Website</h2>\n\n	  <p>The QC NYC Website - come check it out for the latest info.</p>\n\n    </ion-item>\n\n   \n\n   <ion-item text-wrap onclick="window.open(\'https://twitter.com/QueerconNYC\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/twitter.png">\n\n      </ion-avatar>\n\n      <h2>@QueerconNYC</h2>\n\n	  <p>Follow QC NYC on Twitter.</p>\n\n    </ion-item>\n\n\n\n    <ion-item text-wrap onclick="window.open(\'https://www.facebook.com/groups/QueerconNYC/\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/facebook.png">\n\n      </ion-avatar>\n\n      <h2>Facebook</h2>\n\n	  <p>The Facebook group for QC NYC</p>\n\n    </ion-item>	\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://t.me/joinchat/FQg75kUQMv-iOD3Bcc7IPQ\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/telegram.png">\n\n      </ion-avatar>\n\n      <h2>Queercon NYC Telegram Channel</h2>\n\n      <p>This is a moderated chat channel for NYC</p>\n\n    </ion-item>\n\n	\n\n	<ion-list-header><h2>QC Seattle</h2></ion-list-header>\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://www.facebook.com/groups/queerconsea/\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/facebook.png">\n\n      </ion-avatar>\n\n      <h2>Facebook</h2>\n\n	  <p>The Facebook group for QC SEA</p>\n\n    </ion-item>	\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://t.me/joinchat/GYnq3kWpuJwOaor9jEmQ1A\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/telegram.png">\n\n      </ion-avatar>\n\n      <h2>Queercon SEA Telegram Channel</h2>\n\n      <p>This is a moderated chat channel for SEA</p>\n\n    </ion-item>\n\n	\n\n	<ion-list-header><h2>QC DC</h2></ion-list-header>\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://www.facebook.com/groups/144929456097653/\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/facebook.png">\n\n      </ion-avatar>\n\n      <h2>Facebook</h2>\n\n	  <p>The Facebook group for QC DC</p>\n\n    </ion-item>	\n\n	\n\n	<ion-item text-wrap onclick="window.open(\'https://twitter.com/QueerconDC\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/twitter.png">\n\n      </ion-avatar>\n\n      <h2>@QueerconDC</h2>\n\n	  <p>Follow QC DC on Twitter.</p>\n\n    </ion-item>\n\n\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://t.me/joinchat/GYnq3lKb5LOv5LG_YIe3ag\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/telegram.png">\n\n      </ion-avatar>\n\n      <h2>Queercon DC Telegram Channel</h2>\n\n      <p>This is a moderated chat channel for DC</p>\n\n    </ion-item>\n\n	\n\n	<ion-list-header><h2>QC San Francisco</h2></ion-list-header>\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://www.facebook.com/groups/QueerconSF/\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/facebook.png">\n\n      </ion-avatar>\n\n      <h2>Facebook</h2>\n\n	  <p>The Facebook group for QC SF</p>\n\n    </ion-item>	\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://t.me/joinchat/GYnq3hDrvpP20bRqhPmd_A\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/telegram.png">\n\n      </ion-avatar>\n\n      <h2>Queercon SF Telegram Channel</h2>\n\n      <p>This is a moderated chat channel for SF</p>\n\n    </ion-item>	\n\n	\n\n	<ion-list-header><h2>QC Denver</h2></ion-list-header>\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://www.facebook.com/groups/QueerconDenver/\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/facebook.png">\n\n      </ion-avatar>\n\n      <h2>Facebook</h2>\n\n	  <p>The Facebook group for QC DEN</p>\n\n    </ion-item>	\n\n	\n\n    <ion-item text-wrap onclick="window.open(\'https://t.me/joinchat/GYnq3kS0vxvOQSnYnw6gvA\', \'_system\', \'location=yes\');">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/telegram.png">\n\n      </ion-avatar>\n\n      <h2>Queercon DEN Telegram Channel</h2>\n\n      <p>This is a moderated chat channel for DEN</p>\n\n    </ion-item>	\n\n	\n\n	</ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Queercon-ionic-app\Queercon\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportersPage = (function () {
    function SupportersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SupportersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-supporters',template:/*ion-inline-start:"C:\Queercon-ionic-app\Queercon\src\pages\supporters\supporters.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Our Valued Supporters\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Queercon-ionic-app\Queercon\src\pages\supporters\supporters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SupportersPage);
    return SupportersPage;
}());

//# sourceMappingURL=supporters.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_events_events__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_supporters_supporters__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_calendar__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_supporters_supporters__["a" /* SupportersPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_supporters_supporters__["a" /* SupportersPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_calendar__["a" /* Calendar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_events_events__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_supporters_supporters__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_5__pages_events_events__["a" /* EventsPage */] },
            { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'Supporters', component: __WEBPACK_IMPORTED_MODULE_7__pages_supporters_supporters__["a" /* SupportersPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            var success = function () {
                console.log("Event tracked");
            };
            var error = function (error) {
                console.error(error);
            };
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
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Queercon-ionic-app\Queercon\src\app\app.html"*/'<!--<ion-nav [root]="rootPage"></ion-nav>-->\n\n\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Queercon-ionic-app\Queercon\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map