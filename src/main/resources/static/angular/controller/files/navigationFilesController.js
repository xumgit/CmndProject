/**
 * navigationFilesController
 */

cmndProjectApps.controller('navigationFilesController', ['$scope', '$rootScope', '$http', '$location', 
'locals',  '$state', '$stateParams', 'navigationService',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, navigationService) {
        console.log('navigationFilesController');
        
        $scope.files_main_nav_tab = "files";

        $scope.initSelectFilesSubTabs = function() {         
            var sub_nav_tab = $scope.getCurrentNavTab($scope.files_main_nav_tab);
            console.log("sub_nav_tab:" + sub_nav_tab);
            $scope.selectTabsAndGoto($scope.files_main_nav_tab, sub_nav_tab);
        };

        $("#files_tabs li a").each(function(index, ele){  	
        	$(this).click(function(){
                var files_sub_tab = $(this).attr("tabs-id");              
                console.log("files_sub_tab:" + files_sub_tab);
                locals.set("files_sub_tab", files_sub_tab);
                $scope.selectTabsAndGoto($scope.files_main_nav_tab, files_sub_tab);
        	});
        });
}]);