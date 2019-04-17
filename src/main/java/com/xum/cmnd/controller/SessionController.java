package com.xum.cmnd.controller;

import com.xum.cmnd.utils.RedisUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/*
* 1. redis-cli.exe
* 2. shutdown
* 3. exit
* 4. redis-server.exe redis.windows.conf
* */

@Controller
@RequestMapping(value = "/session")
public class SessionController {

    private static final Logger LOG = LogManager.getLogger(SessionController.class);

    @Autowired
    RedisUtil redisUtil;

    @RequestMapping(value="/index")
    public String index(HttpServletRequest request, ModelMap model){

        model.addAttribute("strSessionId", "");
        model.addAttribute("iPort", "");
        model.addAttribute("obj", "");

        return "session/index";
    }

}
