/**
 * tvs => tabs tvlist factory
 */

cmndProjectApps.factory('loadTVListDataFactory', ['$timeout', 'tabsTVListService', 
function($timeout, tabsTVListService){
    return({
        loadTVListData: loadTVListData
    });

    function loadTVListData() {
        $timeout(loadTVListDataSync, 0, false);
    };

	function loadTVListDataSync() {
        console.log("loadTVListDataSync");
        var blink = null;
        var blinkList = [];
        var allLoadDevice = "no";

        var lastTvModelsStatus = [];
        var tv_models_pie_chart_selectArray = [];
        google.charts.load('current', {'packages':['corechart']});
        var grid_devices_data = $("#grid_tvList").bootgrid({
            ajax: true,
            rowCount: [10, 20, 30, 50],
            post: function (){
                return {
                    paraid: "b0df282a",
                    type: "selectAll"
                };
            },
            url: "/tvs/getDevices",
            selection: true,
            multiSelect: true,
            keepSelection: false,
            formatters: {		     
				  "power": function(column, row)
				  {
					  var div="ON";
					  var powerStatus = row.PowerStatus.toUpperCase();
					  clearInterval(blink);
					  if(powerStatus == "ON") {			
                            div = '<a><span name="powerstate_'+row.Id+'"  tvid = "'+row.Id+'" power="'+powerStatus+'" title="' 
                            + powerStatus + '" flag="true"  class="glyphicon glyphicon-off" style="color:rgb(0,128,0);"></span></a>';  
						} else if(powerStatus == "REBOOT"){
                            div = '<a><span name="powerstate_'+row.Id+'"  tvid = "'+row.Id+'" power="'+powerStatus+'" title="' 
                            + powerStatus + '" flag="true"  class="glyphicon glyphicon-off" style="color:rgb(255,0,0);"></span></a>';  
							
						} else if(powerStatus == "OFFLINE"){
                            div = '<a><span name="powerstate_'+row.Id+'"  tvid = "'+row.Id+'" power="'+powerStatus+'" title="' 
                            + powerStatus + '" flag="true"  class="glyphicon glyphicon-off" style="color:rgb(128,128,128);"></span></a>';  
						} else {
                            div = '<a><span name="powerstate_'+row.Id+'"  tvid = "'+row.Id+'" power="'+powerStatus+'" title="' 
                            + powerStatus + '" flag="true"  class="glyphicon glyphicon-off" style="color:rgb(255,0,0);"></span></a>';  
						}
					return div;
                  },
				  "name": function(column, row)
				  {
                    return  '<input type="text" id = tv_Name uid ="'+row.Id+'" onchange="angular.element(this).scope().deviceNameField(this);" value="'
                            + row.TVName + '" orgName="'+ row.TVName  + '" title="'+ row.TVName + 
		                    '" ONKEYDOWN="javascript:return enterEvent(event);"' + 
                    'style="width: 100%;float:left;text-align:left;border:0px solid #dddddd; background: none repeat scroll 0 0 ;"'+ 
                    'name="mainText" />';
		          },
		          "RID": function(column, row)
				  {
		        	  var pre = "";
		        	  var len = row.TVRoomID.length;
		        	  if(row.Type != null && row.Type != undefined && row.Type.indexOf("2016") > -1){
	        		  	  switch( len ){
		        			  case 1:pre = "0000";break;
		        			  case 2:pre = "000";break;
		        			  case 3:pre = "00";break;
		        			  case 4:pre = "0";break;
		        		  }
		        	  }else{
		        		  switch( len ){
	        			  case 1:pre = "0000";break;
	        			  case 2:pre = "000";break;
	        			  case 3:pre = "00";break;
	        			  case 4:pre = "0";break;
	        		  	  }
		        	  }
                      return  '<div id="tv_RIDDiv" TVRoomId ="' + row.TVRoomID +'"title="' 
                      + row.TVRoomID + '">'+ pre +row.TVRoomID +' </div>';
		          },
		          "MAC":function(column, row){
		        	  var MAC=row.TVMACAddress;
		        	  var newMAC=MAC.toUpperCase();
		        	  return  '<div id="tv_MAC" TVMACAddress ="' + newMAC +'"title="' + newMAC + '">'+ newMAC +' </div>';
		          },
		    	  "sw": function(column, row)
				  {
		    		var fw_color = row.fw_color;
		    		var styleStr = "";
		    		if(fw_color == "black"){
			        		styleStr = '" style="color:'+row.fw_color+'"';
			        }else{
			        		styleStr = '" style="color:'+row.fw_color + ';font-weight:bold'+'"';
			        }
		    		
		        	var type = row.Type;
                    //var showFwInfo = row.showFwInfo;
                    var showFwInfo = 'TPM1531HE.5.249.289';
		        	var dotpos = 0;
		        			        			        	        		
		            return  '<div id="tv_SwDiv" siFirmwareIdent="' + row.si_firmware_Identifier + 
                            '" assigned_firmwareId="' + row.FirmwareId + '" tvFirmwareIdent="' + row.tv_firmware_Identifier 
                            + '"  title="' + row.tv_firmware_Identifier + 
		            		styleStr+'">' + showFwInfo + '</div>';
		          },		          		          
		      	  "clone": function(column, row){
		        	var cloneId = row.CloneId;
		        	var showCloneInfo = "Unkonwn";
		        	var clone_color = row.clone_color;
		        	var lastCloneRename =  row.LastCloneRename;
		        	var lastCloneRenameJson = JSON.parse(lastCloneRename);
		        		
		        	var styleStr = "";
		        	if(clone_color == "black"){
		        		styleStr = '" style="color:'+row.clone_color+'"';
		        	}else{
		        		styleStr = '" style="color:'+row.clone_color + ';font-weight:bold'+'"';
		        	}
		        	
		        	if(lastCloneRenameJson.new == "Unknown" || clone_color == "black"){
		        		showCloneInfo = "None";
		        	}else{
		        		showCloneInfo = lastCloneRenameJson.new + ' ' + row.si_clone_Identifiers;
		        		}
		        	
                    return  '<div id="tv_CloneDiv" startAllId="' + row.Id + '" progress="' + row.Progress+'" tvCloneIdent="' 
                            + row.tv_clone_Identifiers + '" assigned_cloneId="' + row.CloneId + '" siCloneIdent="' 
                            + row.si_clone_Identifiers +'"  successTvcloneIdentifier="' +row.success_tvclone_Identifier +
		            		'" successSicloneIdentifier="' + row.success_siclone_Identifier + '" title="' + row.tv_clone_Identifiers + 
		            		styleStr+'">' + showCloneInfo + '</div>';
                  },
                   "commands": function(column, row)
				  {
					var type = row.Type;
					var model = row.TVModelNumber;
				  	var div = "";
                      if((row.clone_mode=='Upgrade' && row.Progress == "INP") || 
                      ((type && (type.indexOf("2K14") != -1)) && (row.Progress == "INP"))){ 
				  		div='<a title="Download" uid = "'+row.Id+'" power='+row.PowerStatus+' name="Download_'+row.Id+'" flag="true" style="padding-right: 2px;"><span class="glyphicon glyphicon-download" style="display:none;"></span></a>&nbsp;' +
						'<a title="Delete" id="dele_'+row.Id+'" uid = "'+row.Id+'" name="delete" style="padding-right: 2px;><span class="glyphicon glyphicon-trash" style="color:rgb(212, 106, 64);"></span></a>&nbsp;' +
						'<a title="Updating" name="Updating_'+row.Id+'" flag="true" style="padding-right: 2px;"><span class="glyphicon glyphicon-refresh" style="display:none;"></span></a>&nbsp;' +
						'<a title="Restart" uid = "'+row.Id+'" name="Restart" flag="true" type="tv" style="padding-right: 2px;"><span class="glyphicon glyphicon-repeat"></span></a>&nbsp;' +
						'<a title="Stop" uid = "'+row.Id+'"  name="Stop" style="padding-right: 2px;"><span class="glyphicon glyphicon-stop" style="color:rgb(212, 106, 64);"></a>&nbsp;' +
						'<img class="hideIcon" name="Ani" title="Upgrading inprogress." style="width: 18px;" src="/images/3.gif" />&nbsp;'+
						'<a data-toggle="modal" id="info_' + row.Id+'" uid = '+row.Id+' title="info" name="info" style="padding-right: 2px;font-size:18px;"><span class="glyphicon glyphicon-info-sign"></span></a>';
				  	 }else if (row.clone_mode=='Upload' && row.upload_progress == "INP"){ 
				  		div='<a title="Download" uid = "'+row.Id+'" power='+row.PowerStatus+' name="Download_'+row.Id+'" flag="true" style="padding-right: 2px;"><span class="glyphicon glyphicon-download" style="display:none;"></span></a>&nbsp;' +
						'<a title="Delete" id="dele_'+row.Id+'" uid = "'+row.Id+'" name="delete" style="padding-right: 2px;><span class="glyphicon glyphicon-trash" style="color:rgb(212, 106, 64);"></span></a>&nbsp;' +
						'<a title="Updating" name="Updating_'+row.Id+'" flag="true" style="padding-right: 2px;"><span class="glyphicon glyphicon-refresh" style="display:none;"></span></a>&nbsp;' +
						'<a title="Restart" uid = "'+row.Id+'" name="Restart" flag="true" type="tv" style="padding-right: 2px;"><span class="glyphicon glyphicon-repeat"></span></a>&nbsp;' +
						'<a title="Stop" uid = "'+row.Id+'" name="Stop" style="padding-right: 2px;"><span class="glyphicon glyphicon-stop" style="color:rgb(212, 106, 64);"></a>&nbsp;' +
						'<img class="hideIcon" name="Ani" title="Downloading inprogress." style="width: 18px;" src="/images/3.gif" />&nbsp;'+
						'<a data-toggle="modal" id="info_' + row.Id+'" uid = '+row.Id+' title="info" name="info" style="padding-right: 2px;font-size:18px;"><span class="glyphicon glyphicon-info-sign"></span></a>'; 
				   	}else if(isDownloadable(type)){ 
				  		div='<a title="Start downloading." uid = "'+row.Id+'" power='+row.PowerStatus+' name="Download_'+row.Id+'" flag="true" style="padding-right: 2px;"><span class="glyphicon glyphicon-download" style="font-size:18px;"></span></a>' +
						'<a title="Delete" id="dele_'+row.Id+'" uid = "'+row.Id+'" name="delete" style="padding-right: 2px;"><span class="glyphicon glyphicon-trash" style="color:rgb(212, 106, 64);font-size:18px;"></span></a>' +
						'<a title="Start upgrading." uid = "'+row.Id+'" name="Updating_'+row.Id+'" flag="true" style="padding-right: 2px;"><span class="glyphicon glyphicon-refresh" style="font-size:18px;"></span></a>' +
						'<a title="Restart" uid = "'+row.Id+'" name="Restart" flag="true" type="tv" style="padding-right: 2px;"><span class="glyphicon glyphicon-repeat" style="font-size:18px;"></span></a>' +
						'<a title="Stop" uid = "'+row.Id+'" name="Stop" style="padding-right: 2px;"><span class="glyphicon glyphicon-stop"style="color:rgb(212, 106, 64);display:none;font-size:18px;"></a>' +
						'<img class="hideIcon" name="Ani" style="display:none;width: 18px;" src="/images/3.gif" />'+
						'<a data-toggle="modal" id="info_' + row.Id+'" uid = '+row.Id+' title="info" name="info" style="padding-right: 2px;font-size:18px;"><span class="glyphicon glyphicon-info-sign"></span></a>'; 
 				  	}else{
				  		div='<a title="Start downloading." uid = "'+row.Id+'" power='+row.PowerStatus+' name="Download_'+row.Id+'" flag="true" style="padding-right: 0px;"><span class="glyphicon glyphicon-download" style="font-size:18px;display:none;"></span></a>&nbsp;' +
						'<a title="Delete" id="dele_'+row.Id+'" uid = "'+row.Id+'" name="delete" style="padding-right: 0px;"><span class="glyphicon glyphicon-trash" style="color:rgb(212, 106, 64);font-size:18px;"></span></a>&nbsp;' +
						'<a title="Start upgrading." uid = "'+row.Id+'" name="Updating_'+row.Id+'" flag="true" style="padding-right: 0px;"><span class="glyphicon glyphicon-refresh" style="font-size:18px;"></span></a>&nbsp;' +
						'<a title="Restart" uid = "'+row.Id+'" name="Restart" flag="true" type="tv" style="padding-right: 0px;"><span class="glyphicon glyphicon-repeat" style="font-size:18px;"></span></a>' +
						'<a title="Stop" uid = "'+row.Id+'" name="Stop" style="padding-right: 0px;"><span class="glyphicon glyphicon-stop"style="color:rgb(212, 106, 64);display:none;font-size:18px;"></a>' +
						'<img class="hideIcon" name="Ani" style="display:none;width: 18px;" src="/images/3.gif" />'+
						'<a data-toggle="modal" id="info_' + row.Id+'" uid = '+row.Id+' title="info" name="info" style="padding-right: 0px;font-size:18px;"> <span class="glyphicon glyphicon-info-sign"></span></a>';
				  	}
		            return div;
		          }
            }
		}).on("loaded.rs.jquery.bootgrid",function(){
					allLoadDevice = "no";
						
					//LoadIPProfile("devices"); grid_tvList
					grid_devices_data.find("[name^='powerstate_']").each(function(){
						if($(this).attr("power")=='REBOOT')
							StartBlink($(this));
					});
					//RefreshUI();
					grid_devices_data.find("[id^='info_']").on("click",function(e){
		        		ShowClonedataInfo($(this));
					}).end().find("[id^='dele_']").on("click",function(e){	
							DeleTvInfo($(this));
					}).end().find("[name^='Download_']").on("click",function(e){	
							tvDownloadProgress($(this));
					}).end().find("[name^='Updating_']").on("click",function(e){	
							tvUpdatingProgress($(this));
					}).end().find("[name^='Restart']").on("click",function(e){	
							tvRestartProgress($(this));
					}).end().find("[name^='Stop']").on("click",function(e){	
							tvStopProgress($(this));
					}).end().find("[name^='powerstate_']").on("click",function(e){	
							TriggerTvPowerstate($(this));
					});

				    google.charts.setOnLoadCallback(tvModels);
				    //google.charts.setOnLoadCallback(currentPowerStatus);
				    //google.charts.setOnLoadCallback(currentSW);
				    //google.charts.setOnLoadCallback(currentCloneData);
				    //google.charts.setOnLoadCallback(currentUpgradeStatus); 
				    
				 	//checkTVsOnline();
				 	//refreshCheckDevices_groups($("#grid_devices").bootgrid("getSelectedRows"));
				 	
					// var totalTvCount = $("#grid_devices").bootgrid("getTotalRowCount");
					// var selectedTv = $("#grid_devices").bootgrid("getSelectedRows").length;
					// if (deletedClick == "Yes" && (parseInt(selectedTv) == parseInt(totalTvCount))) {
					// 	deletedClick = "No";
					// 	$("#grid_devices").find("th.select-cell input").click();
					// }

			}).on("selected.rs.jquery.bootgrid", function(e, rows){
				checkboxChecked("devices");
			}).on("deselected.rs.jquery.bootgrid", function(e, rows){
			    checkboxChecked("devices");
			});
    };

    function tvModels() {
    	
		// $.ajax({
    	// 	url: './IPTVServlet',
    	// 	data: {'mode':'getTvModelsOverview'},
        //     async: false,
		// 	dataType: "json",
        //     success: function(chart_data){
        //         if(chart_data){
                    //chart_data = data; //$.parseJSON(data);
                    var chart_data = '{\"cols\":[{\"id\":\"\",\"label\":\"Topping\",\"pattern\":\"\",\"type\":\"string\"},'
                                     + '{\"id\":\"\",\"label\":\"Slices\",\"pattern\":\"\",\"type\":\"number\"}],'
                                     + '\"rows\":[{\"c\":[{\"v\":\"Mushrooms\",\"f\":null},{\"v\":3,\"f\":null}]},'
                                     + '{\"c\":[{\"v\":\"Onions\",\"f\":null},{\"v\":1,\"f\":null}]},'
                                     + '{\"c\":[{\"v\":\"Olives\",\"f\":null},{\"v\":1,\"f\":null}]},'
                                     + '{\"c\":[{\"v\":\"Zucchini\",\"f\":null},{\"v\":1,\"f\":null}]},'
                                     + '{\"c\":[{\"v\":\"Pepperoni\",\"f\":null},{\"v\":2,\"f\":null}]}]}';
                    drawTvModelsChart(chart_data, "TV Models");
        //         }
        //     },
        // });

    }
	
	function drawTvModelsChart(chart_data, chart_main_title) {
		var chart_data = new google.visualization.DataTable(chart_data);
		var currentSelection = new Array(chart_data.og.length);
		//pr1411
		for (var i = 0; i < chart_data.og.length; i++){
			currentSelection[i] = false;
			var curCount = chart_data.og[i].c[1]["v"];
			var curCountLength = curCount.toString().length;
			var curData = chart_data.og[i].c[0]["v"];
			var curDataLength = curData.length;
			var curColor = curData.substring(0,curDataLength-curCountLength-2);
			//for(var j = 0; j < lastTvModelsStatus.length; j++){
				//if(curColor == lastTvModelsStatus[j]){
					//currentSelection[i] = true;
				//}
			//}
		}
		
        var chart_options = {
            width:260,
            height:208,
            pieSliceText: 'percentage',
			tooltip: {
			      trigger: 'none',
			      text: 'value'
			},
			chartArea:{left:'5%',width:'100%',height:'100%'}
        };

		var chart_chart = new google.visualization.PieChart(document.getElementById('tv_models_chart_div'));
     	// The select handler. Call the chart's getSelection() method
		function selectHandler() {
			
			//tv_models_pie_chart_filter = getSelectHandleValue(chart_data, currentSelection, 0);//pr1411
			//console.log('The user selected ' + tv_models_pie_chart_filter);

			//pr1411
			//$('#grid_devices').bootgrid("reload");
            //chart_chart.setSelection(tv_models_pie_chart_selectArray);
        }
     	
		function clickHandler(targetID) {
			// var sliceNum = getClickHandlerSliceNum(targetID);
			// currentSelection[sliceNum] = !currentSelection[sliceNum]; //toggle
			// //pr1411
			// var curCount = chart_data.og[sliceNum].c[1]["v"];
			// var curCountLength = curCount.toString().length;
			// var curData = chart_data.og[sliceNum].c[0]["v"];
			// var curDataLength = curData.length;
			// var curColor = curData.substring(0,curDataLength-curCountLength-2);
			// for(var i = 0; i < lastTvModelsStatus.length; i++){
			// 	if(curColor == lastTvModelsStatus[i]){
			// 		if(currentSelection[sliceNum] == false){
			// 			lastTvModelsStatus.splice(i,1);
			// 		}
			// 		break;
			// 	}
			// }
			// if(currentSelection[sliceNum] == true && i == lastTvModelsStatus.length){
			// 	lastTvModelsStatus.push(curColor);
			// }
		}
	
        google.visualization.events.addListener(chart_chart, 'click', clickHandler);
        google.visualization.events.addListener(chart_chart, 'select', selectHandler);
        chart_chart.draw(chart_data, chart_options);
        //chart_chart.setSelection([]);//pr1411
    }

	function ShowClonedataInfo(obj){
        console.log("ShowClonedataInfo");	
        //var ID = obj.attr("uid");     
		// $.ajax({
		// 	type: 'POST',
		// 	data: {'mode':'requestIpCloneService', "id":ID},
		// 	async: false,
		// 	url: './IPTVServlet',
		// 	success: function(msg) {
		// 		msg = $.parseJSON(msg);
		// 		console.log("status="+msg.status);
		// 	}
		// }); 
		//setTimeout(function(){showCloneInfoDelay(ID);}, 1000);
		//showCloneInfoDelay(ID);
	}

    function DeleTvInfo(obj){
        console.log("DeleTvInfo");
		//DeleId = obj.attr("uid");
		//$('#tvDeleteModal').modal('show');		
	}

    function tvDownloadProgress(obj){	
        console.log("tvDownloadProgress");							
		// var power = obj.attr("power");
		// var flag = obj.attr("flag");
		// var uid = obj.attr("uid");
		// var tr = obj.parent().parent();
		// if(equalsIgnoreCase(power, "ON") || (equalsIgnoreCase(power, "STANDBY"))){
		// 	StopBlink(tr);
		// 	if(flag == "true"){
		// 		$('[name^="Download_"]').attr("flag", "false");
				
		// 		$.ajax({
		// 			type: 'POST',
		// 			data: {'mode':'download', "id":uid, "progress":"INP"},
		// 			dataType: "json",
		// 			url: './IPTVServlet',
		// 			contentType: 'application/x-www-form-urlencoded',				   
		// 			success: function(msg) {
		// 				$('[name^="Download_"]').attr("flag", "true");
		// 				if(msg.status == "success"){
							
		// 				}else {
		// 			        var message = 'TV is not connected or not ready!';
		// 					if(msg.reason)
		// 						message = msg.reason;
		// 					$().toastmessage('showErrorToast', message);
		// 				}		
		// 				$("#grid_devices").bootgrid("reload");
		// 			}			
		// 		});
		// 	}
		// }else{
		// 	$().toastmessage('showErrorToast', 'TV is not connected!');
		// } 
	}

    function tvUpdatingProgress(obj){
		console.log("tvUpdatingProgress");
		// var tr = obj.parent().parent();
		// var progress_status = "U";
		// var flag = obj.attr("flag");							

		// var firmware = tr.find("#tv_SwDiv").attr("assigned_firmwareid");
		// var clone = tr.find("#tv_CloneDiv").attr("assigned_cloneid");
		
		// var uid = obj.attr("uid");
		// var power = tr.find("[name^='powerstate_']").attr("power");
		// if((power!='ON')&&(power!='STANDBY')){			
		// 	$().toastmessage('showErrorToast', 'TV is not connected!');
		// 	return ;
		// }
	
		// var tvIsAnotherUpgrade = "false";
		// $.ajax({
		// 		type: 'POST',
		// 		async: false,
		// 		data: {'mode':'CheckTvAnotherUpgrade','tvids':uid,'cloneid':clone},
		// 		url: './IPTVServlet',
		// 		dataType: "json",
		// 		success: function(msg) {
		// 			var status = msg.status;
		// 			console.log("status="+status);
		// 			if (status == "tvAnotherUpgrade") {
		// 				tvIsAnotherUpgrade = "true";
		// 			}
		// 		}
		//  });
		// console.log("tvIsAnotherUpgrade="+tvIsAnotherUpgrade);
		
		// if (tvIsAnotherUpgrade != "true") {
		// 	if(firmware != "null" || clone != "null" ){	
		// 		StopBlink(tr);	
		// 		if(flag == "true"){
		// 			$('[name^="Updating_"]').attr("flag", "false");							
		// 			$.ajax({
		// 				type: 'POST',
		// 				data: {'mode':'updating', "id":uid, "progress":progress_status},
		// 				dataType: "json",
		// 				url: './IPTVServlet',
		// 				contentType: 'application/x-www-form-urlencoded',				   
		// 				success: function(msg) {
		// 					$('[name^="Updating_"]').attr("flag", "true");		
		// 					if(msg.status == "failed"){
		// 						$().toastmessage('showErrorToast', msg.reason);
		// 					}							
		// 					$("#grid_devices").bootgrid("reload");
		// 				}				
		// 			});
		// 	 	}
		// 	}else{		 
		// 		$().toastmessage('showErrorToast', 'Please assign clone or Firmware!');
		// 	}
		// } else {
		// 	$().toastmessage('showWarningToast', 'TV is another upgrade!');
		// }				
	}

    function tvRestartProgress(obj){
        console.log("tvRestartProgress");
		// var tr = obj.parent().parent();
		// var flag = obj.attr("flag");						
		// var type =  obj.attr("type");
		// var uid = obj.attr("uid");
		// //StopBlink(tr);
		// var curPowerStateRow=tr.find("[name^='powerstate_']");
		
		
		// if((tr.find("[name^='powerstate_']").attr("power") == "ON")||(tr.find("[name^='powerstate_']").attr("power") == "STANDBY")){
		// 	//tr.find("[name^='powerstate_']").attr("style", "color:rgb(255,0,0);");	
		// 	if(flag == "true"){
		// 		$('[name^="Restart"]').attr("flag", "false");
				
		// 		$.ajax({
		// 		type: 'POST',
		// 		data: {'mode':'power', "id":uid, "type":type, "power":"restart"},
		// 		dataType: "json",
		// 		url: './PowerServlet',
		// 		contentType: 'application/x-www-form-urlencoded',				   
		// 		success: function(msg) {
					
		// 			$('[name^="Restart"]').attr("flag", "true");		
										
		// 			if(msg.status == "success"){
		// 				//$("#grid_devices").bootgrid("reload");	
		// 				StartBlinkNow(curPowerStateRow,"orange");
		// 				console.log("fb_restart_StartBlinkNow");
		// 			}else {	
		// 				$().toastmessage('showErrorToast', 'TV is not connected!');
		// 			}
		// 		}				
		// 		}); 
		// 	}
		// }else{
		// 	$().toastmessage('showErrorToast', 'TV is not connected!');
		// }
		
	}

    function tvStopProgress(obj){
        console.log("tvStopProgress");
		// $('[name^="Updating_"]').attr("flag","true"); // reset the flag
		// $('[name^="Download_"]').attr("flag","true");

		// var progress_status = "ST";
		// var uid = obj.attr("uid");						
		// $.ajax({
		// 	type: 'POST',
		// 	data: {'mode':'updating', "id":uid, "progress":progress_status},
		// 	dataType: "json",
		// 	url: './IPTVServlet',
		// 	contentType: 'application/x-www-form-urlencoded',					   
		// 	success: function(msg) {															
		// 		$("#grid_devices").bootgrid("reload");								
		// 	}				
		// });	
	}

    function TriggerTvPowerstate(obj){
		console.log("TriggerTvPowerstate");
		// var tr = obj.parent().parent();
		// var flag =  obj.attr("flag");
		// var uid = obj.attr("tvid");												
		// var power = obj.attr("power");
		
		// var curPowerStateRow=tr.find("[name^='powerstate_']");
		// console.log("tr.html="+tr.html());
		
		// if(equalsIgnoreCase(power, "OFFLINE")){		
		// 	$().toastmessage('showErrorToast', 'TV is offline!');
		// }else{
		// 		//StopBlink(obj);
	
		// 	if(flag == "true") {
				
		// 		$('[name^="powerstate_"]').attr("flag", "false");	
				
		// 		$.ajax({								 
		// 			type: 'POST',
		// 			data: {'mode':"power", "id":uid, "type":"tv", "power":power},
		// 			dataType: "json",
		// 			url: './PowerServlet',
		// 			contentType: 'application/x-www-form-urlencoded',								
		// 			success: function(msg) {
		// 				$("#grid_devices").bootgrid('reload');
		// 				if(msg.status == "success"){										
		// 					$('[name^="powerstate_"]').attr("flag","true");
		// 					StartBlinkNow(curPowerStateRow,"blue");
		// 					console.log("fb_power_StartBlinkNow");
		// 					//console.log("fb_Trigger_ajax_OK");
							
		// 				}else{
		// 					$('[name^="powerstate_"]').attr("flag","false");
		// 				}
		// 			}								
		// 		});										
		// 	}
		// }
	}

    function checkboxChecked(flag){
        console.log("checkboxChecked");
		// UpdateProfile(flag);
		// if(flag == "devices"){
		// 	refreshCheckboxDevices();
		// } else if (flag == "groups") {
		// 	refreshCheckboxGroups("noChange", 0, 0);
		// }
		// RefreshUI();			
	}

    function isDownloadable(platformType){
		return platformType && (platformType.indexOf("2016 MS")!=-1 
		|| platformType.indexOf("2016 SS")!=-1
		|| platformType.indexOf("2019 MS")!=-1
		|| platformType.indexOf("2019 PS")!=-1);			
    }
    
	function removeItem(array, item){
	    for(var i in array){
	        if(array[i]==item){
	            array.splice(i,1);
	        }
	    }    
	    return array;
	}

    function StartBlink(obj){	
		blinkList = removeItem(blinkList,obj);		
		blinkList.push(obj);			
		clearInterval(blink);
		
		blink = setInterval( function() {			
			if(blinkList.length == 0){
				clearInterval(blink);
				return;
			}			
			for(var i = 0; i < blinkList.length; i++) {							
				if(blinkList[i].attr("style").indexOf("rgb(255,255,255)") > 0) {				
					blinkList[i].attr("style", "color:rgb(255,165,0);"); 
				}else {
					blinkList[i].attr("style", "color:rgb(255,255,255);"); 
				}
			}	
	    }, 300);		
	};
}]);