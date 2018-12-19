/**
 * navigationTVsController
 */

cmndProjectApps.controller('navigationTVsController', ['$scope', '$rootScope', '$http', '$location', 
'locals', '$state', '$stateParams', 'navigationService',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, navigationService) {
        console.log('navigationTVsController');

        $scope.tvs_main_nav_tab = "tvs";

        $scope.initSelectTvsSubTabs = function() {         
            var sub_nav_tab = $scope.getCurrentNavTab($scope.tvs_main_nav_tab);
            $scope.selectTabsAndGoto($scope.tvs_main_nav_tab, sub_nav_tab);
        };

        $("#tvs_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var tvs_sub_tab = $(this).attr("tabs-id");              
                console.log("tvs_sub_tab:" + tvs_sub_tab);
                locals.set("tvs_sub_tab", tvs_sub_tab);
                $scope.selectTabsAndGoto($scope.tvs_main_nav_tab, tvs_sub_tab);
        	});
        });
          
}]);