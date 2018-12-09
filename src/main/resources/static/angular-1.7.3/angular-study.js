

  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.firstName1= "John";
    $scope.lastName1= "Doe";
  });
  var apps = angular.module('myApps', []);
  apps.controller('myCtrls', function($scope, $location) {
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
  }).controller('myCtrl1', function ($scope,$rootScope) {
        $scope.first = 'ctrl局部first';
        $rootScope.first = '全局first';
  }).controller('myCtrl2', function ($scope,$rootScope) {
        $scope.second = 'ctrl2局部second';
        $rootScope.second = '全局second';    
  }).filter('reverse', function() { //可以注入依赖
        return function(text) {
            return text.split("").reverse().join("");
        }
  });
  
