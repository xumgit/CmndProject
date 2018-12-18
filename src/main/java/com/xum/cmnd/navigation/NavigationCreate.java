package com.xum.cmnd.navigation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/create")
public class NavigationCreate {
	
	@RequestMapping(value = "/index")
	public String index() {
		String view = "navigation/create/index";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_create1")
	public String tabs_create1() {
		String view = "navigation/create/tabs_create1";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_create2")
	public String tabs_create2() {
		String view = "navigation/create/tabs_create2";
		return view;
	}
	
}
