/**
 * 
 */

cmndProjectApps.config(function($stateProvider, $urlRouterProvider) {

    // default ui-route
    $urlRouterProvider.otherwise("/");
    $stateProvider
    // Monitors ui-route
    .state("monitors", {
        url: "/monitors",
        templateUrl: "/monitors/index"
    })
    .state("monitors.tabs_monitors1", {
        url: "/tabs_monitors1",
        templateUrl: "/monitors/index/tabs_monitors1"
    })
    .state("monitors.tabs_monitors2", {
        url: "/tabs_monitors2",
        templateUrl: "/monitors/index/tabs_monitors2"
    })
    
    // TVs ui-route
    .state("tvs", {
        url: "/tvs",
		templateUrl: "/tvs/index"
    })
    .state("tvs.tabs_msg", {
        url: "/tabs_msg",
		templateUrl: "/tvs/index/tabs_msg"
    })
    .state("tvs.tabs_rooms", {
        url: "/tabs_rooms",
		templateUrl: "/tvs/index/tabs_rooms"
    })
    .state("tvs.tabs_tvList", {
        url: "/tabs_tvList",
		templateUrl: "/tvs/index/tabs_tvList"
    })
    .state("tvs.tabs_groupList", {
        url: "/tabs_groupList",
		templateUrl: "/tvs/index/tabs_groupList"
    })
    .state("tvs.tabs_rfSetting", {
        url: "/tabs_rfSetting",
		templateUrl: "/tvs/index/tabs_rfSetting"
    })
    
    // Files ui-route
    .state("files", {
        url: "/files",
		templateUrl: "/files/index"
    })
    .state("files.tabs_firmwareList", {
        url: "/tabs_firmwareList",
		templateUrl: "/files/index/tabs_firmwareList"
    })
    .state("files.tabs_cloneList", {
        url: "/tabs_cloneList",
		templateUrl: "/files/index/tabs_cloneList"
    })
    .state("files.tabs_settingPackage", {
        url: "/tabs_settingPackage",
		templateUrl: "/files/index/tabs_settingPackage"
    })
    .state("files.tabs_channelPackage", {
        url: "/tabs_channelPackage",
		templateUrl: "/files/index/tabs_channelPackage"
    })
    .state("files.tabs_appPackage", {
        url: "/tabs_appPackage",
		templateUrl: "/files/index/tabs_appPackage"
    })
    .state("files.tabs_banners", {
        url: "/tabs_banners",
		templateUrl: "/files/index/tabs_banners"
    })
    .state("files.tabs_play", {
        url: "/tabs_play",
		templateUrl: "/files/index/tabs_play"
    })

    // Create ui-route
    .state("create", {
        url: "/create",
		templateUrl: "/create/index"
    })
    .state("create.tabs_create1", {
        url: "/tabs_create1",
		templateUrl: "/create/index/tabs_create1"
    })
    .state("create.tabs_create2", {
        url: "/tabs_create2",
		templateUrl: "/create/index/tabs_create2"
    })
    
    // Admin ui-route
    .state("admin", {
        url: "/admin",
		templateUrl: "/admin/index"
    })
    .state("admin.tabs_users", {
        url: "/tabs_users",
		templateUrl: "/admin/index/tabs_users"
    })
    .state("admin.tabs_changePassword", {
        url: "/tabs_changePassword",
		templateUrl: "/admin/index/tabs_changePassword"
    })
    .state("admin.tabs_systemLog", {
        url: "/tabs_systemLog",
		templateUrl: "/admin/index/tabs_systemLog"
    })
    .state("admin.tabs_locationConfig", {
        url: "/tabs_locationConfig",
		templateUrl: "/admin/index/tabs_locationConfig"
    })
    .state("admin.tabs_pmsConfig", {
        url: "/tabs_pmsConfig",
		templateUrl: "/admin/index/tabs_pmsConfig"
    })
    .state("admin.tabs_exapi", {
        url: "/tabs_exapi",
		templateUrl: "/admin/index/tabs_exapi"
    })
    .state("admin.tabs_weather", {
        url: "/tabs_weather",
		templateUrl: "/admin/index/tabs_weather"
    })
    
    // Logout ui-route
    .state("logout", {
        url: "/logout",
		templateUrl: "/logout/index"
    })
    .state("logout.tabs_logout1", {
        url: "/tabs_logout1",
		templateUrl: "/logout/index/tabs_logout1"
    })
    .state("logout.tabs_logout2", {
        url: "/tabs_logout2",
		templateUrl: "/logout/index/tabs_logout2"
	});
});