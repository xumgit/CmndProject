package com.xum.cmnd.navigation;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/tvs")
public class NavigationTVs {

	@RequestMapping(value = "/index")
	public String index(HttpServletRequest request) {
		HttpSession session = request.getSession();
	    Object obj = session.getAttribute("currentTab");
	    if (obj == null) {
	    	session.setAttribute("currentTab", "tvs");
	    }
		String view = "navigation/tvs/index";
		return view;
	}
	
	@RequestMapping(value = "/tabs_msg")
	public String tabs_msg() {
		String view = "navigation/tvs/tabs_msg";
		return view;
	}
	
	@RequestMapping(value = "/tabs_rooms")
	public String tabs_rooms() {
		String view = "navigation/tvs/tabs_rooms";
		return view;
	}
	
	@RequestMapping(value = "/tabs_tvList")
	public String tabs_tvList() {
		String view = "navigation/tvs/tabs_tvList";
		return view;
	}
	
	@RequestMapping(value = "/tabs_groupList")
	public String tabs_groupList() {
		String view = "navigation/tvs/tabs_groupList";
		return view;
	}
	
	@RequestMapping(value = "/tabs_rfSetting")
	public String tabs_rfSetting() {
		String view = "navigation/tvs/tabs_rfSetting";
		return view;
	}
}
