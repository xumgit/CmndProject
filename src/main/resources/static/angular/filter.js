/**
 * 
 */

cmndProjectApps.filter("trusHtml", function($sce){
    return function(html) {
        return $sce.trustAsHtml(html);
    }
});