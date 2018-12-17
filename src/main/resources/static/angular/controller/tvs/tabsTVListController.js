/**
 * tabsTVListController
 */

cmndProjectApps.controller('tabsTVListController', ['$scope', '$rootScope', '$http', '$location', 
'locals', 'navigationService', function($scope, $rootScope, $http, $location, locals, navigationService) {
        console.log('tabsTVListController');
     
        //angular.element(document).ready(function () {
            //Angular breaks if this is done earlier than document ready.
           $scope.init = function() {
                $("#grid_tvList").bootgrid({
                ajax: true,
                rowCount: [10, 20, 30, 50],
                post: function (){
                    return {
                        paraid: "b0df282a",
                        type: "selectAll"
                    };
                },
                url: "/tvs/getDevices",
                selection: true,
                multiSelect: true,
                keepSelection: false
			});
           };  
        //});
        $scope.initTVListData = function($timeout) {
            console.log("tabsTVListController => initTVListData");
            var nav_current_tabs = locals.get("nav_current_tabs", "tvs.tabs_tvList");
            //var subNav = $("#" + tabs_key);
             
            //$timeout($scope.init(),0);
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
                //console.log(index + " - " + ele + " - " + current_tabs);
                //var url = $scope.checkTVsTabsUrl(current_tabs);
                //locals.set("nav_current_tabs", url);
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