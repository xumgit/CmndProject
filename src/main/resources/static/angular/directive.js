/**
 * 
 */

 cmndProjectApps.directive('bindHtmlCompile', ['$compile',
        function($compile) {
            return {
                restrict: 'EA',
                link: function(scope, element) {
                    var html_down = '<label ng-click="TestBlack(\'divc\');" class="btn btn-primary" id="TVStatusOverview" '
                            + 'style="width:100%"><div class="text-left"><span class="glyphicon glyphicon-chevron-down">'
                            + '</span>&nbsp;&nbsp;TV Status overview</div></label>&nbsp;';
                    var html_up = '<label ng-click="TestBlack(\'divc\');" class="btn btn-primary" id="TVStatusOverview" '
                            + 'style="width:100%"><div class="text-left"><span class="glyphicon glyphicon-chevron-up">'
                            + '</span>&nbsp;&nbsp;TV Status overview</div></label>&nbsp;';
                    scope.$watch(function() {
                        console.log("watch 1");
                        //element.html(value);
                        var ht = $compile(html_down)(scope);
                        console.log("watch 1:" + ht);
                        return element.html(ht);
                    },
                    function(value) {
                        console.log("watch 2");
                        element.html(value);
                        $compile(element.contents())(scope);
                        //return html_down;
                    });
                }
            };
        }]
);