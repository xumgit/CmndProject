//自定义Service
angular.module("voteApp").service("voteSer", ["$q", "$http", function($q, $http) {
	this.getPlayerNames = function() {
		return $http.get("/test/playersData").then(function(resp) {
			if(typeof resp.data === "object") {
				var playerNames = [];
				angular.forEach(resp.data, function(v, k) {
					playerNames.push(v.name.toLowerCase());
				});
				return playerNames;
			}else {
				//无效数据
				return $q.reject(resp.data);
			}
		}, function(resp) {
			return $q.reject(resp.status);
		});
	};
	
	this.getTestDemoData = function() {
		return $http.get("/test/angularjsproject/getTestDemoReceiveData").then(function(resp) {
			return resp.data;
		}, function(resp) {
			return $q.reject(resp.status);
		});	
	};
	
	this.clearTestDemoData = function() {
		return $http.get("/test/angularjsproject/clearTestDemoReceiveData").then(function(resp) {
			return resp.data;
		}, function(resp) {
			return $q.reject(resp.status);
		});	
	};
}]);