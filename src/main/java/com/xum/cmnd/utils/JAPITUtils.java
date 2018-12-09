package com.xum.cmnd.utils;

import java.net.InterfaceAddress;
import java.net.NetworkInterface;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.util.HtmlUtils;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class JAPITUtils {

	private static final Logger LOG = LogManager.getLogger(JAPITUtils.class);
	
	private static String SvcVer_2 = "2.0";
	private static String SvcVer_1 = "1.0";	
	private static String change = "Change";
	private static String request = "Request";
	private static String response = "Response";
	
	public static final String WEB_SERVICE = "WebServices";
	public static final String WEB_LISTENING_SERVICE = "WebListeningServices";
	
	public static String error(String svc, String func, String msg) {		
		return "{"+
	    "	\"Svc\" : \"" + svc + "\","+
	    "	\"SvcVer\" : \"3.0\","+
	    "	\"Cookie\" : 295,"+	    
	    "   \"CmdType\": \"error\","+
	    "	\"Fun\" : \"" + func + "\","+
        "   \"CommandDetails\" : "+
        "   {"+
        "     \"message\": \"" + msg + "\""+
        "   }"+
	    "}";	   
    }
	
	public static String BannersActivate() {		
		return "{"+
	    "	\"Svc\" : \"WebListeningServices\","+
	    "	\"SvcVer\" : \"4.0\","+
	    "	\"Cookie\" : 11900,"+	    
	    "   \"CmdType\": \"Change\","+
	    "	\"Fun\" : \"ApplicationControl\","+
	    "	\"CommandDetails\" : {\"ApplicationDetails\" : {\"ApplicationName\" : \"Banner\"},\"ApplicationState\":\"Activate\"}"+
	    "}";	   
    }	

	public static String BannersDeactivate() {		
		return "{"+
	    "	\"Svc\" : \"WebListeningServices\","+
	    "	\"SvcVer\" : \"4.0\","+
	    "	\"Cookie\" : 11900,"+	    
	    "   \"CmdType\": \"Change\","+
	    "	\"Fun\" : \"ApplicationControl\","+
	    "	\"CommandDetails\" : {\"ApplicationDetails\" : {\"ApplicationName\" : \"Banner\"},\"ApplicationState\":\"Deactivate\""+
	    "}}";	   
    }	
	
	public static String RequestPowerService() {		
		return "{"+
	    "	\"Svc\" : \"WebListeningServices\","+
	    "	\"SvcVer\" : \"1.0\","+
	    "	\"Cookie\" : 295,"+	    
	    "   \"CmdType\": \"" + request + "\","+
	    "	\"Fun\" : \"PowerService\""+
	    "}";	   
    }
	
	public static String ChangePowerService(String state) {		 
        if(state.equalsIgnoreCase("REBOOT")){
            return "{ "+
            "   \"Svc\" : \"WebListeningServices\","+
            "   \"SvcVer\": \"1.0\","+
            "   \"Cookie\": 295,"+      
            "   \"CmdType\": \"" + change + "\","+
            "   \"Fun\" : \"PowerService\", "+
            "   \"CommandDetails\" : "+
            "   {"+
            //"       \"ToPowerState\" : \"" + state + "\""+  
            "     \"PowerAction\": \"Reboot\""+
            "   }"+
            "}";
        }
        else{
		return "{ "+
		"	\"Svc\" : \"WebListeningServices\","+
		" 	\"SvcVer\": \"1.0\","+
		"	\"Cookie\": 295,"+		
		"  \"CmdType\": \"" + change + "\","+
		"	\"Fun\" : \"PowerService\", "+
		"	\"CommandDetails\" : "+
		"	{"+
		"		\"ToPowerState\" : \"" + state + "\""+	
		//"    	\", PowerAction\": \"Reboot\""+
		"	}"+
		"}";		
    }
    }
	
	public static String GetPollingFrequency(String tvuniqueid, String pollingFrequency) {
		return "{"+
		"  \"Svc\": \"WebServices\","+
		"  \"SvcVer\": \"" + SvcVer_1 + "\","+
		"  \"Cookie\": 294,"+
		"  \"CmdType\": \"" + change + "\","+
		"  \"Fun\": \"TVDiscoveryService\","+
		"  \"CommandDetails\": {"+
		"    \"WebServiceParameters\": {"+
		"      \"PollingFrequency\": "+ pollingFrequency + ","+
		"      \"TVUniqueID\": \"" + tvuniqueid + "\""+
		"    }"+
		"  }"+
		"}";
	}
		
	public static String GetProfessionalSettingsParameters(String tvuniqueid, String customDashboardServerURL, String pollingFrequency) {
		String ret = "{"+
				"  \"Svc\": \"WebServices\","+
				"  \"SvcVer\": \"" + SvcVer_2 + "\","+
				"  \"Cookie\": 293,"+
				"  \"CmdType\": \"" + change + "\","+
				"  \"Fun\": \"SIService\","+
				"  \"CommandDetails\": {"+
				"    \"WebServiceParameters\": {"+
				"      \"PollingFrequency\": "+ pollingFrequency + ","+
				"      \"TVUniqueID\": \"" + tvuniqueid + "\""+
				"    },"+
				"    \"ProfessionalSettingsParameters\": {";
		if("".equals(customDashboardServerURL)) {
			ret += "}"+
					" }"+
					"}";
		}else {
			ret += "   \"CustomDashboardServerURL\": \"" + customDashboardServerURL + "\""+ "}"+
				" }"+
				"}";
		}
		
		return ret;
	}
	
	public static String RequestTVDiscoveryService() {
		return "{"+
	    "	\"Svc\" : \"WebListeningServices\","+
	    "	\"SvcVer\" : \"" + SvcVer_2 + "\","+
	    "	\"Cookie\" : 293,"+	    
	    "   \"CmdType\": \"" + request + "\","+
	    "	\"Fun\" : \"TVDiscoveryService\""+
	    "}";
	}
	
	public static String ChangeIPCloneService(String pollingFrequency, String pollingFrequencyGreen, String tvUniqueID) {
		return "{"+
		"  \"Svc\": \"WebServices\","+
		"  \"SvcVer\": \"1.0\","+
		"  \"Cookie\": 293,"+		
		"  \"CmdType\": \"" + change + "\","+
		"  \"Fun\": \"IPCloneService\","+
		"  \"CommandDetails\": {"+
		"    \"WebServiceParameters\": {"+
		"      \"PollingFrequency\": " + pollingFrequency + ","+
		"      \"PollingFrequencyGreen\": " + pollingFrequencyGreen + ","+
		"      \"TVUniqueID\": \"" + tvUniqueID + "\""+
		"    },"+
		"    \"IPCloneParameters\": {},"+
		"    \"CloneToServerParameters\": {}"+
		"  }"+
		"}";
	}
	
	public static String ResponseApplicationControllWebService(String geonameId, String lang, String data) {		 
		/*JSONObject json = new JSONObject();
		json.put("Svc", WEB_SERVICE);
		json.put("SvcVer", "3.0");
		json.put("Cookie", 299);
		json.put("CmdType", "Response");
		json.put("Fun", "ApplicationService");

		JSONObject Forecast = new JSONObject();
		Forecast.put("Blob", data);
		JSONObject WeatherForecast = new JSONObject();
		WeatherForecast.put("ForecastProvider","MeteoWeather");
		WeatherForecast.put("Forecast", Forecast);
		JSONObject ApplicationAttributes = new JSONObject();
		ApplicationAttributes.put("GeonameLocationID", geonameId);
		if(lang==null)
			ApplicationAttributes.put("GuestLanguage", "");
		else
			ApplicationAttributes.put("GuestLanguage", lang);
		ApplicationAttributes.put("WeatherForecast", WeatherForecast);
		JSONObject ApplicationAttributesValueObj = new JSONObject();
		ApplicationAttributesValueObj.put("ApplicationName", "Weather");
		ApplicationAttributesValueObj.put("ApplicationType", "Native");
		ApplicationAttributesValueObj.put("ApplicationAttributes", ApplicationAttributes);
		JSONArray ApplicationAttributesValue = new JSONArray();
		ApplicationAttributesValue.add(ApplicationAttributesValueObj);
		JSONObject CommandDetails = new JSONObject();
		CommandDetails.put("ApplicationAttributesValue", ApplicationAttributesValue);
		json.put("CommandDetails", CommandDetails);	
		
		return json.toJSONString();
		*/
		return "{ "+
		"	\"Svc\" : \"WebServices\","+
		" 	\"SvcVer\": \"3.0\","+
		"	\"Cookie\": 299,"+		
		"   \"CmdType\": \"Response\","+
		"	\"Fun\" : \"ApplicationService\", "+
		"	\"CommandDetails\" : "+
		"	{"+
		"		\"ApplicationAttributesValue\" : [" +
		"	    {"+
		"       	\"ApplicationName\": \"Weather\"," +
        "			\"ApplicationType\": \"Native\"," +
        "			\"ApplicationAttributes\": {" +
        "	  			\"GeonameLocationID\": " + geonameId + "," +
        "  				\"GuestLanguage\": \"" + lang + "\"," +
        "  				\"WeatherForecast\": {" +
        "               	\"ForecastProvider\" : \"MeteoWeather\"," +
        "					\"Forecast\" : {" +
        " 						\"Blob\":" + data +
        "  					}" +
        "     			}" +
        "			}" +
        "		}" +
        "		]" +
		"	}"+
		"}";
    }
	
	/**
	 *  when guest not checkin, return roomstatus vacant as error status
	 * @return
	 */
	public static String responseRoomVacant() {
		
		return "{" + 
				"	\"Svc\": \"WebServices\"," + 
				"	\"SvcVer\": 3.0," + 
				"	\"Cookie\": 293," + 
				"	\"CmdType\": \"Response\"," + 
				"	\"Fun\": \"PMSService\"," + 
				"	\"CommandDetails\": {" + 
				"		\"PMSParameters\": {" + 
				"			\"RoomStatus\": {" + 
				"				\"Status\": \"Vacant\"" + 
				"			}" + 
				"		}" + 
				"	}" + 
				"}";

		
	}
	
	/*public static String ResponseGuestMessages(String tvUniqueId, Message[] msg) {
		JSONObject pmsResp = new JSONObject();
		JSONObject CommandDetails = new JSONObject();
		JSONObject webServiceParameters = new JSONObject();
		JSONObject PMSParameters = new JSONObject();
		JsonObject jsonObj = null;
		JsonArray array = new JsonArray();
		pmsResp.put("Svc", "WebServices");
		pmsResp.put("SvcVer", "3.0");
		pmsResp.put("Cookie", 293);
		pmsResp.put("CmdType", "Response");
		pmsResp.put("Fun", "PMSService");
		
		webServiceParameters.put("PollingFrequency", 15);
		webServiceParameters.put("TVUniqueID", tvUniqueId);
		
		SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",Locale.ENGLISH);
		
		SimpleDateFormat dateFormat2 = new SimpleDateFormat("dd/MM/yyyy",Locale.ENGLISH);
		
		SimpleDateFormat dateFormat3 = new SimpleDateFormat("HH:mm",Locale.ENGLISH);
		
		Date date = new Date();
		
		if (msg != null){
		for(Message m: msg){
			if("Delete".equalsIgnoreCase(m.getStatus()))
				continue;
			if("N".equalsIgnoreCase(m.getIsSent()))
				continue;
			
			try {
				date = dateFormat1.parse(m.getTime_send().toString());
			} catch (ParseException e) {
				date=new Date();
				LOG.error("parse date failed:"+m.getTime_send());
			}
			jsonObj = new JsonObject();
			jsonObj.addProperty("ID", m.getId());
			jsonObj.addProperty("From", "Reception");
			jsonObj.addProperty("MessageDate", dateFormat2.format(date));
			jsonObj.addProperty("MessageTime", dateFormat3.format(date));
			jsonObj.addProperty("Status", m.getStatus());
			String content=HtmlUtils.htmlUnescape(m.getContent());
			jsonObj.addProperty("Message", TpvStringUtils.string2Unicode(content));
			array.add(jsonObj);
		}
		}
		PMSParameters.put("GuestMessages", array);
		
		CommandDetails.put("WebServiceParameters", webServiceParameters);
		CommandDetails.put("PMSParameters", PMSParameters);
		
		pmsResp.put("CommandDetails", CommandDetails);
		return pmsResp.toJSONString();
	}*/
	
	/*public static String UpdateGuestMessage(String tvUniqueId, Message[] msg){
		JSONObject pmsChange = new JSONObject();
		JSONObject CommandDetails = new JSONObject();
		JSONObject webServiceParameters = new JSONObject();
		JSONObject PMSParameters = new JSONObject();
		JsonObject jsonObj = null;
		JsonArray array = new JsonArray();
		pmsChange.put("Svc", "WebServices");
		pmsChange.put("SvcVer", "3.0");
		pmsChange.put("Cookie", 293);
		pmsChange.put("CmdType", "Change");
		pmsChange.put("Fun", "PMSService");
		
		webServiceParameters.put("PollingFrequency", 15);
		webServiceParameters.put("TVUniqueID", tvUniqueId);
		
		SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",Locale.ENGLISH);
		
		SimpleDateFormat dateFormat2 = new SimpleDateFormat("dd/MM/yyyy",Locale.ENGLISH);
		
		SimpleDateFormat dateFormat3 = new SimpleDateFormat("HH:mm",Locale.ENGLISH);
		
		Date date = new Date();
		
		
		for(Message m: msg){
			if("Delete".equalsIgnoreCase(m.getStatus()))
				continue;
			if("N".equalsIgnoreCase(m.getIsSent()))
				continue;
			
			try {
				date = dateFormat1.parse(m.getTime_send().toString());
			} catch (ParseException e) {
				date=new Date();
				LOG.error("parse date failed:"+m.getTime_send());
			}
			jsonObj = new JsonObject();
			jsonObj.addProperty("ID", m.getId());
			jsonObj.addProperty("From", "Reception");
			jsonObj.addProperty("MessageDate", dateFormat2.format(date));
			jsonObj.addProperty("MessageTime", dateFormat3.format(date));
			jsonObj.addProperty("Status", m.getStatus());
			String content=HtmlUtils.htmlUnescape(m.getContent());
			jsonObj.addProperty("Message", TpvStringUtils.string2Unicode(content));
			array.add(jsonObj);
		}
		PMSParameters.put("GuestMessages", array);
		PMSParameters.put("Action", "UpdateGuestMessage");
		
		CommandDetails.put("WebServiceParameters", webServiceParameters);
		CommandDetails.put("PMSParameters", PMSParameters);
		
		pmsChange.put("CommandDetails", CommandDetails);
		return pmsChange.toJSONString();
	}*/
	
	/*public static String guestMsgChangePMSWLS(Message[] msg) {
		JSONObject pmsResp = new JSONObject();
		JSONObject CommandDetails = new JSONObject();
		JSONObject PMSParameters = new JSONObject();
		JsonObject jsonObj = null;
		JsonArray array = new JsonArray();
		pmsResp.put("Svc", "WebListeningServices");
		pmsResp.put("SvcVer", "3.0");
		pmsResp.put("Cookie", 293);
		pmsResp.put("CmdType", "Change");
		pmsResp.put("Fun", "PMSService");
		
		SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",Locale.ENGLISH);
		
		SimpleDateFormat dateFormat2 = new SimpleDateFormat("dd/MM/yyyy",Locale.ENGLISH);
		
		SimpleDateFormat dateFormat3 = new SimpleDateFormat("HH:mm",Locale.ENGLISH);
		
		Date date = new Date();
		
		if (msg != null){
			for(Message m: msg){
				if("Delete".equalsIgnoreCase(m.getStatus()))
					continue;
//				if("N".equalsIgnoreCase(m.getIsSent())) // need to send new created message right now
//					continue;
				
				try {
					date = m.getTime_send();
					
				} catch (Exception e) {
					LOG.error(e.getMessage(),e);
				}
				jsonObj = new JsonObject();
				jsonObj.addProperty("ID", m.getId());
				jsonObj.addProperty("From", "Reception");
				jsonObj.addProperty("MessageDate", dateFormat2.format(date));
				jsonObj.addProperty("MessageTime", dateFormat3.format(date));
				jsonObj.addProperty("Status", m.getStatus());
				String content=HtmlUtils.htmlUnescape(m.getContent());
				jsonObj.addProperty("Message", TpvStringUtils.string2Unicode(content));
				array.add(jsonObj);
			}
		}
		PMSParameters.put("GuestMessages", array);
		PMSParameters.put("Action", "NewGuestMessage");
		
		CommandDetails.put("PMSParameters", PMSParameters);
		
		pmsResp.put("CommandDetails", CommandDetails);
		return pmsResp.toJSONString();
	}*/
	
	/*@SuppressWarnings("unchecked")
	public static String ResponseGuestBill(String service, String type, String balance, Billitem[] bi, String currency, String roomNo) {
		JSONObject pmsResp = new JSONObject();
		JSONObject CommandDetails = new JSONObject();
		JSONObject PMSParameters = new JSONObject();
		JSONObject GuestBill = new JSONObject();
		JsonObject jsonObj = null;
		JsonArray array = new JsonArray();
		pmsResp.put("Svc", service);
		pmsResp.put("SvcVer", "3.0");
		pmsResp.put("Cookie", 293);
		pmsResp.put("CmdType", type);
		pmsResp.put("Fun", "PMSService");
		
		
		//GuestBill.put("AddressingDisplayName", "Dear Mr. Underwood,");
		//GuestBill.put("TitleOfTheBill", "Please find your list of expenses:");
		GuestBill.put("Currency", currency);
		//GuestBill.put("BillRoomNo", "Bill for Room " + roomNo);
		//GuestBill.put("TotalDisplay", "Current Total");
		GuestBill.put("TotalDisplayAmount", balance);
		GuestBill.put("TotalBillDate", "17/11/2017");
		GuestBill.put("TotalBillTime", "15:30");
		
//		SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd",Locale.ENGLISH);
		
		SimpleDateFormat dateFormat1 = new SimpleDateFormat("dd/MM/yyyy",Locale.ENGLISH);
		
		Date date = null;
		
		if (bi != null){
			for(Billitem b: bi){
				try {
					date = dateFormat1.parse(b.getBillItemDate());
				} catch (ParseException e) {
					date=new Date();
					LOG.error("parse date failed:"+b.getBillItemDate());
//					e.printStackTrace();
					continue;
				}
				jsonObj = new JsonObject();
				jsonObj.addProperty("ID", b.getID());
				jsonObj.addProperty("BillItemDisplayName", TpvStringUtils.string2Unicode(b.getBillItemDisplayName()));
				jsonObj.addProperty("BillItemAmount", b.getBillItemAmount());
				jsonObj.addProperty("BillItemDate", dateFormat1.format(date));
				jsonObj.addProperty("BillItemTime", b.getBillItemTime());
				array.add(jsonObj);
			}
		}
		GuestBill.put("BillItems", array);
		
		PMSParameters.put("GuestBill", GuestBill);
		
		CommandDetails.put("PMSParameters", PMSParameters);
		
		pmsResp.put("CommandDetails", CommandDetails);
		return pmsResp.toJSONString();
	}*/
	
    /*public static String RequestWebListeningServicesTVDiscoveryService() {
		return "{"+
		"  \"Svc\": \"WebListeningServices\","+
		"  \"SvcVer\": \"" + SvcVer_1 + "\","+
		"  \"Cookie\": 294,"+
		"  \"CmdType\": \"" + request + "\","+
		"  \"Fun\": \"TVDiscoveryService\""+
		"}";
	}
    
    public static String RequestIPCloneService(){
    	return "{" +
    	"  \"Svc\" : \"WebListeningServices\","+
    	"  \"SvcVer\": \"3.0\","+
    	"  \"Cookie\": 293,"+
    	"  \"CmdType\" : \"Request\","+
    	"  \"Fun\" : \"IPCloneService\""+
    	"}";
	}
    
    public static String updateGuestDetails(CheckInVO checkinVO) {
    	JSONObject pmsChange = new JSONObject();
		JSONObject commandDetails = new JSONObject();
		JSONObject pmsParameters = new JSONObject();
		
		pmsChange.put("Svc",WEB_LISTENING_SERVICE);
		pmsChange.put("SvcVer", "3.0");
		pmsChange.put("Cookie", 293);
		pmsChange.put("CmdType", change);
		pmsChange.put("Fun", "PMSService");
		
		
		JSONObject GuestDetails = new JSONObject();
		GuestDetails.put("DisplayName", checkinVO.getDisplayName());
		String groupName=checkinVO.getGroupName();
		if(groupName!=null && !groupName.isEmpty()) {
			GuestDetails.put("GroupName",checkinVO.getGroupName());
		}
		GuestDetails.put("FirstName", checkinVO.getFirstName());
		GuestDetails.put("SurName", checkinVO.getSurName());			
		
		if(checkinVO.getGuestDetails()){
			pmsParameters.put("GuestDetails", GuestDetails);
		}
		
		pmsParameters.put("Action", "UpdateGuestDetails");
		commandDetails.put("PMSParameters", pmsParameters);
		pmsChange.put("CommandDetails", commandDetails);
		
		return pmsChange.toJSONString();
    }
    
    public static String changePmsParameters(CheckInVO checkinVO, JSONObject parameters) {
    	return generatePmsParameters(checkinVO, parameters, false);
    }
    
    public static String responsePmsParameters(CheckInVO checkinVO, JSONObject parameters) {
    	return generatePmsParameters(checkinVO, parameters, true);
    }
    
    private static String generatePmsParameters(CheckInVO checkinVO, JSONObject parameters,boolean isResponse) {
    	JSONObject pmsChange = new JSONObject();
		JSONObject commandDetails = new JSONObject();
		JSONObject PMSParameters = new JSONObject();
		
		pmsChange.put("Svc",isResponse?WEB_SERVICE:WEB_LISTENING_SERVICE);
		pmsChange.put("SvcVer", "3.0");
		pmsChange.put("Cookie", 293);
		pmsChange.put("CmdType", isResponse?response:change);
		pmsChange.put("Fun", "PMSService");

		if (parameters == null || parameters.containsKey("PMSFeaturesSupported")) {
			ArrayList<String> arrayPMSFeaturesSupported = new ArrayList<String>();
			arrayPMSFeaturesSupported.add("RoomStatus");
			if("True".equalsIgnoreCase(checkinVO.getExpressCheckout())){
				arrayPMSFeaturesSupported.add("RoomStatus:ExpressCheckOut");
			}
			arrayPMSFeaturesSupported.add("RoomStatus:CheckIn");
			arrayPMSFeaturesSupported.add("RoomStatus:CheckOut");
			if(checkinVO.getGuestDetails()){
				arrayPMSFeaturesSupported.add("GuestDetails");
			}
			arrayPMSFeaturesSupported.add("GuestPreferences");
			if(checkinVO.getGuestPreferLanguage()){
				arrayPMSFeaturesSupported.add("GuestPreferences:Language");
			}
			arrayPMSFeaturesSupported.add("GuestPreferences:DoNotDisturb");
			if(checkinVO.getMessages()){
				arrayPMSFeaturesSupported.add("GuestMessages");
			}
			if("True".equalsIgnoreCase(checkinVO.getViewBill())){
				arrayPMSFeaturesSupported.add("Bill");
			}
			PMSParameters.put("PMSFeaturesSupported", arrayPMSFeaturesSupported);
		}

		if (parameters == null || parameters.containsKey("GuestDetails")) {
			JSONObject GuestDetails = new JSONObject();
			GuestDetails.put("DisplayName", checkinVO.getDisplayName());
			String groupName=checkinVO.getGroupName();
			if(groupName!=null && !groupName.isEmpty()) {
				GuestDetails.put("GroupName",checkinVO.getGroupName());
			}
			GuestDetails.put("FirstName", checkinVO.getFirstName());
			GuestDetails.put("SurName", checkinVO.getSurName());			
			
			if(checkinVO.getGuestDetails()){
				PMSParameters.put("GuestDetails", GuestDetails);
			}
		}

		if (parameters == null || parameters.containsKey("GuestPreferences")) {
			JSONObject GuestPreferences = new JSONObject();
			if(checkinVO.getGuestPreferLanguage()){
				GuestPreferences.put("Language", checkinVO.getLanguage());
			}
			GuestPreferences.put("DonotDisturb", checkinVO.getDonotDisturb());
			PMSParameters.put("GuestPreferences", GuestPreferences);
		}

		if (parameters == null || parameters.containsKey("RoomStatus")) {
			JSONObject RoomStatus = new JSONObject();
			RoomStatus.put("Status", checkinVO.getRoomStatus());
			RoomStatus.put("SharingStatus", checkinVO.getSharingStatus());
			RoomStatus.put("ArrivalDate", "");
			RoomStatus.put("ArrivalTime", checkinVO.getArrivalTime());
			RoomStatus.put("DepartureDate", "");
			RoomStatus.put("DepartureTime", checkinVO.getDepartureTime());
			PMSParameters.put("RoomStatus", RoomStatus);
		}

//		PMSParameters.put("Action", "CheckIn");
		commandDetails.put("PMSParameters", PMSParameters);
		pmsChange.put("CommandDetails", commandDetails);
		
		return pmsChange.toJSONString();
     }*/
    
    /*@SuppressWarnings("unchecked")
	public static String ResponseCheckIn(String service, String type, CheckInVO checkinVO, JSONObject parameters) {
    	JSONObject pmsChange = new JSONObject();
		JSONObject CommandDetails = new JSONObject();
		JSONObject PMSParameters = new JSONObject();
		
		pmsChange.put("Svc", service);
		pmsChange.put("SvcVer", "3.0");
		pmsChange.put("Cookie", 293);
		pmsChange.put("CmdType", type);
		pmsChange.put("Fun", "PMSService");

		if (parameters == null || parameters.containsKey("PMSFeaturesSupported")) {
			ArrayList<String> arrayPMSFeaturesSupported = new ArrayList<String>();
			arrayPMSFeaturesSupported.add("RoomStatus");
			if("True".equalsIgnoreCase(checkinVO.getExpressCheckout())){
				arrayPMSFeaturesSupported.add("RoomStatus:ExpressCheckOut");
			}
			arrayPMSFeaturesSupported.add("RoomStatus:CheckIn");
			arrayPMSFeaturesSupported.add("RoomStatus:CheckOut");
			if(checkinVO.getGuestDetails()){
				arrayPMSFeaturesSupported.add("GuestDetails");
			}
			arrayPMSFeaturesSupported.add("GuestPreferences");
			if(checkinVO.getGuestPreferLanguage()){
				arrayPMSFeaturesSupported.add("GuestPreferences:Language");
			}
			arrayPMSFeaturesSupported.add("GuestPreferences:DoNotDisturb");
			if(checkinVO.getMessages()){
				arrayPMSFeaturesSupported.add("GuestMessages");
			}
			if("True".equalsIgnoreCase(checkinVO.getViewBill())){
				arrayPMSFeaturesSupported.add("Bill");
			}
			PMSParameters.put("PMSFeaturesSupported", arrayPMSFeaturesSupported);
		}

		if (parameters == null || parameters.containsKey("GuestDetails")) {
			JSONObject GuestDetails = new JSONObject();
			GuestDetails.put("DisplayName", checkinVO.getDisplayName());
			GuestDetails.put("FirstName", checkinVO.getFirstName());
			GuestDetails.put("SurName", checkinVO.getSurName());
			if(checkinVO.getGuestDetails()){
				PMSParameters.put("GuestDetails", GuestDetails);
			}
		}

		if (parameters == null || parameters.containsKey("GuestPreferences")) {
			JSONObject GuestPreferences = new JSONObject();
			if(checkinVO.getGuestPreferLanguage()){
				GuestPreferences.put("Language", checkinVO.getLanguage());
			}
			GuestPreferences.put("DonotDisturb", checkinVO.getDonotDisturb());
			PMSParameters.put("GuestPreferences", GuestPreferences);
		}

		if (parameters == null || parameters.containsKey("RoomStatus")) {
			JSONObject RoomStatus = new JSONObject();
			RoomStatus.put("Status", checkinVO.getRoomStatus());
			RoomStatus.put("SharingStatus", checkinVO.getSharingStatus());
			RoomStatus.put("ArrivalDate", "");
			RoomStatus.put("ArrivalTime", checkinVO.getArrivalTime());
			RoomStatus.put("DepartureDate", "");
			RoomStatus.put("DepartureTime", checkinVO.getDepartureTime());
			PMSParameters.put("RoomStatus", RoomStatus);
		}

		PMSParameters.put("Action", "CheckIn");
		CommandDetails.put("PMSParameters", PMSParameters);
		pmsChange.put("CommandDetails", CommandDetails);
		
		return pmsChange.toJSONString();
    }*/
    
    public static String changePMSCheckOut(){
    	return "{" +
    	"	\"Svc\" : \"WebListeningServices\"," +
    	"	\"SvcVer\" : \"3.0\"," +
    	"	\"Cookie\" : 293," +
    	"	\"CmdType\" : \"Change\"," +
    	"	\"Fun\" : \"PMSService\"," +
    	"	\"CommandDetails\" : " + 
    	"	{" +
    	"		\"PMSParameters\" : " + 
    	"		{" +
    	"			\"Action\" : \"CheckOut\"," +
    	"			\"PMSFeaturesSupported\" : [" +
    	"				\"RoomStatus\"," +
    	"				\"RoomStatus:CheckIn\"]," +
    	"			\"RoomStatus\" : " + 
    	"			{" + 
    	"				\"Status\" : \"Vacant\"" + 
    	"			}" +
    	"		}" +
    	"	}" +
    	"}";
    }
    
    public static String expressCheckOut(){
    	return "{" +
    	    	"	\"Svc\" : \"WebServices\"," +
    	    	"	\"SvcVer\" : \"3.0\"," +
    	    	"	\"Cookie\" : 293," +
    	    	"	\"CmdType\" : \"Change\"," +
    	    	"	\"Fun\" : \"PMSService\"," +
    	    	"	\"CommandDetails\" : " + 
    	    	"	{" +
    	    	"		\"PMSParameters\" : " + 
    	    	"		{" +
    	    	"			\"Action\" : \"CheckOut\"," +
    	    	"			\"PMSFeaturesSupported\" : [" +
    	    	"				\"RoomStatus\"," +
    	    	"				\"RoomStatus:CheckIn\"]," +
    	    	"			\"RoomStatus\" : " + 
    	    	"			{" + 
    	    	"				\"Status\" : \"Vacant\"" + 
    	    	"			}" +
    	    	"		}" +
    	    	"	}" +
    	    	"}";
    }
    
    public static String expressCheckOutError(){
    	return "{" +
    	"	\"Svc\" : \"WebServices\"," +
    	"	\"SvcVer\" : \"3.0\"," +
    	"	\"Cookie\" : 293," +
    	"	\"CmdType\" : \"Change\"," +
    	"	\"Fun\" : \"PMSService\"," +
    	"	\"CommandDetails\" : " + 
    	"	{" +
    	"		\"PMSParameters\" : " + 
    	"		{" +
    	"			\"Action\" : \"ExpressCheckOutError\"," +
    	"			\"RoomStatus\" : " + 
    	"			{" + 
    	"				\"Status\": \"Occupied\","+
    	"				\"ArrivalDate\": \"\","+
    	"				\"ArrivalTime\": \"\","+
    	"				\"DepartureDate\": \"\","+
    	"				\"DepartureTime\": \"\" "+
    	"			}," +
    	"		\"ExpressCheckOutStatus\": \"RoomIDMismatch\""+
    	"		}" +
    	"	}" +
    	"}";
    }
    
    public static String expressCheckOutError(String reason){
    	return "{" +
    	"	\"Svc\" : \"WebServices\"," +
    	"	\"SvcVer\" : \"3.0\"," +
    	"	\"Cookie\" : 293," +
    	"	\"CmdType\" : \"Change\"," +
    	"	\"Fun\" : \"PMSService\"," +
    	"	\"CommandDetails\" : " + 
    	"	{" +
    	"		\"PMSParameters\" : " + 
    	"		{" +
    	"			\"Action\" : \"ExpressCheckOutError\"," +
    	"			\"RoomStatus\" : " + 
    	"			{" + 
    	"				\"Status\": \"Occupied\","+
    	"				\"ArrivalDate\": \"\","+
    	"				\"ArrivalTime\": \"\","+
    	"				\"DepartureDate\": \"\","+
    	"				\"DepartureTime\": \"\" "+
    	"			}," +
    	"		\"ExpressCheckOutStatus\": \""+reason+"\""+
    	"		}" +
    	"	}" +
    	"}";
    }
    
    public static String doNotDisturb(boolean isDisturb){
    	return "{" +
    	"	\"Svc\" : \"WebListeningServices\"," +
    	"	\"SvcVer\" : \"3.0\"," +
    	"	\"Cookie\" : 293," +
    	"	\"CmdType\" : \"Change\"," +
    	"	\"Fun\" : \"PMSService\"," +
    	"	\"CommandDetails\" : " + 
    	"	{" +
    	"		\"PMSParameters\" : " + 
    	"		{" +
    	"			\"Action\" : \"UpdateGuestPreferences\"," +
    	"			\"GuestPreferences\" : " + 
    	"			{" + 
    	"				\"DonotDisturb\" : "+ isDisturb +"" + 
    	"			}" +
    	"		}" +
    	"	}" +
    	"}";
    }
    
    /*public static String updatePMSFeature(CheckInVO checkinVO) {
    	JSONObject pmsChange = new JSONObject();
		JSONObject CommandDetails = new JSONObject();
		JSONObject PMSParameters = new JSONObject();
		ArrayList<String> array = new ArrayList<String>();
		pmsChange.put("Svc", WEB_LISTENING_SERVICE);
		pmsChange.put("SvcVer", "3.0");
		pmsChange.put("Cookie", 293);
		pmsChange.put("CmdType", "Change");
		pmsChange.put("Fun", "PMSService");		
		
		array.add("RoomStatus");
		
		ArrayList<String> arrayPMSFeaturesSupported = new ArrayList<String>();
		arrayPMSFeaturesSupported.add("RoomStatus");
		if("True".equalsIgnoreCase(checkinVO.getExpressCheckout())){
			arrayPMSFeaturesSupported.add("RoomStatus:ExpressCheckOut");
		}
		arrayPMSFeaturesSupported.add("RoomStatus:CheckIn");
		arrayPMSFeaturesSupported.add("RoomStatus:CheckOut");
		if(checkinVO.getGuestDetails()){
			arrayPMSFeaturesSupported.add("GuestDetails");
		}
		arrayPMSFeaturesSupported.add("GuestPreferences");
		if(checkinVO.getGuestPreferLanguage()){
			arrayPMSFeaturesSupported.add("GuestPreferences:Language");
		}
		arrayPMSFeaturesSupported.add("GuestPreferences:DoNotDisturb");
		if(checkinVO.getMessages()){
			arrayPMSFeaturesSupported.add("GuestMessages");
		}
		if("True".equalsIgnoreCase(checkinVO.getViewBill())){
			arrayPMSFeaturesSupported.add("Bill");
		}
		PMSParameters.put("PMSFeaturesSupported", arrayPMSFeaturesSupported);
		
		PMSParameters.put("Action", "UpdatePMSFeatures");
		
		CommandDetails.put("PMSParameters", PMSParameters);
		
		pmsChange.put("CommandDetails", CommandDetails);
		
		return pmsChange.toJSONString();
    }
    
    @SuppressWarnings("unchecked")
	public static String updatePMSFeatures(String viewBillFlag, String expressCheckoutFlag, PmsStatus ps){
    
    	JSONObject pmsChange = new JSONObject();
		JSONObject CommandDetails = new JSONObject();
		JSONObject PMSParameters = new JSONObject();
		ArrayList<String> array = new ArrayList<String>();
		pmsChange.put("Svc", "WebListeningServices");
		pmsChange.put("SvcVer", "3.0");
		pmsChange.put("Cookie", 293);
		pmsChange.put("CmdType", "Change");
		pmsChange.put("Fun", "PMSService");
		
		
		array.add("RoomStatus");
		
		if("True".equalsIgnoreCase(expressCheckoutFlag)){
			array.add("RoomStatus:ExpressCheckOut");
		}
		
		array.add("RoomStatus:CheckIn");
		array.add("RoomStatus:CheckOut");
		
		if("On".equalsIgnoreCase(ps.get_guestName())){
			array.add("GuestDetails");
		}
		
		array.add("GuestPreferences");
		
		if("On".equalsIgnoreCase(ps.get_guestLanguage())){
			array.add("GuestPreferences:Language");
		}
		
		array.add("GuestPreferences:DoNotDisturb");
		
		if("On".equalsIgnoreCase(ps.get_messages())){
			array.add("GuestMessages");
		}
		
		if("True".equalsIgnoreCase(viewBillFlag)){
			array.add("Bill");
		}
		
		PMSParameters.put("PMSFeaturesSupported", array);
		PMSParameters.put("Action", "UpdatePMSFeatures");
		
		CommandDetails.put("PMSParameters", PMSParameters);
		
		pmsChange.put("CommandDetails", CommandDetails);
		return pmsChange.toJSONString();
    }*/
    
    public static String ChangeIPCloneService_WLS4Upload(int serverPort, String tvUniqueID, String clientip, String svc,
    		JSONArray cloneItemsAvailableToServer) {
    	String localip = getServerIP(clientip);
    	String uri = "http://" + localip + ":" + serverPort + "/SmartInstall/CloneToServer";
    	JSONObject changeResp = new JSONObject();
    	changeResp.put("Svc", svc);
    	changeResp.put("SvcVer", "3.0");
    	changeResp.put("Cookie", 293);
    	changeResp.put("CmdType", change);
    	changeResp.put("Fun", "IPCloneService");

    	JSONObject CommandDetails = new JSONObject();
    	if( WEB_SERVICE.equals(svc)){
        	JSONObject webServiceParameters = new JSONObject();
    		webServiceParameters.put("PollingFrequency", 50);
    		webServiceParameters.put("PollingFrequencyGreen", 60);
    		webServiceParameters.put("TVUniqueID", tvUniqueID);
    		CommandDetails.put("WebServiceParameters", webServiceParameters);
    	} else {
        	JSONObject webServiceParameters = new JSONObject();
    		webServiceParameters.put("TVUniqueID", tvUniqueID);
    		CommandDetails.put("WebListeningServiceParameters", webServiceParameters);
    	}
    	JSONObject cloneToServerParameters = new JSONObject();
    	cloneToServerParameters.put("CloneToServerDetails", getCloneToServerDetails(uri,cloneItemsAvailableToServer));
    	CommandDetails.put("CloneToServerParameters", cloneToServerParameters);
    	changeResp.put("CommandDetails", CommandDetails);
		return changeResp.toJSONString();
	}
    
    public static String ChangeIPCloneService_WLS4Upload_linux(int serverPort, String tvUniqueID, String clientip, String svc,
    		JSONArray cloneItemsAvailableToServer) {
    	String localip = getServerIP(clientip);
    	String uri = "http://" + localip + ":" + serverPort + "/SmartInstall/CloneToServer";
    	JSONObject changeResp = new JSONObject();
    	changeResp.put("Svc", svc);
    	changeResp.put("SvcVer", "3.0");
    	changeResp.put("Cookie", 293);
    	changeResp.put("CmdType", change);
    	changeResp.put("Fun", "IPCloneService");

    	JSONObject CommandDetails = new JSONObject();
    	if( WEB_SERVICE.equals(svc)){
        	JSONObject webServiceParameters = new JSONObject();
    		webServiceParameters.put("PollingFrequency", 50);
    		webServiceParameters.put("PollingFrequencyGreen", 60);
    		webServiceParameters.put("TVUniqueID", tvUniqueID);
    		CommandDetails.put("WebServiceParameters", webServiceParameters);
    	} else {
        	JSONObject webServiceParameters = new JSONObject();
    		webServiceParameters.put("TVUniqueID", tvUniqueID);
    		CommandDetails.put("WebListeningServiceParameters", webServiceParameters);
    	}
    	JSONObject cloneToServerParameters = new JSONObject();
    	cloneToServerParameters.put("CloneToServerDetails", getCloneToServerDetails_linux(uri,cloneItemsAvailableToServer));
    	CommandDetails.put("CloneToServerParameters", cloneToServerParameters);
    	changeResp.put("CommandDetails", CommandDetails);
		return changeResp.toJSONString();
	}
    
    private static JSONArray getCloneToServerDetails_linux(String uri, JSONArray cloneItemsAvailable){
    	Set<String> cloneItems = new HashSet<String>();
    	
    	for (int i = 0; i < cloneItemsAvailable.size(); i++) {
			JSONObject item = (JSONObject) cloneItemsAvailable.get(i);
			if(item.containsKey("CloneItemName")){
				String cloneItemName = String.valueOf(item.get("CloneItemName"));
				//String cloneItemVersionNo = String.valueOf(item.get("CloneItemVersionNo"));
				if(cloneItemName != null || cloneItemName != ""){
					cloneItems.add(cloneItemName);
				}
			}
		}
    	
    	JSONArray cloneToServerDetails = new JSONArray();
    	JSONObject cloneItem = new JSONObject();
    	
    	String allCloneItems[] = {"TVSettings","TVChannelList","WelcomeLogo","SmartInfoImages",
				  				  "SmartInfoPages","AndroidApps","RoomSpecificSettings", "DataDump",
				  				  "CustomDashboardFallback","Script","MediaChannels", "WeatherForecast", 
				  				  "HTVCfg","Banner","PMS","AndroidAppsData","ProfessionalApps",
				  				  "ProfessionalAppsData","Schedules","MyChoice","Vsecure"};
    	
    	int allCloneItemsLen = allCloneItems.length;
    	for(int i=0;i<allCloneItemsLen;i++) {
    		if (cloneItems.contains(allCloneItems[i])) {
    			cloneItem = new JSONObject();
    			if ("HTVCfg".equalsIgnoreCase(allCloneItems[i])) {
    				cloneItem.put("CloneItemName", "HTVCfg.xml");
    			} else {
    				cloneItem.put("CloneItemName", allCloneItems[i]);
    			}
    	    	cloneItem.put("URL", uri);
    	    	cloneToServerDetails.add(cloneItem);
    		}
    	}
    	
    	return cloneToServerDetails;
    }
    
    private static JSONArray getCloneToServerDetails(String uri, JSONArray cloneItemsAvailable){
    	Set<String> cloneItems = new HashSet<String>();
    	
    	for (int i = 0; i < cloneItemsAvailable.size(); i++) {
			JSONObject item = (JSONObject) cloneItemsAvailable.get(i);
			if(item.containsKey("CloneItemDetails") && item.containsKey("CloneStatus")){
				JSONObject CloneItemDetails = (JSONObject)(item.get("CloneItemDetails"));
				String name = String.valueOf(CloneItemDetails.get("CloneItemName"));
				String CloneStatus = String.valueOf(item.get("CloneStatus"));
				if(StringUtils.isNotBlank(CloneStatus) && "Successful".equalsIgnoreCase(CloneStatus)){
					cloneItems.add(name);
				}
			}
		}
    	
    	JSONArray cloneToServerDetails = new JSONArray();
    	JSONObject cloneItem = new JSONObject();
    	
    	String allCloneItems[] = {"TVSettings","TVChannelList","WelcomeLogo","SmartInfoImages",
				  				  "SmartInfoPages","AndroidApps","RoomSpecificSettings", "DataDump",
				  				  "CustomDashboardFallback","Script","MediaChannels", "WeatherForecast", 
				  				  "HTVCfg","Banner","PMS","AndroidAppsData","ProfessionalApps",
				  				  "ProfessionalAppsData","Schedules","MyChoice","Vsecure"};
    	
    	int allCloneItemsLen = allCloneItems.length;
    	for(int i=0;i<allCloneItemsLen;i++) {
    		if (cloneItems.contains(allCloneItems[i])) {
    			cloneItem = new JSONObject();
    			cloneItem.put("CloneItemName", allCloneItems[i]);
    	    	cloneItem.put("URL", uri);
    	    	cloneToServerDetails.add(cloneItem);
    		}
    	}
    	
    	return cloneToServerDetails;
    }
    
    public static String getIpType(int IpFirstPlace) {
    	String ipType = "unknow";
    	
		if (IpFirstPlace == 0){
			ipType = "anyIp";
		} else if (IpFirstPlace >= 1 && IpFirstPlace <= 126){
			ipType = "A";
		} else if (IpFirstPlace == 127){
			ipType = "testIp";
		} else if (IpFirstPlace >= 128 && IpFirstPlace <= 191) {
			ipType = "B";
		} else if (IpFirstPlace >= 192 && IpFirstPlace <= 223) {
			ipType = "C";
		} else if (IpFirstPlace >= 224 && IpFirstPlace <= 239) {
			ipType = "D";
		} else if (IpFirstPlace >= 240 && IpFirstPlace <= 255) {
			ipType = "E";
		}
		
		return ipType;
    }
    
    public static String getServerIpFromSameRoute(String clientip) {
    	// cmnd server will return the most similar ip.
    	String matchIp = "127.0.0.1";
    	try {	
    		String ipType = "";
    		final String[] ipClient = clientip.split("\\.");
    		int clientIpFirstPlace = Integer.parseInt(ipClient[0]);
    		int clientIpSecondPlace = Integer.parseInt(ipClient[1]);
    		int clientIpThirdPlace = Integer.parseInt(ipClient[2]); 		
    		ipType = getIpType(clientIpFirstPlace);
    		LOG.info("ipType="+ipType);
    		
    		boolean isOnePlaceEqual = false;
    		boolean isTwoPlaceEqual = false;
    		boolean isWhileBreak = false;
    		Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
   	    	while(interfaces.hasMoreElements()){
   	    		NetworkInterface netInter = interfaces.nextElement();
   	    		for(InterfaceAddress ifAddr: netInter.getInterfaceAddresses()){
   	    			String ipStr = ifAddr.getAddress().getHostAddress();
   	    			Pattern pattern = Pattern .compile("^((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]"+ "|[*])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])$");
  	    			boolean ipTrue = pattern.matcher(ipStr).matches();
  	    			if(ipTrue == false)
  	    				continue;
  	    			if (ipStr == null || ipStr.contains("127.0"))
  	    				continue;
   	    			String[] localIp = ipStr.split("\\.");
   	    			int localIpFirstPlace = Integer.parseInt(localIp[0]); 	    			
   	    			boolean isFirstEqual = (clientIpFirstPlace == localIpFirstPlace);
   	    			int localIpSecondPlace = Integer.parseInt(localIp[1]);
	    			boolean isSecondEqual = (clientIpSecondPlace == localIpSecondPlace);
	    			int localIpThirdPlace = Integer.parseInt(localIp[2]);
	    			boolean isThirdEqual = (clientIpThirdPlace == localIpThirdPlace);
					if (isFirstEqual && isSecondEqual && isThirdEqual) {
						matchIp = ipStr;
						isWhileBreak = true;
						LOG.info("maybe come from same router, matchIp=" + matchIp);
						break;
					} else {
						if (isFirstEqual && isSecondEqual && !isOnePlaceEqual) {
							matchIp = ipStr;
							isTwoPlaceEqual = true;
						}
						if (isFirstEqual && !isTwoPlaceEqual) {
							matchIp = ipStr;
							isOnePlaceEqual = true;
						}
						if (!isOnePlaceEqual && !isTwoPlaceEqual) {
							matchIp = ipStr;
						}
					}
   	    		}
   	    		if (isWhileBreak) {
   					break;
   				}
   	    	}   	    	
  	    }catch (Exception e) {
  	    	LOG.info("error"+e.getMessage());
  	    }
    	LOG.info("matchIp="+matchIp);
    	return matchIp;
    }
    
    public static String getServerIP(String clientip){
    	try {		 		 
 	 	   //InetAddress address = InetAddress.getLocalHost();        
 	 	   //IP = address.getHostAddress(); 
  	    	//distinguish local ip which the tv sets in case of multi local ip
  	    	final String[]  ipClient = clientip.split("\\.");
  	    	long ipTV = (Long.parseLong(ipClient[0] ) << 24) + (Long.parseLong(ipClient[1] ) << 16) + (Long.parseLong(ipClient[2] ) << 8) + (Long.parseLong(ipClient[3] ));
  	    	
  	    	Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
  	    	while(interfaces.hasMoreElements()){
  	    		NetworkInterface netInter = interfaces.nextElement();
  	    		for(InterfaceAddress ifAddr: netInter.getInterfaceAddresses()){
  	    			String ipStr = ifAddr.getAddress().getHostAddress();
  	    			
  	    			Pattern pattern = Pattern .compile("^((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]"+ "|[*])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])$");
  	    			boolean ipTrue = pattern.matcher(ipStr).matches();
  	    			if(ipTrue == false)
  	    				continue;
  	    			
  	    			int prefixLength = ifAddr.getNetworkPrefixLength();
  	    			long mask = 0xFFFFFFFF << (32 - prefixLength);
  	    			final String[] ipNums = ipStr.split("\\.");
  	    			long ipLocal = (Long.parseLong(ipNums[0] ) << 24) + (Long.parseLong(ipNums[1] ) << 16) + (Long.parseLong(ipNums[2] ) << 8) + (Long.parseLong(ipNums[3] ));
  	    			if((ipTV & mask) == (ipLocal & mask))
  	    				return ipStr;
  	    		}
  	    	}
 	    }catch (Exception e) {
 	    	LOG.error(e.getMessage(), e);
 	    }
 	    return "127.0.0.1";
    }
	
}
