package com.xum.cmnd.utils;

public class CmndStringUtils {

	public static String removeNL(String s) {
        if (s != null) {
            return s.replaceAll("[\\t\\n\\r]", " ");
        }
		return s;
	}
	
	public static String string2Unicode(String string) {
		StringBuilder unicode = new StringBuilder();
	 
		final int unicode_length=4;
		
		for (int i = 0; i < string.length(); i++) {
	        char c = string.charAt(i);
	        String s = Integer.toHexString(c);
	        
//	        if (s.length() <= 2) {
//                s = "00" + s;
//            }
	        
	        //fill unicode length 4
	        if(s.length()<unicode_length) {
	        	StringBuilder sb=new StringBuilder(s);
	        	for (int j=0;j<unicode_length-s.length();j++) {
	        		sb.insert(0, "0");	        		
	        	}
	        	s=sb.toString();
	        }     	        
        	        
	        unicode.append("\\u" + s);
	    }
	    return unicode.toString();
	}

	public static String unicode2String(String unicode) {
        StringBuffer string = new StringBuffer();
        String[] hex = unicode.split("\\\\u");
        
        for (int i = 1; i < hex.length; i++) {
            int data = Integer.parseInt(hex[i], 16);
            string.append((char) data);
        }
        return string.toString();
    }
	
}
