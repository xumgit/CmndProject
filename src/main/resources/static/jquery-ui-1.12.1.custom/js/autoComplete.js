/**
 * JavaScript Document
 * autoComplete.js
 * author: meng.xu
 * mailTo: meng.xu@tpv-tech.com
 *   time: 2016/12/23
 */

       var availableTags = new Array();
       var nullTags = ["Room can not be found","This value had selected"];
       var commaSymbol = [","];
       
       /* @getGuestIdByAjax
        * query data from database
        * */
       function getGuestIdFromDataBase(){
    		$.ajax({
     			type: 'POST',
     			data: {"type":'getGuestIdData'},
     			dataType: "json",
     			url: './pms',
     			contentType: 'application/x-www-form-urlencoded',				   
     			success: function(data) {
     				availableTags = [];
     			var	availableTags_length = data["availableTags"].length;
     				for(var i=0;i<availableTags_length;i++){
     					availableTags.push(data["availableTags"][i].roomid);
     				}                  
     			}			
     		}); 
       }   
       
       /* @split
        * @param val String
        * regular expression 
        * note: this method split is accord to regular expression
        *       according to "," split
        * */
       function split(val){
    	    return val.split(/,\s*/);
       }
       
       /* @extractLast
        * @param term String
        *  extract the last value
        * */
       function extractLast(term){
    	    return split(term).pop();
       }
       
   	   /* @isRepeat
   	    * @param arr Array
   	    * whether array have the same element
   	    * if return true, have the same element, 
   	    *    return false, not have the same element 
   	    * example: a=["x","y","x'],b=["x","y","z"]
   	    *          isRepeat(a), return true;  
   	    *          isRepeat(b), return false; 
   	    * */
   	   function isRepeat(arr){
			arr = removeArrElemBlank(arr);
            var hash = {};
            for(var j in arr) {
                if(hash[arr[j]]){
                	return true;
                }
                hash[arr[j]] = true;   
            }                  
            return false;
       }
   	   
   	   /* @removeArrElemBlank
   	    * @param arr Array
   	    * remove arr each element blank
   	    * example: a=[" x ","y ","z"]
   	    *      a=removeArrElemBlank(a);
   	    * result: a=["x,"y","z"]
   	    * */
   	   function removeArrElemBlank(arr){
			for(var i=0;i<arr.length;i++){
				arr[i] = $.trim(arr[i]);
			}
			return arr;
   	   }
   	   
   	   /* @alertNotExistValueDialog
   	    * alert this value is not exits dialog 
   	    * nullTags[0]
   	    * */
   	   function alertNotExistValueDialog(){
  	       layer.alert(nullTags[0], {
	    	      icon: 2,
	    	    offset: ['200px',''],
	    	      fix : true,
	    	      move: false,
	    	     title: ['error','font-size:18px;color:#f00;'],
	          closeBtn: false,
	    	       btn: ['ok'],
	    	   success: function (layero,index) {
	    		        $("#recipienttext_edit").blur();
	    		        $("#recipienttext").blur();
	    	            var btn = layero.find('.layui-layer-btn');
	    	            btn.css('text-align', 'center');
	    	            btn.css('font-size', '18px');
	  	    	        $(document).on('keydown', function(event){
	  	                     if(event.keyCode == 13){
	  	                        layer.close(index);
	  	                     }
	  	                  })
	    	           },
	    	      end: function(){
	    	    	      $("#recipienttext_edit").focus();
	    	    	      $("#recipienttext").focus();
	    	           }
	       });
   	   }
   	   
   	   /* @alertValueHadSelectedDialog
   	    * alert this value had selected dialog 
   	    * nullTags[1]
   	    * */
   	   function alertValueHadSelectedDialog(){
 	       layer.alert(nullTags[1], {
	    	      icon: 2,
	    	    offset: ['200px',''],
	    	      move: false,
	    	     title: ['error','font-size:18px;color:#f00;'],
	          closeBtn: false,
	    	       btn: ['ok'],
	  	       success: function (layero,index) {
	    	            $("#recipienttext_edit").blur();
	    	            $("#recipienttext").blur();
	  	    	        var btn = layero.find('.layui-layer-btn');
	  	    	        btn.css('text-align', 'center');
	  	    	        btn.css('font-size', '18px');
	  	    	        $(document).on('keydown', function(event){
	  	                    if(event.keyCode == 13){
	  	                       layer.close(index);
	  	                    }
	  	                 })
	  	    	       },
	  	    	  end: function(){
	  	    	    	  $("#recipienttext_edit").focus();
	  	    	    	  $("#recipienttext").focus();
	  	    	       }
	       });
   	   }
   	   
   	   /* @deleteArrElementAndReassign
   	    * delete array the last value if have it, then reassign value to DOMHtml value 
   	    * */
   	   function deleteArrElementAndReassign(){
	 	  var recipienttext_value_arr = removeArrElemBlank($("#recipienttext").val().split(commaSymbol[0]));
   	      var recipienttext_edit_value_arr = removeArrElemBlank($("#recipienttext_edit").val().split(commaSymbol[0]));
   		  if(recipienttext_value_arr.pop() == "" || recipienttext_edit_value_arr.pop() == ""){ 
   			  var recipienttext_last_value = recipienttext_value_arr[recipienttext_value_arr.length-1];
   			  var recipienttext_edit_last_value = recipienttext_edit_value_arr[recipienttext_edit_value_arr.length-1];
   			  var new_recipienttext_value = "";
   			  var new_recipienttext_edit_value = "";
   			  for(var i=0;i<recipienttext_value_arr.length-1;i++){
   				  new_recipienttext_value += recipienttext_value_arr[i] + commaSymbol[0];
   			  }
   			  for(var j=0;j<recipienttext_edit_value_arr.length-2;j++){
   				new_recipienttext_edit_value += recipienttext_edit_value_arr[j] + commaSymbol[0];
   			  }
   			  $("#recipienttext").val(new_recipienttext_value);
   			  $("#recipienttext_edit").val(new_recipienttext_edit_value);
   		  }else{
   			  var new_recipienttext_value = "";
   			  var new_recipienttext_edit_value = "";
   			  for(i=0;i<recipienttext_value_arr.length-1;i++){
   				  new_recipienttext_value += recipienttext_value_arr[i] + commaSymbol[0];
   			  }
   			  for(j=0;j<recipienttext_edit_value_arr.length-1;j++){
   				new_recipienttext_edit_value += recipienttext_edit_value_arr[j] + commaSymbol[0];
   			  }
   			  $("#recipienttext").val(new_recipienttext_value);
   			  $("#recipienttext_edit").val(new_recipienttext_edit_value);
   		  }
   	   }
   	   
   	   getGuestIdFromDataBase(); // first query from database
       
       // autoComplete event (core code), main entry
       $("#recipienttext_edit,#recipienttext").bind("keydown", function(event){
           if (event.keyCode === $.ui.keyCode.TAB &&
                   $(this).data("ui-autocomplete").menu.active){
                 event.preventDefault();
           }
       }).autocomplete({
           minLength: 0,
           autoFocus: true,
           source: function(request,response){ 
        	  // dynamic query form database
        	  getGuestIdFromDataBase(); 
        	  var search = request.term;
        	  
        	  // the following code can precise search, according to the first string
              /*availableTags = jQuery.grep(availableTags, function(value, key){	
                  if(extractLast(search).length >= 0){
				     return (value.substring(0,1).toLowerCase() == extractLast(search).substring(0,1).toLowerCase());
				  }		  
        	  });*/
        	  
              response($.ui.autocomplete.filter(availableTags, extractLast(search)));
              if(($.ui.autocomplete.filter(availableTags, extractLast(search)) == "")&&(extractLast(search).length > 0)){
            	  response($.ui.autocomplete.filter(nullTags, extractLast(nullTags[0])));
            	  $(".ui-menu .ui-state-focus,.ui-menu .ui-state-active").css({
            	       "font-weight": "bold",
                       "background": "red",
                       "overflow-y": "hidden",
                       "overflow-x": "hidden"  
            	  }).addClass("null-hit");
              }else{
				  var search_arr = search.split(commaSymbol[0]);
				  search_arr = removeArrElemBlank(search_arr);
				  search_arr.pop();
            	  $(".ui-menu-item div").each(function(index,domElm){
            		  $(this).bind('click',function(){          			  
            			  var ui_menu_item_div = $(".ui-menu-item div:eq(" + index + ")");
            			  if(ui_menu_item_div.text() == $(domElm).text()){
            				  ui_menu_item_div.addClass("hit");
            			  }
            			  if($.inArray($(domElm).text(),search_arr) > -1){
            				  response($.ui.autocomplete.filter(nullTags, extractLast(nullTags[1])));
            	   			  var new_value = "";
            	   			  for(i=0;i<search_arr.length;i++){
            	   				  new_value += search_arr[i] + commaSymbol[0];
            	   			  }
            	   			  $("#recipienttext").val(new_value);
            	   			  $("#recipienttext_edit").val(new_value);           				            				  
            				  alertValueHadSelectedDialog();
            			  }
            		  });	  
            	  });
              }
           }, 
           search: function(event,ui) {
        	   return true;
           },
           focus: function(event,ui){
               return false;
           },
           select: function(event,ui){
             var terms = split(this.value);
             terms.pop();
             terms.push(ui.item.value);
             terms.push("");
             this.value = terms.join(commaSymbol[0]);
             return false;
           }
         }).focus(function(){
        	 $(this).autocomplete("search");
        	 return false;
         });
     
      // handle keyboard event
   	  $(document).keydown(function(event){
          if(event.keyCode == 13){ 
        	  if($("#recipienttext").val().indexOf(nullTags[0]) > -1 ||
        		 $("#recipienttext_edit").val().indexOf(nullTags[0]) >-1 ){
        		  $(".ui-menu-item div.null-hit").click(); 
        	  }else if(isRepeat($("#recipienttext").val().split(commaSymbol[0])) ||
        			   isRepeat($("#recipienttext_edit").val().split(commaSymbol[0])) ){
        		  deleteArrElementAndReassign();
        		  alertValueHadSelectedDialog();
        	  }else{
        		  return true;
        	  }          
          } 	 
     });
     
   	 // bind click event
     $(document).ready(function(event){
    	 $(document).on('click','.ui-menu-item div.null-hit', function(){
  	       var orgVal = $("#recipienttext").val().split(nullTags[0])[0];
  	       $("#recipienttext").val(orgVal);
  	       alertNotExistValueDialog();
  	    });
     }); 
     
    // bind click event
    $(document).ready(function(event){
    	 $(document).on('click','.ui-menu-item div.null-hit', function(){
    	   var orgVal = $("#recipienttext_edit").val().split(nullTags[0])[0];
    	   $("#recipienttext_edit").val(orgVal);
    	   alertNotExistValueDialog();
    	});
     });	
    
    
    /*
     *  The following code is fixed [TF415PHSI00-659]
     *  author: meng.xu
     * */
    
    var characterTips = ["This value have Chinese","Input value exceed max length"];
    var maxLengthCharacters = 1000; 
    $(document).ready(function(){
    	$("#msgtext").next("div").text(maxLengthCharacters + " Character left");
    });
    
    /* @alertCharacterTips
     * alert Character tip, include have chinese or exceed max-length
     * @param index int
     * */
    function alertCharacterTips(index){
    	layer.alert(characterTips[index], {
  	      icon: 2,
  	    offset: ['200px',''],
  	      fix : true,
  	      move: false,
  	     title: ['error','font-size:18px;color:#f00;'],
        closeBtn: false,
  	       btn: ['ok'],
  	   success: function (layero,index) {
  		        $("#msgtext").blur();
  	            var btn = layero.find('.layui-layer-btn');
  	            btn.css('text-align', 'center');
  	            btn.css('font-size', '18px');
	    	        $(document).on('keydown', function(event){
	                     if(event.keyCode == 13){
	                        layer.close(index);
	                     }
	                  })
  	           },
  	      end: function(){
  	    	      $("#msgtext").focus();
  	           }
     });
    }
    
    /* @CheckChinese
     * wherther have chinese
     * @param val String
     * @return boolean
     * */
    function checkChinese(val){
       var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
       return reg.test(val);
    }
    
    /* @getTextareaLength
     * get textarea length
     * @param val String
     * @return len int
     * */
    function getTextareaLength(val){
        var len = 0;
  	    for (var i = 0; i < val.length; i++) {
          var a = val.charAt(i);
//  		  if(checkChinese(a)){
//  			$("#msgtext").val(val.substring(0,len));
//            $("#msgtext_edit").val(val.substring(0,len));
//  			alertCharacterTips(0); 			
//  			return len;
//  		  }
            len += 1;
        }
        return len;
   }
   
   /* @checkLength
    * check obj value length
    * @param obj DOMHtml
    * */ 
   function checkLength(obj){ 
        var curr = maxLengthCharacters - getTextareaLength(obj.value);
        if (curr > 0) {
  	       $("#msgtext").next("div").text(curr + " Character left");
  	       $("#msgtext_edit").next("div").text(curr + " Character left");
        } else {
        	$("#msgtext").val(obj.value.substring(0,maxLengthCharacters-1));
        	$("#msgtext_edit").val(obj.value.substring(0,maxLengthCharacters-1));
        	alertCharacterTips(1);       	
        }
   }
   
   // bind keyup event
   $("#msgtext,#msgtext_edit").keyup(function(event){
	   checkLength(this);
   });
