cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-appcenter-analytics.Analytics",
        "file": "plugins/cordova-plugin-appcenter-analytics/www/Analytics.js",
        "pluginId": "cordova-plugin-appcenter-analytics",
        "clobbers": [
            "AppCenter.Analytics"
        ]
    },
    {
        "id": "cordova-plugin-appcenter-crashes.Crashes",
        "file": "plugins/cordova-plugin-appcenter-crashes/www/Crashes.js",
        "pluginId": "cordova-plugin-appcenter-crashes",
        "clobbers": [
            "AppCenter.Crashes"
        ]
    },
    {
        "id": "code-push.AcquisitionManager",
        "file": "plugins/code-push/script/acquisition-sdk.js",
        "pluginId": "code-push",
        "merges": [
            "window"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-appcenter-push.Push",
        "file": "plugins/cordova-plugin-appcenter-push/www/Push.js",
        "pluginId": "cordova-plugin-appcenter-push",
        "clobbers": [
            "AppCenter.Push"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-appcenter-shared": "0.1.3",
    "cordova-plugin-appcenter-analytics": "0.1.3",
    "cordova-plugin-appcenter-crashes": "0.1.3",
    "code-push": "2.0.5",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-appcenter-push": "0.1.3"
};
// BOTTOM OF METADATA
});