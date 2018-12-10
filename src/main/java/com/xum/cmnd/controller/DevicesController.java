package com.xum.cmnd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/devices")
public class DevicesController {

	@RequestMapping(value = "/index")
	public String index() {
		String view = "devices/devices";
		return view;
	}
	
}
