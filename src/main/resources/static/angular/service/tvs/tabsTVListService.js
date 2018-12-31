/**
 * 
 */

 cmndProjectApps.service("tabsTVListService", ["$q", "$timeout", "$http", "locals", "$state", "$compile",
 function($q, $timeout, $http, locals, $state, $compile) {

   this.getSwAndCloneInfo = function() {
       return $http.get("/tvs/getSwAndCloneInfo").then(function(resp) {
			return resp.data;
	   }, function(resp) {
			return $q.reject(resp.status);
	   });
   };

   this.saveDeviceName = function(obj) {
       return $http({
			method: "post",
			url: "/tvs/saveDeviceName", 
			params: {
                    "tvUid": $(obj).attr("uid"),
                    "deviceName": $(obj).val()
            }
		}).then(function(resp) {
            //console.log("Saved Successfully! Status: " + resp.status + ",status: " + resp.data.status);
            return resp.data;
		}, function(resp) {
            //console.log("Saved Failly! Status: " + resp.status + ",status: " + resp.data.status);
            return $q.reject(resp.status);
	    });
   };

}]);