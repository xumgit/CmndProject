/**
 * tabsRFSettingController
 */

cmndProjectApps.controller('tabsRFSettingController', ['$scope', '$rootScope', '$http', '$location', 'locals',
'$state', '$stateParams', '$timeout', 'navigationService', '$compile', 'tabsRFSettingService',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, $timeout, 
        navigationService, $compile, tabsRFSettingService) {
        console.log('tabsRFSettingController');
      
        $scope.tvDiscovery = "10";
	    $scope.greenMode = "60";
	    $scope.fastMode = "10";
	    $scope.professionalService = "10";
	    $scope.maxUpdate = "10";
	    $scope.updateTimeout = "15";	
        $scope.uRL = "";
        
        $scope.initRFSettingData = function() {
            $("#TVDiscoverySlider").slider({		    
                value: "1",
                min: 1,
                max: 60,
                step: 1,
                range: "min",			 
                animate: true,
                slide: function( event, ui ) {		    	
                    $("#tvdiscoveryLabel").text(ui.value);				           		
                },
                stop:function( event, ui ) {		    	
                    $("#tvdiscoveryLabel").text(ui.value);
                    //UpdateProfile();
                },
		    });
		
            $("#greenModeSlider").slider({		    
                value: "2",
                min: 1,
                max: 600,
                step: 1,
                range: "min",			 
                animate: true,
                slide: function( event, ui ) {		    	
                    $("#greenModeLabel").text(ui.value);				           		
                },
                stop:function( event, ui ) {		    	
                    $("#greenModeLabel").text(ui.value);
                    //UpdateProfile();
                },
            });
		
            $("#fastModeSlider").slider({		    
                value: "3",
                min: 1,
                max: 60,
                step: 1,
                range: "min",			 
                animate: true,
                slide: function( event, ui ) {		    	
                    $("#fastModeLabel").text(ui.value);				           		
                },
                stop:function( event, ui ) {		    	
                    $("#fastModeLabel").text(ui.value);
                    //UpdateProfile();
                },
            });
		  
            $("#professionalServiceSlider").slider({		    
                value: "4",
                min: 1,
                max: 60,
                step: 1,
                range: "min",			 
                animate: true,
                slide: function( event, ui ) {		    	
                    $("#professionalServiceLabel").text(ui.value);				           		
                },
                stop:function( event, ui ) {		    	
                    $("#professionalServiceLabel").text(ui.value);
                    //UpdateProfile();
                },
            });

            $("#updateMaxSlider").slider({		    
                value: "0",
                min: 0,
                max: 5000,
                step: 1,
                range: "min",			 
                animate: true,
                slide: function( event, ui ) {	
                    if(parseInt(ui.value) == 0 ){
                        $('#updateMaxLabel').text("Unlimited");
                    }else{
                        $("#updateMaxLabel").text(ui.value);
                    }	    					           		
                },
                stop:function( event, ui ) {		    	
                    if(parseInt(ui.value) == 0 ){
                        $('#updateMaxLabel').text("Unlimited");
                    }else{
                        $("#updateMaxLabel").text(ui.value);
                    }
                    //UpdateProfile();
                },
            });		

            $("#updateTimeoutSlider").slider({		    
                value: "0",
                min: 0,
                max: 3600,
                step: 1,
                range: "min",			 
                animate: true,
                slide: function( event, ui ) {	
                    $("#updateTimeoutLabel").text(ui.value);					           			
                },
                stop:function( event, ui ) {		    	
                    $("#updateTimeoutLabel").text(ui.value);
                    //UpdateProfile();
                },
            });	
            $scope.initData();	
        }

        $scope.initData = function() {
            $("#TVDiscoverySlider").slider('value',$scope.tvDiscovery);
			$("#tvdiscoveryLabel").text($scope.tvDiscovery);	
				
			$("#greenModeSlider").slider('value',$scope.greenMode);
			$("#greenModeLabel").text($scope.greenMode);
				
			$("#fastModeSlider").slider('value',$scope.fastMode);
			$("#fastModeLabel").text($scope.fastMode);
				
			$("#professionalServiceSlider").slider('value',$scope.professionalService);
			$("#professionalServiceLabel").text($scope.professionalService);
				
			$("#updateMaxSlider").slider('value',$scope.maxUpdate);
			if (parseInt($scope.maxUpdate) == 0 ){
				$('#updateMaxLabel').text("Unlimited");
			} else {
				$("#updateMaxLabel").text($scope.maxUpdate);
			}
			$("#updateTimeoutSlider").slider('value',$scope.updateTimeout);
			$("#updateTimeoutLabel").text($scope.updateTimeout);
				
			$("#URLLabel").val($scope.uRL);
        }

}]);