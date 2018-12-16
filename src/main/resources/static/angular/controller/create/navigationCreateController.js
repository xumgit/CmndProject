/**
 * navigationCreateController
 */

cmndProjectApps.controller('navigationCreateController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationCreateController');
        $scope.hitSelectTab($("#nav_cms"));
}]);