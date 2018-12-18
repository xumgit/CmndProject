/**
 * navigationTVsController
 */

cmndProjectApps.controller('navigationTVsController', ['$scope', '$rootScope', '$http', '$location', 
'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationTVsController');

        

        $scope.initSelectTvsSubTabs = function() {
            var nav_current_tabs = locals.get("nav_current_tabs", "tvs.tabs_tvList");
            var navs = $scope.splitCurrentTab(nav_current_tabs);
            var tabs_key = "tvs_tabs_tvList";           
            if (navs.length > 1) {
                tabs_key = navs[0] + "_" + navs[1];
            }
            //$scope.hitSelectSubTabs($scope.tvs_tabs_flag, tabs_key);
        };

        $("#tvs_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var current_tabs = $(this).attr("id");              
                console.log(current_tabs);
                //$scope.hitSelectSubTabs($scope.tvs_tabs_flag, current_tabs);
        	});
        });

        // $scope.hitSelectTab($("#nav_tvs"));       
        // var tvs_current_tabs = locals.get("tvs_current_tabs", "tvs_tabs_tvList");
        // console.log("tvs_current_tabs:" + tvs_current_tabs);
        // var url = $scope.checkTVsTabsUrl(tvs_current_tabs);
        // $scope.loadTabsContentData(url);
        // $scope.hitSelectTab($("#" + tvs_current_tabs));

        // $("#tvs_tabs li a").each(function(index, ele){  	
        // 	$(this).click(function(){
        //         var current_tabs = $(this).attr("id");
        //         locals.set("tvs_current_tabs", current_tabs);
        //         //console.log(index + " - " + ele + " - " + current_tabs);
        //         var url = $scope.checkTVsTabsUrl(current_tabs);
        //         $scope.loadTabsContentData(url);
        // 	});
        // });

            
}]);