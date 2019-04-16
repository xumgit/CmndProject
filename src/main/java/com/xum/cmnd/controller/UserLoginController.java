package com.xum.cmnd.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/login")
public class UserLoginController {

	private static final Logger LOG = LogManager.getLogger(UserLoginController.class);

	@RequestMapping(value = "/login")
	public String userLogIn(ModelMap model,
			@RequestParam(value="errorMsg", required=false) String errorMsg,
			@RequestParam(value="inputUsername", required=false) String inputUsername,
			@RequestParam(value="inputPassword", required=false) String inputPassword) {
		LOG.info("userlogin/login, errorMsg:" + errorMsg + ",username:" + inputUsername + ",inputPassword:" + inputPassword);
		if (inputUsername != null && !"".equals(inputUsername)) {
			model.addAttribute("inputUsername", inputUsername);
		}
		if (inputPassword != null && !"".equals(inputPassword)) {
			model.addAttribute("inputPassword", inputPassword);
		}
		if (errorMsg != null && !"".equals(errorMsg)) {
			model.addAttribute("errorMsg", errorMsg);
		}
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

	@RequestMapping(value = "/login_out")
	public void userLogOut(HttpServletResponse response) throws IOException {
		LOG.info("userlogin/login_out");
		response.sendRedirect("/login/login");
		//return "redirect:/login/login/";
		//return "userlogin/login_out";
	}
}
