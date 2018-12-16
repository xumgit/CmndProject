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
	
	@RequestMapping(value = "/index/users")
	public String users() {
		String view = "navigation/admin/users";
		return view;
	}
	
	@RequestMapping(value = "/index/changePassword")
	public String changePassword() {
		String view = "navigation/admin/changePassword";
		return view;
	}
	
	@RequestMapping(value = "/index/systemLog")
	public String systemLog() {
		String view = "navigation/admin/systemLog";
		return view;
	}
	
	@RequestMapping(value = "/index/locationConfig")
	public String locationConfig() {
		String view = "navigation/admin/locationConfig";
		return view;
	}
	
	@RequestMapping(value = "/index/pmsConfig")
	public String pms() {
		String view = "navigation/admin/pms";
		return view;
	}
	
	@RequestMapping(value = "/index/exapi")
	public String exapi() {
		String view = "navigation/admin/exapi";
		return view;
	}
	
	@RequestMapping(value = "/index/weather")
	public String weather() {
		String view = "navigation/admin/weather";
		return view;
	}
	
}
