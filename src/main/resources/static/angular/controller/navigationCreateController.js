/**
 * navigationCreateController
 */

cmndProjectApps.controller('navigationCreateController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationCreateController');
        $rootScope.hitSelectTab($("#nav_cms"));
}]);