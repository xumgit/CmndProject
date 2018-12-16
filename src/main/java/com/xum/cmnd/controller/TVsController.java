package com.xum.cmnd.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.xum.cmnd.service.DevicesService;

@Controller
@RequestMapping(value = "/tvs")
public class TVsController {
	
	private static final Logger LOG = LogManager.getLogger(TVsController.class);
	
	@Autowired
	private DevicesService devicesService;
	
	@RequestMapping(value="/getDevices")
	@ResponseBody
	public String getDevices(@RequestParam(value="current", required=false, defaultValue="1") Integer current,
			@RequestParam(value="rowCount", required=false, defaultValue="10") Integer rowCount,
			@RequestParam(value="searchPhrase", required=false) String searchPhrase) {
		int total = 0;
		total = this.devicesService.selectAllCount();
		JsonObject data = new JsonObject();
		JsonArray array = new JsonArray();
		List<Map<String, Object>> authors = this.devicesService.selectAllWithMap();
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
	
}
