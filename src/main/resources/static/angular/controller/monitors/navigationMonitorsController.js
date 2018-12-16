/**
 * navigationMonitorsController
 */

cmndProjectApps.controller('navigationMonitorsController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationMonitorsController');
        $scope.hitSelectTab($("#nav_monitors"));
}]);