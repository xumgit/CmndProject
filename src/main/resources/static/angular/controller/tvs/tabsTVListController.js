/**
 * tabsTVListController
 */

cmndProjectApps.controller('tabsTVListController', ['$scope', '$rootScope', '$http', '$location', 
'locals', 
    function($scope, $rootScope, $http, $location, locals) {
        console.log('tabsTVListController');

        $scope.initTVListData = function() {
            console.log("tabsTVListController => initTVListData");
            $("#grid_tvList").bootgrid({
                ajax: true,
                rowCount: [10, 20, 30, 50],
                post: function (){
                },
                url: "/tvs/getDevices",
                selection: true,
                multiSelect: true,
                keepSelection: false
			}).on("loaded.rs.jquery.bootgrid",function(){


			}).on("selected.rs.jquery.bootgrid", function(e, rows){
				//checkboxChecked("devices");
			}).on("deselected.rs.jquery.bootgrid", function(e, rows){
			    //checkboxChecked("devices");
			});

        };
        // $scope.hitSelectTab($("#nav_tvs"));       
        // var tvs_current_tabs = locals.get("tvs_current_tabs", "tvs_tabs_tvList");
        // console.log("tvs_current_tabs:" + tvs_current_tabs);
        // var url = $scope.checkTVsTabsUrl(tvs_current_tabs);
        // $scope.loadTabsContentData(url);
        // $scope.hitSelectTab($("#" + tvs_current_tabs));

        $("#tvs_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var current_tabs = $(this).attr("id");              
                console.log(index + " - " + ele + " - " + current_tabs);
                var url = $scope.checkTVsTabsUrl(current_tabs);
                locals.set("nav_current_tabs", url);
                //$scope.loadTabsContentData(url);
        	});
        });

        $scope.checkTVsTabsUrl = function(tab) {
            var url = "tvs.tabs_tvList";
            if (tab != null || tab != "" || tab != undefined) {
                if (tab.indexOf("_msg") > -1) {
                    url = "tvs.tabs_msg";
                } else if (tab.indexOf("_rooms") > -1) {
                    url = "tvs.tabs_rooms";
                } else if (tab.indexOf("_tvList") > -1){
                    url = "tvs.tabs_tvList";
                } else if (tab.indexOf("_groupList") > -1) {
                    url = "tvs.tabs_groupList";
                } else if (tab.indexOf("_rfSetting") > -1) {
                    url = "tvs.tabs_rfSetting";
                }
            }
            return url;
        };

            
}]);