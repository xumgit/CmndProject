package com.xum.cmnd.navigation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/monitors")
public class NavigationMonitors {
	
	@RequestMapping(value = "/index")
	public String index() {
		String view = "navigation/monitors/index";
		return view;
	}
	
	@RequestMapping(value = "/index/monitors1")
	public String monitors1() {
		String view = "navigation/monitors/monitors1";
		return view;
	}
	
	@RequestMapping(value = "/index/monitors2")
	public String monitors2() {
		String view = "navigation/monitors/monitors2";
		return view;
	}
	
}
