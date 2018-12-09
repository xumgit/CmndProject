
// http://www.runoob.com/angularjs/angularjs-tutorial.html
var apps = angular.module('myApps', ['ngAnimate','ngRoute']);

apps.value("defaultInput", 5);

apps.config(function($provide) {
    $provide.provider('MathService', function() {
       this.$get = function() {
          var factory = {};
          
          factory.multiply = function(a, b) {
             return a * b;
          }
          return factory;
       };
    });
 });

/*
 * $routeProvider.when(url,{
    		template:string, //在ng-view中插入简单的html内容
    		templateUrl:string, //在ng-view中插入html模版文件
    		controller:string,function / array, //在当前模版上执行的controller函数
    		controllerAs:string, //为controller指定别名
    		redirectTo:string,function, //重定向的地址
    		resolve:object<key,function> //指定当前controller所依赖的其他模块
	});
 * */
apps.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'embedded.home.html',
        controller: 'HomeController'
    }).
    when('/about', {
        templateUrl: 'embedded.about.html',
        controller: 'AboutController'
    }).
    otherwise({
        redirectTo: '/home'
    });
});

apps.service('CalcService', function(MathService){
   this.square = function(a) {
      return MathService.multiply(a,a);
   }
});

apps.service('customerService', function() {
    this.myFunc = function (x) {
        return x + "_customer";
    }
});

/*
 * E 作为元素名使用 A 作为属性使用
 * C 作为类名使用 M 作为注释使用
 * */
apps.directive("runoobDirective", function() {
    return {
    		restrict : "AEC", // "A"/"AE"...
        template : "<span style='color:red;'>自定义指令!</span>"
    };
});
apps.controller('myCtrl1', function($scope, $location) {
	$scope.name = "Runoob"; 
	$scope.localurl = $location.absUrl();
	$scope.sayHello = function() {
		$scope.greeting = 'Hello ' + $scope.name + '!';
	}   
	$scope.printName = function() {
		return $scope.name;
	}  
	$scope.names = [
		{name:'Jani',country:'Norway'},
		{name:'Hege',country:'Sweden'},
		{name:'Kai',country:'Denmark'}
	];      
}).controller('myCtrl2', function ($scope,$rootScope) {
	$scope.first = 'ctrl2局部first';
	$rootScope.rootVar = 'ctrl2内部定义全局root';
}).controller('myCtrl3', function ($scope,$rootScope) {
	$scope.second = 'ctrl3局部second';
	$rootScope.rootVar = 'ctrl3内部定义全局root';    
}).controller('myCtrl4', function($scope, $http, $interval, customerService) {
	$http({
		 url: "/angularjs/getdata",         
		 method: "GET", 
		 params: {
			 "id": 1,
			 "name": "test",
			 "age": 23
		 }
	}).then(function(response, status, header, config, statusText){
	 	console.log("response="+response+",status="+status);
	 	console.log("header="+header+",config="+config+",statusText="+statusText);
	 	//var data = $.parseJSON(response.data);
	 	$scope.status = response.data.status;
	 	$scope.theTime = new Date().toLocaleTimeString();
	    $interval(function() {
	        $scope.theTime = new Date().toLocaleTimeString();
	    }, 1000);
	    $scope.customer = customerService.myFunc("Service");
	}).catch(function(data,header,config,status){
		$scope.status = data;
	});
}).controller('myCtrl5', function ($scope,$rootScope) {
	$scope.sites1 = [
	    {site : "Google", url : "http://www.google.com"},
	    {site : "Runoob", url : "http://www.runoob.com"},
	    {site : "Taobao", url : "http://www.taobao.com"}
	];
	$scope.sites2 = { //key-value
			site01 : "Google",
		    site02 : "Runoob",
		    site03 : "Taobao"
	};
	$scope.cars = {
			car01 : {brand : "Ford", model : "Mustang", color : "red"},
			car02 : {brand : "Fiat", model : "500", color : "white"},
			car03 : {brand : "Volvo", model : "XC90", color : "black"}
	};
}).controller('myCtrl6', function ($scope,$rootScope,$http) {
	$http({
		 url: "/angularjs/getAuthor",         
		 method: "GET"
	}).then(function(response, status, header, config, statusText){
		console.log("response="+response);
	 	$scope.authorInfo = response.data.rows;
	}).catch(function(data,header,config,status){
		console.log("data="+data);
		$scope.status = data;
	});
}).controller('myCtrl7', function ($scope) {
	$scope.firstName = "John",
    $scope.lastName = "Doe"
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
}).controller('myCtrl8', function ($scope) {
	$scope.master = {first: "John", last: "Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
}).controller('myCtrl9', function ($scope) {
	$scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
}).controller('myCtrl10', function ($scope) {
	$scope.x1 = "RUNOOB";
    $scope.x2 = angular.$$lowercase($scope.x1);
    $scope.x3 = angular.isString($scope.x1);
}).controller('myCtrl11', function ($scope, CalcService, defaultInput) {
	$scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);

    $scope.square = function() {
       $scope.result = CalcService.square($scope.number);
    }
}).controller('HomeController', function ($scope, $route) { 
	console.log("route="+$route);
	$scope.$route = $route;
}).controller('AboutController', function ($scope, $route) { 
	console.log("route="+$route);
	$scope.$route = $route;
}).filter('reverse', function() {
	return function(text) {
		return text.split("").reverse().join("");
	}
});