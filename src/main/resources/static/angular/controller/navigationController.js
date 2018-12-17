/**
 * 
 */

cmndProjectApps.controller('navigationController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
'$state', '$stateParams', 'navigationService', function($scope, $rootScope, $http, $location, locals, $state, 
    $stateParams, navigationService) {

	$scope.tvs_tabs_content = "";
    //$scope.nav_flag = {"tvs":false,"tvs":false,"tvs":false,"tvs":false,"tvs":false,"tvs":false};   
	$scope.initData = function() {	
        console.log("navigationController => initData");
        var urlPath = $location.path();
        console.log("urlPath:" + urlPath);
        var nav_current_tabs = locals.get("nav_current_tabs", "tvs.tabs_tvList");
        console.log("nav_current_tabs:" + nav_current_tabs);
        
        var mainNav = $("#nav_tvs");
        var navs = $scope.splitCurrentTab(nav_current_tabs);
        if (navs.length > 1) {
            console.log(navs[0] + "_" + navs[1]);
            mainNav = $("#nav_" + navs[0]);
            subNav = $("#" + navs[0] + "_" + navs[1]);
        }
        if (mainNav.length > 0) {
            $scope.hitSelectTab(mainNav);
        } else {
            console.log("mainNav is not exist");
        }

        $state.go(nav_current_tabs);
	};
    
    $("#navbar ul li a").each(function(index, ele){
        $(this).click(function(){
            //var tab = $(this).attr("id");
            //console.log("tab:" + tab);  
            //var nav_current_tabs = locals.get("nav_current_tabs", "tvs.tabs_tvList");  
            c//onsole.log("nav_current_tabs:" + nav_current_tabs);
            $state.go(nav_current_tabs);     
        });
    });

    $scope.splitCurrentTab = function(nav_current_tabs) {
        var navs = new Array();
        if (nav_current_tabs != "" || nav_current_tabs != null 
                || nav_current_tabs != undefined) {
            navs = nav_current_tabs.split(".");
        }
        return navs;
    };

    $scope.hitSelectSubTabs = function(tabs_flag, tabs_key) {
        angular.forEach(tabs_flag, function(value, key){
            console.log(key + "---->" + value);
            if (key == tabs_key) {
                tabs_flag[key] = true;
            } else {
                tabs_flag[key] = false;
            }
        })
    };

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