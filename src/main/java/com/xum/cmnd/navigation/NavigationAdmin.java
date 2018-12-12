package com.xum.cmnd.navigation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/admin")
public class NavigationAdmin {
	
	@RequestMapping(value = "/index")
	public String index() {
		String view = "navigation/admin/index";
		return view;
	}
	
}
