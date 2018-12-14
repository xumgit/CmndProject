/**
 * navigationTVsController
 */

cmndProjectApps.controller('navigationTVsController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationTVsController');
        $rootScope.hitSelectTab($("#nav_tvs"));
}]);