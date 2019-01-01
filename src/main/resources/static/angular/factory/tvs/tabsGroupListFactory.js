/**
 * tvs => tabs grouplist factory
 */

cmndProjectApps.factory('loadGroupListDataFactory', ['$timeout', 'tabsGroupListService', 
function($timeout, tabsGroupListService){
    return({
        loadGroupListData: loadGroupListData
    });

    function loadGroupListData() {
        $timeout(loadGroupListDataSync, 0, false);
    };

	function loadGroupListDataSync() {
        var grid_groups_data = $("#grid_groups").bootgrid({
		    ajax: true,rowCount: [10, 20, 30, 50],
		    post: function (){
		        return {
		        		type: 'group'
					};
		    },
		    //url: "./dev",
			selection: true,
			multiSelect: true,
			keepSelection: true,
			//columnNeedRemoved: group_columns,
			callbackFunction: function(arr){
				//SaveInvisibleColumns('grid_groups',arr);
			},
			 formatters: {
			     
				  "power": function(column, row)
				  {
					  var div="ON";
					  var powerStatus = row.power.toUpperCase();
					  groupMd5 = hex_md5(row.name);
					  if(powerStatus == "ON") {			
							div = '<a><span name="powerstate_'+row.name+'"  id="g_'+ groupMd5+'" sw="' + row.sw + '" cl="' + row.cl + '" data="'+row.tvs+'" tvid = "'+row.name+'" power="'+powerStatus+'" title="' + powerStatus + '" flag="true"  class="glyphicon glyphicon-off" style="color:rgb(0,128,0);"></span></a>';  
						} else if(powerStatus == "REBOOT"){
							div = '<a><span name="powerstate_'+row.name+'"  id="g_'+ groupMd5+'" sw="' + row.sw + '" cl="' + row.cl + '" data="'+row.tvs+'" tvid = "'+row.name+'" power="'+powerStatus+'" title="' +powerStatus + '" flag="true"  class="glyphicon glyphicon-off" style="color:rgb(255,0,0);"></span></a>';  
						}  else if(powerStatus == "OFFLINE"){
							div = '<a><span name="powerstate_'+row.name+'"  id="g_'+ groupMd5+'" sw="' + row.sw + '" cl="' + row.cl + '" data="'+row.tvs+'" tvid = "'+row.name+'" power="'+powerStatus+'" title="' + powerStatus + '" flag="true"  class="glyphicon glyphicon-off" style="color:rgb(128,128,128);"></span></a>';  
						}else {
							powerStatus = "STANDBY";
							div = '<a><span name="powerstate_'+row.name+'"  id="g_'+ groupMd5+'" sw="' + row.sw + '" cl="' + row.cl + '" data="'+row.tvs+'" tvid = "'+row.name+'" power="'+powerStatus+'" title="' + powerStatus + '" flag="true"  class="glyphicon glyphicon-off" style="color:rgb(255,0,0);"></span></a>';  
						}
					return div;
				  },
				  "name": function(column, row)
				  {
		            return  '<input type="text" onchange="groupNameField(this);" value ="'+row.name+'" orgName="' + row.TVName +
		            '" ONKEYDOWN="javascript:return enterEvent(event);"' + 
		            'style="float:left; text-align:center;border:0px solid #dddddd; background: none repeat scroll 0 0 ;width:100%;" />';
		          },
				  "devices": function(column, row)
				  {
		            return '<div id="onlineList">' +row.len  + '</div>';
		          },
		          
		    	  "sw": function(column, row)
				  {
		    		  var showFwInfo = "None";
		    		  if(row.progress === "U" && row.firmwareId != 0){
		    			  var sw = row.sw;
		    			  if(sw.indexOf("TPM153") > -1){
			    			  var preString =  sw.substring(0, sw.length - 5);
			    			  showFwInfo = preString + row.siSw;
		    			  }else if (sw.indexOf("TPM181") > -1) {
		    				  showFwInfo = row.sw;
		    			  }else{//
		    				  showFwInfo = "TPN141HE_004.00" + row.siSw + ".128";
		    			  }
		    		  }else{
		    			  showFwInfo = row.sw;
		    		  }
		    	
		    		  return '<div class="g_sw_select_info" g_sw_select_id='+row.firmwareId+'>'+showFwInfo+'</div>';
		    		  
		            //return  '<div id="tv_SwDiv" sw="' + row.sw + '"  title="' + row.sw + '">'+ row.sw +' </div>';
		          },		          
		  	          
		      	  "clone": function(column, row)
				  {
		      		  var showCloneInfo = "None";
		    		  //if(row.progress === "U" && row.cloneId != 0){
		    			  showCloneInfo = row.cl;
		    		  //}else{
		    			  //showCloneInfo = row.cl;
		    		  //}
		    		  return '<div class="g_cl_select_info" g_cl_select_id='+row.cloneId+'>'+showCloneInfo+'</div>';
		      		  //return  '<div id="tv_CloneDiv" progress="' + row.progress+'" cl="' + row.cl + '"  title="' + row.cl + '">'+ row.cl +' </div>';
		          },		          
		          	
				  "commands": function(column, row)
				  {
					var div="";
					if(row.progress == "INP"){
						div='<a title="Edit" gname="'+row.name+'" id="edit_' + row.tvs+'" tvids = "'+row.tvs+'" name="groupEdit" style="float:left;padding-right: 2px;"> <span class="glyphicon glyphicon-edit" style="font-size:18px;"></span></a>&nbsp;' +							
						'<a title="Delete" id="groupDelete_'+row.tvs+'" uname = "'+row.name+'" name="groupDelete" style="float:left;padding-right: 2px;"> <span class="glyphicon glyphicon-trash"style="color: rgb(212, 106, 64);font-size:18px;"></span></a>&nbsp;' +						
						'<a title="Updating" progress="' + row.progress+'" tvsonline="'+row.tvsonline+'" id="g_'+ row.name+'" power="'+row.power+'" uname="'+row.name+'" name="groupUpdating_'+row.name+'" flag="true" style="float:left;padding-right: 2px;"> <span class="glyphicon glyphicon-refresh" style="display:none;font-size:18px;"></span></a>&nbsp;'+
						'<a title="Restart" id="g_'+ row.name+'" uid="'+row.name+'" name="Restart"  flag="true" type="group" style="float:left;padding-right: 2px;"> <span class="glyphicon glyphicon-repeat" style="font-size:18px;"></span></a>&nbsp;'+
						'<a title="Stop" data="' + row.tvs + '" power="'+row.power+'" uname="'+row.name+'" name="groupStop" style="float:left;padding-right: 2px;" ><span class="glyphicon glyphicon-stop" style="color:rgb(212, 106, 64);font-size:18px;" ></span></a>&nbsp;' +
						'<img class="hideIcon" name="groupAni" style="width: 18px;float:left;" src="/images/3.gif" />';
					}else{
						div='<a title="Edit" gname="'+row.name+'" id="edit_' + row.tvs+'" tvids = "'+row.tvs+'" name="groupEdit" style="float:left;padding-right: 2px;"> <span class="glyphicon glyphicon-edit" style="font-size:18px;"></span></a>&nbsp;' +							
						'<a title="Delete" id="groupDelete_'+row.tvs+'" uname = "'+row.name+'" name="groupDelete" style="float:left;padding-right: 2px;"> <span class="glyphicon glyphicon-trash"style="color: rgb(212, 106, 64);font-size:18px;"></span></a>&nbsp;' +						
						'<a title="Updating" progress="' + row.progress+'" tvsonline="'+row.tvsonline+'" id="g_'+ row.name+'" power="'+row.power+'" uname="'+row.name+'" name="groupUpdating_'+row.name+'" flag="true" style="float:left;padding-right: 2px;"> <span class="glyphicon glyphicon-refresh" style="font-size:18px;"></span></a>&nbsp;'+
						'<a title="Restart" id="g_'+ row.name+'" name="Restart" uid="'+row.name+'" flag="true" type="group" style="float:left;padding-right: 2px;"> <span class="glyphicon glyphicon-repeat" style="font-size:18px;"></span></a>&nbsp;'+
						'<a title="Stop"  data="' + row.tvs + '" power="'+row.power+'" uname="'+row.name+'" name="groupStop" style="float:left;padding-right: 2px;"><span class="glyphicon glyphicon-stop"  style="color:rgb(212, 106, 64);display:none;font-size:18px;"></span></a>&nbsp;' +
						'<img class="hideIcon" name="groupAni" style="display:none;width: 18px;float:left;" src="/images/3.gif" />';
					}
		            return div;
		          }					  
			   }
			   
			}).on("loaded.rs.jquery.bootgrid",function(){
				// allLoadGroup = "no";
				// localStorage.setItem("group_rowCount",  $("#grid_groups").bootgrid("getRowCount"));
				// localStorage.setItem("group_searchPhrase",  $("#grid_groups").bootgrid("getSearchPhrase"));
	
				// LoadIPProfile("groups");
				// grid_groups_data.find("[name^='powerstate_']").each(function(){
				// 	if($(this).attr("power")=="REBOOT")
				// 		StartBlink($(this));
				// });
				// RefreshUI();
				// refreshCheckGroups_devices($("#grid_groups").bootgrid("getSelectedRows"));
			grid_groups_data.find("[id^='edit_']").on("click",function(e){
				    //GroupEdit($(this));
			}).end().find("[id^='groupDelete_']").on("click",function(e){	
					//DeleGroupInfo($(this));
			}).end().find("[name^='groupUpdating_']").on("click",function(e){	
					//GroupUpdatingProgress($(this));
			}).end().find("[name^='Restart']").on("click",function(e){	
					//GroupRestartProgress($(this));
			}).end().find("[name^='groupStop']").on("click",function(e){	
					//GroupStopProgress($(this));
			}).end().find("[name^='powerstate_']").on("click",function(e){
					//TriggerGroupPowerstate($(this));
			});
		}).on("selected.rs.jquery.bootgrid", function(e, rows){
		    //checkboxChecked("groups");  
		    //updateForSelected("groups");
		}).on("deselected.rs.jquery.bootgrid", function(e, rows){
		    //checkboxChecked("groups");
		});
    }
}]);