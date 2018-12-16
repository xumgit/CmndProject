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
    .state("monitors.monitors1", {
        url: "/monitors1",
        templateUrl: "/monitors/index/monitors1"
    })
    .state("monitors.monitors2", {
        url: "/monitors2",
        templateUrl: "/monitors/index/monitors2"
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
    .state("files.tabs_firmware", {
        url: "/tabs_firmware",
		templateUrl: "/files/index/tabs_firmware"
    })
    .state("files.tabs_clone", {
        url: "/tabs_clone",
		templateUrl: "/files/index/tabs_clone"
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
    .state("create.create1", {
        url: "/create1",
		templateUrl: "/create/index/create1"
    })
    .state("create.create2", {
        url: "/create2",
		templateUrl: "/create/index/create2"
    })
    
    // Admin ui-route
    .state("admin", {
        url: "/admin",
		templateUrl: "/admin/index"
    })
    .state("admin.users", {
        url: "/users",
		templateUrl: "/admin/index/users"
    })
    .state("admin.changePassword", {
        url: "/changePassword",
		templateUrl: "/admin/index/changePassword"
    })
    .state("admin.systemLog", {
        url: "/systemLog",
		templateUrl: "/admin/index/systemLog"
    })
    .state("admin.locationConfig", {
        url: "/locationConfig",
		templateUrl: "/admin/index/locationConfig"
    })
    .state("admin.pmsConfig", {
        url: "/pmsConfig",
		templateUrl: "/admin/index/pmsConfig"
    })
    .state("admin.exapi", {
        url: "/exapi",
		templateUrl: "/admin/index/exapi"
    })
    .state("admin.weather", {
        url: "/weather",
		templateUrl: "/admin/index/weather"
    })
    
    // Logout ui-route
    .state("logout", {
        url: "/logout",
		templateUrl: "/logout/index"
    })
    .state("logout.logout1", {
        url: "/logout1",
		templateUrl: "/logout/index/logout1"
    })
    .state("logout.logout2", {
        url: "/logout2",
		templateUrl: "/logout/index/logout2"
	});
});