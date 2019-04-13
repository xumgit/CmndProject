package com.xum.cmnd.controller;

import java.util.HashMap;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xum.cmnd.service.SettingService;

@Controller
@RequestMapping(value = "/executeSql")
public class ExecuteSqlScriptController {

	private static final Logger LOG = LogManager.getLogger(ExecuteSqlScriptController.class);
	
	@Autowired
	private SettingService settingService;
	
	@Transactional
	@RequestMapping(value = "/index")
	@ResponseBody
	public String index() {
		String status = "{\"status\":\"Y\"}";
		LOG.info("settingTableChange exexute start");
		this.settingService.settingTableChange();
		Map<String, Object> parms1 = new HashMap<>();  
        parms1.put("platform", "TPM181HE_CloneData"); 
        parms1.put("totalCounts", -1);
        this.settingService.getSettingCountByPlatform(parms1);
        Map<String, Object> parms2 = new HashMap<>();  
        parms2.put("platform", "TPS191HE_CloneData"); 
        parms2.put("totalCounts", -1);
        this.settingService.getSettingCountByPlatformAnother(parms2);
        LOG.info("totalCount1:" + parms1.get("totalCounts") + ",totalCount2:" + parms2.get("totalCounts"));
		LOG.info("settingTableChange exexute end");
		return status;
	}
	
}
