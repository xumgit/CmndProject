package com.xum.cmnd.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.xum.cmnd.pojo.DevicesWithBLOBs;
import com.xum.cmnd.service.DevicesService;
import com.xum.cmnd.utils.Utils;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@Api(tags = {"TVSList"})
@Controller
@Transactional
@RequestMapping(value = "/tvs")
public class TVsController {
	
	private static final Logger LOG = LogManager.getLogger(TVsController.class);
	
	@Autowired
	private DevicesService devicesService;
	
	@Autowired
	private AsyncTaskController asyncTaskController;
	
	// consumes = {"application/JSON","application/XML","text/plain"}
	@ApiOperation(value = "getDevices", notes = "get all devices from devices table") 
	@RequestMapping(value="/getDevices", method = {RequestMethod.POST}, produces = {"application/*"}, 
		consumes = {"application/*"})
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Suceess|OK"),
            @ApiResponse(code = 401, message = "not authorized!"), 
            @ApiResponse(code = 403, message = "forbidden!!!"),
            @ApiResponse(code = 404, message = "not found!!!") })
	@ResponseBody
	public String getDevices(@RequestParam(value="current", required=true, defaultValue="1") Integer current,
			@RequestParam(value="rowCount", required=true, defaultValue="10") Integer rowCount,
			@RequestParam(value="searchPhrase", required=false) String searchPhrase,
			@RequestParam(value="sort[TVIPAddress]", required=false) String sortTVIPAddress) {
		Map<String, Object> mapPara = new HashMap<String, Object>();
		int offset = 0;
		if (current > 0) { 
			offset = (current - 1) * rowCount;
		}
		mapPara.put("offset", offset);
		mapPara.put("rowCount", rowCount);
		
		if (searchPhrase != "" && searchPhrase != null) {
			mapPara.put("searchPhrase", searchPhrase);
		}
		
		if (sortTVIPAddress != null) {
			mapPara.put("TVIPAddressSort", sortTVIPAddress);
		}
		
		int total = 0;
		total = this.devicesService.selectAllCount();
		JsonObject data = new JsonObject();
		JsonArray array = new JsonArray();
		List<Map<String, Object>> authors = this.devicesService.selectDevicesWithBootGrid(mapPara);
		JsonObject jsonObj = null;
		for (Map<String, Object> kv : authors) { 
			jsonObj = new JsonObject();
			for (Map.Entry<String, Object> entry : kv.entrySet()) {
				jsonObj.addProperty(entry.getKey(), String.valueOf(entry.getValue()));
			}
			array.add(jsonObj);
		}	
		data.addProperty("current", current);
		data.addProperty("rowCount", rowCount);
		data.addProperty("total", total);
		data.add("rows", array);
		LOG.info("data.toString():" + data.toString());
		try {
			asyncTaskController.testAsync();
		} catch (InterruptedException e) {
			LOG.error(e.getMessage(), e);
			Thread.currentThread().interrupt();
		} catch (ExecutionException e) {
			LOG.error(e.getMessage(), e);
			Thread.currentThread().interrupt();
		} 
		return data.toString();
	}
	
    @ApiOperation(value="getSwAndCloneInfo", notes = "get all devices sw and cl info")
	@RequestMapping(value="/getSwAndCloneInfo", method = {RequestMethod.GET}, produces = {"application/*"}, 
			consumes = {"application/*"})
	@ResponseBody
	public String getSwAndCloneInfo() {
		JsonObject data = new JsonObject();
		
		List<Map<Integer, String>> upgList = new ArrayList<Map<Integer, String>>();
		Map<Integer, String> upgMap = new HashMap<Integer, String>();
		upgMap.put(0, String.valueOf(1));
		upgMap.put(1, "TPM1531HE.5.249.300");	
		upgMap.put(2, String.valueOf(2));
		upgMap.put(3, "TPM1531HE.5.249.310");
		upgList.add(upgMap);
		String swInfo = new Gson().toJson(upgList).toString();
		data.addProperty("swInfo", swInfo);
		
		List<Map<Integer, String>> clList = new ArrayList<Map<Integer, String>>();
		Map<Integer, String> map = new HashMap<Integer, String>();		
		map.put(0, String.valueOf(1));
		map.put(1, "TPM1532_clonedata_1");	
		map.put(2, String.valueOf(2));
		map.put(3, "TPM1532_clonedata_2");		
		clList.add(map);
		String cloneInfo = new Gson().toJson(clList).toString();
		data.addProperty("cloneInfo", cloneInfo);
		
		return data.toString();
	}
	
    @ApiOperation(value="getDevicesInfoByTvUid/{tvUid}", notes = "according to tvUid, get current devices info")
    @ApiImplicitParam(name = "tvUid", value = "tvUid", required = false, dataType = "String")
    @RequestMapping(value = "/getDevicesInfoByTvUid/{tvUid}", method = {RequestMethod.POST}, produces = {"application/*"}, 
			consumes = {"application/*"})
    public DevicesWithBLOBs getDevicesInfoByTvUid(@PathVariable(value = "tvUid", required=false) String tvUid) {
    	DevicesWithBLOBs devices = null;
    	
    	if (tvUid != "") { 
    		devices = this.devicesService.selectByPrimaryKey(tvUid);
    	}
    	  	
    	return devices;
    }
    
    @ApiOperation(value="saveDeviceName", notes = "according to tvUid, save device name")
	@RequestMapping(value="/saveDeviceName", method = {RequestMethod.POST}, produces = {"application/*"}, 
			consumes = {"application/*"})
	@ResponseBody
	public String saveDeviceName(@RequestParam(value="tvUid", required=true, defaultValue="") String tvUid,
			@RequestParam(value="deviceName", required=true, defaultValue="") String deviceName) {
		String status = "{\"status\":\"success\"}";
		LOG.info("tvUid:" + tvUid + ",deviceName:" + deviceName);
		
		DevicesWithBLOBs device = new DevicesWithBLOBs();
		
		if (tvUid != "") {
			device.setId(tvUid);
			device.setTvname(deviceName);
			int affectRow = this.devicesService.updateByPrimaryKeySelective(device);
			if (affectRow < 0) {
				status = "{\"status\":\"failed\"}";
			}
		} else {
			status = "{\"status\":\"failed\"}";
		}
		
		return status;
	}
    
    @ApiOperation(value="addRFTVs", notes = "add rf tv, just to test")
	@RequestMapping(value="/addRFTVs", method = {RequestMethod.POST}, produces = {"application/*"}, 
			consumes = {"application/*"})
	@ResponseBody
	public String addRFTV(@RequestParam(value="tvRoomIds", required=false, defaultValue="") String tvRoomIds,
			@RequestParam(value="platform", required=false, defaultValue="2019 MS") String platform) {
    	String status = "{\"status\":\"success\"}";
  	    	
    	if (tvRoomIds != null && tvRoomIds.length() > 0) {
    		DevicesWithBLOBs device = new DevicesWithBLOBs();
			device.setType(platform);
			device.setTvipaddress("RF");
    		DevicesWithBLOBs existDevice = null;
    		String[] tvRoomIdsArr = tvRoomIds.split(",");
    		int tvRoomIdlen = tvRoomIdsArr.length;
    		for (int i = 0;i < tvRoomIdlen; i++) {
    			String roomId = Utils.getTvRoomId(tvRoomIdsArr[i]);	
    			String datetime = Utils.GetDate();
    			Date dateName = new Date();        
    	        SimpleDateFormat ft = new  SimpleDateFormat("dd MMM yyyy hh:mm:ss", Locale.ENGLISH);
    	    	device.setTvroomid(roomId);
    			existDevice = this.devicesService.selectByParameter(device);
    			if (existDevice != null) { // had exist, not need add   				
    				existDevice.setPowerstatus("On");
    				existDevice.setLastonline(datetime);
    				int affectRow = this.devicesService.updateByPrimaryKeySelective(existDevice);
    				if (affectRow < 0) {
    					LOG.info("had exist roomid:" + roomId + ",platform:" + platform + ",update failed");
        			} else {
        				LOG.info("had exist roomid:" + roomId + ",platform:" + platform + ",update success");
        			}
    			} else { // add RF device 
        			String uuid = UUID.randomUUID().toString().replaceAll("-", "");
        			LOG.info(i + "=" + tvRoomIdsArr[i] + ",uuid=" + uuid);  
        			String tvSerialNumber = "CMNDRF" + uuid.substring(0, 12);
        			String tvMACAddress = Utils.getTVMAVAddress(uuid.substring(12, 24));
        			String tvUniqueId = tvSerialNumber + tvMACAddress.replaceAll(":", "");
        			LOG.info("tvSerialNumber=" + tvSerialNumber + ",TVMACAddress=" + tvMACAddress);
        			device.setId(tvUniqueId);
        			device.setTvname("TV " + ft.format(dateName));
        	    	device.setPowerstatus("On");
        	    	device.setCreateddate(datetime);
        	    	device.setLastonline(datetime);
        			device.setTvuniqueid(tvUniqueId);
        			device.setTvserialnumber(tvSerialNumber);
        			device.setTvmacaddress(tvMACAddress);      			
        			int affectRow = this.devicesService.insertSelective(device);
        			if (affectRow < 0) {
        				status = "{\"status\":\"failed\"}";
        			}
    			}
    		}
    	} else {
    		status = "{\"status\":\"failed\"}";
    	}
    	
    	return status;
    }
	
}
