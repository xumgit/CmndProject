/**
 * navigationLogoutController
 */

cmndProjectApps.controller('navigationLogoutController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationLogoutController');
        
        $scope.logout_main_nav_tab = "logout";

        $scope.initSelectLogoutSubTabs = function() { 
            //console.log("init=>navigationLogoutController");        
            //var sub_nav_tab = $rootScope.getCurrentNavTab($scope.create_main_nav_tab);
            //$scope.selectTabsAndGoto($scope.create_main_nav_tab, sub_nav_tab);
        };

        $("#logout_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var logout_sub_tab = $(this).attr("tabs-id");              
                console.log("navigationLogoutController=>logout_sub_tab:" + logout_sub_tab);
                locals.set("logout_sub_tab", logout_sub_tab);
                $scope.selectTabs($scope.logout_main_nav_tab, logout_sub_tab);
        	});
        });
}]);