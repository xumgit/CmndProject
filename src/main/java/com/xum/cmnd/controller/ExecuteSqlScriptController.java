package com.xum.cmnd.controller;

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
		LOG.info("settingTableChange exexute end");
		return status;
	}
	
}
