package com.xum.cmnd.navigation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/logout")
public class NavigationLogout {

	@RequestMapping(value = "/index")
	public String index() {
		String view = "navigation/logout/index";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_logout1")
	public String tabs_logout1() {
		String view = "navigation/logout/tabs_logout1";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_logout2")
	public String tabs_logout2() {
		String view = "navigation/logout/tabs_logout2";
		return view;
	}
	
}
