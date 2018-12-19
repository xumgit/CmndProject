/**
 * 
 */

cmndProjectApps.controller('navigationController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
'$state', '$stateParams', 'navigationService', function($scope, $rootScope, $http, $location, locals, $state, 
    $stateParams, navigationService) {

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
        //var urlPath = $location.path();
        //console.log("urlPath:" + urlPath);
        var main_nav_tab = locals.get("main_nav_tab", "tvs");
        var sub_nav_tab = locals.get("sub_nav_tab", "tabs_tvList");
        console.log("main_nav_tab:" + main_nav_tab + ",sub_nav_tab:" + sub_nav_tab);
        $scope.selectTabsAndGoto(main_nav_tab, sub_nav_tab);
	};
    
    $("#navbar ul li a").each(function(index, ele){
        $(this).click(function(){
            var main_nav_tab = $(this).attr("tabs-id");
            console.log("main_nav_tab:" + main_nav_tab);            
            var sub_nav_tab = $scope.getCurrentNavTab(main_nav_tab);
            $scope.selectTabsAndGoto(main_nav_tab, sub_nav_tab);   
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
    
    $scope.selectTabsAndGoto = function(main_nav, sub_nav) {
        var main_sub_nav = main_nav + "_" + sub_nav;
        var ui_route_pattern = main_nav + "." + sub_nav; 
        if (!$scope.checkMatchUrlPattern(main_nav, sub_nav)) {
             main_nav = "tvs";
             sub_nav = "tabs_tvList";
             main_sub_nav = main_nav + "_" + sub_nav;
             ui_route_pattern = main_nav + "." + sub_nav;
        }            
        var currentNavSubTab = $scope.checkCurentNavSubTab(main_sub_nav);
        $scope.hitSelectTabs($scope.main_nav_tabs, main_nav);       
        $scope.hitSelectTabs(currentNavSubTab, sub_nav);
        locals.set("main_nav_tab", main_nav);
        locals.set("sub_nav_tab", sub_nav);
        $state.go(ui_route_pattern);
    };

    $scope.getCurrentNavTab = function(currentNav) {
        var tab = "";
        switch(currentNav) {
    		case "monitors":
                tab = locals.get("monitors_sub_tab", "tabs_monitors2");
    			break;
    		case "tvs":
                tab = locals.get("tvs_sub_tab", "tabs_tvList");
    			break;
    		case "files":
                tab = locals.get("files_sub_tab", "tabs_cloneList");
    			break;
    		case "create":
                tab = locals.get("create_sub_tab", "tabs_create2");
    			break;
    		case "admin":
                tab = locals.get("admin_sub_tab", "tabs_changePassword");
    			break;
    		case "logout":
                tab = locals.get("logout_sub_tab", "tabs_logout1");
    			break;
        }
        return tab;
    }

    $scope.checkMatchUrlPattern = function(main_nav, sub_nav) {
        var isMatch = false;
    	switch(sub_nav) {
    		case "tabs_monitors1":
    		case "tabs_monitors2":
    			if (main_nav == "monitors") {
                    isMatch = true;
                }
    			break;
    		case "tabs_msg":
    		case "tabs_rooms":
    		case "tabs_tvList":
    		case "tabs_groupList":
    		case "tabs_rfSetting":
    			if (main_nav == "tvs") {
                    isMatch = true;
                }
    			break;
    		case "tabs_firmwareList":
    		case "tabs_cloneList":
    		case "tabs_settingPackage":
    		case "tabs_channelPackage":
    		case "tabs_appPackage":
    		case "tabs_banners":
    		case "tabs_play":
    			if (main_nav == "files") {
                    isMatch = true;
                }
    			break;
    		case "tabs_create1":
    		case "tabs_create2":
    			if (main_nav == "create") {
                    isMatch = true;
                }
    			break;
    		case "tabs_users":
    		case "tabs_changePassword":
    		case "tabs_systemLog":
    		case "tabs_LocationConfig":
    		case "tabs_pmsConfig":
    		case "tabs_exapi":
    		case "tabs_weather":
    			if (main_nav == "admin") {
                    isMatch = true;
                }
    			break;
    		case "tabs_logout1":
    		case "tabs_logout2":
    			if (main_nav == "logout") {
                    isMatch = true;
                }
    			break;
    		default :
    			curentNavSubTab = $scope.sub_nav_tvs_tabs;
    			break;
        }  
        return isMatch; 		
    };

    $scope.checkCurentNavSubTab = function(subTab) {
    	var curentNavSubTab = $scope.sub_nav_tvs_tabs;
    	if (subTab != "" || sub != null || sub != undefined) {
    		switch(subTab) {
    			case "monitors_tabs_monitors1":
    			case "monitors_tabs_monitors2":
    				curentNavSubTab = $scope.sub_nav_monitors_tabs;
    				break;
    			case "tvs_tabs_msg":
    			case "tvs_tabs_rooms":
    			case "tvs_tabs_tvList":
    			case "tvs_tabs_groupList":
    			case "tvs_tabs_rfSetting":
    				curentNavSubTab = $scope.sub_nav_tvs_tabs;
    				break;
    			case "files_tabs_firmwareList":
    			case "files_tabs_cloneList":
    			case "files_tabs_settingPackage":
    			case "files_tabs_channelPackage":
    			case "files_tabs_appPackage":
    			case "files_tabs_banners":
    			case "files_tabs_play":
    				curentNavSubTab = $scope.sub_nav_files_tabs;
    				break;
    			case "create_tabs_create1":
    			case "create_tabs_create2":
    				curentNavSubTab = $scope.sub_nav_create_tabs;
    				break;
    			case "admin_tabs_users":
    			case "admin_tabs_changePassword":
    			case "admin_tabs_systemLog":
    			case "admin_tabs_LocationConfig":
    			case "admin_tabs_pmsConfig":
    			case "admin_tabs_exapi":
    			case "admin_tabs_weather":
    				curentNavSubTab = $scope.sub_nav_admin_tabs;
    				break;
    			case "logout_tabs_logout1":
    			case "logout_tabs_logout2":
    				curentNavSubTab = $scope.sub_nav_logout_tabs;
    				break;
    			default :
    				curentNavSubTab = $scope.sub_nav_tvs_tabs;
    				break;
    		}   		
    	}
    	return curentNavSubTab;
    }
    
    $scope.hitSelectTabs = function(tabs_flag, tabs_key) {
        angular.forEach(tabs_flag, function(value, key){
            //console.log(key + "---->" + value);
            if (key.indexOf(tabs_key) > -1) {
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