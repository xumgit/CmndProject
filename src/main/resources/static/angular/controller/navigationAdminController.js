/**
 * navigationAdminController
 */

cmndProjectApps.controller('navigationAdminController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationAdminController');
        $rootScope.hitSelectTab($("#nav_admin"));
}]);