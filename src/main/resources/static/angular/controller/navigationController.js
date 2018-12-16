/**
 * 
 */

cmndProjectApps.controller('navigationController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
'$state', '$stateParams', 'navigationService', function($scope, $rootScope, $http, $location, locals, $state, 
    $stateParams, navigationService) {

	$scope.tvs_tabs_content = "";
	
	$scope.initData = function() {	
        console.log("navigationController => initData");
        var urlPath = $location.path();
        console.log("urlPath:" + urlPath);
        var gotoUrl = locals.get("nav_current_tabs", "tvs.tabs_tvList");
        //console.log("gotoUrl:" + gotoUrl);
        $state.go(gotoUrl);
	};
    
    $("#navbar ul li a").each(function(index, ele){
        $(this).click(function(){
            var tab = $(this).attr("id");
            console.log("tab:" + tab);  
            var gotoUrl = locals.get("nav_current_tabs", "tvs.tabs_tvList");  
            console.log("gotoUrl:" + gotoUrl);
        $state.go(gotoUrl);     
        });
    });

    $scope.hitSelectTab = function(obj) {
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
	}; 
    
     $scope.loadTVListContent = function() {
            console.log("loadTVListContent");
        }; 

    $scope.loadTabsContentData = function(url) {
        navigationService.getTabsContentData(url).then(function(data) {
            $scope.tvs_tabs_content = data;
		});
    };

}]);