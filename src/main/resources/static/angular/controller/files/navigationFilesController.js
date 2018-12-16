/**
 * navigationFilesController
 */

cmndProjectApps.controller('navigationFilesController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationFilesController');
        $scope.hitSelectTab($("#nav_files"));
}]);