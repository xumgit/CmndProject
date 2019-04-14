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
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component(value = "customAuthenticationSuccessHandler")
public class CustomAuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

	private static final Logger LOG = LogManager.getLogger(CustomAuthenticationSuccessHandler.class);
	
	@Autowired
    private ObjectMapper objectMapper;
	
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
                throws IOException, ServletException {         	 
          //super.onAuthenticationSuccess(request, response, authentication);         
          Map<String,String> map = new HashMap<>();
          map.put("code", "200");
          map.put("msg", "login success");
          response.setContentType("application/json;charset=UTF-8");
          response.getWriter().write(objectMapper.writeValueAsString(map));
          LOG.info("onAuthenticationSuccess:" + objectMapper.writeValueAsString(authentication)); 
          new DefaultRedirectStrategy().sendRedirect(request, response, "/navi/index");  
    }
	
}
