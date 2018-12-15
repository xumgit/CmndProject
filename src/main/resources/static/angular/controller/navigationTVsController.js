/**
 * navigationTVsController
 */

cmndProjectApps.controller('navigationTVsController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationTVsController');
        $rootScope.hitSelectTab($("#nav_tvs"));
        $("#tabs_tvs li a").each(function(index, ele){  	
        	$(this).click(function(){
        		console.log(index + " - " + ele);
        	});
        });
        
        $scope.loadTabContent = function() {
        	
        };
}]);