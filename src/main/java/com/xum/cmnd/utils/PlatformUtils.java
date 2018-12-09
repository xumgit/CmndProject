package com.xum.cmnd.utils;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import com.xum.cmnd.common.CommonConstants;

public class PlatformUtils {

	private PlatformUtils() {

	}
	
	private static final String[] PLATFORM_NAME_LIST= {
			CommonConstants.NAME_2K11_PS, 
			CommonConstants.NAME_2K11_MS, 
			CommonConstants.NAME_2K12_PSMS,
			CommonConstants.NAME_2K12_ES, 
			CommonConstants.NAME_2K13_PSMS,
			CommonConstants.NAME_2K13_ES, 
			CommonConstants.NAME_2K14_MS, 
			CommonConstants.NAME_2K14_ES, 
			CommonConstants.NAME_2K16_MS, 
			CommonConstants.NAME_2K16_ES, 
			CommonConstants.NAME_2K16_SS, 
			CommonConstants.NAME_2K19_MS,
			CommonConstants.NAME_2K19_PS
			};
	
	private static final String[] PLATFORM_ID_LIST= {
			CommonConstants.ID_2K11_PS,
			CommonConstants.ID_2K11_MS,
			CommonConstants.ID_2K12_PSMS,
			CommonConstants.ID_2K12_ES,
			CommonConstants.ID_2K13_MS,
			CommonConstants.ID_2K13_ES,
			CommonConstants.ID_2K14_MS,
			CommonConstants.ID_2K14_ES,
			CommonConstants.ID_2K16_MS,
			CommonConstants.ID_2K16_ES,
			CommonConstants.ID_2K16_SS,
			CommonConstants.ID_2K19_MS,
			CommonConstants.ID_2K19_PS
			};
	
	private static final String[] PLATFORM_TYPE_LIST= {
			CommonConstants.PRO_2K11_PS,
			CommonConstants.PRO_2K11_MS,
			CommonConstants.PRO_2K12_PSMS,
			CommonConstants.PRO_2K12_ES,
			CommonConstants.PRO_2K13_PSMS,
			CommonConstants.PRO_2K13_ES,
			CommonConstants.PRO_2K14_MS,
			CommonConstants.PRO_2K14_ES,
			CommonConstants.PRO_2K16_MS,
			CommonConstants.PRO_2K16_ES,
			CommonConstants.PRO_2K16_SS,
			CommonConstants.PRO_2K19_MS,
			CommonConstants.PRO_2K19_PS
			};
	
	/**
	 * check if platformid valid
	 * @param platformId
	 * @return
	 */
	public static boolean isValidPlatformId(String platformId) {
		return Arrays.asList(PLATFORM_ID_LIST).contains(platformId);
	}


	/**
	 * convert productid to platform Type TPM1532HE -> MS2K16
	 * implement TMP1532HE->TPM1532HE_CloneData->2K16 MS->MS2K16
	 * 
	 * @param productId
	 * @return return map value, if empty, return productId
	 */
	public static String getPlatformType(String platformId) {
		
		if (Arrays.asList(PLATFORM_ID_LIST).contains(platformId)) {
			return convertPlatformToType(platformId);
		}

		if (Arrays.asList(PLATFORM_NAME_LIST).contains(platformId)) {
			return convertNameToType(platformId);
		}
		
		if (Arrays.asList(PLATFORM_TYPE_LIST).contains(platformId)) {
			return platformId;
		}
		
		return "";		 

	}
	
	/**
	 *  get platform name for request platform ,param will convert automatic
	 *  TPM1532HE_CloneData->2K16 MS
	 *  MS2K16->2K16 MS
	 *  2K16 MS->2K16 MS
	 *  
	 * @param platformId or platformType or platformName
	 * @return platform name if can convert,others return @param platformId
	 */
	
	public static String getPlatformName(String platformId) {
		if (Arrays.asList(PLATFORM_ID_LIST).contains(platformId)) {
			return convertPlatformToName(platformId);
		}

		if (Arrays.asList(PLATFORM_TYPE_LIST).contains(platformId)) {
			return convertTypeToName(platformId);
		}

		if (Arrays.asList(PLATFORM_NAME_LIST).contains(platformId)) {
			return platformId;
		}
		return "";
		
	}
	
	/**
	 *  get platform Id for request platform, param will convert automatic
	 *  TPM1532HE_CloneData->TPM1532HE_CloneData
	 *  MS2K16->TPM1532HE_CloneData
	 *  2K16 MS->TPM1532HE_CloneData
	 * @param platformId or platformType or platformName
	 * @return platform name
	 */
	public static String getPlatformId(String platform) {

		if (Arrays.asList(PLATFORM_ID_LIST).contains(platform)) {
			return platform;
		}

		if (Arrays.asList(PLATFORM_NAME_LIST).contains(platform)) {
			return convertNameToPlatform(platform);
		}

		if (Arrays.asList(PLATFORM_TYPE_LIST).contains(platform)) {
			return convertTypeToPlatform(platform);
		}

		// if rootfolderName
		String platformId = platform + "_CloneData";
		if (Arrays.asList(PLATFORM_ID_LIST).contains(platformId)) {
			return platformId;
		}

		return "";

	}

	/**
	 * convert platform Type to Name for example:
	 * 
	 * MS2K16->2K16 MS 
	 * MS2K14->2014/2015 MS
	 * 
	 * @param name
	 * @return
	 */
	private static String convertTypeToName(String type) {
		
		int index=Arrays.asList(PLATFORM_TYPE_LIST).indexOf(type);
		
		return Arrays.asList(PLATFORM_NAME_LIST).get(index);

	}

	/**
	 * convert platform Name to Type for example: 
	 * 2K16 MS->MS2K16 
	 * 2014/2015 MS->MS2K14
	 * 
	 * @param name
	 * @return
	 */


	private static String convertNameToType(String name) {
		
		int index=Arrays.asList(PLATFORM_NAME_LIST).indexOf(name);
		
		return Arrays.asList(PLATFORM_TYPE_LIST).get(index);
	}
	
	public static boolean isSupportAutoDetect(String tvModel) {
		String[] supportPlatforms= {CommonConstants.NAME_2K16_MS,CommonConstants.NAME_2K16_SS,CommonConstants.NAME_2K19_MS,CommonConstants.NAME_2K19_PS};
		
		String platformName=convertTvModelNumberToType(tvModel);
		
		return Arrays.asList(supportPlatforms).contains(platformName);
		
	}
	
	public static boolean isContainsType(String type) {
		String[] supportTypes= {CommonConstants.NAME_2K16_MS,CommonConstants.NAME_2K16_SS,
				CommonConstants.NAME_2K19_MS,CommonConstants.NAME_2K19_PS};
		return Arrays.asList(supportTypes).contains(type);
	}
	
	public static boolean isContainsName(String name) {
		String[] supportNames= {CommonConstants.ID_2K16_MS,CommonConstants.ID_2K16_SS,
				CommonConstants.ID_2K19_MS,CommonConstants.ID_2K19_PS};
		return Arrays.asList(supportNames).contains(name);
	}
	
	/**
	 * Convert Setting Platform to TV/Package Type TPM1532HE_CloneData->2K16 MS
	 * 
	 * @param value
	 * @return return maped value,else returm empty string
	 */
	private static String convertPlatformToName(String value) {
		
		int index=Arrays.asList(PLATFORM_ID_LIST).indexOf(value);
		
		return Arrays.asList(PLATFORM_NAME_LIST).get(index);
	}

	/**
	 * Convert Setting Platform to TV/Package Type TPM1532HE_CloneData->MS2K16 
	 * 
	 * @param value
	 * @return return maped value,else returm empty string
	 */
	private static String convertPlatformToType(String value) {
		
		int index=Arrays.asList(PLATFORM_ID_LIST).indexOf(value);
		
		return Arrays.asList(PLATFORM_TYPE_LIST).get(index);

	}
	/**
	 * Convert TV/Package Type to Setting Platform MS2K16->TPM1532HE_CloneData
	 * 
	 * @param type
	 * @return return maped value,else returm empty string
	 */
	private static String convertTypeToPlatform(String type) {
		
		int index=Arrays.asList(PLATFORM_TYPE_LIST).indexOf(type);
		
		return Arrays.asList(PLATFORM_ID_LIST).get(index);
		
	}

	/**
	 * convert TV/Package typeName to platformId 2K16 MS->TPM1532HE_CloneData
	 * 
	 * @param name
	 * @return
	 */
	private static String convertNameToPlatform(String name) {
		
		int index=Arrays.asList(PLATFORM_NAME_LIST).indexOf(name);
		
		return Arrays.asList(PLATFORM_ID_LIST).get(index);

	}

	public static String convertPlatform(String type) {
		return getPlatformId(type);
	}

	
	// Convert tv_Model_Number to TV Type
	public static String convertTvModelNumberToType(String value) {
		if (value != null) {
			if (value.contains("009D") || value.contains("010T") || value.contains("010L") || value.contains("010W")
					|| value.contains("109K")) {
				return CommonConstants.NAME_2K14_MS;
			} else if (value.contains("5011T")) {
				return CommonConstants.NAME_2K16_MS;
			} else if (value.contains("7011T") || value.contains("7111T")) {
				return CommonConstants.NAME_2K16_SS;
			} else if (value.contains("6014U") || value.contains("5014") || value.contains("7014U")) {
				return CommonConstants.NAME_2K19_MS;
			} else if (value.contains("4014") || value.contains("5803")) {
				return CommonConstants.NAME_2K19_PS;
			}
		}
		return "";
	}
	
	// only for v4 and v5 platform
	public static String getChannelVersion(String platform) {

		switch (platform) {
		case "Q555A"://2011 MS
		case "Q555H"://2011 PS
		case "T911HE_CloneData"://2012 ES
		case "TPM1012HE_CloneData"://2013 ES
			return "v1";
		case "Q554B-2K13PSMS"://no clone map to it
			return "v2";
		case "Q554B"://2013 MS
			return "v3";
		case "TPN141HE_CloneData"://2014/2015 MS
		case "TPN142HE_CloneData"://2014/2015 ES
			return "v4";
		default:
//		case CommonConstants.ID_2K16_ES:
//		case CommonConstants.ID_2K16_MS:
//		case CommonConstants.ID_2K16_SS:
//		case CommonConstants.ID_2K19_MS:
//		case CommonConstants.ID_2K19_PS:
			return "v5";

		}
	}

	public static boolean isUsingNewGateway(String platformId) {

		final String[] OG_PLATFORM_IDS = { "Q555A", "Q555H", "Q554B", "Q554B-2K13PSMS", "T911HE_CloneData",
				"TPM1012HE_CloneData", "TPN142HE_CloneData", "TPN141HE_CloneData",
				// "TPM1532HE_CloneData","TPM1531HE_CloneData", // xxHFL5011,xxHFL7011
				"TPN161HE_CloneData" // XXHFL3011
		};

		List<String> ogListIds = Arrays.asList(OG_PLATFORM_IDS);

		if (ogListIds.contains(platformId)) {
			return false;
		} else if(platformId.contains("TPM153")) { //ASTA will check default to mgate config
			return CommonConstants.defaultToMGate;
		} else {// others using mgate
			return true;
		}
	}

	public static boolean hasES2k12(String platformId) {

		final String[] platformIds = { "Q555A", "Q555H", "Q554B", "Q554B-2K13PSMS" };
		List<String> platformList = Arrays.asList(platformIds);

		return !platformList.contains(platformId);

	}

	public static boolean isDownloadable(String platformId) {
		final String[] platformIds = { CommonConstants.NAME_2K16_MS, CommonConstants.NAME_2K16_SS,
				CommonConstants.NAME_2K19_MS };
		List<String> platformList = Arrays.asList(platformIds);

		return platformList.contains(platformId);

	}

	public static String[] getXMLFileName(String rootfolder) {

		String[] fileName = new String[2];

		String platform = rootfolder + "_CloneData";

		switch (platform) {
		case CommonConstants.ID_2K14_MS:
		case CommonConstants.ID_2K14_ES:
			fileName[1] = rootfolder + "_CHTB.xml";
			fileName[0] = rootfolder + "SSB.xml";
			break;
		default:
//		case CommonConstants.ID_2K16_MS:
//		case CommonConstants.ID_2K16_ES:
//		case CommonConstants.ID_2K16_SS:
//		case CommonConstants.ID_2K19_MS:
			fileName[1] = "ChannelList.xml";
			fileName[0] = "TVSettings.xml";
			break;

		}

		return fileName;
	}

	public static String getRootFolderName(String platform) {

		return platform.replace("_CloneData", "");

	}

	/**
	 * check if platform has Geoname LocationID,valid for 2k16 above android
	 * platform
	 * 
	 * @param platform
	 * @return
	 */
	public static boolean hasGeoNameLocation(String platform) {

		boolean hasGeoName = false;
		switch (platform) {
		case CommonConstants.ID_2K16_MS:
		case CommonConstants.ID_2K16_SS:
		case CommonConstants.ID_2K19_MS:
			hasGeoName = true;
			break;
		default:
			hasGeoName = false;
		}

		return hasGeoName;
	}
	
	public static String getCSMPath(String platform) {
		String csmPath="";
		String platformId=getPlatformId(platform);
		switch(platformId) {
		case CommonConstants.ID_2K16_ES:
		case CommonConstants.ID_2K16_MS:
		case CommonConstants.ID_2K16_SS:
		case CommonConstants.ID_2K19_MS:
		case CommonConstants.ID_2K19_PS:
			csmPath="/DataDump";
			break;
		default:
			csmPath="";
		}
		
		return csmPath;
	}

	/**
	 * check if 2K16 android platform MS and SS include, ES not include
	 * 
	 * @param platformId
	 * @return
	 */

	public static boolean hasPackageFeature(String platform) {

		boolean hasPackage = false;
		switch (platform) {
		case CommonConstants.ID_2K16_MS:
		case CommonConstants.ID_2K16_SS:
		case CommonConstants.ID_2K19_MS:
			hasPackage = true;
			break;
		default:
			hasPackage = false;
		}

		return hasPackage;
	}

	/**
	 * return welcome logo location relative to root clone data from commonutils
	 * 
	 * @param platform
	 * @return
	 */

	public static String getWelcomeLogoLocation(String platform) {

		String location = "";
		switch (platform) {
		case CommonConstants.ID_2K11_MS:
		case CommonConstants.ID_2K11_PS:
		case CommonConstants.ID_2K12_PSMS:
			location = "/WelcomeLogo/";
			break;

		case CommonConstants.ID_2K16_MS:
		case CommonConstants.ID_2K16_SS:
		case CommonConstants.ID_2K16_ES:
		case CommonConstants.ID_2K19_MS:
		case CommonConstants.ID_2K19_PS:
			location = "/MasterCloneData/WelcomeLogo/";
			break;
		default:
			location = "";
		}

		return location;
	}

	public static String getChannelJSP(String platform, String channelPackageId) {
		/**
		 * if (platform.indexOf("TPM153") > -1 || platform.indexOf("TPN161HE") > -1 ||
		 * platform.indexOf("2016") > -1) {//pr808 channelsRef =
		 * "/jsp/channel/channels2K16.jsp?channelPackageId=" + channelPackageId;//pr808
		 * } else if (platform.indexOf("TPN14") > -1 || platform.indexOf("2014/2015") >
		 * -1) {//pr808 channelsRef =
		 * "/jsp/channel/channels2K14MS.jsp?channelPackageId=" +
		 * channelPackageId;//pr808 } else { channelsRef =
		 * "/jsp/channel/channels.jsp?channelPackageId=" + channelPackageId;//pr808 }
		 */

		String location = "";
		switch (platform) {
		case CommonConstants.ID_2K14_MS:
		case CommonConstants.ID_2K14_ES:
			// case CommonConstants.ID_2K12_PSMS:
			location = "/jsp/channel/channels2K14MS.jsp?channelPackageId=" + channelPackageId;// pr808
			break;

		case CommonConstants.ID_2K16_MS:
		case CommonConstants.ID_2K16_SS:
		case CommonConstants.ID_2K16_ES:
		case CommonConstants.ID_2K19_MS:
		case CommonConstants.ID_2K19_PS:
			location = "/jsp/channel/channels2K16.jsp?channelPackageId=" + channelPackageId;
			break;
		default:
			location = "/jsp/channel/channels.jsp?channelPackageId=" + channelPackageId;
		}

		return location;

	}

	/**
	 * from TVUpgradeUtils only check 2K14 MS Up platform
	 * 
	 * @param type
	 * @param platform
	 * @return
	 */

	public static boolean isCompatiblePlatform(String type, String platform) {

		switch (type) {
		case CommonConstants.NAME_2K14_MS:
		case CommonConstants.NAME_2K16_MS:
		case CommonConstants.NAME_2K16_SS:
		case CommonConstants.NAME_2K19_MS:
		case CommonConstants.NAME_2K19_PS:
			return (convertNameToPlatform(type).equalsIgnoreCase(platform));
		default:
			return true;

		}

	}

	/**
	 * from device.jsp display firminfo
	 * 
	 * @param platformType
	 *            like "2K16 MS"
	 * @param indentify
	 *            firmware version store in upg_settings.version like "157.000"
	 * @return
	 */

	public static String getFirmwareInfo(String platformType, String indentify) {
		String fwInfo;
		switch (platformType) {
		case CommonConstants.NAME_2K14_MS:
			fwInfo = "TPN141HE_004.00" + indentify + ".128";
			break;
		case CommonConstants.NAME_2K16_MS:
			fwInfo = "TPM1532HE.5.249." + indentify;
			break;
		case CommonConstants.NAME_2K16_SS:
			fwInfo = "TPM1531HE.5.249." + indentify;
			break;
		case CommonConstants.NAME_2K19_MS:
			fwInfo = "TPM181HE_R.005.000." + indentify;
			break;
			//TODO:need to update
		case CommonConstants.NAME_2K19_PS:
			fwInfo = "TPM187HE.005.000." + indentify;
			break;
		default:
			fwInfo = "None";
		}
		return fwInfo;
	}

	/**
	 * get upg version folder
	 * 
	 * @param platform
	 *            like MS2K16
	 * @param version
	 *            upg version from upgsetting
	 * @return
	 */
	public static String getVersionFolder(String platform, String version) {
		String versionFolder = "";

		switch (platform) {
		case CommonConstants.PRO_2K14_ES:
		case CommonConstants.PRO_2K14_MS:
		case CommonConstants.PRO_2K16_ES:
		case CommonConstants.PRO_2K16_MS:
		case CommonConstants.PRO_2K16_SS:
		case CommonConstants.PRO_2K19_MS:
		case CommonConstants.PRO_2K19_PS:
			versionFolder = Utils.GetFolder(version);
			break;
		default:
			try {
				Double versionDbl = Double.parseDouble(version) * 1000;
				versionFolder = String.valueOf(versionDbl);
				versionFolder = versionFolder.substring(0, versionFolder.indexOf('.'));
			} catch (Exception e) {
//				 LOG.error(e.getMessage(), e);
			}

		}

		return versionFolder;
	}

	public static File getUpgDestDir(String platform, String versionFolder) {
		File destDir = null;

		switch (platform) {
		case CommonConstants.PRO_2K12_ES:
			destDir = new File(
					CommonConstants.RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K12 + "0157\\0000\\0002\\" + versionFolder);
			break;
		case CommonConstants.PRO_2K13_ES:
			destDir = new File(
					CommonConstants.RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K13 + "0165\\0000\\1302\\" + versionFolder);
			break;

		case CommonConstants.PRO_2K14_ES:
			destDir = new File(CommonConstants.ES2K14_UPG_CREATOR_LOCATION_OUTPUT + versionFolder);
			break;
		case CommonConstants.PRO_2K14_MS:
			destDir = new File(CommonConstants.MS2K14_UPG_CREATOR_LOCATION_OUTPUT + versionFolder);
			break;
		case CommonConstants.PRO_2K16_ES:
			destDir = new File(CommonConstants.ES2K16_UPG_CREATOR_LOCATION_OUTPUT + versionFolder);
			break;
		case CommonConstants.PRO_2K16_MS:
			destDir = new File(CommonConstants.MS2K15_UPG_CREATOR_LOCATION_OUTPUT + versionFolder);
			break;
		case CommonConstants.PRO_2K16_SS:
			destDir = new File(CommonConstants.SS2K16_UPG_CREATOR_LOCATION_OUTPUT + versionFolder);
			break;
		case CommonConstants.PRO_2K19_MS:
			destDir = new File(CommonConstants.MS2K19_UPG_CREATOR_LOCATION_OUTPUT + versionFolder);
			break;
		default:
			destDir = new File(CommonConstants.RF_PLAY_BACK_INPUT_LOCATION + platform);

		}

		return destDir;
	}
	
	public static String getConfigJSPUrl(String platform) {
		String platformId=getPlatformId(platform);
		
		switch(platformId) {
		case CommonConstants.ID_2K12_PSMS:
		case CommonConstants.ID_2K13_MS:
			return "/jsp/setting/newconfig2K12PSMS.jsp";
		case CommonConstants.ID_2K11_PS:
			return "/jsp/setting/newconfig2K11PS.jsp";
		case CommonConstants.ID_2K11_MS:
			return "/jsp/setting/newconfig2K11MS.jsp";
		case CommonConstants.ID_2K12_ES:
			return "/jsp/setting/newconfig2K12ES.jsp";
		case CommonConstants.ID_2K13_ES:
			return "/jsp/setting/newconfig2K13ES.jsp";
		case CommonConstants.ID_2K14_MS:
			return "/jsp/setting/newconfig2K14.jsp";
		case CommonConstants.ID_2K14_ES:
			return "/jsp/setting/newconfig2K14ES.jsp";
		case CommonConstants.ID_2K16_MS:
		case CommonConstants.ID_2K16_SS:
			return "/jsp/setting/newconfig2K16SSMS.jsp";
		case CommonConstants.ID_2K16_ES:
			return "/jsp/setting/newconfig2K16ES.jsp";
		case CommonConstants.ID_2K19_MS:
			return "/jsp/setting/newconfig2K19MS.jsp";
		case CommonConstants.ID_2K19_PS:
			return "/jsp/setting/newconfig2K19PS.jsp";
		default:
			return "";
		}
	}
	
	/**
	 *  get preprocess path for @param platform, for 2k15 up platform, will be "/MasterCloneData/"
	 *  using in process crc for now.
	 * @param platform
	 * @return
	 */
	public static String getPreProcessPath(String platform) {
		String processPath = "";

		String platformId=getPlatformId(platform);
		
		switch (platformId) {
		case CommonConstants.ID_2K16_ES:
		case CommonConstants.ID_2K16_MS:
		case CommonConstants.ID_2K16_SS:
		case CommonConstants.ID_2K19_MS:
		case CommonConstants.ID_2K19_PS:
			processPath = "/MasterCloneData/";
			break;
		default:
			processPath="";
		
//		if("TPM1531HE_CloneData".equalsIgnoreCase(platformRootFolder)
//				|| "TPM1532HE_CloneData".equalsIgnoreCase(platformRootFolder)
//				|| "TPN161HE_CloneData".equalsIgnoreCase(platformRootFolder)
//				||CommonConstants.ID_2K19_MS.equalsIgnoreCase(platformRootFolder)){
//			preProcessPath += "/MasterCloneData/";
		}
		return processPath;
	}
	
}
