package com.xum.cmnd.navigation;

import com.xum.cmnd.utils.RedisUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xum.cmnd.service.SettingService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping(value = "/tvs")
public class NavigationTVs {

	private static final Logger LOG = LogManager.getLogger(NavigationTVs.class);

	@Autowired
	RedisUtil redisUtil;

	@RequestMapping(value = "/index")
	public String index() {		
		String view = "navigation/tvs/index";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_msg")
	public String tabs_msg() {
		String view = "navigation/tvs/tabs_msg";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_rooms")
	public String tabs_rooms() {
		String view = "navigation/tvs/tabs_rooms";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_tvList")
	public String tabs_tvList(HttpServletRequest request) {
		HttpSession session = request.getSession();
		String strSessionId = session.getId();
		int iPort = request.getServerPort();
		Object obj = session.getAttribute("session");
		if (obj == null) {
			session.setAttribute("session", "sessionTest");
		}
		LOG.info("strSessionId="+strSessionId);
		LOG.info("iPort="+iPort);
		LOG.info("obj="+obj);
		redisUtil.set("sessionId", strSessionId);
		String view = "navigation/tvs/tabs_tvList";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_groupList")
	public String tabs_groupList() {
		String view = "navigation/tvs/tabs_groupList";
		return view;
	}
	
	@RequestMapping(value = "/index/tabs_rfSetting")
	public String tabs_rfSetting() {
		String view = "navigation/tvs/tabs_rfSetting";
		return view;
	}
}
