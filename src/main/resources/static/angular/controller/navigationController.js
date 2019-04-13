/**
 * 
 */

cmndProjectApps.controller('navigationController', ['$scope', '$rootScope', '$http', '$location', 
'locals', '$state', '$stateParams', 'navigationService', 
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, navigationService) {

    $scope.main_nav_tabs = {
    		nav_monitors : false,
    		nav_tvs : false,
    		nav_files : false,
    		nav_create : false,
    		nav_admin : false,
    		nav_logout : false
    }; 
    
    $scope.nav_current_tab = {
            nav_monitors : "tabs_monitors2",
    		nav_tvs : "tabs_tvList",
    		nav_files : "tabs_cloneList",
    		nav_create : "tabs_create2",
    		nav_admin : "tabs_users",
    		nav_logout : "tabs_logout1"
    };

    $scope.sub_nav_monitors_tabs = {
    		monitors_tabs_monitors1 : false, 
    		monitors_tabs_monitors2 : false
    };
    
    $scope.sub_nav_tvs_tabs = {
            tvs_tabs_msg : false, 
            tvs_tabs_rooms : false, 
            tvs_tabs_tvList : false, 
            tvs_tabs_groupList : false,
            tvs_tabs_rfSetting : false
    };
    
    $scope.sub_nav_files_tabs = {
    		files_tabs_firmwareList : false, 
    		files_tabs_cloneList : false, 
    		files_tabs_settingPackage : false, 
    		files_tabs_channelPackage : false,
    		files_tabs_appPackage : false,
    		files_tabs_banners : false,
    		files_tabs_play : false
    };
    
    $scope.sub_nav_create_tabs = {
    		create_tabs_create1 : false, 
    		create_tabs_create2 : false
    };
    
    $scope.sub_nav_admin_tabs = {
    		admin_tabs_users : false, 
    		admin_tabs_changePassword : false, 
    		admin_tabs_systemLog : false, 
    		admin_tabs_LocationConfig : false,
    		admin_tabs_pmsConfig : false,
    		admin_tabs_exapi : false,
    		admin_tabs_weather : false
    };
    
    $scope.sub_nav_logout_tabs = {
    		logout_tabs_logout1 : false, 
    		logout_tabs_logout2 : false
    }

	$scope.initData = function() {	
        console.log("navigationController => initData");
        navigationService.executeSqlScript().then(function(data){
            if (data.status == "Y") {
                console.log("navigationController => execute sql success");
                //var urlPath = $location.path();
                //console.log("urlPath:" + urlPath);
                var main_nav_tab = locals.get("main_nav_tab", "tvs");
                var sub_nav_tab = locals.get("sub_nav_tab", "tabs_tvList");
                $scope.selectTabs(main_nav_tab, sub_nav_tab);
            } else {
            	console.log("navigationController => execute sql failed");
            }
        })       
	};
    
    $scope.selectTabs = function(main_nav_tab, sub_nav_tab) {
        var ui_route_pattern = main_nav_tab + "." + sub_nav_tab; 
        var main_sub_nav = main_nav_tab + "_" + sub_nav_tab;      
        if (!$rootScope.checkMatchUrlPattern(main_nav_tab, sub_nav_tab)) {
             main_nav_tab = "tvs";
             sub_nav_tab = "tabs_tvList";
             main_sub_nav = main_nav_tab + "_" + sub_nav_tab;
             ui_route_pattern = main_nav + "." + sub_nav;
        }
        console.log("navigationController=>main_nav_tab:" + main_nav_tab + ",sub_nav_tab:" + sub_nav_tab);
        console.log("navigationController=>ui_route_pattern:" + ui_route_pattern);
        var currentNavSubTab = $rootScope.checkCurentNavSubTab(main_sub_nav, $scope.sub_nav_monitors_tabs, $scope.sub_nav_tvs_tabs, $scope.sub_nav_files_tabs,
                                                                $scope.sub_nav_create_tabs,$scope.sub_nav_admin_tabs,$scope.sub_nav_logout_tabs);
        $rootScope.hitSelectTabs($scope.main_nav_tabs, main_nav_tab);       
        $rootScope.hitSelectTabs(currentNavSubTab, sub_nav_tab);
        locals.set("main_nav_tab", main_nav_tab);
        locals.set("sub_nav_tab", sub_nav_tab);
    };

    $("#navbar ul li a").each(function(index, ele){
        $(this).click(function(){
            var main_nav_tab = $(this).attr("tabs-id");                      
            var sub_nav_tab = $rootScope.getCurrentNavTab(main_nav_tab);
            console.log("navigationController=>main_nav_tab:" + main_nav_tab + ",sub_nav_tab:" + sub_nav_tab);
            $scope.selectTabs(main_nav_tab, sub_nav_tab);   
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
    
    $scope.gotoSubTabPage = function(tabs_id) {
        var ele = "a[tabs-id='" + tabs_id + "']";
        angular.element(ele).click();
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