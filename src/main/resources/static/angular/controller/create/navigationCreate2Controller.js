/**
 * navigationCreate2Controller
 */

/*cmndProjectApps.controller('navigationCreate2Controller', ['$scope', '$rootScope', '$http', '$location',
'locals', '$state', '$stateParams', 'navigationService', 'tabsCreate1Service', 'toaster', '$timeout', 'i18nService', 'NgTableParams',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, navigationService,
             tabsCreate1Service, toaster, $timeout, i18nService, NgTableParams) {
        console.log('navigationCreate2Controller');
        $scope.create_main_nav_tab = "create";

        $scope.initSelectCreateSubTabs = function() { 
            //console.log("init=>navigationCreateController");        
            //var sub_nav_tab = $rootScope.getCurrentNavTab($scope.create_main_nav_tab);
            //$scope.selectTabsAndGoto($scope.create_main_nav_tab, sub_nav_tab);
        };

        
        * type=> error/info/wait/success/warning
        * 
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

        $("#create_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var create_sub_tab = $(this).attr("tabs-id");              
                console.log("navigationCreate2Controller=>create_sub_tab:" + create_sub_tab);
                locals.set("create_sub_tab", create_sub_tab);
                $scope.selectTabs($scope.create_main_nav_tab, create_sub_tab);
        	});
        });

        // http://ng-table.com/#/loading/overview
        // https://www.cnblogs.com/tiecheng/p/5911210.html
        $scope.data = [ 
        				{name: "Moroni", age: 16, money: 88.1}, {name: "Enos", age: 99, money: 22.3}, {name: "Tracy", age: 2, money: 22.4}, 
        				{name: "Oracle", age: 31, money: 33.3}, {name: "Java", age: 13, money: 53.3}, {name: "Php", age: 46, money: 67.3},
        				{name: "1Moroni", age: 46, money: 88.1}, {name: "2Enos", age: 23, money: 22.3}, {name: "3Tracy", age: 24, money: 22.4}, 
        				{name: "4Oracle", age: 15, money: 33.3}, {name: "5Java", age: 13, money: 53.3}, {name: "6Php", age: 66, money: 67.3},
        				{name: "7Moroni", age: 86, money: 88.1}, {name: "8Enos", age: 59, money: 22.3}, {name: "9Tracy", age: 22, money: 22.4}, 
        				{name: "10Oracle", age: 31, money: 33.3}, {name: "11Java", age: 10, money: 53.3}, {name: "12Php", age: 46, money: 67.3}
        			  ];
        //$scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
             
        $scope.initialParams = {
        	count: 5 // initial page size
        };
        
        $scope.initialSettings = {
        	// page size buttons (right set of buttons in demo)
            counts: [5, 10, 15, 20],
            // determines the pager buttons (left set of buttons in demo)
            paginationMaxBlocks: 13,
            paginationMinBlocks: 2,
            filterDelay: 0,
            dataset: $scope.data      
       };
       
       $scope.cancel = function(row, rowForm) {
    	   var originalRow = $scope.resetRow(row, rowForm);
    	   angular.extend(row, originalRow);
       };

       $scope.del = function(row) {
    	  _.remove($scope.tableParams.settings().dataset, function(item) {
    		   return row === item;
    	  });
    	  $scope.tableParams.reload().then(function(data) {
    		  if (data.length === 0 && $scope.tableParams.total() > 0) {
    			 $scope.tableParams.page($scope.tableParams.page() - 1);
    			 $scope.tableParams.reload();
    		  }
    	  });
       };
          
       $scope.resetRow = function(row, rowForm){
    	   row.isEditing = false;
           rowForm.$setPristine();
           $scope.tableTracker.untrack(row);
           return _.findWhere($scope.data, function(r){
        	   return r.id === row.id;
           });
       };

       $scope.save = function(row, rowForm) {
           var originalRow = $scope.resetRow(row, rowForm);
           angular.extend(originalRow, row);
       };
        
       $scope.tableParams = new NgTableParams($scope.initialParams, $scope.initialSettings);
    }]);*/
	cmndProjectApps.controller('navigationCreate2Controller', navigationCreate2Controller);
	navigationCreate2Controller.$inject = ["NgTableParams", '$scope', '$rootScope', '$http', '$location',
							  			   'locals', '$state', '$stateParams', 'navigationService', 
							  			   'tabsCreate1Service', 'toaster', '$timeout', 'i18nService', 'Upload'];
	function navigationCreate2Controller(NgTableParams, $scope, $rootScope, $http, $location, locals, $state, $stateParams, 
										 navigationService, tabsCreate1Service, toaster, $timeout, i18nService, Upload) {
		var data = [
			{name: "Moroni", age: 16, money: 88.1}, {name: "Enos", age: 99, money: 22.3}, {name: "Tracy", age: 2, money: 22.4}, 
			{name: "Oracle", age: 31, money: 33.3}, {name: "Java", age: 13, money: 53.3}, {name: "Php", age: 46, money: 67.3},
			{name: "1Moroni", age: 46, money: 88.1}, {name: "2Enos", age: 23, money: 22.3}, {name: "3Tracy", age: 24, money: 22.4}, 
			{name: "4Oracle", age: 15, money: 33.3}, {name: "5Java", age: 13, money: 53.3}, {name: "6Php", age: 66, money: 67.3},
			{name: "7Moroni", age: 86, money: 88.1}, {name: "8Enos", age: 59, money: 22.3}, {name: "9Tracy", age: 22, money: 22.4}, 
			{name: "10Oracle", age: 31, money: 33.3}, {name: "11Java", age: 10, money: 53.3}, {name: "12Php", age: 46, money: 67.3}
		];
		$("#create_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var create_sub_tab = $(this).attr("tabs-id");              
                console.log("navigationCreate2Controller=>create_sub_tab:" + create_sub_tab);
                locals.set("create_sub_tab", create_sub_tab);
                $scope.selectTabs($scope.create_main_nav_tab, create_sub_tab);
        	});
        });
	    var self = this;
	    var initialParams = {
        	count: 5 // initial page size
        };
	    var initialSettings = {
	        // page size buttons (right set of buttons in demo)
	        counts: [5, 10, 15, 20],
	        // determines the pager buttons (left set of buttons in demo)
	        paginationMaxBlocks: 13,
	        paginationMinBlocks: 2,
	        filterDelay: 0,
	        dataset: data      
	    };
	    self.tableParams = new NgTableParams(initialParams, initialSettings);
	    self.cancel = cancel;
	    self.del = del;
	    self.save = save;
	    function cancel(row, rowForm) {
	        var originalRow = resetRow(row, rowForm);
	        angular.extend(row, originalRow);
	    }
	
	    function del(row) {
	        _.remove(self.tableParams.settings().dataset, function(item) {
	            return row === item;
	        });
	        self.tableParams.reload().then(function(data) {
	            if (data.length === 0 && self.tableParams.total() > 0) {
	                self.tableParams.page(self.tableParams.page() - 1);
	                self.tableParams.reload();
	            }
	        });
	    }
	
	    function resetRow(row, rowForm){
	        row.isEditing = false;
	        rowForm.$setPristine();
	        //self.tableTracker.untrack(row);
	        return _.findWhere(data, function(r){
	            return r.id === row.id;
	        });
	    }
	
	    function save(row, rowForm) {	    	
	        var originalRow = resetRow(row, rowForm);
	        angular.extend(originalRow, row);
	        popupTip("success", "save success");
	    }
	    
	    function popupTip(type, tipText) {
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
	    
	    $scope.myImage = '';
        $scope.myCroppedImage = '';
        
        function onLoadDone () {
        	console.log("onLoadDone:");
        }
        
        var handleFileSelect = function(evt) {
          var file = evt.currentTarget.files[0];
          var reader = new FileReader();
          reader.onload = function (evt) {
            $scope.$apply(function($scope){
              $scope.myImage = evt.target.result;
            });
          };
          reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
        
        $scope.submit = function() {
            if ($scope.form.file.$valid && $scope.file) {
              $scope.upload($scope.file);
            }
          };

          // upload on file select or drop
          $scope.upload = function (file) {
              Upload.upload({
                  url: 'upload/url',
                  data: {file: file, 'username': $scope.username}
              }).then(function (resp) {
                  console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
              }, function (resp) {
                  console.log('Error status: ' + resp.status);
              }, function (evt) {
                  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                  console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
              });
          };
          // for multiple files:
          $scope.uploadFiles = function (files) {
            if (files && files.length) {
              for (var i = 0; i < files.length; i++) {
                //Upload.upload({..., data: {file: files[i]}, ...})...;
              }
              // or send them all together for HTML5 browsers:
              //Upload.upload({..., data: {file: files}, ...})...;
            }
          };
	}