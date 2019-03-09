package com.xum.cmnd.utils;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Utils {

	private static final Logger LOG = LogManager.getLogger(Utils.class);
	
	public static String getTVMAVAddress(String tvMAC) {
		String tvMACAddress = "1A:2B:3C:4D:5E:6F";
		StringBuilder tvMACABuff = new StringBuilder(tvMAC);
		if (tvMACABuff.length() == 12) {
			tvMACABuff.insert(2, ":");
			tvMACABuff.insert(5, ":");
			tvMACABuff.insert(8, ":");
			tvMACABuff.insert(11, ":");
			tvMACABuff.insert(14, ":");
			tvMACAddress = tvMACABuff.toString().toUpperCase();
		}
		return tvMACAddress;
	}
	
	public static String GetDate() {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd-HH:mm:ss");
		return dateFormat.format(new Date());
	}
	
	public static boolean isReachable(String ipAddress) throws UnknownHostException {
		InetAddress inet = InetAddress.getByName(ipAddress);
		boolean reachable = false;
		try {
			reachable = inet.isReachable(5000);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}

		return reachable;
	}
	
	public static String getMaxItemVersion(ArrayList<String> allItemVersions, String platform){
		
		if((null == allItemVersions) || (0 == allItemVersions.size())){
			return "";
		}
		Iterator<String> it = allItemVersions.iterator();
		ArrayList<Date> convertDates = new ArrayList<Date>();
		SimpleDateFormat format = new SimpleDateFormat();
		if("2K14/2K15-MS".equals(platform)){
			format = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		}else if("2016 MS".equals(platform) || "2016 SS".equals(platform)){//Android
			format = new SimpleDateFormat("dd/MM/yyyy:HH:mm");
		}
		
		
		while(it.hasNext()){
			String version = it.next();
			Date date = null;
			String  pos11Str = "";
			try{
				if("2K14/2K15-MS".equals(platform)){
					version = version.replace("/", "-");
					pos11Str = version.substring(10, 11);
					SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd"+pos11Str+"HH:mm");
					date = format1.parse(version);
				}else{
					date = format.parse(version);
				}
				convertDates.add(date);
				LOG.info("clone item version : " + date.toString());
			}catch(Exception e){
				//LOG.error(e.getMessage(), e);
			}
		}
		
		if(convertDates == null || convertDates.size() == 0){
			return "";
		}
		Iterator<Date> dateIt = convertDates.iterator();
		Date maxVersion = convertDates.get(0);
		while(dateIt.hasNext()){
			Date date = dateIt.next();
			if(maxVersion.compareTo(date) < 0){
				maxVersion = date;
			}
		}
		LOG.info("max version : " + maxVersion.toString());
		return format.format(maxVersion);
	}
	
	public static String uniformDateFormatForTvCloneIdentifiers(ArrayList<String> allItemVersions, String platform){
		
		if((null == allItemVersions) || (0 == allItemVersions.size())){
			return "";
		}
		String ret = "";
		StringBuilder stringBuilder = new StringBuilder();
		SimpleDateFormat format = new SimpleDateFormat();
		if("2K14/2K15-MS".equals(platform)){
			format = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		}/*else if("2016".equals(platform)){//Android no need deal because of read TvCloneIdentifiers will jude in DeviceServlet 
			format = new SimpleDateFormat("dd/MM/yyyy:HH:mm");
		}*/
		
		Iterator<String> it = allItemVersions.iterator();
		while(it.hasNext()){
			String version = it.next();
			Date date = null;
			String  pos11Str = "";
			try{
				if("2K14/2K15-MS".equals(platform)){
					version = version.replace("/", "-");
					pos11Str = version.substring(10, 11);
					SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd"+pos11Str+"HH:mm");
					date = format1.parse(version);
					stringBuilder.append(format.format(date)+",");
					
				}else{//Android
					//date = format.parse(version);
					stringBuilder.append(version+",");
					
				}
				
			}catch(Exception e){//Android will enter 
				//no deal with,remain the old dateStr
				//stringBuilder.append(version+",");
			}
		}
		ret = stringBuilder.toString();
		ret = ret.substring(0, ret.length() -1);
		LOG.info(platform + " TvCloneIdentifiers in DeviceServlet="+ ret);
		return ret;
	}
	
	public static String GetVersion(String version) {
		Pattern P1 = Pattern.compile("\\s*|\t|\r|\n|null");
		Matcher m = P1.matcher(version);

		version = m.replaceAll("");
		String str = version;
		Pattern P2 = Pattern.compile(".", Pattern.LITERAL);
		String lineSplit[] = P2.split(str);

		if (lineSplit.length == 4) {

			if (lineSplit[2].length() > 3) {

				String r = lineSplit[2].substring(0, 3).trim();
				String l = String.valueOf(Integer.parseInt(lineSplit[2].substring(3, 4).trim(), 16));

				char arr[] = l.toCharArray();
				int sum = 0;

				for (char c : arr) {
					sum += Integer.parseInt("" + c + "");
				}

				String f = String.valueOf(Integer.parseInt(r) + sum);

				switch (f.length()) {
				case 0:
					lineSplit[2] = "000";
					break;
				case 1:
					lineSplit[2] = "00" + f;
					break;
				case 2:
					lineSplit[2] = "0" + f;
					break;
				default:
					lineSplit[2] = f;
					break;
				}
			}

			if (Integer.parseInt(lineSplit[1]) < 10) {
				version = lineSplit[1].substring(2, 3) + "." + lineSplit[2];
			} else {
				version = "1." + lineSplit[1];
			}
		}
		LOG.info(" version > " + version);
		return version;
	}
	
	public static String GetFolder(String version) {
		double versionDb = 0.0;
		String versionFolder = null;

		version = GetVersion(version);
		if ("".equalsIgnoreCase(version)) {
			versionFolder = "9999";
		} else {
			try {
				versionDb = (Double.parseDouble(version) * 1000);
				versionFolder = String.valueOf(Math.round(versionDb));
				// versionFolder = versionFolder.substring(0, versionFolder.indexOf("."));
			} catch (Exception e) {
				LOG.error(e.getMessage(), e);
				versionFolder = "9999";
			}
		}

		LOG.info(" Folder > " + versionFolder);
		return versionFolder;
	}
	
    public static String getTvRoomId(String tvRoomId) {
    	String _tvRoomId = "";     	
		if (tvRoomId != null) {
			int tvRoomIdLen = tvRoomId.length();
			if (tvRoomIdLen < 5) {
				switch(tvRoomIdLen) {
					case 0:
						_tvRoomId = "00000";
						break;
					case 1: 
						_tvRoomId = "0000" + tvRoomId;
						break;
					case 2: 
						_tvRoomId = "000" + tvRoomId;
						break;
					case 3: 
						_tvRoomId = "00" + tvRoomId;
						break;
					case 4: 
						_tvRoomId = "0" + tvRoomId;
						break;
					default:
						_tvRoomId = "00000";
						break;
				}
			}
		}
		return _tvRoomId;
    }
}
