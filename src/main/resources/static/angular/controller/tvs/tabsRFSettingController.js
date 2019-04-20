/**
 * tabsRFSettingController
 */
/*
* https://github.com/jirikavi/AngularJS-Toaster
* */
cmndProjectApps.controller('tabsRFSettingController', ['$scope', '$rootScope', '$http', '$location', 'locals',
'$state', '$stateParams', '$timeout', 'navigationService', '$compile', 'tabsRFSettingService', 'toaster',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, $timeout, 
        navigationService, $compile, tabsRFSettingService, toaster) {
        console.log('tabsRFSettingController');
      
        $scope.tvDiscovery = "10";
	    $scope.greenMode = "60";
	    $scope.fastMode = "10";
	    $scope.professionalService = "10";
	    $scope.maxUpdate = "10";
	    $scope.updateTimeout = "15";	
        $scope.uRL = "";

        $scope.from = "xum1281517532@163.com";
        $scope.to = "meng.xu@tpv-tech.com";

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

        /*
        * type=> error/info/wait/success/warning
        * */
        $scope.popupTip = function(type, tipText) {
            $timeout(function () {
                toaster.pop({
                    type: type,
                    //title: 'Title text',
                    //body: 'Body text',
                    body: 'bind-toaster-html',
                    bodyOutputType: 'directive',
                    directiveData: {content: tipText},
                    timeout: 3000,
                    showCloseButton: true,
                    onShowCallback: function (toast) {
                        console.log("toaster is show");
                    },
                    onHideCallback: function (toast) {
                        console.log("toaster is hide");
                    }
                });
            }, 500);
        }

        $scope.redisTest = function() {
            console.log("redisTest");
            var req = {
                method: 'POST',
                url: '/test/redisTest',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "send redisTest command success!");
                } else {
                    $scope.popupTip("error", "send redisTest command error!");
                }
            });
        }

        $scope.addMongoData = function() {
            console.log("addMongoData");
            var req = {
                method: 'POST',
                url: '/test/addMongoData',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "id": 1,
                    "name": "admin",
                    "age": 12
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "send addMongoData command success!");
                } else {
                    $scope.popupTip("error", "send addMongoData command error!");
                }
            });
        }

        $scope.queryMongoData = function() {
            console.log("queryMongoData");
            var req = {
                method: 'POST',
                url: '/test/queryMongoData',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "name": "admin"
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "send queryMongoData command success!");
                } else {
                    $scope.popupTip("error", "send queryMongoData command error!");
                }
            });
        }

        $scope.updateMongoData = function() {
            console.log("updateMongoData");
            var req = {
                method: 'POST',
                url: '/test/updateMongoData',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "id": 1,
                    "name": "admin-admin",
                    "age": 13
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "send updateMongoData command success!");
                } else {
                    $scope.popupTip("error", "send updateMongoData command error!");
                }
            });
        }

        $scope.deleteMongoData = function() {
            console.log("deleteMongoData");
            var req = {
                method: 'POST',
                url: '/test/deleteMongoData',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "id": 1
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "send deleteMongoData command success!");
                } else {
                    $scope.popupTip("error", "send deleteMongoData command error!");
                }
            });
        }

        $scope.sendSimpleMail = function() {
            console.log("sendSimpleMail");
            var subject = "test subject title";
            var content = "text content";
            var req = {
                method: 'POST',
                url: '/test/sendSimpleMail',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "from": $scope.from,
                    "to": $scope.to,
                    "subject": subject,
                    "content": content
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "sendSimpleMail command success!");
                } else {
                    $scope.popupTip("error", "sendSimpleMail command error!");
                }
            });
        }

        $scope.sendHtmlMail = function() {
            console.log("sendHtmlMail");
            var subject = "test html subject title";
            var content = "<html><body><br /><h3><span style=\"color:red;\">hello world!</span>this is html email!<br /></h3></body><br /></html>";
            var req = {
                method: 'POST',
                url: '/test/sendHtmlMail',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "from": $scope.from,
                    "to": $scope.to,
                    "subject": subject,
                    "content": content
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "sendHtmlMail command success!");
                } else {
                    $scope.popupTip("error", "sendHtmlMail command error!");
                }
            });
        }

        $scope.sendAttachmentsMail = function() {
            console.log("sendAttachmentsMail");
            var subject = "test attachment subject title";
            var content = "Has attachment zip file!";
            var filePath = "D:\\upg\\sample\\TPM187HE_CloneData.zip";
            var req = {
                method: 'POST',
                url: '/test/sendAttachmentsMail',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "from": $scope.from,
                    "to": $scope.to,
                    "subject": subject,
                    "content": content,
                    "filePath": filePath
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "sendAttachmentsMail command success!");
                } else {
                    $scope.popupTip("error", "sendAttachmentsMail command error!");
                }
            });
        }

        $scope.sendInlineResourceMail = function() {
            console.log("sendInlineResourceMail");
            var randomRscId = Math.ceil(Math.random()*10000);
            var rscId = "rsc" + randomRscId;
            var subject = "test subject title";
            var content = "<html><body><br /><h3><span style=\"color:red;\">hello world!</span>this is html email!</h3><br />"
                        + "<img src=\"cid:" + rscId + "\" /></body><br /></html>";
            var rscPath = "D:\\upg\\test.png";
            var req = {
                method: 'POST',
                url: '/test/sendInlineResourceMail',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "from": $scope.from,
                    "to": $scope.to,
                    "subject": subject,
                    "content": content,
                    "rscId": rscId,
                    "rscPath": rscPath
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "sendInlineResourceMail command success!");
                } else {
                    $scope.popupTip("error", "sendInlineResourceMail command error!");
                }
            });
        }

        $scope.sendTemplateMail = function() {
            console.log("sendTemplateMail");
            var id = "1";
            var subject = "test subject title";
            var content = "test content";
            var req = {
                method: 'POST',
                url: '/test/sendTemplateMail',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    "from": $scope.from,
                    "to": $scope.to,
                    "subject": subject,
                    "content": content,
                    "id": id
                }
            };
            tabsRFSettingService.sendRequestCommand(req).then(function(data){
                console.log("status:" + data.status);
                if (data.status == "success") {
                    $scope.popupTip("success", "sendTemplateMail command success!");
                } else {
                    $scope.popupTip("error", "sendTemplateMail command error!");
                }
            });
        }
}]);