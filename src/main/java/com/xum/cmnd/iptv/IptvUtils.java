package com.xum.cmnd.iptv;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.xum.cmnd.pojo.DevicesWithBLOBs;
import com.xum.cmnd.service.DevicesService;
import com.xum.cmnd.utils.CmndStringUtils;
import com.xum.cmnd.utils.Utils;

@Component(value = "iptvUtils")
public class IptvUtils {
	
	private static final Logger LOG = LogManager.getLogger(IptvUtils.class);
	
	@Autowired
	private DevicesService devicesService;
	
	@Autowired
	private TVDiscoveryService tVDiscoveryService;
	
	@Autowired
	private IPCloneService iPCloneService;
	
	public String tvResponseDetails(String data, String clientip) {
		String responseData = "";
		
		if(data != null && data.contains("{") && data.contains("}")) {
			JSONObject jsonObject = null;
			try {
				if(data.contains("jsonData=")){
					jsonObject = (JSONObject) new JSONParser().parse(data.substring(data.indexOf('{'),  data.lastIndexOf('}')+1));
				} else {
					jsonObject = (JSONObject) new JSONParser().parse(data);
				}
			} catch (ParseException e) {
				LOG.error(e.getMessage(), e);
			} catch (Exception e) {
				LOG.error(e.getMessage(), e);
			}
			
            if (jsonObject == null) {
                return "{\"status\": \"parsing request data failed.\"}";
            }
			
			JSONObject commandDetails = (JSONObject) jsonObject.get("CommandDetails");
			JSONObject webServiceParameters = (JSONObject) commandDetails.get("WebServiceParameters");
			String _function = jsonObject.get("Fun").toString();	
			LOG.info(Utils.GetDate() + " TV >>>>>>>> SI IP=" + clientip + ",Fun=" + _function + "\n" + CmndStringUtils.removeNL(data));
			
			if("TVDiscoveryService".equalsIgnoreCase(_function)) {
				responseData = this.tVDiscoveryService.handleTVDiscoveryService(commandDetails, webServiceParameters, clientip);			
			} else if("SIService".equalsIgnoreCase(_function)){
				//responseData = ProfessionalSettingsParameters(commandDetails, webServiceParameters, clientip);
			} else if("IPCloneService".equalsIgnoreCase(_function)){
				responseData = iPCloneService.handleIPCloneService(commandDetails, webServiceParameters, clientip);
			} else if("ApplicationControl".equalsIgnoreCase(_function)) {
				if("Request".equalsIgnoreCase(jsonObject.get("CmdType").toString())){
					//responseData = AppCtrlForRequest(commandDetails, webServiceParameters, clientip);
				} else {
					//LOG.info("ApplicationControl CmdType=" + jsonObject.get("CmdType"));
				}
			} else if("PMSService".equalsIgnoreCase(_function)){
				if("Request".equalsIgnoreCase(jsonObject.get("CmdType").toString())){
					//responseData = PMSService4Request(commandDetails, webServiceParameters, clientip);
				}else if("Change".equalsIgnoreCase(jsonObject.get("CmdType").toString())){
					//responseData = PMSService4Change(commandDetails, webServiceParameters, clientip);
				}
				//responseData = PMSService(commandDetails, webServiceParameters, clientip);
			} 
			
			/*TVReqeust vo = new TVReqeust();
			vo.setClientId(_tvUniqueId);
			vo.setClientIp(clientip);
			vo.setFunction(_function);
            if (commandDetails != null) {
                vo.setCommandData(commandDetails.toJSONString());
            }
            if (webServiceParameters != null) {
                vo.setParameterData(webServiceParameters.toJSONString());
            }
			vo.setResponseData(data);*/
			//Logger.getInstance().request(vo);
            LOG.info(Utils.GetDate() + " SI >>>>>>>> TV IP = " + clientip + "\n" + responseData);//pr1009
		} else {
	 	   	LOG.info("SI get a invalid message from clientip="
	 	   		+ clientip + ", data=" + data);
		}
		
		return responseData;
	}
	
	public String getClientIp(String data, HttpServletRequest request) {
		String clientip = "";
		
		if (data != null && data.contains("{") && data.contains("}")) {
			JSONObject jsonObject = null;
			try {
				if (data.contains("jsonData=")) {
					jsonObject = (JSONObject) new JSONParser()
							.parse(data.substring(data.indexOf('{'), data.lastIndexOf('}') + 1));
				} else {
					jsonObject = (JSONObject) new JSONParser().parse(data);
				}
				String _function = jsonObject.get("Fun").toString();					        
				if("TVDiscoveryService".equalsIgnoreCase(_function)) {
					JSONObject commandDetails = (JSONObject) jsonObject.get("CommandDetails");
					JSONObject tvDiscoveryParameters = (JSONObject) commandDetails.get("TVDiscoveryParameters"); 
					clientip = tvDiscoveryParameters.get("TVIPAddress").toString();										
				} else {
					LOG.info("_function=" + _function);
					String tvUniqueId = "";
					JSONObject commandDetails = (JSONObject) jsonObject.get("CommandDetails");
					JSONObject webServiceParameters = (JSONObject) commandDetails.get("WebServiceParameters");
					if (webServiceParameters.get("TVUniqueID") != null) {
			            tvUniqueId = webServiceParameters.get("TVUniqueID").toString();
			        }
					DevicesWithBLOBs devicesWithBLOBs = this.devicesService.selectByPrimaryKey(tvUniqueId);
					if (devicesWithBLOBs != null) {
						clientip = devicesWithBLOBs.getTvipaddress();
					} else {
						LOG.info("request.getRemoteAddr()");
						clientip = request.getRemoteAddr().toString();
					}
				}
			} catch (ParseException e) {
				LOG.error(e.getMessage(), e);
			} catch (Exception e) {
				LOG.error(e.getMessage(), e);
			}
		}
		
		return clientip;
	}
	
}
