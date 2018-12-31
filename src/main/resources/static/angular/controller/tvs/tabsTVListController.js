/**
 * tabsTVListController
 */

cmndProjectApps.controller('tabsTVListController', ['$scope', '$rootScope', '$http', '$location', 'locals',
'$state', '$stateParams', '$timeout', 'navigationService', 'loadTVListDataFactory', '$compile', 'tabsTVListService',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, $timeout, 
        navigationService, loadTVListDataFactory, $compile, tabsTVListService) {
        console.log('tabsTVListController');
      
        $scope.settingTV = [
             {id:"ipAll", val:"false"}, {id:"ipTVSettings", val:"false"}, {id:"ipTVChannelList", val:"false"},
	         {id:"ipWelcomeLogo", val:"false"}, {id:"ipSmartInfoImages", val:"false"}, {id:"ipSmartInfoPages", val:"false"},
	         {id:"ipCustomDashboard", val:"false"}, {id:"ipAndroidApps", val:"false"}, {id:"ipMediaChannels", val:"false"},
	         {id:"ipRoomSpecificSettings", val:"false"}, {id:"ipDataDump", val:"false"}, {id:"ipHTVCfg", val:"false"}, 
	         {id:"ipScript", val:"false"}, {id:"ipWeatherForecast", val:"false"}, {id:"ipBanner", val:"false"},	               		
	         {id:"ipPMS", val:"false"}, {id:"ipAndroidAppsData", val:"false"}, {id:"ipProfessionalApps", val:"false"},
	         {id:"ipProfessionalAppsData", val:"false"}, {id:"ipSchedules", val:"false"}, {id:"ipMyChoice", val:"false"},
	         {id:"ipVsecure", val:"false"}
	    ];

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
            console.log("deviceNameField");
            var tvUid = $(obj).attr("uid");
            var newValue = $(obj).val();
            console.log("tvUid:" + tvUid + ",newValue:" + newValue);
            tabsTVListService.saveDeviceName(obj).then(function(data){
                console.log("status:" + data.status);
            });
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

        $scope.partialClone = function() {
            $("#cloneSelection").modal('show');
				$("#cloneSelection .modal-body").css({
					"visibility": "visible",
					"height": "235px"
			});
			$("#cloneSelection .modal-footer").css({
				"visibility": "visible",
				"height": "70px"
			});
			$("#cloneSelection #none").css({
				"visibility": "hidden",
				"height": "0px"
			});
            var cloneItem = ["TVSettings","TVChannelList","WelcomeLogo","SmartInfoPages","SmartInfoImages",
			                 "CustomDashboard","AndroidApps","MediaChannels","RoomSpecificSettings","WeatherForecast",
			                 "HTVCfg","Banner","Script","PMS","AndroidAppsData","ProfessionalApps",
                              "ProfessionalAppsData","Schedules","MyChoice","Vsecure"];
            var cloneItem_length  = cloneItem.length;
			//for (var i=0;i<cloneItem_length;i++) {

            //}
        }

        $scope.alloption = function(flag) {	
            console.log("alloption:" + flag);
            for(var i = 1; i < $scope.settingTV.length; i++) {	
                //console.log($scope.settingTV[i].id + "|" + $("#ipAll").is(":checked"));		
			    $("#" + $scope.settingTV[i].id).prop("disabled", $("#ipAll").is(":checked"));		
			    if($("#ipAll").is(":checked")){
				    $("#" + $scope.settingTV[i].id).prop("checked", false);
				    $scope.settingTV[i].val = "false" ;
			    }			
		    };		
		    if($("#ipAll").is(":checked")){
			    $scope.settingTV[0].val = "true";
		    } else {
			    $scope.settingTV[0].val = "false";
		    }
        }
        
        $scope.onChangepartialAction = function (flag,dom) {
            console.log("alloption:" + flag + ",dom:" + dom);
        }

        $scope.savePartialCloneSelection = function() {
            console.log("savePartialCloneSelection");
            $("#cloneSelection").modal('hide');
        }

        $scope.cloneSelect = function() {
            console.log("cloneSelect");
        }
        
        $scope.swSelect = function() {
            console.log("swSelect");
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