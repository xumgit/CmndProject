/**
 * 
 */

cmndProjectApps.service("navigationService", ["$q", "$http", function($q, $http) {
	this.getTabsContentData = function(url) {
		return $http.get(url).then(function(resp) {
			return resp.data;
		}, function(resp) {
			return $q.reject(resp.status);
		});
    };
}]);