/**
 * navigationMonitorsController
 */

cmndProjectApps.controller('navigationMonitorsController', ['$scope', '$rootScope', '$http', '$location', 'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationMonitorsController');

        $scope.monitors_main_nav_tab = "monitors";

        $scope.initSelectMonitorsSubTabs = function() { 
            //console.log("init=>navigationMonitorsController");        
            //var sub_nav_tab = $rootScope.getCurrentNavTab($scope.create_main_nav_tab);
            //$scope.selectTabsAndGoto($scope.create_main_nav_tab, sub_nav_tab);
        };

        $("#monitors_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var monitors_sub_tab = $(this).attr("tabs-id");              
                console.log("navigationMonitorsController=>monitors_sub_tab:" + monitors_sub_tab);
                locals.set("monitors_sub_tab", monitors_sub_tab);
                $scope.selectTabs($scope.monitors_main_nav_tab, monitors_sub_tab);
        	});
        });
}]);