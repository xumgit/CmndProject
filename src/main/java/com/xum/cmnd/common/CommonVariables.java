package com.xum.cmnd.common;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.json.simple.JSONObject;

public class CommonVariables {

	public static String TARGET_PORT = ":"+ CommonConstants.TV_WIXP_PORT + "/WIXP";
	public static String reboot = "REBOOT";
	public static Integer MAX_RESEND_COUNTER = 3; 
	
	public static final String CLONE_MODE_UPGRADE = "Upgrade";
	public static final String CLONE_MODE_UPLOAD = "Upload";
		
	public static ConcurrentHashMap<String, String> hashMap = new ConcurrentHashMap<String, String>();
	public static HashMap<String, Integer> reSendCounter = new HashMap<String, Integer>();
	public static int uploadItemsCount = 0;
	public static int uploadItemsRecvCount = 0;
	public static int cloneItemsAvailableToServerSize = 0;
	public static JSONObject Jsession = new JSONObject();
	public static HashSet<String> upgradeMutex = new HashSet<String>();
	public static int lastActualMaxProgress = -1;
	public static Map<String, String> upgradeTv = new HashMap<String,String>();
	public static Map<String, Integer> uploadItemsCount_linux = new HashMap<String, Integer>();
	public static Map<String, Integer> uploadItemsRecvCount_linux = new HashMap<String, Integer>();
	public static String isDetectDeviceflag = "No";
	
}
