/**
 * tabsGroupListController
 */

cmndProjectApps.controller('tabsGroupListController', ['$scope', '$rootScope', '$http', '$location', 'locals',
'$state', '$stateParams', '$timeout', 'navigationService', 'loadGroupListDataFactory', '$compile', 'tabsGroupListService',
    function($scope, $rootScope, $http, $location, locals, $state, $stateParams, $timeout, 
        navigationService, loadGroupListDataFactory, $compile, tabsGroupListService) {
        console.log('tabsGroupListController');
      
        $scope.initGroupListData = function() {
            //loadGroupListDataFactory.loadGroupListData();
            $('#g_sw_select').selectpicker();
            $('#g_cl_select').selectpicker();                   
            $('#g_sw_select').prop('disabled', false);
            $('#g_cl_select').prop('disabled', false);
            $('#g_sw_select').selectpicker('refresh');
            $('#g_cl_select').selectpicker('refresh');
        }

}]);