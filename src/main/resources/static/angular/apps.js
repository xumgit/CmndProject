/**
 * root apps
 */

var cmndProjectApps = angular.module('cmndProject', ['ngAnimate','ngRoute','ngCookies','ngSanitize']);

cmndProjectApps.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/tvs", {
            templateUrl: "/tvs/index",
            controller: "navigationTVsController"
        }).when("/files", {
            templateUrl: "/files/index",
            controller: "navigationFilesController"
        }).when("/admin", {
            templateUrl: "/admin/index",
            controller: "navigationAdminController"
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