package com.xum.cmnd.navigation;

import com.xum.cmnd.pojo.MongoTest;
import com.xum.cmnd.utils.MailUtil;
import com.xum.cmnd.utils.MongoUtil;
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
