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
	
	@RequestMapping(value = "/index/tabs_firmwareList")
	public String tabs_firmwareList() {
		String view = "navigation/files/tabs_firmwareList";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_cloneList")
	public String tabs_cloneList() {
		String view = "navigation/files/tabs_cloneList";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_settingPackage")
	public String tabs_settingPackage() {
		String view = "navigation/files/tabs_settingPackage";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_channelPackage")
	public String tabs_channelPackage() {
		String view = "navigation/files/tabs_channelPackage";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_appPackage")
	public String tabs_appPackage() {
		String view = "navigation/files/tabs_appPackage";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_banners")
	public String tabs_banners() {
		String view = "navigation/files/tabs_banners";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_play")
	public String tabs_play() {
		String view = "navigation/files/tabs_play";
		return view;
	}
	
}
