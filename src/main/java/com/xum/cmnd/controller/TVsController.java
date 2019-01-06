package com.xum.cmnd.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.xum.cmnd.pojo.DevicesWithBLOBs;
import com.xum.cmnd.service.DevicesService;

@Controller
@RequestMapping(value = "/tvs")
public class TVsController {
	
	private static final Logger LOG = LogManager.getLogger(TVsController.class);
	
	@Autowired
	private DevicesService devicesService;
	
	@RequestMapping(value="/getDevices")
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
		return data.toString();
	}
	
	@RequestMapping(value="/getSwAndCloneInfo")
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
	
	@RequestMapping(value="/saveDeviceName")
	@ResponseBody
	public String saveDeviceName(@RequestParam(value="tvUid", required=true, defaultValue="") String tvUid,
			@RequestParam(value="deviceName", required=true, defaultValue="") String deviceName) {
		String status = "{\"status\":\"success\"}";
		LOG.info("tvUid:" + tvUid + ",deviceName:" + deviceName);
		
		DevicesWithBLOBs device = new DevicesWithBLOBs();
		
		if (tvUid != "") {
			device.setId(tvUid);
			device.setTvname(deviceName);
			int affectRow = devicesService.updateByPrimaryKeySelective(device);
			if (affectRow < 0) {
				status = "{\"status\":\"failed\"}";
			}
		} else {
			status = "{\"status\":\"failed\"}";
		}
		
		return status;
	}
	
}
