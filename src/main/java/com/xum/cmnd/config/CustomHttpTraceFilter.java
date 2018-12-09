package com.xum.cmnd.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class CustomHttpTraceFilter implements Filter {
    private static final Logger LOGGER = LogManager.getLogger(CustomHttpTraceFilter.class);
    public static final String TRACE_ID_HEADER_NAME = "FDD_TRACE_ID";

    public CustomHttpTraceFilter() {
    	
    }

    public void init(FilterConfig filterConfig) throws ServletException {
    }

    public void doFilter(ServletRequest request, final ServletResponse response, final FilterChain chain) 
    		throws IOException, ServletException {
        final HttpServletRequest req = (HttpServletRequest)request;
        String methodType = ((HttpServletRequest) request).getMethod();
        LOGGER.info("methodType:" + methodType);
        if ("POST".equals(methodType)) {
            ServletRequest reqq = new CustomPostHttpServletRequestWrapper((HttpServletRequest) request);
            chain.doFilter(reqq, response);
        } else {
            chain.doFilter(req, response);
        }
    }

    public void destroy() {
    	
    }
}
