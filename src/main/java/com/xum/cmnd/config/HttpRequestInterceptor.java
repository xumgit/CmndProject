package com.xum.cmnd.config;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.alibaba.fastjson.JSON;

@Component
public class HttpRequestInterceptor extends HandlerInterceptorAdapter {
    private static final Logger LOG = LogManager.getLogger(HttpRequestInterceptor.class);
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        StringBuilder logSb = new StringBuilder();
        Object allHeaders = getAllHeaders(request);
        Object allParams = getAllParams(request);
        String requestMethod = request.getMethod();
        logSb.append("收到远程地址->").append(request.getRemoteHost())
                .append("(").append(request.getRemoteAddr()).append(")")
                .append("的").append(requestMethod).append("请求。")
                .append("Request Path=").append(request.getRequestURI()).append(";")
                .append("Header=").append(JSON.toJSONString(allHeaders)).append(";")
                .append("Request Param=").append(JSON.toJSONString(allParams)).append(";");
        if ("post".equalsIgnoreCase(requestMethod)) {
            Object requestBody = getRequestBody(request);
            if (requestBody != null) {
                logSb.append("Request Body=");
            }
            if (requestBody instanceof String) {
                logSb.append(requestBody.toString());
            } else {
                logSb.append(JSON.toJSONString(requestBody));
            }
        }
        LOG.info(logSb.toString());
        return super.preHandle(request, response, handler);
    }

    private Object getAllHeaders(HttpServletRequest request) {
        Map<String, Object> headerMap = new HashMap<>();
        Enumeration<String> headerNames = request.getHeaderNames();
        while(headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request.getHeader(headerName);
            headerMap.put(headerName, headerValue);
        }
        return headerMap;
    }
    private Object getAllParams(HttpServletRequest request) {
        return request.getParameterMap();
    }
    private Object getRequestBody(HttpServletRequest request) {
        try {
            ServletInputStream inputStream = request.getInputStream();
            byte[] bytes = new byte[1024];
            int index = 0;
            StringBuffer sb = new StringBuffer();
            while(( index = inputStream.read(bytes, 0, bytes.length)) > 0) {
                sb.append(new String(bytes, 0, index, "utf-8"));
            }
            return sb.toString();
        } catch (Exception e) {
        	LOG.error("parse requestbody exception", e);
        }
        return "";
    }
}
