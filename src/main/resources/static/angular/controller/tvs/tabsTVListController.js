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
            console.log('TestBlack');
            var status = "show";
            var obj = document.getElementById(TagName);
            if (obj.style.display == "") {
                obj.style.display = "none";
                $("#TVStatusOverview div").html('<span class="glyphicon glyphicon-chevron-down">'
                            + '</span>&nbsp;&nbsp;TV Status overview');
                status = "hide";
            } else {
                obj.style.display = "";
                $("#TVStatusOverview div").html('<span class="glyphicon glyphicon-chevron-up">'
                            + '</span>&nbsp;&nbsp;TV Status overview');
                status = "show";
            }
 
            //updateConfig('TVs_tabsDevices_tvStatusOverview',status);		 
        }

        $scope.deviceNameField = function(obj) {
            console.log("deviceNameField:" + $(obj).val());
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