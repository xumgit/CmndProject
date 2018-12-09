package com.xum.cmnd.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Utils {

	private static final Logger LOG = LogManager.getLogger(Utils.class);
	
	public static String GetDate() {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd-HH:mm:ss");
		return dateFormat.format(new Date());
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
