/**
 * root apps
 */

var cmndProjectApps = angular.module('cmndProject', ['ngAnimate', 'ngCookies', 'ui.router', 'toaster', 'ui.bootstrap','ui.grid','ui.grid.selection', 'ui.grid.edit',
	'ui.grid.exporter','ui.grid.pagination','ui.grid.resizeColumns','ui.grid.autoResize']);
cmndProjectApps.run(function($rootScope, $state, locals) {
    window.myAppErrorLog = [];
    
    $state.defaultErrorHandler(function(error) {
        // This is a naive example of how to silence the default error handler.
        window.myAppErrorLog.push(error);
    });

    // $rootScope.selectTabsAndGoto = function(main_nav, sub_nav) {
    //     var main_sub_nav = main_nav + "_" + sub_nav;
    //     var ui_route_pattern = main_nav + "." + sub_nav; 
    //     if (!$rootScope.checkMatchUrlPattern(main_nav, sub_nav)) {
    //          main_nav = "tvs";
    //          sub_nav = "tabs_tvList";
    //          main_sub_nav = main_nav + "_" + sub_nav;
    //          ui_route_pattern = main_nav + "." + sub_nav;
    //     }            
    //     var currentNavSubTab = $rootScope.checkCurentNavSubTab(main_sub_nav);
    //     $rootScope.hitSelectTabs($scope.main_nav_tabs, main_nav);       
    //     $rootScope.hitSelectTabs(currentNavSubTab, sub_nav);
    //     locals.set("main_nav_tab", main_nav);
    //     locals.set("sub_nav_tab", sub_nav);
       
    //     console.log("selectTabsAndGoto=>main_sub_nav:" + main_sub_nav + ",ui_route_pattern:" + ui_route_pattern);
    //     //$state.go("/");
    //     //$state.go(ui_route_pattern);
    //     //$state.go(ui_route_pattern, {}, {reload: true});
    //     //  if (obj != null) {        
    //     //     var r = "#" + main_nav + "/" + sub_nav;
    //     //     console.log("r:" + r);
    //     //     $(this).attr("sref", main_nav + "." + sub_nav);
    //     //     $(this).attr("href", r);
    //     // }
    // };

    $rootScope.hitSelectTabs = function(tabs_flag, tabs_key) {
        angular.forEach(tabs_flag, function(value, key){
            //console.log(key + "---->" + value);
            if (key.indexOf(tabs_key) > -1) {
                tabs_flag[key] = true;
            } else {
                tabs_flag[key] = false;
            }
        })
        return tabs_flag;
    };

    $rootScope.getCurrentNavTab = function(currentNav) {
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

    $rootScope.checkMatchUrlPattern = function(main_nav, sub_nav) {
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
    			break;
        }  
        return isMatch; 		
    };

    $rootScope.checkCurentNavSubTab = function(subTab, sub_nav_monitors_tabs, sub_nav_tvs_tabs, sub_nav_files_tabs,
                                                sub_nav_create_tabs, sub_nav_admin_tabs, sub_nav_logout_tabs) {
    	var curentNavSubTab = sub_nav_tvs_tabs;
    	if (subTab != "" || sub != null || sub != undefined) {
    		switch(subTab) {
    			case "monitors_tabs_monitors1":
    			case "monitors_tabs_monitors2":
    				curentNavSubTab = sub_nav_monitors_tabs;
    				break;
    			case "tvs_tabs_msg":
    			case "tvs_tabs_rooms":
    			case "tvs_tabs_tvList":
    			case "tvs_tabs_groupList":
    			case "tvs_tabs_rfSetting":
    				curentNavSubTab = sub_nav_tvs_tabs;
    				break;
    			case "files_tabs_firmwareList":
    			case "files_tabs_cloneList":
    			case "files_tabs_settingPackage":
    			case "files_tabs_channelPackage":
    			case "files_tabs_appPackage":
    			case "files_tabs_banners":
    			case "files_tabs_play":
    				curentNavSubTab = sub_nav_files_tabs;
    				break;
    			case "create_tabs_create1":
    			case "create_tabs_create2":
    				curentNavSubTab = sub_nav_create_tabs;
    				break;
    			case "admin_tabs_users":
    			case "admin_tabs_changePassword":
    			case "admin_tabs_systemLog":
    			case "admin_tabs_LocationConfig":
    			case "admin_tabs_pmsConfig":
    			case "admin_tabs_exapi":
    			case "admin_tabs_weather":
    				curentNavSubTab = sub_nav_admin_tabs;
    				break;
    			case "logout_tabs_logout1":
    			case "logout_tabs_logout2":
    				curentNavSubTab = sub_nav_logout_tabs;
    				break;
    			default :
    				curentNavSubTab = sub_nav_tvs_tabs;
    				break;
    		}   		
    	}
    	return curentNavSubTab;
    };
})
// cmndProjectApps.config(["$routeProvider", function($routeProvider) {
// 	$routeProvider.when("/monitors", {
// 		templateUrl: "/monitors/index",
// 		controller: "navigationMonitorsController"
// 	}).when("/tvs", {
// 		templateUrl: "/tvs/index",
// 		controller: "navigationTVsController"
// 	}).when("/files", {
// 		templateUrl: "/files/index",
// 		controller: "navigationFilesController"
// 	}).when("/create", {
// 		templateUrl: "/create/index",
// 		controller: "navigationCreateController"
// 	}).when("/admin", {
// 		templateUrl: "/admin/index",
// 		controller: "navigationAdminController"
// 	}).when("/logout", {
// 		templateUrl: "/logout/index",
// 		controller: "navigationLogoutController"
// 	}).otherwise({
// 		redirectTo: "/tvs"
// 	});
// }])