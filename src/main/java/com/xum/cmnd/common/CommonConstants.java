package com.xum.cmnd.common;

public class CommonConstants {

	private CommonConstants(){
		
	}

	public static final int TV_WIXP_PORT=9080;
	
	public static final String SI_SERVER_VER = "6.31.31";
	public static final String SI_SERVER_URL="http://localhost:8080/";	
	
	public static final String CONFIG_FILE_LOCATION = "C:/Philips/SIServer/conf/config.xml";
	public static final String LAST_CONFIG_FILE_LOCATION = "C:/Philips/SIServer/conf/last-config.json";
	public static final String LAST_IP_CONFIG_LOCATION = "C:/Philips/SIServer/conf/last-ip-config.json";
	public static final String SETTING_FILE_LOCATION = "C:/Philips/SIServer/conf/setting.csv";
	public static final String RESOURCE_LOCATION = "C:/Philips/SIServer/resource/";
	public static final String CLONE_ASSEMBLY_LOCATION = "C:/Philips/SIServer/assembly/";
	public static final String CLONE_PROCESS_LOCATION = "C:/Philips/SIServer/process/";
	public static final String SMARTUI_PROCESS_LOCATION = "C:/Philips/SIServer/smartui/";
	public static final String SMARTUI_UPLOADED_IMAGE_LOCATION = "C:/Philips/SIServer/smartui-image/";
	public static final String UPLOADED_UPG_LOCATION = "C:/Philips/SIServer/UPG/";
	public static final String UPLOADED_UPG_LOCATION_TEMPXML = "C:/Philips/SIServer/UPG/TEMPXML/";
	public static final String UPLOADED_AVSTREAM_LOCATION = "C:/Philips/SIServer/AVStream/";
	

	public static final String RF_PLAY_BACK_LOCATION = "C:/Philips/SIServer/playback/";
	public static final String RF_PLAY_BACK_INPUT_LOCATION = "C:/Philips/SIServer/playback/input/";
	public static final String RF_PLAY_BACK_INPUT_UPG_LOCATION = "C:/Philips/SIServer/playback/upg/";
	public static final String RF_PLAY_BACK_OUTPUT_LOCATION = "C:/Philips/SIServer/playback/output/";
	
	public static final String RF_PLAY_BACK_ES_CATALOG_FILE = "C:/Philips/SIServer/catalog/Catalog_ES2K12.xml";
	public static final String RF_PLAY_BACK_MSPS_CATALOG_FILE = "C:/Philips/SIServer/catalog/Catalog_MSPS.xml";
	
	public static final String RF_PLAY_BACK_EXE_INSTALL_LOC = "C:/Philips/SIServer/utils/PSG/";
	public static final String RF_PLAY_BACK_EXE_NAME = "C:/Philips/SIServer/utils/PSG/Gateway.exe";
	public static final String RF_PLAY_BACK_EXE_WD = "C:/Philips/SIServer/utils/PSG/";
	public static final String RF_PLAY_BACK_OUTPUT_PATH = "C:\\Philips\\HotelTV\\PSG\\OutputFiles";

	
	public static final String RF_PLAY_BACK_CONF_SUFFIX = "\\Philips\\PSG\\";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_PS_2K11 = "C:/Philips/HotelTV/2K11_PrimeSuite/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K11 = "C:/Philips/HotelTV/2K11_EasySuite/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_MS_2K11 = "C:/Philips/HotelTV/2K11_MediaSuite/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_PSMS_2K12 = "C:/Philips/HotelTV/2K12_PrimeSuite/";

	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K12_INPUT = "C:/Philips/HotelTV/2K12_EasySuite/0157/0000/0002/FEEF/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K12 = "C:/Philips/HotelTV/2K12_EasySuite/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K13_INPUT = "C:/Philips/HotelTV/2K13_EasySuite/0165/0000/1302/FEEF/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K13 = "C:/Philips/HotelTV/2K13_EasySuite/";
	
	public static final String ES2K12_UPG_CREATOR_UTIL_LOC = "C:\\Philips\\SIServer\\utils\\UPG_Create_3016\\";
	public static final String ES2K12_UPG_CREATOR_UTIL_COMMAND = "cmd /c buh12_pack_rel.exe";
	public static final String ES2K13_UPG_CREATOR_UTIL_COMMAND = "cmd /c buh13_pack_rel.exe";    
	
	public static final String USER_ZIP_TEMP_LOCATION = "C:/Philips/SIServer/zip/";
	public static final String DOWNLOAD_LOCATION = "C:/Philips/SIServer/download/";
	public static final String DOWNLOAD_LOCATION_SMARTUI = "C:/Philips/SIServer/download-smartui/";
	public static final String HOTEL_INFO_IMG_LOCATION = "C:/Philips/SIServer/img/hotel/";
	public static final String HOTEL_INFO_THUMB_IMG_LOCATION = "C:/Philips/SIServer/img/hotel/thumb/";
	public static final String WELCOME_LOGO_IMG_LOCATION = "C:/Philips/SIServer/img/welcome/";
	public static final String WELCOME_LOGO_THUMB_IMG_LOCATION = "C:/Philips/SIServer/img/welcome/thumb/";
	public static final String THEME_IMG_LOCATION = "C:/Philips/SIServer/img/theme/";
	public static final String SMART_INFO_LOCATION = "C:/Philips/SIServer/smartinfo/";
	public static final String HOTEL_INFO_ES_LOCATION = "C:/Philips/SIServer/hotelinfoES/";
	public static final String HOTEL_INFO_ES_THUMB_LOCATION = "C:/Philips/SIServer/hotelinfoES/thumb";
	public static final String TEMPLATE_IMAGE_LOCATION = "C:/Philips/SIServer/template/image/";
	public static final String TEMPLATE_IMAGE_THUMB_LOCATION = "C:/Philips/SIServer/template/image/thumb/";
	
	
	public static final String MS2K11_UTIL_TS = "C:\\Philips\\SIServer\\utils\\pc_clone_assistant_Commandline_2K11MediaSuite_13\\pc_clone_assistant_Commandline_2K11MediaSuite_13.exe";
	public static final String MS2K11_UTIL_TS_WD = "C:\\Philips\\SIServer\\utils\\pc_clone_assistant_Commandline_2K11MediaSuite_13\\";
	
	public static final String PS2K11_UTIL_TS = "C:\\Philips\\SIServer\\utils\\pc_clone_assistant_CommandLine_v9.4\\pc_clone_assistant_CommandLine_v9.4.exe";
	public static final String PS2K11_UTIL_TS_WD = "C:\\Philips\\SIServer\\utils\\pc_clone_assistant_CommandLine_v9.4\\";

	public static final String PSMS2K13_UTIL_TS = "C:\\Philips\\SIServer\\utils\\pc_clone_assitant_CommandLine_2K13MediaSuite\\pc_clone_assistant_Commandline_2K13MediaSuite_2.0.exe";
	public static final String PSMS2K13_UTIL_TS_WD = "C:\\Philips\\SIServer\\utils\\pc_clone_assitant_CommandLine_2K13MediaSuite\\";
	
	public static final String THEME = "theme";
	public static final String HOTEL = "hotel";
	public static final String WELCOME = "welcome";
	public static final String SMARTINFOES = "smartinfoes";
	public static final String TEMPLATES = "templates";
	public static final String PSMS2K12_UTIL_TS = "C:\\Philips\\SIServer\\utils\\pc_clone_assistant_Commandline_2K12PrimeSuite_2.0\\pc_clone_assistant_Commandline_2K12PrimeSuite_2.0.exe";
	public static final String PSMS2K12_UTIL_TS_WD = "C:\\Philips\\SIServer\\utils\\pc_clone_assistant_Commandline_2K12PrimeSuite_2.0\\";
	public static final String CATALOG_FILE_LOCATION = "C:\\Philips\\SIServer\\PSG\\Catalog.xml";
	//public static final String ES2K12_UPG_CREATOR_LOCATION_INPUT = "C:/Philips/HotelTV/2K12_EasySuite/0157/0000/0002/FEEF/";
	public static final String ES2K12_UPG_CREATOR_LOCATION_INPUT = "C:\\Philips\\SIServer\\utils\\UPG_Create_3016\\";
	public static final String ES2K12_UPG_CREATOR_LOCATION_OUTPUT = "C:/Philips/HotelTV/2K12_EasySuite/0157/0000/0002/FEEF/";

	public static final String ES2K13_UPG_CREATOR_LOCATION_INPUT = "C:\\Philips\\SIServer\\utils\\UPG_Create_TPM1012\\";
	public static final String ES2K13_UPG_CREATOR_LOCATION_OUTPUT = "C:/Philips/HotelTV/2K13_EasySuite/0165/0000/1302/FEEF/";
	public static final String LOCATION_MANAGER_STORE = "C:/Philips/SIServer/conf/location.txt";
	public static final String SMARTUI_UPG_FILE = "C:/smartui.upg";
	
	public static final String SMARTUI_DOWNLOAD_PROCESS_LOCATION = "C:\\Philips\\SIServer\\SmartUI_Download\\SmartUI\\";
	public static final String SMARTUI_DOWNLOAD_PROCESS_LOCATION_WD = "C:\\Philips\\SIServer\\SmartUI_Download\\";	
	public static final String MS2K14_UPG_CREATOR_UTIL_COMMAND = "cmd /c HTV_DWPack_1401.exe";
	public static final String MS2K14_UPG_CREATOR_LOCATION_INPUT = "C:/Philips/SIServer/utils/UPG_Create_2K14/";
	
	public static final String MS2K14_XML_CREATOR_CATALOG_INPUT = "0144\\0000\\1404\\";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_MS_2K14 = "C:/Philips/HotelTV/2K14_MediaSuite/";	
	public static final String MS2K14_UPG_CREATOR_LOCATION_OUTPUT = "C:/Philips/HotelTV/2K14_MediaSuite/0144/0000/1404/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_MS_2K14_INPUT = "C:/Philips/HotelTV/2K14_MediaSuite/0144/0000/1404/FEEF/";
	
	public static final String MS2K15_XML_CREATOR_CATALOG_INPUT = "0218\\0122\\00F0\\";
	public static final String MS2K15_UPG_CREATOR_LOCATION_OUTPUT = "C:/Philips/HotelTV/2K15_MediaSuite/0218/0122/00F0/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_MS_2K15_INPUT = "C:/Philips/HotelTV/2K15_MediaSuite/0218/0122/00F0/FEEF/";
	public static final String MS2K15_UPG_CREATOR_LOCATION_INPUT = "C:/Philips/SIServer/utils/UPG_Create_2K15/";
	
	public static final String SS2K16_XML_CREATOR_CATALOG_INPUT = "021b\\0122\\00F0\\";
	public static final String SS2K16_UPG_CREATOR_LOCATION_OUTPUT = "C:/Philips/HotelTV/2K15_MediaSuite/021b/0122/00F0/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_SS_2K16_INPUT = "C:/Philips/HotelTV/2K15_MediaSuite/021b/0122/00F0/FEEF/";
	public static final String SS2K15_UPG_CREATOR_LOCATION_INPUT = "C:/Philips/SIServer/utils/UPG_Create_2K15/";
	
	public static final String MS2K19_XML_CREATOR_CATALOG_INPUT = "021b\\0122\\00F0\\";
	public static final String MS2K19_UPG_CREATOR_LOCATION_OUTPUT = "C:/Philips/HotelTV/2K19_MediaSuite/021b/0122/00F0/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_MS_2K19_INPUT = "C:/Philips/HotelTV/2K19_MediaSuite/021b/0122/00F0/FEEF/";
	public static final String MS2K19_UPG_CREATOR_LOCATION_INPUT = "C:/Philips/SIServer/utils/UPG_Create_2K19/";
	
	public static final String ES2K16_XML_CREATOR_CATALOG_INPUT = "1554\\0000\\1564\\";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K16 = "C:/Philips/HotelTV/2K16_EasySuite/";	
	public static final String ES2K16_UPG_CREATOR_LOCATION_OUTPUT = "C:/Philips/HotelTV/2K16_EasySuite/1554/0000/1564/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K16_INPUT = "C:/Philips/HotelTV/2K16_EasySuite/1554/0000/1564/FEEF/";
	public static final String ES2K16_UPG_CREATOR_LOCATION_INPUT = "C:/Philips/SIServer/utils/UPG_Create_2K16/";
	
	public static final String ES2K14_XML_CREATOR_CATALOG_INPUT = "0148\\0000\\1408\\";		
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K14 = "C:/Philips/HotelTV/2K14_EasySuite/";	
	public static final String ES2K14_UPG_CREATOR_LOCATION_OUTPUT = "C:/Philips/HotelTV/2K14_EasySuite/0148/0000/1408/";
	public static final String RF_PLAY_BACK_EXE_INPUT_LOC_ES_2K14_INPUT = "C:/Philips/HotelTV/2K14_EasySuite/0148/0000/1408/FEEF/";
		
	public static final String ZIP_7 = "C:/Philips/SIServer/utils/7-Zip/";	
	
	//platform Name
	public static final String NAME_2K11_PS = "2K11 PS";
	public static final String NAME_2K11_MS = "2K11 MS";
	public static final String NAME_2K12_PSMS = "2K12 PSMS";
	public static final String NAME_2K12_ES = "2K12 ES";		
	public static final String NAME_2K13_PSMS = "2K13 MS";
	public static final String NAME_2K13_ES = "2K13 ES";	
	public static final String NAME_2K14_MS = "2K14/2K15-MS";
	public static final String NAME_2K14_ES = "2K14/2K15-ES";
	public static final String NAME_2K16_MS = "2016 MS";
	public static final String NAME_2K16_SS = "2016 SS";
	public static final String NAME_2K16_ES = "2016 ES";
	public static final String NAME_2K19_MS = "2019 MS";
	public static final String NAME_2K19_PS = "2019 PS";

	//platform type
	public static final String PRO_2K11_PS = "PS2K11";
	public static final String PRO_2K11_MS = "MS2K11";
	public static final String PRO_2K12_PSMS = "PSMS2K12";
	public static final String PRO_2K13_PSMS = "MS2K13";
	
	public static final String PRO_2K12_ES = "ES2K12";
	public static final String PRO_2K13_ES = "ES2K13";
	public static final String PRO_2K14_ES = "ES2K14";
	public static final String PRO_2K14_MS = "MS2K14";
	public static final String PRO_2K16_MS = "MS2K16";
	public static final String PRO_2K16_SS = "SS2K16";
	public static final String PRO_2K16_ES = "ES2K16";
	public static final String PRO_2K19_MS = "MS2K19";
	public static final String PRO_2K19_PS = "PS2K19";

	//clone data platformId
	public static final String ID_2K11_PS = "Q555A";
	public static final String ID_2K11_MS = "Q555H";
	public static final String ID_2K12_PSMS = "Q554B";
	public static final String ID_2K12_ES = "T911HE_CloneData";
	public static final String ID_2K13_MS = "Q554B-2K13PSMS";	
	public static final String ID_2K13_ES = "TPM1012HE_CloneData";	
	public static final String ID_2K14_MS = "TPN141HE_CloneData";
	public static final String ID_2K14_ES = "TPN142HE_CloneData";
	public static final String ID_2K16_MS = "TPM1532HE_CloneData";
	public static final String ID_2K16_SS = "TPM1531HE_CloneData";
	public static final String ID_2K16_ES = "TPN161HE_CloneData";
	public static final String ID_2K19_MS = "TPM181HE_CloneData";
	public static final String ID_2K19_PS = "TPM187HE_CloneData";

	public static final String DOWNLOAD_CLONE_LOCATION = "_CloneData/MasterCloneData/SmartInfoPages/";
	public static final String DOWNLOAD_Q554BCLONE_LOCATION = "/Q554B/SmartUI/";
		
	public static String rootFolderName = "TPN141HE";
	public static String rootFolderName_2k15_DROID = "TPM1532HE";
	public static String IPrRFMode = "RF";
	
	public static boolean defaultToMGate=false;

    public static final String EDIT_TYPE_CLONE_DATA = "CLONE_DATA";
    public static final String EDIT_TYPE_SMART_INFO = "SMART_INFO";
    public static final String EDIT_TYPE_SMART_TEMPLATE = "SMART_TEMPLATE";
    public static final String EDIT_TYPE_SMART_CONTENT = "SMART_CONTENT";
    public static final String EDIT_TYPE_UPG_DATA = "UPG_DATA";
	
	public static final String TEMPLATE_LOCATION = "C:/Philips/SIServer/template/" ;
	public static final String TEMPLATE_FILE_NAME = "si_template.xml";
	public static final String TEMPLATE_IMG_LOCATION = "C:/Philips/SIServer/template/image/" ;
	public static final String TEMPLATE_IMG_THUMB_LOCATION = "C:/Philips/SIServer/template/image/thumb" ;
	public static final String USER_ZIP_LOCATION = "C:/Philips/SIServer/zip/temp/";
	
	public static final String CHANNEL_PACKAGE_LOGO_PATH_FORMAT="c:\\Philips\\SIServer\\process\\%s\\ChannelPackages\\%d\\ChannelList\\ChannelLogos\\";
	
	public static final String LOG_LOCATION = "C:\\Philips\\SIServer\\log\\";		

	
}
