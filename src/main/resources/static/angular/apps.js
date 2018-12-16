/**
 * root apps
 */

var cmndProjectApps = angular.module('cmndProject', ['ngAnimate', 'ngCookies', 'ui.router']);

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