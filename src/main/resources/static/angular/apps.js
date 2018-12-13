/**
 * root apps
 */

var cmndProjectApps = angular.module('cmndProject', ['ngAnimate','ngRoute','ngCookies','ngSanitize']);

cmndProjectApps.config(['$locationProvider', function($locationProvider) {   
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