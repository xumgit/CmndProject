/**
 * tabsRFSettingService
 */

 cmndProjectApps.service("tabsRFSettingService", ["$q", "$timeout", "$http", "locals", "$state", "$compile",
 function($q, $timeout, $http, locals, $state, $compile) {

  this.sendRequestCommand = function(req) {
     return $http(req).then(function(resp) {
                return resp.data;
            }, function(resp) {
                return $q.reject(resp.status);
            });
  };

}]);