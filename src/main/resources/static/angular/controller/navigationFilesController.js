/**
 * navigationFilesController
 */

cmndProjectApps.controller('navigationFilesController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationFilesController');
        $rootScope.hitSelectTab($("#nav_files"));
}]);