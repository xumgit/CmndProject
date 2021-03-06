//定义主模块并注入依赖
angular.module("voteApp", ["ngRoute", "toaster"]);

//路由配置
angular.module("voteApp").config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/player/list", {
		templateUrl: "/test/angularjsproject/player/list",
		controller: playerListCtrl
	}).when("/player/view/:playerId", {
		templateUrl: "/test/angularjsproject/player/view",
		controller: playerViewCtrl
	}).when("/player/view/:playerId/:playerName", {
		templateUrl: "/test/angularjsproject/player/view",
		controller: playerViewCtrl
	}).when("/player/add", {
		templateUrl: "/test/angularjsproject/player/add",
		controller: playerAddCtrl
	}).when("/player/edit/:playerId", {
		templateUrl: "/test/angularjsproject/player/edit",
		controller: playerEditCtrl
	}).when("/angularjsproject/testdemo", {
		templateUrl: "/test/angularjsproject/testdemo",
		controller: testDemoCtrl
	}).otherwise({
		redirectTo: "/player/list"
	});
}]);

angular.module("voteApp").directive('bindToasterHtml', [function () {
    return {
        template: "<span style='color:white;'>{{directiveData.content}}</span>"
    };
}]);