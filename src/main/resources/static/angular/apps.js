/**
 * root apps
 */

var cmndProjectApps = angular.module('cmndProject', ['ngAnimate','ngRoute','ngCookies','ngSanitize','ui.router']);

/*cmndProjectApps.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state("#/tvs", {
		templateUrl: "/tvs/index",
		controller: "navigationTVsController"
	}).state("#/files", {
		templateUrl: "/files/index",
		controller: "navigationFilesController"
	}).state("#/admin", {
		templateUrl: "/admin/index",
		controller: "navigationAdminController"
	});
	$urlRouterProvider.otherwise("/","tvs");
})*/
cmndProjectApps.config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/monitors", {
		templateUrl: "/monitors/index",
		controller: "navigationMonitorsController"
	}).when("/tvs", {
		templateUrl: "/tvs/index",
		controller: "navigationTVsController"
	}).when("/files", {
		templateUrl: "/files/index",
		controller: "navigationFilesController"
	}).when("/create", {
		templateUrl: "/create/index",
		controller: "navigationCreateController"
	}).when("/admin", {
		templateUrl: "/admin/index",
		controller: "navigationAdminController"
	}).when("/logout", {
		templateUrl: "/logout/index",
		controller: "navigationLogoutController"
	}).otherwise({
		redirectTo: "/tvs"
	});
}]).config(['$locationProvider', function($locationProvider) {   
    $locationProvider.hashPrefix(''); 
}]).factory('locals', ['$window', function($window){
    return{
        set: function(key, value){
        	$window.localStorage[key] = value;
        },
        get: function(key, defaultValue){
        	return  $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value){
        	$window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
        	return JSON.parse($window.localStorage[key] || '{}');
        }
      };
}]);