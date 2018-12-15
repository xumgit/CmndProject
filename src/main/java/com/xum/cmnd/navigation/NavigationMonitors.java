package com.xum.cmnd.navigation;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/monitors")
public class NavigationMonitors {
	
	@RequestMapping(value = "/index")
	public String index(HttpServletRequest request) {
		HttpSession session = request.getSession();
	    Object obj = session.getAttribute("currentTab");
	    if (obj == null) {
	    	session.setAttribute("currentTab", "monitors");
	    }
		String view = "navigation/monitors/index";
		return view;
	}
	
}
