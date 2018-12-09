package com.xum.cmnd.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.xum.cmnd.common.CommonConstants;
import com.xum.cmnd.common.CommonVariables;
import com.xum.cmnd.iptvpolling.CloneItemDetails;
import com.xum.cmnd.iptvpolling.CloneItemStatus;
import com.xum.cmnd.iptvpolling.CloneToServerParameters;
import com.xum.cmnd.iptvpolling.SessionStatus;
import com.xum.cmnd.pojo.DevicesWithBLOBs;
import com.xum.cmnd.service.DevicesService;

@Controller
@RequestMapping(value = "/SmartInstall")
public class IPTVPoolingController {

	private static final Logger LOG = LogManager.getLogger(IPTVPoolingController.class);
		
	private static DevicesService devicesService;
	
	@Autowired(required = false)
	public IPTVPoolingController(DevicesService devicesService) {
		IPTVPoolingController.devicesService = devicesService;
    }
	
	@RequestMapping(value = "/iptvpolling")
	@ResponseBody
	public String iptvPolling() {
		String status = "N";
		String tvRetryFlag = "N";
		String tvUpgradeResult = "None";
		if(!CommonVariables.hashMap.isEmpty()) {
			status = "Y";
		    ArrayList<String> tvUpload = new ArrayList<String>();
		    ArrayList<String> tvUpgrade = new ArrayList<String>();
		    
		    for(Map.Entry<String, String> entry : CommonVariables.hashMap.entrySet()) {		    	
		    	if(entry.getKey().contains("TVUpload_")){
		    		String entryKey = entry.getKey();
		    		String tvUID = entryKey.substring(entryKey.indexOf('_') + 1);
		    		List<String> availableSettingNames = getAvailableSettingNames(tvUID, entry.getValue());
					if (availableSettingNames != null) {
		    		String result = checkSuccess(availableSettingNames, tvUID);
		    		tvUpload.add(result);
					}
		    	}else if(entry.getKey().contains("tvUpgrade_")){
		    		tvUpgrade.add(entry.getValue());	
		    	}else if(entry.getKey().contains("tvRetryFlag_")){
		    		tvRetryFlag = entry.getValue();	
		    	}else if(entry.getKey().contains("tvUpgradeResult_")){
		    		tvUpgradeResult = entry.getValue();	
		    	}			    		    	 
		    }
		    
		    Gson gson = new Gson();
		    status = "{\"TVUpload\":" + gson.toJson(tvUpload) + ",\"TVUpgrade\":" + gson.toJson(tvUpgrade) + 
		    		 ",\"TvLength\":\"" + devicesService.selectAllWithList().size() + "\",\"TvRetryFlag\":\"" + tvRetryFlag + 
		    		 "\",\"TvUpgradeResult\":\"" + tvUpgradeResult + "\"}";				
		    CommonVariables.hashMap.clear();		   	    
		}
		return status;
	}
	
	public static String checkSuccess(List<String> availableSettingNames, String tvUID) throws NullPointerException{
		
		String uploadedFilePath = "C:\\Philips\\SIServer\\upload\\" + tvUID; 
		File uploadedRootFile = new File(uploadedFilePath);
		if(uploadedRootFile == null || !uploadedRootFile.exists()){
			return "{\"result\":\"failed\",\"reason\":\"Nothing download from TV side!\"}";
		}
		File[] zipFiles = uploadedRootFile.listFiles();
		if(zipFiles != null && zipFiles.length > 0){
			for(File file : zipFiles){
				String fileName = file.getName();
				if(fileName.endsWith(".zip")){
					fileName = fileName.substring(0, fileName.indexOf(".zip"));
					availableSettingNames.remove(fileName);
				}
			}
		}
		
		if(availableSettingNames != null && availableSettingNames.size() > 0){
			return "{\"result\":\"failed\",\"reason\":\"Failed to download " + String.join(",", availableSettingNames) +" !\"}";
		}
		
		return "{\"result\":\"success\"}";
	}
	
	public static List<String> getAvailableSettingNames(String tvUID, String sessionStatus){
		List<String> settingNames = null;
		String tvType = "";
		DevicesWithBLOBs devicesWithBLOBs = devicesService.selectByPrimaryKey(tvUID);
		if (devicesWithBLOBs != null) {
			tvType = devicesWithBLOBs.getType();
		}
		LOG.info("tvType:" + tvType);
		Gson gson = new Gson();
		if (sessionStatus != null) {
			if (CommonConstants.NAME_2K19_PS.equalsIgnoreCase(tvType)) { // linux tv, special handle
				CloneToServerParameters cloneToServerParameters = gson.fromJson(sessionStatus, CloneToServerParameters.class);
				if (cloneToServerParameters != null) {
					CloneItemDetails[] cloneItemsAvailableToServer = cloneToServerParameters.getCloneItemsAvailableToServer();
					if(cloneItemsAvailableToServer != null && cloneItemsAvailableToServer.length > 0){
						settingNames = new ArrayList<String>();
						for(CloneItemDetails cloneItemsAvailable : cloneItemsAvailableToServer){
							String itemName = cloneItemsAvailable.getCloneItemName();
							if(!"MainFirmware".equalsIgnoreCase(itemName) && itemName != ""){
								settingNames.add(transferItemName(itemName));
							}
						}
						LOG.info("settingNames.size():" + settingNames.size());
					}
				}				
			} else {			
				SessionStatus session = gson.fromJson(sessionStatus, SessionStatus.class);
				CloneItemStatus[] statusAll = session.getCloneItemStatus();
				if(statusAll != null && statusAll.length > 0){
					settingNames = new ArrayList<String>();
					for(CloneItemStatus status : statusAll){
						if("Successful".equalsIgnoreCase(status.getCloneStatus())){
							String itemName = status.getCloneItemDetails().getCloneItemName();
							if(! "MainFirmware".equalsIgnoreCase(itemName)){
								settingNames.add(transferItemName(itemName));
							}
						}
					}
				}
			}
		}
		return settingNames;
	}
	
	private static String transferItemName(String itemName){
		String name = itemName;
		if("TVChannelList".equalsIgnoreCase(name)){
			name = "ChannelList";
		}else if("SmartInfoImages".equalsIgnoreCase(name)){
			name = "SmartInfoShow";
		}else if("SmartInfoPages".equalsIgnoreCase(name)){
			name = "SmartInfoBrowser";
		}else if ("CustomDashboardFallback".equalsIgnoreCase(name)) {
			name = "LocalCustomDashboard";
		}
		return name;
	}
	
}
