//package com.xum.cmnd.config;
//
//import org.apache.commons.lang3.StringUtils;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
//
//import javax.servlet.*;
//import javax.servlet.http.HttpServletRequest;
//import java.io.IOException;
//
//public class LocalUserInfoFilter implements Filter {
//
//    private static final Logger LOG = LogManager.getLogger(LocalUserInfoFilter.class);
//
//    @Override
//    public void init(FilterConfig filterConfig) throws ServletException {
//
//    }
//
//    @Override
//    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//        HttpServletRequest request_ = (HttpServletRequest)request;
//        String loginName = CASUtil.getAccountNameFromCas(request_);
//        if(StringUtils.isNotEmpty(loginName)){
//            LOG.info("loginName:"  + loginName);
//            request_.getSession().setAttribute("loginName", loginName);
//        }
//
//        chain.doFilter(request, response);
//    }
//
//    @Override
//    public void destroy() {
//
//    }
//
//}
