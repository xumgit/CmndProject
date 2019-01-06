package com.xum.cmnd.iptv;

import java.util.ArrayList;

import org.apache.commons.lang.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.xum.cmnd.common.CommonVariables;
import com.xum.cmnd.pojo.DevicesWithBLOBs;
import com.xum.cmnd.service.DevicesService;
import com.xum.cmnd.utils.JAPITUtils;
import com.xum.cmnd.utils.PlatformUtils;
import com.xum.cmnd.utils.Utils;

@Component(value = "iPCloneService")
public class IPCloneService {
	
	private static final Logger LOG = LogManager.getLogger(IPCloneService.class);
	
	@Autowired
	private DevicesService devicesService;
	
	public String handleIPCloneService(JSONObject commandDetails, JSONObject webServiceParameters, String clientip){
		String tvUniqueId = "";
		String ret_data = " ";
		JSONObject ipCloneParameters = null;
        if (webServiceParameters.get("TVUniqueID") != null) {
            tvUniqueId = webServiceParameters.get("TVUniqueID").toString();
            LOG.info("before tvUniqueId="+tvUniqueId);
            if (tvUniqueId != null && tvUniqueId != "") {
            	LOG.info("remove tvUniqueId");
            	tvUniqueId = tvUniqueId.trim();
            }          
        }
		LOG.info("IPCloneService, clientip=" + clientip + ", TVUniqueID=" + tvUniqueId);
		if (StringUtils.isEmpty(tvUniqueId)) {
            return JAPITUtils.error(JAPITUtils.WEB_SERVICE, "IPCloneService", "TVUniqueID is empty.");
        }
		
		try {
			DevicesWithBLOBs tv = devicesService.selectByPrimaryKey(tvUniqueId);						
			if (tv == null) {
				//getDevices(clientip);
				ret_data = JAPITUtils.error(JAPITUtils.WEB_SERVICE, "IPCloneService", "TV no found, TVUniqueId=" + tvUniqueId);
			} else {
				String type =  tv.getType();
				
				if (CommonVariables.CLONE_MODE_UPGRADE.equals(tv.getCloneMode())) {
					LOG.info("IPCloneService for upgrade,tvProgress=" + tv.getProgress());					
				} else if(CommonVariables.CLONE_MODE_UPLOAD.equals(tv.getCloneMode())) {
					LOG.info("IPCloneService for upload, tvProgress=" + tv.getUploadProgress());						
				}
				
				Object upgradeParameters = commandDetails.get("IPCloneParameters");  
				Object uploadParameters = commandDetails.get("CloneToServerParameters"); 
				
				//PR761
				String  previousPowerStatus = tv.getPowerstatus();
				String  previousProgress = tv.getProgress();
				LOG.info("previousPowerStatus="+previousPowerStatus+"\tpreviousProgress="+previousProgress);
				//check upgrade status
				if (upgradeParameters != null) {
					ipCloneParameters = (JSONObject) upgradeParameters; 	
					JSONArray cloneItemsRequiredForUpgrade = (JSONArray) ipCloneParameters.get("CloneItemsRequiredForUpgrade");
					boolean isTypeContains = PlatformUtils.isContainsType(type);
					LOG.info("type:" + type + ",isTypeContains:" + isTypeContains);
					if (PlatformUtils.isContainsType(type)) {
						//2K16 Android read Clone Identifier version 
						JSONObject CloneSessionStatus = (JSONObject) ipCloneParameters.get("CloneSessionStatus");
						JSONArray CloneItemStatus = (JSONArray) CloneSessionStatus.get("CloneItemStatus");
						
						tv.setLastonline(Utils.GetDate());
						if (Utils.isReachable(clientip)) {
							tv.setTvipaddress(clientip);
						}
						// update Firmware and Clone Identifiers 
						ArrayList <String> identifiersList = new ArrayList<String>();
						String cloneIdentifiers = null;
						String Identifier = null;
						boolean hashMapflag = false;
						for(int i=0; i<CloneItemStatus.size(); i++) {	
							try{
				            	JSONObject item = (JSONObject) CloneItemStatus.get(i);				            	
				            	JSONObject CloneItemDetails = (JSONObject) item.get("CloneItemDetails");				            	
				            	String clone = CloneItemDetails.get("CloneItemName").toString();
				            	if (clone.equalsIgnoreCase("MainFirmware")) {	
				            		Identifier = CloneItemDetails.get("CloneItemVersionNo").toString();	 
				            		if ((Identifier!=null)&&(Identifier.length()>0) && ((tv.getTvFirmwareIdentifier()==null)||
				            						(!Identifier.equalsIgnoreCase(tv.getTvFirmwareIdentifier().toString())))) {
				            			tv.setTvFirmwareIdentifier(Identifier);
				            			hashMapflag = true;
				            		}
				            	}
				            	if (clone.equalsIgnoreCase("TVSettings") || clone.equalsIgnoreCase("TVChannelList") 
				            	   || clone.equalsIgnoreCase("WelcomeLogo") || clone.equalsIgnoreCase("SmartInfoImages") 
				            	   || clone.equalsIgnoreCase("SmartInfoPages") || clone.equalsIgnoreCase("CustomDashboardFallback")
				            	   || clone.equalsIgnoreCase("MediaChannels") || clone.equalsIgnoreCase("AndroidApps")
				            	   || clone.equalsIgnoreCase("Script") || clone.equalsIgnoreCase("RoomSpecificSettings")) {  
				            		
				            		Identifier = CloneItemDetails.get("CloneItemVersionNo").toString();	 
				            		if ((Identifier!=null)&&(Identifier.length()>0)) {
				            			identifiersList.add(CloneItemDetails.get("CloneItemVersionNo").toString());   
				            		}
				            		//Sorting using Anonymous inner class type
				            		//Collections.sort(identifiersList,Collections.reverseOrder());
				            	}
							}catch(Exception ex){
								LOG.error(ex.getMessage(), ex);
							}
			            }

						if (!identifiersList.isEmpty()) {
							//cloneIdentifiers  = identifiersList.toString();
							//cloneIdentifiers = cloneIdentifiers.replace("[","");
							//cloneIdentifiers = cloneIdentifiers.replace("]","");
							
							//2016 MS is the same as 2016 SS 
							String maxItemVersion = Utils.getMaxItemVersion(identifiersList, "2016 MS");
							
							if((tv.getTvCloneIdentifiers()==null) && (!maxItemVersion.equalsIgnoreCase(tv.getTvCloneIdentifiers()))){
								cloneIdentifiers = Utils.uniformDateFormatForTvCloneIdentifiers(identifiersList,"2016");
								tv.setTvCloneIdentifiers(maxItemVersion);
								LOG.info("cloneIdentifiers Uniform for 2K16 Android cloneIdentifiers(No equal)="+cloneIdentifiers);
								hashMapflag = true;
							}
						}
						
						/*//compatible for PR841
						if(cloneIdentifiers.equalsIgnoreCase(tv.getTvCloneIdentifiers().toString())){
							cloneIdentifiers = uniformDateFormatForTvCloneIdentifiers(identifiersList,"2016");
							tv.setTvCloneIdentifiers(cloneIdentifiers);
							iptvmanager.save(tv);
							System.out.println("cloneIdentifiers Uniform for 2K16 Android cloneIdentifiers="+cloneIdentifiers);
						}*/
						LOG.info("hashMapflag:" + hashMapflag);
						if (hashMapflag) {
							devicesService.updateByPrimaryKeySelective(tv);
							hashMapflag = false;
							CommonVariables.hashMap.put("tv", "change");				
						}
					} else if ("2K14/2K15-MS".equalsIgnoreCase(type)) {
						//2K14 read Clone Identifier version.
						if (cloneItemsRequiredForUpgrade != null) { 
							tv.setLastonline(Utils.GetDate());
							if (Utils.isReachable(clientip)) {
								tv.setTvipaddress(clientip);
							}
							// update Firmware and Clone Identifiers 
							@SuppressWarnings("rawtypes")
							ArrayList identifiersList = new ArrayList();
							String cloneIdentifiers = null;
							String Identifier = null;
							boolean hashMapflag = false;
				
							for(int i=0; i<cloneItemsRequiredForUpgrade.size(); i++) {	
								try {
					            	JSONObject item = (JSONObject) cloneItemsRequiredForUpgrade.get(i);            	
					            	String clone = item.get("CloneItemName").toString();
					            	if (clone.equalsIgnoreCase("MainFirmware")) {	
					            		Identifier = item.get("CloneItemVersionNo").toString();	 
					            		if ((Identifier!=null)&&(Identifier.length()>0)&&((tv.getTvFirmwareIdentifier()==null)
					            				||(!Identifier.equalsIgnoreCase(tv.getTvFirmwareIdentifier().toString())))) {
					            			tv.setTvFirmwareIdentifier(Identifier);
					            			hashMapflag = true;
					            		}
					            	}
					            	if(clone.equalsIgnoreCase("TVSettings") || clone.equalsIgnoreCase("TVChannelList") 
					            	   || clone.equalsIgnoreCase("WelcomeLogo") || clone.equalsIgnoreCase("SmartInfoImages") 
					            	   || clone.equalsIgnoreCase("SmartInfoPages") || clone.equalsIgnoreCase("CustomDashboardFallback")) {  
					            		
					            		Identifier = item.get("CloneItemVersionNo").toString();	 
					            		if((Identifier!=null)&&(Identifier.length()>0)){
					            			identifiersList.add(item.get("CloneItemVersionNo"));   
					            		}
					            		//Sorting using Anonymous inner class type
					            		//Collections.sort(identifiersList,Collections.reverseOrder());
					            	}
								} catch(Exception ex) {
									LOG.error(ex.getMessage(), ex);
								}
				            }

							if (!identifiersList.isEmpty()) {
								cloneIdentifiers  = identifiersList.toString();
								cloneIdentifiers = cloneIdentifiers.replace("[","");
								cloneIdentifiers = cloneIdentifiers.replace("]","");		
								if((tv.getTvCloneIdentifiers()==null) && 
										(!cloneIdentifiers.equalsIgnoreCase(tv.getTvCloneIdentifiers()))){
									cloneIdentifiers = Utils.uniformDateFormatForTvCloneIdentifiers(identifiersList,"2K14/2K15-MS");
									tv.setTvCloneIdentifiers(cloneIdentifiers);	
									hashMapflag = true;
								}
								if(cloneIdentifiers.equalsIgnoreCase(tv.getTvCloneIdentifiers().toString())){
									cloneIdentifiers = Utils.uniformDateFormatForTvCloneIdentifiers(identifiersList,"2K14/2K15-MS");
									tv.setTvCloneIdentifiers(cloneIdentifiers);
									devicesService.updateByPrimaryKeySelective(tv);
									LOG.info("cloneIdentifiers Uniform for 2K14/2K15-MS cloneIdentifiers="+cloneIdentifiers);
								}
							}
							if (hashMapflag) {
								devicesService.updateByPrimaryKeySelective(tv);
								hashMapflag = false;
								CommonVariables.hashMap.put("tv", "change");				
							}
						}
					}
					//TODO to be tidying up the code by TV type and parameter.
					//CloneToServerParameters judge cloneToServer via IP and Android has the para, 2K14MS not.
					if(uploadParameters != null){  //android TV
						JSONObject cloneToServerParameters = (JSONObject) uploadParameters;  
						String currentUpgradeStatus = ipCloneParameters.get("CurrentUpgradeStatus").toString();
						String cloneToServerStatus = cloneToServerParameters.get("CloneToServerStatus").toString();
						
						LOG.info("tvip=" + clientip + ", upgradeStatus=" + currentUpgradeStatus
								+ ", uploadStatus=" + cloneToServerStatus);
						
						int MaxUpdateTVNum = 0;
						int updateDelay = 0;				
						
						//when upgrade clone has script cause reinstall tv, 
						//tv enter IIC mode, again detect clone url, than cmnd resend clone url 
						//boolean isReSendCloneUrl = checkReSendCloneUrl(type, tv.getCloneid());
						//LOG.info("IPCloneService=>isReSendCloneUrl="+isReSendCloneUrl);
						
						if ("ReadyForUpgrade".equalsIgnoreCase(currentUpgradeStatus)){
							
						} else if ("UpgradeInProgress".equalsIgnoreCase(currentUpgradeStatus)){
							
						} else if ("NotInUpgradeMode".equalsIgnoreCase(currentUpgradeStatus)){ 

						}
					} else { //Upagrade 2K14MS will exeute this, will be merge with Android.
    
					}
				} else {
					LOG.info("upgradeParameters is empty.");
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
		return ret_data;
	}
	
}
