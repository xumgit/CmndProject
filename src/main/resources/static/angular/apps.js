/**
 * root apps
 */

var cmndProjectApps = angular.module('cmndProject', ['ngAnimate', 'ngCookies', 'ui.router']);
cmndProjectApps.run(function($state) {
    window.myAppErrorLog = [];
    $state.defaultErrorHandler(function(error) {
        // This is a naive example of how to silence the default error handler.
        window.myAppErrorLog.push(error);
    });
})
// cmndProjectApps.config(["$routeProvider", function($routeProvider) {
// 	$routeProvider.when("/monitors", {
// 		templateUrl: "/monitors/index",
// 		controller: "navigationMonitorsController"
// 	}).when("/tvs", {
// 		templateUrl: "/tvs/index",
// 		controller: "navigationTVsController"
// 	}).when("/files", {
// 		templateUrl: "/files/index",
// 		controller: "navigationFilesController"
// 	}).when("/create", {
// 		templateUrl: "/create/index",
// 		controller: "navigationCreateController"
// 	}).when("/admin", {
// 		templateUrl: "/admin/index",
// 		controller: "navigationAdminController"
// 	}).when("/logout", {
// 		templateUrl: "/logout/index",
// 		controller: "navigationLogoutController"
// 	}).otherwise({
// 		redirectTo: "/tvs"
// 	});
// }])