package com.xum.cmnd.iptv;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.apache.commons.lang.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.xum.cmnd.common.CommonVariables;
import com.xum.cmnd.pojo.DevicesWithBLOBs;
import com.xum.cmnd.service.DevicesService;
import com.xum.cmnd.utils.JAPITUtils;
import com.xum.cmnd.utils.PlatformUtils;
import com.xum.cmnd.utils.Utils;

@Component(value = "tVDiscoveryService")
public class TVDiscoveryService {

	private static final Logger LOG = LogManager.getLogger(TVDiscoveryService.class);
	
	@Autowired
	private DevicesService devicesService;
	
	public String handleTVDiscoveryService(JSONObject commandDetails, JSONObject webServiceParameters, String clientip) {
		String tvUniqueId = "";
        if (webServiceParameters.get("TVUniqueID") != null) {
            tvUniqueId = webServiceParameters.get("TVUniqueID").toString();
            LOG.info("before tvUniqueId="+tvUniqueId);
            if (tvUniqueId != null && tvUniqueId != "") {
            	LOG.info("remove tvUniqueId");
            	tvUniqueId = tvUniqueId.trim();
            }
        }
		LOG.info(" clientip=" + clientip + ", TVUniqueID=" + tvUniqueId);
        
		JSONObject tvDiscoveryParameters = (JSONObject) commandDetails.get("TVDiscoveryParameters");               			
		String powerStatus = tvDiscoveryParameters.get("PowerStatus").toString();
		String tv_Serial_Number = tvDiscoveryParameters.get("TVSerialNumber").toString();
		String tv_Model_Number = tvDiscoveryParameters.get("TVModelNumber").toString();
		String tv_Room_Id = tvDiscoveryParameters.get("TVRoomID").toString();
		String tv_mac_Address = "NO";
		String tv_ip = tvDiscoveryParameters.get("TVIPAddress").toString();
		
		if(tv_ip !=null && tv_ip.length()>0) {
			clientip = tv_ip;
		}
		
    	if(("".equals(tv_Room_Id))||(null == tv_Room_Id)) {
    		tv_Room_Id = "0";
		}
        if (tvDiscoveryParameters.get("TVMACAddress") != null) {
            tv_mac_Address = tvDiscoveryParameters.get("TVMACAddress").toString();
        }
        String tv_VSecure_Id = "NO";
        if(tvDiscoveryParameters.get("VSecureTVID") != null) {
    		tv_VSecure_Id = tvDiscoveryParameters.get("VSecureTVID").toString();
        }
        if(StringUtils.isEmpty(tvUniqueId)){
        	LOG.info("TVUniqueID is empty,using default");
        	
        	tvUniqueId = "" + tv_Serial_Number + tv_mac_Address.replaceAll(":","");
        	//return JAPITUtils.error(JAPITUtils.WEB_SERVICE, "TVDiscoveryService", "TVUniqueID is empty.");
        }
		
        boolean isNew = false;
        String datetime = Utils.GetDate();       
        Date dateName = new Date();        
        SimpleDateFormat ft = new  SimpleDateFormat("dd MMM yyyy hh:mm:ss", Locale.ENGLISH);
        DevicesWithBLOBs devicesWithBLOBs = this.devicesService.selectByPrimaryKey(tvUniqueId);
        if (devicesWithBLOBs == null) {
        	isNew = true;
        	devicesWithBLOBs = new DevicesWithBLOBs();
        	devicesWithBLOBs.setTvname("TV "+ft.format(dateName));
        	devicesWithBLOBs.setId(tvUniqueId);
        	devicesWithBLOBs.setTvuniqueid(devicesWithBLOBs.getId());
        	devicesWithBLOBs.setCreateddate(datetime);
        }
            	
        String tvRoomId = "";     	
        if (devicesWithBLOBs != null) {
			tvRoomId = Utils.getTvRoomId(devicesWithBLOBs.getTvroomid());
        }
        	
        boolean bChange=false;
		if(devicesWithBLOBs!=null && ((tv_Serial_Number != null && !(tv_Serial_Number.equals(devicesWithBLOBs.getTvserialnumber())))
						||(tv_Model_Number !=null && !(tv_Model_Number.equals(devicesWithBLOBs.getTvmodelnumber())))
					    ||(tv_Room_Id != null && !(tv_Room_Id.equals(tvRoomId)))
					    ||(tv_mac_Address != null && !((tv_mac_Address).equals(devicesWithBLOBs.getTvmacaddress())))
					    ||(powerStatus != null && !(powerStatus.equals(devicesWithBLOBs.getPowerstatus())))
					    ||(clientip != null && !(clientip.equals(devicesWithBLOBs.getTvipaddress()))))) {
			bChange = true;
		}
        	
		devicesWithBLOBs.setTvserialnumber(tv_Serial_Number);
		devicesWithBLOBs.setTvmodelnumber(tv_Model_Number);
		devicesWithBLOBs.setTvroomid(tv_Room_Id);
		devicesWithBLOBs.setTvmacaddress(tv_mac_Address);		
		devicesWithBLOBs.setVsecuretvid(tv_VSecure_Id);			
		devicesWithBLOBs.setPowerstatus(powerStatus);
		devicesWithBLOBs.setTvipaddress(clientip);
		devicesWithBLOBs.setLastonline(datetime);			
		devicesWithBLOBs.setType(PlatformUtils.convertTvModelNumberToType(tv_Model_Number));  
		devicesWithBLOBs.setNetworkinterfaceip(JAPITUtils.getServerIpFromSameRoute(tv_ip));

		int affectRow = this.devicesService.insertSelective(devicesWithBLOBs);
		
		LOG.info("bChange=" + bChange + ",affectRow=" + affectRow);
		if(bChange) {
			CommonVariables.hashMap.put("tv", "change"); 				
			//PmsUtils.setUpdated();
		}
			
		if(!isNew){
			/*GroupsManager groupManager = new GroupsManager();
			Groups[] groups = groupManager.loadByWhere("where TVId='" + iptv.getId() + "' ORDER BY GroupName");
			if(groups != null && groups.length > 0){
				for(Groups group : groups){
					group.setPowerstatus(powerStatus);
					groupManager.save(group);
				}
			}
				
			Groups[] groupList = groupManager.loadByWhere("where TVId='" + iptv.getId() +"' and PowerStatus LIKE '%"+ reboot +"%' ORDER BY GroupName");
				
			if (groupList != null && groupList.length > 0) {
				String _groupname = null;
				for(Groups gtv : groupList) {
					if(!gtv.getGroupname().equalsIgnoreCase(_groupname)){
						_groupname = gtv.getGroupname();						
						hashMap.put("group", "change");
					}		
				}				
			}*/
		}
		
		String data = "";
		data = JAPITUtils.GetPollingFrequency(tvUniqueId, "10");
		/*try {
			IPProfile lastConfig = IPProfile.loadIPProfile();
			if (lastConfig != null) {
				data = JAPITUtils.GetPollingFrequency(tvUniqueId, lastConfig.getTvDiscovery());	
			} else {
				data = JAPITUtils.GetPollingFrequency(tvUniqueId, "10");
				IPProfile.checkIPProfile(lastConfig);
				LOG.info("default value");
			}	    
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
			//lizzy : although Error, but still need to feedback a msg to TV
			data = JAPITUtils.GetPollingFrequency(tvUniqueId, "10");	
		}*/	
		return data;
	}
	
}
