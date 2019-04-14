package com.xum.cmnd.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/login")
public class UserLoginController {

	private static final Logger LOG = LogManager.getLogger(UserLoginController.class);
	
	@RequestMapping(value = "/login")
	public String userLogIn() {	
		LOG.info("userlogin/login");
		return "userlogin/login";
	}
	
	@RequestMapping(value = "/login_process")
	public String userLogSuccess() {	
		LOG.info("userlogin/login_process");
		return "userlogin/login_process";
	}
	
	@RequestMapping(value = "/login_error")
	public String userLogError() {	
		LOG.info("userlogin/login_error");
		return "userlogin/login_error";
	}
}
