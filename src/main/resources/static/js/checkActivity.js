$(document).ready(function() {
	$.active = false;
	$('body').bind('click keypress', function() { $.active = true; });
	checkActivity(1800000, 60000, 0); // timeout 30Min(1800000), 60Min(3600000)
	CheckOnline();
	CallCheckOnline();
	
	$.getScript("/SmartInstall/static/js/jquery.cookie.js", function(){
			
		csrftoken = $.cookie('csrftoken');
		
		function csrfSafeMethod(method) {
		    // these HTTP methods do not require CSRF protection
		    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
		}
		
		$.ajaxSetup({
		    beforeSend: function(xhr, settings) {
		        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
		            xhr.setRequestHeader("X-CSRFToken", csrftoken);
		        }
		    }
		});
	});
	
});
var checkActivity_refreshId = 0;
function CallCheckOnline() {			
	clearInterval(checkActivity_refreshId);
    checkActivity_refreshId = setInterval(CheckOnline, 2000); 
}

var csrftoken = null;





function CheckOnline(){
	$.ajax({		
		url : '/SmartInstall/setting',
	    type : 'POST',
	    data : { mode:'SET_ONLINE' },
	    dataType : 'json',	    
	    xhrFields: {
	        withCredentials: true
	    },
	    success : function (result) {
	    },
	    error: function(XMLHttpRequest, textStatus, errorThrown){
	    	if(XMLHttpRequest && XMLHttpRequest.status==0 )
	    		showDialog('System error. Press ok to log back in.');
	    	else
	    		showDialog('System error. Press ok to log back in. [' + textStatus + ']');
		}
	});
}	

function showDialog(msg){
	clearInterval(checkActivity_refreshId);
	if($("#check_active_modal").length > 0){
		$("#error_msg").html('<h4>' + msg + '</h4>');
		$("#check_active_modal").modal("show");
	}else{
		$('body').append('<div id="check_active_modal" class="modal fade" tabindex="-1" role="dialog" ' +
			   'aria-labelledby="logout_modal" aria-hidden="true">' +
			   	'<div class="modal-dialog" style="margin-top:200px;">' +
			      	'<div class="modal-content">' +
			         	'<div class="modal-header" style="background:rgb(28, 148, 196);">' +
			            	'<h4 class="modal-title" id="logout_modal" style="color: #fff;">Logged out</h4>' +
			         	'</div>' +
			         	'<div class="modal-body" id="error_msg"><h4>' + msg + '</h4></div>' +
			      	 	'<div class="modal-footer">' +
							'<button id="check_active_modal_ok" type="button" class="btn btn-primary">OK</button>' +
		        		 	'</div></div></div></div>');
		$('#check_active_modal').modal({backdrop: 'static', keyboard: false});
		$("#check_active_modal").modal("show");
	}
	 
	$('#check_active_modal_ok').click(function() {		
		window.location.href = '/SmartInstall/logout';
	});	
	$(document).on('hide.bs.modal','#check_active_modal', function () {		
		window.location.href = '/SmartInstall/logout';
	});
}

function checkActivity(timeout, interval, elapsed) {
    //console.log('real: elapsed='+elapsed+',active='+$.active);
    if ($.active) {
        elapsed = 0;
        $.active = false;
        //$.get('poll'); // Let server code basically do a "get session from request".
    }
    
    if (elapsed < timeout) {
        elapsed += interval;
        setTimeout(function() {
            checkActivity(timeout, interval, elapsed);
        }, interval);
    } else { 
    	elapsed += interval;
    	$.ajax({
			type: 'POST',
			data: {'mode':'' },
			url: '/SmartInstall/SessionManagers',
			success: function(msg) {
				showDialog('You have been logged out. Press ok to log back in.');
				console.log("log out success!");
			},
			error: function(msg) {
				showDialog('You have been logged out. Press ok to log back in.');
				console.log("log out error!");
			}
		});   	
    }
    
    //console.log((elapsed/interval)-1);
}

(function ($) {
    $.fn.selected = function (fn) {
        return this.each(function () {
            $(this).focus(function () {
                this.dataChanged = false;
            }).change(function () {
                this.dataChanged = true;
                fn(this);
            }).blur(function (e) {
                if (!this.dataChanged) {
                    fn(this);
                }
            });
        });
    };
})(jQuery);
