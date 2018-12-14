/**
 * navigationLogoutController
 */

cmndProjectApps.controller('navigationLogoutController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationLogoutController');
        $rootScope.hitSelectTab($("#nav_logout"));
}]);