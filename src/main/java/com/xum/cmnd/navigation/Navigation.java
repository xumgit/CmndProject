package com.xum.cmnd.navigation;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xum.cmnd.service.SettingService;

@Controller
@RequestMapping(value = "/")
public class Navigation {
	
	private static final Logger LOG = LogManager.getLogger(Navigation.class);
	
	@RequestMapping(value = "/")
	public String index(HttpServletRequest request) {
		String view = "navigation/index";	
		return view;
	}
	
	@RequestMapping(value = "/dafaultTab")
	@ResponseBody
	public String defaultTab(HttpServletRequest request) {
		String dafaultTab = "{\"tab\":\"tvs\"}";
		
		HttpSession session = request.getSession();
	    String strSessionId = session.getId();
	    int iPort = request.getServerPort();
	    String requestUrl = request.getRequestURI();
	    Object obj = session.getAttribute("currentTab");
	    if (obj == null) {
	    	session.setAttribute("currentTab", "tvs");
	    } 
	    LOG.info("strSessionId=" + strSessionId);
	    LOG.info("requestUrl=" + requestUrl);
	    LOG.info("iPort=" + iPort);
	    LOG.info("obj=" + obj);
	    String cuttentTab = String.valueOf(obj);
	    
	    switch(cuttentTab) {
			case "monitors" : 
				dafaultTab = "{\"tab\":\"monitors\"}";
				break;
			case "tvs" : 
				dafaultTab = "{\"tab\":\"tvs\"}";
				break;
			case "files" : 
				dafaultTab = "{\"tab\":\"files\"}";
				break;
			case "create" : 
				dafaultTab = "{\"tab\":\"create\"}";
				break;
			case "admin" : 
				dafaultTab = "{\"tab\":\"admin\"}";
				break;
			case "logout" : 
				dafaultTab = "{\"tab\":\"logout\"}";
				break;
			default:
				dafaultTab = "{\"tab\":\"tvs\"}";
				break;
	    }
		
		return dafaultTab;
	}
	
}
