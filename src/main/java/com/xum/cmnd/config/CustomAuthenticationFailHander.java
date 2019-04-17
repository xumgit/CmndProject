package com.xum.cmnd.config;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component(value = "customAuthenticationFailHander")
public class CustomAuthenticationFailHander extends SimpleUrlAuthenticationFailureHandler {

	private static final Logger LOG = LogManager.getLogger(CustomAuthenticationFailHander.class);

	private String  defaultFailureUrl = "/login/login?errorMsg=" + ERROR_MSG;

	private static final String ERROR_MSG = "UserName or Password error!";

	@Autowired
    private ObjectMapper objectMapper;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                AuthenticationException exception) throws IOException, ServletException {
          Map<String,String> map = new HashMap<>();
          map.put("code", "201");
          map.put("msg", "login error");
          response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
          response.setContentType("application/json");
          response.setCharacterEncoding("UTF-8");
          response.getWriter().write(objectMapper.writeValueAsString(map));
          //LOG.info("onAuthenticationFailure:" + objectMapper.writeValueAsString(exception));
          String username = request.getParameter("username");
          String password = request.getParameter("password");
          LOG.info("username:" + username + ",password:" + password);
          String url = "/login/login_error?errorMsg=" + ERROR_MSG + "&inputUsername=" + username + "&inputPassword=" + password;
          //super.onAuthenticationFailure(request, response, exception);
          //response.sendRedirect(url);
          //super.onAuthenticationFailure(request, response, exception);
          request.getRequestDispatcher(url).forward(request, response);
    }
	
}
