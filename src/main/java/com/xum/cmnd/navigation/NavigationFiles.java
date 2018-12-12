package com.xum.cmnd.navigation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/files")
public class NavigationFiles {
	
	@RequestMapping(value = "/index")
	public String index() {
		String view = "navigation/files/index";
		return view;
	}
	
}
