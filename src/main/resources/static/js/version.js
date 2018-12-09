/**
 * get cmnd version
 * 
 */

var cmndVersion = "";
function getCMNDVersion() {
	$.ajax({
		type: 'GET',
		async: false,
		data: {mode:'GET_CMND_VERSION'},
		url: './user',
		success: function(msg) {
			if (msg != "") {
				var jsonConfig = $.parseJSON(msg);	
				cmndVersion = jsonConfig.cmndVersion;				
				$("div.cmndVersion").append("<div class=\"cmndVersion\">" + "CMND_TVControl " + cmndVersion + "</div>");
				$("div.cmndVersion").css({"color": "#ccc","text-align":"right"});
			}				
		},
		error: function() {
			console.log("error log for cmnd version");
		}
	});
}
getCMNDVersion();
console.log("cmndVersion:" + cmndVersion);