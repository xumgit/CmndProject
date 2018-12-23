/**
 * navigationAdminController
 */

cmndProjectApps.controller('navigationAdminController', ['$scope', '$rootScope', '$http', '$location', 
'locals', '$state', '$stateParams', 'navigationService',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, navigationService) {
        console.log('navigationAdminController');
        
        $scope.admin_main_nav_tab = "admin";

        $scope.initSelectAdminSubTabs = function() {         
            //var sub_nav_tab = $rootScope.getCurrentNavTab($scope.admin_main_nav_tab);
            //$scope.selectTabsAndGoto($scope.admin_main_nav_tab, sub_nav_tab);
        };

        $("#admin_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var admin_sub_tab = $(this).attr("tabs-id");              
                console.log("navigationAdminController=>admin_sub_tab:" + admin_sub_tab);
                locals.set("admin_sub_tab", admin_sub_tab);
                $scope.selectTabs($scope.admin_main_nav_tab, admin_sub_tab);
        	});
        });
}]);