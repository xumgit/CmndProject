/**
 * tabsTVListController
 */

cmndProjectApps.controller('tabsTVListController', ['$scope', '$rootScope', '$http', '$location', 'locals',
'$state', '$stateParams', '$timeout', 'navigationService', 'loadTVListDataFactory', '$compile', 'tabsTVListService',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, $timeout, 
        navigationService, loadTVListDataFactory, tabsTVListService, $compile, tabsTVListService) {
        console.log('tabsTVListController');

        $scope.initTVListData = function() {
            console.log("tabsTVListController => initTVListData");
            loadTVListDataFactory.loadTVListData();
        };

        $scope.TestBlack = function(TagName){    
            var status = "show";
            var table = document.getElementById("table");
            var table_tr = table.getElementsByTagName("tr");
            var table_td = table_tr[0].getElementsByTagName("td");
            var obj = document.getElementById(TagName);
            if(obj.style.display==""){
                obj.style.display = "none";
                var html = '<label ng-click="TestBlack(\'divc\');" class="btn btn-primary" id="TVStatusOverview" '
                            + 'style="width:100%"><div class="text-left"><span class="glyphicon glyphicon-chevron-down">'
                            + '</span>&nbsp;&nbsp;TV Status overview</div></label>&nbsp;';
                $(table_td[0]).html($compile(html)($scope)); 
                status = "hide";
            } else {
                obj.style.display = "";
                var html = '<label ng-click="TestBlack(\'divc\');" class="btn btn-primary" id="TVStatusOverview" '
                            + 'style="width:100%"><div class="text-left"><span class="glyphicon glyphicon-chevron-up">'
                            + '</span>&nbsp;&nbsp;TV Status overview</div></label>&nbsp;';
                $(table_td[0]).html($compile(html)($scope));
                status = "show";
            }	 
            //updateConfig('TVs_tabsDevices_tvStatusOverview',status);		 
        }

        $scope.detectDevicesBtn = function() {
            console.log("detectDevicesBtn");
        }

        $scope.addDetectDevicesBtn = function() {
            console.log("addDetectDevicesBtn");
        }

        $scope.CreateGroupBtn = function() {
            console.log("CreateGroupBtn");
        }

        $scope.DelSelBtn = function() {
            console.log("DelSelBtn");
        }

        $scope.allBtn = function() {
            console.log("allBtn");
        }

        $scope.downloadDisplays = function() {
            console.log("downloadDisplays");
        }

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