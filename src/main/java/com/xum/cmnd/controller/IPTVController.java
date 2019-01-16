package com.xum.cmnd.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xum.cmnd.iptv.IptvUtils;
import com.xum.cmnd.service.DevicesService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "HandleIPTV info", description = "IPTV API", tags = "IPTVApi", 
consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
@Controller
@RequestMapping(value = "/SmartInstall")
public class IPTVController {
	
	private static final Logger LOG = LogManager.getLogger(IPTVController.class);
	
	@Autowired
	private IptvUtils iptvUtils;
	
	@ApiOperation(value = "entry", notes = "all iptv info entry")
	@RequestMapping(value = "/webservices.jsp", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String iptv(@RequestBody String requestData, HttpServletRequest request, HttpServletResponse response) {
		String data = "";
		
		LOG.info("test=>/SmartInstall/webservices.jsp");
		LOG.info("requestData=" + requestData);
		
		String clientip = iptvUtils.getClientIp(requestData, request);
		LOG.info("clientip=" + clientip);
		data = iptvUtils.tvResponseDetails(requestData, clientip);
		
		/*if (null == request || null == response) {
            return "";
        }
        int req_server_port = request.getServerPort();
		StringBuilder sb = new StringBuilder();
	    
	    String requestHeader = "";// Building TV Response Details as String
		String jsonData = request.getParameter("jsonData");
		LOG.info("jsonData=" + jsonData);
		if (jsonData != null) {
			requestHeader = jsonData;
		} else {
			LOG.info("request.getContentType()=" + request.getContentType()+",ip="+request.getRemoteAddr().toString());		
			if("application/x-www-form-urlencoded".equalsIgnoreCase(request.getContentType())){
				
				Map m = request.getParameterMap();
				Set s = m.entrySet();
				Iterator it = s.iterator();

				while (it.hasNext()) {
					Map.Entry<String, String[]> entry = (Map.Entry<String, String[]>) it.next();
					requestHeader = entry.getKey();				
				}
				
			} else {
				LOG.error("getInputStream() has already been called for this request");
                try (BufferedReader reader = request.getReader();) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        sb.append(line).append('\n');
                    }
                } catch (IOException ix) {
                    LOG.error(ix.getMessage(), ix);
                }

				requestHeader = sb.toString();
			}		
		}
		LOG.info("requestHeader=" + requestHeader);*/
		
		return data;
	}
	
	@ApiOperation(value = "testIptv", notes = "test function", code = 201)
	@RequestMapping(value = "/index")
	public String index() {
		String view = "iptv/index";		
		LOG.info("test=>/SmartInstall/index");
		return view;
	}
	
}
