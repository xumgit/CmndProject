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
	
	@RequestMapping(value = "/index/tabs_users")
	public String tabs_users() {
		String view = "navigation/admin/tabs_users";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_changePassword")
	public String tabs_changePassword() {
		String view = "navigation/admin/tabs_changePassword";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_systemLog")
	public String tabs_systemLog() {
		String view = "navigation/admin/tabs_systemLog";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_locationConfig")
	public String tabs_locationConfig() {
		String view = "navigation/admin/tabs_locationConfig";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_pmsConfig")
	public String tabs_pmsConfig() {
		String view = "navigation/admin/tabs_pmsConfig";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_exapi")
	public String tabs_exapi() {
		String view = "navigation/admin/tabs_exapi";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_weather")
	public String tabs_weather() {
		String view = "navigation/admin/tabs_weather";
		return view;
	}
	
}
