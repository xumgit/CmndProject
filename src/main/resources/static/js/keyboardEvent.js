


//key-enter & mouse left click both trigger
function enterEvent(event){
	var charCode = (event.which) ? event.which : event.keyCode;
	if(charCode == '13'){
		var id = event.currentTarget.id;
		$('#' + id).blur();
	}
}

function verifyInputContent(obj){
	
	var value = obj.val();
	console.log(obj.attr('orgValue'));
	if(value.indexOf('script') > 0){
		obj.val(obj.attr('orgValue'));
		$().toastmessage('showErrorToast','Failure: To prevent XSS , can not input "script" into this widget.');
		return false;
	}
	if(value.includes('\\') == true || value.includes('>') == true
			|| value.includes('<') == true){
		obj.val(obj.attr('orgValue'));
		$().toastmessage('showErrorToast','Failure: Special characters > < \ are not allowed for input widget.');
		return false;
	}
	return true;
}

//CR1086 for channels

/*function isValidIP(ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(ip);
} */

function encodeIptvUrl(obj){
	var ipaddress  = obj.find('[name="ipaddress"]').val();
	var ipport  = obj.find('[name="ipport"]').val();
	var ipchsid  = obj.find('[name="ipchsid"]').val();
	var ipchonid  = obj.find('[name="ipchonid"]').val();
	var ipchtsid  = obj.find('[name="ipchtsid"]').val();
	var castType = "unicast";
	var vbrOrcbr = "VBR"; //default
	
	
	//type == undefined denotes decode(obj.type) call this function(edit url), otherwise assembly data for url
	/*if(type == "2016" || type == "2014/2015"){
			vbrOrcbr = "VBR";
		//}
	}else if(type == "2013"){
		var urltmp = obj.find('[name="multicasturl"]').val();
		vbrOrcbr = urltmp.substring(urltmp.length-3);
		if(!(vbrOrcbr == "VBR" || vbrOrcbr == "CBR")){
			//2K13MS support VBR or CBR
			vbrOrcbr = "CBR";
		}
	}*/
	
	var urltmp =  obj.find('[name="multicasturl"]').val();
	if (typeof localStorage.iptvUrl2016 == 'string' && localStorage.iptvUrl2016.length > urltmp.length) {
		urltmp = localStorage.iptvUrl2016;
    }
	//var urltmp = obj.find('[name="multicasturl"]').val();
	
	var castTypePos = urltmp.indexOf("://");
	var castType_n = urltmp.substring(0,castTypePos);
	if(castType_n == "multicast"){
		castType = "multicast";
	}else{
		castType = "unicast";
	}
	
	var isIP = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(ipaddress)
	if(isIP){
		if(ipaddress.substring(0,3) >= 224 && ipaddress.substring(0,3) <= 239){
			castType = "multicast";
		}else{
			castType = "unicast";
		}
	}
	
	var pos = urltmp.lastIndexOf("/");
	vbrOrcbr = urltmp.substring(pos + 1);
	
	if(vbrOrcbr.indexOf("VBR") > -1){
		vbrOrcbr = "VBR";
	}else if(vbrOrcbr.indexOf("CBR") > -1){
		vbrOrcbr = "CBR";
	}else{
		vbrOrcbr = "VBR";
	}

	
	var url = castType + "://" + ipaddress + ":" + ipport + "/" + ipchsid + "/" + ipchonid + "/" + ipchtsid + "/" + vbrOrcbr;
	
	localStorage.setItem("iptvUrl2016", url);
	
	obj.find('[name="multicasturl"]').val(url);
	
	//check ip format
	//$('[name="ipaddress"]').trigger('blur');
	
}


function decodeIptvUrl(obj){
				
	var url = obj.find('[name="multicasturl"]').val();
	//multicast://239.232.209.113:50000/1/2/10/VBR
	//multicast://239.232.209.113:1234/0/0/0/CBR 
	//unicast://192.168.1.1:1234/0/0/0/VBR
	
	var dlSlashPos = url.indexOf("//"); 
	url = url.substring(dlSlashPos + 2);
	url = url.replace(':','/');
	var urlArr = url.split('/');
	
	obj.find('[name="ipaddress"]').val(urlArr[0]);
	obj.find('[name="ipport"]').val(urlArr[1]);
	obj.find('[name="ipchsid"]').val(urlArr[2]);
	obj.find('[name="ipchonid"]').val(urlArr[3]);
	obj.find('[name="ipchtsid"]').val(urlArr[4]);
	
	//don't change five parameter,and re-applied
	//encodeIptvUrl(obj,type);
		
	
}
