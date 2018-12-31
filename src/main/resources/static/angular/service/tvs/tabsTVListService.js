/**
 * 
 */

 cmndProjectApps.service("tabsTVListService", ["$q", "$timeout", "$http", "locals", "$state", "$compile",
 function($q, $timeout, $http, locals, $state, $compile) {

    this.compileHtmlData = function(htmlData) {
		return $compile(htmlData)($scope);
    };

   this.compileHtml = function(html) {
       return $compile(html)($scope);
   };

}]);