package com.xum.cmnd.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xum.cmnd.pojo.Devices;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(tags = {"IPTVHandle"})
@Controller
@RequestMapping(value = "/SmartInstall")
public class IPTVHandleController {

	private static final Logger LOG = LogManager.getLogger(IPTVHandleController.class);

	@ApiOperation(value = "iptvHandle", notes = "test api")
	@RequestMapping(value = "/iptvHandle", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public void iptvHandle(@RequestBody Devices devices) {
		LOG.info("iptv Handle Test");
		return ;
	}
	
}
