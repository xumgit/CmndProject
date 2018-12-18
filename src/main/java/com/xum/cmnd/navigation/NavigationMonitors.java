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
	
	@RequestMapping(value = "/index/tabs_monitors1")
	public String tabs_monitors1() {
		String view = "navigation/monitors/tabs_monitors1";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_monitors2")
	public String tabs_monitors2() {
		String view = "navigation/monitors/tabs_monitors2";
		return view;
	}
	
}
