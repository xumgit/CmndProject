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
	
	@RequestMapping(value = "/index/tabs_firmware")
	public String firmwareList() {
		String view = "navigation/files/firmwareList";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_clone")
	public String cloneList() {
		String view = "navigation/files/cloneList";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_settingPackage")
	public String settingPackage() {
		String view = "navigation/files/settingPackage";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_channelPackage")
	public String channelPackage() {
		String view = "navigation/files/channelPackage";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_appPackage")
	public String appPackage() {
		String view = "navigation/files/appPackage";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_banners")
	public String banners() {
		String view = "navigation/files/banners";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_play")
	public String play() {
		String view = "navigation/files/play";
		return view;
	}
	
}
