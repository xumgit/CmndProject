package com.xum.cmnd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/menu")
public class MenuController {
	
	@RequestMapping(value = "/index")
	public String index() {
		String view = "menu/mainbody";
		return view;
	}
	
}
