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
	
	@RequestMapping(value = "/index/logout1")
	public String logout1() {
		String view = "navigation/logout/logout1";
		return view;
	}
	
	@RequestMapping(value = "/index/logout2")
	public String logout2() {
		String view = "navigation/logout/logout2";
		return view;
	}
	
}
