/**
 * navigationCreateController
 */

cmndProjectApps.controller('navigationCreateController', ['$scope', '$rootScope', '$http', '$location', 
'locals', '$state', '$stateParams', 'navigationService',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, navigationService) {
        console.log('navigationCreateController');
        
        $scope.create_main_nav_tab = "create";

        $scope.initSelectCreateSubTabs = function() { 
            //console.log("init=>navigationCreateController");        
            //var sub_nav_tab = $rootScope.getCurrentNavTab($scope.create_main_nav_tab);
            //$scope.selectTabsAndGoto($scope.create_main_nav_tab, sub_nav_tab);
        };

        $("#create_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var create_sub_tab = $(this).attr("tabs-id");              
                console.log("navigationCreateController=>create_sub_tab:" + create_sub_tab);
                locals.set("create_sub_tab", create_sub_tab);
                $scope.selectTabs($scope.create_main_nav_tab, create_sub_tab);
        	});
        });

}]);