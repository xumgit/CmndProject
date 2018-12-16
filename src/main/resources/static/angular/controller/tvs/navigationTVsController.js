/**
 * navigationTVsController
 */

cmndProjectApps.controller('navigationTVsController', ['$scope', '$rootScope', '$http', '$location', 
'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('navigationTVsController');
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