/**
 * navigationTVsController
 */

cmndProjectApps.controller('navigationTVsController', ['$scope', '$rootScope', '$http', '$location', 
'locals', '$state', '$stateParams', 'navigationService','$interval','$timeout',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, navigationService, $interval, $timeout) {
        console.log('navigationTVsController');

        $scope.tvs_main_nav_tab = "tvs";

        $scope.initSelectTvsSubTabs = function() {         
            //var sub_nav_tab = $rootScope.getCurrentNavTab($scope.tvs_main_nav_tab);
            //console.log("TVs=>sub_nav_tab:" + sub_nav_tab);
            //$scope.gotoSubTabPage(sub_nav_tab);
            //$scope.selectTabsAndGoto($scope.tvs_main_nav_tab, sub_nav_tab);          
        };

        $scope.timer = $interval(function(){
            navigationService.getIptvPollingData().then(function(data){
                //console.log("status:" + data.status);
                if (data.status != "N") {
                    $('#grid_tvList').bootgrid('reload');
                }
            });
        }, 3000); 

        $("#tvs_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var tvs_sub_tab = $(this).attr("tabs-id");              
                console.log("tvs_sub_tab:" + tvs_sub_tab);
                locals.set("tvs_sub_tab", tvs_sub_tab);
                $scope.selectTabs($scope.tvs_main_nav_tab, tvs_sub_tab);
        	});
        });
          
}]);