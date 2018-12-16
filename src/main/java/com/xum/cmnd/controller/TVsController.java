package com.xum.cmnd.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public String getAuthor() {
		JsonObject data = new JsonObject();
		JsonArray array = new JsonArray();
		List<Map<String, Object>> authors = devicesService.selectAllWithMap();
		JsonObject jsonObj = null;
		for (Map<String, Object> kv : authors) { 
			jsonObj = new JsonObject();
			for (Map.Entry<String, Object> entry : kv.entrySet()) {
				jsonObj.addProperty(entry.getKey(), String.valueOf(entry.getValue()));
			}
			array.add(jsonObj);
		}	
		data.addProperty("current", 1);
		data.addProperty("rowCount", 10);
		data.addProperty("total", 3);
		data.add("rows", array);
		LOG.info("data.toString():" + data.toString());
		return data.toString();
	}
	
}
