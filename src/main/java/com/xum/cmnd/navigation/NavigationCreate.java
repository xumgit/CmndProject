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
	
	@RequestMapping(value = "/index/create1")
	public String create1() {
		String view = "navigation/create/create1";
		return view;
	}
	
	@RequestMapping(value = "/index/create2")
	public String create2() {
		String view = "navigation/create/create2";
		return view;
	}
	
}
