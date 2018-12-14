/**
 * 
 */

cmndProjectApps.controller('navigationController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
	$scope.mainContent = "";
	$scope.currentTab = "tvs";
	$scope.isTVsActive = false;
	$scope.isFilesActive = false;
	$scope.isAdminActive = false;
	
	$scope.initData = function() {	
		console.log("initData");
		var currentTab = $scope.getCurrentTab();
		$scope.navigation(currentTab);
	};
    
    $rootScope.hitSelectTab = function(obj) {
       obj.parent().addClass("active");
       obj.parent().siblings("li").removeClass("active");     
    }
    
	$scope.navigation = function(event) {
        var dom = $(event.target);
        var navId = dom.attr("id");
        console.log("navId:" + navId);
        if (navId != null && navId != undefined) {
            if (navId.indexOf("tvs") > -1) {
                $location.path("#/tvs");
            } else if (navId.indexOf("files") > -1) {
                $location.path("#/files");
            } else if (navId.indexOf("admin") > -1) {
                $location.path("#/admin");
            } else {
                $location.path("#/tvs");
            }
        } else {
            $location.path("#/tvs");
        }
    
		// var goToUrl = $scope.checkWhichUrl(currentTab);
		// $http({
        //     method: "GET",
        //     url: goToUrl,
        //     params: {}
        // }).then(function(response){
        //     $scope.mainContent = response.data;
        // }).catch(function(data){
		//     console.log("catch error data=" + data);
	    // });
	}; 
	
	$scope.checkWhichUrl = function(currentTab) {
		var goToUrl = "/tvs/index";
		$scope.isTVsActive = false;
		$scope.isFilesActive = false;
		$scope.isAdminActive = false;
		if (currentTab == "files") {
			goToUrl = "/files/index";
			$scope.isFilesActive = true;
		} else if (currentTab == "admin") {
			goToUrl = "/admin/index";
			$scope.isAdminActive = true;
		} else {
			goToUrl = "/tvs/index";
			$scope.isTVsActive = true;
		}
		return goToUrl;
	};
	
	$scope.getCurrentTab = function() {
		var currentTab = $scope.currentTab;
		$http({
            method: "GET",
            url: "/navi/dafaultTab",
            params: {}
        }).then(function(response){
            console.log("currentTab=" + response.data.tab);
            currentTab = response.data.tab;
        }).catch(function(data){
		    console.log("error data=" + data);
	    });
		return currentTab;
	};
}]);