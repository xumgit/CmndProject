/**
 * navigationMonitorsController
 */

cmndProjectApps.controller('navigationMonitorsController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationMonitorsController');
        $rootScope.hitSelectTab($("#nav_monitors"));
}]);