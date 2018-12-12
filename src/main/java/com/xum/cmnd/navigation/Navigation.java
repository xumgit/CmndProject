package com.xum.cmnd.navigation;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/navi")
public class Navigation {
	
	private static final Logger LOG = LogManager.getLogger(Navigation.class);
	
	@RequestMapping(value = "/index")
	public String index(HttpServletRequest request, ModelMap model) {
		HttpSession session = request.getSession();
	    String strSessionId = session.getId();
	    int iPort = request.getServerPort();
	    String requestUrl = request.getRequestURI();
	    Object obj = session.getAttribute("currentTab");
	    if (obj == null) {
	    	session.setAttribute("currentTab", "devices");
	    } 
	    LOG.info("strSessionId=" + strSessionId);
	    LOG.info("requestUrl=" + requestUrl);
	    LOG.info("iPort=" + iPort);
	    LOG.info("obj=" + obj);
		model.addAttribute("currentTab", String.valueOf(obj));
		String view = "navigation/index";
		return view;
	}
	
}
