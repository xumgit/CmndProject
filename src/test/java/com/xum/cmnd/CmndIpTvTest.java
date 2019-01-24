package com.xum.cmnd;

import static org.junit.Assert.fail;

import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.xum.cmnd.common.CommonVariables;
import com.xum.cmnd.service.DevicesService;

public class CmndIpTvTest {

	private static final Logger LOG = LogManager.getLogger(CmndIpTvTest.class);
	
	@Autowired
	private DevicesService devicesService;
	
	public static String TVUniqueID = "TEST123456789";
	
	public static String endPoint = "http://localhost:8081/SmartInstall/webservices.jsp";
	public static String tvResponse = "{\"CommandDetails\":{\"TVDiscoveryParameters\":{\"PowerStatus\":\"Standby\",\"TVIPAddress\":\"192.168.1.100\","
									+ "\"TVModelNumber\":\"32HFL5011T/12\",\"TVRoomID\":\"11111\",\"TVSerialNumber\":\"12345678911\","
									+ "\"TVMACAddress\":\"1C:5A:6B:B5:C5:7F\",\"VSecureTVID\":\"80F4F91\"},\"WebServiceParameters\":{\"PollingFrequency\":10,"
									+ "\"TVUniqueID\":\"" + TVUniqueID + "\"}},\"CmdType\":\"Response\",\"Cookie\":293,\"Fun\":\"TVDiscoveryService\","
									+ "\"Svc\":\"WebServices\",\"SvcVer\":\"3.0\"}";
	
	@Test
	public void sendTVDiscover() {
		try {		
			URL endPointUrl = new URL(endPoint);
			HttpURLConnection connection = (HttpURLConnection)endPointUrl.openConnection();
			connection.setRequestMethod("POST");
			connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			connection.setRequestProperty("Content-Length", "" + Integer.toString(tvResponse.getBytes().length));
			connection.setRequestProperty("Content-Language", "en-US");
			connection.setUseCaches(true);
			connection.setDoInput(true);
			connection.setDoOutput(true);
			
			try (DataOutputStream wr = new DataOutputStream(connection.getOutputStream());) {
				wr.writeBytes(tvResponse);
				wr.flush();
			} catch (Exception e) {
				LOG.error(e.getMessage(), e);
			}
			
			int code = connection.getResponseCode();
			CommonVariables.hashMap.put("tv", "change");
			//assertEquals(200, code);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			fail("test sendTvDiscover fail");
		}
	}
		
//	@Test
//	public void testDevicesTable() {	
//		try {
//			this.devicesService.deleteByPrimaryKey(TVUniqueID);
//		} catch (Exception e) {
//			LOG.error(e.getMessage(), e);
//			fail("delete Device fail");
//		}
//	}
	
}
