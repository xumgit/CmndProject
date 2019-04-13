/**
 * 
 */

cmndProjectApps.service("navigationService", ["$q", "$http",'locals', '$state', function($q, $http, locals, $state) {
	this.getTabsContentData = function(url) {
		return $http.get(url).then(function(resp) {
			return resp.data;
		}, function(resp) {
			return $q.reject(resp.status);
		});
    };

    this.getIptvPollingData = function() {
		return $http.get("/SmartInstall/iptvpolling").then(function(resp) {
			return resp.data;
		}, function(resp) {
			return $q.reject(resp.status);
		});
    };
    
    this.executeSqlScript = function() {
		return $http.get("/executeSql/index").then(function(resp) {
			return resp.data;
		}, function(resp) {
			return $q.reject(resp.status);
		});
    };

    this.goToPage = function() {
        var main_nav_tab = locals.get("main_nav_tab", "tvs");
        var sub_nav_tab = locals.get("sub_nav_tab", "tabs_tvList");
        var ui_route_pattern = main_nav_tab + "." + sub_nav_tab;
        console.log("navigationService=>ui_route_pattern:" + ui_route_pattern);
        $state.go(ui_route_pattern);
    };
}]);